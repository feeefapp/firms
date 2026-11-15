//! Analytics on the harmonized monthly series of a region: anomalies, annual trend (OLS + Sen's
//! slope + Mann–Kendall on complete years), seasonal profile (2003–2022), cross-region ranking,
//! FIRMS hotspot statistics and the calendar CSV export.

use std::collections::{BTreeMap, HashMap};

use serde_json::{Value, json};

use crate::data::{self, BaselineKind, Region, Y0, baseline, current_month, round1, ym_of};
use crate::error::{AppError, AppResult};
use crate::firms::Hotspot;

pub const BASE_Y0: i32 = 2003;
pub const BASE_Y1: i32 = 2022;

fn r2(x: f64) -> f64 {
    (x * 100.0).round() / 100.0
}

/// numpy-style linear-interpolation percentile of a sorted slice (q in 0..=100).
pub fn percentile(sorted: &[f64], q: f64) -> f64 {
    if sorted.is_empty() {
        return 0.0;
    }
    let pos = (q / 100.0).clamp(0.0, 1.0) * (sorted.len() - 1) as f64;
    let lo = pos.floor() as usize;
    let hi = pos.ceil() as usize;
    sorted[lo] + (sorted[hi] - sorted[lo]) * (pos - lo as f64)
}

pub fn median(xs: &[f64]) -> f64 {
    let mut v = xs.to_vec();
    v.sort_by(f64::total_cmp);
    percentile(&v, 50.0)
}

/// Standard normal CDF (Abramowitz–Stegun 7.1.26 erf, |error| < 1.5e-7).
pub fn norm_cdf(z: f64) -> f64 {
    let x = z.abs() / std::f64::consts::SQRT_2;
    let t = 1.0 / (1.0 + 0.327_591_1 * x);
    let y = 1.0
        - (((((1.061_405_429 * t - 1.453_152_027) * t) + 1.421_413_741) * t - 0.284_496_736) * t + 0.254_829_592)
            * t
            * (-x * x).exp();
    if z >= 0.0 { 0.5 * (1.0 + y) } else { 0.5 * (1.0 - y) }
}

// ------------------------------------------------------------------ anomalies

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Direction {
    Above,
    Below,
    Both,
}

impl Direction {
    pub fn parse(s: Option<&str>) -> AppResult<Self> {
        match s.unwrap_or("above") {
            "" | "above" => Ok(Self::Above),
            "below" => Ok(Self::Below),
            "both" => Ok(Self::Both),
            o => Err(AppError::bad(format!("direction must be above, below or both, got {o:?}"))),
        }
    }
    fn as_str(self) -> &'static str {
        match self {
            Self::Above => "above",
            Self::Below => "below",
            Self::Both => "both",
        }
    }
}

#[allow(clippy::too_many_arguments)]
pub fn anomalies(
    r: &Region,
    alg: &str,
    from: Option<&str>,
    to: Option<&str>,
    kind: BaselineKind,
    threshold_pct: f64,
    direction: Direction,
    limit: usize,
) -> AppResult<Value> {
    let a = data::algorithm(alg)?;
    let arr = r.series_of(alg)?;
    let (m0, m1) = r.window(Some(from.unwrap_or("2001-01")), to)?;
    let base = baseline(arr, kind);
    let cur = current_month();
    let mut hits: Vec<(usize, f64)> = Vec::new();
    let mut checked = 0;
    for (m, &v) in arr.iter().enumerate().take(m1 + 1).skip(m0) {
        if m >= cur || base[m % 12] <= 0.0 {
            continue;
        }
        checked += 1;
        let pct = (v / base[m % 12] - 1.0) * 100.0;
        let keep = match direction {
            Direction::Above => pct >= threshold_pct,
            Direction::Below => pct <= -threshold_pct,
            Direction::Both => pct.abs() >= threshold_pct,
        };
        if keep {
            hits.push((m, pct));
        }
    }
    match direction {
        Direction::Above => hits.sort_by(|a, b| b.1.total_cmp(&a.1)),
        Direction::Below => hits.sort_by(|a, b| a.1.total_cmp(&b.1)),
        Direction::Both => hits.sort_by(|a, b| b.1.abs().total_cmp(&a.1.abs())),
    }
    let count = hits.len();
    // rank of the month among the same calendar month in all years (1 = highest)
    let rank_of = |m: usize| -> (usize, usize) {
        let same: Vec<f64> = (0..).map(|y| y * 12 + m % 12).take_while(|&mm| mm < r.nm && mm < cur).map(|mm| arr[mm]).collect();
        (same.iter().filter(|&&x| x > arr[m]).count() + 1, same.len())
    };
    let months: Vec<Value> = hits
        .into_iter()
        .take(limit)
        .map(|(m, pct)| {
            let (rank, of) = rank_of(m);
            json!({
                "ym": ym_of(m),
                "value": round1(arr[m]),
                "baseline": round1(base[m % 12]),
                "anomaly_pct": round1(pct),
                "source": (r.src.get(m).copied().unwrap_or(b'?') as char).to_string(),
                "rank": rank,
                "of": of,
            })
        })
        .collect();
    Ok(json!({
        "region": r.name,
        "title": r.title,
        "title_en": r.title_en,
        "algorithm": alg,
        "baseline_kind": kind.as_str(),
        "baseline_years": [BASE_Y0, BASE_Y1],
        "threshold_pct": threshold_pct,
        "direction": direction.as_str(),
        "from": ym_of(m0),
        "to": ym_of(m1),
        "checked_months": checked,
        "count": count,
        "months": months,
        "error": r.error_of(a).map(|(test, pct)| json!({ "test": test, "pct": pct })),
    }))
}

