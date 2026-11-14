//! Region archives (data/regions/*.json), the algorithm catalogue, calibration math ported from
//! tools/harmlib.py, and the calendar / compare computations behind the JSON API.

use std::collections::{BTreeMap, HashMap};
use std::path::{Path, PathBuf};
use std::sync::Arc;

use serde::{Deserialize, Serialize};
use serde_json::{Value, json};

use crate::error::{AppError, AppResult};

pub const Y0: i32 = 2001;
pub const NB: usize = 24;
pub const CELL_DEG: f64 = 0.02;

/// FRP bin: clamp(floor((log10(max(frp,0.05))+1.5)/0.25),0,23) (harmlib.fbin).
pub fn fbin(frp: f64) -> usize {
    let v = ((frp.max(0.05).log10() + 1.5) / 0.25).floor();
    v.clamp(0.0, (NB - 1) as f64) as usize
}

/// Month index of the current UTC month (a month at or after it is still incomplete).
pub fn current_month() -> usize {
    use chrono::Datelike as _;
    let d = chrono::Utc::now().date_naive();
    ((d.year() - Y0) * 12 + d.month0() as i32).max(0) as usize
}

pub fn ym_of(m: usize) -> String {
    format!("{}-{:02}", Y0 + (m / 12) as i32, m % 12 + 1)
}

/// "YYYY-MM" -> month index from 2001-01 (may be negative / beyond the archive).
pub fn parse_ym(s: &str) -> AppResult<i64> {
    let (y, m) = s
        .split_once('-')
        .ok_or_else(|| AppError::bad(format!("expected YYYY-MM, got {s:?}")))?;
    let y: i64 = y.parse().map_err(|_| AppError::bad(format!("bad year in {s:?}")))?;
    let m: i64 = m.parse().map_err(|_| AppError::bad(format!("bad month in {s:?}")))?;
    if !(1..=12).contains(&m) || !(1900..=2200).contains(&y) {
        return Err(AppError::bad(format!("bad month {s:?}")));
    }
    Ok((y - i64::from(Y0)) * 12 + m - 1)
}

fn round1(x: f64) -> f64 {
    (x * 10.0).round() / 10.0
}

// ------------------------------------------------------------------ algorithms

#[derive(Debug, Clone, Copy)]
pub struct Algorithm {
    pub key: &'static str,
    pub name_ar: &'static str,
    pub name_en: &'static str,
    pub desc_ar: &'static str,
    pub desc_en: &'static str,
    /// (eval method, test) in the region `eval`, or None for the reference itself.
    pub eval: Option<(&'static str, &'static str)>,
}

