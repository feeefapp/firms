//! Background python jobs (tools/harmonize.py region builds, tools/fetch_data.py day snapshots).
//! One job runs at a time; stdout/stderr are captured into a short log tail stored in SQLite.

use std::collections::VecDeque;
use std::process::Stdio;
use std::sync::{Arc, Mutex};
use std::time::{Duration, Instant};

use chrono::NaiveDate;
use serde_json::{Value, json};
use tokio::io::{AsyncBufReadExt, BufReader};
use tokio::process::Command;

use crate::db::JobRow;
use crate::error::{AppError, AppResult};
use crate::state::AppState;

const TAIL_LINES: usize = 40;
const MAX_QUEUE: i64 = 5;

pub fn job_json(j: &JobRow) -> Value {
    json!({
        "id": j.id,
        "kind": j.kind,
        "args": j.args,
        "status": j.status,
        "log_tail": j.log_tail,
        "result": j.result,
        "created_at": j.created_at,
        "updated_at": j.updated_at,
    })
}

pub fn get(st: &AppState, id: &str) -> AppResult<Value> {
    st.db.job(id)?.map(|j| job_json(&j)).ok_or_else(|| AppError::NotFound("unknown job".into()))
}

fn valid_name(n: &str) -> bool {
    !n.is_empty() && n.len() <= 40 && n.chars().all(|c| c.is_ascii_lowercase() || c.is_ascii_digit() || c == '_' || c == '-')
}

/// Queue a region build: `python3 tools/harmonize.py --name --title --country --bbox`.
pub fn build_region(st: &AppState, user_id: &str, name: &str, title: Option<&str>, country: &str, bbox: &[f64; 4]) -> AppResult<Value> {
    if !valid_name(name) {
        return Err(AppError::bad("name must be 1-40 chars of a-z, 0-9, _ or -"));
    }
    if country.is_empty() || country.len() > 60 || !country.chars().all(|c| c.is_ascii_alphabetic() || c == '_') {
        return Err(AppError::bad("country must be a FIRMS country file name such as Lebanon or South_Sudan"));
    }
    if (bbox[2] - bbox[0]) * (bbox[3] - bbox[1]) > 400.0 {
        return Err(AppError::bad("bbox too large for a region build (max 400 square degrees)"));
    }
    let title = title.map(str::trim).filter(|t| !t.is_empty()).unwrap_or(name);
    if title.chars().count() > 80 {
        return Err(AppError::bad("title is too long"));
    }
    let bb = bbox.iter().map(|v| v.to_string()).collect::<Vec<_>>().join(",");
    let args = json!({ "name": name, "title": title, "country": country, "bbox": bbox });
    if let Some(j) = st.db.active_job("region", &args)? {
        return Ok(job_json(&j));
    }
    let argv = vec![
        "harmonize.py".to_owned(),
        "--name".into(),
        name.into(),
        "--title".into(),
        title.into(),
        "--country".into(),
        country.into(),
        format!("--bbox={bb}"),
    ];
    start(st, "region", args, Some(user_id), argv, Duration::from_secs(8 * 3600))
}

/// Queue a globe-day build: `python3 tools/fetch_data.py --date D --out DATA/day/D.js`.
pub fn build_day(st: &AppState, date: NaiveDate) -> AppResult<Value> {
    let args = json!({ "date": date.to_string() });
    if let Some(j) = st.db.active_job("day", &args)? {
        return Ok(job_json(&j));
    }
    let out = st.days.path(date);
    let argv = vec![
        "fetch_data.py".to_owned(),
        "--date".into(),
        date.to_string(),
        "--out".into(),
        out.to_string_lossy().into_owned(),
    ];
    start(st, "day", args, None, argv, Duration::from_secs(3600))
}

fn start(st: &AppState, kind: &str, args: Value, user: Option<&str>, argv: Vec<String>, limit: Duration) -> AppResult<Value> {
    if st.db.queued_count()? >= MAX_QUEUE {
        return Err(AppError::Unavailable("too many jobs queued, try again later".into()));
    }
    let id = format!("job_{}", crate::auth::random_token(12).replace(['-', '_'], "x"));
    st.db.insert_job(&id, kind, &args, user)?;
    let st2 = st.clone();
    let id2 = id.clone();
    let kind2 = kind.to_owned();
    tokio::spawn(async move {
        run(st2, id2, kind2, args, argv, limit).await;
    });
    get(st, &id)
}