// ------------------------------------------------------------------ trend

#[derive(Debug, Clone, PartialEq)]
pub struct TrendStats {
    pub n: usize,
    pub ols_slope: f64,
    pub ols_intercept: f64,
    pub ols_pct_per_year: f64,
    pub r2: f64,
    pub sen_slope: f64,
    pub sen_pct_per_year: f64,
    pub mk_s: i64,
    pub mk_z: f64,
    pub mk_p: f64,
}

/// OLS line, Sen's slope (median of pairwise slopes) and the Mann–Kendall test (tie-corrected variance).
pub fn trend_stats(xs: &[f64], ys: &[f64]) -> Option<TrendStats> {
    let n = xs.len();
    if n < 3 || ys.len() != n {
        return None;
    }
    let nf = n as f64;
    let mx = xs.iter().sum::<f64>() / nf;
    let my = ys.iter().sum::<f64>() / nf;
    let sxx: f64 = xs.iter().map(|x| (x - mx).powi(2)).sum();
    let sxy: f64 = xs.iter().zip(ys).map(|(x, y)| (x - mx) * (y - my)).sum();
    let syy: f64 = ys.iter().map(|y| (y - my).powi(2)).sum();
    if sxx == 0.0 {
        return None;
    }
    let slope = sxy / sxx;
    let intercept = my - slope * mx;
    let r2 = if syy > 0.0 { (sxy * sxy) / (sxx * syy) } else { 0.0 };
    let mut slopes = Vec::with_capacity(n * (n - 1) / 2);
    let mut s: i64 = 0;
    for i in 0..n {
        for j in i + 1..n {
            if xs[j] != xs[i] {
                slopes.push((ys[j] - ys[i]) / (xs[j] - xs[i]));
            }
            s += match ys[j].total_cmp(&ys[i]) {
                std::cmp::Ordering::Greater => 1,
                std::cmp::Ordering::Less => -1,
                std::cmp::Ordering::Equal => 0,
            };
        }
    }
    let sen = median(&slopes);
    let mut counts: HashMap<u64, usize> = HashMap::new();
    for y in ys {
        *counts.entry(y.to_bits()).or_default() += 1;
    }
    let ties: f64 = counts.values().filter(|&&t| t > 1).map(|&t| (t * (t - 1) * (2 * t + 5)) as f64).sum();
    let var = (nf * (nf - 1.0) * (2.0 * nf + 5.0) - ties) / 18.0;
    let z = if var <= 0.0 {
        0.0
    } else if s > 0 {
        (s as f64 - 1.0) / var.sqrt()
    } else if s < 0 {
        (s as f64 + 1.0) / var.sqrt()
    } else {
        0.0
    };
    let p = 2.0 * (1.0 - norm_cdf(z.abs()));
    let med_y = median(ys);
    Some(TrendStats {
        n,
        ols_slope: slope,
        ols_intercept: intercept,
        ols_pct_per_year: if my != 0.0 { slope / my * 100.0 } else { 0.0 },
        r2,
        sen_slope: sen,
        sen_pct_per_year: if med_y != 0.0 { sen / med_y * 100.0 } else { 0.0 },
        mk_s: s,
        mk_z: z,
        mk_p: p,
    })
}

