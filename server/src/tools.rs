//! The single tool registry shared by the MCP server and the in-app agent.
//! Every tool is defined once: name, title, description, inputSchema (enums + `oneOf` titles built
//! from live region data), outputSchema, annotations, optional MCP Apps widget and a write flag.

use std::sync::Arc;

use base64::Engine as _;
use base64::engine::general_purpose::URL_SAFE_NO_PAD as B64;
use hmac::{Hmac, Mac};
use serde_json::{Map, Value, json};
use sha2::Sha256;

use crate::analytics::{self, Direction};
use crate::auth::Principal;
use crate::data::{self, BaselineKind, Region};
use crate::error::{AppError, AppResult};
use crate::state::AppState;
use crate::{firms, gazetteer, jobs, live};

pub const CALENDAR_WIDGET: &str = "ui://firms/calendar-v1.html";
pub const HOTSPOTS_WIDGET: &str = "ui://firms/hotspots-v1.html";
/// Tools that ask the user to pick a region (elicitation) when `region` is missing.
pub const NEEDS_REGION: &[&str] = &["get_calendar", "get_anomalies", "seasonal_profile"];

// ------------------------------------------------------------------ arguments

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
        )
        .filter(|s| !s.is_empty()),
        _ => None,
    }
}

fn num_arg(a: &Value, k: &str) -> Option<f64> {
    match a.get(k)? {
        Value::Number(n) => n.as_f64(),
        Value::String(s) => s.trim().parse().ok(),
        _ => None,
    }
}

pub fn parse_algs(s: Option<&str>) -> Vec<String> {
    match s.filter(|s| !s.is_empty()) {
        Some(s) => s.split(',').map(|x| x.trim().to_owned()).filter(|x| !x.is_empty()).collect(),
        None => ["ensemble_adaptive", "ratio", "naive", "aqua_only"].iter().map(|s| (*s).to_owned()).collect(),
    }
}

/// A region by id, or by a place name the gazetteer resolves to a calibrated region.
pub fn resolve_region(st: &AppState, q: &str) -> AppResult<Arc<Region>> {
    let regions = st.regions();
    if let Ok(r) = regions.get(q) {
        return Ok(r);
    }
    let found = gazetteer::find(&regions, q, 3);
    if let Some(name) = found["best"]["region"].as_str() {
        if found["best"]["score"].as_f64().unwrap_or(0.0) >= 0.8 {
            return regions.get(name);
        }
    }
    Err(AppError::NotFound(format!(
        "unknown region {q:?}; one of: {}",
        regions.list.iter().map(|r| r.name.as_str()).collect::<Vec<_>>().join(", ")
    )))
}

fn region_arg(st: &AppState, a: &Value) -> AppResult<Arc<Region>> {
    let q = str_arg(a, "region").ok_or_else(|| AppError::bad("region is required"))?;
    resolve_region(st, &q)
}

fn alg_arg(a: &Value) -> AppResult<String> {
    let alg = str_arg(a, "algorithm").unwrap_or_else(|| data::DEFAULT_ALGORITHM.into());
    data::algorithm(&alg)?;
    Ok(alg)
}

/// bbox from `bbox` ([W,S,E,N] or "W,S,E,N") or the bbox of `region`.
fn bbox_or_region(st: &AppState, a: &Value) -> AppResult<[f64; 4]> {
    if let Some(s) = str_arg(a, "bbox") {
        return data::parse_bbox(&s);
    }
    if str_arg(a, "region").is_some() {
        return Ok(region_arg(st, a)?.bbox);
    }
    Err(AppError::bad("bbox [W,S,E,N] or region is required"))
}

// ------------------------------------------------------------------ schema helpers

fn titled_enum(desc: &str, items: &[(String, String)]) -> Value {
    json!({
        "type": "string",
        "description": desc,
        "enum": items.iter().map(|(v, _)| v.clone()).collect::<Vec<_>>(),
        "oneOf": items.iter().map(|(v, t)| json!({ "const": v, "title": t })).collect::<Vec<_>>(),
    })
}

pub fn region_choices(st: &AppState) -> Vec<(String, String)> {
    st.regions()
        .list
        .iter()
        .map(|r| (r.name.clone(), format!("{} — {}", r.title_en, r.title)))
        .collect()
}

fn region_schema(st: &AppState) -> Value {
    let items = region_choices(st);
    if items.is_empty() {
        return json!({ "type": "string", "description": "region id from list_regions" });
    }
    titled_enum("Calibrated region id (use find_region to resolve a place name).", &items)
}

fn alg_schema() -> Value {
    let items: Vec<(String, String)> = data::ALGORITHMS.iter().map(|a| (a.key.to_owned(), a.name_en.to_owned())).collect();
    titled_enum("Harmonization algorithm (default ensemble_adaptive, recommended).", &items)
}

fn baseline_schema() -> Value {
    titled_enum(
        "Baseline of the same calendar month over 2003–2022 (default median).",
        &[("median".into(), "Median 2003–2022".into()), ("mean".into(), "Mean 2003–2022".into())],
    )
}

fn ym_schema(desc: &str) -> Value {
    json!({ "type": "string", "pattern": "^\\d{4}-\\d{2}$", "description": desc })
}

fn bbox_schema() -> Value {
    json!({ "type": "array", "items": { "type": "number" }, "minItems": 4, "maxItems": 4,
            "description": "Bounding box [west, south, east, north] in degrees" })
}

pub const TOPICS: &[(&str, &str)] = &[
    ("fire_days", "Fire-day cells"),
    ("reference_chain", "Reference chain (Terra → Aqua → VIIRS)"),
    ("transfer", "Calibration transfer between satellites"),
    ("adaptive", "Adaptive (recency-weighted) calibration"),
    ("geometry", "Aqua orbit geometry"),
    ("noise_floor", "Noise floor"),
    ("accuracy", "Accuracy and how it is measured"),
    ("data_sources", "Data sources"),
];

fn topic_schema() -> Value {
    let items: Vec<(String, String)> = TOPICS.iter().map(|(k, t)| ((*k).to_owned(), (*t).to_owned())).collect();
    titled_enum("Topic to explain.", &items)
}

fn obj(props: Value, required: &[&str]) -> Value {
    json!({ "type": "object", "properties": props, "required": required })
}

fn nullable(t: &str) -> Value {
    json!({ "type": [t, "null"] })
}

fn error_schema() -> Value {
    json!({ "type": ["object", "null"], "description": "measured monthly error of the algorithm in this region (WAPE %)" })
}

// ------------------------------------------------------------------ registry

#[derive(Debug, Clone)]
pub struct Tool {
    pub name: &'static str,
    pub title: &'static str,
    pub description: &'static str,
    pub input: Value,
    pub output: Value,
    pub read_only: bool,
    pub open_world: bool,
    pub ui: Option<&'static str>,
    pub write: bool,
    pub agent_only: bool,
}

impl Tool {
    fn ro(name: &'static str, title: &'static str, description: &'static str, input: Value, output: Value) -> Self {
        Self { name, title, description, input, output, read_only: true, open_world: false, ui: None, write: false, agent_only: false }
    }
    fn open(mut self) -> Self {
        self.open_world = true;
        self
    }
    fn widget(mut self, uri: &'static str) -> Self {
        self.ui = Some(uri);
        self
    }

    pub fn annotations(&self) -> Value {
        json!({
            "title": self.title,
            "readOnlyHint": self.read_only,
            "destructiveHint": false,
            "idempotentHint": self.read_only,
            "openWorldHint": self.open_world,
        })
    }

