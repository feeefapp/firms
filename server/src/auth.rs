//! Sign in with feeef (OAuth2 code + PKCE S256, confidential client), cookie sessions in SQLite,
//! single-flight token refresh, CSRF (same-origin `Origin`/`Referer`), and the request principal
//! (session cookie, personal API key `firms_…`, or a feeef access token).

use std::sync::Arc;
use std::time::{Duration, Instant};

use axum::extract::{FromRequestParts, Query, State};
use axum::http::request::Parts;
use axum::http::{HeaderMap, HeaderValue, Method, StatusCode, header};
use axum::response::{IntoResponse, Response};
use axum::{Json, Router, routing::get, routing::post};
use base64::Engine as _;
use base64::engine::general_purpose::URL_SAFE_NO_PAD as B64;
use hmac::{Hmac, Mac};
use rand::RngCore;
use serde::Deserialize;
use serde_json::{Value, json};
use sha2::{Digest, Sha256};

use crate::db::{SessionRow, now};
use crate::error::{AppError, AppResult};
use crate::state::{AppState, CachedUser};

pub const SESSION_COOKIE: &str = "firms_session";
const STATE_COOKIE: &str = "firms_oauth";
pub const SCOPES: &str = "auth ai.read ai.generate";

pub fn routes() -> Router<AppState> {
    Router::new()
        .route("/auth/feeef/login", get(login))
        .route("/auth/feeef/callback", get(callback))
        .route("/auth/logout", post(logout))
        .route("/api/me", get(me))
}

// ------------------------------------------------------------------ helpers

pub fn random_token(bytes: usize) -> String {
    let mut b = vec![0u8; bytes];
    rand::thread_rng().fill_bytes(&mut b);
    B64.encode(b)
}

pub fn sha256_hex(s: &str) -> String {
    hex::encode(Sha256::digest(s.as_bytes()))
}

fn sign(key: &[u8], payload: &str) -> String {
    let Ok(mut mac) = Hmac::<Sha256>::new_from_slice(key) else {
        return String::new();
    };
    mac.update(payload.as_bytes());
    B64.encode(mac.finalize().into_bytes())
}

fn verify(key: &[u8], payload: &str, sig: &str) -> bool {
    let Ok(mut mac) = Hmac::<Sha256>::new_from_slice(key) else {
        return false;
    };
    mac.update(payload.as_bytes());
    let Ok(sig) = B64.decode(sig) else { return false };
    mac.verify_slice(&sig).is_ok()
}

pub fn cookie(headers: &HeaderMap, name: &str) -> Option<String> {
    headers
        .get_all(header::COOKIE)
        .iter()
        .filter_map(|v| v.to_str().ok())
        .flat_map(|v| v.split(';'))
        .filter_map(|kv| kv.trim().split_once('='))
        .find(|(k, _)| *k == name)
        .map(|(_, v)| v.to_owned())
}

fn set_cookie(name: &str, value: &str, path: &str, max_age: i64, secure: bool) -> HeaderValue {
    let s = format!(
        "{name}={value}; Path={path}; Max-Age={max_age}; HttpOnly; SameSite=Lax{}",
        if secure { "; Secure" } else { "" }
    );
    HeaderValue::from_str(&s).unwrap_or_else(|_| HeaderValue::from_static(""))
}

fn origin_of(url: &str) -> Option<String> {
    let u = url::Url::parse(url).ok()?;
    let host = u.host_str()?.to_ascii_lowercase();
    let port = u.port().map(|p| format!(":{p}")).unwrap_or_default();
    Some(format!("{}://{host}{port}", u.scheme()))
}

/// CSRF: unsafe cookie-authenticated requests must come from our own origin.
pub fn same_origin(state: &AppState, headers: &HeaderMap) -> bool {
    let Some(ours) = origin_of(&state.cfg.public_origin) else {
        return false;
    };
    let get = |n| headers.get(n).and_then(|v: &HeaderValue| v.to_str().ok());
    let source = get(header::ORIGIN).filter(|o| *o != "null").or_else(|| get(header::REFERER));
    source
        .and_then(origin_of)
        .is_some_and(|o| o == ours || state.cfg.extra_origins.iter().any(|x| *x == o))
}