/// Annual totals (complete flag) for [m0, m1].
fn annual(arr: &[f64], m0: usize, m1: usize) -> Vec<(i32, f64, bool)> {
    let cur = current_month();
    let mut by_year: BTreeMap<i32, (f64, usize)> = BTreeMap::new();
    for (m, v) in arr.iter().enumerate().take(m1 + 1).skip(m0) {
        let e = by_year.entry(Y0 + (m / 12) as i32).or_default();
        e.0 += v;
        if m < cur {
            e.1 += 1;
        }
    }
    by_year.into_iter().map(|(y, (t, n))| (y, t, n == 12)).collect()
}

pub fn trend(r: &Region, alg: &str, from: Option<&str>, to: Option<&str>) -> AppResult<Value> {
    let a = data::algorithm(alg)?;
    let arr = r.series_of(alg)?;
    let (m0, m1) = r.window(Some(from.unwrap_or("2001-01")), to)?;
    let years = annual(arr, m0, m1);
    let complete: Vec<(f64, f64)> = years.iter().filter(|(_, _, c)| *c).map(|(y, t, _)| (f64::from(*y), *t)).collect();
    let xs: Vec<f64> = complete.iter().map(|p| p.0).collect();
    let ys: Vec<f64> = complete.iter().map(|p| p.1).collect();
    let stats = trend_stats(&xs, &ys).ok_or_else(|| AppError::bad("a trend needs at least 3 complete years in the period"))?;
    let verdict = if stats.mk_p < 0.05 && stats.sen_slope > 0.0 {
        "increasing"
    } else if stats.mk_p < 0.05 && stats.sen_slope < 0.0 {
        "decreasing"
    } else {
        "no_significant_trend"
    };
    Ok(json!({
        "region": r.name,
        "title": r.title,
        "title_en": r.title_en,
        "algorithm": alg,
        "from": ym_of(m0),
        "to": ym_of(m1),
        "years": years.iter().map(|(y, t, c)| json!({ "year": y, "total": round1(*t), "complete": c })).collect::<Vec<_>>(),
        "complete_years": stats.n,
        "first_year": xs.first().map(|x| *x as i32),
        "last_year": xs.last().map(|x| *x as i32),
        "linear": {
            "slope_per_year": r2(stats.ols_slope),
            "intercept": r2(stats.ols_intercept),
            "pct_per_year": r2(stats.ols_pct_per_year),
            "r2": (stats.r2 * 1000.0).round() / 1000.0,
        },
        "sen": { "slope_per_year": r2(stats.sen_slope), "pct_per_year": r2(stats.sen_pct_per_year) },
        "mann_kendall": { "s": stats.mk_s, "z": r2(stats.mk_z), "p": (stats.mk_p * 10000.0).round() / 10000.0 },
        "verdict": verdict,
        "error": r.error_of(a).map(|(test, pct)| json!({ "test": test, "pct": pct })),
    }))
}

// ------------------------------------------------------------------ seasonal profile

/// Shortest circular window of months holding ≥ `share` of the annual sum (ties: larger sum).
pub fn season_window(med: &[f64; 12], share: f64) -> (usize, usize, f64) {
    let total: f64 = med.iter().sum();
    if total <= 0.0 {
        return (0, 11, 1.0);
    }
    for len in 1..=12 {
        let mut best: Option<(usize, f64)> = None;
        for start in 0..12 {
            let s: f64 = (0..len).map(|k| med[(start + k) % 12]).sum();
            if s / total >= share && best.is_none_or(|(_, b)| s > b) {
                best = Some((start, s));
            }
        }
        if let Some((start, s)) = best {
            return (start, len, s / total);
        }
    }
    (0, 12, 1.0)
}

