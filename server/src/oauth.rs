//! MCP OAuth (docs/AGENT_MCP.md §3): Firms is its own authorization server for `/mcp`, feeef is the
//! identity provider (the existing "Sign in with feeef" session).
//!
//! - RFC 9728 protected-resource metadata and RFC 8414 authorization-server metadata
//! - RFC 7591 dynamic client registration and Client ID Metadata Documents (SSRF-safe fetch)
//! - authorize → signed cookie → feeef sign-in when needed → consent page → one-time code (+ `iss`)
//! - token: authorization_code (PKCE S256, exact redirect, resource) and rotating refresh tokens
//!   (single use; reuse revokes the whole family); revoke; tokens `firms_at_` (1 h) / `firms_rt_`
//!   (60 days) stored as SHA-256.

use std::collections::HashMap;
use std::net::{IpAddr, SocketAddr};
use std::time::{Duration, Instant};

use axum::extract::{Path, Query, State};
use axum::http::{HeaderMap, HeaderValue, StatusCode, header};
use axum::response::{Html, IntoResponse, Response};
use axum::routing::{delete, get, post};
use axum::{Json, Router};
use base64::Engine as _;
use base64::engine::general_purpose::URL_SAFE_NO_PAD as B64;
use serde_json::{Value, json};
use sha2::{Digest, Sha256};

use crate::auth::{self, MaybeUser, Principal, Source, User, random_token, sha256_hex};
use crate::db::{Db, now};
use crate::error::{AppError, AppResult};
use crate::state::{AppState, lock};

pub const AT_PREFIX: &str = "firms_at_";
pub const RT_PREFIX: &str = "firms_rt_";
pub const SCOPE: &str = "firms";
const AT_TTL: i64 = 3600;
const RT_TTL: i64 = 60 * 86400;
const CODE_TTL: i64 = 600;
const AZ_COOKIE: &str = "firms_mcp_az";
const CONSENT_HTML: &str = include_str!("../assets/consent.html");

pub fn routes() -> Router<AppState> {
    Router::new()
        .route("/.well-known/oauth-protected-resource", get(protected_resource))
        .route("/.well-known/oauth-protected-resource/mcp", get(protected_resource))
        .route("/.well-known/oauth-authorization-server", get(as_metadata))
        .route("/.well-known/oauth-authorization-server/mcp", get(as_metadata))
        .route("/.well-known/openid-configuration", get(as_metadata))
        .route("/oauth/register", post(register))
        .route("/oauth/authorize", get(authorize))
        .route("/oauth/consent", get(consent_page).post(consent_submit))
        .route("/oauth/token", post(token))
        .route("/oauth/revoke", post(revoke))
        .route("/api/mcp/grants", get(list_grants))
        .route("/api/mcp/grants/{client_id}", delete(delete_grant))
}

pub fn resource(st: &AppState) -> String {
    format!("{}/mcp", st.cfg.public_origin)
}

pub fn www_authenticate(st: &AppState, error: Option<&str>) -> String {
    let mut s = format!(
        "Bearer resource_metadata=\"{}/.well-known/oauth-protected-resource/mcp\", scope=\"{SCOPE}\"",
        st.cfg.public_origin
    );
    if let Some(e) = error {
        s.push_str(&format!(", error=\"{e}\""));
    }
    s
}

fn no_store(mut r: Response) -> Response {
    r.headers_mut().insert(header::CACHE_CONTROL, HeaderValue::from_static("no-store"));
    r.headers_mut().insert(header::PRAGMA, HeaderValue::from_static("no-cache"));
    r
}

// ------------------------------------------------------------------ metadata

async fn protected_resource(State(st): State<AppState>) -> Response {
    let o = &st.cfg.public_origin;
    (
        [(header::CACHE_CONTROL, "public, max-age=3600")],
        Json(json!({
            "resource": resource(&st),
            "authorization_servers": [o],
            "scopes_supported": [SCOPE],
            "bearer_methods_supported": ["header"],
            "resource_name": "Firms",
            "resource_documentation": format!("{o}/developers"),
        })),
    )
        .into_response()
}

async fn as_metadata(State(st): State<AppState>) -> Response {
    let o = &st.cfg.public_origin;
    (
        [(header::CACHE_CONTROL, "public, max-age=3600")],
        Json(json!({
            "issuer": o,
            "authorization_endpoint": format!("{o}/oauth/authorize"),
            "token_endpoint": format!("{o}/oauth/token"),
            "registration_endpoint": format!("{o}/oauth/register"),
            "revocation_endpoint": format!("{o}/oauth/revoke"),
            "response_types_supported": ["code"],
            "response_modes_supported": ["query"],
            "grant_types_supported": ["authorization_code", "refresh_token"],
            "code_challenge_methods_supported": ["S256"],
            "token_endpoint_auth_methods_supported": ["none"],
            "revocation_endpoint_auth_methods_supported": ["none"],
            "scopes_supported": [SCOPE],
            "client_id_metadata_document_supported": true,
            "authorization_response_iss_parameter_supported": true,
            "service_documentation": format!("{o}/developers"),
        })),
    )
        .into_response()
}

// ------------------------------------------------------------------ errors

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct OAuthErr {
    pub error: &'static str,
    pub desc: String,
}

fn oerr(error: &'static str, desc: impl Into<String>) -> OAuthErr {
    OAuthErr { error, desc: desc.into() }
}

impl IntoResponse for OAuthErr {
    fn into_response(self) -> Response {
        let status = match self.error {
            "invalid_client" => StatusCode::UNAUTHORIZED,
            "temporarily_unavailable" => StatusCode::SERVICE_UNAVAILABLE,
            "server_error" => StatusCode::INTERNAL_SERVER_ERROR,
            _ => StatusCode::BAD_REQUEST,
        };
        no_store((status, Json(json!({ "error": self.error, "error_description": self.desc }))).into_response())
    }
}

