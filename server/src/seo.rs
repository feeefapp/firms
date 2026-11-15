//! Search and AI-search optimization. The SPA renders in the browser, but crawlers (and AI
//! crawlers, which mostly do not run JavaScript) get, for every route:
//! - a real `<head>`: title, description, canonical, `hreflang` (Arabic / English through `?hl=`),
//!   Open Graph / Twitter cards and JSON-LD (WebSite, WebApplication, Dataset, FAQPage, TechArticle);
//! - readable HTML inside `#root` (what the page is, the method in brief, links), which React
//!   replaces when it mounts.
//!
//! Plus `robots.txt` (AI crawlers welcome), `sitemap.xml`, `llms.txt` and `llms-full.txt`.

use axum::Router;
use axum::extract::State;
use axum::http::{HeaderValue, header};
use axum::response::{IntoResponse, Response};
use axum::routing::get;
use serde_json::{Value, json};

use crate::data;
use crate::state::AppState;

pub fn routes() -> Router<AppState> {
    Router::new()
        .route("/robots.txt", get(robots))
        .route("/sitemap.xml", get(sitemap))
        .route("/llms.txt", get(llms))
        .route("/llms-full.txt", get(llms_full))
}

fn text(body: String, ctype: &'static str) -> Response {
    let mut r = body.into_response();
    r.headers_mut().insert(header::CONTENT_TYPE, HeaderValue::from_static(ctype));
    r.headers_mut().insert(header::CACHE_CONTROL, HeaderValue::from_static("public, max-age=3600"));
    r
}

const NAME: &str = "Firms";
const TAGLINE: &str = "One fire record from 2001 to now: NASA MODIS and VIIRS active-fire detections harmonized into a single monthly calendar of Aqua-equivalent fire-days.";

/// Public pages, in sitemap order: (path, title, description, priority).
const PAGES: &[(&str, &str, &str, &str)] = &[
    ("/", "Firms: harmonized MODIS and VIIRS fire calendar since 2001", "Monthly wildfire activity from 2001 to now in one consistent unit: NASA MODIS and VIIRS hotspots harmonized into Aqua-equivalent fire-days, with anomalies, trends and measured errors per region.", "1.0"),
    ("/guide", "How to harmonize MODIS and VIIRS fire data: a plain-language guide", "Why joining MODIS and VIIRS fire records creates a fake jump in 2012, how fire-days and the adaptive ensemble fix it, how it was tested on 7.8 million detections, and why about 7% is the floor.", "0.9"),
    ("/globe", "Fire globe: every NASA FIRMS detection with satellites and swaths", "A 3D globe of every FIRMS fire pixel at its real size, the satellites on their orbits and their scan swaths, any date range for a country or area, with filters by satellite, sensor, confidence, FRP and day/night.", "0.8"),
    ("/compare", "Comparing MODIS to VIIRS harmonization methods", "Nine ways to join the MODIS and VIIRS fire records compared on real data: annual totals, leave-one-year-out and forward tests, and the months held out against Aqua.", "0.8"),
    ("/search", "Search NASA FIRMS hotspots by area and date", "Find FIRMS fire detections (VIIRS S-NPP, NOAA-20, NOAA-21, MODIS) in any box or region for up to five days, filter by confidence and fire power, and download CSV.", "0.6"),
    ("/regions", "Calibrated fire regions", "The regions with a calibrated harmonized fire calendar, their data span and how to add a new one.", "0.6"),
    ("/developers", "Fire data API and MCP server for AI assistants", "A JSON API and a Model Context Protocol server with OAuth: give Claude, ChatGPT or Cursor tools for fire calendars, anomalies, hotspots, method comparisons and live conversions.", "0.5"),
    ("/assistant", "Ask about wildfires: the Firms assistant", "An AI assistant that answers wildfire questions from the harmonized calendar and NASA FIRMS data, and opens the matching views.", "0.4"),
];