pub fn seasonal_profile(r: &Region, alg: &str) -> AppResult<Value> {
    let a = data::algorithm(alg)?;
    let arr = r.series_of(alg)?;
    let mut med = [0.0f64; 12];
    let mut months = Vec::with_capacity(12);
    for (c, slot) in med.iter_mut().enumerate() {
        let mut xs: Vec<f64> = (BASE_Y0..=BASE_Y1)
            .map(|y| ((y - Y0) * 12) as usize + c)
            .filter_map(|m| arr.get(m).copied())
            .collect();
        xs.sort_by(f64::total_cmp);
        *slot = percentile(&xs, 50.0);
        let mean = if xs.is_empty() { 0.0 } else { xs.iter().sum::<f64>() / xs.len() as f64 };
        months.push(json!({
            "month": c + 1,
            "median": round1(*slot),
            "mean": round1(mean),
            "p25": round1(percentile(&xs, 25.0)),
            "p75": round1(percentile(&xs, 75.0)),
            "min": round1(xs.first().copied().unwrap_or(0.0)),
            "max": round1(xs.last().copied().unwrap_or(0.0)),
            "years": xs.len(),
        }));
    }
    let total: f64 = med.iter().sum();
    for (c, m) in months.iter_mut().enumerate() {
        m["share_pct"] = json!(if total > 0.0 { round1(med[c] / total * 100.0) } else { 0.0 });
    }
    let mut order: Vec<usize> = (0..12).collect();
    order.sort_by(|a, b| med[*b].total_cmp(&med[*a]));
    let (start, len, share) = season_window(&med, 0.8);
    let season_months: Vec<usize> = (0..len).map(|k| (start + k) % 12 + 1).collect();
    Ok(json!({
        "region": r.name,
        "title": r.title,
        "title_en": r.title_en,
        "algorithm": alg,
        "baseline_years": [BASE_Y0, BASE_Y1],
        "months": months,
        "annual_median_sum": round1(total),
        "peak_months": order.iter().take(3).map(|c| c + 1).collect::<Vec<_>>(),
        "fire_season": {
            "start_month": start + 1,
            "end_month": (start + len - 1) % 12 + 1,
            "length_months": len,
            "months": season_months,
            "share_pct": round1(share * 100.0),
            "rule": "shortest run of consecutive months holding at least 80% of the median annual fire-days",
        },
        "error": r.error_of(a).map(|(test, pct)| json!({ "test": test, "pct": pct })),
    }))
}

// ------------------------------------------------------------------ ranking

pub fn rank_regions(
    regions: &[std::sync::Arc<Region>],
    metric: &str,
    alg: &str,
    from: Option<&str>,
    to: Option<&str>,
    limit: usize,
) -> AppResult<Value> {
    data::algorithm(alg)?;
    let mut rows: Vec<(f64, Value)> = Vec::new();
    let mut skipped = Vec::new();
    for r in regions {
        let Ok(arr) = r.series_of(alg) else {
            skipped.push(r.name.clone());
            continue;
        };
        let res: AppResult<(f64, Value)> = match metric {
            "latest_anomaly" => {
                let m = r.latest_complete();
                let base = baseline(arr, BaselineKind::Median);
                if base[m % 12] > 0.0 {
                    let pct = (arr[m] / base[m % 12] - 1.0) * 100.0;
                    Ok((pct, json!({ "ym": ym_of(m), "value": round1(arr[m]), "baseline": round1(base[m % 12]) })))
                } else {
                    Err(AppError::bad("no baseline"))
                }
            }
            "total" => r.window(from, to).map(|(m0, m1)| {
                let t: f64 = arr[m0..=m1].iter().sum();
                (t, json!({ "from": ym_of(m0), "to": ym_of(m1), "months": m1 - m0 + 1 }))
            }),
            "trend" => trend(r, alg, from, to).map(|t| {
                (
                    t["sen"]["pct_per_year"].as_f64().unwrap_or(0.0),
                    json!({ "sen_slope_per_year": t["sen"]["slope_per_year"], "p": t["mann_kendall"]["p"], "verdict": t["verdict"], "complete_years": t["complete_years"] }),
                )
            }),
            o => return Err(AppError::bad(format!("metric must be latest_anomaly, total or trend, got {o:?}"))),
        };
        match res {
            Ok((v, mut detail)) => {
                detail["region"] = json!(r.name);
                detail["title"] = json!(r.title);
                detail["title_en"] = json!(r.title_en);
                detail["fire_level"] = json!(r.fire_level());
                detail["value"] = json!(r2(v));
                rows.push((v, detail));
            }
            Err(_) => skipped.push(r.name.clone()),
        }
    }
    rows.sort_by(|a, b| b.0.total_cmp(&a.0));
    let ranking: Vec<Value> = rows
        .into_iter()
        .take(limit)
        .enumerate()
        .map(|(i, (_, mut d))| {
            d["rank"] = json!(i + 1);
            d
        })
        .collect();
    let unit = match metric {
        "latest_anomaly" => "% vs same month 2003–2022 median",
        "total" => "fire-days",
        _ => "%/year (Sen's slope)",
    };
    Ok(json!({ "metric": metric, "unit": unit, "algorithm": alg, "count": ranking.len(), "ranking": ranking, "skipped": skipped }))
}