impl From<AppError> for OAuthErr {
    fn from(e: AppError) -> Self {
        tracing::warn!(%e, "oauth internal error");
        oerr("server_error", "internal error")
    }
}

// ------------------------------------------------------------------ redirect URIs

fn is_loopback_host(h: &str) -> bool {
    matches!(h, "localhost" | "127.0.0.1" | "[::1]" | "::1")
}

/// https, http on loopback, or a private-use scheme (cursor://, vscode://…); no fragment.
pub fn valid_redirect(u: &str) -> bool {
    if u.len() > 512 {
        return false;
    }
    let Ok(p) = url::Url::parse(u) else { return false };
    if p.fragment().is_some() {
        return false;
    }
    match p.scheme() {
        "https" => p.host_str().is_some(),
        "http" => p.host_str().is_some_and(is_loopback_host),
        "javascript" | "data" | "file" | "vbscript" | "about" | "blob" | "ftp" | "ws" | "wss" => false,
        s => s.len() >= 3 && s.chars().all(|c| c.is_ascii_alphanumeric() || matches!(c, '.' | '-' | '+')),
    }
}

/// Exact match, except the port of http loopback redirects may vary (RFC 8252 §7.3).
pub fn redirect_matches(registered: &str, given: &str) -> bool {
    if registered == given {
        return true;
    }
    let (Ok(a), Ok(b)) = (url::Url::parse(registered), url::Url::parse(given)) else { return false };
    a.scheme() == "http"
        && b.scheme() == "http"
        && a.host_str().is_some_and(is_loopback_host)
        && a.host_str() == b.host_str()
        && a.path() == b.path()
        && a.query() == b.query()
}

fn redirect_host(u: &str) -> String {
    url::Url::parse(u)
        .ok()
        .map(|p| match p.host_str() {
            Some(h) => h.to_owned(),
            None => format!("{}:", p.scheme()),
        })
        .unwrap_or_default()
}

// ------------------------------------------------------------------ CIMD (SSRF-safe)

pub fn is_public_ip(ip: IpAddr) -> bool {
    match ip {
        IpAddr::V4(v) => {
            let o = v.octets();
            !(v.is_private()
                || v.is_loopback()
                || v.is_link_local()
                || v.is_broadcast()
                || v.is_documentation()
                || v.is_unspecified()
                || v.is_multicast()
                || o[0] == 0
                || (o[0] == 100 && (64..128).contains(&o[1])) // CGNAT
                || (o[0] == 192 && o[1] == 0 && o[2] == 0) // IETF protocol assignments
                || (o[0] == 198 && (o[1] == 18 || o[1] == 19)) // benchmarking
                || o[0] >= 240)
        }
        IpAddr::V6(v) => {
            if let Some(v4) = v.to_ipv4_mapped() {
                return is_public_ip(IpAddr::V4(v4));
            }
            let s = v.segments();
            !(v.is_loopback()
                || v.is_unspecified()
                || v.is_multicast()
                || (s[0] & 0xfe00) == 0xfc00 // unique local
                || (s[0] & 0xffc0) == 0xfe80 // link local
                || (s[0] == 0x2001 && s[1] == 0x0db8) // documentation
                || (s[0] == 0x64 && s[1] == 0xff9b) // NAT64
                || s[0] == 0)
        }
    }
}

/// A client_id URL must be https with a path, no userinfo / fragment, default port, and not an
/// IP literal outside public space.
pub fn validate_cimd_url(s: &str) -> Result<url::Url, &'static str> {
    if s.len() > 512 {
        return Err("client_id URL too long");
    }
    let u = url::Url::parse(s).map_err(|_| "client_id is not a URL")?;
    if u.scheme() != "https" {
        return Err("client_id URL must be https");
    }
    if !u.username().is_empty() || u.password().is_some() || u.fragment().is_some() {
        return Err("client_id URL must not carry credentials or a fragment");
    }
    if u.path().is_empty() || u.path() == "/" {
        return Err("client_id URL must have a path");
    }
    if u.port().is_some_and(|p| p != 443) {
        return Err("client_id URL must use the default port");
    }
    match u.host() {
        Some(url::Host::Ipv4(ip)) if !is_public_ip(IpAddr::V4(ip)) => return Err("client_id host is not public"),
        Some(url::Host::Ipv6(ip)) if !is_public_ip(IpAddr::V6(ip)) => return Err("client_id host is not public"),
        Some(url::Host::Domain(d)) if d == "localhost" || d.ends_with(".localhost") || d.ends_with(".local") || d.ends_with(".internal") => {
            return Err("client_id host is not public");
        }
        None => return Err("client_id URL has no host"),
        _ => {}
    }
    Ok(u)
}

/// Validate a fetched metadata document and normalize it.
pub fn validate_cimd_doc(url: &str, doc: &Value) -> Result<Value, String> {
    if doc["client_id"].as_str() != Some(url) {
        return Err("client_id in the document does not match its URL".into());
    }
    let uris: Vec<String> = doc["redirect_uris"]
        .as_array()
        .ok_or("redirect_uris is required")?
        .iter()
        .filter_map(Value::as_str)
        .map(str::to_owned)
        .collect();
    if uris.is_empty() || uris.len() > 20 || !uris.iter().all(|u| valid_redirect(u)) {
        return Err("redirect_uris must be valid https, loopback or app-scheme URIs".into());
    }
    match doc["token_endpoint_auth_method"].as_str() {
        None | Some("none") => {}
        Some(m) => return Err(format!("token_endpoint_auth_method {m:?} is not supported (public clients only)")),
    }
    let name: String = doc["client_name"].as_str().unwrap_or("").chars().take(100).collect();
    Ok(json!({
        "client_id": url,
        "client_name": if name.trim().is_empty() { redirect_host(&uris[0]) } else { name },
        "redirect_uris": uris,
        "client_uri": doc["client_uri"].as_str().filter(|u| u.starts_with("https://")),
        "logo_uri": doc["logo_uri"].as_str().filter(|u| u.starts_with("https://")),
        "kind": "cimd",
    }))
}