pub const ALGORITHMS: &[Algorithm] = &[
    Algorithm {
        key: "ensemble_adaptive",
        name_ar: "المزيج التكيّفي (موصى به)",
        name_en: "Adaptive ensemble (recommended)",
        desc_ar: "متوسط نسبة شهرية ومنحنى FRP موسمي، يُعايَر على 2012–2021 مع وزن أكبر للسنوات الأحدث (عمر نصفي سنتان).",
        desc_en: "Average of a per-month ratio and a seasonal FRP detection curve, calibrated on 2012–2021 with more weight on recent years (2-year half-life).",
        eval: Some(("ensemble", "forward_adaptive")),
    },
    Algorithm {
        key: "ensemble_geom_adaptive",
        name_ar: "المزيج التكيّفي + هندسة مدار Aqua",
        name_en: "Adaptive ensemble + Aqua orbit geometry",
        desc_ar: "مثل السابق، ومنحنى FRP منفصل حسب حجم بكسل Aqua المتوقع (دورة 16 يوماً).",
        desc_en: "Like the adaptive ensemble, with separate FRP curves by expected Aqua pixel size (16-day repeat cycle).",
        eval: Some(("ensemble_geom", "forward_adaptive")),
    },
    Algorithm {
        key: "ensemble",
        name_ar: "المزيج (معايرة ثابتة)",
        name_en: "Ensemble (static calibration)",
        desc_ar: "نفس المزيج بأوزان متساوية لسنوات 2012–2021.",
        desc_en: "The same ensemble with equal weights for 2012–2021.",
        eval: Some(("ensemble", "forward")),
    },
    Algorithm {
        key: "frp_season_adaptive",
        name_ar: "منحنى FRP الموسمي",
        name_en: "Seasonal FRP curve",
        desc_ar: "احتمال أن يرى Aqua كل خلية حسب FRP الذي قاسه VIIRS والموسم.",
        desc_en: "Probability that Aqua sees each VIIRS fire-day cell, by the FRP VIIRS measured and the season.",
        eval: Some(("frp_season", "forward_adaptive")),
    },
    Algorithm {
        key: "ratio_month_adaptive",
        name_ar: "نسبة لكل شهر",
        name_en: "Per-month ratio",
        desc_ar: "نسبة Aqua ÷ S-NPP لكل شهر من السنة.",
        desc_en: "Aqua ÷ S-NPP fire-day ratio for each calendar month.",
        eval: Some(("ratio_month", "forward_adaptive")),
    },
    Algorithm {
        key: "ratio",
        name_ar: "نسبة ثابتة واحدة",
        name_en: "Single fixed ratio",
        desc_ar: "رقم واحد يُضرب فيه VIIRS دائماً.",
        desc_en: "One number VIIRS is always multiplied by.",
        eval: Some(("ratio", "forward")),
    },
    Algorithm {
        key: "naive",
        name_ar: "ربط مباشر (أيام حريق)",
        name_en: "Naive splice (fire-days)",
        desc_ar: "MODIS حتى 2011 ثم VIIRS كما هو. يصنع قفزة وهمية عند 2012.",
        desc_en: "MODIS until 2011, then VIIRS as is. Creates a false jump at 2012.",
        eval: Some(("switch", "loyo")),
    },
    Algorithm {
        key: "raw_rows",
        name_ar: "ربط مباشر (عدّ الأسطر)",
        name_en: "Naive splice (raw rows)",
        desc_ar: "عدّ كل أسطر FIRMS من كل الأقمار، بالتكرار. لا يصلح للمقارنة.",
        desc_en: "Counts every FIRMS row from every satellite, duplicates included. Not comparable over time.",
        eval: Some(("raw_switch", "loyo")),
    },
    Algorithm {
        key: "aqua_only",
        name_ar: "Aqua وحده (مرجع INPE)",
        name_en: "Aqua only (INPE reference)",
        desc_ar: "قمر واحد طوال الفترة. يصلح حتى 2021، ثم ينجرف وقت مروره من 13:20 إلى حوالي 15:15.",
        desc_en: "One satellite for the whole period. Valid until 2021, then its overpass drifts from 13:20 to about 15:15.",
        eval: None,
    },
];

pub const DEFAULT_ALGORITHM: &str = "ensemble_adaptive";

pub fn algorithm(key: &str) -> AppResult<&'static Algorithm> {
    ALGORITHMS
        .iter()
        .find(|a| a.key == key)
        .ok_or_else(|| AppError::bad(format!("unknown algorithm {key:?}")))
}

pub fn algorithms_json() -> Value {
    Value::Array(
        ALGORITHMS
            .iter()
            .map(|a| {
                json!({
                    "key": a.key,
                    "name": { "ar": a.name_ar, "en": a.name_en },
                    "description": { "ar": a.desc_ar, "en": a.desc_en },
                    "recommended": a.key == DEFAULT_ALGORITHM,
                    "eval": a.eval.map(|(test, key)| json!({ "test": test, "key": key })),
                })
            })
            .collect(),
    )
}

// ------------------------------------------------------------------ calibration

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Calib {
    pub k_single: f64,
    pub k_month: Vec<f64>,
    pub extra: Vec<f64>,
    pub rho: Vec<f64>,
    pub rho_season: Vec<Vec<f64>>,
}

