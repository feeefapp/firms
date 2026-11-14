//! SQLite (rusqlite, bundled): users, sessions, API keys and background jobs.

use std::path::Path;
use std::sync::{Arc, Mutex, MutexGuard};

use rusqlite::{Connection, OptionalExtension, params};
use serde_json::Value;

use crate::error::AppResult;

#[derive(Clone, Debug)]
pub struct Db(Arc<Mutex<Connection>>);

#[derive(Debug, Clone)]
pub struct SessionRow {
    pub id_hash: String,
    pub user_id: String,
    pub access_token: String,
    pub refresh_token: Option<String>,
    pub scope: String,
    pub expires_at: i64,
}

#[derive(Debug, Clone)]
pub struct JobRow {
    pub id: String,
    pub kind: String,
    pub args: Value,
    pub status: String,
    pub log_tail: String,
    pub result: Option<Value>,
    pub created_at: i64,
    pub updated_at: i64,
}

pub fn now() -> i64 {
    chrono::Utc::now().timestamp()
}

impl Db {
    pub fn open(path: &Path) -> AppResult<Self> {
        let c = Connection::open(path)?;
        c.execute_batch(
            "PRAGMA journal_mode=WAL;
             PRAGMA busy_timeout=5000;
             CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, json TEXT NOT NULL, updated_at INTEGER NOT NULL);
             CREATE TABLE IF NOT EXISTS sessions (
               id_hash TEXT PRIMARY KEY, user_id TEXT NOT NULL, access_token TEXT NOT NULL, refresh_token TEXT,
               scope TEXT NOT NULL DEFAULT '', expires_at INTEGER NOT NULL, created_at INTEGER NOT NULL, last_seen INTEGER NOT NULL);
             CREATE TABLE IF NOT EXISTS api_keys (
               id TEXT PRIMARY KEY, user_id TEXT NOT NULL, name TEXT NOT NULL, prefix TEXT NOT NULL,
               hash TEXT NOT NULL UNIQUE, created_at INTEGER NOT NULL, last_used_at INTEGER);
             CREATE TABLE IF NOT EXISTS jobs (
               id TEXT PRIMARY KEY, kind TEXT NOT NULL, args TEXT NOT NULL, status TEXT NOT NULL,
               log_tail TEXT NOT NULL DEFAULT '', result TEXT, user_id TEXT,
               created_at INTEGER NOT NULL, updated_at INTEGER NOT NULL);",
        )?;
        // Jobs interrupted by a restart can never finish.
        c.execute(
            "UPDATE jobs SET status='failed', result='{\"error\":\"interrupted by a server restart\"}' WHERE status IN ('queued','running')",
            [],
        )?;
        Ok(Self(Arc::new(Mutex::new(c))))
    }

    fn conn(&self) -> MutexGuard<'_, Connection> {
        self.0.lock().unwrap_or_else(std::sync::PoisonError::into_inner)
    }

    // -------------------------------------------------------------- users
    pub fn upsert_user(&self, id: &str, user: &Value) -> AppResult<()> {
        self.conn().execute(
            "INSERT INTO users (id, json, updated_at) VALUES (?1, ?2, ?3)
             ON CONFLICT(id) DO UPDATE SET json=excluded.json, updated_at=excluded.updated_at",
            params![id, user.to_string(), now()],
        )?;
        Ok(())
    }

    pub fn user(&self, id: &str) -> AppResult<Option<Value>> {
        let s: Option<String> = self
            .conn()
            .query_row("SELECT json FROM users WHERE id=?1", [id], |r| r.get(0))
            .optional()?;
        Ok(s.and_then(|s| serde_json::from_str(&s).ok()))
    }

    // -------------------------------------------------------------- sessions
    pub fn insert_session(&self, s: &SessionRow) -> AppResult<()> {
        let t = now();
        self.conn().execute(
            "INSERT INTO sessions (id_hash, user_id, access_token, refresh_token, scope, expires_at, created_at, last_seen)
             VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?7)",
            params![s.id_hash, s.user_id, s.access_token, s.refresh_token, s.scope, s.expires_at, t],
        )?;
        Ok(())
    }

    pub fn session(&self, id_hash: &str) -> AppResult<Option<SessionRow>> {
        Ok(self
            .conn()
            .query_row(
                "SELECT id_hash, user_id, access_token, refresh_token, scope, expires_at FROM sessions WHERE id_hash=?1",
                [id_hash],
                |r| {
                    Ok(SessionRow {
                        id_hash: r.get(0)?,
                        user_id: r.get(1)?,
                        access_token: r.get(2)?,
                        refresh_token: r.get(3)?,
                        scope: r.get(4)?,
                        expires_at: r.get(5)?,
                    })
                },
            )
            .optional()?)
    }

    pub fn update_session_tokens(&self, s: &SessionRow) -> AppResult<()> {
        self.conn().execute(
            "UPDATE sessions SET access_token=?2, refresh_token=?3, scope=?4, expires_at=?5, last_seen=?6 WHERE id_hash=?1",
            params![s.id_hash, s.access_token, s.refresh_token, s.scope, s.expires_at, now()],
        )?;
        Ok(())
    }

    pub fn touch_session(&self, id_hash: &str) -> AppResult<()> {
        self.conn().execute(
            "UPDATE sessions SET last_seen=?2 WHERE id_hash=?1 AND last_seen < ?2 - 300",
            params![id_hash, now()],
        )?;
        Ok(())
    }

    pub fn delete_session(&self, id_hash: &str) -> AppResult<()> {
        self.conn().execute("DELETE FROM sessions WHERE id_hash=?1", [id_hash])?;
        Ok(())
    }

    /// Sessions idle for 60 days are dropped.
    pub fn prune_sessions(&self) -> AppResult<usize> {
        Ok(self
            .conn()
            .execute("DELETE FROM sessions WHERE last_seen < ?1", [now() - 60 * 86400])?)
    }

    // -------------------------------------------------------------- api keys
    pub fn insert_key(&self, id: &str, user_id: &str, name: &str, prefix: &str, hash: &str) -> AppResult<()> {
        self.conn().execute(
            "INSERT INTO api_keys (id, user_id, name, prefix, hash, created_at) VALUES (?1, ?2, ?3, ?4, ?5, ?6)",
            params![id, user_id, name, prefix, hash, now()],
        )?;
        Ok(())
    }

    pub fn keys(&self, user_id: &str) -> AppResult<Vec<Value>> {
        let c = self.conn();
        let mut st = c.prepare(
            "SELECT id, name, prefix, created_at, last_used_at FROM api_keys WHERE user_id=?1 ORDER BY created_at DESC",
        )?;
        let rows = st.query_map([user_id], |r| {
            Ok(serde_json::json!({
                "id": r.get::<_, String>(0)?,
                "name": r.get::<_, String>(1)?,
                "prefix": r.get::<_, String>(2)?,
                "created_at": r.get::<_, i64>(3)?,
                "last_used_at": r.get::<_, Option<i64>>(4)?,
            }))
        })?;
        Ok(rows.collect::<Result<_, _>>()?)
    }

    pub fn delete_key(&self, user_id: &str, id: &str) -> AppResult<bool> {
        Ok(self
            .conn()
            .execute("DELETE FROM api_keys WHERE id=?1 AND user_id=?2", params![id, user_id])?
            > 0)
    }

    /// User id owning the key with this hash (and stamps `last_used_at`).
    pub fn key_user(&self, hash: &str) -> AppResult<Option<String>> {
        let c = self.conn();
        let user: Option<(String, String)> = c
            .query_row("SELECT id, user_id FROM api_keys WHERE hash=?1", [hash], |r| Ok((r.get(0)?, r.get(1)?)))
            .optional()?;
        if let Some((id, _)) = &user {
            c.execute("UPDATE api_keys SET last_used_at=?2 WHERE id=?1", params![id, now()])?;
        }
        Ok(user.map(|(_, u)| u))
    }

    // -------------------------------------------------------------- jobs
    pub fn insert_job(&self, id: &str, kind: &str, args: &Value, user_id: Option<&str>) -> AppResult<()> {
        let t = now();
        self.conn().execute(
            "INSERT INTO jobs (id, kind, args, status, user_id, created_at, updated_at) VALUES (?1, ?2, ?3, 'queued', ?4, ?5, ?5)",
            params![id, kind, args.to_string(), user_id, t],
        )?;
        Ok(())
    }

    pub fn update_job(&self, id: &str, status: &str, log_tail: &str, result: Option<&Value>) -> AppResult<()> {
        self.conn().execute(
            "UPDATE jobs SET status=?2, log_tail=?3, result=?4, updated_at=?5 WHERE id=?1",
            params![id, status, log_tail, result.map(Value::to_string), now()],
        )?;
        Ok(())
    }

    fn job_from(r: &rusqlite::Row<'_>) -> rusqlite::Result<JobRow> {
        let args: String = r.get(2)?;
        let result: Option<String> = r.get(5)?;
        Ok(JobRow {
            id: r.get(0)?,
            kind: r.get(1)?,
            args: serde_json::from_str(&args).unwrap_or(Value::Null),
            status: r.get(3)?,
            log_tail: r.get(4)?,
            result: result.and_then(|s| serde_json::from_str(&s).ok()),
            created_at: r.get(6)?,
            updated_at: r.get(7)?,
        })
    }

    pub fn job(&self, id: &str) -> AppResult<Option<JobRow>> {
        Ok(self
            .conn()
            .query_row(
                "SELECT id, kind, args, status, log_tail, result, created_at, updated_at FROM jobs WHERE id=?1",
                [id],
                Self::job_from,
            )
            .optional()?)
    }

    /// An unfinished job of `kind` whose args equal `args` (to dedupe day builds).
    pub fn active_job(&self, kind: &str, args: &Value) -> AppResult<Option<JobRow>> {
        Ok(self
            .conn()
            .query_row(
                "SELECT id, kind, args, status, log_tail, result, created_at, updated_at FROM jobs
                 WHERE kind=?1 AND args=?2 AND status IN ('queued','running') ORDER BY created_at DESC LIMIT 1",
                params![kind, args.to_string()],
                Self::job_from,
            )
            .optional()?)
    }

    pub fn queued_count(&self) -> AppResult<i64> {
        Ok(self
            .conn()
            .query_row("SELECT COUNT(*) FROM jobs WHERE status IN ('queued','running')", [], |r| r.get(0))?)
    }
}
