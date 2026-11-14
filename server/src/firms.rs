//! NASA FIRMS area API proxy (MAP_KEY stays server-side) with an on-disk cache per request key,
//! and normalisation of its CSV rows.

use std::path::PathBuf;
use std::time::{Duration, SystemTime};

use chrono::{NaiveDate, Utc};
use serde::Serialize;

use crate::error::{AppError, AppResult};
use crate::state::AppState;

const API: &str = "https://firms.modaps.eosdis.nasa.gov/api";

pub const SOURCES: &[&str] = &[
    "VIIRS_SNPP_NRT",
    "VIIRS_NOAA20_NRT",
    "VIIRS_NOAA21_NRT",
    "MODIS_NRT",
    "VIIRS_SNPP_SP",
    "VIIRS_NOAA20_SP",
    "MODIS_SP",
    "LANDSAT_NRT",
];
pub const DEFAULT_SOURCES: &[&str] = &["VIIRS_SNPP_NRT", "VIIRS_NOAA20_NRT", "VIIRS_NOAA21_NRT", "MODIS_NRT"];

/// One normalised detection.
#[derive(Debug, Clone, Serialize)]
pub struct Hotspot {
    pub source: String,
    /// T, A (MODIS Terra/Aqua), N, N20, N21 (VIIRS), L8/L9 …
    pub satellite: String,
    pub latitude: f64,
    pub longitude: f64,
    pub acq_date: String,
    pub acq_time: String,
    pub frp: Option<f64>,
    /// 0 low, 1 nominal, 2 high
    pub confidence: u8,
    pub confidence_raw: String,
    pub daynight: String,
    pub scan: Option<f64>,
    pub track: Option<f64>,
    pub bright: Option<f64>,
}

impl Hotspot {
    pub fn is_modis(&self) -> bool {
        self.satellite == "T" || self.satellite == "A"
    }
    /// Raw MODIS confidence (0-100), when numeric.
    pub fn raw_pct(&self) -> Option<f64> {
        self.confidence_raw.parse().ok()
    }
    /// Seconds since the epoch (UTC).
    pub fn timestamp(&self) -> Option<i64> {
        let d = NaiveDate::parse_from_str(&self.acq_date, "%Y-%m-%d").ok()?;
        let t = format!("{:0>4}", self.acq_time);
        let h: u32 = t.get(0..2)?.parse().ok()?;
        let m: u32 = t.get(2..4)?.parse().ok()?;
        Some(d.and_hms_opt(h, m, 0)?.and_utc().timestamp())
    }
}

pub fn parse_date(s: Option<&str>) -> AppResult<NaiveDate> {
    match s.filter(|s| !s.is_empty()) {
        Some(s) => NaiveDate::parse_from_str(s, "%Y-%m-%d").map_err(|_| AppError::bad("date must be YYYY-MM-DD")),
        None => Ok(Utc::now().date_naive() - chrono::Duration::days(1)),
    }
}

fn sat_code(raw: &str, source: &str) -> String {
    match raw.trim() {
        "Terra" | "T" => "T".into(),
        "Aqua" | "A" => "A".into(),
        "N" | "Suomi NPP" | "1" if source.contains("SNPP") => "N".into(),
        "N20" | "NOAA-20" => "N20".into(),
        "N21" | "NOAA-21" => "N21".into(),
        "" if source.contains("SNPP") => "N".into(),
        "" if source.contains("NOAA20") => "N20".into(),
        "" if source.contains("NOAA21") => "N21".into(),
        other => other.into(),
    }
}

fn conf_class(raw: &str) -> u8 {
    match raw.trim().to_ascii_lowercase().as_str() {
        "l" | "low" => 0,
        "n" | "nominal" | "m" => 1,
        "h" | "high" => 2,
        other => match other.parse::<f64>() {
            Ok(v) if v < 30.0 => 0,
            Ok(v) if v < 80.0 => 1,
            Ok(_) => 2,
            Err(_) => 0,
        },
    }
}

fn num(s: Option<&&str>) -> Option<f64> {
    s.and_then(|s| s.trim().parse::<f64>().ok()).filter(|v| *v > -998.0)
}

