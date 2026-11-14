//! Tools shared by the MCP endpoint and the AI agent (same handlers as the JSON API).

use serde_json::{Value, json};

use crate::auth::Principal;
use crate::data::{self, BaselineKind};
use crate::error::{AppError, AppResult};
use crate::state::AppState;
use crate::{firms, jobs, live};

pub fn str_arg(a: &Value, k: &str) -> Option<String> {
    match a.get(k)? {
        Value::String(s) => Some(s.trim().to_owned()).filter(|s| !s.is_empty()),
        Value::Number(n) => Some(n.to_string()),
        Value::Array(xs) => Some(
            xs.iter()
                .map(|x| match x {
                    Value::String(s) => s.clone(),
                    other => other.to_string(),
                })
                .collect::<Vec<_>>()
                .join(","),
        ),
        _ => None,
    }
}

fn bbox_arg(a: &Value) -> AppResult<[f64; 4]> {
    let s = str_arg(a, "bbox").ok_or_else(|| AppError::bad("bbox is required: [W,S,E,N]"))?;
    data::parse_bbox(&s)
}

const BBOX_SCHEMA: &str = "Bounding box [west, south, east, north] in degrees (array of 4 numbers or \"W,S,E,N\")";

fn bbox_schema() -> Value {
    json!({ "type": "array", "items": { "type": "number" }, "minItems": 4, "maxItems": 4, "description": BBOX_SCHEMA })
}

fn alg_enum() -> Value {
    json!(data::ALGORITHMS.iter().map(|a| a.key).collect::<Vec<_>>())
}

/// Tool definitions (name, description, JSON schema).
pub fn definitions() -> Vec<(&'static str, &'static str, Value)> {
    vec![
        (
            "list_regions",
            "List the regions that have a harmonized 2001→now monthly fire calendar (name, title, bbox, months, fire level, per-algorithm measured error %).",
            json!({ "type": "object", "properties": {} }),
        ),
        (
            "get_calendar",
            "Monthly Aqua-equivalent fire-days for a region and period, with the same-month 2003–2022 baseline, anomaly %, yearly totals and a summary (peak, top year, extreme months, latest vs baseline).",
            json!({ "type": "object", "properties": {
                "region": { "type": "string", "description": "region name from list_regions, e.g. punjab" },
                "from": { "type": "string", "description": "first month YYYY-MM (default: 11 months before `to`)" },
                "to": { "type": "string", "description": "last month YYYY-MM (default: latest month)" },
                "algorithm": { "type": "string", "enum": alg_enum(), "description": "default ensemble_adaptive (recommended)" },
                "baseline": { "type": "string", "enum": ["median", "mean"] }
            }, "required": ["region"] }),
        ),
        (
            "compare_algorithms",
            "Annual totals of several harmonization algorithms for a region and period, their measured errors (held-out / forward tests), and held-out monthly predictions vs real Aqua (2012–2021).",
            json!({ "type": "object", "properties": {
                "region": { "type": "string" },
                "from": { "type": "string", "description": "YYYY-MM (default 2001-01)" },
                "to": { "type": "string", "description": "YYYY-MM (default latest)" },
                "algorithms": { "type": "array", "items": { "type": "string", "enum": alg_enum() } }
            }, "required": ["region"] }),
        ),
        (
            "get_benchmark",
            "The cross-region benchmark of every method tried (held-out and forward monthly WAPE %).",
            json!({ "type": "object", "properties": {} }),
        ),
        (
            "search_hotspots",
            "Active-fire detections from NASA FIRMS (VIIRS S-NPP / NOAA-20 / NOAA-21, MODIS) inside a bbox for 1–5 days starting at `date`. Returns counts per satellite and up to `limit` rows.",
            json!({ "type": "object", "properties": {
                "bbox": bbox_schema(),
                "date": { "type": "string", "description": "first day YYYY-MM-DD (default yesterday UTC)" },
                "days": { "type": "integer", "minimum": 1, "maximum": 5 },
                "sources": { "type": "array", "items": { "type": "string", "enum": firms::SOURCES } },
                "min_conf": { "type": "integer", "enum": [0, 1, 2], "description": "0 all, 1 nominal+high, 2 high" },
                "min_frp": { "type": "number", "description": "minimum fire radiative power (MW)" },
                "limit": { "type": "integer", "minimum": 0, "maximum": 2000, "description": "rows to return (default 200)" }
            }, "required": ["bbox"] }),
        ),
        (
            "live_convert",
            "Convert one day's VIIRS detections inside a bbox to Aqua-equivalent fire-days (ratio, per-month ratio, seasonal FRP curve, ensemble) using the containing region's calibration or the pooled global one; also returns per-satellite rows and fire-day cells.",
            json!({ "type": "object", "properties": {
                "bbox": bbox_schema(),
                "date": { "type": "string", "description": "YYYY-MM-DD (default: latest globe snapshot)" }
            }, "required": ["bbox"] }),
        ),
        (
            "build_region",
            "Start a background job that downloads the FIRMS archives (2001→now) for a box inside one country, evaluates the algorithms and adds the region. Takes minutes to hours; poll job_status.",
            json!({ "type": "object", "properties": {
                "name": { "type": "string", "description": "id: a-z, 0-9, _ or -" },
                "title": { "type": "string" },
                "country": { "type": "string", "description": "FIRMS country file name, e.g. Lebanon, South_Sudan" },
                "bbox": bbox_schema()
            }, "required": ["name", "country", "bbox"] }),
        ),
        (
            "job_status",
            "Status of a background job (queued, running, done, failed) with the tail of its log.",
            json!({ "type": "object", "properties": { "id": { "type": "string" } }, "required": ["id"] }),
        ),
        (
            "explain_method",
            "Explain how the harmonized calendar is built (filters, fire-day cells, the reference chain, the algorithms, calibration and how errors are measured).",
            json!({ "type": "object", "properties": { "topic": { "type": "string", "description": "optional: cells, chain, algorithms, calibration, evaluation, live" } } }),
        ),
    ]
}

