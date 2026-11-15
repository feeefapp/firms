//! `/api/range`: every FIRMS detection in an area over any date range, in the column layout of the
//! globe's day snapshot (`/api/day`) so the same renderer draws both.
//!
//! Where the area is a country with a local archive (a region built by `tools/harmonize.py` keeps
//! the yearly FIRMS country files in `<data>/raw/<region>/`), any range from 2001 is read from disk
//! and only the days after the archive end are topped up from the FIRMS area API. Elsewhere the
//! range is stitched from 5-day FIRMS area calls (NRT for the last two months, SP before), which
//! the request budget limits to `API_MAX_DAYS`.

use std::collections::HashMap;
use std::path::Path;

use chrono::{Duration, NaiveDate, NaiveDateTime, Utc};
use serde_json::{Value, json};

use crate::error::{AppError, AppResult};
use crate::firms;
use crate::gazetteer::{COUNTRIES, Country, normalize};
use crate::state::AppState;

/// Longest range the FIRMS area API path serves (≈13 calls per source).
pub const API_MAX_DAYS: i64 = 62;
/// Longest range at all (archives).
pub const MAX_DAYS: i64 = 366 * 3;
/// Rows beyond this are dropped (the response says so): ~25 MB of JSON before compression.
pub const MAX_ROWS: usize = 600_000;

/// Static satellite table for ranges (no TLE: the globe draws range pixels north-aligned).
struct Sat {
    code: &'static str,
    name: &'static str,
    system: u8,
    instrument: &'static str,
    pixel_km: f64,
    conf: &'static str,
    symbol: &'static str,
    pattern: u8,
}

const SATS: &[Sat] = &[
    Sat { code: "T", name: "Terra", system: 0, instrument: "MODIS", pixel_km: 1.0, conf: "pct", symbol: "●", pattern: 0 },
    Sat { code: "A", name: "Aqua", system: 0, instrument: "MODIS", pixel_km: 1.0, conf: "pct", symbol: "○", pattern: 1 },
    Sat { code: "N", name: "Suomi NPP", system: 1, instrument: "VIIRS", pixel_km: 0.375, conf: "word", symbol: "◆", pattern: 2 },
    Sat { code: "N20", name: "NOAA-20", system: 1, instrument: "VIIRS", pixel_km: 0.375, conf: "word", symbol: "■", pattern: 0 },
    Sat { code: "N21", name: "NOAA-21", system: 1, instrument: "VIIRS", pixel_km: 0.375, conf: "word", symbol: "□", pattern: 1 },
    Sat { code: "L8", name: "Landsat 8", system: 2, instrument: "OLI", pixel_km: 0.03, conf: "word", symbol: "▲", pattern: 0 },
    Sat { code: "L9", name: "Landsat 9", system: 2, instrument: "OLI", pixel_km: 0.03, conf: "word", symbol: "△", pattern: 1 },
];

fn sat_index(code: &str) -> Option<usize> {
    SATS.iter().position(|s| s.code == code)
}

/// The satellite code of a row: the `satellite` column, or the archive file's sensor.
fn row_sat(raw: &str, fallback: &str) -> &'static str {
    match raw.trim() {
        "Terra" | "T" => "T",
        "Aqua" | "A" => "A",
        "N" | "Suomi NPP" | "1" => "N",
        "N20" | "NOAA-20" | "J1" => "N20",
        "N21" | "NOAA-21" | "J2" => "N21",
        "L8" | "LANDSAT-8" => "L8",
        "L9" | "LANDSAT-9" => "L9",
        _ => match fallback {
            "modis" => "A",
            "viirs-snpp" => "N",
            "viirs-jpss1" => "N20",
            "viirs-jpss2" => "N21",
            other if other.contains("SNPP") => "N",
            other if other.contains("NOAA20") => "N20",
            other if other.contains("NOAA21") => "N21",
            other if other.contains("LANDSAT") => "L8",
            _ => "A",
        },
    }
}

pub struct RangeQuery {
    pub from: NaiveDate,
    pub to: NaiveDate,
    pub bbox: [f64; 4],
    pub country: Option<&'static Country>,
}