fn is_unsafe(m: &Method) -> bool {
    !matches!(*m, Method::GET | Method::HEAD | Method::OPTIONS)
}

fn safe_next(next: Option<&str>) -> String {
    match next {
        Some(n) if n.starts_with('/') && !n.starts_with("//") && !n.contains('\\') && n.len() < 512 => n.to_owned(),
        _ => "/".to_owned(),
    }
}

/// 302 Found with `Location` (axum's `Redirect::to` is a 303).
fn redirect_with_cookies(to: &str, cookies: Vec<HeaderValue>) -> Response {
    let mut res = StatusCode::FOUND.into_response();
    if let Ok(v) = HeaderValue::from_str(to) {
        res.headers_mut().insert(header::LOCATION, v);
    }
    for c in cookies {
        res.headers_mut().append(header::SET_COOKIE, c);
    }
    res
}

// ------------------------------------------------------------------ login / callback

#[derive(Deserialize)]
struct LoginQuery {
    next: Option<String>,
}

async fn login(State(st): State<AppState>, Query(q): Query<LoginQuery>) -> AppResult<Response> {
    if st.cfg.client_id.is_empty() {
        return Err(AppError::Unavailable("feeef sign-in is not configured".into()));
    }
    let state = random_token(24);
    let verifier = random_token(48);
    let challenge = B64.encode(Sha256::digest(verifier.as_bytes()));
    let payload = B64.encode(
        json!({ "s": state, "v": verifier, "n": safe_next(q.next.as_deref()), "e": now() + 600 }).to_string(),
    );
    let value = format!("{payload}.{}", sign(&st.session_key, &payload));
    let mut url = url::Url::parse(&format!("{}/oauth/authorize", st.cfg.accounts_url))
        .map_err(|_| AppError::Internal("bad accounts url".into()))?;
    url.query_pairs_mut()
        .append_pair("response_type", "code")
        .append_pair("client_id", &st.cfg.client_id)
        .append_pair("redirect_uri", &st.cfg.redirect_uri)
        .append_pair("scope", SCOPES)
        .append_pair("state", &state)
        .append_pair("code_challenge", &challenge)
        .append_pair("code_challenge_method", "S256");
    // `url` encodes spaces as '+'; the contract asks for %20 inside `scope`.
    let to = url.as_str().replace("scope=auth+ai.read+ai.generate", "scope=auth%20ai.read%20ai.generate");
    Ok(redirect_with_cookies(
        &to,
        vec![set_cookie(STATE_COOKIE, &value, "/auth/feeef", 600, st.cfg.secure_cookies())],
    ))
}

#[derive(Deserialize)]
struct CallbackQuery {
    code: Option<String>,
    state: Option<String>,
    error: Option<String>,
}

#[derive(Deserialize)]
struct TokenResponse {
    access_token: String,
    #[serde(default)]
    refresh_token: Option<String>,
    #[serde(default)]
    expires_in: Option<i64>,
    #[serde(default)]
    scope: Option<String>,
}

