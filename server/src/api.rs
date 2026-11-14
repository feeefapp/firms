//! JSON API under /api (see docs/ARCHITECTURE.md).

use std::collections::HashMap;

use axum::extract::{Path, Query, State};
use axum::http::{StatusCode, header};
use axum::response::{IntoResponse, Response};
use axum::routing::{delete, get, post};
use axum::{Json, Router};
use serde::Deserialize;
use serde_json::{Value, json};

use crate::auth::{User, random_token, sha256_hex};
use crate::data::{self, BaselineKind};
use crate::error::{AppError, AppResult};
use crate::state::AppState;
use crate::{agent, firms, jobs, live, tools};

type Q = Query<HashMap<String, String>>;

pub fn routes() -> Router<AppState> {
    Router::new()
        .route("/api/algorithms", get(algorithms))
        .route("/api/regions", get(regions).post(create_region))
        .route("/api/regions/{name}", get(region))
        .route("/api/calendar", get(calendar))
        .route("/api/compare", get(compare))
        .route("/api/benchmark", get(benchmark))
        .route("/api/hotspots", get(hotspots))
        .route("/api/live", get(live_handler))
        .route("/api/day", get(day))
        .route("/api/days", get(days))
        .route("/api/jobs/{id}", get(job))
        .route("/api/keys", get(list_keys).post(create_key))
        .route("/api/keys/{id}", delete(delete_key))
        .route("/api/agent", post(agent::handler))
        .route("/api/{*rest}", get(not_found).post(not_found).put(not_found).delete(not_found))
}

fn q<'a>(m: &'a HashMap<String, String>, k: &str) -> Option<&'a str> {
    m.get(k).map(String::as_str).map(str::trim).filter(|s| !s.is_empty())
}

fn json_bytes(b: impl Into<axum::body::Body>, cache: &'static str) -> Response {
    (
        [(header::CONTENT_TYPE, "application/json; charset=utf-8"), (header::CACHE_CONTROL, cache)],
        b.into(),
    )
        .into_response()
}

async fn not_found() -> AppError {
    AppError::NotFound("no such API route".into())
}

async fn algorithms() -> Json<Value> {
    Json(data::algorithms_json())
}

async fn regions(State(st): State<AppState>) -> Json<Value> {
    Json(json!(st.regions().list.iter().map(|r| r.summary_json()).collect::<Vec<_>>()))
}

async fn region(State(st): State<AppState>, Path(name): Path<String>) -> AppResult<Response> {
    let r = st.regions().get(&name)?;
    let bytes = tokio::fs::read(&r.path).await?;
    Ok(json_bytes(bytes, "public, max-age=300"))
}

#[derive(Deserialize)]
struct NewRegion {
    name: String,
    #[serde(default)]
    title: Option<String>,
    country: String,
    bbox: Value,
}

async fn create_region(State(st): State<AppState>, User(p): User, Json(b): Json<NewRegion>) -> AppResult<Response> {
    let bbox = data::parse_bbox(&tools::str_arg(&json!({ "bbox": b.bbox }), "bbox").unwrap_or_default())?;
    if st.regions().get(&b.name).is_ok() {
        return Err(AppError::Conflict(format!("region {:?} already exists", b.name)));
    }
    let job = jobs::build_region(&st, &p.user_id, &b.name, b.title.as_deref(), &b.country, &bbox)?;
    Ok((StatusCode::ACCEPTED, Json(json!({ "job": job }))).into_response())
}

async fn calendar(State(st): State<AppState>, Query(m): Q) -> AppResult<Json<Value>> {
    let r = st.regions().get(q(&m, "region").ok_or_else(|| AppError::bad("region is required"))?)?;
    let alg = q(&m, "algorithm").unwrap_or(data::DEFAULT_ALGORITHM);
    let b = BaselineKind::parse(q(&m, "baseline"))?;
    Ok(Json(data::calendar(&r, q(&m, "from"), q(&m, "to"), alg, b)?))
}

async fn compare(State(st): State<AppState>, Query(m): Q) -> AppResult<Json<Value>> {
    let r = st.regions().get(q(&m, "region").ok_or_else(|| AppError::bad("region is required"))?)?;
    let algs = tools::parse_algs(q(&m, "algorithms"));
    Ok(Json(data::compare(&r, Some(q(&m, "from").unwrap_or("2001-01")), q(&m, "to"), &algs)?))
}

async fn benchmark(State(st): State<AppState>) -> AppResult<Response> {
    let b = tokio::fs::read(st.cfg.data_dir.join("benchmark.json")).await?;
    Ok(json_bytes(b, "public, max-age=300"))
}