// ------------------------------------------------------------------ hotspot stats

/// Fire-day cell of a detection (local solar day, 0.02° cell) when it passes the confidence rule.
fn cell_key(h: &Hotspot) -> Option<(i64, i64, i64)> {
    if h.is_modis() {
        if h.raw_pct().unwrap_or(0.0) < 30.0 {
            return None;
        }
    } else if h.confidence < 1 {
        return None;
    }
    let t = h.timestamp()? as f64;
    let day = ((t + h.longitude / 15.0 * 3600.0) / 86400.0).floor() as i64;
    Some((day, (h.latitude / data::CELL_DEG).floor() as i64, (h.longitude / data::CELL_DEG).floor() as i64))
}

fn frp_stats(mut v: Vec<f64>) -> Value {
    v.sort_by(f64::total_cmp);
    if v.is_empty() {
        return json!({ "n": 0 });
    }
    json!({
        "n": v.len(),
        "sum": round1(v.iter().sum()),
        "p50": r2(percentile(&v, 50.0)),
        "p90": r2(percentile(&v, 90.0)),
        "p99": r2(percentile(&v, 99.0)),
        "max": r2(*v.last().unwrap_or(&0.0)),
    })
}

pub fn hotspot_stats(rows: &[Hotspot]) -> Value {
    let mut by: BTreeMap<String, Vec<&Hotspot>> = BTreeMap::new();
    for h in rows {
        by.entry(h.satellite.clone()).or_default().push(h);
    }
    let mut sats = serde_json::Map::new();
    let mut all_cells = std::collections::HashSet::new();
    for (sat, hs) in &by {
        let cells: std::collections::HashSet<_> = hs.iter().filter_map(|h| cell_key(h)).collect();
        all_cells.extend(cells.iter().copied());
        let day = hs.iter().filter(|h| h.daynight.eq_ignore_ascii_case("D")).count();
        let night = hs.iter().filter(|h| h.daynight.eq_ignore_ascii_case("N")).count();
        let conf = [0u8, 1, 2].map(|c| hs.iter().filter(|h| h.confidence == c).count());
        sats.insert(
            sat.clone(),
            json!({
                "rows": hs.len(),
                "fire_day_cells": cells.len(),
                "day": day,
                "night": night,
                "confidence": { "low": conf[0], "nominal": conf[1], "high": conf[2] },
                "frp": frp_stats(hs.iter().filter_map(|h| h.frp).collect()),
            }),
        );
    }
    json!({
        "rows": rows.len(),
        "fire_day_cells_any_satellite": all_cells.len(),
        "day": rows.iter().filter(|h| h.daynight.eq_ignore_ascii_case("D")).count(),
        "night": rows.iter().filter(|h| h.daynight.eq_ignore_ascii_case("N")).count(),
        "frp": frp_stats(rows.iter().filter_map(|h| h.frp).collect()),
        "satellites": sats,
    })
}

// ------------------------------------------------------------------ CSV

pub fn calendar_csv(cal: &Value) -> String {
    let mut s = String::from("ym,value,baseline,anomaly_pct,source,partial\n");
    for m in cal["months"].as_array().into_iter().flatten() {
        let num = |v: &Value| v.as_f64().map(|x| x.to_string()).unwrap_or_default();
        s.push_str(&format!(
            "{},{},{},{},{},{}\n",
            m["ym"].as_str().unwrap_or(""),
            num(&m["value"]),
            num(&m["baseline"]),
            num(&m["anomaly_pct"]),
            m["source"].as_str().unwrap_or(""),
            m["partial"].as_bool().unwrap_or(false),
        ));
    }
    s
}