    pub fn meta(&self) -> Option<Value> {
        let uri = self.ui?;
        let (invoking, invoked) = match uri {
            CALENDAR_WIDGET => ("Building the fire calendar…", "Fire calendar ready"),
            _ => ("Searching FIRMS detections…", "Detections ready"),
        };
        Some(json!({
            "ui": { "resourceUri": uri, "visibility": ["model", "app"] },
            "ui/resourceUri": uri,
            "openai/outputTemplate": uri,
            "openai/toolInvocation/invoking": invoking,
            "openai/toolInvocation/invoked": invoked,
            "openai/widgetAccessible": false,
        }))
    }

    /// MCP `tools/list` entry.
    pub fn mcp_json(&self) -> Value {
        let mut v = json!({
            "name": self.name,
            "title": self.title,
            "description": self.description,
            "inputSchema": self.input,
            "outputSchema": self.output,
            "annotations": self.annotations(),
        });
        if let Some(m) = self.meta() {
            v["_meta"] = m;
        }
        v
    }

    /// OpenAI-style function for chat/completions (`oneOf` titles folded into the description,
    /// because some providers reject `oneOf` in function parameters).
    pub fn openai_json(&self) -> Value {
        json!({ "type": "function", "function": {
            "name": self.name,
            "description": self.description,
            "parameters": strip_one_of(&self.input),
        } })
    }
}

pub fn strip_one_of(v: &Value) -> Value {
    match v {
        Value::Object(m) => {
            let mut out = Map::new();
            let titles: Option<String> = m.get("oneOf").and_then(Value::as_array).map(|xs| {
                xs.iter()
                    .filter_map(|x| Some(format!("{}={}", x.get("const")?.as_str()?, x.get("title")?.as_str()?)))
                    .collect::<Vec<_>>()
                    .join("; ")
            });
            for (k, x) in m {
                if k == "oneOf" && m.contains_key("enum") {
                    continue;
                }
                out.insert(k.clone(), strip_one_of(x));
            }
            if let Some(t) = titles.filter(|t| !t.is_empty() && m.contains_key("enum")) {
                let d = out.get("description").and_then(Value::as_str).unwrap_or("").to_owned();
                let t: String = t.chars().take(600).collect();
                out.insert("description".into(), json!(format!("{d} ({t})").trim().to_owned()));
            }
            Value::Object(out)
        }
        Value::Array(xs) => Value::Array(xs.iter().map(strip_one_of).collect()),
        o => o.clone(),
    }
}

