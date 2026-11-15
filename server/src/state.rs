//! Shared application state.

use std::collections::HashMap;
use std::sync::{Arc, Mutex, RwLock};
use std::time::{Duration, Instant};

use serde_json::Value;

use crate::config::Config;
use crate::data::Regions;
use crate::db::Db;
use crate::live::DayCache;

#[derive(Clone, Debug)]
pub struct AppState(pub Arc<Inner>);

impl std::ops::Deref for AppState {
    type Target = Inner;
    fn deref(&self) -> &Inner {
        &self.0
    }
}

#[derive(Debug, Clone)]
pub struct CachedUser {
    pub user_id: String,
    pub user: Value,
    pub scope: String,
    pub until: Instant,
}

#[derive(Debug)]
pub struct Inner {
    pub cfg: Config,
    pub db: Db,
    pub http: reqwest::Client,
    regions: RwLock<Arc<Regions>>,
    pub days: DayCache,
    /// One background python job at a time.
    pub job_slot: tokio::sync::Semaphore,
    pub session_key: Vec<u8>,
    /// feeef access token hash -> user (validated with GET /users/auth, ~5 minutes).
    pub token_cache: Mutex<HashMap<String, CachedUser>>,
    /// Tokens feeef refused (hash -> until), so a bad token costs one upstream call a minute.
    pub bad_tokens: Mutex<HashMap<String, Instant>>,
    /// Per-client request counters (ip|bucket -> window start, count) for the rate limiter.
    pub rate: Mutex<HashMap<String, (Instant, u32)>>,
    /// Per-session refresh mutex (refresh tokens rotate and are single-use).
    pub refresh_locks: Mutex<HashMap<String, Arc<tokio::sync::Mutex<()>>>>,
    /// Upstream FIRMS API calls in the current 10-minute window (quota guard).
    pub firms_calls: Mutex<(Instant, u32)>,
    /// MCP 2025-11-25 SSE elicitation: request id -> (user id, answer channel).
    pub mcp_pending: Mutex<HashMap<String, (String, tokio::sync::oneshot::Sender<Value>)>>,
    /// CIMD client metadata documents (client_id URL -> fetched at, metadata), 1 hour.
    pub cimd_cache: Mutex<HashMap<String, (Instant, Value)>>,
    /// In-app agent runs (resumable event logs), kept 30 minutes after they end.
    pub runs: Mutex<HashMap<String, Arc<crate::chat::Run>>>,
    /// Client Idempotency-Key (scoped per user) -> run id.
    pub run_keys: Mutex<HashMap<String, String>>,
    /// AI catalog per user token hash, ~60 s.
    pub catalog_cache: Mutex<HashMap<String, (Instant, Value)>>,
}

pub const FIRMS_CALLS_PER_10_MIN: u32 = 400;

impl AppState {
    /// Fixed-window limiter: `max` requests per `window` for one client and bucket.
    pub fn allow(&self, client: &str, bucket: &str, max: u32, window: Duration) -> bool {
        let mut m = lock(&self.rate);
        if m.len() > 100_000 {
            m.retain(|_, (t, _)| t.elapsed() < Duration::from_secs(3600));
        }
        let e = m.entry(format!("{client}|{bucket}")).or_insert((Instant::now(), 0));
        if e.0.elapsed() > window {
            *e = (Instant::now(), 0);
        }
        e.1 += 1;
        e.1 <= max
    }
}

/// Poison-tolerant lock.
pub fn lock<T>(m: &Mutex<T>) -> std::sync::MutexGuard<'_, T> {
    m.lock().unwrap_or_else(std::sync::PoisonError::into_inner)
}

#[cfg(test)]
pub fn test_state() -> AppState {
    let dir = std::env::temp_dir().join(format!("firms-test-{}", crate::auth::random_token(6).replace(['-', '_'], "x")));
    std::fs::create_dir_all(dir.join("regions")).expect("tmp");
    let seed = std::path::Path::new(env!("CARGO_MANIFEST_DIR")).join("../data");
    for e in std::fs::read_dir(seed.join("regions")).expect("seed").flatten() {
        let _ = std::fs::copy(e.path(), dir.join("regions").join(e.file_name()));
    }
    let _ = std::fs::copy(seed.join("benchmark.json"), dir.join("benchmark.json"));
    let cfg = Config::for_tests(dir.clone());
    let db = Db::open(std::path::Path::new(":memory:")).expect("db");
    AppState::new(cfg, db, vec![7u8; 32])
}

impl AppState {
    pub fn new(cfg: Config, db: Db, session_key: Vec<u8>) -> Self {
        let http = reqwest::Client::builder()
            .user_agent(concat!("firms-server/", env!("CARGO_PKG_VERSION")))
            .connect_timeout(Duration::from_secs(15))
            .timeout(Duration::from_secs(180))
            .build()
            .unwrap_or_default();
        let regions = Regions::load(&cfg.data_dir.join("regions"));
        Self(Arc::new(Inner {
            days: DayCache::new(cfg.data_dir.join("day")),
            cfg,
            db,
            http,
            regions: RwLock::new(Arc::new(regions)),
            job_slot: tokio::sync::Semaphore::new(1),
            session_key,
            token_cache: Mutex::new(HashMap::new()),
            bad_tokens: Mutex::new(HashMap::new()),
            rate: Mutex::new(HashMap::new()),
            refresh_locks: Mutex::new(HashMap::new()),
            firms_calls: Mutex::new((Instant::now(), 0)),
            mcp_pending: Mutex::new(HashMap::new()),
            cimd_cache: Mutex::new(HashMap::new()),
            runs: Mutex::new(HashMap::new()),
            run_keys: Mutex::new(HashMap::new()),
            catalog_cache: Mutex::new(HashMap::new()),
        }))
    }

    /// A purpose-bound key derived from the session key (HMAC(session_key, purpose)).
    pub fn key_for(&self, purpose: &str) -> Vec<u8> {
        crate::tools::derive_key(&self.session_key, purpose)
    }

    pub fn regions(&self) -> Arc<Regions> {
        self.regions.read().unwrap_or_else(std::sync::PoisonError::into_inner).clone()
    }

    pub fn reload_regions(&self) {
        let r = Regions::load(&self.cfg.data_dir.join("regions"));
        tracing::info!(count = r.list.len(), global = r.global_kind, "regions loaded");
        *self.regions.write().unwrap_or_else(std::sync::PoisonError::into_inner) = Arc::new(r);
    }

    /// Count one upstream FIRMS call; false when the local quota guard is exhausted.
    pub fn take_firms_call(&self) -> bool {
        let mut g = self.firms_calls.lock().unwrap_or_else(std::sync::PoisonError::into_inner);
        if g.0.elapsed() > Duration::from_secs(600) {
            *g = (Instant::now(), 0);
        }
        if g.1 >= FIRMS_CALLS_PER_10_MIN {
            return false;
        }
        g.1 += 1;
        true
    }
}