async fn callback(State(st): State<AppState>, headers: HeaderMap, Query(q): Query<CallbackQuery>) -> Response {
    let secure = st.cfg.secure_cookies();
    let clear_state = set_cookie(STATE_COOKIE, "", "/auth/feeef", 0, secure);
    let fail = |reason: &str| {
        tracing::warn!(reason, "oauth callback failed");
        redirect_with_cookies(&format!("/?auth_error={reason}"), vec![clear_state.clone()])
    };
    if let Some(e) = q.error.as_deref() {
        let e: String = e.chars().filter(|c| c.is_ascii_alphanumeric() || *c == '_').take(40).collect();
        return fail(&e);
    }
    let Some(raw) = cookie(&headers, STATE_COOKIE) else { return fail("missing_state") };
    let Some((payload, sig)) = raw.split_once('.') else { return fail("bad_state") };
    if !verify(&st.session_key, payload, sig) {
        return fail("bad_state");
    }
    let Some(saved) = B64
        .decode(payload)
        .ok()
        .and_then(|b| serde_json::from_slice::<Value>(&b).ok())
    else {
        return fail("bad_state");
    };
    if saved["e"].as_i64().unwrap_or(0) < now() {
        return fail("state_expired");
    }
    if q.state.as_deref() != saved["s"].as_str() || q.state.is_none() {
        return fail("state_mismatch");
    }
    let Some(code) = q.code.as_deref() else { return fail("missing_code") };
    let verifier = saved["v"].as_str().unwrap_or_default();
    let next = safe_next(saved["n"].as_str());

    let res = st
        .http
        .post(format!("{}/oauth/token", st.cfg.api_url))
        .form(&[
            ("grant_type", "authorization_code"),
            ("code", code),
            ("redirect_uri", st.cfg.redirect_uri.as_str()),
            ("client_id", st.cfg.client_id.as_str()),
            ("client_secret", st.cfg.client_secret.as_str()),
            ("code_verifier", verifier),
        ])
        .send()
        .await;
    let tok: TokenResponse = match res {
        Ok(r) if r.status().is_success() => match r.json().await {
            Ok(t) => t,
            Err(_) => return fail("token_parse"),
        },
        Ok(r) => {
            let status = r.status();
            let body: Value = r.json().await.unwrap_or(Value::Null);
            tracing::warn!(%status, error = %body["error"], "token exchange refused");
            return fail("token_exchange");
        }
        Err(_) => return fail("token_network"),
    };
    let (user_id, user) = match fetch_user(&st, &tok.access_token).await {
        Ok(u) => u,
        Err(_) => return fail("user_fetch"),
    };
    let sid = random_token(32);
    let row = SessionRow {
        id_hash: sha256_hex(&sid),
        user_id: user_id.clone(),
        access_token: tok.access_token,
        refresh_token: tok.refresh_token,
        scope: tok.scope.unwrap_or_else(|| SCOPES.into()),
        expires_at: now() + tok.expires_in.unwrap_or(3600),
    };
    if st.db.upsert_user(&user_id, &user).and_then(|_| st.db.insert_session(&row)).is_err() {
        return fail("session_store");
    }
    tracing::info!(user = %user_id, "signed in");
    redirect_with_cookies(
        &next,
        vec![clear_state, set_cookie(SESSION_COOKIE, &sid, "/", 60 * 86400, secure)],
    )
}

/// GET {API}/users/auth -> (id, {id,name,email,photoUrl}) and the token's abilities when given.
async fn fetch_user_full(st: &AppState, token: &str) -> AppResult<(String, Value, String)> {
    let r = st
        .http
        .get(format!("{}/users/auth", st.cfg.api_url))
        .bearer_auth(token)
        .header("accept", "application/json")
        .timeout(Duration::from_secs(20))
        .send()
        .await?;
    if r.status() == StatusCode::UNAUTHORIZED || r.status() == StatusCode::FORBIDDEN {
        return Err(AppError::Unauthorized);
    }
    if !r.status().is_success() {
        return Err(AppError::Upstream(format!("users/auth returned {}", r.status())));
    }
    let v: Value = r.json().await?;
    let u = v.get("user").unwrap_or(&v);
    let id = match &u["id"] {
        Value::String(s) => s.clone(),
        Value::Number(n) => n.to_string(),
        _ => return Err(AppError::Upstream("users/auth: no user id".into())),
    };
    let abilities = v["token"]["abilities"]
        .as_array()
        .map(|a| a.iter().filter_map(Value::as_str).collect::<Vec<_>>().join(" "))
        .unwrap_or_default();
    let user = json!({
        "id": id,
        "name": u["name"],
        "email": u["email"],
        "photoUrl": u.get("photoUrl").or_else(|| u.get("photo_url")).cloned().unwrap_or(Value::Null),
    });
    Ok((id, user, abilities))
}

async fn fetch_user(st: &AppState, token: &str) -> AppResult<(String, Value)> {
    fetch_user_full(st, token).await.map(|(i, u, _)| (i, u))
}

// ------------------------------------------------------------------ logout / me