pub fn registry(st: &AppState) -> Vec<Tool> {
    let region = region_schema(st);
    let alg = alg_schema();
    let base = baseline_schema();
    let months = json!({ "type": "array", "items": { "type": "object" } });
    vec![
        Tool::ro(
            "find_region",
            "Find a region or country",
            "Resolve a place, country or region name (Arabic, English or French) to a calibrated Firms region or, for a country without one, its bounding box and FIRMS country name.",
            obj(json!({ "query": { "type": "string", "description": "place name, e.g. Algeria, الجزائر, Algérie, Punjab" } }), &["query"]),
            obj(json!({ "query": { "type": "string" }, "count": { "type": "integer" }, "best": { "type": ["object", "null"] }, "matches": { "type": "array", "items": { "type": "object" } } }), &["query", "matches"]),
        ),
        Tool::ro(
            "list_regions",
            "List regions",
            "Regions that have a harmonized 2001→now monthly fire calendar: id, Arabic/English title, bbox, months, fire level (low/medium/high) and measured error % per algorithm.",
            obj(json!({ "fire_level": titled_enum("only regions with this fire level", &[("low".into(), "Low".into()), ("medium".into(), "Medium".into()), ("high".into(), "High".into())]) }), &[]),
            obj(json!({ "count": { "type": "integer" }, "regions": { "type": "array", "items": { "type": "object", "properties": { "name": { "type": "string" }, "title": { "type": "string" }, "bbox": { "type": "array" } } } } }), &["regions"]),
        ),
        Tool::ro(
            "get_region",
            "Region details",
            "One region: bbox, coverage (months and source per month: Terra/Aqua/VIIRS), detections per sensor, measured error of every algorithm and a calibration summary.",
            obj(json!({ "region": region.clone() }), &["region"]),
            obj(json!({ "name": { "type": "string" }, "title": { "type": "string" }, "title_en": { "type": "string" }, "bbox": { "type": "array" }, "coverage": { "type": "object" }, "evaluation": { "type": "array" }, "calibration": { "type": "object" } }), &["name", "bbox", "coverage"]),
        ),
        Tool::ro(
            "get_calendar",
            "Fire calendar",
            "Monthly Aqua-equivalent fire-days for a region and period with the same-month 2003–2022 baseline, anomaly %, yearly totals and a summary (peak, top year, extreme months, latest month vs baseline and its rank). Default period: the last 12 months.",
            obj(json!({
                "region": region.clone(),
                "from": ym_schema("first month YYYY-MM (default: 11 months before `to`)"),
                "to": ym_schema("last month YYYY-MM (default: latest month)"),
                "algorithm": alg.clone(),
                "baseline": base.clone(),
            }), &[]),
            obj(json!({
                "region": { "type": "string" }, "algorithm": { "type": "string" }, "from": { "type": "string" }, "to": { "type": "string" },
                "months": { "type": "array", "items": { "type": "object", "properties": {
                    "ym": { "type": "string" }, "value": { "type": "number" }, "baseline": { "type": "number" },
                    "anomaly_pct": nullable("number"), "source": { "type": "string" }, "partial": { "type": "boolean" } } } },
                "years": { "type": "array", "items": { "type": "object" } },
                "summary": { "type": "object" },
                "error": error_schema(),
            }), &["region", "months", "years", "summary"]),
        )
        .widget(CALENDAR_WIDGET),
        Tool::ro(
            "get_anomalies",
            "Unusual months",
            "Months above (or below) a threshold vs the same-month 2003–2022 baseline, sorted by anomaly. Default: months at least +50% above the median over the whole archive (the running month is excluded).",
            obj(json!({
                "region": region.clone(),
                "threshold_pct": { "type": "number", "minimum": 0, "maximum": 10000, "description": "default 50" },
                "direction": titled_enum("default above", &[("above".into(), "Above the baseline".into()), ("below".into(), "Below the baseline".into()), ("both".into(), "Both".into())]),
                "from": ym_schema("default 2001-01"),
                "to": ym_schema("default latest month"),
                "algorithm": alg.clone(),
                "baseline": base.clone(),
                "limit": { "type": "integer", "minimum": 1, "maximum": 400, "description": "default 24" },
            }), &[]),
            obj(json!({ "region": { "type": "string" }, "count": { "type": "integer" }, "checked_months": { "type": "integer" }, "months": months.clone(), "threshold_pct": { "type": "number" }, "direction": { "type": "string" }, "error": error_schema() }), &["region", "count", "months"]),
        ),
        Tool::ro(
            "get_trend",
            "Annual trend",
            "Annual totals with a linear trend (%/year), Sen's slope and a Mann–Kendall test computed on complete years only (the running year is excluded).",
            obj(json!({ "region": region.clone(), "from": ym_schema("default 2001-01"), "to": ym_schema("default latest month"), "algorithm": alg.clone() }), &["region"]),
            obj(json!({ "region": { "type": "string" }, "years": { "type": "array", "items": { "type": "object" } }, "complete_years": { "type": "integer" }, "linear": { "type": "object" }, "sen": { "type": "object" }, "mann_kendall": { "type": "object" }, "verdict": { "type": "string" }, "error": error_schema() }), &["region", "years", "sen", "linear"]),
        ),
        Tool::ro(
            "seasonal_profile",
            "Seasonal profile",
            "Typical year of a region: median (and p25/p75/mean) fire-days per calendar month over 2003–2022, peak months and the fire-season window (shortest run of months holding 80% of the year).",
            obj(json!({ "region": region.clone(), "algorithm": alg.clone() }), &[]),
            obj(json!({ "region": { "type": "string" }, "months": months.clone(), "peak_months": { "type": "array", "items": { "type": "integer" } }, "fire_season": { "type": "object" } }), &["region", "months", "fire_season"]),
        ),
        Tool::ro(
            "rank_regions",
            "Rank regions",
            "Rank every region by its latest complete month's anomaly, by total fire-days in a period (default last 12 months) or by trend (Sen's slope %/year).",
            obj(json!({
                "metric": titled_enum("default latest_anomaly", &[("latest_anomaly".into(), "Latest month vs normal".into()), ("total".into(), "Total fire-days in the period".into()), ("trend".into(), "Trend (%/year)".into())]),
                "from": ym_schema("for total/trend"),
                "to": ym_schema("for total/trend"),
                "algorithm": alg.clone(),
                "limit": { "type": "integer", "minimum": 1, "maximum": 100 },
            }), &[]),
            obj(json!({ "metric": { "type": "string" }, "unit": { "type": "string" }, "count": { "type": "integer" }, "ranking": { "type": "array", "items": { "type": "object" } } }), &["metric", "ranking"]),
        ),
        Tool::ro(
            "compare_algorithms",
            "Compare algorithms",
            "Annual totals of several harmonization algorithms for a region and period, their measured errors (held-out / forward tests) and held-out monthly predictions vs real Aqua (2012–2021).",
            obj(json!({
                "region": region.clone(),
                "from": ym_schema("default 2001-01"),
                "to": ym_schema("default latest month"),
                "algorithms": { "type": "array", "items": { "type": "string", "enum": data::ALGORITHMS.iter().map(|a| a.key).collect::<Vec<_>>() } },
            }), &["region"]),
            obj(json!({ "region": { "type": "string" }, "years": { "type": "array" }, "series": { "type": "object" }, "eval": { "type": "object" }, "heldout": { "type": "object" } }), &["region", "years", "series"]),
        ),
        Tool::ro(
            "get_benchmark",
            "Study benchmark",
            "The full study benchmark: every method × region, held-out (leave-one-year-out) and forward monthly WAPE %.",
            obj(json!({}), &[]),
            json!({ "type": "object" }),
        ),
        Tool::ro(
            "search_hotspots",
            "Search FIRMS detections",
            "Active-fire detections from NASA FIRMS (VIIRS S-NPP / NOAA-20 / NOAA-21, MODIS) inside a bbox or region for 1–5 days starting at `date`: counts per satellite and up to `limit` rows (lat, lon, time, FRP, confidence).",
            obj(json!({
                "bbox": bbox_schema(),
                "region": region.clone(),
                "date": { "type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$", "description": "first day YYYY-MM-DD (default yesterday UTC)" },
                "days": { "type": "integer", "minimum": 1, "maximum": 5 },
                "sources": { "type": "array", "items": { "type": "string", "enum": firms::SOURCES } },
                "min_confidence": { "type": "integer", "enum": [0, 1, 2], "description": "0 all, 1 nominal+high, 2 high" },
                "min_frp": { "type": "number", "minimum": 0, "description": "minimum fire radiative power (MW)" },
                "limit": { "type": "integer", "minimum": 0, "maximum": 2000, "description": "rows to return (default 200)" },
            }), &[]),
            obj(json!({ "bbox": { "type": "array" }, "date": { "type": "string" }, "days": { "type": "integer" }, "count": { "type": "integer" }, "by_satellite": { "type": "object" }, "truncated": { "type": "boolean" }, "rows": { "type": "array", "items": { "type": "object" } } }), &["bbox", "count", "rows"]),
        )
        .open()
        .widget(HOTSPOTS_WIDGET),
        Tool::ro(
            "hotspot_stats",
            "Detection statistics",
            "Aggregate statistics of FIRMS detections for a bbox or region and 1–5 days: rows and fire-day cells per satellite, FRP percentiles, day/night and confidence split.",
            obj(json!({
                "bbox": bbox_schema(),
                "region": region.clone(),
                "date": { "type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$" },
                "days": { "type": "integer", "minimum": 1, "maximum": 5 },
                "sources": { "type": "array", "items": { "type": "string", "enum": firms::SOURCES } },
            }), &[]),
            obj(json!({ "bbox": { "type": "array" }, "date": { "type": "string" }, "rows": { "type": "integer" }, "satellites": { "type": "object" }, "frp": { "type": "object" } }), &["bbox", "rows", "satellites"]),
        )
        .open(),
        Tool::ro(
            "range_summary",
            "Detections over any range",
            "Every FIRMS detection in a country or bbox over any date range (calibrated countries: from the local archive, any length from 2001; elsewhere: FIRMS API, up to 62 days): totals and FRP per satellite, per day/night, the busiest days and the busiest 0.1° cells.",
            obj(json!({
                "country": { "type": "string", "description": "country name (any language) or key; or give bbox" },
                "bbox": bbox_schema(),
                "from": { "type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$" },
                "to": { "type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$" },
                "min_confidence": { "type": "integer", "enum": [0, 1, 2] },
            }), &["from", "to"]),
            obj(json!({ "from": { "type": "string" }, "to": { "type": "string" }, "rows": { "type": "integer" }, "source": { "type": "string" }, "by_satellite": { "type": "object" }, "top_days": { "type": "array", "items": { "type": "object" } }, "top_cells": { "type": "array", "items": { "type": "object" } } }), &["from", "to", "rows"]),
        )
        .open(),
        Tool::ro(
            "live_convert",
            "Live VIIRS → Aqua conversion",
            "Convert one day's VIIRS detections inside a bbox (or region) to Aqua-equivalent fire-days with every algorithm (ratio, per-month ratio, seasonal FRP curve, ensemble) using the containing region's calibration or the pooled global one.",
            obj(json!({ "bbox": bbox_schema(), "region": region.clone(), "date": { "type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$", "description": "default: latest globe snapshot" } }), &[]),
            obj(json!({ "date": { "type": "string" }, "bbox": { "type": "array" }, "calibration": { "type": "object" }, "satellites": { "type": "object" }, "conversions": { "type": "object" } }), &["date", "conversions"]),
        )
        .open(),
        Tool::ro(
            "export_calendar_csv",
            "Export calendar CSV",
            "A signed download link (valid 1 hour) to the monthly calendar of a region as CSV (ym, value, baseline, anomaly_pct, source, partial).",
            obj(json!({ "region": region.clone(), "from": ym_schema("default 2001-01"), "to": ym_schema("default latest month"), "algorithm": alg.clone(), "baseline": base.clone() }), &["region"]),
            obj(json!({ "url": { "type": "string" }, "expires_at": { "type": "integer" }, "filename": { "type": "string" }, "rows": { "type": "integer" } }), &["url", "expires_at"]),
        ),
        Tool::ro(
            "explain_method",
            "Explain the method",
            "Explain how the harmonized calendar is built: fire-day cells, the Terra→Aqua→VIIRS reference chain, calibration transfer, adaptive calibration, Aqua orbit geometry, the noise floor, accuracy and data sources.",
            obj(json!({ "topic": topic_schema() }), &[]),
            obj(json!({ "topic": { "type": "string" }, "text": { "type": "string" } }), &["text"]),
        ),
        Tool {
            name: "build_region",
            title: "Build a new region",
            description: "Queue a background job that downloads the FIRMS archives (2001→now) for a box inside one country, evaluates the algorithms and adds the region. Takes minutes to hours; poll job_status. Needs the user's confirmation.",
            input: obj(json!({
                "name": { "type": "string", "pattern": "^[a-z0-9_-]{1,40}$", "description": "id: a-z, 0-9, _ or -" },
                "title": { "type": "string", "maxLength": 80, "description": "display title (Arabic preferred)" },
                "country": { "type": "string", "description": "FIRMS country file name, e.g. Algeria, South_Sudan, United_States (see find_region)" },
                "bbox": bbox_schema(),
            }), &["name", "country", "bbox"]),
            output: obj(json!({ "id": { "type": "string" }, "status": { "type": "string" }, "kind": { "type": "string" } }), &["id", "status"]),
            read_only: false,
            open_world: true,
            ui: None,
            write: true,
            agent_only: false,
        },
        Tool::ro(
            "job_status",
            "Job status",
            "Status of a background job (queued, running, done, failed) with the tail of its log.",
            obj(json!({ "id": { "type": "string" } }), &["id"]),
            obj(json!({ "id": { "type": "string" }, "status": { "type": "string" }, "log_tail": { "type": "string" } }), &["id", "status"]),
        ),
        Tool {
            name: "apply_view",
            title: "Show in Firms",
            description: "Ask the Firms app to navigate and apply filters (only the fields to change). Call it when the user asks to show/open/zoom/filter something. \
On the globe (page \"globe\"): `date` shows one day (last 60 days) with satellites; `range_from`+`range_to` show any range in an area \
(needs `country` or `bbox`); `country` filters and flies to a country (name or ISO alpha-2, \"\" clears); `satellites`, `sensors`, \
`min_confidence`, `min_frp`, `day_night` filter the pixels; `camera` flies to a place; `bbox` draws an area and opens its analysis.",
            input: obj(json!({
                "page": { "type": "string", "enum": ["calendar", "compare", "globe", "hotspots", "regions", "assistant"] },
                "region": region,
                "from": ym_schema("YYYY-MM"),
                "to": ym_schema("YYYY-MM"),
                "algorithm": alg,
                "baseline": base,
                "view": { "type": "string", "enum": ["count", "anomaly"] },
                "bbox": bbox_schema(),
                "date": { "type": "string", "description": "Globe: one day, YYYY-MM-DD (within the last 60 days)" },
                "range_from": { "type": "string", "description": "Globe: range start, YYYY-MM-DD" },
                "range_to": { "type": "string", "description": "Globe: range end, YYYY-MM-DD" },
                "country": { "type": "string", "description": "Globe: country name (any language) or ISO alpha-2; empty string clears" },
                "satellites": { "type": "array", "items": { "type": "string", "enum": ["T", "A", "N", "N20", "N21", "L8", "L9", "G18", "G19", "Met9", "Met10", "Met12", "Him9"] }, "description": "Globe: satellites to show (empty = all)" },
                "sensors": { "type": "array", "items": { "type": "string", "enum": ["modis", "viirs", "landsat", "geo"] }, "description": "Globe: sensor families to show (empty = all)" },
                "min_confidence": { "type": "integer", "enum": [0, 1, 2], "description": "Globe: 0 any, 1 nominal or high, 2 high" },
                "min_frp": { "type": "number", "minimum": 0, "description": "Globe: minimum fire radiative power, MW" },
                "day_night": { "type": "string", "enum": ["all", "day", "night"] },
                "camera": { "type": "object", "description": "Globe: fly the camera", "properties": {
                    "lat": { "type": "number", "minimum": -90, "maximum": 90 },
                    "lon": { "type": "number", "minimum": -180, "maximum": 180 },
                    "altitude_km": { "type": "number", "minimum": 3, "maximum": 150000, "description": "~20000 whole Earth, ~2000 a country, ~200 a region, ~20 a town" },
                }, "required": ["lat", "lon"] },
                "clear_bbox": { "type": "boolean", "description": "Globe: remove the drawn area" },
            }), &[]),
            output: obj(json!({ "applied": { "type": "object" } }), &["applied"]),
            read_only: true,
            open_world: false,
            ui: None,
            write: false,
            agent_only: true,
        },
    ]
}