pub const EXPLAIN: &[(&str, &str)] = &[
    ("filters", "Filtering: MODIS detections need confidence ≥ 30, VIIRS 'low' detections are dropped, and every 2 km cell that ever showed a static source or volcano (FIRMS type 1–3) is removed."),
    ("cells", "Fire-day cells: a 0.02° (~2 km) cell × local solar day (UTC + lon/15 h) is counted once, which removes duplicates between pixels, overpasses and satellites. MODIS and VIIRS see the same fire very differently in rows, but much more similarly in fire-day cells."),
    ("chain", "Reference chain: Terra converted to Aqua until June 2002, Aqua itself until 2021, then S-NPP VIIRS converted to Aqua-equivalent from 2022 (Aqua's orbit drifted from 13:30 to about 15:15 local time). Each month carries its source: T, A or V."),
    ("algorithms", "Algorithms: ratio (one Aqua/S-NPP factor), ratio_month (one factor per calendar month), frp_season (probability Aqua sees each VIIRS cell given its FRP and the season, isotonic in FRP, plus Aqua-only cells), ensemble (average of ratio_month and frp_season), ensemble_geom (FRP curves split by Aqua pixel size over its 16-day cycle). *_adaptive variants weight recent years more (2-year half-life). naive/raw_rows splice MODIS then VIIRS without conversion and show the false jump at 2012."),
    ("calibration", "Calibration: sufficient statistics from the 2012–2021 S-NPP/Aqua overlap (per month totals and FRP-bin detection counts); regions without their own calibration use the pooled sums of all regions (global calibration)."),
    ("evaluation", "Evaluation: monthly WAPE against real Aqua: leave-one-year-out over 2012–2021, forward (train 2012–2017, test 2018–2021) and forward-adaptive (re-calibrate each year with recency weights). The recommended ensemble_adaptive scores about 4–14% depending on the region; naive splicing is 150–350% off."),
    ("live", "Live conversion for month m (season s = m/3) with C VIIRS cells: frp = Σ rho_season[s][bin(frp_cell)] + extra[m]·C; ratio_month = k_month[m]·C; ensemble = (frp + ratio_month)/2; ratio = k_single·C. FRP bin = clamp(floor((log10(max(frp,0.05))+1.5)/0.25),0,23)."),
];