pub fn parse_csv(text: &str, source: &str) -> Vec<Hotspot> {
    let mut lines = text.lines();
    let Some(head) = lines.next() else { return Vec::new() };
    let cols: Vec<&str> = head.split(',').map(str::trim).collect();
    let idx = |n: &str| cols.iter().position(|c| *c == n);
    let (Some(ila), Some(ilo)) = (idx("latitude"), idx("longitude")) else { return Vec::new() };
    let get = |f: &[&str], n: &str| idx(n).and_then(|i| f.get(i).copied()).unwrap_or("").to_owned();
    let mut out = Vec::new();
    for line in lines {
        let f: Vec<&str> = line.split(',').collect();
        let (Ok(la), Ok(lo)) = (f.get(ila).unwrap_or(&"").trim().parse(), f.get(ilo).unwrap_or(&"").trim().parse())
        else {
            continue;
        };
        let conf_raw = get(&f, "confidence");
        out.push(Hotspot {
            source: source.to_owned(),
            satellite: sat_code(&get(&f, "satellite"), source),
            latitude: la,
            longitude: lo,
            acq_date: get(&f, "acq_date"),
            acq_time: format!("{:0>4}", get(&f, "acq_time").trim()),
            frp: num(idx("frp").and_then(|i| f.get(i))),
            confidence: conf_class(&conf_raw),
            confidence_raw: conf_raw,
            daynight: get(&f, "daynight"),
            scan: num(idx("scan").and_then(|i| f.get(i))),
            track: num(idx("track").and_then(|i| f.get(i))),
            bright: num(idx("bright_ti4").or_else(|| idx("brightness")).and_then(|i| f.get(i))),
        });
    }
    out
}

fn cache_path(st: &AppState, key: &str) -> PathBuf {
    st.cfg.data_dir.join("cache").join("firms").join(format!("{}.csv", crate::auth::sha256_hex(key)))
}

/// Raw CSV for one source / bbox / window, from the disk cache or the FIRMS area API.
pub async fn area_csv(st: &AppState, source: &str, bbox: &[f64; 4], days: u32, date: NaiveDate) -> AppResult<String> {
    if !SOURCES.contains(&source) {
        return Err(AppError::bad(format!("unknown source {source:?}")));
    }
    let bb = bbox.iter().map(|v| format!("{v}")).collect::<Vec<_>>().join(",");
    let key = format!("{source}|{bb}|{days}|{date}");
    let path = cache_path(st, &key);
    let end = date + chrono::Duration::days(i64::from(days) - 1);
    let settled = end < Utc::now().date_naive() - chrono::Duration::days(3);
    if let Ok(meta) = tokio::fs::metadata(&path).await {
        let age = meta
            .modified()
            .ok()
            .and_then(|m| SystemTime::now().duration_since(m).ok())
            .unwrap_or(Duration::MAX);
        if settled || age < Duration::from_secs(3600) {
            return Ok(tokio::fs::read_to_string(&path).await?);
        }
    }
    let map_key = st
        .cfg
        .map_key
        .as_deref()
        .ok_or_else(|| AppError::Unavailable("FIRMS_MAP_KEY is not configured".into()))?;
    if !st.take_firms_call() {
        return Err(AppError::Unavailable("FIRMS request budget exhausted, try again in a few minutes".into()));
    }
    let url = format!("{API}/area/csv/{map_key}/{source}/{bb}/{days}/{date}");
    let r = st.http.get(&url).send().await?;
    let status = r.status();
    let text = r.text().await?;
    if !status.is_success() || !text.starts_with("latitude") {
        let first: String = text.lines().next().unwrap_or("").chars().take(160).collect();
        let first = first.replace(map_key, "***");
        tracing::warn!(%status, source, "FIRMS area API refused: {first}");
        return Err(AppError::Upstream(format!("FIRMS {source}: {first}")));
    }
    if let Some(dir) = path.parent() {
        tokio::fs::create_dir_all(dir).await?;
    }
    let tmp = path.with_extension("tmp");
    tokio::fs::write(&tmp, &text).await?;
    tokio::fs::rename(&tmp, &path).await?;
    Ok(text)
}

pub struct HotspotQuery {
    pub bbox: [f64; 4],
    pub date: NaiveDate,
    pub days: u32,
    pub sources: Vec<String>,
    pub min_conf: u8,
    pub min_frp: f64,
}