pub fn mcp_tools(st: &AppState) -> Vec<Tool> {
    registry(st).into_iter().filter(|t| !t.agent_only).collect()
}

pub fn find(st: &AppState, name: &str) -> Option<Tool> {
    registry(st).into_iter().find(|t| t.name == name)
}

// ------------------------------------------------------------------ results

#[derive(Debug, Clone)]
pub struct Output {
    pub structured: Value,
    pub text: String,
    pub links: Vec<Value>,
}

fn link(uri: String, name: String, title: String, mime: &str) -> Value {
    json!({ "type": "resource_link", "uri": uri, "name": name, "title": title, "mimeType": mime })
}

fn fmt_n(x: f64) -> String {
    let n = x.round() as i64;
    let s = n.abs().to_string();
    let mut out = String::new();
    for (i, ch) in s.chars().enumerate() {
        if i > 0 && (s.len() - i) % 3 == 0 {
            out.push(',');
        }
        out.push(ch);
    }
    if n < 0 { format!("-{out}") } else { out }
}

fn pct(v: &Value) -> String {
    v.as_f64().map(|a| format!("{}{a:.0}%", if a > 0.0 { "+" } else { "" })).unwrap_or_else(|| "n/a".into())
}

fn calendar_uri(r: &str, from: &str, to: &str, alg: &str, base: &str) -> String {
    format!("firms://region/{r}/calendar?from={from}&to={to}&algorithm={alg}&baseline={base}")
}

// ------------------------------------------------------------------ export links

fn export_key(st: &AppState) -> Vec<u8> {
    derive_key(&st.session_key, "firms-export-v1")
}

pub fn derive_key(key: &[u8], purpose: &str) -> Vec<u8> {
    let Ok(mut mac) = Hmac::<Sha256>::new_from_slice(key) else { return key.to_vec() };
    mac.update(purpose.as_bytes());
    mac.finalize().into_bytes().to_vec()
}

pub fn export_payload(region: &str, from: &str, to: &str, alg: &str, baseline: &str, exp: i64) -> String {
    format!("{region}|{from}|{to}|{alg}|{baseline}|{exp}")
}

pub fn export_sign(st: &AppState, payload: &str) -> String {
    let Ok(mut mac) = Hmac::<Sha256>::new_from_slice(&export_key(st)) else { return String::new() };
    mac.update(payload.as_bytes());
    B64.encode(mac.finalize().into_bytes())
}

pub fn export_verify(st: &AppState, payload: &str, sig: &str) -> bool {
    let Ok(mut mac) = Hmac::<Sha256>::new_from_slice(&export_key(st)) else { return false };
    mac.update(payload.as_bytes());
    let Ok(sig) = B64.decode(sig) else { return false };
    mac.verify_slice(&sig).is_ok()
}

// ------------------------------------------------------------------ explain

