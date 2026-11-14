//! MCP over Streamable HTTP (docs/AGENT_MCP.md §2), dual-era:
//!
//! - 2026-07-28 (modern, stateless): every request carries `_meta` protocol version + client
//!   capabilities; `server/discover`; results carry `resultType`; elicitation through MRTR
//!   (`resultType:"input_required"`, `inputRequests`, HMAC-protected `requestState`).
//! - 2025-11-25 / 2025-06-18 / 2025-03-26 (legacy): `initialize` handshake; the negotiated version and
//!   client capabilities live in a signed `Mcp-Session-Id`; when the client declared `elicitation`,
//!   `tools/call` answers with an SSE stream carrying `elicitation/create`, the client POSTs the answer
//!   (202) and the final result follows on the stream; otherwise a text fallback.
//!
//! Auth: `Authorization: Bearer` with a Firms OAuth access token (`firms_at_`), a personal API key
//! (`firms_…`) or a feeef access token; 401 carries `WWW-Authenticate` with the resource metadata URL.

use std::convert::Infallible;
use std::time::Duration;

use axum::extract::State;
use axum::http::{HeaderMap, HeaderValue, StatusCode, header};
use axum::response::sse::{Event, KeepAlive, Sse};
use axum::response::{IntoResponse, Response};
use axum::routing::post;
use axum::{Json, Router};
use base64::Engine as _;
use base64::engine::general_purpose::URL_SAFE_NO_PAD as B64;
use serde_json::{Map, Value, json};
use tokio::sync::{mpsc, oneshot};
use tokio_stream::wrappers::ReceiverStream;

use crate::auth::{self, Principal};
use crate::error::AppError;
use crate::state::{AppState, lock};
use crate::tools::{self, CALENDAR_WIDGET, HOTSPOTS_WIDGET, NEEDS_REGION, Tool};
use crate::{data, gazetteer, oauth};

pub const MODERN: &str = "2026-07-28";
pub const LEGACY: [&str; 3] = ["2025-11-25", "2025-06-18", "2025-03-26"];
pub const SUPPORTED: [&str; 4] = [MODERN, "2025-11-25", "2025-06-18", "2025-03-26"];
const MAX_RESULT_BYTES: usize = 120_000;
const ELICIT_TIMEOUT: Duration = Duration::from_secs(600);
const MRTR_TTL: i64 = 600;
const APP_MIME: &str = "text/html;profile=mcp-app";
const CALENDAR_HTML: &str = include_str!("../assets/calendar-v1.html");
const HOTSPOTS_HTML: &str = include_str!("../assets/hotspots-v1.html");

const INSTRUCTIONS: &str = "Firms: a harmonized MODIS/VIIRS monthly fire calendar (Aqua-equivalent fire-days, 2001→now) for \
calibrated regions, plus live NASA FIRMS detections. Resolve place names with find_region, then use get_calendar / \
get_anomalies / get_trend / seasonal_profile / rank_regions. Values are fire-days (2 km cell × local solar day), not raw \
FIRMS rows. ensemble_adaptive is the recommended algorithm (≈10% monthly error, ~7% noise floor); anomalies compare a \
month with the same calendar month 2003–2022. Region titles are Arabic; title_en is English. Cite numbers from tool \
results only.";

const KNOWN_ORIGINS: &[&str] = &[
    "https://claude.ai",
    "https://www.claude.ai",
    "https://claude.com",
    "https://chatgpt.com",
    "https://chat.openai.com",
    "https://cursor.com",
    "https://www.cursor.com",
    "https://vscode.dev",
    "https://insiders.vscode.dev",
    "https://inspector.modelcontextprotocol.io",
];

pub fn routes() -> Router<AppState> {
    Router::new().route("/mcp", post(handle).get(not_allowed).delete(delete_session))
}

async fn not_allowed() -> Response {
    (StatusCode::METHOD_NOT_ALLOWED, [(header::ALLOW, "POST, DELETE")]).into_response()
}

/// Sessions are stateless (signed); DELETE just acknowledges.
async fn delete_session() -> Response {
    StatusCode::NO_CONTENT.into_response()
}

fn rpc_error(id: &Value, code: i64, message: &str, data: Option<Value>) -> Response {
    let mut e = json!({ "code": code, "message": message });
    if let Some(d) = data {
        e["data"] = d;
    }
    Json(json!({ "jsonrpc": "2.0", "id": id, "error": e })).into_response()
}

fn unauthorized(st: &AppState, msg: &str, invalid: bool) -> Response {
    let mut r = (StatusCode::UNAUTHORIZED, Json(json!({ "error": { "code": "unauthorized", "message": msg } }))).into_response();
    if let Ok(v) = HeaderValue::from_str(&oauth::www_authenticate(st, invalid.then_some("invalid_token"))) {
        r.headers_mut().insert(header::WWW_AUTHENTICATE, v);
    }
    r
}

pub fn origin_allowed(st: &AppState, origin: &str) -> bool {
    let o = origin.trim().trim_end_matches('/').to_ascii_lowercase();
    if o == "null" || o.is_empty() {
        return false;
    }
    if auth::origin_of(&st.cfg.public_origin).as_deref() == Some(o.as_str())
        || st.cfg.extra_origins.contains(&o)
        || st.cfg.mcp_origins.contains(&o)
        || KNOWN_ORIGINS.contains(&o.as_str())
    {
        return true;
    }
    url::Url::parse(&o)
        .ok()
        .is_some_and(|u| matches!(u.host_str(), Some("localhost" | "127.0.0.1" | "[::1]")))
}

// ------------------------------------------------------------------ signed blobs

fn sign_blob(key: &[u8], v: &Value) -> String {
    let payload = B64.encode(v.to_string());
    format!("{payload}.{}", auth::sign(key, &payload))
}