/// Summary of a `/api/range` body (column layout): per satellite, day/night, busiest days and cells.
pub fn range_summary(v: &Value, min_conf: u64) -> Value {
    let c = &v["cols"];
    let arr = |k: &str| c[k].as_array().cloned().unwrap_or_default();
    let (lat, lon, t, sat, frp, conf, dn) = (arr("lat"), arr("lon"), arr("t"), arr("sat"), arr("frp"), arr("conf"), arr("dn"));
    let sats: Vec<String> = v["sats"].as_array().into_iter().flatten().map(|s| s["code"].as_str().unwrap_or("").to_owned()).collect();
    let mut by_sat: std::collections::BTreeMap<String, (u64, f64)> = std::collections::BTreeMap::new();
    let mut days: std::collections::HashMap<String, (u64, f64)> = std::collections::HashMap::new();
    let mut cells: std::collections::HashMap<(i64, i64), (u64, f64)> = std::collections::HashMap::new();
    let (mut rows, mut night, mut total) = (0u64, 0u64, 0.0f64);
    for i in 0..lat.len() {
        if conf.get(i).and_then(Value::as_u64).unwrap_or(0) < min_conf {
            continue;
        }
        let f = frp.get(i).and_then(Value::as_f64).unwrap_or(0.0);
        rows += 1;
        total += f;
        if dn.get(i).and_then(Value::as_u64) == Some(1) {
            night += 1;
        }
        let code = sats.get(sat.get(i).and_then(Value::as_u64).unwrap_or(0) as usize).cloned().unwrap_or_default();
        let e = by_sat.entry(code).or_default();
        e.0 += 1;
        e.1 += f;
        let day = chrono::DateTime::from_timestamp(t.get(i).and_then(Value::as_i64).unwrap_or(0), 0).map(|d| d.date_naive().to_string()).unwrap_or_default();
        let e = days.entry(day).or_default();
        e.0 += 1;
        e.1 += f;
        let key = ((lat[i].as_f64().unwrap_or(0.0) * 10.0).floor() as i64, (lon[i].as_f64().unwrap_or(0.0) * 10.0).floor() as i64);
        let e = cells.entry(key).or_default();
        e.0 += 1;
        e.1 += f;
    }
    let mut top_days: Vec<_> = days.into_iter().collect();
    top_days.sort_by(|a, b| b.1.0.cmp(&a.1.0));
    let mut top_cells: Vec<_> = cells.into_iter().collect();
    top_cells.sort_by(|a, b| b.1.0.cmp(&a.1.0));
    let r = v["range"].as_array().cloned().unwrap_or_default();
    json!({
        "from": r.first(), "to": r.get(1), "bbox": v["bbox"], "country": v["country"], "source": v["source"], "note": v["note"], "truncated": v["truncated"],
        "rows": rows, "night": night, "day": rows - night, "frp_total_mw": (total * 10.0).round() / 10.0,
        "by_satellite": by_sat.into_iter().map(|(k, (n, f))| (k, json!({ "rows": n, "frp_mw": (f * 10.0).round() / 10.0 }))).collect::<serde_json::Map<_, _>>(),
        "top_days": top_days.iter().take(10).map(|(d, (n, f))| json!({ "date": d, "rows": n, "frp_mw": (f * 10.0).round() / 10.0 })).collect::<Vec<_>>(),
        "top_cells": top_cells.iter().take(10).map(|((la, lo), (n, f))| json!({ "lat": (*la as f64 + 0.5) / 10.0, "lon": (*lo as f64 + 0.5) / 10.0, "rows": n, "frp_mw": (f * 10.0).round() / 10.0 })).collect::<Vec<_>>(),
    })
}


#[cfg(test)]
mod tests {
    use super::*;

    fn regions() -> data::Regions {
        data::Regions::load(&std::path::Path::new(env!("CARGO_MANIFEST_DIR")).join("../data/regions"))
    }

    #[test]
    fn sen_and_mann_kendall_on_a_line() {
        let xs: Vec<f64> = (2001..=2020).map(f64::from).collect();
        let ys: Vec<f64> = xs.iter().map(|x| 100.0 + 5.0 * (x - 2001.0)).collect();
        let t = trend_stats(&xs, &ys).expect("stats");
        assert!((t.sen_slope - 5.0).abs() < 1e-9);
        assert!((t.ols_slope - 5.0).abs() < 1e-9);
        assert!((t.r2 - 1.0).abs() < 1e-9);
        assert_eq!(t.mk_s, 190); // n(n-1)/2 for a strictly increasing series
        assert!(t.mk_p < 1e-6);
        // an outlier moves OLS but not Sen's slope much
        let mut ys2 = ys.clone();
        ys2[19] += 1000.0;
        let t2 = trend_stats(&xs, &ys2).expect("stats");
        assert!((t2.sen_slope - 5.0).abs() < 0.6);
        assert!(t2.ols_slope > 15.0);
    }

