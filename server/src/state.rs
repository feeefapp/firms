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
    /// Per-session refresh mutex (refresh tokens rotate and are single-use).
    pub refresh_locks: Mutex<HashMap<String, Arc<tokio::sync::Mutex<()>>>>,
    /// Upstream FIRMS API calls in the current 10-minute window (quota guard).
    pub firms_calls: Mutex<(Instant, u32)>,
}

pub const FIRMS_CALLS_PER_10_MIN: u32 = 400;

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
            refresh_locks: Mutex::new(HashMap::new()),
            firms_calls: Mutex::new((Instant::now(), 0)),
        }))
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