fn open_blob(key: &[u8], s: &str) -> Option<Value> {
    let (payload, sig) = s.split_once('.')?;
    if !auth::verify(key, payload, sig) {
        return None;
    }
    serde_json::from_slice(&B64.decode(payload).ok()?).ok()
}

fn args_digest(args: &Value) -> String {
    // serde_json maps are BTreeMaps: the serialization is canonical (sorted keys).
    auth::sha256_hex(&args.to_string())
}

/// MRTR `requestState`: bound to the principal, the tool, a digest of its arguments and a TTL.
pub fn mrtr_state(key: &[u8], user: &str, tool: &str, args: &Value, kind: &str, exp: i64) -> String {
    sign_blob(key, &json!({ "u": user, "t": tool, "d": args_digest(args), "k": kind, "e": exp, "n": auth::random_token(8) }))
}

/// The input kind when the state is authentic, fresh and presented for the same principal/tool/args.
pub fn mrtr_verify(key: &[u8], state: &str, user: &str, tool: &str, args: &Value, now: i64) -> Result<String, &'static str> {
    let v = open_blob(key, state).ok_or("requestState failed verification")?;
    if v["e"].as_i64().unwrap_or(0) < now {
        return Err("requestState expired");
    }
    if v["u"].as_str() != Some(user) {
        return Err("requestState belongs to another principal");
    }
    if v["t"].as_str() != Some(tool) || v["d"].as_str() != Some(args_digest(args).as_str()) {
        return Err("requestState does not match this request");
    }
    Ok(v["k"].as_str().unwrap_or("").to_owned())
}

#[derive(Debug, Clone, Default)]
pub struct Ctx {
    pub version: String,
    pub modern: bool,
    pub elicitation: bool,
    pub ui: bool,
    pub session: Option<String>,
}

impl Ctx {
    fn at_least(&self, v: &str) -> bool {
        self.modern || self.version.as_str() >= v
    }
}

fn session_id(key: &[u8], ctx: &Ctx, user: &str) -> String {
    sign_blob(key, &json!({ "v": ctx.version, "el": ctx.elicitation, "ui": ctx.ui, "u": user, "iat": crate::db::now() }))
}

fn has_ui_ext(caps: &Value) -> bool {
    caps.get("extensions").and_then(|e| e.get("io.modelcontextprotocol/ui")).is_some()
}

// ------------------------------------------------------------------ handler

async fn handle(State(st): State<AppState>, headers: HeaderMap, body: axum::body::Bytes) -> Response {
    if let Some(o) = headers.get(header::ORIGIN).and_then(|v| v.to_str().ok()) {
        if !origin_allowed(&st, o) {
            return (StatusCode::FORBIDDEN, Json(json!({ "error": { "code": "forbidden", "message": "origin not allowed" } }))).into_response();
        }
    }
    let token = headers
        .get(header::AUTHORIZATION)
        .and_then(|v| v.to_str().ok())
        .and_then(|v| v.split_once(' '))
        .filter(|(s, _)| s.eq_ignore_ascii_case("bearer"))
        .map(|(_, t)| t.trim().to_owned())
        .filter(|t| !t.is_empty());
    let Some(token) = token else {
        return unauthorized(&st, "authorization required (OAuth, a firms_ API key or a feeef access token)", false);
    };
    let principal = match auth::principal_from_bearer(&st, &token).await {
        Ok(p) => p,
        Err(AppError::Unauthorized) => return unauthorized(&st, "invalid or expired token", true),
        Err(e) => return e.into_response(),
    };
    let Ok(message) = serde_json::from_slice::<Value>(&body) else {
        return rpc_error(&Value::Null, -32700, "Parse error", None);
    };
    if message.is_array() {
        return rpc_error(&Value::Null, -32600, "Batches are not supported", None);
    }
    // A client response (elicitation answer on the 2025 SSE flow).
    if message.get("method").is_none() {
        if let Some(id) = message.get("id").map(|i| i.as_str().map_or_else(|| i.to_string(), str::to_owned)) {
            let pending = lock(&st.mcp_pending).remove(&id);
            if let Some((user, tx)) = pending {
                if user == principal.user_id {
                    let answer = message.get("result").cloned().unwrap_or_else(|| json!({ "action": "cancel" }));
                    let _ = tx.send(answer);
                } else {
                    lock(&st.mcp_pending).insert(id, (user, tx));
                }
            }
        }
        return StatusCode::ACCEPTED.into_response();
    }
    if message.get("id").is_none() {
        return StatusCode::ACCEPTED.into_response();
    }
    let id = message["id"].clone();
    let method = message["method"].as_str().unwrap_or_default().to_owned();
    let params = message.get("params").cloned().unwrap_or(Value::Null);
    let session_key = st.key_for("mcp-session");

    // ---- era / version / capabilities
    let meta = &params["_meta"];
    let header_version = headers.get("mcp-protocol-version").and_then(|v| v.to_str().ok()).map(str::to_owned);
    let mut ctx = Ctx::default();
    if method == "initialize" {
        let asked = params["protocolVersion"].as_str().unwrap_or_default();
        ctx.version = LEGACY.iter().find(|v| **v == asked).copied().unwrap_or(LEGACY[0]).to_owned();
        let caps = &params["capabilities"];
        ctx.elicitation = caps.get("elicitation").is_some() && ctx.version.as_str() >= "2025-06-18";
        ctx.ui = has_ui_ext(caps);
        ctx.session = Some(session_id(&session_key, &ctx, &principal.user_id));
    } else if let Some(v) = meta.get("io.modelcontextprotocol/protocolVersion").and_then(Value::as_str) {
        if !SUPPORTED.contains(&v) {
            return rpc_error(&id, -32022, "Unsupported protocol version", Some(json!({ "supported": SUPPORTED, "requested": v })));
        }
        ctx.version = v.to_owned();
        ctx.modern = v == MODERN;
        let caps = &meta["io.modelcontextprotocol/clientCapabilities"];
        ctx.elicitation = caps.get("elicitation").is_some();
        ctx.ui = has_ui_ext(caps);
    } else if header_version.as_deref() == Some(MODERN) {
        ctx.version = MODERN.into();
        ctx.modern = true;
    } else {
        let sess = headers.get("mcp-session-id").and_then(|v| v.to_str().ok()).and_then(|s| open_blob(&session_key, s));
        match sess.filter(|s| s["u"].as_str() == Some(principal.user_id.as_str())) {
            Some(s) => {
                ctx.version = s["v"].as_str().unwrap_or(LEGACY[0]).to_owned();
                ctx.elicitation = s["el"].as_bool().unwrap_or(false);
                ctx.ui = s["ui"].as_bool().unwrap_or(false);
            }
            None => {
                ctx.version = header_version.filter(|v| LEGACY.contains(&v.as_str())).unwrap_or_else(|| "2025-03-26".into());
            }
        }
    }

    let result: Result<Value, Response> = match method.as_str() {
        "initialize" => Ok(json!({
            "protocolVersion": ctx.version,
            "capabilities": capabilities(false),
            "serverInfo": server_info(),
            "instructions": INSTRUCTIONS,
        })),
        "server/discover" => Ok(json!({
            "supportedVersions": SUPPORTED,
            "capabilities": capabilities(true),
            "instructions": INSTRUCTIONS,
            "ttlMs": 3_600_000,
            "cacheScope": "public",
        })),
        "ping" | "logging/setLevel" => Ok(json!({})),
        "tools/list" => Ok(cacheable(json!({ "tools": tools::mcp_tools(&st).iter().map(Tool::mcp_json).collect::<Vec<_>>() }))),
        "tools/call" => match tools_call(&st, &principal, &ctx, &id, &params).await {
            Call::Done(v) => Ok(v),
            Call::Raw(r) => return with_session(r, &ctx),
        },
        "resources/list" => Ok(cacheable(json!({ "resources": resources_list(&st) }))),
        "resources/templates/list" => Ok(cacheable(json!({ "resourceTemplates": resource_templates() }))),
        "resources/read" => {
            let uri = params["uri"].as_str().unwrap_or_default();
            match resource_read(&st, uri, &principal).await {
                Ok(v) => Ok(cacheable(v)),
                Err(msg) => Err(rpc_error(&id, if ctx.modern { -32602 } else { -32002 }, &msg, Some(json!({ "uri": uri })))),
            }
        }
        "prompts/list" => Ok(cacheable(json!({ "prompts": prompts_list() }))),
        "prompts/get" => prompt_get(&st, &params).map_err(|m| rpc_error(&id, -32602, &m, None)),
        "completion/complete" => Ok(completion(&st, &params)),
        _ => Err(rpc_error(&id, -32601, "Method not found", None)),
    };
    let res = match result {
        Ok(mut v) => {
            strip_cache_fields(&mut v, &ctx);
            if ctx.modern {
                finish_modern(&mut v);
            }
            Json(json!({ "jsonrpc": "2.0", "id": id, "result": v })).into_response()
        }
        Err(r) => r,
    };
    with_session(res, &ctx)
}