pub fn find_country(q: &str) -> Option<&'static Country> {
    let n = normalize(q);
    if n.is_empty() {
        return None;
    }
    COUNTRIES.iter().find(|c| {
        [c.key, c.en, c.ar, c.fr, c.firms].iter().any(|x| normalize(x) == n) || c.aliases.iter().any(|a| normalize(a) == n)
    })
}

impl RangeQuery {
    pub fn parse(from: Option<&str>, to: Option<&str>, bbox: Option<&str>, country: Option<&str>) -> AppResult<Self> {
        let from = firms::parse_date(Some(from.ok_or_else(|| AppError::bad("from (YYYY-MM-DD) is required"))?))?;
        let to = firms::parse_date(Some(to.ok_or_else(|| AppError::bad("to (YYYY-MM-DD) is required"))?))?;
        if to < from {
            return Err(AppError::bad("to is before from"));
        }
        if from < NaiveDate::from_ymd_opt(2000, 11, 1).unwrap_or(from) {
            return Err(AppError::bad("FIRMS records start in November 2000"));
        }
        if to > Utc::now().date_naive() {
            return Err(AppError::bad("to is in the future"));
        }
        if (to - from).num_days() + 1 > MAX_DAYS {
            return Err(AppError::bad(format!("ranges are limited to {MAX_DAYS} days")));
        }
        // A country the gazetteer does not know is fine with a bbox (it only selects the archive).
        let country = match country.filter(|c| !c.trim().is_empty()) {
            Some(c) => match find_country(c) {
                Some(found) => Some(found),
                None if bbox.is_some() => None,
                None => return Err(AppError::bad(format!("unknown country {c:?}; pass its bbox"))),
            },
            None => None,
        };
        let bbox = match (bbox, country) {
            (Some(b), _) => crate::data::parse_bbox(b)?,
            (None, Some(c)) => c.bbox,
            (None, None) => return Err(AppError::bad("an area is required: bbox (W,S,E,N) or country")),
        };
        if (bbox[2] - bbox[0]) * (bbox[3] - bbox[1]) > 10_000.0 {
            return Err(AppError::bad("area too large (max 10000 square degrees); pick a country or a smaller box"));
        }
        Ok(Self { from, to, bbox, country })
    }
}

#[derive(Default)]
struct Cols {
    lat: Vec<f64>,
    lon: Vec<f64>,
    t: Vec<i64>,
    sat: Vec<u8>,
    scan: Vec<f64>,
    track: Vec<f64>,
    frp: Vec<Option<f64>>,
    conf: Vec<u8>,
    craw: Vec<i32>,
    dn: Vec<u8>,
    truncated: bool,
}

fn r4(x: f64) -> f64 {
    (x * 1e4).round() / 1e4
}

impl Cols {
    fn len(&self) -> usize {
        self.lat.len()
    }