#[derive(Debug, Clone, Deserialize)]
pub struct CalibStats {
    #[serde(rename = "T")]
    pub t: Vec<f64>,
    #[serde(rename = "R")]
    pub r: Vec<f64>,
    pub only: Vec<f64>,
    pub num: Vec<Vec<Vec<f64>>>,
    pub den: Vec<Vec<Vec<f64>>>,
}

impl CalibStats {
    fn add(&mut self, b: &CalibStats) {
        for (x, y) in self.t.iter_mut().zip(&b.t) {
            *x += y;
        }
        for (x, y) in self.r.iter_mut().zip(&b.r) {
            *x += y;
        }
        for (x, y) in self.only.iter_mut().zip(&b.only) {
            *x += y;
        }
        for (a, b) in [(&mut self.num, &b.num), (&mut self.den, &b.den)] {
            for (sa, sb) in a.iter_mut().zip(b) {
                for (ga, gb) in sa.iter_mut().zip(sb) {
                    for (x, y) in ga.iter_mut().zip(gb) {
                        *x += y;
                    }
                }
            }
        }
    }
}

/// harmlib.isotonic: pool-adjacent-violators on num/den per bin, then fill gaps both ways.
pub fn isotonic(num: &[f64], den: &[f64]) -> Vec<f64> {
    let mut blocks: Vec<(f64, f64, usize, usize)> = Vec::new();
    for b in 0..NB {
        if den[b] <= 0.0 {
            continue;
        }
        blocks.push((num[b], den[b], b, b));
        while blocks.len() > 1 {
            let l = blocks.len();
            let (pn, pd, _, _) = blocks[l - 2];
            let (cn, cd, _, _) = blocks[l - 1];
            if pn / pd > cn / cd {
                let x = blocks.pop().unwrap_or_default();
                let y = blocks.pop().unwrap_or_default();
                blocks.push((x.0 + y.0, x.1 + y.1, y.2, x.3));
            } else {
                break;
            }
        }
    }
    let mut out: Vec<Option<f64>> = vec![None; NB];
    for (n, d, lo, hi) in blocks {
        for slot in out.iter_mut().take(hi + 1).skip(lo) {
            *slot = Some(n / d);
        }
    }
    let mut last = None;
    for slot in out.iter_mut() {
        if slot.is_none() {
            *slot = last;
        } else {
            last = *slot;
        }
    }
    let mut last = None;
    for slot in out.iter_mut().rev() {
        if slot.is_none() {
            *slot = last;
        } else {
            last = *slot;
        }
    }
    out.into_iter().map(|x| x.unwrap_or(0.0)).collect()
}

/// harmlib.calib_params (the parts live conversion needs: k_single, k_month, extra, rho, rho_season).
pub fn calib_params(s: &CalibStats) -> Calib {
    let sum = |v: &[f64]| v.iter().sum::<f64>();
    let kt = sum(&s.t) / sum(&s.r).max(1e-9);
    let k_month = (0..12).map(|c| (s.t[c] + 50.0 * kt) / (s.r[c] + 50.0)).collect();
    let tot = sum(&s.only) / sum(&s.r).max(1e-9);
    let extra = (0..12).map(|c| (s.only[c] + 50.0 * tot) / (s.r[c] + 50.0)).collect();
    let pooled = |arr: &Vec<Vec<Vec<f64>>>, seasons: &[usize], b: usize| -> f64 {
        seasons.iter().map(|&se| (0..3).map(|g| arr[se][g][b]).sum::<f64>()).sum()
    };
    let all = [0usize, 1, 2, 3];
    let nb: Vec<f64> = (0..NB).map(|b| pooled(&s.num, &all, b)).collect();
    let db: Vec<f64> = (0..NB).map(|b| pooled(&s.den, &all, b)).collect();
    let base = isotonic(&nb, &db);
    let rho_season = (0..4)
        .map(|se| {
            let ns: Vec<f64> = (0..NB).map(|b| pooled(&s.num, &[se], b) + 30.0 * base[b]).collect();
            let ds: Vec<f64> = (0..NB).map(|b| pooled(&s.den, &[se], b) + 30.0).collect();
            isotonic(&ns, &ds)
        })
        .collect();
    Calib { k_single: kt, k_month, extra, rho: base, rho_season }
}