const FAQ: &[(&str, &str)] = &[
    ("Why can't MODIS and VIIRS fire counts be joined directly?", "VIIRS has 375 m pixels against MODIS's 1 km, so it reports 2–4 times as many detections. Joining the records makes fire activity appear to jump in 2012, when VIIRS starts; the error of a direct join is 163–355% per month."),
    ("What is a fire-day?", "A 2 km × 2 km square with at least one fire detection on a given local day, counted once no matter how many rows, passes or satellites saw it. It removes most of the pixel-size difference between the sensors."),
    ("How are VIIRS counts converted to MODIS units?", "For each region, the average of two estimates: a per-month Aqua/VIIRS ratio and a seasonal curve of the chance Aqua also sees a square given the fire radiative power (FRP) VIIRS measured, learned from 2012–2021 with recent years weighted more."),
    ("How accurate is the harmonized calendar?", "About 10% average monthly error (WAPE) when Aqua is hidden and predicted from VIIRS, against about 7% between two identical VIIRS satellites, the floor this data allows. A fixed multiplier gives about 19%."),
    ("Why does the calendar use VIIRS after 2022?", "Terra and Aqua began drifting in 2022: Aqua now passes near 15:15 instead of 13:30, when fires burn more, so its counts are no longer comparable with its own past. VIIRS stayed at about 13:20."),
    ("Where does the data come from?", "NASA FIRMS (Fire Information for Resource Management System): the yearly archives for MODIS and VIIRS, and the FIRMS API for recent days."),
];

fn esc(s: &str) -> String {
    s.replace('&', "&amp;").replace('<', "&lt;").replace('>', "&gt;").replace('"', "&quot;")
}

/// The `<head>` additions and the crawlable body for an HTML route.
pub struct Page {
    pub lang: &'static str,
    pub dir: &'static str,
    pub head: String,
    pub body: String,
}

pub fn page(st: &AppState, path: &str, hl: Option<&str>) -> Page {
    let o = st.cfg.public_origin.trim_end_matches('/');
    let path = if path.len() > 1 { path.trim_end_matches('/') } else { path };
    let known = PAGES.iter().find(|p| p.0 == path);
    let (title, desc) = known.map_or((NAME.to_owned(), TAGLINE.to_owned()), |p| (p.1.to_owned(), p.2.to_owned()));
    // The crawlable text is English; `?hl=ar` asks for the Arabic interface.
    let (lang, dir) = if hl == Some("ar") { ("ar", "rtl") } else { ("en", "ltr") };
    // Only the public pages are indexed; anything else (login, consent, unknown paths) points home.
    let path = if known.is_some() { path } else { "/" };
    let canonical = format!("{o}{path}");
    let image = format!("{o}/og.png");
    let mut head = format!(
        r#"<title>{t}</title>
    <meta name="description" content="{d}" />
    <link rel="canonical" href="{c}" />
    <link rel="alternate" hreflang="en" href="{c}?hl=en" />
    <link rel="alternate" hreflang="ar" href="{c}?hl=ar" />
    <link rel="alternate" hreflang="x-default" href="{c}" />
    <meta name="robots" content="{r}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="{n}" />
    <meta property="og:title" content="{t}" />
    <meta property="og:description" content="{d}" />
    <meta property="og:url" content="{c}" />
    <meta property="og:image" content="{i}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:locale:alternate" content="ar_AR" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{t}" />
    <meta name="twitter:description" content="{d}" />
    <meta name="twitter:image" content="{i}" />
    <link rel="alternate" type="text/plain" title="llms.txt" href="{o}/llms.txt" />"#,
        t = esc(&title),
        d = esc(&desc),
        c = esc(&canonical),
        i = esc(&image),
        n = NAME,
        o = esc(o),
        r = if known.is_some() { "index, follow, max-image-preview:large" } else { "noindex, follow" },
    );
    for ld in json_ld(st, o, path, &title, &desc) {
        // `</` inside JSON would end the script element.
        head.push_str(&format!("\n    <script type=\"application/ld+json\">{}</script>", ld.to_string().replace("</", "<\\/")));
    }
    Page { lang, dir, head, body: body(st, o, path, &title, &desc) }
}

