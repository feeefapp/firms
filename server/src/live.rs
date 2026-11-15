//! Globe day snapshots (`day/YYYY-MM-DD.js`, written by tools/fetch_data.py) and the live
//! VIIRS → Aqua-equivalent conversion of one day's detections inside a bbox.

use std::collections::HashMap;
use std::path::PathBuf;
use std::sync::{Arc, Mutex};

use bytes::Bytes;
use chrono::{Datelike, NaiveDate};
use serde::Deserialize;
use serde_json::{Value, json};

use crate::data::{CELL_DEG, Calib, fbin};
use crate::error::{AppError, AppResult};
use crate::firms;
use crate::state::AppState;

const PREFIX: &[u8] = b"window.FIRMS_DATA=";

#[derive(Debug, Deserialize)]
pub struct SatInfo {
    pub code: String,
    pub name: String,
    pub system: u8,
}

#[derive(Debug, Deserialize)]
struct Cols {
    lat: Vec<f64>,
    lon: Vec<f64>,
    t: Vec<i64>,
    sat: Vec<usize>,
    conf: Vec<u8>,
    craw: Vec<f64>,
    frp: Vec<Option<f64>>,
}

#[derive(Debug, Deserialize)]
struct DayFile {
    sats: Vec<SatInfo>,
    cols: Cols,
}

/// One detection reduced to what the conversion needs.
#[derive(Debug, Clone, Copy)]
pub struct Rec {
    pub lat: f64,
    pub lon: f64,
    pub t: i64,
    pub sat: usize,
    pub conf: u8,
    pub craw: f64,
    pub frp: f64,
}

#[derive(Debug)]
pub struct Parsed {
    pub sats: Vec<SatInfo>,
    pub recs: Vec<Rec>,
}

#[derive(Debug)]
pub struct DayCache {
    dir: PathBuf,
    raw: Mutex<Vec<(NaiveDate, Bytes)>>,
    parsed: Mutex<Vec<(NaiveDate, Arc<Parsed>)>>,
}

impl DayCache {
    pub fn new(dir: PathBuf) -> Self {
        Self { dir, raw: Mutex::new(Vec::new()), parsed: Mutex::new(Vec::new()) }
    }

    pub fn path(&self, date: NaiveDate) -> PathBuf {
        self.dir.join(format!("{date}.js"))
    }

    pub fn available(&self) -> Vec<String> {
        let mut v: Vec<String> = std::fs::read_dir(&self.dir)
            .map(|rd| {
                rd.flatten()
                    .filter_map(|e| e.file_name().to_str().and_then(|n| n.strip_suffix(".js")).map(str::to_owned))
                    .filter(|n| NaiveDate::parse_from_str(n, "%Y-%m-%d").is_ok())
                    .collect()
            })
            .unwrap_or_default();
        v.sort();
        v
    }

    pub fn latest(&self) -> Option<NaiveDate> {
        self.available().last().and_then(|s| NaiveDate::parse_from_str(s, "%Y-%m-%d").ok())
    }

    /// The snapshot JSON (without the `window.FIRMS_DATA=` prefix and trailing `;`).
    pub async fn json(&self, date: NaiveDate) -> AppResult<Option<Bytes>> {
        if let Some(b) = lock(&self.raw).iter().find(|(d, _)| *d == date).map(|(_, b)| b.clone()) {
            return Ok(Some(b));
        }
        let path = self.path(date);
        let bytes = match tokio::fs::read(&path).await {
            Ok(b) => Bytes::from(b),
            Err(e) if e.kind() == std::io::ErrorKind::NotFound => return Ok(None),
            Err(e) => return Err(e.into()),
        };
        let mut s = 0;
        if bytes.starts_with(PREFIX) {
            s = PREFIX.len();
        }
        let mut e = bytes.len();
        while e > s && matches!(bytes[e - 1], b'\n' | b'\r' | b' ' | b';') {
            e -= 1;
        }
        let body = bytes.slice(s..e);
        let mut raw = lock(&self.raw);
        raw.retain(|(d, _)| *d != date);
        raw.push((date, body.clone()));
        if raw.len() > 2 {
            raw.remove(0);
        }
        Ok(Some(body))
    }