/// Average of regional calibrations (fallback when no region carries `calib_stats`).
fn average_calib(cs: &[&Calib]) -> Calib {
    let n = cs.len() as f64;
    let avg_vec = |f: &dyn Fn(&Calib) -> &Vec<f64>| -> Vec<f64> {
        let len = f(cs[0]).len();
        (0..len).map(|i| cs.iter().map(|c| f(c)[i]).sum::<f64>() / n).collect()
    };
    Calib {
        k_single: cs.iter().map(|c| c.k_single).sum::<f64>() / n,
        k_month: avg_vec(&|c| &c.k_month),
        extra: avg_vec(&|c| &c.extra),
        rho: avg_vec(&|c| &c.rho),
        rho_season: (0..4)
            .map(|se| (0..NB).map(|b| cs.iter().map(|c| c.rho_season[se][b]).sum::<f64>() / n).collect())
            .collect(),
    }
}

// ------------------------------------------------------------------ regions

#[derive(Debug, Clone, Deserialize)]
struct RegionFile {
    name: String,
    #[serde(default)]
    title: Option<String>,
    bbox: Vec<f64>,
    #[serde(rename = "NM")]
    nm: usize,
    src: String,
    series: HashMap<String, Vec<f64>>,
    #[serde(default)]
    eval: Value,
    #[serde(default)]
    eval_months: Vec<usize>,
    #[serde(default)]
    eval_aqua: Vec<f64>,
    calib: Calib,
    #[serde(default)]
    calib_stats: Option<CalibStats>,
    #[serde(default)]
    country: Option<String>,
    #[serde(default)]
    title_en: Option<String>,
}

#[derive(Debug, Clone)]
pub struct Region {
    pub name: String,
    pub title: String,
    pub title_en: String,
    pub country: Option<String>,
    pub bbox: [f64; 4],
    pub nm: usize,
    pub src: Vec<u8>,
    pub series: HashMap<String, Vec<f64>>,
    pub eval: Value,
    pub eval_months: Vec<usize>,
    pub eval_aqua: Vec<f64>,
    pub calib: Calib,
    pub calib_stats: Option<CalibStats>,
    pub path: PathBuf,
}

/// English names / countries for the seed regions (their JSON only carries an Arabic title).
fn seed_meta(name: &str) -> (Option<&'static str>, Option<&'static str>) {
    match name {
        "punjab" => (Some("Punjab, India"), Some("India")),
        "ssudan" => (Some("South Sudan"), Some("South Sudan")),
        "portugal" => (Some("Portugal"), Some("Portugal")),
        "bolivia" => (Some("Bolivia, Chiquitania"), Some("Bolivia")),
        "lebanon" => (Some("Lebanon"), Some("Lebanon")),
        _ => (None, None),
    }
}

impl Region {
    fn load(path: &Path) -> AppResult<Self> {
        let bytes = std::fs::read(path)?;
        let f: RegionFile = serde_json::from_slice(&bytes)?;
        if f.bbox.len() != 4 {
            return Err(AppError::Internal(format!("{}: bbox must have 4 numbers", path.display())));
        }
        let (en, country) = seed_meta(&f.name);
        let country = f.country.or(country.map(str::to_owned));
        let title_en = f
            .title_en
            .or(en.map(str::to_owned))
            .or_else(|| country.clone())
            .unwrap_or_else(|| f.name.clone());
        Ok(Self {
            title: f.title.unwrap_or_else(|| f.name.clone()),
            title_en,
            country,
            bbox: [f.bbox[0], f.bbox[1], f.bbox[2], f.bbox[3]],
            nm: f.nm,
            src: f.src.into_bytes(),
            series: f.series,
            eval: f.eval,
            eval_months: f.eval_months,
            eval_aqua: f.eval_aqua,
            calib: f.calib,
            calib_stats: f.calib_stats,
            name: f.name,
            path: path.to_owned(),
        })
    }