fn json_ld(st: &AppState, o: &str, path: &str, title: &str, desc: &str) -> Vec<Value> {
    let org = json!({ "@type": "Organization", "name": "feeef", "url": "https://feeef.org" });
    let regions = st.regions();
    let end = regions.list.iter().map(|r| r.nm).max().unwrap_or(1).saturating_sub(1);
    let mut out = vec![json!({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": NAME,
        "url": format!("{o}/"),
        "description": TAGLINE,
        "inLanguage": ["ar", "en"],
        "publisher": org,
    })];
    match path {
        "/" => {
            out.push(json!({
                "@context": "https://schema.org",
                "@type": "WebApplication",
                "name": NAME,
                "url": format!("{o}/"),
                "applicationCategory": "ScienceApplication",
                "operatingSystem": "Web",
                "description": desc,
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
                "isAccessibleForFree": true,
                "inLanguage": ["ar", "en"],
                "publisher": org,
            }));
            out.push(json!({
                "@context": "https://schema.org",
                "@type": "Dataset",
                "name": "Harmonized MODIS–VIIRS monthly fire calendar (Aqua-equivalent fire-days)",
                "description": format!("{TAGLINE} Fire-days are 2 km × 2 km cells with at least one detection on a local day; VIIRS months after 2022 and Terra months before mid-2002 are converted to Aqua-equivalent with an adaptive ensemble (about 10% monthly error)."),
                "url": format!("{o}/"),
                "keywords": ["wildfire", "active fire", "MODIS", "VIIRS", "NASA FIRMS", "fire calendar", "harmonization", "fire radiative power", "Aqua", "Suomi NPP", "NOAA-20"],
                "temporalCoverage": format!("2001-01/{}", data::ym_of(end)),
                "spatialCoverage": regions.list.iter().map(|r| json!({ "@type": "Place", "name": r.title_en, "geo": { "@type": "GeoShape", "box": format!("{} {} {} {}", r.bbox[1], r.bbox[0], r.bbox[3], r.bbox[2]) } })).collect::<Vec<_>>(),
                "variableMeasured": ["Aqua-equivalent fire-days per month", "anomaly against the 2003–2022 median of the same month"],
                "isBasedOn": "https://www.earthdata.nasa.gov/data/tools/firms",
                "creator": org,
                "license": "https://opensource.org/licenses/MIT",
                "isAccessibleForFree": true,
                "distribution": [
                    { "@type": "DataDownload", "encodingFormat": "application/json", "contentUrl": format!("{o}/api/calendar?region={}", regions.list.first().map_or("punjab", |r| r.name.as_str())) },
                    { "@type": "DataDownload", "encodingFormat": "text/csv", "contentUrl": format!("{o}/api/export/calendar.csv") },
                ],
            }));
        }
        "/guide" => {
            out.push(json!({
                "@context": "https://schema.org",
                "@type": "TechArticle",
                "headline": title,
                "description": desc,
                "url": format!("{o}/guide"),
                "inLanguage": "en",
                "about": ["MODIS", "VIIRS", "active fire detection", "data harmonization"],
                "publisher": org,
            }));
            out.push(json!({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": FAQ.iter().map(|(q, a)| json!({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } })).collect::<Vec<_>>(),
            }));
        }
        _ => {}
    }
    let crumbs = PAGES.iter().find(|p| p.0 == path && path != "/");
    if let Some((p, t, _, _)) = crumbs {
        out.push(json!({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": NAME, "item": format!("{o}/") },
                { "@type": "ListItem", "position": 2, "name": t, "item": format!("{o}{p}") },
            ],
        }));
    }
    out
}