async fn hotspots(State(st): State<AppState>, Query(m): Q) -> AppResult<Response> {
    let parse_num = |k: &str| -> AppResult<Option<f64>> {
        q(&m, k).map(|v| v.parse::<f64>().map_err(|_| AppError::bad(format!("{k} must be a number")))).transpose()
    };
    let query = firms::HotspotQuery::parse(
        q(&m, "bbox"),
        q(&m, "date"),
        parse_num("days")?.map(|d| d as u32),
        q(&m, "sources"),
        parse_num("min_conf")?.map(|d| d as u8),
        parse_num("min_frp")?,
    )?;
    let rows = firms::hotspots(&st, &query).await?;
    match q(&m, "format").unwrap_or("json") {
        "csv" => Ok((
            [
                (header::CONTENT_TYPE, "text/csv; charset=utf-8".to_owned()),
                (
                    header::CONTENT_DISPOSITION,
                    format!("attachment; filename=\"hotspots_{}_{}d.csv\"", query.date, query.days),
                ),
            ],
            firms::to_csv(&rows),
        )
            .into_response()),
        "json" => Ok(Json(json!({
            "bbox": query.bbox,
            "date": query.date.to_string(),
            "days": query.days,
            "sources": query.sources,
            "min_conf": query.min_conf,
            "min_frp": query.min_frp,
            "count": rows.len(),
            "rows": rows,
        }))
        .into_response()),
        _ => Err(AppError::bad("format must be json or csv")),
    }
}

async fn live_handler(State(st): State<AppState>, Query(m): Q) -> AppResult<Json<Value>> {
    let bb = match (q(&m, "bbox"), q(&m, "region")) {
        (Some(b), _) => data::parse_bbox(b)?,
        (None, Some(r)) => st.regions().get(r)?.bbox,
        (None, None) => return Err(AppError::bad("bbox (W,S,E,N) or region is required")),
    };
    Ok(Json(live::live(&st, bb, q(&m, "date")).await?))
}

async fn day(State(st): State<AppState>, Query(m): Q) -> AppResult<Response> {
    let date = match q(&m, "date") {
        Some(d) => firms::parse_date(Some(d))?,
        None => st.days.latest().ok_or_else(|| AppError::NotFound("no globe snapshot yet".into()))?,
    };
    if let Some(b) = st.days.json(date).await? {
        return Ok(json_bytes(b, "public, max-age=3600"));
    }
    let today = chrono::Utc::now().date_naive();
    if date >= today || date < today - chrono::Duration::days(60) {
        return Err(AppError::NotFound(format!(
            "no snapshot for {date}; snapshots can be built for the last 60 days (before today)"
        )));
    }
    if st.cfg.map_key.is_none() {
        return Err(AppError::Unavailable("no snapshot and FIRMS_MAP_KEY is not configured".into()));
    }
    let job = jobs::build_day(&st, date)?;
    Ok((StatusCode::ACCEPTED, Json(json!({ "job": job, "date": date.to_string() }))).into_response())
}

async fn days(State(st): State<AppState>) -> Json<Value> {
    Json(json!({ "dates": st.days.available() }))
}

async fn job(State(st): State<AppState>, Path(id): Path<String>) -> AppResult<Json<Value>> {
    Ok(Json(jobs::get(&st, &id)?))
}

async fn list_keys(State(st): State<AppState>, User(p): User) -> AppResult<Json<Value>> {
    Ok(Json(json!({ "keys": st.db.keys(&p.user_id)? })))
}

#[derive(Deserialize, Default)]
struct NewKey {
    #[serde(default)]
    name: Option<String>,
}

async fn create_key(State(st): State<AppState>, User(p): User, body: Option<Json<NewKey>>) -> AppResult<Response> {
    let name = body
        .and_then(|Json(b)| b.name)
        .map(|n| n.trim().chars().take(60).collect::<String>())
        .filter(|n| !n.is_empty())
        .unwrap_or_else(|| "API key".into());
    if st.db.keys(&p.user_id)?.len() >= 20 {
        return Err(AppError::bad("at most 20 keys per user; delete one first"));
    }
    let token = format!("firms_{}", random_token(32));
    let id = format!("key_{}", random_token(9).replace(['-', '_'], "x"));
    let prefix: String = token.chars().take(12).collect();
    st.db.insert_key(&id, &p.user_id, &name, &prefix, &sha256_hex(&token))?;
    Ok((
        StatusCode::CREATED,
        Json(json!({
            "key": { "id": id, "name": name, "prefix": prefix, "created_at": crate::db::now(), "last_used_at": null },
            "token": token,
        })),
    )
        .into_response())
}

async fn delete_key(State(st): State<AppState>, User(p): User, Path(id): Path<String>) -> AppResult<Json<Value>> {
    if !st.db.delete_key(&p.user_id, &id)? {
        return Err(AppError::NotFound("unknown key".into()));
    }
    Ok(Json(json!({ "ok": true })))
}