    /// Appends the rows of one FIRMS CSV that fall in the query (dates inclusive, bbox).
    fn push_csv(&mut self, text: &str, fallback: &str, q: &RangeQuery) {
        let mut lines = text.lines();
        let Some(head) = lines.next() else { return };
        let cols: Vec<&str> = head.split(',').map(str::trim).collect();
        let idx = |n: &str| cols.iter().position(|c| *c == n);
        let (Some(ila), Some(ilo), Some(idate)) = (idx("latitude"), idx("longitude"), idx("acq_date")) else { return };
        let (itime, isat, iconf, ifrp, idn, iscan, itrack) =
            (idx("acq_time"), idx("satellite"), idx("confidence"), idx("frp"), idx("daynight"), idx("scan"), idx("track"));
        let (from, to) = (q.from.to_string(), q.to.to_string());
        let [w, s, e, n] = q.bbox;
        for line in lines {
            if self.len() >= MAX_ROWS {
                self.truncated = true;
                return;
            }
            let f: Vec<&str> = line.split(',').collect();
            let date = f.get(idate).copied().unwrap_or("").trim();
            if date < from.as_str() || date > to.as_str() {
                continue;
            }
            let (Ok(la), Ok(lo)) = (f.get(ila).unwrap_or(&"").trim().parse::<f64>(), f.get(ilo).unwrap_or(&"").trim().parse::<f64>()) else {
                continue;
            };
            if la < s || la > n || lo < w || lo > e {
                continue;
            }
            let Some(si) = sat_index(row_sat(isat.and_then(|i| f.get(i)).copied().unwrap_or(""), fallback)) else { continue };
            let hhmm = format!("{:0>4}", itime.and_then(|i| f.get(i)).copied().unwrap_or("0").trim());
            let Ok(dt) = NaiveDateTime::parse_from_str(&format!("{date} {hhmm}"), "%Y-%m-%d %H%M") else { continue };
            let num = |i: Option<usize>| i.and_then(|i| f.get(i)).and_then(|v| v.trim().parse::<f64>().ok()).filter(|v| *v > -998.0);
            let conf_raw = iconf.and_then(|i| f.get(i)).copied().unwrap_or("").trim();
            let (conf, craw) = match conf_raw.to_ascii_lowercase().as_str() {
                "l" | "low" => (0, -1),
                "n" | "nominal" | "m" => (1, -1),
                "h" | "high" => (2, -1),
                other => match other.parse::<f64>() {
                    Ok(v) => (if v < 30.0 { 0 } else if v < 80.0 { 1 } else { 2 }, v.round() as i32),
                    Err(_) => (0, -1),
                },
            };
            let px = SATS[si].pixel_km;
            self.lat.push(r4(la));
            self.lon.push(r4(lo));
            self.t.push(dt.and_utc().timestamp());
            self.sat.push(si as u8);
            self.scan.push(num(iscan).unwrap_or(px));
            self.track.push(num(itrack).unwrap_or(px));
            self.frp.push(num(ifrp).map(|v| (v * 10.0).round() / 10.0));
            self.conf.push(conf);
            self.craw.push(craw);
            self.dn.push(u8::from(idn.and_then(|i| f.get(i)).is_some_and(|v| v.trim() == "N")));
        }
    }
}

/// The local archive folder for a country: a built region of that country covering it whole.
fn archive_dir(st: &AppState, c: &Country) -> Option<std::path::PathBuf> {
    let regions = st.regions();
    let area = |b: &[f64; 4]| (b[2] - b[0]) * (b[3] - b[1]);
    let region = regions.list.iter().find(|r| {
        r.name == c.key
            || (r.country.as_deref().is_some_and(|x| normalize(x) == normalize(c.en) || normalize(x) == normalize(c.firms))
                && area(&r.bbox) >= 0.8 * area(&c.bbox))
    })?;
    let dir = st.cfg.data_dir.join("raw").join(&region.name);
    dir.is_dir().then_some(dir)
}

/// Archive files (`modis_2024.csv`, `viirs-snpp_2024.csv`, …) for the years of the query.
fn archive_files(dir: &Path, q: &RangeQuery) -> Vec<(std::path::PathBuf, String)> {
    let (y0, y1) = (q.from.format("%Y").to_string(), q.to.format("%Y").to_string());
    let mut out: Vec<(std::path::PathBuf, String)> = std::fs::read_dir(dir)
        .into_iter()
        .flatten()
        .flatten()
        .filter_map(|e| {
            let name = e.file_name().to_string_lossy().into_owned();
            let stem = name.strip_suffix(".csv")?;
            let (sensor, year) = stem.rsplit_once('_')?;
            (year.len() == 4 && year >= y0.as_str() && year <= y1.as_str() && ["modis", "viirs-snpp", "viirs-jpss1", "viirs-jpss2"].contains(&sensor))
                .then(|| (e.path(), sensor.to_owned()))
        })
        .collect();
    out.sort();
    out
}