/// What a crawler that does not run JavaScript reads; React replaces it on mount.
fn body(st: &AppState, o: &str, path: &str, title: &str, desc: &str) -> String {
    let nav: String = PAGES.iter().map(|(p, t, _, _)| format!(r#"<li><a href="{o}{p}">{}</a></li>"#, esc(t))).collect();
    let regions: String = st
        .regions()
        .list
        .iter()
        .map(|r| format!(r#"<li><a href="{o}/?region={}">{}</a> ({}): {} to {}</li>"#, esc(&r.name), esc(&r.title_en), esc(&r.title), "2001-01", data::ym_of(r.nm.saturating_sub(1))))
        .collect();
    let faq: String = FAQ.iter().map(|(q, a)| format!("<h3>{}</h3><p>{}</p>", esc(q), esc(a))).collect();
    let extra = match path {
        "/guide" => format!("<h2>Questions answered in the guide</h2>{faq}"),
        "/developers" => format!(
            "<h2>API and MCP</h2><p>JSON API under <code>{o}/api</code> (calendar, compare, hotspots, live conversion, any-range detections). MCP server at <code>{o}/mcp</code> (Streamable HTTP, OAuth sign-in) with tools for calendars, anomalies, trends, hotspot search, range summaries and method comparisons. See <a href=\"{o}/llms-full.txt\">llms-full.txt</a>.</p>"
        ),
        _ => format!("<h2>Calibrated regions</h2><ul>{regions}</ul><h2>Key facts</h2>{faq}"),
    };
    format!(
        r#"<main class="fm-prerender"><h1>{t}</h1><p>{d}</p><p>{tag}</p><nav aria-label="Pages"><ul>{nav}</ul></nav>{extra}<p>Data: NASA FIRMS. Open source (MIT). Made by feeef.</p></main>"#,
        t = esc(title),
        d = esc(desc),
        tag = esc(TAGLINE),
    )
}

async fn robots(State(st): State<AppState>) -> Response {
    let o = st.cfg.public_origin.trim_end_matches('/');
    text(
        format!(
            "# Firms: public pages, the guide and llms.txt are open to every crawler, AI crawlers included.\n\
User-agent: *\nAllow: /\nDisallow: /auth/\nDisallow: /oauth/\nDisallow: /api/agent/\nDisallow: /api/keys\nDisallow: /mcp\n\n\
User-agent: GPTBot\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: ChatGPT-User\nAllow: /\n\n\
User-agent: ClaudeBot\nAllow: /\n\nUser-agent: Claude-SearchBot\nAllow: /\n\nUser-agent: Claude-User\nAllow: /\n\n\
User-agent: PerplexityBot\nAllow: /\n\nUser-agent: Google-Extended\nAllow: /\n\nUser-agent: Applebot-Extended\nAllow: /\n\n\
Sitemap: {o}/sitemap.xml\n"
        ),
        "text/plain; charset=utf-8",
    )
}

async fn sitemap(State(st): State<AppState>) -> Response {
    let o = st.cfg.public_origin.trim_end_matches('/');
    let mut x = String::from("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\" xmlns:xhtml=\"http://www.w3.org/1999/xhtml\">\n");
    let url = |loc: &str, pri: &str| {
        format!(
            "  <url><loc>{l}</loc><changefreq>daily</changefreq><priority>{pri}</priority><xhtml:link rel=\"alternate\" hreflang=\"en\" href=\"{l}{q}hl=en\"/><xhtml:link rel=\"alternate\" hreflang=\"ar\" href=\"{l}{q}hl=ar\"/></url>\n",
            l = esc(loc),
            q = if loc.contains('?') { "&amp;" } else { "?" },
        )
    };
    for (p, _, _, pri) in PAGES {
        x.push_str(&url(&format!("{o}{p}"), pri));
    }
    for r in &st.regions().list {
        x.push_str(&url(&format!("{o}/?region={}", r.name), "0.7"));
    }
    x.push_str(&url(&format!("{o}/llms.txt"), "0.5"));
    x.push_str("</urlset>\n");
    text(x, "application/xml; charset=utf-8")
}

async fn llms(State(st): State<AppState>) -> Response {
    let o = st.cfg.public_origin.trim_end_matches('/');
    let pages: String = PAGES.iter().map(|(p, t, d, _)| format!("- [{t}]({o}{p}): {d}\n")).collect();
    let regions: String = st.regions().list.iter().map(|r| format!("- [{}]({o}/?region={}): {} — calendar 2001-01 to {}\n", r.title_en, r.name, r.title, data::ym_of(r.nm.saturating_sub(1)))).collect();
    text(
        format!(
            "# Firms\n\n> {TAGLINE} About 10% monthly error against Aqua (the floor between two identical sensors is about 7%). Open source (MIT), by feeef; data from NASA FIRMS.\n\n\
Use it to compare fire seasons across 25 years without the false jump at 2012, to look at any day or date range of FIRMS detections on a globe, and to give AI assistants fire-data tools over MCP.\n\n\
## Pages\n\n{pages}\n## Regions with a calibrated calendar\n\n{regions}\n## For agents and developers\n\n\
- [Full text for LLMs]({o}/llms-full.txt): the method, results, limits, API and MCP in one file\n\
- [MCP server]({o}/mcp): Streamable HTTP, OAuth sign-in; tools for calendars, anomalies, trends, hotspot search, range summaries, method comparisons and live conversions\n\
- [Calendar API]({o}/api/calendar?region=punjab): monthly Aqua-equivalent fire-days as JSON (`region`, `from`, `to`, `algorithm`)\n\
- [Regions API]({o}/api/regions): calibrated regions with bounding boxes and measured errors\n\
- [Any-range detections]({o}/api/range?country=algeria&from=2024-07-01&to=2024-07-31): FIRMS rows of a country or box over any dates\n\
- [Source code](https://github.com/feeefapp/firms)\n"
        ),
        "text/plain; charset=utf-8",
    )
}

async fn llms_full(State(st): State<AppState>) -> Response {
    let o = st.cfg.public_origin.trim_end_matches('/');
    let faq: String = FAQ.iter().map(|(q, a)| format!("### {q}\n\n{a}\n\n")).collect();
    let regions: String = st.regions().list.iter().map(|r| format!("- {} ({}), bbox W,S,E,N = {:?}, calendar 2001-01 to {}: {o}/?region={}\n", r.title_en, r.title, r.bbox, data::ym_of(r.nm.saturating_sub(1)), r.name)).collect();
    text(
        format!(
            "# Firms — harmonized MODIS/VIIRS fire calendar\n\n{TAGLINE}\n\nSite: {o}/ · Guide: {o}/guide · Source: https://github.com/feeefapp/firms (MIT) · Data: NASA FIRMS\n\n\
## The problem\n\nMODIS (Terra since 2000, Aqua since 2002, ~1 km pixels) and VIIRS (S-NPP since 2012, NOAA-20, NOAA-21, 375 m pixels) both detect active fires, but VIIRS reports 2–4 times as many. Joining the two records creates a false increase in 2012 (163–355% monthly error). Terra and Aqua also drift from 2022 (Aqua now passes near 15:15 instead of 13:30), so MODIS alone is no longer self-consistent.\n\n\
## The method\n\n1. Clean: drop low-confidence detections (MODIS < 30, VIIRS `low`) and every 2 km cell that ever held a static heat source (FIRMS type 1–3).\n\
2. Count fairly: fire-days = 0.02° (~2 km) cells with at least one detection on a local solar day.\n\
3. Reference chain: Terra converted until June 2002, Aqua July 2002–2021, VIIRS converted to Aqua-equivalent from 2022.\n\
4. Convert: the average of (a) VIIRS × the Aqua/VIIRS ratio for that calendar month and (b) a seasonal isotonic curve of P(Aqua sees the cell | VIIRS FRP), summed over cells, plus a monthly correction.\n\
5. Adaptive weights: 2012–2021 calibration with each year's weight halving every two years back.\n\n\
## Results\n\n- Direct join: 163–355% monthly error. One fixed multiplier: ~18.6%. Monthly ratio alone: ~12%. Adaptive ensemble: ~10.0% (forward test).\n\
- Floor: two identical VIIRS satellites predicting each other miss by ~7% (2.9–12.6% by region), so ~3 points remain above it.\n\
- Ideas that did not help: fire energy instead of counts, cloud correction, GOES diurnal correction, dual-VIIRS reference; gradient boosting gained ~0.3 points (inside the noise).\n\
- In regions where fire size swings from year to year (northern Algeria), the FRP curve alone is best (~12.8% forward).\n\n\
## Limits\n\n- Few-fire regions are noisy (Lebanon ~43% monthly); use seasonal or yearly totals there.\n- The calendar measures 13:30-equivalent activity.\n- Calibrated on a handful of fire regimes; boreal forests untested.\n- The newest months are provisional (near-real-time data).\n\n\
## Regions\n\n{regions}\n## Questions\n\n{faq}\
## API\n\nBase {o}/api — JSON unless noted:\n\
- GET /api/regions — calibrated regions\n- GET /api/calendar?region&from=YYYY-MM&to=YYYY-MM&algorithm — monthly calendar, anomalies, summary\n\
- GET /api/compare?region&from&to&algorithms — methods side by side with evaluations\n\
- GET /api/hotspots?bbox=W,S,E,N&date&days=1..5 — FIRMS rows (json or csv)\n\
- GET /api/live?bbox&date — one day's VIIRS fire-days converted to Aqua-equivalent\n\
- GET /api/range?country|bbox&from&to — every detection in an area over any range\n\
- GET /api/export/calendar.csv — calendar CSV\n\n\
## MCP\n\n{o}/mcp — Model Context Protocol over Streamable HTTP (2025-03-26 to 2026-07-28), OAuth 2.1 sign-in (dynamic registration and client ID metadata documents) or a personal API key. Tools include find_region, get_calendar, get_anomalies, get_trend, seasonal_profile, rank_regions, compare_algorithms, search_hotspots, hotspot_stats, range_summary, live_convert, export_calendar_csv and explain_method.\n"
        ),
        "text/plain; charset=utf-8",
    )
}