    pub async fn parsed(&self, date: NaiveDate) -> AppResult<Option<Arc<Parsed>>> {
        if let Some(p) = lock(&self.parsed).iter().find(|(d, _)| *d == date).map(|(_, p)| p.clone()) {
            return Ok(Some(p));
        }
        let Some(body) = self.json(date).await? else { return Ok(None) };
        let parsed = tokio::task::spawn_blocking(move || -> AppResult<Parsed> {
            let f: DayFile = serde_json::from_slice(&body)?;
            let c = f.cols;
            let n = c.lat.len();
            let recs = (0..n)
                .map(|i| Rec {
                    lat: c.lat[i],
                    lon: c.lon[i],
                    t: c.t.get(i).copied().unwrap_or(0),
                    sat: c.sat.get(i).copied().unwrap_or(usize::MAX),
                    conf: c.conf.get(i).copied().unwrap_or(0),
                    craw: c.craw.get(i).copied().unwrap_or(-1.0),
                    frp: c.frp.get(i).copied().flatten().unwrap_or(0.0),
                })
                .collect();
            Ok(Parsed { sats: f.sats, recs })
        })
        .await
        .map_err(|e| AppError::Internal(format!("join: {e}")))??;
        let p = Arc::new(parsed);
        let mut cache = lock(&self.parsed);
        cache.retain(|(d, _)| *d != date);
        cache.push((date, p.clone()));
        if cache.len() > 2 {
            cache.remove(0);
        }
        Ok(Some(p))
    }

    pub fn forget(&self, date: NaiveDate) {
        lock(&self.raw).retain(|(d, _)| *d != date);
        lock(&self.parsed).retain(|(d, _)| *d != date);
    }
}

fn lock<T>(m: &Mutex<T>) -> std::sync::MutexGuard<'_, T> {
    m.lock().unwrap_or_else(std::sync::PoisonError::into_inner)
}

// ------------------------------------------------------------------ conversion

#[derive(Debug, Default, Clone, Copy)]
struct Cell {
    n: u32,
    frp: f64,
}

/// Fire-day cells per satellite index: MODIS needs raw confidence ≥ 30,
/// VIIRS drops `low`; cell = (local solar day, floor(lat/0.02), floor(lon/0.02)).
/// (local solar day, lat cell, lon cell) -> (pixels, FRP sum)
pub type CellMap = HashMap<(i64, i64, i64), (u32, f64)>;

pub fn cells(p: &Parsed, bb: &[f64; 4]) -> (HashMap<usize, u64>, HashMap<usize, CellMap>) {
    let mut rows: HashMap<usize, u64> = HashMap::new();
    let mut per: HashMap<usize, HashMap<(i64, i64, i64), Cell>> = HashMap::new();
    for r in &p.recs {
        if r.lat < bb[1] || r.lat > bb[3] || r.lon < bb[0] || r.lon > bb[2] {
            continue;
        }
        let Some(sat) = p.sats.get(r.sat) else { continue };
        *rows.entry(r.sat).or_default() += 1;
        if sat.system == 0 && r.craw < 30.0 {
            continue;
        }
        if sat.system == 1 && r.conf < 1 {
            continue;
        }
        let day = (r.t as f64 + r.lon / 15.0 * 3600.0).div_euclid(86400.0).floor() as i64;
        let key = (day, (r.lat / CELL_DEG).floor() as i64, (r.lon / CELL_DEG).floor() as i64);
        let c = per.entry(r.sat).or_default().entry(key).or_default();
        c.n += 1;
        c.frp += r.frp;
    }
    let per = per
        .into_iter()
        .map(|(k, m)| (k, m.into_iter().map(|(kk, c)| (kk, (c.n, c.frp))).collect()))
        .collect();
    (rows, per)
}

