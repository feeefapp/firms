//! Firms server: SPA host, JSON API, MCP endpoint and AI agent (see docs/ARCHITECTURE.md).

mod agent;
mod analytics;
mod api;
mod auth;
mod chat;
mod config;
mod data;
mod db;
mod error;
mod firms;
mod gazetteer;
mod jobs;
mod live;
mod mcp;
mod oauth;
mod range;
mod state;
mod tools;
mod web;

use std::path::Path;
use std::time::Duration;

use axum::extract::Request;
use axum::http::{HeaderValue, Method, StatusCode, header};
use axum::middleware::Next;
use axum::response::{IntoResponse, Response};
use axum::routing::get;
use axum::{Json, Router};
use serde_json::json;
use tower_http::compression::CompressionLayer;
use tower_http::set_header::SetResponseHeaderLayer;
use tower_http::trace::TraceLayer;
use tracing_subscriber::EnvFilter;

use crate::config::Config;
use crate::state::AppState;

fn load_env() {
    if let Ok(p) = std::env::var("FIRMS_ENV_FILE") {
        let _ = dotenvy::from_path(p);
        return;
    }
    for p in [".env", "../.env"] {
        if Path::new(p).exists() {
            let _ = dotenvy::from_path(p);
            break;
        }
    }
}

/// Copy seed files (regions/*.json, benchmark.json, day/*) into the data dir when missing.
fn seed(from: &Path, to: &Path) -> std::io::Result<usize> {
    let mut n = 0;
    for sub in ["regions", "day"] {
        let src = from.join(sub);
        let Ok(rd) = std::fs::read_dir(&src) else { continue };
        std::fs::create_dir_all(to.join(sub))?;
        for e in rd.flatten() {
            let p = e.path();
            if !p.is_file() {
                continue;
            }
            let dst = to.join(sub).join(e.file_name());
            if !dst.exists() {
                let tmp = dst.with_extension("seeding");
                std::fs::copy(&p, &tmp)?;
                std::fs::rename(&tmp, &dst)?;
                n += 1;
            }
        }
    }
    let b = from.join("benchmark.json");
    let dst = to.join("benchmark.json");
    if b.is_file() && !dst.exists() {
        std::fs::copy(&b, &dst)?;
        n += 1;
    }
    Ok(n)
}

fn session_key(cfg: &Config) -> std::io::Result<Vec<u8>> {
    if let Some(k) = &cfg.session_key {
        if k.len() >= 32 {
            return Ok(k.clone());
        }
        tracing::warn!("FIRMS_SESSION_KEY is shorter than 32 bytes; using a generated key instead");
    }
    let path = cfg.data_dir.join("session.key");
    if let Ok(s) = std::fs::read_to_string(&path) {
        if let Ok(k) = hex::decode(s.trim()) {
            if k.len() >= 32 {
                return Ok(k);
            }
        }
    }
    let mut k = vec![0u8; 32];
    rand::RngCore::fill_bytes(&mut rand::thread_rng(), &mut k);
    std::fs::write(&path, hex::encode(&k))?;
    #[cfg(unix)]
    {
        use std::os::unix::fs::PermissionsExt as _;
        let _ = std::fs::set_permissions(&path, std::fs::Permissions::from_mode(0o600));
    }
    Ok(k)
}

async fn healthz(axum::extract::State(st): axum::extract::State<AppState>) -> Json<serde_json::Value> {
    let r = st.regions();
    Json(json!({
        "ok": true,
        "version": env!("CARGO_PKG_VERSION"),
        "regions": r.list.len(),
        "global_calibration": r.global_kind,
        "days": st.days.available(),
        "firms_key": st.cfg.map_key.is_some(),
        "oauth": !st.cfg.client_id.is_empty(),
    }))
}

/// CORS `*` for the MCP endpoint and the OAuth metadata / token / registration endpoints
/// ; answers preflights itself.
async fn cors(req: Request, next: Next) -> Response {
    let path = req.uri().path();
    let open = path == "/mcp" || path.starts_with("/.well-known/") || matches!(path, "/oauth/token" | "/oauth/register" | "/oauth/revoke");
    if !open {
        return next.run(req).await;
    }
    let mut res = if req.method() == Method::OPTIONS {
        StatusCode::NO_CONTENT.into_response()
    } else {
        next.run(req).await
    };
    let h = res.headers_mut();
    h.insert(header::ACCESS_CONTROL_ALLOW_ORIGIN, HeaderValue::from_static("*"));
    h.insert(header::ACCESS_CONTROL_ALLOW_METHODS, HeaderValue::from_static("GET, POST, DELETE, OPTIONS"));
    h.insert(
        header::ACCESS_CONTROL_ALLOW_HEADERS,
        HeaderValue::from_static("Authorization, Content-Type, Accept, Mcp-Session-Id, MCP-Protocol-Version, Mcp-Method, Mcp-Name, Last-Event-ID"),
    );
    h.insert(header::ACCESS_CONTROL_EXPOSE_HEADERS, HeaderValue::from_static("WWW-Authenticate, Mcp-Session-Id"));
    h.insert(header::ACCESS_CONTROL_MAX_AGE, HeaderValue::from_static("86400"));
    res
}

/// The client address: the right-most X-Forwarded-For entry (the one our proxy appended).
fn client_ip(req: &Request) -> String {
    req.headers()
        .get("x-forwarded-for")
        .and_then(|v| v.to_str().ok())
        .and_then(|v| v.rsplit(',').next())
        .map(|v| v.trim().to_owned())
        .filter(|v| !v.is_empty())
        .unwrap_or_else(|| "direct".into())
}