fn with_session(mut r: Response, ctx: &Ctx) -> Response {
    if let Some(s) = &ctx.session {
        if let Ok(v) = HeaderValue::from_str(s) {
            r.headers_mut().insert("mcp-session-id", v);
        }
    }
    r
}

fn server_info() -> Value {
    json!({ "name": "firms", "title": "Firms fire calendar", "version": env!("CARGO_PKG_VERSION"), "websiteUrl": "https://firms.apps.feeef.dev" })
}

fn capabilities(modern: bool) -> Value {
    let mut c = json!({
        "tools": { "listChanged": false },
        "resources": { "listChanged": false, "subscribe": false },
        "prompts": { "listChanged": false },
        "completions": {},
    });
    if modern {
        c["extensions"] = json!({ "io.modelcontextprotocol/ui": { "mimeTypes": [APP_MIME] } });
    }
    c
}

fn cacheable(mut v: Value) -> Value {
    v["ttlMs"] = json!(300_000);
    v["cacheScope"] = json!("private");
    v
}

fn finish_modern(v: &mut Value) {
    if v.get("resultType").is_none() {
        v["resultType"] = json!("complete");
    }
    if !v["_meta"].is_object() {
        v["_meta"] = json!({});
    }
    v["_meta"]["io.modelcontextprotocol/serverInfo"] = server_info();
}

fn strip_cache_fields(v: &mut Value, ctx: &Ctx) {
    if !ctx.modern {
        if let Some(m) = v.as_object_mut() {
            m.remove("ttlMs");
            m.remove("cacheScope");
        }
    }
}

// ------------------------------------------------------------------ tools/call

enum Call {
    Done(Value),
    Raw(Response),
}

/// What a tool call is missing before it can run.
#[derive(Debug, Clone)]
pub struct Need {
    pub key: &'static str,
    pub kind: &'static str,
}

pub fn need_for(name: &str, args: &Value) -> Option<Need> {
    if NEEDS_REGION.contains(&name) && tools::str_arg(args, "region").is_none() {
        return Some(Need { key: "region", kind: "region" });
    }
    if name == "build_region" {
        return Some(Need { key: "confirm_build", kind: "confirm" });
    }
    None
}