async fn logout(State(st): State<AppState>, headers: HeaderMap) -> AppResult<Response> {
    if !same_origin(&st, &headers) {
        return Err(AppError::Forbidden("cross-site request refused".into()));
    }
    if let Some(sid) = cookie(&headers, SESSION_COOKIE) {
        let h = sha256_hex(&sid);
        if let Some(row) = st.db.session(&h)? {
            let _ = st
                .http
                .post(format!("{}/oauth/revoke", st.cfg.api_url))
                .form(&[
                    ("token", row.access_token.as_str()),
                    ("client_id", st.cfg.client_id.as_str()),
                    ("client_secret", st.cfg.client_secret.as_str()),
                ])
                .timeout(Duration::from_secs(10))
                .send()
                .await;
        }
        st.db.delete_session(&h)?;
    }
    let mut res = Json(json!({ "ok": true })).into_response();
    res.headers_mut()
        .append(header::SET_COOKIE, set_cookie(SESSION_COOKIE, "", "/", 0, st.cfg.secure_cookies()));
    Ok(res)
}

async fn me(MaybeUser(p): MaybeUser) -> Json<Value> {
    match p {
        Some(p) => Json(json!({
            "user": p.user,
            "via": p.source.as_str(),
            "scopes": p.scope.split_whitespace().collect::<Vec<_>>(),
            "ai": p.can_use_ai(),
        })),
        None => Json(json!({ "user": null })),
    }
}

// ------------------------------------------------------------------ principal

#[derive(Debug, Clone)]
pub enum Source {
    Session,
    ApiKey,
    FeeefToken,
}

impl Source {
    pub fn as_str(&self) -> &'static str {
        match self {
            Self::Session => "session",
            Self::ApiKey => "api_key",
            Self::FeeefToken => "feeef_token",
        }
    }
}

#[derive(Debug, Clone)]
pub struct Principal {
    pub user_id: String,
    pub user: Value,
    pub source: Source,
    /// The user's feeef access token (session or bearer), used for Cloud AI.
    pub feeef_token: Option<String>,
    pub scope: String,
}

impl Principal {
    pub fn can_use_ai(&self) -> bool {
        self.feeef_token.is_some()
            && self.scope.split([' ', ',']).any(|s| s == "ai.generate" || s == "*")
    }
}

pub struct User(pub Principal);
pub struct MaybeUser(pub Option<Principal>);

fn bearer(headers: &HeaderMap) -> Option<String> {
    let v = headers.get(header::AUTHORIZATION)?.to_str().ok()?;
    let (scheme, tok) = v.split_once(' ')?;
    scheme.eq_ignore_ascii_case("bearer").then(|| tok.trim().to_owned()).filter(|t| !t.is_empty())
}

/// Resolve a bearer credential: personal API key or feeef access token.
pub async fn principal_from_bearer(st: &AppState, tok: &str) -> AppResult<Principal> {
    if tok.starts_with("firms_") {
        let uid = st.db.key_user(&sha256_hex(tok))?.ok_or(AppError::Unauthorized)?;
        let user = st.db.user(&uid)?.unwrap_or_else(|| json!({ "id": uid }));
        return Ok(Principal { user_id: uid, user, source: Source::ApiKey, feeef_token: None, scope: String::new() });
    }
    let key = sha256_hex(tok);
    let cached = {
        let mut c = st.token_cache.lock().unwrap_or_else(std::sync::PoisonError::into_inner);
        c.retain(|_, v| v.until > Instant::now());
        c.get(&key).cloned()
    };
    let cu = match cached {
        Some(cu) => cu,
        None => {
            let (user_id, user, scope) = fetch_user_full(st, tok).await?;
            let _ = st.db.upsert_user(&user_id, &user);
            let cu = CachedUser { user_id, user, scope, until: Instant::now() + Duration::from_secs(300) };
            let mut c = st.token_cache.lock().unwrap_or_else(std::sync::PoisonError::into_inner);
            if c.len() > 10_000 {
                c.clear();
            }
            c.insert(key, cu.clone());
            cu
        }
    };
    Ok(Principal {
        user_id: cu.user_id,
        user: cu.user,
        source: Source::FeeefToken,
        feeef_token: Some(tok.to_owned()),
        scope: cu.scope,
    })
}

