//! The built SPA (FIRMS_WEB_DIR): static files, `index.html` fallback for client routes,
//! long-lived caching for hashed `/assets/*`, and a placeholder page when no build exists (dev).

use axum::body::Body;
use axum::extract::{Request, State};
use std::collections::HashMap;
use axum::http::{HeaderValue, StatusCode, header};
use axum::response::{Html, IntoResponse, Response};
use tower::ServiceExt as _;
use tower_http::services::{ServeDir, ServeFile};

use crate::state::AppState;

const PLACEHOLDER: &str = r#"<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>Firms</title>
<style>body{font:16px/1.5 system-ui,sans-serif;margin:0;padding:24px 16px;background:#111;color:#eee}a{color:#7ab7ff}
main{max-width:640px;margin:auto}code{background:#222;padding:2px 4px;border-radius:4px}</style></head>
<body><main><h1>Firms server</h1><p>The web build was not found (set <code>FIRMS_WEB_DIR</code> or run
<code>npm run build</code> in <code>web/</code>). The API is up:</p><ul>
<li><a href="/healthz">/healthz</a></li><li><a href="/api/algorithms">/api/algorithms</a></li>
<li><a href="/api/regions">/api/regions</a></li>
<li><a href="/api/calendar?region=punjab&amp;from=2025-01&amp;to=2026-10">/api/calendar?region=punjab&amp;from=2025-01&amp;to=2026-10</a></li>
<li><a href="/api/me">/api/me</a> · <a href="/auth/feeef/login">Sign in with feeef</a></li></ul></main></body></html>"#;

pub async fn serve(State(st): State<AppState>, req: Request) -> Response {
    let dir = st.cfg.web_dir.clone();
    let index = dir.join("index.html");
    if !index.exists() {
        return (StatusCode::OK, Html(PLACEHOLDER)).into_response();
    }
    let path = req.uri().path().to_owned();
    let assets = path.starts_with("/assets/");
    // Routes of the app (no file behind them): index.html with that route's head and content.
    let is_file = path != "/" && dir.join(path.trim_start_matches('/')).is_file();
    if !assets && !is_file && !path.contains("..") {
        if let Ok(html) = tokio::fs::read_to_string(&index).await {
            let q: HashMap<String, String> = url::form_urlencoded::parse(req.uri().query().unwrap_or("").as_bytes()).into_owned().collect();
            let page = crate::seo::page(&st, &path, q.get("hl").map(String::as_str));
            let html = render(&html, &page);
            let mut res = Html(html).into_response();
            res.headers_mut().insert(header::CACHE_CONTROL, HeaderValue::from_static("no-cache"));
            return res;
        }
    }
    // Hashed assets never fall back to index.html (a missing chunk must 404, not cache HTML forever).
    let res = if assets {
        ServeDir::new(&dir).oneshot(req).await.map(|r| r.map(Body::new).into_response())
    } else {
        ServeDir::new(&dir).fallback(ServeFile::new(&index)).oneshot(req).await.map(|r| r.map(Body::new).into_response())
    };
    let mut res = match res {
        Ok(r) => r,
        Err(e) => match e {},
    };
    let cache = if assets && res.status() == StatusCode::OK {
        "public, max-age=31536000, immutable"
    } else {
        "no-cache"
    };
    res.headers_mut().insert(header::CACHE_CONTROL, HeaderValue::from_static(cache));
    res
}

/// index.html with the route's `<head>` (between the `seo` markers), language and crawlable body.
fn render(html: &str, page: &crate::seo::Page) -> String {
    let mut out = html.replacen(r#"<html lang="ar" dir="rtl">"#, &format!(r#"<html lang="{}" dir="{}">"#, page.lang, page.dir), 1);
    if let (Some(a), Some(b)) = (out.find("<!--seo:start-->"), out.find("<!--seo:end-->")) {
        out.replace_range(a..b + "<!--seo:end-->".len(), &page.head);
    }
    out.replacen(r#"<div id="root"></div>"#, &format!(r#"<div id="root">{}</div>"#, page.body), 1)
}