/// `elicitation/create` params (form mode) for a need.
pub fn elicit_params(st: &AppState, need: &Need, args: &Value, titled: bool) -> Value {
    let mut p = match need.kind {
        "region" => {
            let choices = tools::region_choices(st);
            let field = if titled {
                json!({ "type": "string", "title": "Region · المنطقة", "oneOf": choices.iter().map(|(v, t)| json!({ "const": v, "title": t })).collect::<Vec<_>>() })
            } else {
                json!({ "type": "string", "title": "Region · المنطقة", "enum": choices.iter().map(|c| c.0.clone()).collect::<Vec<_>>(), "enumNames": choices.iter().map(|c| c.1.clone()).collect::<Vec<_>>() })
            };
            json!({
                "message": "Which region? · أي منطقة؟",
                "requestedSchema": { "type": "object", "properties": { "region": field }, "required": ["region"] },
            })
        }
        _ => {
            let country = tools::str_arg(args, "country").unwrap_or_default();
            let mut countries: Vec<(String, String)> = gazetteer::COUNTRIES.iter().map(|c| (c.firms.to_owned(), format!("{} — {}", c.en, c.ar))).collect();
            if !country.is_empty() && !countries.iter().any(|c| c.0 == country) {
                countries.insert(0, (country.clone(), country.replace('_', " ")));
            }
            let country_field = if titled {
                json!({ "type": "string", "title": "Country (FIRMS) · الدولة", "oneOf": countries.iter().map(|(v, t)| json!({ "const": v, "title": t })).collect::<Vec<_>>() })
            } else {
                json!({ "type": "string", "title": "Country (FIRMS) · الدولة", "enum": countries.iter().map(|c| c.0.clone()).collect::<Vec<_>>(), "enumNames": countries.iter().map(|c| c.1.clone()).collect::<Vec<_>>() })
            };
            let mut country_field = country_field;
            if !country.is_empty() {
                country_field["default"] = json!(country);
            }
            let name = tools::str_arg(args, "name").unwrap_or_default();
            let title = tools::str_arg(args, "title").unwrap_or_default();
            let bbox = tools::str_arg(args, "bbox").unwrap_or_default();
            json!({
                "message": "Start building a new region? It downloads the FIRMS archives (2001→now) and takes minutes to hours. · هل تريد بدء بناء منطقة جديدة؟",
                "requestedSchema": { "type": "object", "properties": {
                    "name": { "type": "string", "title": "Id (a-z, 0-9, _ -)", "default": name, "minLength": 1, "maxLength": 40 },
                    "title": { "type": "string", "title": "Title · العنوان", "default": title, "maxLength": 80 },
                    "country": country_field,
                    "bbox": { "type": "string", "title": "BBox W,S,E,N", "default": bbox },
                    "confirm": { "type": "boolean", "title": "Start the build · ابدأ البناء", "default": true },
                }, "required": ["name", "country", "bbox"] },
            })
        }
    };
    if titled {
        p["mode"] = json!("form");
    }
    p
}

pub enum Answer {
    Args(Value),
    Cancelled(String),
}

/// Merge an elicitation result into the tool arguments.
pub fn apply_answer(kind: &str, args: &Value, answer: &Value) -> Answer {
    if answer["action"].as_str() != Some("accept") {
        return Answer::Cancelled(format!("The user did not confirm ({}).", answer["action"].as_str().unwrap_or("cancel")));
    }
    let c = &answer["content"];
    let mut a = if args.is_object() { args.clone() } else { json!({}) };
    match kind {
        "region" => match c["region"].as_str() {
            Some(r) => {
                a["region"] = json!(r);
                Answer::Args(a)
            }
            None => Answer::Cancelled("No region was chosen.".into()),
        },
        _ => {
            if c["confirm"].as_bool() == Some(false) {
                return Answer::Cancelled("The user did not start the build.".into());
            }
            for k in ["name", "title", "country", "bbox"] {
                if let Some(v) = c.get(k).filter(|v| v.as_str().is_some_and(|s| !s.trim().is_empty())) {
                    a[k] = v.clone();
                }
            }
            a["_confirmed"] = json!(true);
            Answer::Args(a)
        }
    }
}

fn text_result(text: &str, is_error: bool) -> Value {
    json!({ "content": [{ "type": "text", "text": text }], "isError": is_error })
}

fn truncate(mut s: String, n: usize) -> String {
    if s.len() > n {
        let mut cut = n;
        while !s.is_char_boundary(cut) {
            cut -= 1;
        }
        s.truncate(cut);
        s.push_str("… (cut: narrow the query)");
    }
    s
}

fn tool_result(tool: &Tool, out: tools::Output, ctx: &Ctx) -> Value {
    let mut content = vec![json!({ "type": "text", "text": out.text })];
    content.push(json!({ "type": "text", "text": truncate(out.structured.to_string(), MAX_RESULT_BYTES) }));
    if ctx.at_least("2025-06-18") {
        content.extend(out.links);
    }
    let mut r = json!({ "content": content, "isError": false });
    if ctx.at_least("2025-06-18") {
        r["structuredContent"] = out.structured;
    }
    if let Some(m) = tool.meta() {
        r["_meta"] = m;
    }
    r
}

async fn run_tool(st: &AppState, p: &Principal, tool: &Tool, args: &Value, ctx: &Ctx) -> Value {
    let mut a = args.clone();
    if let Some(m) = a.as_object_mut() {
        m.remove("_confirmed");
    }
    match tools::call(st, Some(p), tool.name, &a).await {
        Ok(out) => tool_result(tool, out, ctx),
        Err(e) => text_result(&e.to_string(), true),
    }
}

fn region_fallback(st: &AppState, tool: &str) -> Value {
    let list = tools::region_choices(st).into_iter().map(|(v, t)| format!("{v} ({t})")).collect::<Vec<_>>().join(", ");
    text_result(&format!("{tool} needs a region. Choose one of: {list}. Use find_region to resolve a place name, then call {tool} again with region."), true)
}