/// Per-IP limits on the endpoints that spend shared budgets (FIRMS calls, client registrations).
async fn limits(axum::extract::State(st): axum::extract::State<AppState>, req: Request, next: Next) -> Response {
    let path = req.uri().path();
    let rule = match path {
        "/api/hotspots" | "/api/live" | "/api/range" | "/api/day" => Some(("firms", 40, 60)),
        "/oauth/register" => Some(("register", 20, 3600)),
        "/oauth/token" => Some(("token", 120, 60)),
        "/mcp" | "/api/agent" => Some(("rpc", 240, 60)),
        _ => None,
    };
    if let Some((bucket, max, secs)) = rule {
        if !st.allow(&client_ip(&req), bucket, max, std::time::Duration::from_secs(secs)) {
            let mut res = (StatusCode::TOO_MANY_REQUESTS, Json(json!({ "error": { "code": "rate_limited", "message": "too many requests; slow down" } }))).into_response();
            res.headers_mut().insert(header::RETRY_AFTER, HeaderValue::from(secs.min(60)));
            return res;
        }
    }
    next.run(req).await
}

pub fn app(st: AppState) -> Router {
    Router::new()
        .route("/healthz", get(healthz))
        .merge(auth::routes())
        .merge(oauth::routes())
        .merge(chat::routes())
        .merge(api::routes())
        .merge(mcp::routes())
        .fallback(web::serve)
        .layer(axum::middleware::from_fn_with_state(st.clone(), limits))
        .with_state(st)
        .layer(CompressionLayer::new())
        .layer(SetResponseHeaderLayer::if_not_present(
            header::X_CONTENT_TYPE_OPTIONS,
            HeaderValue::from_static("nosniff"),
        ))
        .layer(SetResponseHeaderLayer::if_not_present(header::X_FRAME_OPTIONS, HeaderValue::from_static("DENY")))
        .layer(SetResponseHeaderLayer::if_not_present(
            header::CONTENT_SECURITY_POLICY,
            HeaderValue::from_static("frame-ancestors 'none'"),
        ))
        .layer(SetResponseHeaderLayer::if_not_present(
            header::REFERRER_POLICY,
            HeaderValue::from_static("strict-origin-when-cross-origin"),
        ))
        .layer(axum::middleware::from_fn(cors))
        .layer(TraceLayer::new_for_http())
}

/// Cached FIRMS answers older than 30 days are dropped once a day (keys are arbitrary boxes).
async fn evict_firms_cache(dir: std::path::PathBuf) {
    loop {
        if let Ok(mut rd) = tokio::fs::read_dir(&dir).await {
            let mut removed = 0u32;
            while let Ok(Some(e)) = rd.next_entry().await {
                let old = e
                    .metadata()
                    .await
                    .ok()
                    .and_then(|m| m.modified().ok())
                    .and_then(|m| m.elapsed().ok())
                    .is_some_and(|age| age > std::time::Duration::from_secs(30 * 86400));
                if old && tokio::fs::remove_file(e.path()).await.is_ok() {
                    removed += 1;
                }
            }
            if removed > 0 {
                tracing::info!(removed, "FIRMS cache: evicted old entries");
            }
        }
        tokio::time::sleep(std::time::Duration::from_secs(86400)).await;
    }
}

async fn shutdown() {
    let ctrl_c = async {
        let _ = tokio::signal::ctrl_c().await;
    };
    #[cfg(unix)]
    let term = async {
        if let Ok(mut s) = tokio::signal::unix::signal(tokio::signal::unix::SignalKind::terminate()) {
            s.recv().await;
        }
    };
    #[cfg(not(unix))]
    let term = std::future::pending::<()>();
    tokio::select! { () = ctrl_c => {}, () = term => {} }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    load_env();
    tracing_subscriber::fmt()
        .with_env_filter(
            EnvFilter::try_from_env("FIRMS_LOG").unwrap_or_else(|_| EnvFilter::new("info,tower_http=warn")),
        )
        .init();
    let cfg = Config::from_env();
    tracing::info!(config = ?cfg, "starting");
    for sub in ["regions", "day", "cache", "raw"] {
        std::fs::create_dir_all(cfg.data_dir.join(sub))?;
    }
    if let Some(seed_dir) = &cfg.seed_dir {
        match seed(seed_dir, &cfg.data_dir) {
            Ok(n) => tracing::info!(files = n, "seeded data dir"),
            Err(e) => tracing::warn!(%e, "seeding failed"),
        }
    }
    let key = session_key(&cfg)?;
    let db = db::Db::open(&cfg.data_dir.join("firms.db"))?;
    let bind = cfg.bind.clone();
    let st = AppState::new(cfg, db, key);
    {
        let r = st.regions();
        tracing::info!(count = r.list.len(), global = r.global_kind, "regions loaded");
    }
    let st2 = st.clone();
    tokio::spawn(async move {
        loop {
            let _ = st2.db.prune_sessions();
            let _ = st2.db.prune_oauth();
            tokio::time::sleep(Duration::from_secs(6 * 3600)).await;
        }
    });
    let listener = tokio::net::TcpListener::bind(&bind).await?;
    tracing::info!(%bind, "listening");
    tokio::spawn(evict_firms_cache(st.cfg.data_dir.join("cache").join("firms")));
    axum::serve(listener, app(st)).with_graceful_shutdown(shutdown()).await?;
    Ok(())
}