    #[test]
    fn norm_cdf_is_sane() {
        assert!((norm_cdf(0.0) - 0.5).abs() < 1e-7);
        assert!((norm_cdf(1.96) - 0.975).abs() < 1e-3);
        assert!((norm_cdf(-1.96) - 0.025).abs() < 1e-3);
    }

    #[test]
    fn season_window_wraps_the_year() {
        let mut med = [1.0; 12];
        med[11] = 50.0;
        med[0] = 50.0;
        med[1] = 20.0;
        let (start, len, share) = season_window(&med, 0.8);
        assert_eq!((start, len), (11, 3));
        assert!(share >= 0.8);
    }

    #[test]
    fn anomalies_trend_profile_on_punjab() {
        let regs = regions();
        let r = regs.get("punjab").expect("punjab");
        let alg = data::DEFAULT_ALGORITHM;
        let arr = r.series_of(alg).expect("series");
        let base = baseline(arr, BaselineKind::Median);

        let a = anomalies(&r, alg, None, None, BaselineKind::Median, 50.0, Direction::Above, 500).expect("anomalies");
        let months = a["months"].as_array().expect("months");
        assert_eq!(a["count"].as_u64().unwrap() as usize, months.len());
        let mut last = f64::INFINITY;
        for m in months {
            let ym = m["ym"].as_str().unwrap();
            let idx = data::parse_ym(ym).unwrap() as usize;
            let pct = (arr[idx] / base[idx % 12] - 1.0) * 100.0;
            assert!(pct >= 50.0, "{ym} {pct}");
            assert!((m["anomaly_pct"].as_f64().unwrap() - round1(pct)).abs() < 1e-9);
            assert!(pct <= last + 1e-9, "sorted descending");
            last = pct;
            assert!(idx < current_month());
        }

        let t = trend(&r, alg, None, None).expect("trend");
        let years = t["years"].as_array().unwrap();
        let complete: Vec<(f64, f64)> = years
            .iter()
            .filter(|y| y["complete"].as_bool().unwrap())
            .map(|y| (y["year"].as_f64().unwrap(), y["total"].as_f64().unwrap()))
            .collect();
        assert_eq!(t["complete_years"].as_u64().unwrap() as usize, complete.len());
        // the running year is never part of the trend
        let cur_year = Y0 + (current_month() / 12) as i32;
        assert!(complete.iter().all(|(y, _)| (*y as i32) < cur_year));
        // brute-force Sen's slope
        let mut s = Vec::new();
        for i in 0..complete.len() {
            for j in i + 1..complete.len() {
                s.push((complete[j].1 - complete[i].1) / (complete[j].0 - complete[i].0));
            }
        }
        let sen = median(&s);
        assert!((t["sen"]["slope_per_year"].as_f64().unwrap() - r2(sen)).abs() < 0.02, "sen {sen}");

        let p = seasonal_profile(&r, alg).expect("profile");
        let m11: Vec<f64> = (2003..=2022).map(|y| arr[((y - Y0) * 12 + 10) as usize]).collect();
        assert!((p["months"][10]["median"].as_f64().unwrap() - round1(median(&m11))).abs() < 1e-9);
        assert!((p["months"][10]["median"].as_f64().unwrap() - round1(base[10])).abs() < 1e-9);
        let share: f64 = p["months"].as_array().unwrap().iter().map(|m| m["share_pct"].as_f64().unwrap()).sum();
        assert!((share - 100.0).abs() < 1.0);
        assert!(p["fire_season"]["share_pct"].as_f64().unwrap() >= 80.0);

        // calendar CSV has one line per month + header
        let cal = data::calendar(&r, Some("2024-01"), Some("2024-12"), alg, BaselineKind::Median).unwrap();
        assert_eq!(calendar_csv(&cal).lines().count(), 13);
    }

    #[test]
    fn ranking_covers_all_regions() {
        let regs = regions();
        let r = rank_regions(&regs.list, "total", data::DEFAULT_ALGORITHM, None, None, 100).unwrap();
        assert_eq!(r["count"].as_u64().unwrap() as usize, regs.list.len());
        let v: Vec<f64> = r["ranking"].as_array().unwrap().iter().map(|x| x["value"].as_f64().unwrap()).collect();
        assert!(v.windows(2).all(|w| w[0] >= w[1]));
    }
}