async fn tools_call(st: &AppState, p: &Principal, ctx: &Ctx, id: &Value, params: &Value) -> Call {
    let name = params["name"].as_str().unwrap_or_default();
    let Some(tool) = tools::find(st, name).filter(|t| !t.agent_only) else {
        return Call::Raw(rpc_error(id, -32602, &format!("Unknown tool: {name}"), None));
    };
    let args = params.get("arguments").cloned().filter(Value::is_object).unwrap_or_else(|| json!({}));
    let mrtr_key = st.key_for("mcp-mrtr");

    // MRTR retry: verify the state, merge the answers.
    if let Some(state) = params.get("requestState").and_then(Value::as_str) {
        let kind = match mrtr_verify(&mrtr_key, state, &p.user_id, name, &args, crate::db::now()) {
            Ok(k) => k,
            Err(e) => return Call::Raw(rpc_error(id, -32602, e, None)),
        };
        let key = if kind == "region" { "region" } else { "confirm_build" };
        let Some(answer) = params["inputResponses"].get(key) else {
            // Answer missing: ask again.
            return Call::Done(input_required(st, p, ctx, &tool, &args, &Need { key: if kind == "region" { "region" } else { "confirm_build" }, kind: if kind == "region" { "region" } else { "confirm" } }));
        };
        return Call::Done(match apply_answer(&kind, &args, answer) {
            Answer::Args(a) => run_tool(st, p, &tool, &a, ctx).await,
            Answer::Cancelled(m) => text_result(&m, true),
        });
    }

    let Some(need) = need_for(name, &args) else {
        return Call::Done(run_tool(st, p, &tool, &args, ctx).await);
    };
    if !ctx.elicitation {
        return Call::Done(match need.kind {
            "region" => region_fallback(st, name),
            // Hosts gate non-read-only tools themselves (annotations); without elicitation we run it.
            _ => run_tool(st, p, &tool, &args, ctx).await,
        });
    }
    if ctx.modern {
        return Call::Done(input_required(st, p, ctx, &tool, &args, &need));
    }
    Call::Raw(sse_elicitation(st, p, ctx, id, tool, args, need))
}

fn input_required(st: &AppState, p: &Principal, ctx: &Ctx, tool: &Tool, args: &Value, need: &Need) -> Value {
    let state = mrtr_state(&st.key_for("mcp-mrtr"), &p.user_id, tool.name, args, need.kind, crate::db::now() + MRTR_TTL);
    let mut inputs = Map::new();
    inputs.insert(need.key.into(), json!({ "method": "elicitation/create", "params": elicit_params(st, need, args, ctx.at_least("2025-11-25")) }));
    json!({ "resultType": "input_required", "inputRequests": inputs, "requestState": state })
}

/// 2025-06-18 / 2025-11-25: answer tools/call with an SSE stream carrying `elicitation/create`.
fn sse_elicitation(st: &AppState, p: &Principal, ctx: &Ctx, id: &Value, tool: Tool, args: Value, need: Need) -> Response {
    let (tx, rx) = mpsc::channel::<Result<Event, Infallible>>(8);
    let eid = format!("firms-elicit-{}", auth::random_token(12));
    let (atx, arx) = oneshot::channel::<Value>();
    {
        let mut m = lock(&st.mcp_pending);
        if m.len() > 1000 {
            m.clear();
        }
        m.insert(eid.clone(), (p.user_id.clone(), atx));
    }
    let request = json!({
        "jsonrpc": "2.0",
        "id": eid,
        "method": "elicitation/create",
        "params": elicit_params(st, &need, &args, ctx.at_least("2025-11-25")),
    });
    let (st, p, ctx, id) = (st.clone(), p.clone(), ctx.clone(), id.clone());
    tokio::spawn(async move {
        let _ = tx.send(Ok(Event::default().event("message").data(request.to_string()))).await;
        let answer = tokio::time::timeout(ELICIT_TIMEOUT, arx).await;
        lock(&st.mcp_pending).remove(&eid);
        let result = match answer {
            Ok(Ok(a)) => match apply_answer(need.kind, &args, &a) {
                Answer::Args(a) => run_tool(&st, &p, &tool, &a, &ctx).await,
                Answer::Cancelled(m) => text_result(&m, true),
            },
            _ => match need.kind {
                "region" => region_fallback(&st, tool.name),
                _ => text_result("No confirmation received; the build was not started.", true),
            },
        };
        let msg = json!({ "jsonrpc": "2.0", "id": id, "result": result });
        let _ = tx.send(Ok(Event::default().event("message").data(msg.to_string()))).await;
    });
    let mut r = Sse::new(ReceiverStream::new(rx)).keep_alive(KeepAlive::new().interval(Duration::from_secs(15))).into_response();
    r.headers_mut().insert(header::CACHE_CONTROL, HeaderValue::from_static("no-cache, no-transform"));
    r.headers_mut().insert("x-accel-buffering", HeaderValue::from_static("no"));
    r
}

// ------------------------------------------------------------------ resources

fn widget_meta(desc: &str) -> Value {
    json!({
        "ui": { "csp": { "connectDomains": [], "resourceDomains": [] }, "prefersBorder": true },
        "openai/widgetDescription": desc,
        "openai/widgetPrefersBorder": true,
        "openai/widgetCSP": { "connect_domains": [], "resource_domains": [] },
    })
}