    pub fn error_of(&self, alg: &Algorithm) -> Option<(String, f64)> {
        let (method, test) = alg.eval?;
        let pct = self.eval.get(method)?.get(test)?.as_f64()?;
        Some((test.to_owned(), pct))
    }

    /// low / medium / high by the mean monthly Aqua fire-days over the held-out years (2012–2021).
    pub fn fire_level(&self) -> &'static str {
        let mean = if self.eval_aqua.is_empty() {
            let s = self.series.get("aqua_only");
            s.map_or(0.0, |s| s.iter().sum::<f64>() / s.len().max(1) as f64)
        } else {
            self.eval_aqua.iter().sum::<f64>() / self.eval_aqua.len() as f64
        };
        if mean < 150.0 {
            "low"
        } else if mean < 1000.0 {
            "medium"
        } else {
            "high"
        }
    }

    pub fn summary_json(&self) -> Value {
        let eval: serde_json::Map<String, Value> = ALGORITHMS
            .iter()
            .filter_map(|a| self.error_of(a).map(|(_, pct)| (a.key.to_owned(), json!(pct))))
            .collect();
        json!({
            "name": self.name,
            "title": self.title,
            "title_en": self.title_en,
            "country": self.country,
            "bbox": self.bbox,
            "nm": self.nm,
            "start": "2001-01",
            "end": ym_of(self.nm.saturating_sub(1)),
            "fire_level": self.fire_level(),
            "eval": eval,
        })
    }

    pub fn contains(&self, bb: &[f64; 4]) -> bool {
        self.bbox[0] <= bb[0] && self.bbox[1] <= bb[1] && self.bbox[2] >= bb[2] && self.bbox[3] >= bb[3]
    }

    fn series_of(&self, alg: &str) -> AppResult<&Vec<f64>> {
        self.series
            .get(alg)
            .ok_or_else(|| AppError::bad(format!("algorithm {alg:?} has no series in region {}", self.name)))
    }

    /// Clamp an inclusive [from, to] month window to the archive. Defaults: last 12 months.
    pub fn window(&self, from: Option<&str>, to: Option<&str>) -> AppResult<(usize, usize)> {
        let last = self.nm as i64 - 1;
        let b = match to {
            Some(t) if !t.is_empty() => parse_ym(t)?.min(last),
            _ => last,
        };
        let a = match from {
            Some(f) if !f.is_empty() => parse_ym(f)?.max(0),
            _ => (b - 11).max(0),
        };
        if a > b || b < 0 {
            return Err(AppError::bad("empty month range for this region"));
        }
        Ok((a as usize, b as usize))
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BaselineKind {
    Median,
    Mean,
}

impl BaselineKind {
    pub fn parse(s: Option<&str>) -> AppResult<Self> {
        match s.unwrap_or("median") {
            "" | "median" => Ok(Self::Median),
            "mean" => Ok(Self::Mean),
            other => Err(AppError::bad(format!("baseline must be median or mean, got {other:?}"))),
        }
    }
    pub fn as_str(self) -> &'static str {
        match self {
            Self::Median => "median",
            Self::Mean => "mean",
        }
    }
}