struct Tail {
    lines: VecDeque<String>,
    last_flush: Instant,
}

fn tail_text(t: &Tail) -> String {
    t.lines.iter().cloned().collect::<Vec<_>>().join("\n")
}

async fn run(st: AppState, id: String, kind: String, args: Value, argv: Vec<String>, limit: Duration) {
    let Ok(_permit) = st.job_slot.acquire().await else { return };
    let tail = Arc::new(Mutex::new(Tail { lines: VecDeque::new(), last_flush: Instant::now() }));
    let _ = st.db.update_job(&id, "running", "", None);
    tracing::info!(job = %id, kind, "job started");
    let script = st.cfg.tools_dir.join(&argv[0]);
    let mut cmd = Command::new(&st.cfg.python);
    cmd.arg("-u")
        .arg(&script)
        .args(&argv[1..])
        .current_dir(&st.cfg.data_dir)
        .env("FIRMS_DATA_DIR", &st.cfg.data_dir)
        .env("PYTHONUNBUFFERED", "1")
        .stdin(Stdio::null())
        .stdout(Stdio::piped())
        .stderr(Stdio::piped())
        .kill_on_drop(true);
    if let Some(k) = &st.cfg.map_key {
        cmd.env("FIRMS_MAP_KEY", k);
    }
    let secret = st.cfg.map_key.clone();
    let finish = |status: &str, result: Value| {
        let text = tail_text(&tail.lock().unwrap_or_else(std::sync::PoisonError::into_inner));
        let _ = st.db.update_job(&id, status, &text, Some(&result));
        tracing::info!(job = %id, status, "job finished");
    };
    let mut child = match cmd.spawn() {
        Ok(c) => c,
        Err(e) => {
            finish("failed", json!({ "error": format!("cannot start python: {e}") }));
            return;
        }
    };
    let mut readers = Vec::new();
    let out = child.stdout.take().map(|s| Box::new(s) as Box<dyn tokio::io::AsyncRead + Unpin + Send>);
    let err = child.stderr.take().map(|s| Box::new(s) as Box<dyn tokio::io::AsyncRead + Unpin + Send>);
    for stream in [out, err].into_iter().flatten() {
        let tail = tail.clone();
        let st = st.clone();
        let id = id.clone();
        let secret = secret.clone();
        readers.push(tokio::spawn(async move {
            let mut lines = BufReader::new(stream).lines();
            while let Ok(Some(line)) = lines.next_line().await {
                let mut line: String = line.chars().take(300).collect();
                if let Some(s) = &secret {
                    line = line.replace(s.as_str(), "***");
                }
                let flush = {
                    let mut t = tail.lock().unwrap_or_else(std::sync::PoisonError::into_inner);
                    t.lines.push_back(line);
                    while t.lines.len() > TAIL_LINES {
                        t.lines.pop_front();
                    }
                    if t.last_flush.elapsed() > Duration::from_secs(1) {
                        t.last_flush = Instant::now();
                        Some(tail_text(&t))
                    } else {
                        None
                    }
                };
                if let Some(text) = flush {
                    let _ = st.db.update_job(&id, "running", &text, None);
                }
            }
        }));
    }
    let status = tokio::time::timeout(limit, child.wait()).await;
    if status.is_err() {
        let _ = child.kill().await;
    }
    for r in readers {
        let _ = r.await;
    }
    match status {
        Ok(Ok(s)) if s.success() => {
            let result = match kind.as_str() {
                "region" => {
                    st.reload_regions();
                    json!({ "region": args["name"] })
                }
                "day" => {
                    if let Some(d) = args["date"].as_str().and_then(|d| NaiveDate::parse_from_str(d, "%Y-%m-%d").ok()) {
                        st.days.forget(d);
                    }
                    json!({ "date": args["date"], "url": format!("/api/day?date={}", args["date"].as_str().unwrap_or("")) })
                }
                _ => json!({}),
            };
            finish("done", result);
        }
        Ok(Ok(s)) => finish("failed", json!({ "error": format!("exit status {}", s.code().unwrap_or(-1)) })),
        Ok(Err(e)) => finish("failed", json!({ "error": e.to_string() })),
        Err(_) => finish("failed", json!({ "error": "timed out" })),
    }
}