pub fn explain_text(topic: &str) -> Option<&'static str> {
    Some(match topic {
        "fire_days" => "Fire-day cells: every detection is mapped to a 0.02° (~2 km) cell and its local solar day (UTC + lon/15 h); a cell-day counts once however many pixels, overpasses or satellites saw it. MODIS detections need confidence ≥ 30 and VIIRS 'low' detections are dropped; cells that ever showed a static source (gas flares, volcanoes, industry: FIRMS type 1–3) are removed. Raw FIRMS rows are not comparable between MODIS (1 km pixels) and VIIRS (375 m pixels, ~5–10× more rows); fire-day cells are much closer.",
        "reference_chain" => "Reference chain: the calendar is expressed in Aqua-MODIS-equivalent fire-days (the INPE convention). Terra is converted to Aqua until mid-2002, Aqua itself is used until 2021, and from 2022 S-NPP VIIRS is converted to Aqua-equivalent because Aqua's overpass drifted from about 13:30 to 15:15 local time. Every month carries its source letter (T, A or V).",
        "transfer" => "Transfer: VIIRS→Aqua factors are learned on the 2012–2021 overlap when both satellites flew at 13:30. Per-month ratios (k_month), a seasonal FRP detection curve (probability Aqua sees a VIIRS cell given its FRP and the season, isotonic in FRP) plus Aqua-only cells are combined in the ensemble. Regions without their own overlap use the pooled calibration of all regions (global calibration), which is less accurate.",
        "adaptive" => "Adaptive calibration: *_adaptive algorithms re-weight the overlap years with a 2-year half-life so the factors follow land-use and fire-regime changes. They are evaluated forward: calibrate on years before Y, predict Y, for Y in 2018–2021.",
        "geometry" => "Aqua orbit geometry: MODIS pixels grow from 1 km at nadir to ~2×4.8 km at the swath edge on a 16-day repeat cycle, so the chance that Aqua detects a small fire depends on the day. ensemble_geom_adaptive splits the FRP curve by the expected Aqua pixel size; it helps a little in some regions.",
        "noise_floor" => "Noise floor: even a perfect conversion cannot beat the sampling noise of fire-day counts (fires are detected or missed by one overpass). On held-out months the best algorithms reach about 7% monthly error in big fire regions; that floor is higher in low-fire regions where a month has few cells, so small months show large relative errors.",
        "accuracy" => "Accuracy: errors are monthly WAPE (Σ|pred−Aqua| / ΣAqua) against real Aqua on months the model did not see: leave-one-year-out over 2012–2021, forward (train 2012–2017, test 2018–2021) and forward-adaptive. The recommended ensemble_adaptive scores roughly 4–14% depending on the region (≈10% typical); naive splicing of MODIS then VIIRS is 150–350% off. Treat month-to-month changes smaller than ~10% as noise.",
        "data_sources" => "Data sources: NASA FIRMS archives (MODIS Collection 6.1 Terra/Aqua, VIIRS S-NPP 375 m standard processing, NOAA-20/21 for live) by country, the FIRMS area API for live detections (server-side key, cached), and the study's calibration statistics. Values are fire-days, not burned area or emissions.",
        _ => return None,
    })
}

// ------------------------------------------------------------------ call

pub fn validate_view(st: &AppState, a: &Value) -> AppResult<Value> {
    let mut out = Map::new();
    if let Some(r) = str_arg(a, "region") {
        let r = resolve_region(st, &r)?;
        out.insert("region".into(), json!(r.name));
    }
    for k in ["from", "to"] {
        if let Some(v) = str_arg(a, k) {
            data::parse_ym(&v)?;
            out.insert(k.into(), json!(v));
        }
    }
    if let Some(v) = str_arg(a, "algorithm") {
        data::algorithm(&v)?;
        out.insert("algorithm".into(), json!(v));
    }
    if let Some(v) = str_arg(a, "baseline") {
        out.insert("baseline".into(), json!(BaselineKind::parse(Some(&v))?.as_str()));
    }
    if let Some(v) = str_arg(a, "bbox") {
        out.insert("bbox".into(), json!(data::parse_bbox(&v)?));
    }
    if let Some(v) = str_arg(a, "page") {
        if !["calendar", "compare", "globe", "hotspots", "regions", "assistant"].contains(&v.as_str()) {
            return Err(AppError::bad("unknown page"));
        }
        out.insert("page".into(), json!(v));
    }
    if let Some(v) = str_arg(a, "view") {
        if v != "count" && v != "anomaly" {
            return Err(AppError::bad("view must be count or anomaly"));
        }
        out.insert("view".into(), json!(v));
    }
    // ---- globe
    let day = |k: &str| -> AppResult<Option<String>> {
        str_arg(a, k)
            .map(|v| chrono::NaiveDate::parse_from_str(&v, "%Y-%m-%d").map(|d| d.to_string()).map_err(|_| AppError::bad(format!("{k} must be YYYY-MM-DD"))))
            .transpose()
    };
    if let Some(d) = day("date")? {
        out.insert("date".into(), json!(d));
    }
    match (day("range_from")?, day("range_to")?) {
        (Some(f), Some(t)) => {
            let q = crate::range::RangeQuery::parse(Some(&f), Some(&t), Some("-1,-1,1,1"), None)?;
            out.insert("range".into(), json!([q.from.to_string(), q.to.to_string()]));
        }
        (None, None) => {}
        _ => return Err(AppError::bad("range_from and range_to go together")),
    }
    if let Some(c) = a.get("country").and_then(Value::as_str) {
        out.insert("country".into(), json!(c.trim().chars().take(60).collect::<String>()));
    }
    for (k, allowed) in [("satellites", &["T", "A", "N", "N20", "N21", "L8", "L9", "G18", "G19", "Met9", "Met10", "Met12", "Him9"][..]), ("sensors", &["modis", "viirs", "landsat", "geo"][..])] {
        if let Some(list) = a.get(k).and_then(Value::as_array) {
            let v: Vec<&str> = list.iter().filter_map(Value::as_str).collect();
            if let Some(bad) = v.iter().find(|x| !allowed.contains(x)) {
                return Err(AppError::bad(format!("unknown {k} value {bad:?}")));
            }
            out.insert(k.into(), json!(v));
        }
    }
    if let Some(c) = num_arg(a, "min_confidence") {
        out.insert("min_confidence".into(), json!(c.clamp(0.0, 2.0) as u8));
    }
    if let Some(f) = num_arg(a, "min_frp") {
        out.insert("min_frp".into(), json!(f.max(0.0)));
    }
    if let Some(v) = str_arg(a, "day_night") {
        if !["all", "day", "night"].contains(&v.as_str()) {
            return Err(AppError::bad("day_night must be all, day or night"));
        }
        out.insert("day_night".into(), json!(v));
    }
    if let Some(c) = a.get("camera").filter(|c| c.is_object()) {
        let (lat, lon) = (c["lat"].as_f64(), c["lon"].as_f64());
        let (Some(lat), Some(lon)) = (lat, lon) else { return Err(AppError::bad("camera needs lat and lon")) };
        if !(-90.0..=90.0).contains(&lat) || !(-180.0..=180.0).contains(&lon) {
            return Err(AppError::bad("camera lat/lon out of range"));
        }
        let alt = c["altitude_km"].as_f64().unwrap_or(1500.0).clamp(3.0, 150_000.0);
        out.insert("camera".into(), json!({ "lat": lat, "lon": lon, "altitude_km": alt }));
    }
    if a.get("clear_bbox").and_then(Value::as_bool) == Some(true) {
        out.insert("clear_bbox".into(), json!(true));
    }
    Ok(Value::Object(out))
}

fn hotspot_query(st: &AppState, a: &Value) -> AppResult<firms::HotspotQuery> {
    let bb = bbox_or_region(st, a)?;
    let bbs = bb.iter().map(f64::to_string).collect::<Vec<_>>().join(",");
    firms::HotspotQuery::parse(
        Some(&bbs),
        str_arg(a, "date").as_deref(),
        num_arg(a, "days").map(|d| d as u32),
        str_arg(a, "sources").as_deref(),
        num_arg(a, "min_confidence").or_else(|| num_arg(a, "min_conf")).map(|d| d.clamp(0.0, 9.0) as u8),
        num_arg(a, "min_frp"),
    )
}