/// Same calendar month over 2003–2022 (legacy-sim baseline()).
pub fn baseline(arr: &[f64], kind: BaselineKind) -> [f64; 12] {
    let mut out = [0.0; 12];
    for (c, slot) in out.iter_mut().enumerate() {
        let mut xs: Vec<f64> = (2003..=2022)
            .map(|y| ((y - Y0) * 12) as usize + c)
            .filter_map(|m| arr.get(m).copied())
            .collect();
        if xs.is_empty() {
            continue;
        }
        xs.sort_by(f64::total_cmp);
        *slot = match kind {
            BaselineKind::Median => {
                let n = xs.len();
                (xs[(n - 1) / 2] + xs[n / 2]) / 2.0
            }
            BaselineKind::Mean => xs.iter().sum::<f64>() / xs.len() as f64,
        };
    }
    out
}

fn anomaly(v: f64, b: f64) -> Option<f64> {
    (b > 0.0).then(|| round1((v / b - 1.0) * 100.0))
}

pub fn calendar(r: &Region, from: Option<&str>, to: Option<&str>, alg: &str, kind: BaselineKind) -> AppResult<Value> {
    let a = algorithm(alg)?;
    let arr = r.series_of(alg)?;
    let (m0, m1) = r.window(from, to)?;
    let base = baseline(arr, kind);
    let cur = current_month();
    let months: Vec<Value> = (m0..=m1)
        .map(|m| {
            json!({
                "ym": ym_of(m),
                "value": arr[m],
                "baseline": round1(base[m % 12]),
                "anomaly_pct": anomaly(arr[m], base[m % 12]),
                "source": (r.src.get(m).copied().unwrap_or(b'?') as char).to_string(),
                "partial": m >= cur,
            })
        })
        .collect();
    let mut by_year: BTreeMap<i32, (f64, usize)> = BTreeMap::new();
    for (m, v) in arr.iter().enumerate().take(m1 + 1).skip(m0) {
        let e = by_year.entry(Y0 + (m / 12) as i32).or_default();
        e.0 += v;
        e.1 += 1;
    }
    let years: Vec<Value> = by_year
        .iter()
        .map(|(y, (t, n))| json!({ "year": y, "total": round1(*t), "complete": *n == 12 }))
        .collect();
    let total: f64 = (m0..=m1).map(|m| arr[m]).sum();
    let peak = (m0..=m1).fold(m0, |p, m| if arr[m] > arr[p] { m } else { p });
    let top_year = by_year
        .iter()
        .filter(|(_, (_, n))| *n == 12)
        .max_by(|a, b| a.1.0.total_cmp(&b.1.0))
        .map(|(y, (t, _))| json!({ "year": y, "total": round1(*t) }));
    let extreme = (m0..=m1).filter(|&m| base[m % 12] > 0.0 && arr[m] > 1.5 * base[m % 12]).count();
    // compare the latest COMPLETE month: the running month has only a few days of data
    let last = if m1 >= cur && cur > m0 { cur - 1 } else { m1 };
    let same: Vec<f64> = (0..).map(|y| y * 12 + last % 12).take_while(|&mm| mm < r.nm).map(|mm| arr[mm]).collect();
    let rank = same.iter().filter(|&&v| v > arr[last]).count() + 1;
    let error = r.error_of(a).map(|(test, pct)| json!({ "test": test, "pct": pct }));
    Ok(json!({
        "region": r.name,
        "algorithm": alg,
        "baseline_kind": kind.as_str(),
        "baseline_years": [2003, 2022],
        "from": ym_of(m0),
        "to": ym_of(m1),
        "months": months,
        "years": years,
        "summary": {
            "total": round1(total),
            "peak": { "ym": ym_of(peak), "value": arr[peak] },
            "top_year": top_year,
            "extreme_months": extreme,
            "latest": {
                "ym": ym_of(last),
                "value": arr[last],
                "baseline": round1(base[last % 12]),
                "anomaly_pct": anomaly(arr[last], base[last % 12]),
                "rank": rank,
                "of": same.len(),
            },
        },
        "error": error,
    }))
}

