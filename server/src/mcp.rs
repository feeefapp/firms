//! MCP over Streamable HTTP, stateless: `POST /mcp` answers one JSON-RPC message with JSON
//! (`initialize`, `ping`, `tools/list`, `tools/call`); notifications get 202; GET/DELETE get 405.
//! Auth: `Authorization: Bearer firms_…` (personal API key) or a feeef access token.

use axum::extract::State;
use axum::http::{HeaderMap, StatusCode, header};
use axum::response::{IntoResponse, Response};
use axum::routing::post;
use axum::{Json, Router};
use serde_json::{Value, json};

use crate::auth;
use crate::state::AppState;
use crate::tools;

const VERSIONS: [&str; 3] = ["2025-11-25", "2025-06-18", "2025-03-26"];
const MAX_RESULT_BYTES: usize = 120_000;

const INSTRUCTIONS: &str = "Firms: a harmonized MODIS/VIIRS monthly fire calendar (Aqua-equivalent fire-days, 2001→now) for \
regions with a calibrated archive, plus live NASA FIRMS detections. Start with list_regions. Values are fire-days \
(2 km cell × local solar day), not raw FIRMS rows. ensemble_adaptive is the recommended algorithm; anomalies compare \
each month with the same calendar month 2003–2022. Region titles are Arabic; title_en is English.";

pub fn routes() -> Router<AppState> {
    Router::new().route("/mcp", post(handle).get(not_allowed).delete(not_allowed))
}

async fn not_allowed() -> Response {
    (StatusCode::METHOD_NOT_ALLOWED, [(header::ALLOW, "POST")]).into_response()
}

fn rpc_error(id: &Value, code: i64, message: &str) -> Response {
    Json(json!({ "jsonrpc": "2.0", "id": id, "error": { "code": code, "message": message } })).into_response()
}

fn unauthorized(msg: &str) -> Response {
    (
        StatusCode::UNAUTHORIZED,
        [(header::WWW_AUTHENTICATE, "Bearer realm=\"firms\"")],
        Json(json!({ "error": { "code": "unauthorized", "message": msg } })),
    )
        .into_response()
}

async fn handle(State(st): State<AppState>, headers: HeaderMap, body: axum::body::Bytes) -> Response {
    let token = headers
        .get(header::AUTHORIZATION)
        .and_then(|v| v.to_str().ok())
        .and_then(|v| v.split_once(' '))
        .filter(|(s, _)| s.eq_ignore_ascii_case("bearer"))
        .map(|(_, t)| t.trim().to_owned());
    let Some(token) = token else {
        return unauthorized("Authorization: Bearer <firms_ API key or feeef access token> required");
    };
    let principal = match auth::principal_from_bearer(&st, &token).await {
        Ok(p) => p,
        Err(crate::error::AppError::Unauthorized) => return unauthorized("invalid or expired token"),
        Err(e) => return e.into_response(),
    };
    let Ok(message) = serde_json::from_slice::<Value>(&body) else {
        return rpc_error(&Value::Null, -32700, "Parse error");
    };
    if message.is_array() {
        return rpc_error(&Value::Null, -32600, "Batches are not supported");
    }
    if message.get("id").is_none() {
        return StatusCode::ACCEPTED.into_response();
    }
    let id = message["id"].clone();
    let method = message.get("method").and_then(Value::as_str).unwrap_or_default();
    let params = message.get("params").cloned().unwrap_or(Value::Null);
    let result = match method {
        "initialize" => {
            let asked = params.get("protocolVersion").and_then(Value::as_str).unwrap_or_default();
            let version = VERSIONS.iter().find(|v| **v == asked).copied().unwrap_or(VERSIONS[0]);
            json!({
                "protocolVersion": version,
                "capabilities": { "tools": { "listChanged": false } },
                "serverInfo": { "name": "firms", "title": "Firms fire calendar", "version": env!("CARGO_PKG_VERSION") },
                "instructions": INSTRUCTIONS,
            })
        }
        "ping" => json!({}),
        "tools/list" => json!({
            "tools": tools::definitions().into_iter().map(|(name, description, schema)| json!({
                "name": name, "description": description, "inputSchema": schema,
            })).collect::<Vec<_>>()
        }),
        "tools/call" => {
            let name = params.get("name").and_then(Value::as_str).unwrap_or_default();
            if !tools::definitions().iter().any(|(n, _, _)| *n == name) {
                return rpc_error(&id, -32602, &format!("Unknown tool: {name}"));
            }
            let args = params.get("arguments").cloned().unwrap_or_else(|| json!({}));
            match tools::call(&st, Some(&principal), name, &args).await {
                Ok(v) => tool_ok(v),
                Err(e) => json!({ "content": [{ "type": "text", "text": e.to_string() }], "isError": true }),
            }
        }
        _ => return rpc_error(&id, -32601, "Method not found"),
    };
    Json(json!({ "jsonrpc": "2.0", "id": id, "result": result })).into_response()
}

fn tool_ok(value: Value) -> Value {
    let mut text = value.to_string();
    if text.len() > MAX_RESULT_BYTES {
        let mut cut = MAX_RESULT_BYTES;
        while !text.is_char_boundary(cut) {
            cut -= 1;
        }
        text.truncate(cut);
        text.push_str("… (cut: narrow the query)");
    }
    let mut r = json!({ "content": [{ "type": "text", "text": text }], "isError": false });
    if value.is_object() {
        r["structuredContent"] = value;
    }
    r
}