fn truncate_rows(rows: Vec<firms::Hotspot>, limit: usize) -> Value {
    let mut by_sat = serde_json::Map::new();
    for r in &rows {
        let e = by_sat.entry(r.satellite.clone()).or_insert(json!(0));
        *e = json!(e.as_u64().unwrap_or(0) + 1);
    }
    let n = rows.len();
    json!({
        "count": n,
        "by_satellite": by_sat,
        "truncated": n > limit,
        "rows": rows.into_iter().take(limit).collect::<Vec<_>>(),
    })
}

pub async fn call(st: &AppState, who: Option<&Principal>, name: &str, a: &Value) -> AppResult<Value> {
    match name {
        "list_regions" => Ok(json!(st.regions().list.iter().map(|r| r.summary_json()).collect::<Vec<_>>())),
        "get_calendar" => {
            let r = st.regions().get(&str_arg(a, "region").ok_or_else(|| AppError::bad("region is required"))?)?;
            let alg = str_arg(a, "algorithm").unwrap_or_else(|| data::DEFAULT_ALGORITHM.into());
            let b = BaselineKind::parse(str_arg(a, "baseline").as_deref())?;
            data::calendar(&r, str_arg(a, "from").as_deref(), str_arg(a, "to").as_deref(), &alg, b)
        }
        "compare_algorithms" => {
            let r = st.regions().get(&str_arg(a, "region").ok_or_else(|| AppError::bad("region is required"))?)?;
            let algs = parse_algs(str_arg(a, "algorithms").as_deref());
            let from = str_arg(a, "from").unwrap_or_else(|| "2001-01".into());
            data::compare(&r, Some(&from), str_arg(a, "to").as_deref(), &algs)
        }
        "get_benchmark" => {
            let b = tokio::fs::read(st.cfg.data_dir.join("benchmark.json")).await?;
            Ok(serde_json::from_slice(&b)?)
        }
        "search_hotspots" => {
            let q = firms::HotspotQuery::parse(
                str_arg(a, "bbox").as_deref(),
                str_arg(a, "date").as_deref(),
                a.get("days").and_then(Value::as_u64).map(|d| d as u32),
                str_arg(a, "sources").as_deref(),
                a.get("min_conf").and_then(Value::as_u64).map(|d| d.min(9) as u8),
                a.get("min_frp").and_then(Value::as_f64),
            )?;
            let limit = a.get("limit").and_then(Value::as_u64).unwrap_or(200).min(2000) as usize;
            let rows = firms::hotspots(st, &q).await?;
            let mut v = truncate_rows(rows, limit);
            v["bbox"] = json!(q.bbox);
            v["date"] = json!(q.date.to_string());
            v["days"] = json!(q.days);
            Ok(v)
        }
        "live_convert" => live::live(st, bbox_arg(a)?, str_arg(a, "date").as_deref()).await,
        "build_region" => {
            let who = who.ok_or(AppError::Unauthorized)?;
            let name = str_arg(a, "name").ok_or_else(|| AppError::bad("name is required"))?;
            let country = str_arg(a, "country").ok_or_else(|| AppError::bad("country is required"))?;
            jobs::build_region(st, &who.user_id, &name, str_arg(a, "title").as_deref(), &country, &bbox_arg(a)?)
        }
        "job_status" => jobs::get(st, &str_arg(a, "id").ok_or_else(|| AppError::bad("id is required"))?),
        "explain_method" => {
            let topic = str_arg(a, "topic").unwrap_or_default().to_ascii_lowercase();
            let parts: Vec<&str> = EXPLAIN
                .iter()
                .filter(|(k, _)| topic.is_empty() || topic.contains(k) || k.contains(topic.as_str()))
                .map(|(_, t)| *t)
                .collect();
            let text = if parts.is_empty() { EXPLAIN.iter().map(|(_, t)| *t).collect::<Vec<_>>().join("\n\n") } else { parts.join("\n\n") };
            Ok(json!({ "text": text }))
        }
        other => Err(AppError::BadRequest("unknown_tool", format!("unknown tool {other:?}"))),
    }
}

pub fn parse_algs(s: Option<&str>) -> Vec<String> {
    match s.filter(|s| !s.is_empty()) {
        Some(s) => s.split(',').map(|x| x.trim().to_owned()).filter(|x| !x.is_empty()).collect(),
        None => ["ensemble_adaptive", "ratio", "naive", "aqua_only"].iter().map(|s| (*s).to_owned()).collect(),
    }
}