/// Refresh the session's access token when it is about to expire (single flight per session).
async fn fresh_session(st: &AppState, row: SessionRow) -> AppResult<Option<SessionRow>> {
    if row.expires_at > now() + 60 || row.refresh_token.is_none() {
        return Ok(Some(row));
    }
    let lock = {
        let mut m = st.refresh_locks.lock().unwrap_or_else(std::sync::PoisonError::into_inner);
        m.entry(row.id_hash.clone()).or_insert_with(|| Arc::new(tokio::sync::Mutex::new(()))).clone()
    };
    let _g = lock.lock().await;
    // Another request may have refreshed while we waited.
    let Some(row) = st.db.session(&row.id_hash)? else { return Ok(None) };
    if row.expires_at > now() + 60 {
        return Ok(Some(row));
    }
    let Some(rt) = row.refresh_token.clone() else { return Ok(Some(row)) };
    let r = st
        .http
        .post(format!("{}/oauth/token", st.cfg.api_url))
        .form(&[
            ("grant_type", "refresh_token"),
            ("refresh_token", rt.as_str()),
            ("client_id", st.cfg.client_id.as_str()),
            ("client_secret", st.cfg.client_secret.as_str()),
        ])
        .timeout(Duration::from_secs(20))
        .send()
        .await?;
    if r.status().is_client_error() {
        tracing::info!(status = %r.status(), "refresh refused; ending session");
        st.db.delete_session(&row.id_hash)?;
        return Ok(None);
    }
    if !r.status().is_success() {
        return Err(AppError::Upstream(format!("token refresh returned {}", r.status())));
    }
    let t: TokenResponse = r.json().await?;
    let new = SessionRow {
        access_token: t.access_token,
        refresh_token: t.refresh_token.or(Some(rt)),
        scope: t.scope.unwrap_or(row.scope.clone()),
        expires_at: now() + t.expires_in.unwrap_or(3600),
        ..row
    };
    st.db.update_session_tokens(&new)?;
    Ok(Some(new))
}

pub async fn resolve(st: &AppState, parts: &Parts) -> AppResult<Option<Principal>> {
    if let Some(tok) = bearer(&parts.headers) {
        return principal_from_bearer(st, &tok).await.map(Some);
    }
    let Some(sid) = cookie(&parts.headers, SESSION_COOKIE) else { return Ok(None) };
    if is_unsafe(&parts.method) && !same_origin(st, &parts.headers) {
        return Err(AppError::Forbidden("cross-site request refused".into()));
    }
    let h = sha256_hex(&sid);
    let Some(row) = st.db.session(&h)? else { return Ok(None) };
    let Some(row) = fresh_session(st, row).await? else { return Ok(None) };
    let _ = st.db.touch_session(&h);
    let user = st.db.user(&row.user_id)?.unwrap_or_else(|| json!({ "id": row.user_id }));
    Ok(Some(Principal {
        user_id: row.user_id,
        user,
        source: Source::Session,
        feeef_token: Some(row.access_token),
        scope: row.scope,
    }))
}

impl FromRequestParts<AppState> for User {
    type Rejection = AppError;
    async fn from_request_parts(parts: &mut Parts, st: &AppState) -> Result<Self, Self::Rejection> {
        resolve(st, parts).await?.map(User).ok_or(AppError::Unauthorized)
    }
}

impl FromRequestParts<AppState> for MaybeUser {
    type Rejection = AppError;
    async fn from_request_parts(parts: &mut Parts, st: &AppState) -> Result<Self, Self::Rejection> {
        match resolve(st, parts).await {
            Ok(p) => Ok(MaybeUser(p)),
            Err(AppError::Unauthorized) => Ok(MaybeUser(None)),
            Err(e) => Err(e),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn next_must_be_local() {
        assert_eq!(safe_next(Some("/calendar?x=1")), "/calendar?x=1");
        assert_eq!(safe_next(Some("//evil.com")), "/");
        assert_eq!(safe_next(Some("https://evil.com")), "/");
        assert_eq!(safe_next(None), "/");
    }

    #[test]
    fn signatures_verify() {
        let k = b"0123456789abcdef0123456789abcdef";
        let s = sign(k, "payload");
        assert!(verify(k, "payload", &s));
        assert!(!verify(k, "payload2", &s));
    }

    #[test]
    fn origins_normalise() {
        assert_eq!(origin_of("http://localhost:8787/x?y").as_deref(), Some("http://localhost:8787"));
        assert_eq!(origin_of("https://Firms.apps.feeef.dev:443/").as_deref(), Some("https://firms.apps.feeef.dev"));
    }
}