impl HotspotQuery {
    pub fn parse(
        bbox: Option<&str>,
        date: Option<&str>,
        days: Option<u32>,
        sources: Option<&str>,
        min_conf: Option<u8>,
        min_frp: Option<f64>,
    ) -> AppResult<Self> {
        let bbox = crate::data::parse_bbox(bbox.ok_or_else(|| AppError::bad("bbox is required (W,S,E,N)"))?)?;
        if (bbox[2] - bbox[0]) * (bbox[3] - bbox[1]) > 10_000.0 {
            return Err(AppError::bad("bbox too large (max 10000 square degrees)"));
        }
        let date = parse_date(date)?;
        if date > Utc::now().date_naive() {
            return Err(AppError::bad("date is in the future"));
        }
        let days = days.unwrap_or(1);
        if !(1..=5).contains(&days) {
            return Err(AppError::bad("days must be 1..5"));
        }
        let sources: Vec<String> = match sources.filter(|s| !s.is_empty()) {
            Some(s) => s.split(',').map(|x| x.trim().to_ascii_uppercase()).filter(|x| !x.is_empty()).collect(),
            None => DEFAULT_SOURCES.iter().map(|s| (*s).to_owned()).collect(),
        };
        if let Some(bad) = sources.iter().find(|s| !SOURCES.contains(&s.as_str())) {
            return Err(AppError::bad(format!("unknown source {bad:?}; one of {}", SOURCES.join(", "))));
        }
        let min_conf = min_conf.unwrap_or(0);
        if min_conf > 2 {
            return Err(AppError::bad("min_conf must be 0, 1 or 2"));
        }
        Ok(Self { bbox, date, days, sources, min_conf, min_frp: min_frp.unwrap_or(0.0) })
    }
}

pub async fn hotspots(st: &AppState, q: &HotspotQuery) -> AppResult<Vec<Hotspot>> {
    let mut rows = Vec::new();
    for src in &q.sources {
        let text = area_csv(st, src, &q.bbox, q.days, q.date).await?;
        rows.extend(
            parse_csv(&text, src)
                .into_iter()
                .filter(|h| h.confidence >= q.min_conf && h.frp.unwrap_or(0.0) >= q.min_frp),
        );
    }
    Ok(rows)
}

pub fn to_csv(rows: &[Hotspot]) -> String {
    let mut s = String::from(
        "source,satellite,latitude,longitude,acq_date,acq_time,frp,confidence,confidence_raw,daynight,scan,track,bright\n",
    );
    let o = |v: Option<f64>| v.map(|x| x.to_string()).unwrap_or_default();
    for h in rows {
        s.push_str(&format!(
            "{},{},{},{},{},{},{},{},{},{},{},{},{}\n",
            h.source,
            h.satellite,
            h.latitude,
            h.longitude,
            h.acq_date,
            h.acq_time,
            o(h.frp),
            ["low", "nominal", "high"][usize::from(h.confidence.min(2))],
            h.confidence_raw,
            h.daynight,
            o(h.scan),
            o(h.track),
            o(h.bright)
        ));
    }
    s
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn parses_viirs_and_modis_rows() {
        let v = "latitude,longitude,bright_ti4,scan,track,acq_date,acq_time,satellite,instrument,confidence,version,bright_ti5,frp,daynight\n\
                 30.1,75.2,330.1,0.4,0.4,2026-11-01,0812,N,VIIRS,n,2.0NRT,290.0,5.5,D\n";
        let r = parse_csv(v, "VIIRS_SNPP_NRT");
        assert_eq!(r.len(), 1);
        assert_eq!(r[0].satellite, "N");
        assert_eq!(r[0].confidence, 1);
        assert_eq!(r[0].frp, Some(5.5));
        let m = "latitude,longitude,brightness,scan,track,acq_date,acq_time,satellite,instrument,confidence,version,bright_t31,frp,daynight\n\
                 30.1,75.2,330.1,1.0,1.0,2026-11-01,0812,Aqua,MODIS,85,6.1NRT,290.0,15.5,D\n";
        let r = parse_csv(m, "MODIS_NRT");
        assert_eq!(r[0].satellite, "A");
        assert_eq!(r[0].confidence, 2);
        assert_eq!(r[0].raw_pct(), Some(85.0));
        assert!(r[0].timestamp().is_some());
    }
}