/// Conversion for calendar month `month` (0-11), season = month/3, C cells.
pub fn convert(p: &Calib, cells: &CellMap, month: usize) -> Value {
    let se = month / 3;
    let c = cells.len() as f64;
    let frp_sum: f64 = cells.values().map(|(_, f)| p.rho_season[se][fbin(*f)]).sum();
    let frp = frp_sum + p.extra[month] * c;
    let rm = p.k_month[month] * c;
    let r3 = |x: f64| (x * 1000.0).round() / 1000.0;
    json!({
        "cells": cells.len(),
        "ratio": r3(p.k_single * c),
        "ratio_month": r3(rm),
        "frp_season": r3(frp),
        "ensemble": r3((frp + rm) / 2.0),
    })
}

/// Records from the FIRMS area API when no snapshot exists for the date.
async fn from_api(st: &AppState, bb: &[f64; 4], date: NaiveDate) -> AppResult<Parsed> {
    let sats: Vec<SatInfo> = [("T", "Terra", 0), ("A", "Aqua", 0), ("N", "Suomi NPP", 1), ("N20", "NOAA-20", 1), ("N21", "NOAA-21", 1)]
        .into_iter()
        .map(|(c, n, s)| SatInfo { code: c.into(), name: n.into(), system: s })
        .collect();
    let mut recs = Vec::new();
    for src in firms::DEFAULT_SOURCES {
        let text = firms::area_csv(st, src, bb, 1, date).await?;
        for h in firms::parse_csv(&text, src) {
            let Some(si) = sats.iter().position(|s| s.code == h.satellite) else { continue };
            recs.push(Rec {
                lat: h.latitude,
                lon: h.longitude,
                t: h.timestamp().unwrap_or(0),
                sat: si,
                conf: h.confidence,
                craw: if h.is_modis() { h.raw_pct().unwrap_or(-1.0) } else { -1.0 },
                frp: h.frp.unwrap_or(0.0),
            });
        }
    }
    Ok(Parsed { sats, recs })
}

pub async fn live(st: &AppState, bb: [f64; 4], date: Option<&str>) -> AppResult<Value> {
    let date = match date.filter(|d| !d.is_empty()) {
        Some(d) => firms::parse_date(Some(d))?,
        None => st.days.latest().unwrap_or(firms::parse_date(None)?),
    };
    let (parsed, origin) = match st.days.parsed(date).await? {
        Some(p) => (p, "snapshot"),
        None => (Arc::new(from_api(st, &bb, date).await?), "firms_api"),
    };
    let regions = st.regions();
    let region = regions.containing(&bb);
    let (calib, calibration) = match &region {
        Some(r) => (r.calib.clone(), json!({ "kind": "region", "region": r.name, "title": r.title, "title_en": r.title_en })),
        None => (
            regions.global.clone().ok_or_else(|| AppError::Unavailable("no calibration available".into()))?,
            json!({ "kind": "global", "method": regions.global_kind, "regions": regions.list.len() }),
        ),
    };
    let month = date.month0() as usize;
    let (rows, per) = cells(&parsed, &bb);
    let mut satellites = serde_json::Map::new();
    for (i, s) in parsed.sats.iter().enumerate() {
        let r = rows.get(&i).copied().unwrap_or(0);
        if r == 0 && s.system > 1 {
            continue;
        }
        let c = (s.system <= 1).then(|| per.get(&i).map_or(0, HashMap::len));
        satellites.insert(s.code.clone(), json!({ "name": s.name, "system": s.system, "rows": r, "fire_day_cells": c }));
    }
    let empty = HashMap::new();
    let mut conversions = serde_json::Map::new();
    for code in ["N", "N20", "N21"] {
        if let Some(i) = parsed.sats.iter().position(|s| s.code == code) {
            let mut v = convert(&calib, per.get(&i).unwrap_or(&empty), month);
            v["name"] = json!(parsed.sats[i].name);
            conversions.insert(code.into(), v);
        }
    }
    let aqua = parsed.sats.iter().position(|s| s.code == "A").and_then(|i| per.get(&i)).map_or(0, HashMap::len);
    Ok(json!({
        "date": date.to_string(),
        "bbox": bb,
        "month": month + 1,
        "season": month / 3,
        "origin": origin,
        "calibration": calibration,
        "satellites": satellites,
        "conversions": conversions,
        "aqua_actual": aqua,
        "aqua": { "fire_day_cells": aqua },
    }))
}