pub fn compare(r: &Region, from: Option<&str>, to: Option<&str>, algs: &[String]) -> AppResult<Value> {
    let (m0, m1) = r.window(from, to)?;
    let years: Vec<i32> = (Y0 + (m0 / 12) as i32..=Y0 + (m1 / 12) as i32).collect();
    let mut series = serde_json::Map::new();
    let mut eval = serde_json::Map::new();
    let mut heldout = serde_json::Map::new();
    heldout.insert("months".into(), json!(r.eval_months.iter().map(|&m| ym_of(m)).collect::<Vec<_>>()));
    heldout.insert("aqua".into(), json!(r.eval_aqua));
    for key in algs {
        let a = algorithm(key)?;
        let arr = r.series_of(key)?;
        let totals: Vec<f64> = years
            .iter()
            .map(|y| {
                let ys = ((y - Y0) * 12) as usize;
                round1((ys.max(m0)..=(ys + 11).min(m1)).map(|m| arr[m]).sum())
            })
            .collect();
        series.insert(key.clone(), json!(totals));
        let method = a.eval.map(|(m, _)| m);
        let ev = method.and_then(|m| r.eval.get(m));
        eval.insert(
            key.clone(),
            json!({
                "method": method,
                "test": a.eval.map(|(_, t)| t),
                "pct": r.error_of(a).map(|(_, p)| p),
                "loyo": ev.and_then(|e| e.get("loyo")).cloned(),
                "forward": ev.and_then(|e| e.get("forward")).cloned(),
                "forward_adaptive": ev.and_then(|e| e.get("forward_adaptive")).cloned(),
            }),
        );
        if let Some(lm) = ev.and_then(|e| e.get("loyo_monthly")) {
            heldout.insert(key.clone(), lm.clone());
        }
    }
    let complete: Vec<bool> = years
        .iter()
        .map(|y| {
            let ys = ((y - Y0) * 12) as usize;
            ys >= m0 && ys + 11 <= m1
        })
        .collect();
    Ok(json!({
        "region": r.name,
        "from": ym_of(m0),
        "to": ym_of(m1),
        "years": years,
        "complete": complete,
        "series": series,
        "eval": eval,
        "heldout": heldout,
    }))
}

// ------------------------------------------------------------------ store

#[derive(Debug, Default)]
pub struct Regions {
    pub list: Vec<Arc<Region>>,
    pub global: Option<Calib>,
    pub global_kind: &'static str,
}

const ORDER: [&str; 5] = ["punjab", "ssudan", "portugal", "bolivia", "lebanon"];

impl Regions {
    pub fn load(dir: &Path) -> Self {
        let mut list = Vec::new();
        if let Ok(rd) = std::fs::read_dir(dir) {
            for e in rd.flatten() {
                let p = e.path();
                if p.extension().and_then(|x| x.to_str()) != Some("json") {
                    continue;
                }
                match Region::load(&p) {
                    Ok(r) => list.push(Arc::new(r)),
                    Err(err) => tracing::warn!(path = %p.display(), %err, "skipping region file"),
                }
            }
        }
        list.sort_by_key(|r| (ORDER.iter().position(|n| *n == r.name).unwrap_or(99), r.name.clone()));
        // Global calibration: pooled sufficient statistics (build_harm_data.py), else an average.
        let with_stats: Vec<&CalibStats> = list.iter().filter_map(|r| r.calib_stats.as_ref()).collect();
        let (global, global_kind) = if !with_stats.is_empty() && with_stats.len() == list.len() {
            let mut pooled = with_stats[0].clone();
            for s in &with_stats[1..] {
                pooled.add(s);
            }
            (Some(calib_params(&pooled)), "pooled")
        } else if !list.is_empty() {
            let cs: Vec<&Calib> = list.iter().map(|r| &r.calib).collect();
            (Some(average_calib(&cs)), "average")
        } else {
            (None, "none")
        };
        Self { list, global, global_kind }
    }

    pub fn get(&self, name: &str) -> AppResult<Arc<Region>> {
        self.list
            .iter()
            .find(|r| r.name == name)
            .cloned()
            .ok_or_else(|| AppError::NotFound(format!("unknown region {name:?}")))
    }