pub async fn call(st: &AppState, who: Option<&Principal>, name: &str, a: &Value) -> AppResult<Output> {
    let a = if a.is_object() { a.clone() } else { json!({}) };
    let a = &a;
    let mut links = Vec::new();
    let (structured, text) = match name {
        "find_region" => {
            let q = str_arg(a, "query").ok_or_else(|| AppError::bad("query is required"))?;
            let v = gazetteer::find(&st.regions(), &q, 6);
            let text = match v["best"].as_object() {
                None => format!("No match for {q:?}."),
                Some(b) if b.get("kind") == Some(&json!("region")) => {
                    format!("{q:?} → calibrated region {} ({}).", b["region"].as_str().unwrap_or(""), b["title_en"].as_str().unwrap_or(""))
                }
                Some(b) => format!(
                    "{q:?} → country {} (FIRMS {}, bbox {}){}.",
                    b["country"].as_str().unwrap_or(""),
                    b["firms_country"].as_str().unwrap_or(""),
                    b["bbox"],
                    b["region"].as_str().map(|r| format!("; calibrated region: {r}")).unwrap_or_else(|| "; no calibrated region yet".into())
                ),
            };
            (v, text)
        }
        "list_regions" => {
            let level = str_arg(a, "fire_level");
            let regions: Vec<Value> = st
                .regions()
                .list
                .iter()
                .filter(|r| level.as_deref().is_none_or(|l| r.fire_level() == l))
                .map(|r| r.summary_json())
                .collect();
            let text = format!(
                "{} regions: {}.",
                regions.len(),
                regions.iter().map(|r| format!("{} ({})", r["name"].as_str().unwrap_or(""), r["title_en"].as_str().unwrap_or(""))).collect::<Vec<_>>().join(", ")
            );
            (json!({ "count": regions.len(), "regions": regions }), text)
        }
        "get_region" => {
            let r = region_arg(st, a)?;
            let mut src = std::collections::BTreeMap::new();
            for c in &r.src {
                *src.entry((*c as char).to_string()).or_insert(0usize) += 1;
            }
            let totals = |v: &Value| -> Value {
                match v.as_object() {
                    Some(m) => Value::Object(
                        m.iter()
                            .map(|(k, x)| (k.clone(), json!(x.as_array().map_or(x.as_f64().unwrap_or(0.0), |a| a.iter().filter_map(Value::as_f64).sum::<f64>()))))
                            .collect(),
                    ),
                    None => Value::Null,
                }
            };
            let evaluation: Vec<Value> = data::ALGORITHMS
                .iter()
                .map(|alg| {
                    json!({
                        "algorithm": alg.key,
                        "name": alg.name_en,
                        "recommended": alg.key == data::DEFAULT_ALGORITHM,
                        "test": alg.eval.map(|(_, t)| t),
                        "error_pct": r.error_of(alg).map(|(_, p)| p),
                    })
                })
                .collect();
            let v = json!({
                "name": r.name,
                "title": r.title,
                "title_en": r.title_en,
                "country": r.country,
                "bbox": r.bbox,
                "fire_level": r.fire_level(),
                "coverage": { "start": "2001-01", "end": data::ym_of(r.nm.saturating_sub(1)), "months": r.nm, "latest_complete": data::ym_of(r.latest_complete()), "months_by_source": src },
                "sensors": { "rows": totals(&r.sensor_rows), "fire_day_cells": totals(&r.sensor_celldays) },
                "evaluation": evaluation,
                "calibration": {
                    "k_single": r.calib.k_single,
                    "k_month": r.calib.k_month,
                    "extra": r.calib.extra,
                    "has_stats": r.calib_stats.is_some(),
                    "overlap_years": [2012, 2021],
                },
            });
            links.push(link(format!("firms://region/{}", r.name), r.name.clone(), r.title_en.clone(), "application/json"));
            let e = r.error_of(data::algorithm(data::DEFAULT_ALGORITHM)?).map(|(_, p)| format!("{p:.1}%")).unwrap_or_else(|| "n/a".into());
            let text = format!(
                "{} ({}), bbox {:?}, 2001-01 → {}, fire level {}, ensemble_adaptive error {}.",
                r.title_en, r.title, r.bbox, data::ym_of(r.nm.saturating_sub(1)), r.fire_level(), e
            );
            (v, text)
        }
        "get_calendar" => {
            let r = region_arg(st, a)?;
            let alg = alg_arg(a)?;
            let b = BaselineKind::parse(str_arg(a, "baseline").as_deref())?;
            let mut c = data::calendar(&r, str_arg(a, "from").as_deref(), str_arg(a, "to").as_deref(), &alg, b)?;
            c["title"] = json!(r.title);
            c["title_en"] = json!(r.title_en);
            let s = &c["summary"];
            let text = format!(
                "{} {} → {} ({alg}): {} fire-days. Peak {} ({}). Latest complete month {}: {} vs {} baseline {} ({}), rank {} of {}. Measured error {}.",
                r.title_en,
                c["from"].as_str().unwrap_or(""),
                c["to"].as_str().unwrap_or(""),
                fmt_n(s["total"].as_f64().unwrap_or(0.0)),
                s["peak"]["ym"].as_str().unwrap_or(""),
                fmt_n(s["peak"]["value"].as_f64().unwrap_or(0.0)),
                s["latest"]["ym"].as_str().unwrap_or(""),
                fmt_n(s["latest"]["value"].as_f64().unwrap_or(0.0)),
                b.as_str(),
                fmt_n(s["latest"]["baseline"].as_f64().unwrap_or(0.0)),
                pct(&s["latest"]["anomaly_pct"]),
                s["latest"]["rank"],
                s["latest"]["of"],
                c["error"]["pct"].as_f64().map(|p| format!("≈{p:.1}% (monthly WAPE)")).unwrap_or_else(|| "n/a (reference)".into()),
            );
            links.push(link(
                calendar_uri(&r.name, c["from"].as_str().unwrap_or(""), c["to"].as_str().unwrap_or(""), &alg, b.as_str()),
                format!("{}-calendar", r.name),
                format!("{} calendar {} → {}", r.title_en, c["from"].as_str().unwrap_or(""), c["to"].as_str().unwrap_or("")),
                "application/json",
            ));
            (c, text)
        }
        "get_anomalies" => {
            let r = region_arg(st, a)?;
            let alg = alg_arg(a)?;
            let b = BaselineKind::parse(str_arg(a, "baseline").as_deref())?;
            let th = num_arg(a, "threshold_pct").unwrap_or(50.0).clamp(0.0, 10000.0);
            let dir = Direction::parse(str_arg(a, "direction").as_deref())?;
            let limit = num_arg(a, "limit").unwrap_or(24.0).clamp(1.0, 400.0) as usize;
            let v = analytics::anomalies(&r, &alg, str_arg(a, "from").as_deref(), str_arg(a, "to").as_deref(), b, th, dir, limit)?;
            let top: Vec<String> = v["months"]
                .as_array()
                .into_iter()
                .flatten()
                .take(5)
                .map(|m| format!("{} {} ({})", m["ym"].as_str().unwrap_or(""), fmt_n(m["value"].as_f64().unwrap_or(0.0)), pct(&m["anomaly_pct"])))
                .collect();
            let text = format!(
                "{}: {} of {} months are {} the {} by ≥{th:.0}% ({} → {}). Top: {}.",
                r.title_en,
                v["count"],
                v["checked_months"],
                match dir { Direction::Above => "above", Direction::Below => "below", Direction::Both => "away from" },
                b.as_str(),
                v["from"].as_str().unwrap_or(""),
                v["to"].as_str().unwrap_or(""),
                if top.is_empty() { "none".into() } else { top.join("; ") }
            );
            links.push(link(format!("firms://region/{}", r.name), r.name.clone(), r.title_en.clone(), "application/json"));
            (v, text)
        }
        "get_trend" => {
            let r = region_arg(st, a)?;
            let alg = alg_arg(a)?;
            let v = analytics::trend(&r, &alg, str_arg(a, "from").as_deref(), str_arg(a, "to").as_deref())?;
            let text = format!(
                "{} {}–{} ({} complete years): Sen's slope {} fire-days/yr ({}%/yr), linear {}%/yr (R² {}), Mann–Kendall p = {} → {}.",
                r.title_en,
                v["first_year"],
                v["last_year"],
                v["complete_years"],
                v["sen"]["slope_per_year"],
                v["sen"]["pct_per_year"],
                v["linear"]["pct_per_year"],
                v["linear"]["r2"],
                v["mann_kendall"]["p"],
                v["verdict"].as_str().unwrap_or("").replace('_', " ")
            );
            (v, text)
        }
        "seasonal_profile" => {
            let r = region_arg(st, a)?;
            let alg = alg_arg(a)?;
            let v = analytics::seasonal_profile(&r, &alg)?;
            let fs = &v["fire_season"];
            let text = format!(
                "{}: peak months {} (2003–2022 medians); fire season months {}–{} ({} months, {}% of the year).",
                r.title_en, v["peak_months"], fs["start_month"], fs["end_month"], fs["length_months"], fs["share_pct"]
            );
            (v, text)
        }
        "rank_regions" => {
            let metric = str_arg(a, "metric").unwrap_or_else(|| "latest_anomaly".into());
            let alg = alg_arg(a)?;
            let limit = num_arg(a, "limit").unwrap_or(50.0).clamp(1.0, 100.0) as usize;
            let regs = st.regions();
            let v = analytics::rank_regions(&regs.list, &metric, &alg, str_arg(a, "from").as_deref(), str_arg(a, "to").as_deref(), limit)?;
            let text = format!(
                "Ranking by {metric} ({}): {}.",
                v["unit"].as_str().unwrap_or(""),
                v["ranking"].as_array().into_iter().flatten().map(|x| format!("{}. {} {}", x["rank"], x["region"].as_str().unwrap_or(""), x["value"])).collect::<Vec<_>>().join(", ")
            );
            (v, text)
        }
        "compare_algorithms" => {
            let r = region_arg(st, a)?;
            let algs = parse_algs(str_arg(a, "algorithms").as_deref());
            let from = str_arg(a, "from").unwrap_or_else(|| "2001-01".into());
            let v = data::compare(&r, Some(&from), str_arg(a, "to").as_deref(), &algs)?;
            let errs: Vec<String> = algs
                .iter()
                .map(|k| format!("{k} {}", v["eval"][k]["pct"].as_f64().map(|p| format!("{p:.1}%")).unwrap_or_else(|| "ref".into())))
                .collect();
            (v, format!("{}: measured monthly errors {}.", r.title_en, errs.join(", ")))
        }
        "get_benchmark" => {
            let b = tokio::fs::read(st.cfg.data_dir.join("benchmark.json")).await?;
            let v: Value = serde_json::from_slice(&b)?;
            let v = if v.is_object() { v } else { json!({ "benchmark": v }) };
            (v, "Benchmark of every method × region (monthly WAPE %, held-out and forward).".into())
        }
        "search_hotspots" => {
            let q = hotspot_query(st, a)?;
            let limit = num_arg(a, "limit").unwrap_or(200.0).clamp(0.0, 2000.0) as usize;
            let rows = firms::hotspots(st, &q).await?;
            let mut by_sat = Map::new();
            for r in &rows {
                let e = by_sat.entry(r.satellite.clone()).or_insert(json!(0));
                *e = json!(e.as_u64().unwrap_or(0) + 1);
            }
            let n = rows.len();
            let text = format!(
                "{n} FIRMS detections in {:?} from {} for {} day(s): {}.{}",
                q.bbox,
                q.date,
                q.days,
                by_sat.iter().map(|(k, v)| format!("{k} {v}")).collect::<Vec<_>>().join(", "),
                if n > limit { format!(" Showing the first {limit}.") } else { String::new() }
            );
            let v = json!({
                "bbox": q.bbox,
                "date": q.date.to_string(),
                "days": q.days,
                "sources": q.sources,
                "min_confidence": q.min_conf,
                "min_frp": q.min_frp,
                "count": n,
                "by_satellite": by_sat,
                "truncated": n > limit,
                "rows": rows.into_iter().take(limit).collect::<Vec<_>>(),
            });
            (v, text)
        }
        "hotspot_stats" => {
            let mut a2 = a.clone();
            a2["min_confidence"] = json!(0);
            a2["min_frp"] = json!(0);
            let q = hotspot_query(st, &a2)?;
            let rows = firms::hotspots(st, &q).await?;
            let mut v = analytics::hotspot_stats(&rows);
            v["bbox"] = json!(q.bbox);
            v["date"] = json!(q.date.to_string());
            v["days"] = json!(q.days);
            v["sources"] = json!(q.sources);
            let text = format!(
                "{} detections, {} fire-day cells (any satellite), {} day / {} night, FRP p50 {} MW, p90 {} MW.",
                v["rows"], v["fire_day_cells_any_satellite"], v["day"], v["night"], v["frp"]["p50"], v["frp"]["p90"]
            );
            (v, text)
        }
        "range_summary" => {
            let bbox = a.get("bbox").filter(|v| !v.is_null()).map(|_| bbox_or_region(st, a)).transpose()?;
            let bbs = bbox.map(|b| b.iter().map(f64::to_string).collect::<Vec<_>>().join(","));
            let q = crate::range::RangeQuery::parse(str_arg(a, "from").as_deref(), str_arg(a, "to").as_deref(), bbs.as_deref(), str_arg(a, "country").as_deref())?;
            let min_conf = num_arg(a, "min_confidence").unwrap_or(0.0).clamp(0.0, 2.0) as u64;
            let v = crate::range::range(st, q).await?;
            let v = analytics::range_summary(&v, min_conf);
            let text = format!(
                "{} detections {}→{} ({}), FRP total {} MW.",
                v["rows"], v["from"].as_str().unwrap_or(""), v["to"].as_str().unwrap_or(""), v["source"].as_str().unwrap_or(""), v["frp_total_mw"]
            );
            (v, text)
        }
        "live_convert" => {
            let bb = bbox_or_region(st, a)?;
            let v = live::live(st, bb, str_arg(a, "date").as_deref()).await?;
            let n = &v["conversions"]["N"];
            let text = format!(
                "{} {:?}: S-NPP {} cells → Aqua-equivalent ensemble {} (ratio_month {}, frp_season {}); calibration {}.",
                v["date"].as_str().unwrap_or(""),
                bb,
                n["cells"],
                n["ensemble"],
                n["ratio_month"],
                n["frp_season"],
                v["calibration"]["kind"].as_str().unwrap_or("")
            );
            (v, text)
        }
        "export_calendar_csv" => {
            let r = region_arg(st, a)?;
            let alg = alg_arg(a)?;
            let b = BaselineKind::parse(str_arg(a, "baseline").as_deref())?;
            let from = str_arg(a, "from").unwrap_or_else(|| "2001-01".into());
            let c = data::calendar(&r, Some(&from), str_arg(a, "to").as_deref(), &alg, b)?;
            let (f, t) = (c["from"].as_str().unwrap_or("").to_owned(), c["to"].as_str().unwrap_or("").to_owned());
            let exp = crate::db::now() + 3600;
            let payload = export_payload(&r.name, &f, &t, &alg, b.as_str(), exp);
            let sig = export_sign(st, &payload);
            let mut u = url::Url::parse(&format!("{}/api/export/calendar.csv", st.cfg.public_origin))
                .map_err(|_| AppError::Internal("bad public origin".into()))?;
            u.query_pairs_mut()
                .append_pair("region", &r.name)
                .append_pair("from", &f)
                .append_pair("to", &t)
                .append_pair("algorithm", &alg)
                .append_pair("baseline", b.as_str())
                .append_pair("exp", &exp.to_string())
                .append_pair("sig", &sig);
            let filename = format!("firms_{}_{}_{}_{}.csv", r.name, f, t, alg);
            let rows = c["months"].as_array().map_or(0, Vec::len);
            links.push(link(u.to_string(), filename.clone(), format!("{} calendar CSV", r.title_en), "text/csv"));
            let text = format!("CSV of {} ({f} → {t}, {alg}, {rows} months), link valid for 1 hour: {u}", r.title_en);
            (json!({ "url": u.to_string(), "expires_at": exp, "filename": filename, "rows": rows }), text)
        }
        "explain_method" => {
            let topic = str_arg(a, "topic").unwrap_or_default().to_ascii_lowercase();
            let text = match explain_text(&topic) {
                Some(t) => t.to_owned(),
                None if topic.is_empty() => TOPICS.iter().filter_map(|(k, _)| explain_text(k)).collect::<Vec<_>>().join("\n\n"),
                None => return Err(AppError::bad(format!("topic must be one of {}", TOPICS.iter().map(|t| t.0).collect::<Vec<_>>().join(", ")))),
            };
            links.push(link("firms://method".into(), "method".into(), "Firms method".into(), "application/json"));
            (json!({ "topic": if topic.is_empty() { "all".into() } else { topic }, "text": text.clone() }), text)
        }
        "build_region" => {
            let who = who.ok_or(AppError::Unauthorized)?;
            let name = str_arg(a, "name").ok_or_else(|| AppError::bad("name is required"))?;
            let country = str_arg(a, "country").ok_or_else(|| AppError::bad("country is required"))?;
            if st.regions().get(&name).is_ok() {
                return Err(AppError::Conflict(format!("region {name:?} already exists")));
            }
            let bbox = data::parse_bbox(&str_arg(a, "bbox").ok_or_else(|| AppError::bad("bbox is required"))?)?;
            let j = jobs::build_region(st, &who.user_id, &name, str_arg(a, "title").as_deref(), &country, &bbox)?;
            let text = format!("Region build {} queued as job {} ({}). Poll job_status.", name, j["id"].as_str().unwrap_or(""), j["status"].as_str().unwrap_or(""));
            (j, text)
        }
        "job_status" => {
            let j = jobs::get(st, &str_arg(a, "id").ok_or_else(|| AppError::bad("id is required"))?)?;
            let text = format!("Job {}: {}.", j["id"].as_str().unwrap_or(""), j["status"].as_str().unwrap_or(""));
            (j, text)
        }
        "apply_view" => {
            let v = validate_view(st, a)?;
            (json!({ "applied": v }), "The app now shows it.".into())
        }
        other => return Err(AppError::BadRequest("unknown_tool", format!("unknown tool {other:?}"))),
    };
    Ok(Output { structured, text, links })
}