async fn fetch_cimd(st: &AppState, client_id: &str) -> Result<Value, String> {
    if let Some((at, v)) = lock(&st.cimd_cache).get(client_id).cloned() {
        if at.elapsed() < Duration::from_secs(3600) {
            return Ok(v);
        }
    }
    let u = validate_cimd_url(client_id).map_err(str::to_owned)?;
    let host = u.host_str().ok_or("no host")?.trim_matches(['[', ']']).to_owned();
    let addrs: Vec<SocketAddr> = tokio::time::timeout(Duration::from_secs(3), tokio::net::lookup_host((host.as_str(), 443)))
        .await
        .map_err(|_| "DNS timeout".to_owned())?
        .map_err(|_| "DNS lookup failed".to_owned())?
        .collect();
    if addrs.is_empty() || !addrs.iter().all(|a| is_public_ip(a.ip())) {
        return Err("client_id host does not resolve to a public address".into());
    }
    // Pin the connection to the address we checked (no DNS rebinding), no redirects.
    let http = reqwest::Client::builder()
        .redirect(reqwest::redirect::Policy::none())
        .timeout(Duration::from_secs(5))
        .connect_timeout(Duration::from_secs(3))
        .resolve(&host, addrs[0])
        .user_agent(concat!("firms-server/", env!("CARGO_PKG_VERSION"), " (CIMD)"))
        .build()
        .map_err(|_| "client build failed".to_owned())?;
    let mut res = http.get(u.as_str()).header("accept", "application/json").send().await.map_err(|_| "fetch failed".to_owned())?;
    if !res.status().is_success() {
        return Err(format!("metadata document returned {}", res.status().as_u16()));
    }
    let mut body = Vec::new();
    while let Some(chunk) = res.chunk().await.map_err(|_| "read failed".to_owned())? {
        body.extend_from_slice(&chunk);
        if body.len() > 64 * 1024 {
            return Err("metadata document larger than 64 KB".into());
        }
    }
    let doc: Value = serde_json::from_slice(&body).map_err(|_| "metadata document is not JSON".to_owned())?;
    let meta = validate_cimd_doc(client_id, &doc)?;
    let mut c = lock(&st.cimd_cache);
    if c.len() > 1000 {
        c.clear();
    }
    c.insert(client_id.to_owned(), (Instant::now(), meta.clone()));
    Ok(meta)
}

/// Registered (DCR) or CIMD client metadata.
async fn client_meta(st: &AppState, client_id: &str) -> Result<Value, String> {
    if client_id.starts_with("https://") {
        return fetch_cimd(st, client_id).await;
    }
    st.db.client(client_id).map_err(|_| "storage error".to_owned())?.ok_or_else(|| "unknown client_id".to_owned())
}

// ------------------------------------------------------------------ DCR

async fn register(State(st): State<AppState>, body: axum::body::Bytes) -> Response {
    let Ok(req) = serde_json::from_slice::<Value>(&body) else {
        return oerr("invalid_client_metadata", "body must be JSON").into_response();
    };
    let uris: Vec<String> = req["redirect_uris"].as_array().into_iter().flatten().filter_map(Value::as_str).map(str::to_owned).collect();
    if uris.is_empty() || uris.len() > 10 {
        return oerr("invalid_redirect_uri", "redirect_uris: 1 to 10 URIs").into_response();
    }
    if let Some(bad) = uris.iter().find(|u| !valid_redirect(u)) {
        return oerr("invalid_redirect_uri", format!("not allowed: {bad}")).into_response();
    }
    for (k, allowed) in [("grant_types", &["authorization_code", "refresh_token"][..]), ("response_types", &["code"][..])] {
        if let Some(xs) = req[k].as_array() {
            if xs.iter().any(|x| !x.as_str().is_some_and(|x| allowed.contains(&x))) {
                return oerr("invalid_client_metadata", format!("{k} must be within {allowed:?}")).into_response();
            }
        }
    }
    match st.db.client_count_since(now() - 3600) {
        Ok(n) if n >= 300 => return oerr("temporarily_unavailable", "too many registrations, try again later").into_response(),
        Err(e) => return OAuthErr::from(e).into_response(),
        _ => {}
    }
    let name: String = req["client_name"].as_str().unwrap_or("").trim().chars().take(100).collect();
    let client_id = format!("firms_cl_{}", random_token(18).replace(['-', '_'], "x"));
    let issued = now();
    let meta = json!({
        "client_id": client_id,
        "client_id_issued_at": issued,
        "client_name": if name.is_empty() { redirect_host(&uris[0]) } else { name },
        "redirect_uris": uris,
        "grant_types": ["authorization_code", "refresh_token"],
        "response_types": ["code"],
        "token_endpoint_auth_method": "none",
        "scope": SCOPE,
        "client_uri": req["client_uri"].as_str().filter(|u| u.starts_with("https://")),
        "logo_uri": req["logo_uri"].as_str().filter(|u| u.starts_with("https://")),
        "application_type": req["application_type"].as_str().filter(|t| *t == "web" || *t == "native"),
        "software_id": req["software_id"].as_str().map(|s| s.chars().take(100).collect::<String>()),
        "kind": "dcr",
    });
    if let Err(e) = st.db.put_client(&client_id, &meta) {
        return OAuthErr::from(e).into_response();
    }
    tracing::info!(%client_id, name = %meta["client_name"], "mcp client registered");
    let mut out = meta;
    if let Some(m) = out.as_object_mut() {
        m.remove("kind");
        m.retain(|_, v| !v.is_null());
    }
    no_store((StatusCode::CREATED, Json(out)).into_response())
}