    /// The smallest region whose bbox contains `bb`.
    pub fn containing(&self, bb: &[f64; 4]) -> Option<Arc<Region>> {
        self.list
            .iter()
            .filter(|r| r.contains(bb))
            .min_by(|a, b| {
                let area = |r: &Region| (r.bbox[2] - r.bbox[0]) * (r.bbox[3] - r.bbox[1]);
                area(a).total_cmp(&area(b))
            })
            .cloned()
    }
}

/// Parse "W,S,E,N".
pub fn parse_bbox(s: &str) -> AppResult<[f64; 4]> {
    let v: Vec<f64> = s
        .split(',')
        .map(|x| x.trim().parse::<f64>())
        .collect::<Result<_, _>>()
        .map_err(|_| AppError::bad("bbox must be W,S,E,N numbers"))?;
    if v.len() != 4 {
        return Err(AppError::bad("bbox must be W,S,E,N"));
    }
    let bb = [v[0], v[1], v[2], v[3]];
    if !(-180.0..=180.0).contains(&bb[0])
        || !(-180.0..=180.0).contains(&bb[2])
        || !(-90.0..=90.0).contains(&bb[1])
        || !(-90.0..=90.0).contains(&bb[3])
        || bb[0] >= bb[2]
        || bb[1] >= bb[3]
    {
        return Err(AppError::bad("bbox out of range (W<E, S<N, lon ±180, lat ±90)"));
    }
    Ok(bb)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn fbin_matches_python() {
        assert_eq!(fbin(0.0), 0); // (log10(0.05)+1.5)/0.25 = 0.796
        assert_eq!(fbin(1.0), 6);
        assert_eq!(fbin(1e9), NB - 1);
    }

    #[test]
    fn ym_roundtrip() {
        assert_eq!(parse_ym("2001-01").ok(), Some(0));
        assert_eq!(ym_of(310), "2026-11");
        assert_eq!(parse_ym("2026-11").ok(), Some(310));
    }

    #[test]
    fn isotonic_is_monotone() {
        let num = [1.0, 5.0, 2.0].iter().chain([0.0; 21].iter()).copied().collect::<Vec<_>>();
        let den = [10.0, 10.0, 10.0].iter().chain([0.0; 21].iter()).copied().collect::<Vec<_>>();
        let r = isotonic(&num, &den);
        assert!((r[0] - 0.1).abs() < 1e-12);
        assert!((r[1] - 0.35).abs() < 1e-12 && (r[2] - 0.35).abs() < 1e-12);
        assert!((r[23] - 0.35).abs() < 1e-12);
    }

    /// calib_params(calib_stats) must reproduce the `calib` harmlib.py stored for every seed region.
    #[test]
    fn calib_params_matches_python_for_seed_regions() {
        let dir = std::path::Path::new(env!("CARGO_MANIFEST_DIR")).join("../data/regions");
        let regions = Regions::load(&dir);
        assert!(!regions.list.is_empty());
        let close = |a: f64, b: f64| (a - b).abs() <= 1e-9 * (1.0 + a.abs().max(b.abs()));
        for r in &regions.list {
            let Some(stats) = &r.calib_stats else { continue };
            let c = calib_params(stats);
            assert!(close(c.k_single, r.calib.k_single), "{} k_single", r.name);
            for i in 0..12 {
                assert!(close(c.k_month[i], r.calib.k_month[i]), "{} k_month[{i}]", r.name);
                assert!(close(c.extra[i], r.calib.extra[i]), "{} extra[{i}]", r.name);
            }
            for b in 0..NB {
                assert!(close(c.rho[b], r.calib.rho[b]), "{} rho[{b}]", r.name);
                for se in 0..4 {
                    assert!(close(c.rho_season[se][b], r.calib.rho_season[se][b]), "{} rho_season[{se}][{b}]", r.name);
                }
            }
        }
        assert_eq!(regions.global_kind, "pooled");
    }
}