fn resources_list(st: &AppState) -> Vec<Value> {
    let mut v = vec![
        json!({ "uri": "firms://regions", "name": "regions", "title": "Regions", "description": "Calibrated regions with fire level and measured error.", "mimeType": "application/json" }),
        json!({ "uri": "firms://benchmark", "name": "benchmark", "title": "Study benchmark", "description": "Every method × region, held-out and forward monthly WAPE %.", "mimeType": "application/json" }),
        json!({ "uri": "firms://method", "name": "method", "title": "Method", "description": "How the harmonized calendar is built.", "mimeType": "application/json" }),
        json!({ "uri": CALENDAR_WIDGET, "name": "calendar-widget", "title": "Fire calendar widget", "mimeType": APP_MIME, "_meta": widget_meta("Calendar heatmap of monthly fire-days") }),
        json!({ "uri": HOTSPOTS_WIDGET, "name": "hotspots-widget", "title": "Hotspots map widget", "mimeType": APP_MIME, "_meta": widget_meta("Map of FIRMS detections") }),
    ];
    for r in &st.regions().list {
        v.push(json!({
            "uri": format!("firms://region/{}", r.name),
            "name": r.name,
            "title": format!("{} — {}", r.title_en, r.title),
            "description": format!("Region {} (bbox {:?})", r.title_en, r.bbox),
            "mimeType": "application/json",
        }));
    }
    v
}

fn resource_templates() -> Vec<Value> {
    vec![
        json!({ "uriTemplate": "firms://region/{region}", "name": "region", "title": "Region details", "mimeType": "application/json" }),
        json!({ "uriTemplate": "firms://region/{region}/calendar{?from,to,algorithm,baseline}", "name": "region-calendar", "title": "Region monthly calendar", "mimeType": "application/json" }),
    ]
}

async fn resource_read(st: &AppState, uri: &str, p: &Principal) -> Result<Value, String> {
    let json_contents = |v: Value| json!({ "contents": [{ "uri": uri, "mimeType": "application/json", "text": v.to_string() }] });
    let call = |name: &'static str, args: Value| async move { tools::call(st, Some(p), name, &args).await.map(|o| o.structured).map_err(|e| e.to_string()) };
    match uri {
        CALENDAR_WIDGET | HOTSPOTS_WIDGET => {
            let (html, desc) = if uri == CALENDAR_WIDGET { (CALENDAR_HTML, "Calendar heatmap of monthly fire-days") } else { (HOTSPOTS_HTML, "Map of FIRMS detections") };
            return Ok(json!({ "contents": [{ "uri": uri, "mimeType": APP_MIME, "text": html, "_meta": widget_meta(desc) }] }));
        }
        "firms://regions" => return call("list_regions", json!({})).await.map(json_contents),
        "firms://benchmark" => return call("get_benchmark", json!({})).await.map(json_contents),
        "firms://method" => {
            let topics: Vec<Value> = tools::TOPICS
                .iter()
                .map(|(k, t)| json!({ "topic": k, "title": t, "text": tools::explain_text(k) }))
                .collect();
            return Ok(json_contents(json!({ "topics": topics, "algorithms": data::algorithms_json() })));
        }
        _ => {}
    }
    let u = url::Url::parse(uri).map_err(|_| format!("Resource not found: {uri}"))?;
    if u.scheme() != "firms" || u.host_str() != Some("region") {
        return Err(format!("Resource not found: {uri}"));
    }
    let segs: Vec<&str> = u.path().trim_start_matches('/').split('/').filter(|s| !s.is_empty()).collect();
    let q: std::collections::HashMap<String, String> = u.query_pairs().into_owned().collect();
    match segs.as_slice() {
        [r] => call("get_region", json!({ "region": r })).await.map(json_contents),
        [r, "calendar"] => {
            let mut a = json!({ "region": r });
            for k in ["from", "to", "algorithm", "baseline"] {
                if let Some(v) = q.get(k) {
                    a[k] = json!(v);
                }
            }
            call("get_calendar", a).await.map(json_contents)
        }
        _ => Err(format!("Resource not found: {uri}")),
    }
}

// ------------------------------------------------------------------ prompts

fn prompts_list() -> Vec<Value> {
    vec![
        json!({ "name": "fire_season_brief", "title": "Fire-season brief", "description": "A short brief of a region's fire season: typical months, this year so far and unusual months.",
                "arguments": [{ "name": "region", "description": "region id (completion available)", "required": true }] }),
        json!({ "name": "anomaly_report", "title": "Anomaly report", "description": "Explain one month of a region against its 2003–2022 normal.",
                "arguments": [{ "name": "region", "description": "region id", "required": true }, { "name": "month", "description": "YYYY-MM (default: latest complete month)", "required": false }] }),
        json!({ "name": "compare_regions", "title": "Compare regions", "description": "Compare several regions: levels, seasons, trends and the latest month.",
                "arguments": [{ "name": "regions", "description": "comma-separated region ids", "required": true }] }),
        json!({ "name": "method_explainer", "title": "Explain the method", "description": "Explain one part of the Firms method in plain words.",
                "arguments": [{ "name": "topic", "description": "fire_days, reference_chain, transfer, adaptive, geometry, noise_floor, accuracy, data_sources", "required": false }] }),
    ]
}