// ------------------------------------------------------------------ authorize

fn esc(s: &str) -> String {
    s.replace('&', "&amp;").replace('<', "&lt;").replace('>', "&gt;").replace('"', "&quot;").replace('\'', "&#39;")
}

fn page(status: StatusCode, html: String) -> Response {
    let mut r = (status, Html(html)).into_response();
    let h = r.headers_mut();
    h.insert(header::CACHE_CONTROL, HeaderValue::from_static("no-store"));
    h.insert("x-frame-options", HeaderValue::from_static("DENY"));
    h.insert(
        header::CONTENT_SECURITY_POLICY,
        HeaderValue::from_static("default-src 'none'; style-src 'unsafe-inline'; img-src https: data:; form-action 'self'; frame-ancestors 'none'; base-uri 'none'"),
    );
    r
}

fn error_page(title_ar: &str, title_en: &str, detail: &str) -> Response {
    let html = format!(
        r#"<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Firms</title><style>body{{margin:0;font:15px/1.6 system-ui,-apple-system,"Segoe UI",Tahoma,sans-serif;background:#f6f6f7;color:#18181b;display:grid;place-items:center;min-height:100vh}}
main{{max-width:420px;margin:16px;padding:28px;background:#fff;border:1px solid #e4e4e7;border-radius:16px}}h1{{font-size:18px;margin:0 0 4px}}p{{margin:0;color:#52525b}}.en{{direction:ltr;text-align:left;margin-top:16px}}
code{{font-size:12px;color:#71717a;word-break:break-all}}@media (prefers-color-scheme:dark){{body{{background:#0b0b0c;color:#f4f4f5}}main{{background:#18181b;border-color:#27272a}}p{{color:#a1a1aa}}}}</style></head>
<body><main><h1>{}</h1><div class="en"><h1>{}</h1><p><code>{}</code></p></div></main></body></html>"#,
        esc(title_ar),
        esc(title_en),
        esc(detail)
    );
    page(StatusCode::BAD_REQUEST, html)
}

fn redirect_error(redirect_uri: &str, state: Option<&str>, issuer: &str, error: &str, desc: &str) -> Response {
    let Ok(mut u) = url::Url::parse(redirect_uri) else {
        return error_page("طلب غير صالح", "Invalid request", desc);
    };
    {
        let mut q = u.query_pairs_mut();
        q.append_pair("error", error).append_pair("error_description", desc);
        if let Some(s) = state {
            q.append_pair("state", s);
        }
        q.append_pair("iss", issuer);
    }
    auth::redirect_with_cookies(u.as_str(), vec![])
}

#[derive(Debug, Clone, serde::Serialize, serde::Deserialize, PartialEq)]
pub struct AzRequest {
    pub client_id: String,
    pub redirect_uri: String,
    pub challenge: String,
    pub state: Option<String>,
    pub resource: String,
    pub nonce: String,
    pub exp: i64,
}

fn az_cookie_value(st: &AppState, r: &AzRequest) -> String {
    let payload = B64.encode(serde_json::to_vec(r).unwrap_or_default());
    format!("{payload}.{}", auth::sign(&st.key_for("mcp-authorize"), &payload))
}

fn az_from_cookie(st: &AppState, headers: &HeaderMap) -> Option<AzRequest> {
    let raw = auth::cookie(headers, AZ_COOKIE)?;
    let (payload, sig) = raw.split_once('.')?;
    if !auth::verify(&st.key_for("mcp-authorize"), payload, sig) {
        return None;
    }
    let r: AzRequest = serde_json::from_slice(&B64.decode(payload).ok()?).ok()?;
    (r.exp >= now()).then_some(r)
}

fn valid_challenge(c: &str) -> bool {
    c.len() == 43 && c.chars().all(|c| c.is_ascii_alphanumeric() || c == '-' || c == '_')
}

async fn authorize(State(st): State<AppState>, MaybeUser(user): MaybeUser, Query(q): Query<HashMap<String, String>>) -> Response {
    let g = |k: &str| q.get(k).map(|s| s.trim().to_owned()).filter(|s| !s.is_empty());
    let issuer = st.cfg.public_origin.clone();
    let Some(client_id) = g("client_id") else {
        return error_page("التطبيق غير معروف", "Missing client_id", "client_id is required");
    };
    let meta = match client_meta(&st, &client_id).await {
        Ok(m) => m,
        Err(e) => return error_page("لم نتعرف على هذا التطبيق", "Unknown or invalid application", &e),
    };
    let registered: Vec<String> = meta["redirect_uris"].as_array().into_iter().flatten().filter_map(Value::as_str).map(str::to_owned).collect();
    let redirect_uri = match g("redirect_uri") {
        Some(r) if registered.iter().any(|x| redirect_matches(x, &r)) => r,
        Some(_) => return error_page("عنوان الرجوع غير مسجّل", "redirect_uri is not registered for this application", &client_id),
        None if registered.len() == 1 => registered[0].clone(),
        None => return error_page("عنوان الرجوع مطلوب", "redirect_uri is required", &client_id),
    };
    let state = g("state");
    let fail = |e: &str, d: &str| redirect_error(&redirect_uri, state.as_deref(), &issuer, e, d);
    if g("response_type").as_deref() != Some("code") {
        return fail("unsupported_response_type", "response_type must be code");
    }
    let Some(challenge) = g("code_challenge") else { return fail("invalid_request", "code_challenge (PKCE S256) is required") };
    if g("code_challenge_method").as_deref() != Some("S256") || !valid_challenge(&challenge) {
        return fail("invalid_request", "code_challenge_method must be S256 with a 43-char challenge");
    }
    let res = resource(&st);
    if let Some(r) = g("resource") {
        if r.trim_end_matches('/') != res {
            return fail("invalid_target", "resource must be this server's /mcp URL");
        }
    }
    if let Some(sc) = g("scope") {
        if !sc.split_whitespace().any(|s| s == SCOPE || s == "mcp" || s == "openid" || s == "offline_access") {
            tracing::info!(scope = %sc, "authorize: unknown scopes requested; granting firms");
        }
    }
    let az = AzRequest { client_id, redirect_uri, challenge, state, resource: res, nonce: random_token(16), exp: now() + 600 };
    let cookie = auth::set_cookie(AZ_COOKIE, &az_cookie_value(&st, &az), "/oauth", 600, st.cfg.secure_cookies());
    let to = if user.is_some() { "/oauth/consent".to_owned() } else { "/auth/feeef/login?next=/oauth/consent".to_owned() };
    no_store(auth::redirect_with_cookies(&to, vec![cookie]))
}

// ------------------------------------------------------------------ consent

fn csrf_token(st: &AppState, az: &AzRequest, user_id: &str) -> String {
    auth::sign(&st.key_for("mcp-consent"), &format!("{}|{}|{}", az.nonce, az.client_id, user_id))
}

async fn consent_page(State(st): State<AppState>, MaybeUser(user): MaybeUser, headers: HeaderMap) -> Response {
    let Some(az) = az_from_cookie(&st, &headers) else {
        return error_page(
            "انتهت صلاحية طلب الربط. ارجع إلى التطبيق وأعد الاتصال.",
            "This connection request expired. Go back to the app and connect again.",
            "authorization request missing or expired",
        );
    };
    let Some(user) = user else {
        return auth::redirect_with_cookies("/auth/feeef/login?next=/oauth/consent", vec![]);
    };
    let meta = match client_meta(&st, &az.client_id).await {
        Ok(m) => m,
        Err(e) => return error_page("لم نتعرف على هذا التطبيق", "Unknown or invalid application", &e),
    };
    let name = meta["client_name"].as_str().unwrap_or("MCP client").to_owned();
    let initial = name.chars().find(|c| c.is_alphanumeric()).map(|c| c.to_uppercase().to_string()).unwrap_or_else(|| "?".into());
    let logo = meta["logo_uri"]
        .as_str()
        .filter(|u| u.starts_with("https://"))
        .map(|u| format!(r#"<img src="{}" alt="" referrerpolicy="no-referrer">"#, esc(u)))
        .unwrap_or_else(|| esc(&initial));
    let user_name = user.user["name"].as_str().or(user.user["email"].as_str()).unwrap_or("").to_owned();
    let kind = if az.client_id.starts_with("https://") { redirect_host(&az.client_id) } else { String::new() };
    let html = CONSENT_HTML
        .replace("{{client_name}}", &esc(&name))
        .replace("{{logo}}", &logo)
        .replace("{{redirect_host}}", &esc(&redirect_host(&az.redirect_uri)))
        .replace("{{client_site}}", &esc(&kind))
        .replace("{{user_name}}", &esc(&user_name))
        .replace("{{csrf}}", &esc(&csrf_token(&st, &az, &user.user_id)))
        .replace("{{origin_host}}", &esc(&redirect_host(&st.cfg.public_origin)));
    page(StatusCode::OK, html)
}

async fn consent_submit(State(st): State<AppState>, MaybeUser(user): MaybeUser, headers: HeaderMap, body: axum::body::Bytes) -> Response {
    let form: HashMap<String, String> = url::form_urlencoded::parse(&body).into_owned().collect();
    let Some(az) = az_from_cookie(&st, &headers) else {
        return error_page("انتهت صلاحية طلب الربط.", "This connection request expired.", "authorization request missing or expired");
    };
    let Some(user) = user else {
        return auth::redirect_with_cookies("/auth/feeef/login?next=/oauth/consent", vec![]);
    };
    if !auth::same_origin(&st, &headers) || form.get("csrf").map(String::as_str) != Some(csrf_token(&st, &az, &user.user_id).as_str()) {
        return error_page("تعذّر التحقق من الطلب.", "The request could not be verified.", "csrf");
    }
    let clear = auth::set_cookie(AZ_COOKIE, "", "/oauth", 0, st.cfg.secure_cookies());
    let issuer = st.cfg.public_origin.clone();
    let mut u = match url::Url::parse(&az.redirect_uri) {
        Ok(u) => u,
        Err(_) => return error_page("عنوان رجوع غير صالح", "Invalid redirect URI", ""),
    };
    if form.get("decision").map(String::as_str) != Some("allow") {
        let mut r = redirect_error(&az.redirect_uri, az.state.as_deref(), &issuer, "access_denied", "the user denied access");
        r.headers_mut().append(header::SET_COOKIE, clear);
        return r;
    }
    let name = client_meta(&st, &az.client_id).await.ok().and_then(|m| m["client_name"].as_str().map(str::to_owned)).unwrap_or_default();
    let code = match create_code(&st.db, &az, &user.user_id) {
        Ok(c) => c,
        Err(e) => return e.into_response(),
    };
    let _ = st.db.upsert_grant(&user.user_id, &az.client_id, &name, SCOPE);
    {
        let mut q = u.query_pairs_mut();
        q.append_pair("code", &code);
        if let Some(s) = &az.state {
            q.append_pair("state", s);
        }
        q.append_pair("iss", &issuer);
    }
    tracing::info!(client = %az.client_id, user = %user.user_id, "mcp authorization granted");
    let mut res = StatusCode::SEE_OTHER.into_response();
    if let Ok(v) = HeaderValue::from_str(u.as_str()) {
        res.headers_mut().insert(header::LOCATION, v);
    }
    res.headers_mut().append(header::SET_COOKIE, clear);
    no_store(res)
}

// ------------------------------------------------------------------ codes and tokens (pure, tested)

#[derive(Debug, Clone)]
pub struct TokenPair {
    pub access_token: String,
    pub refresh_token: String,
    pub expires_in: i64,
    pub scope: String,
}

impl TokenPair {
    fn json(&self) -> Value {
        json!({
            "access_token": self.access_token,
            "token_type": "Bearer",
            "expires_in": self.expires_in,
            "refresh_token": self.refresh_token,
            "scope": self.scope,
        })
    }
}

pub fn pkce_s256(verifier: &str) -> String {
    B64.encode(Sha256::digest(verifier.as_bytes()))
}

fn valid_verifier(v: &str) -> bool {
    (43..=128).contains(&v.len()) && v.chars().all(|c| c.is_ascii_alphanumeric() || matches!(c, '-' | '.' | '_' | '~'))
}

pub fn create_code(db: &Db, az: &AzRequest, user_id: &str) -> Result<String, OAuthErr> {
    let code = format!("firms_ac_{}", random_token(32));
    let family = format!("fam_{}", random_token(12));
    db.insert_code(&sha256_hex(&code), &az.client_id, user_id, &az.redirect_uri, &az.challenge, SCOPE, &az.resource, &family, now() + CODE_TTL)?;
    Ok(code)
}

fn issue(db: &Db, family: &str, user_id: &str, client_id: &str, resource: &str, scope: &str) -> Result<TokenPair, OAuthErr> {
    let at = format!("{AT_PREFIX}{}", random_token(32));
    let rt = format!("{RT_PREFIX}{}", random_token(32));
    db.insert_token(&sha256_hex(&at), "at", family, user_id, client_id, resource, scope, now() + AT_TTL)?;
    db.insert_token(&sha256_hex(&rt), "rt", family, user_id, client_id, resource, scope, now() + RT_TTL)?;
    Ok(TokenPair { access_token: at, refresh_token: rt, expires_in: AT_TTL, scope: scope.to_owned() })
}

fn check_resource(expected: &str, given: Option<&str>) -> Result<(), OAuthErr> {
    match given {
        Some(r) if r.trim_end_matches('/') != expected => Err(oerr("invalid_target", "resource does not match this server")),
        _ => Ok(()),
    }
}

pub fn exchange_code(
    db: &Db,
    server_resource: &str,
    code: &str,
    client_id: &str,
    redirect_uri: &str,
    verifier: &str,
    resource: Option<&str>,
) -> Result<TokenPair, OAuthErr> {
    let row = db.take_code(&sha256_hex(code))?.ok_or_else(|| oerr("invalid_grant", "unknown authorization code"))?;
    if row.used {
        // A replayed code: revoke everything issued from it.
        db.revoke_family(&row.family)?;
        return Err(oerr("invalid_grant", "authorization code already used"));
    }
    if row.expires_at < now() {
        return Err(oerr("invalid_grant", "authorization code expired"));
    }
    if row.client_id != client_id {
        return Err(oerr("invalid_grant", "code was issued to another client"));
    }
    if !redirect_matches(&row.redirect_uri, redirect_uri) {
        return Err(oerr("invalid_grant", "redirect_uri does not match"));
    }
    if !valid_verifier(verifier) || pkce_s256(verifier) != row.challenge {
        return Err(oerr("invalid_grant", "PKCE verification failed"));
    }
    check_resource(server_resource, resource)?;
    check_resource(server_resource, Some(&row.resource))?;
    issue(db, &row.family, &row.user_id, &row.client_id, &row.resource, &row.scope)
}

pub fn refresh(db: &Db, server_resource: &str, rt: &str, client_id: &str, resource: Option<&str>) -> Result<TokenPair, OAuthErr> {
    let h = sha256_hex(rt);
    let row = db.token(&h)?.ok_or_else(|| oerr("invalid_grant", "unknown refresh token"))?;
    if row.kind != "rt" {
        return Err(oerr("invalid_grant", "not a refresh token"));
    }
    if row.client_id != client_id {
        return Err(oerr("invalid_grant", "refresh token was issued to another client"));
    }
    if row.revoked {
        return Err(oerr("invalid_grant", "refresh token revoked"));
    }
    if row.expires_at < now() {
        return Err(oerr("invalid_grant", "refresh token expired"));
    }
    check_resource(server_resource, resource)?;
    if row.used_at.is_some() || !db.use_refresh(&h)? {
        // Reuse of a rotated refresh token: assume theft, revoke the whole family.
        let n = db.revoke_family(&row.family)?;
        tracing::warn!(client = %row.client_id, revoked = n, "refresh token reuse; family revoked");
        return Err(oerr("invalid_grant", "refresh token already used; all tokens of this grant were revoked"));
    }
    issue(db, &row.family, &row.user_id, &row.client_id, &row.resource, &row.scope)
}

/// The principal of a `firms_at_` access token.
pub fn principal(st: &AppState, tok: &str) -> AppResult<Principal> {
    let row = st.db.token(&sha256_hex(tok))?.ok_or(AppError::Unauthorized)?;
    if row.kind != "at" || row.revoked || row.expires_at < now() || row.resource != resource(st) {
        return Err(AppError::Unauthorized);
    }
    let _ = st.db.touch_grant(&row.user_id, &row.client_id);
    let user = st.db.user(&row.user_id)?.unwrap_or_else(|| json!({ "id": row.user_id }));
    Ok(Principal { user_id: row.user_id, user, source: Source::OAuth, feeef_token: None, scope: row.scope })
}

fn parse_body(headers: &HeaderMap, body: &[u8]) -> HashMap<String, String> {
    let json_ct = headers.get(header::CONTENT_TYPE).and_then(|v| v.to_str().ok()).is_some_and(|v| v.contains("json"));
    if json_ct {
        serde_json::from_slice::<HashMap<String, Value>>(body)
            .map(|m| m.into_iter().filter_map(|(k, v)| v.as_str().map(|s| (k, s.to_owned()))).collect())
            .unwrap_or_default()
    } else {
        url::form_urlencoded::parse(body).into_owned().collect()
    }
}

/// client_id from the form or from HTTP Basic (a public client may still send it there).
fn client_from(headers: &HeaderMap, f: &HashMap<String, String>) -> Option<String> {
    if let Some(c) = f.get("client_id").filter(|c| !c.is_empty()) {
        return Some(c.clone());
    }
    let v = headers.get(header::AUTHORIZATION)?.to_str().ok()?;
    let (scheme, rest) = v.split_once(' ')?;
    if !scheme.eq_ignore_ascii_case("basic") {
        return None;
    }
    let raw = base64::engine::general_purpose::STANDARD.decode(rest.trim()).ok()?;
    let s = String::from_utf8(raw).ok()?;
    let id = s.split_once(':').map_or(s.as_str(), |(a, _)| a);
    Some(url::form_urlencoded::parse(format!("x={id}").as_bytes()).next()?.1.into_owned())
}

async fn token(State(st): State<AppState>, headers: HeaderMap, body: axum::body::Bytes) -> Response {
    let f = parse_body(&headers, &body);
    let Some(client_id) = client_from(&headers, &f) else {
        return oerr("invalid_client", "client_id is required").into_response();
    };
    let res = resource(&st);
    let out = match f.get("grant_type").map(String::as_str) {
        Some("authorization_code") => {
            let (Some(code), Some(verifier)) = (f.get("code"), f.get("code_verifier")) else {
                return oerr("invalid_request", "code and code_verifier are required").into_response();
            };
            let redirect = f.get("redirect_uri").cloned().unwrap_or_default();
            exchange_code(&st.db, &res, code, &client_id, &redirect, verifier, f.get("resource").map(String::as_str))
        }
        Some("refresh_token") => {
            let Some(rt) = f.get("refresh_token") else {
                return oerr("invalid_request", "refresh_token is required").into_response();
            };
            refresh(&st.db, &res, rt, &client_id, f.get("resource").map(String::as_str))
        }
        _ => Err(oerr("unsupported_grant_type", "grant_type must be authorization_code or refresh_token")),
    };
    match out {
        Ok(t) => no_store(Json(t.json()).into_response()),
        Err(e) => e.into_response(),
    }
}

async fn revoke(State(st): State<AppState>, headers: HeaderMap, body: axum::body::Bytes) -> Response {
    let f = parse_body(&headers, &body);
    if let Some(t) = f.get("token") {
        let h = sha256_hex(t);
        if let Ok(Some(row)) = st.db.token(&h) {
            let client_ok = client_from(&headers, &f).is_none_or(|c| c == row.client_id);
            if client_ok {
                let _ = if row.kind == "rt" { st.db.revoke_family(&row.family) } else { st.db.revoke_token(&h) };
            }
        }
    }
    no_store(StatusCode::OK.into_response())
}

// ------------------------------------------------------------------ grants (Developers page)

async fn list_grants(State(st): State<AppState>, User(p): User) -> AppResult<Json<Value>> {
    let mut out = Vec::new();
    for (client_id, name, scope, created, last) in st.db.grants(&p.user_id)? {
        let meta = if client_id.starts_with("https://") {
            lock(&st.cimd_cache).get(&client_id).map(|(_, m)| m.clone())
        } else {
            st.db.client(&client_id)?
        };
        let meta = meta.unwrap_or(Value::Null);
        out.push(json!({
            "client_id": client_id,
            "client_name": if name.is_empty() { meta["client_name"].as_str().unwrap_or("MCP client").to_owned() } else { name },
            "kind": if client_id.starts_with("https://") { "cimd" } else { "dcr" },
            "client_uri": meta["client_uri"],
            "logo_uri": meta["logo_uri"],
            "redirect_host": meta["redirect_uris"][0].as_str().map(redirect_host),
            "scope": scope,
            "created_at": created,
            "last_used_at": last,
        }));
    }
    Ok(Json(json!({ "grants": out })))
}

async fn delete_grant(State(st): State<AppState>, User(p): User, Path(client_id): Path<String>) -> AppResult<Json<Value>> {
    let n = st.db.revoke_grant(&p.user_id, &client_id)?;
    if n == 0 {
        return Err(AppError::NotFound("no such connected app".into()));
    }
    Ok(Json(json!({ "ok": true })))
}

#[cfg(test)]
mod tests {
    use super::*;

    fn db() -> Db {
        Db::open(std::path::Path::new(":memory:")).expect("db")
    }

    const RES: &str = "http://localhost:8787/mcp";

    fn az(challenge: &str) -> AzRequest {
        AzRequest {
            client_id: "firms_cl_test".into(),
            redirect_uri: "https://claude.ai/api/mcp/auth_callback".into(),
            challenge: challenge.into(),
            state: Some("s1".into()),
            resource: RES.into(),
            nonce: "n".into(),
            exp: now() + 600,
        }
    }

    #[test]
    fn pkce_and_code_exchange() {
        let db = db();
        let verifier = "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk";
        // RFC 7636 appendix B
        assert_eq!(pkce_s256(verifier), "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM");
        let a = az(&pkce_s256(verifier));
        let code = create_code(&db, &a, "u1").unwrap();
        // wrong verifier
        let e = exchange_code(&db, RES, &code, &a.client_id, &a.redirect_uri, &"x".repeat(43), None).unwrap_err();
        assert_eq!(e.error, "invalid_grant");
        // the code is single use even after a failed attempt
        let e = exchange_code(&db, RES, &code, &a.client_id, &a.redirect_uri, verifier, None).unwrap_err();
        assert_eq!(e.error, "invalid_grant");

        let code = create_code(&db, &a, "u1").unwrap();
        let e = exchange_code(&db, RES, &code, "other", &a.redirect_uri, verifier, None).unwrap_err();
        assert_eq!(e.error, "invalid_grant");
        let code = create_code(&db, &a, "u1").unwrap();
        let e = exchange_code(&db, RES, &code, &a.client_id, &a.redirect_uri, verifier, Some("https://evil/mcp")).unwrap_err();
        assert_eq!(e.error, "invalid_target");
        let code = create_code(&db, &a, "u1").unwrap();
        let t = exchange_code(&db, RES, &code, &a.client_id, &a.redirect_uri, verifier, Some(RES)).unwrap();
        assert!(t.access_token.starts_with(AT_PREFIX) && t.refresh_token.starts_with(RT_PREFIX));
        let row = db.token(&sha256_hex(&t.access_token)).unwrap().unwrap();
        assert_eq!((row.kind.as_str(), row.user_id.as_str(), row.resource.as_str()), ("at", "u1", RES));
    }

    #[test]
    fn refresh_rotation_and_reuse_revokes_family() {
        let db = db();
        let verifier = "a".repeat(50);
        let a = az(&pkce_s256(&verifier));
        let code = create_code(&db, &a, "u1").unwrap();
        let t1 = exchange_code(&db, RES, &code, &a.client_id, &a.redirect_uri, &verifier, None).unwrap();
        let t2 = refresh(&db, RES, &t1.refresh_token, &a.client_id, Some(RES)).unwrap();
        assert_ne!(t1.refresh_token, t2.refresh_token);
        let t3 = refresh(&db, RES, &t2.refresh_token, &a.client_id, None).unwrap();
        // another client cannot use it
        assert!(refresh(&db, RES, &t3.refresh_token, "other", None).is_err());
        // reuse of t1's (already rotated) refresh token revokes everything in the family
        let e = refresh(&db, RES, &t1.refresh_token, &a.client_id, None).unwrap_err();
        assert_eq!(e.error, "invalid_grant");
        for t in [&t1, &t2, &t3] {
            assert!(db.token(&sha256_hex(&t.access_token)).unwrap().unwrap().revoked);
        }
        assert!(refresh(&db, RES, &t3.refresh_token, &a.client_id, None).is_err());
    }

    #[test]
    fn cimd_rejects_private_hosts() {
        for ip in ["127.0.0.1", "10.0.0.5", "172.16.3.4", "192.168.1.1", "169.254.169.254", "100.64.0.1", "0.0.0.0", "::1", "fc00::1", "fe80::1", "::ffff:10.0.0.1"] {
            let ip: IpAddr = ip.parse().unwrap();
            assert!(!is_public_ip(ip), "{ip}");
        }
        for ip in ["8.8.8.8", "1.1.1.1", "2606:4700:4700::1111"] {
            assert!(is_public_ip(ip.parse().unwrap()), "{ip}");
        }
        assert!(validate_cimd_url("https://127.0.0.1/client.json").is_err());
        assert!(validate_cimd_url("https://[::1]/client.json").is_err());
        assert!(validate_cimd_url("https://169.254.169.254/latest/meta-data").is_err());
        assert!(validate_cimd_url("https://localhost/client.json").is_err());
        assert!(validate_cimd_url("http://example.com/client.json").is_err());
        assert!(validate_cimd_url("https://user:pw@example.com/c.json").is_err());
        assert!(validate_cimd_url("https://example.com/").is_err());
        assert!(validate_cimd_url("https://example.com:8443/c.json").is_err());
        assert!(validate_cimd_url("https://example.com/oauth/client.json").is_ok());
    }

    #[test]
    fn cimd_document_validation() {
        let url = "https://app.example.com/oauth/client.json";
        let ok = json!({ "client_id": url, "client_name": "Example", "redirect_uris": ["https://app.example.com/cb", "http://127.0.0.1/cb"] });
        assert!(validate_cimd_doc(url, &ok).is_ok());
        let wrong_id = json!({ "client_id": "https://other/x", "redirect_uris": ["https://a/cb"] });
        assert!(validate_cimd_doc(url, &wrong_id).is_err());
        let bad_redirect = json!({ "client_id": url, "redirect_uris": ["javascript:alert(1)"] });
        assert!(validate_cimd_doc(url, &bad_redirect).is_err());
        let secret = json!({ "client_id": url, "redirect_uris": ["https://a/cb"], "token_endpoint_auth_method": "client_secret_basic" });
        assert!(validate_cimd_doc(url, &secret).is_err());
    }

    #[test]
    fn redirects() {
        assert!(valid_redirect("https://claude.ai/api/mcp/auth_callback"));
        assert!(valid_redirect("http://127.0.0.1:33418/callback"));
        assert!(valid_redirect("cursor://anysphere.cursor-retrieval/oauth/user-firms/callback"));
        assert!(!valid_redirect("http://evil.com/cb"));
        assert!(!valid_redirect("javascript:alert(1)"));
        assert!(!valid_redirect("https://a.com/cb#frag"));
        assert!(redirect_matches("http://127.0.0.1/callback", "http://127.0.0.1:5555/callback"));
        assert!(!redirect_matches("http://127.0.0.1/callback", "http://127.0.0.1:5555/other"));
        assert!(!redirect_matches("https://a.com/cb", "https://a.com/cb2"));
    }
}