#[cfg(test)]
pub mod tests {
    use super::*;

    #[test]
    fn globe_view_fields_are_validated() {
        let st = crate::state::test_state();
        let v = validate_view(&st, &json!({
            "page": "globe", "range_from": "2024-07-01", "range_to": "2024-08-31", "country": " Algeria ",
            "satellites": ["N20", "A"], "sensors": ["viirs"], "min_confidence": 2, "min_frp": 10, "day_night": "night",
            "camera": { "lat": 36.5, "lon": 3.0, "altitude_km": 400 },
        })).unwrap();
        assert_eq!(v["range"], json!(["2024-07-01", "2024-08-31"]));
        assert_eq!(v["country"], "Algeria");
        assert_eq!(v["camera"]["altitude_km"], 400.0);
        assert!(validate_view(&st, &json!({ "satellites": ["X1"] })).is_err());
        assert!(validate_view(&st, &json!({ "range_from": "2024-07-01" })).is_err());
        assert!(validate_view(&st, &json!({ "camera": { "lat": 99, "lon": 0 } })).is_err());
        assert!(validate_view(&st, &json!({ "day_night": "dusk" })).is_err());
    }

    /// Minimal JSON Schema shape check for tool schemas (object at the root, required ⊆ properties,
    /// non-empty enums, `oneOf` consts equal to the enum, arrays declare `items`).
    pub fn check_schema(path: &str, s: &Value) -> Result<(), String> {
        let m = s.as_object().ok_or(format!("{path}: schema is not an object"))?;
        if let Some(t) = m.get("type") {
            let ok = match t {
                Value::String(t) => ["object", "array", "string", "number", "integer", "boolean", "null"].contains(&t.as_str()),
                Value::Array(ts) => ts.iter().all(|t| t.as_str().is_some()),
                _ => false,
            };
            if !ok {
                return Err(format!("{path}: bad type {t}"));
            }
        }
        if let Some(e) = m.get("enum") {
            let e = e.as_array().ok_or(format!("{path}: enum not an array"))?;
            if e.is_empty() {
                return Err(format!("{path}: empty enum"));
            }
            if let Some(one) = m.get("oneOf").and_then(Value::as_array) {
                let consts: Vec<&Value> = one.iter().filter_map(|x| x.get("const")).collect();
                if consts.len() != e.len() || !consts.iter().all(|c| e.contains(c)) {
                    return Err(format!("{path}: oneOf consts differ from enum"));
                }
                if !one.iter().all(|x| x.get("title").and_then(Value::as_str).is_some()) {
                    return Err(format!("{path}: oneOf entry without title"));
                }
            }
        }
        // Function-calling providers (e.g. Gemini) reject input arrays without `items`.
    if path.contains(".input") && m.get("type") == Some(&json!("array")) && m.get("items").is_none() {
            return Err(format!("{path}: array without items"));
        }
        if let Some(items) = m.get("items") {
            check_schema(&format!("{path}.items"), items)?;
        }
        if let Some(props) = m.get("properties") {
            let props = props.as_object().ok_or(format!("{path}: properties not an object"))?;
            for (k, v) in props {
                check_schema(&format!("{path}.{k}"), v)?;
            }
            if let Some(req) = m.get("required") {
                for r in req.as_array().ok_or(format!("{path}: required not an array"))? {
                    let r = r.as_str().ok_or(format!("{path}: required entry not a string"))?;
                    if !props.contains_key(r) {
                        return Err(format!("{path}: required {r} is not a property"));
                    }
                }
            }
        }
        Ok(())
    }

