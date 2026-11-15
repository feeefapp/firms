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
               created_at INTEGER NOT NULL, updated_at INTEGER NOT NULL);
             CREATE TABLE IF NOT EXISTS oauth_clients (client_id TEXT PRIMARY KEY, json TEXT NOT NULL, created_at INTEGER NOT NULL);
             CREATE TABLE IF NOT EXISTS oauth_codes (
               hash TEXT PRIMARY KEY, client_id TEXT NOT NULL, user_id TEXT NOT NULL, redirect_uri TEXT NOT NULL,
               challenge TEXT NOT NULL, scope TEXT NOT NULL, resource TEXT NOT NULL, family TEXT NOT NULL,
               expires_at INTEGER NOT NULL, used INTEGER NOT NULL DEFAULT 0);
             CREATE TABLE IF NOT EXISTS oauth_tokens (
               hash TEXT PRIMARY KEY, kind TEXT NOT NULL, family TEXT NOT NULL, user_id TEXT NOT NULL, client_id TEXT NOT NULL,
               resource TEXT NOT NULL, scope TEXT NOT NULL, expires_at INTEGER NOT NULL, created_at INTEGER NOT NULL,
               used_at INTEGER, revoked INTEGER NOT NULL DEFAULT 0);
             CREATE INDEX IF NOT EXISTS oauth_tokens_family ON oauth_tokens(family);
             CREATE INDEX IF NOT EXISTS oauth_tokens_user ON oauth_tokens(user_id, client_id);
             CREATE TABLE IF NOT EXISTS oauth_grants (
               user_id TEXT NOT NULL, client_id TEXT NOT NULL, client_name TEXT NOT NULL, scope TEXT NOT NULL,
               created_at INTEGER NOT NULL, last_used_at INTEGER, PRIMARY KEY (user_id, client_id));
             CREATE TABLE IF NOT EXISTS agent_conversations (
               id TEXT PRIMARY KEY, user_id TEXT NOT NULL, title TEXT NOT NULL, created_at INTEGER NOT NULL, updated_at INTEGER NOT NULL);
             CREATE INDEX IF NOT EXISTS agent_conversations_user ON agent_conversations(user_id, updated_at);
             CREATE TABLE IF NOT EXISTS agent_messages (
               id TEXT PRIMARY KEY, conversation_id TEXT NOT NULL, role TEXT NOT NULL, parts TEXT NOT NULL,
               metadata TEXT, created_at INTEGER NOT NULL, seq INTEGER NOT NULL);
             CREATE INDEX IF NOT EXISTS agent_messages_conv ON agent_messages(conversation_id, seq);",
        )?;
        // Jobs interrupted by a restart can never finish.
        c.execute(
            "UPDATE jobs SET status='failed', result='{\"error\":\"interrupted by a server restart\"}' WHERE status IN ('queued','running')",
            [],
        )?;
        Ok(Self(Arc::new(Mutex::new(c))))
    }

    pub fn conn(&self) -> MutexGuard<'_, Connection> {
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

    /// Queued or running jobs started by one user.
    pub fn active_jobs_of(&self, user_id: &str) -> AppResult<i64> {
        Ok(self.conn().query_row(
            "SELECT COUNT(*) FROM jobs WHERE user_id=?1 AND status IN ('queued','running')",
            params![user_id],
            |r| r.get(0),
        )?)
    }

    pub fn queued_count(&self) -> AppResult<i64> {
        Ok(self
            .conn()
            .query_row("SELECT COUNT(*) FROM jobs WHERE status IN ('queued','running')", [], |r| r.get(0))?)
    }

    // -------------------------------------------------------------- MCP OAuth (see oauth.rs)
    pub fn put_client(&self, client_id: &str, meta: &Value) -> AppResult<()> {
        self.conn().execute(
            "INSERT INTO oauth_clients (client_id, json, created_at) VALUES (?1, ?2, ?3)
             ON CONFLICT(client_id) DO UPDATE SET json=excluded.json",
            params![client_id, meta.to_string(), now()],
        )?;
        Ok(())
    }

    pub fn client(&self, client_id: &str) -> AppResult<Option<Value>> {
        let s: Option<String> = self
            .conn()
            .query_row("SELECT json FROM oauth_clients WHERE client_id=?1", [client_id], |r| r.get(0))
            .optional()?;
        Ok(s.and_then(|s| serde_json::from_str(&s).ok()))
    }

    pub fn client_count_since(&self, since: i64) -> AppResult<i64> {
        Ok(self.conn().query_row("SELECT COUNT(*) FROM oauth_clients WHERE created_at >= ?1", [since], |r| r.get(0))?)
    }

    #[allow(clippy::too_many_arguments)]
    pub fn insert_code(
        &self,
        hash: &str,
        client_id: &str,
        user_id: &str,
        redirect_uri: &str,
        challenge: &str,
        scope: &str,
        resource: &str,
        family: &str,
        expires_at: i64,
    ) -> AppResult<()> {
        self.conn().execute(
            "INSERT INTO oauth_codes (hash, client_id, user_id, redirect_uri, challenge, scope, resource, family, expires_at)
             VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)",
            params![hash, client_id, user_id, redirect_uri, challenge, scope, resource, family, expires_at],
        )?;
        Ok(())
    }

    /// Mark a code used and return it (with `used` as it was before this call).
    pub fn take_code(&self, hash: &str) -> AppResult<Option<CodeRow>> {
        let c = self.conn();
        let row = c
            .query_row(
                "SELECT client_id, user_id, redirect_uri, challenge, scope, resource, family, expires_at, used FROM oauth_codes WHERE hash=?1",
                [hash],
                |r| {
                    Ok(CodeRow {
                        client_id: r.get(0)?,
                        user_id: r.get(1)?,
                        redirect_uri: r.get(2)?,
                        challenge: r.get(3)?,
                        scope: r.get(4)?,
                        resource: r.get(5)?,
                        family: r.get(6)?,
                        expires_at: r.get(7)?,
                        used: r.get::<_, i64>(8)? != 0,
                    })
                },
            )
            .optional()?;
        if row.is_some() {
            c.execute("UPDATE oauth_codes SET used=1 WHERE hash=?1", [hash])?;
        }
        Ok(row)
    }

    #[allow(clippy::too_many_arguments)]
    pub fn insert_token(
        &self,
        hash: &str,
        kind: &str,
        family: &str,
        user_id: &str,
        client_id: &str,
        resource: &str,
        scope: &str,
        expires_at: i64,
    ) -> AppResult<()> {
        self.conn().execute(
            "INSERT INTO oauth_tokens (hash, kind, family, user_id, client_id, resource, scope, expires_at, created_at)
             VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)",
            params![hash, kind, family, user_id, client_id, resource, scope, expires_at, now()],
        )?;
        Ok(())
    }

    pub fn token(&self, hash: &str) -> AppResult<Option<TokenRow>> {
        Ok(self
            .conn()
            .query_row(
                "SELECT kind, family, user_id, client_id, resource, scope, expires_at, used_at, revoked FROM oauth_tokens WHERE hash=?1",
                [hash],
                |r| {
                    Ok(TokenRow {
                        kind: r.get(0)?,
                        family: r.get(1)?,
                        user_id: r.get(2)?,
                        client_id: r.get(3)?,
                        resource: r.get(4)?,
                        scope: r.get(5)?,
                        expires_at: r.get(6)?,
                        used_at: r.get(7)?,
                        revoked: r.get::<_, i64>(8)? != 0,
                    })
                },
            )
            .optional()?)
    }

    /// Atomically mark a refresh token used; false when it was already used or revoked.
    pub fn use_refresh(&self, hash: &str) -> AppResult<bool> {
        Ok(self.conn().execute(
            "UPDATE oauth_tokens SET used_at=?2 WHERE hash=?1 AND kind='rt' AND used_at IS NULL AND revoked=0",
            params![hash, now()],
        )? == 1)
    }

    pub fn revoke_family(&self, family: &str) -> AppResult<usize> {
        Ok(self.conn().execute("UPDATE oauth_tokens SET revoked=1 WHERE family=?1", [family])?)
    }

    pub fn revoke_token(&self, hash: &str) -> AppResult<usize> {
        Ok(self.conn().execute("UPDATE oauth_tokens SET revoked=1 WHERE hash=?1", [hash])?)
    }

    pub fn upsert_grant(&self, user_id: &str, client_id: &str, client_name: &str, scope: &str) -> AppResult<()> {
        self.conn().execute(
            "INSERT INTO oauth_grants (user_id, client_id, client_name, scope, created_at) VALUES (?1, ?2, ?3, ?4, ?5)
             ON CONFLICT(user_id, client_id) DO UPDATE SET client_name=excluded.client_name, scope=excluded.scope",
            params![user_id, client_id, client_name, scope, now()],
        )?;
        Ok(())
    }

    pub fn touch_grant(&self, user_id: &str, client_id: &str) -> AppResult<()> {
        self.conn().execute(
            "UPDATE oauth_grants SET last_used_at=?3 WHERE user_id=?1 AND client_id=?2 AND (last_used_at IS NULL OR last_used_at < ?3 - 300)",
            params![user_id, client_id, now()],
        )?;
        Ok(())
    }

    /// Clients with an unrevoked, unexpired token for this user.
    /// (client_id, client_name, scope, created_at, last_used_at)
    #[allow(clippy::type_complexity)]
    pub fn grants(&self, user_id: &str) -> AppResult<Vec<(String, String, String, i64, Option<i64>)>> {
        let c = self.conn();
        let mut st = c.prepare(
            "SELECT g.client_id, g.client_name, g.scope, g.created_at, g.last_used_at FROM oauth_grants g
             WHERE g.user_id=?1 AND EXISTS (SELECT 1 FROM oauth_tokens t WHERE t.user_id=g.user_id AND t.client_id=g.client_id
               AND t.revoked=0 AND t.expires_at > ?2 AND (t.kind='at' OR t.used_at IS NULL))
             ORDER BY g.created_at DESC",
        )?;
        let rows = st.query_map(params![user_id, now()], |r| Ok((r.get(0)?, r.get(1)?, r.get(2)?, r.get(3)?, r.get(4)?)))?;
        Ok(rows.collect::<Result<_, _>>()?)
    }

    /// Revoke every token of `client_id` for this user and forget the grant. Returns revoked token count.
    pub fn revoke_grant(&self, user_id: &str, client_id: &str) -> AppResult<usize> {
        let c = self.conn();
        let n = c.execute(
            "UPDATE oauth_tokens SET revoked=1 WHERE user_id=?1 AND client_id=?2 AND revoked=0",
            params![user_id, client_id],
        )?;
        let g = c.execute("DELETE FROM oauth_grants WHERE user_id=?1 AND client_id=?2", params![user_id, client_id])?;
        Ok(n + g)
    }

    pub fn prune_oauth(&self) -> AppResult<()> {
        let c = self.conn();
        let t = now();
        c.execute("DELETE FROM oauth_codes WHERE expires_at < ?1", [t - 86400])?;
        c.execute("DELETE FROM oauth_tokens WHERE expires_at < ?1", [t - 7 * 86400])?;
        Ok(())
    }

    // -------------------------------------------------------------- agent conversations
    pub fn create_conversation(&self, id: &str, user_id: &str, title: &str) -> AppResult<()> {
        let t = now();
        self.conn().execute(
            "INSERT INTO agent_conversations (id, user_id, title, created_at, updated_at) VALUES (?1, ?2, ?3, ?4, ?4)",
            params![id, user_id, title, t],
        )?;
        Ok(())
    }

    pub fn conversations(&self, user_id: &str) -> AppResult<Vec<Value>> {
        let c = self.conn();
        let mut st = c.prepare(
            "SELECT id, title, created_at, updated_at FROM agent_conversations WHERE user_id=?1 ORDER BY updated_at DESC LIMIT 200",
        )?;
        let rows = st.query_map([user_id], |r| {
            Ok(serde_json::json!({
                "id": r.get::<_, String>(0)?,
                "title": r.get::<_, String>(1)?,
                "created_at": r.get::<_, i64>(2)?,
                "updated_at": r.get::<_, i64>(3)?,
            }))
        })?;
        Ok(rows.collect::<Result<_, _>>()?)
    }

    pub fn conversation(&self, user_id: &str, id: &str) -> AppResult<Option<Value>> {
        Ok(self
            .conn()
            .query_row(
                "SELECT id, title, created_at, updated_at FROM agent_conversations WHERE id=?1 AND user_id=?2",
                params![id, user_id],
                |r| {
                    Ok(serde_json::json!({
                        "id": r.get::<_, String>(0)?,
                        "title": r.get::<_, String>(1)?,
                        "created_at": r.get::<_, i64>(2)?,
                        "updated_at": r.get::<_, i64>(3)?,
                    }))
                },
            )
            .optional()?)
    }

    pub fn rename_conversation(&self, id: &str, title: &str) -> AppResult<()> {
        self.conn().execute("UPDATE agent_conversations SET title=?2 WHERE id=?1", params![id, title])?;
        Ok(())
    }

    pub fn delete_conversation(&self, user_id: &str, id: &str) -> AppResult<bool> {
        let c = self.conn();
        let n = c.execute("DELETE FROM agent_conversations WHERE id=?1 AND user_id=?2", params![id, user_id])?;
        if n > 0 {
            c.execute("DELETE FROM agent_messages WHERE conversation_id=?1", [id])?;
        }
        Ok(n > 0)
    }

    pub fn add_message(&self, id: &str, conversation_id: &str, role: &str, parts: &Value, metadata: Option<&Value>) -> AppResult<()> {
        let c = self.conn();
        let t = now();
        let seq: i64 = c.query_row(
            "SELECT COALESCE(MAX(seq), 0) + 1 FROM agent_messages WHERE conversation_id=?1",
            [conversation_id],
            |r| r.get(0),
        )?;
        c.execute(
            "INSERT INTO agent_messages (id, conversation_id, role, parts, metadata, created_at, seq) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)",
            params![id, conversation_id, role, parts.to_string(), metadata.map(Value::to_string), t, seq],
        )?;
        c.execute("UPDATE agent_conversations SET updated_at=?2 WHERE id=?1", params![conversation_id, t])?;
        Ok(())
    }

    pub fn messages(&self, conversation_id: &str) -> AppResult<Vec<Value>> {
        let c = self.conn();
        let mut st = c.prepare(
            "SELECT id, role, parts, metadata, created_at FROM agent_messages WHERE conversation_id=?1 ORDER BY seq",
        )?;
        let rows = st.query_map([conversation_id], |r| {
            let parts: String = r.get(2)?;
            let meta: Option<String> = r.get(3)?;
            Ok(serde_json::json!({
                "id": r.get::<_, String>(0)?,
                "role": r.get::<_, String>(1)?,
                "parts": serde_json::from_str::<Value>(&parts).unwrap_or(Value::Array(vec![])),
                "metadata": meta.and_then(|m| serde_json::from_str::<Value>(&m).ok()),
                "created_at": r.get::<_, i64>(4)?,
            }))
        })?;
        Ok(rows.collect::<Result<_, _>>()?)
    }
}

#[derive(Debug, Clone)]
pub struct CodeRow {
    pub client_id: String,
    pub user_id: String,
    pub redirect_uri: String,
    pub challenge: String,
    pub scope: String,
    pub resource: String,
    pub family: String,
    pub expires_at: i64,
    pub used: bool,
}

#[derive(Debug, Clone)]
pub struct TokenRow {
    pub kind: String,
    pub family: String,
    pub user_id: String,
    pub client_id: String,
    pub resource: String,
    pub scope: String,
    pub expires_at: i64,
    pub used_at: Option<i64>,
    pub revoked: bool,
}