fn prompt_get(st: &AppState, params: &Value) -> Result<Value, String> {
    let name = params["name"].as_str().unwrap_or_default();
    let args = &params["arguments"];
    let arg = |k: &str| args.get(k).and_then(Value::as_str).map(str::trim).filter(|s| !s.is_empty()).map(str::to_owned);
    let region = |k: &str| -> Result<String, String> {
        let r = arg(k).ok_or(format!("argument {k} is required"))?;
        tools::resolve_region(st, &r).map(|r| r.name.clone()).map_err(|e| e.to_string())
    };
    let (desc, text) = match name {
        "fire_season_brief" => {
            let r = region("region")?;
            ("Fire-season brief", format!(
                "Write a short fire-season brief for the Firms region `{r}`. Call seasonal_profile(region={r}) for the typical year, \
get_calendar(region={r}) for the last 12 months and get_anomalies(region={r}, threshold_pct=50) for unusual months. \
Give: the fire-season window and peak months, how the latest complete month compares with normal (with its rank), the 3 most \
unusual recent months, and one sentence on uncertainty (~10% monthly error). Cite only numbers returned by the tools. \
Answer in the user's language (Arabic or English)."
            ))
        }
        "anomaly_report" => {
            let r = region("region")?;
            let m = arg("month");
            if let Some(m) = &m {
                data::parse_ym(m).map_err(|e| e.to_string())?;
            }
            let when = m.clone().map_or_else(|| "the latest complete month".to_owned(), |m| m.to_string());
            ("Anomaly report", format!(
                "Explain {when} in the Firms region `{r}`. Call get_calendar(region={r}{}) and seasonal_profile(region={r}). Report the \
value, the 2003–2022 median for that calendar month, the anomaly %, the rank among the same month of all years and whether \
the difference is larger than the ~10% measurement error. Cite only tool numbers; answer in the user's language.",
                m.map(|m| format!(", from={m}, to={m}")).unwrap_or_default()
            ))
        }
        "compare_regions" => {
            let raw = arg("regions").ok_or("argument regions is required")?;
            let rs: Result<Vec<String>, String> = raw
                .split(',')
                .map(str::trim)
                .filter(|s| !s.is_empty())
                .map(|s| tools::resolve_region(st, s).map(|r| r.name.clone()).map_err(|e| e.to_string()))
                .collect();
            let rs = rs?;
            if rs.len() < 2 {
                return Err("give at least two regions".into());
            }
            ("Compare regions", format!(
                "Compare these Firms regions: {}. For each call seasonal_profile and get_trend; then rank_regions(metric=latest_anomaly). \
Present a compact table (fire level, season window, peak month, trend %/yr with Mann–Kendall p, latest month vs normal) and \
a 3-sentence summary. Cite only tool numbers; answer in the user's language.",
                rs.join(", ")
            ))
        }
        "method_explainer" => {
            let t = arg("topic").unwrap_or_else(|| "fire_days".into());
            if tools::explain_text(&t).is_none() {
                return Err(format!("unknown topic {t:?}"));
            }
            ("Explain the method", format!(
                "Call explain_method(topic={t}) and explain it to a non-specialist in 5–8 sentences with one concrete example from a \
Firms region (use get_calendar if a number helps). Answer in the user's language."
            ))
        }
        _ => return Err(format!("Unknown prompt: {name}")),
    };
    Ok(json!({ "description": desc, "messages": [{ "role": "user", "content": { "type": "text", "text": text } }] }))
}

// ------------------------------------------------------------------ completion