    /// Does `v` satisfy the top-level type, required keys and declared property types of `schema`?
    pub fn conforms(schema: &Value, v: &Value) -> Result<(), String> {
        let type_ok = |t: &Value, v: &Value| -> bool {
            let one = |t: &str| match t {
                "object" => v.is_object(),
                "array" => v.is_array(),
                "string" => v.is_string(),
                "number" => v.is_number(),
                "integer" => v.as_i64().is_some() || v.as_u64().is_some(),
                "boolean" => v.is_boolean(),
                "null" => v.is_null(),
                _ => true,
            };
            match t {
                Value::String(s) => one(s),
                Value::Array(ts) => ts.iter().filter_map(Value::as_str).any(one),
                _ => true,
            }
        };
        if let Some(t) = schema.get("type") {
            if !type_ok(t, v) {
                return Err(format!("type {t} vs {}", v.to_string().chars().take(80).collect::<String>()));
            }
        }
        for r in schema.get("required").and_then(Value::as_array).into_iter().flatten() {
            let r = r.as_str().unwrap_or("");
            if v.get(r).is_none() {
                return Err(format!("missing required {r}"));
            }
        }
        if let Some(props) = schema.get("properties").and_then(Value::as_object) {
            for (k, ps) in props {
                if let Some(x) = v.get(k) {
                    conforms(ps, x).map_err(|e| format!("{k}: {e}"))?;
                }
            }
        }
        if let (Some(items), Some(xs)) = (schema.get("items"), v.as_array()) {
            for (i, x) in xs.iter().enumerate().take(50) {
                conforms(items, x).map_err(|e| format!("[{i}]: {e}"))?;
            }
        }
        Ok(())
    }

    #[test]
    fn strip_one_of_keeps_enum_and_folds_titles() {
        let s = obj(json!({ "r": titled_enum("pick", &[("a".into(), "Alpha".into())]) }), &[]);
        let o = strip_one_of(&s);
        assert!(o["properties"]["r"].get("oneOf").is_none());
        assert_eq!(o["properties"]["r"]["enum"], json!(["a"]));
        assert!(o["properties"]["r"]["description"].as_str().unwrap().contains("a=Alpha"));
    }

    #[test]
    fn explain_covers_every_topic() {
        for (k, _) in TOPICS {
            assert!(explain_text(k).is_some(), "{k}");
        }
    }
}