/// Stitches `[from, to]` from 5-day FIRMS area calls (NRT for the last 60 days, SP before).
async fn from_api(st: &AppState, q: &RangeQuery, from: NaiveDate, to: NaiveDate, cols: &mut Cols) -> AppResult<()> {
    let today = Utc::now().date_naive();
    let mut calls: Vec<(&'static str, NaiveDate, u32)> = Vec::new();
    let mut d = from;
    while d <= to {
        let days = ((to - d).num_days() + 1).min(5) as u32;
        let nrt = d + Duration::days(i64::from(days)) > today - Duration::days(60);
        let sources: &[&'static str] =
            if nrt { &["MODIS_NRT", "VIIRS_SNPP_NRT", "VIIRS_NOAA20_NRT", "VIIRS_NOAA21_NRT"] } else { &["MODIS_SP", "VIIRS_SNPP_SP", "VIIRS_NOAA20_SP"] };
        calls.extend(sources.iter().map(|s| (*s, d, days)));
        d += Duration::days(i64::from(days));
    }
    // Six FIRMS calls at a time (owned tasks: the handler future stays `Send + 'static`-friendly).
    let mut texts: Vec<(&'static str, AppResult<String>)> = Vec::with_capacity(calls.len());
    for batch in calls.chunks(6) {
        let mut set = tokio::task::JoinSet::new();
        for &(src, date, days) in batch {
            let (st, bbox) = (st.clone(), q.bbox);
            set.spawn(async move { (src, firms::area_csv(&st, src, &bbox, days, date).await) });
        }
        while let Some(r) = set.join_next().await {
            if let Ok(r) = r {
                texts.push(r);
            }
        }
    }
    let mut failures = 0;
    for (src, text) in texts {
        match text {
            Ok(t) => cols.push_csv(&t, src, q),
            Err(e) => {
                failures += 1;
                tracing::warn!(source = src, %e, "range: FIRMS call failed");
            }
        }
    }
    if failures > 0 && cols.len() == 0 {
        return Err(AppError::Upstream("FIRMS did not answer for this range; try again in a few minutes".into()));
    }
    Ok(())
}

pub async fn range(st: &AppState, q: RangeQuery) -> AppResult<Value> {
    let mut cols = Cols::default();
    let ndays = (q.to - q.from).num_days() + 1;
    let archive = q.country.and_then(|c| archive_dir(st, c));
    let (source, note) = if let Some(dir) = archive {
        let files = archive_files(&dir, &q);
        let q2 = &q;
        let parsed: Vec<(String, String)> = tokio::task::spawn_blocking({
            let files = files.clone();
            move || files.into_iter().filter_map(|(p, sensor)| std::fs::read_to_string(p).ok().map(|t| (t, sensor))).collect()
        })
        .await
        .map_err(|e| AppError::Internal(e.to_string()))?;
        let mut last = String::new();
        for (text, sensor) in &parsed {
            cols.push_csv(text, sensor, q2);
            if let Some(d) = text.lines().last().and_then(|l| l.split(',').nth(4)) {
                if d > last.as_str() {
                    last = d.to_owned();
                }
            }
        }
        // Days after the archive end (it is refreshed with the region): top up from the area API.
        let mut note = None;
        if let Ok(end) = NaiveDate::parse_from_str(&last, "%Y-%m-%d") {
            if end < q.to {
                let from = (end + Duration::days(1)).max(q.from);
                if (q.to - from).num_days() < API_MAX_DAYS && st.cfg.map_key.is_some() {
                    from_api(st, &q, from, q.to, &mut cols).await.ok();
                } else {
                    note = Some(format!("archive ends {end}; later days are not included"));
                }
            }
        }
        ("archive", note)
    } else {
        if ndays > API_MAX_DAYS {
            return Err(AppError::bad(format!(
                "outside the calibrated countries, ranges are limited to {API_MAX_DAYS} days (FIRMS area API); pick a shorter range or a country with an archive"
            )));
        }
        if st.cfg.map_key.is_none() {
            return Err(AppError::Unavailable("FIRMS_MAP_KEY is not configured".into()));
        }
        from_api(st, &q, q.from, q.to, &mut cols).await?;
        ("firms_api", None)
    };

    // Same record can come from two overlapping chunks: drop exact duplicates.
    let mut seen: HashMap<(i64, i64, i64, u8), ()> = HashMap::with_capacity(cols.len());
    let keep: Vec<bool> = (0..cols.len())
        .map(|i| seen.insert(((cols.lat[i] * 1e4) as i64, (cols.lon[i] * 1e4) as i64, cols.t[i], cols.sat[i]), ()).is_none())
        .collect();
    fn pick<T: serde::Serialize>(v: &[T], keep: &[bool]) -> Vec<Value> {
        v.iter().zip(keep).filter(|(_, k)| **k).map(|(x, _)| json!(x)).collect()
    }
    let used: Vec<bool> = (0..SATS.len()).map(|si| cols.sat.iter().any(|s| usize::from(*s) == si)).collect();
    Ok(json!({
        "window": [q.from.to_string(), ndays],
        "range": [q.from.to_string(), q.to.to_string()],
        "bbox": q.bbox,
        "country": q.country.map(|c| c.key),
        "source": source,
        "note": note,
        "truncated": cols.truncated,
        "sats": SATS.iter().map(|s| json!({
            "code": s.code, "name": s.name, "system": s.system, "instrument": s.instrument, "pixel_km": s.pixel_km,
            "conf": s.conf, "symbol": s.symbol, "pattern": s.pattern, "scan_deg": 0, "granule_s": 0, "norad": 0,
        })).collect::<Vec<_>>(),
        "present": used,
        "cols": {
            "lat": pick(&cols.lat, &keep), "lon": pick(&cols.lon, &keep), "t": pick(&cols.t, &keep), "sat": pick(&cols.sat, &keep),
            "scan": pick(&cols.scan, &keep), "track": pick(&cols.track, &keep), "frp": pick(&cols.frp, &keep),
            "conf": pick(&cols.conf, &keep), "craw": pick(&cols.craw, &keep), "dn": pick(&cols.dn, &keep),
        },
    }))
}

#[cfg(test)]
mod tests {
    use super::*;

    fn q(from: &str, to: &str, bbox: [f64; 4]) -> RangeQuery {
        RangeQuery { from: from.parse().unwrap(), to: to.parse().unwrap(), bbox, country: None }
    }

    #[test]
    fn parses_archive_rows_in_range_and_box() {
        let csv = "latitude,longitude,scan,track,acq_date,acq_time,satellite,confidence,frp,daynight,type\n\
                   31.70,5.96,1.9,1.3,2020-01-01,0106,Aqua,61,27.4,N,2\n\
                   31.70,5.96,1.9,1.3,2020-01-05,1306,Terra,90,5,D,0\n\
                   10.00,5.96,1.9,1.3,2020-01-02,0106,Aqua,61,27.4,N,0\n";
        let mut c = Cols::default();
        c.push_csv(csv, "modis", &q("2020-01-01", "2020-01-04", [0.0, 20.0, 10.0, 40.0]));
        assert_eq!(c.len(), 1, "date and bbox filters");
        assert_eq!(SATS[usize::from(c.sat[0])].code, "A");
        assert_eq!((c.conf[0], c.craw[0], c.dn[0]), (1, 61, 1));
        assert_eq!(c.t[0], NaiveDateTime::parse_from_str("2020-01-01 0106", "%Y-%m-%d %H%M").unwrap().and_utc().timestamp());
    }

    #[test]
    fn viirs_rows_take_the_file_sensor_and_word_confidence() {
        let csv = "latitude,longitude,scan,track,acq_date,acq_time,satellite,confidence,frp,daynight,type\n\
                   36.8,7.7,0.45,0.39,2018-04-01,0134,,h,0.35,D,0\n";
        let mut c = Cols::default();
        c.push_csv(csv, "viirs-jpss1", &q("2018-04-01", "2018-04-01", [0.0, 30.0, 10.0, 40.0]));
        assert_eq!(SATS[usize::from(c.sat[0])].code, "N20");
        assert_eq!((c.conf[0], c.craw[0], c.dn[0]), (2, -1, 0));
    }

    #[test]
    fn query_validation() {
        assert!(RangeQuery::parse(Some("2024-01-02"), Some("2024-01-01"), Some("0,0,1,1"), None).is_err());
        assert!(RangeQuery::parse(Some("2024-01-01"), Some("2024-01-03"), None, None).is_err(), "an area is required");
        assert!(RangeQuery::parse(Some("2024-01-01"), Some("2024-01-03"), None, Some("nowhere")).is_err());
        let r = RangeQuery::parse(Some("2024-01-01"), Some("2024-12-31"), None, Some("الجزائر")).unwrap();
        assert_eq!(r.country.unwrap().key, "algeria");
        assert_eq!(r.bbox, r.country.unwrap().bbox);
        assert!(RangeQuery::parse(Some("2015-01-01"), Some("2024-12-31"), None, Some("spain")).is_err(), "too long");
    }
}