pub fn completion(st: &AppState, params: &Value) -> Value {
    let arg_name = params["argument"]["name"].as_str().unwrap_or_default();
    let value = params["argument"]["value"].as_str().unwrap_or_default();
    let (prefix, last) = match arg_name {
        "regions" => match value.rfind(',') {
            Some(i) => (value[..=i].to_owned(), value[i + 1..].trim().to_owned()),
            None => (String::new(), value.trim().to_owned()),
        },
        _ => (String::new(), value.trim().to_owned()),
    };
    let needle = gazetteer::normalize(&last);
    let candidates: Vec<(String, Vec<String>)> = match arg_name {
        "region" | "regions" => st
            .regions()
            .list
            .iter()
            .map(|r| (r.name.clone(), vec![r.name.clone(), r.title.clone(), r.title_en.clone(), r.country.clone().unwrap_or_default()]))
            .collect(),
        "algorithm" => data::ALGORITHMS.iter().map(|a| (a.key.to_owned(), vec![a.key.to_owned(), a.name_en.to_owned()])).collect(),
        "baseline" => vec![("median".into(), vec!["median".into()]), ("mean".into(), vec!["mean".into()])],
        "topic" => tools::TOPICS.iter().map(|(k, t)| ((*k).to_owned(), vec![(*k).to_owned(), (*t).to_owned()])).collect(),
        "country" => gazetteer::COUNTRIES
            .iter()
            .map(|c| (c.firms.to_owned(), vec![c.firms.to_owned(), c.en.to_owned(), c.ar.to_owned(), c.fr.to_owned()]))
            .collect(),
        "month" | "from" | "to" => {
            let cur = data::current_month();
            (0..24).map(|k| data::ym_of(cur.saturating_sub(k + 1))).map(|m| (m.clone(), vec![m])).collect()
        }
        _ => Vec::new(),
    };
    let values: Vec<String> = candidates
        .into_iter()
        .filter(|(_, names)| needle.is_empty() || names.iter().any(|n| gazetteer::normalize(n).contains(&needle)))
        .map(|(v, _)| format!("{prefix}{v}"))
        .take(100)
        .collect();
    json!({ "completion": { "values": values, "total": values.len(), "hasMore": false } })
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn mrtr_state_roundtrip_and_tamper() {
        let key = b"0123456789abcdef0123456789abcdef";
        let args = json!({ "from": "2024-01", "algorithm": "ensemble_adaptive" });
        let now = 1_000_000;
        let s = mrtr_state(key, "u1", "get_calendar", &args, "region", now + 600);
        assert_eq!(mrtr_verify(key, &s, "u1", "get_calendar", &args, now).as_deref(), Ok("region"));
        // same args in another key order hash the same
        let args2 = json!({ "algorithm": "ensemble_adaptive", "from": "2024-01" });
        assert!(mrtr_verify(key, &s, "u1", "get_calendar", &args2, now).is_ok());
        // other principal / tool / args / expired / tampered / other key
        assert!(mrtr_verify(key, &s, "u2", "get_calendar", &args, now).is_err());
        assert!(mrtr_verify(key, &s, "u1", "get_anomalies", &args, now).is_err());
        assert!(mrtr_verify(key, &s, "u1", "get_calendar", &json!({ "from": "2023-01" }), now).is_err());
        assert!(mrtr_verify(key, &s, "u1", "get_calendar", &args, now + 601).is_err());
        let (payload, sig) = s.split_once('.').unwrap();
        let mut forged: Value = serde_json::from_slice(&B64.decode(payload).unwrap()).unwrap();
        forged["u"] = json!("u2");
        let forged = format!("{}.{sig}", B64.encode(forged.to_string()));
        assert!(mrtr_verify(key, &forged, "u2", "get_calendar", &args, now).is_err());
        let mut bad_sig = s.clone();
        bad_sig.push('A');
        assert!(mrtr_verify(key, &bad_sig, "u1", "get_calendar", &args, now).is_err());
        assert!(mrtr_verify(b"another-key-another-key-another!!", &s, "u1", "get_calendar", &args, now).is_err());
    }

    #[test]
    fn answers_merge_into_arguments() {
        let a = json!({ "from": "2024-01" });
        match apply_answer("region", &a, &json!({ "action": "accept", "content": { "region": "punjab" } })) {
            Answer::Args(x) => assert_eq!(x, json!({ "from": "2024-01", "region": "punjab" })),
            Answer::Cancelled(_) => panic!("expected args"),
        }
        assert!(matches!(apply_answer("region", &a, &json!({ "action": "decline" })), Answer::Cancelled(_)));
        let b = json!({ "name": "x", "country": "Algeria", "bbox": [1, 2, 3, 4] });
        assert!(matches!(apply_answer("confirm", &b, &json!({ "action": "accept", "content": { "confirm": false } })), Answer::Cancelled(_)));
        match apply_answer("confirm", &b, &json!({ "action": "accept", "content": { "name": "y", "bbox": "1,2,3,4", "confirm": true } })) {
            Answer::Args(x) => assert_eq!((x["name"].as_str(), x["country"].as_str()), (Some("y"), Some("Algeria"))),
            Answer::Cancelled(_) => panic!("expected args"),
        }
    }

    #[test]
    fn tool_schemas_are_valid() {
        let st = crate::state::test_state();
        let reg = tools::registry(&st);
        assert!(reg.len() >= 18);
        let mut names = std::collections::HashSet::new();
        for t in &reg {
            assert!(names.insert(t.name), "duplicate {}", t.name);
            assert_eq!(t.input["type"], "object", "{}", t.name);
            assert_eq!(t.output["type"], "object", "{}", t.name);
            tools::tests::check_schema(&format!("{}.input", t.name), &t.input).unwrap();
            tools::tests::check_schema(&format!("{}.output", t.name), &t.output).unwrap();
            let oa = t.openai_json();
            assert!(!oa.to_string().contains("\"oneOf\""), "{}", t.name);
            let m = t.mcp_json();
            assert_eq!(m["annotations"]["readOnlyHint"], json!(!t.write));
        }
        let region_enum = &reg.iter().find(|t| t.name == "get_calendar").unwrap().input["properties"]["region"];
        assert_eq!(region_enum["enum"].as_array().unwrap().len(), st.regions().list.len());
        let br = reg.iter().find(|t| t.name == "build_region").unwrap();
        assert_eq!(br.annotations()["openWorldHint"], true);
        assert!(reg.iter().find(|t| t.name == "get_calendar").unwrap().mcp_json()["_meta"]["ui"]["resourceUri"] == CALENDAR_WIDGET);
        assert!(tools::mcp_tools(&st).iter().all(|t| t.name != "apply_view"));
        // elicitation forms are valid object schemas too
        for (need, args) in [(Need { key: "region", kind: "region" }, json!({})), (Need { key: "confirm_build", kind: "confirm" }, json!({ "country": "Algeria" }))] {
            for titled in [true, false] {
                let p = elicit_params(&st, &need, &args, titled);
                tools::tests::check_schema("elicit", &p["requestedSchema"]).unwrap();
            }
        }
    }

    #[tokio::test]
    async fn offline_tool_outputs_match_their_output_schema() {
        let st = crate::state::test_state();
        let p = Principal { user_id: "u1".into(), user: json!({}), source: auth::Source::ApiKey, feeef_token: None, scope: String::new() };
        let calls = [
            ("find_region", json!({ "query": "Algérie" })),
            ("list_regions", json!({})),
            ("get_region", json!({ "region": "punjab" })),
            ("get_calendar", json!({ "region": "punjab" })),
            ("get_anomalies", json!({ "region": "lebanon", "direction": "both" })),
            ("get_trend", json!({ "region": "portugal" })),
            ("seasonal_profile", json!({ "region": "bolivia" })),
            ("rank_regions", json!({ "metric": "trend" })),
            ("compare_algorithms", json!({ "region": "ssudan" })),
            ("get_benchmark", json!({})),
            ("export_calendar_csv", json!({ "region": "punjab", "from": "2020-01" })),
            ("explain_method", json!({ "topic": "noise_floor" })),
            ("apply_view", json!({ "region": "البنجاب", "page": "calendar" })),
        ];
        for (name, args) in calls {
            let t = tools::find(&st, name).unwrap();
            let out = tools::call(&st, Some(&p), name, &args).await.unwrap_or_else(|e| panic!("{name}: {e}"));
            tools::tests::conforms(&t.output, &out.structured).unwrap_or_else(|e| panic!("{name}: {e}"));
            assert!(!out.text.is_empty());
        }
        let out = tools::call(&st, Some(&p), "export_calendar_csv", &json!({ "region": "punjab" })).await.unwrap();
        let u = url::Url::parse(out.structured["url"].as_str().unwrap()).unwrap();
        let q: std::collections::HashMap<String, String> = u.query_pairs().into_owned().collect();
        let payload = tools::export_payload(&q["region"], &q["from"], &q["to"], &q["algorithm"], &q["baseline"], q["exp"].parse().unwrap());
        assert!(tools::export_verify(&st, &payload, &q["sig"]));
        assert!(!tools::export_verify(&st, &payload.replace("punjab", "lebanon"), &q["sig"]));
        assert_eq!(out.links[0]["type"], "resource_link");
    }
}
