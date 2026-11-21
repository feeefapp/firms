# Firms — architecture

Live at **https://firms.apps.feeef.dev**, built from this repository's Dockerfile.
One container: a Rust server (axum 0.8) that serves the React SPA, the JSON API, an MCP endpoint and the AI agent.

## Repository layout

```
server/        Rust crate `firms-server` (axum 0.8, tokio, tower-http, reqwest rustls, rusqlite bundled, serde)
web/           Vite + React 19 + TypeScript SPA on @feeef.dev/ui (github:feeefapp/ui#v0.16.2), react-router 7
tools/         Python harmonization (harmlib.py, harmonize.py, build_harm_data.py) + fetch_data.py (one globe day)
data/          seed data shipped in the image: regions/*.json, benchmark.json (globe days are built on demand into day/)
docs/          this file
Dockerfile     node:22 (web build; BuildKit secret gh_token for the UI kit, else web/prebuilt) → rust:1-slim-bookworm → debian:bookworm-slim + python3 + tini
```

## Environment (all prefixed FIRMS_)

| Var | Meaning |
|---|---|
| FIRMS_BIND | default `0.0.0.0:8080` |
| FIRMS_PUBLIC_ORIGIN | `https://firms.apps.feeef.dev` (local `http://localhost:8787`) |
| FIRMS_FEEEF_API_URL | `https://api.beta.feeef.org/v1` |
| FIRMS_FEEEF_ACCOUNTS_URL | `https://accounts.beta.feeef.org` |
| FIRMS_FEEEF_CLIENT_ID / FIRMS_FEEEF_CLIENT_SECRET | confidential OAuth app "Firms" (beta) |
| FIRMS_FEEEF_REDIRECT_URI | `{PUBLIC_ORIGIN}/auth/feeef/callback` |
| FIRMS_MAP_KEY | NASA FIRMS MAP_KEY (server-side only, never sent to the browser) |
| FIRMS_DATA_DIR | writable volume, default `/data` (sqlite `firms.db`, `regions/`, `cache/`, `raw/`, `day/`) |
| FIRMS_SEED_DIR | read-only seed copied into DATA_DIR on first start (image path `/app/seed`) |
| FIRMS_WEB_DIR | built SPA, `/app/web` |
| FIRMS_TOOLS_DIR | `/app/tools` |
| FIRMS_AI_MODEL | Cloud model id for the agent (e.g. `openai/gpt-4.1-mini`; check `GET /v1/ai/models`) |
| FIRMS_SESSION_KEY | 32+ random bytes (hex) for cookie signing |

Local dev reads `.env` at the repository root (gitignored); see `.env.example`.

## Sign in with feeef (OAuth2 code + PKCE S256, confidential client)

- `GET /auth/feeef/login?next=/path` → state + verifier in a short-lived signed cookie → 302
  `{ACCOUNTS}/oauth/authorize?response_type=code&client_id&redirect_uri&scope=auth%20ai.read%20ai.generate&state&code_challenge&code_challenge_method=S256`
- `GET /auth/feeef/callback?code&state` → `POST {API}/oauth/token` (form: grant_type=authorization_code, code, redirect_uri,
  client_id, client_secret, code_verifier) → `{access_token, refresh_token, expires_in, scope}` → `GET {API}/users/auth`
  (Bearer) → `{user:{id,name,email,photoUrl,...}}` → session row in sqlite, cookie `firms_session` (HttpOnly, Secure in prod, SameSite=Lax).
- `POST /auth/logout` (revoke via `POST {API}/oauth/revoke token=`), `GET /api/me` → `{user|null}`.
- Refresh tokens rotate and are single-use; refresh at most once per request under a per-session mutex.
- Unsafe methods require same-origin `Origin`/`Referer` (CSRF).
- Public: all read endpoints. Signed-in only: AI agent, region builds, API keys. MCP: Bearer API key or feeef access token.

## JSON API (all under /api)

| Route | Returns |
|---|---|
| `GET /api/me` | `{user}` or `{user:null}` |
| `GET /api/algorithms` | `[{key, name:{ar,en}, description:{ar,en}, recommended, eval:{test, key}}]` (keys below) |
| `GET /api/regions` | `[{name,title,bbox:[W,S,E,N],nm,start:"2001-01",fire_level:"low|medium|high",eval:{...}}]` |
| `GET /api/regions/:name` | the full region JSON (same shape as `data/regions/*.json`) |
| `GET /api/calendar?region&from=YYYY-MM&to=YYYY-MM&algorithm&baseline=median|mean` | `{months:[{ym,value,baseline,anomaly_pct,source}], years:[{year,total,complete}], summary:{total,peak:{ym,value},top_year,extreme_months,latest:{ym,value,baseline,anomaly_pct,rank,of}}, error:{test,pct}}` (baseline = same calendar month 2003–2022) |
| `GET /api/compare?region&from&to&algorithms=a,b,c` | `{years:[...], series:{alg:[annual totals]}, eval:{...}, heldout:{months, aqua, alg:[...]}}` |
| `GET /api/benchmark` | `data/benchmark.json` |
| `GET /api/hotspots?bbox&date&days=1..5&sources&min_conf=0|1|2&min_frp&format=json|csv` | rows from the FIRMS area API (cached on disk per request key) |
| `GET /api/live?bbox&date` | per satellite `{rows, fire_day_cells}`, and VIIRS→Aqua-equivalent conversions `{ratio, ratio_month, frp_season, ensemble}` for N, N20, N21 using the region calibration that contains the bbox or the pooled global one |
| `GET /api/day?date` | globe snapshot for one day (columns `lat, lon, t, sat, scan, track, frp, b4, b5, conf, craw, dn, ver` + satellites with TLEs); a missing day of the last 60 is built by a `tools/fetch_data.py` job (signed-in users only) |
| `GET /api/range?from&to&country|bbox` | every detection in an area over any range, same columns as a day (no TLEs). A country with a local archive (a built region keeps `raw/<region>/` yearly FIRMS files) is read from disk for any length since 2001; elsewhere the range is stitched from 5-day FIRMS area calls, up to 62 days; at most 600 000 rows |
| `POST /api/regions` (auth) `{name,title,country,bbox}` | `{job}` — runs `python3 tools/harmonize.py` into DATA_DIR |
| `GET /api/jobs/:id` | `{id,status:queued|running|done|failed,log_tail,result}` |
| `GET/POST/DELETE /api/keys` (auth) | personal API keys `firms_…` (shown once, stored hashed) for MCP/API |
| `/api/agent/*` (auth) | the in-app agent: model catalog, conversations, turns streamed as the AI SDK UI message stream v1 (see server/README.md) |

Per-IP limits (429 + Retry-After): FIRMS-backed endpoints 40/min, `/oauth/register` 20/h, `/oauth/token` 120/min, `/mcp` 240/min.

Algorithm keys (series in region JSON): `ensemble_adaptive` (recommended), `ensemble_geom_adaptive`, `ensemble`,
`frp_season_adaptive`, `ratio_month_adaptive`, `ratio`, `naive`, `raw_rows`, `aqua_only`. Evaluation mapping (region `eval`):
ensemble_adaptive→eval.ensemble.forward_adaptive, ensemble_geom_adaptive→eval.ensemble_geom.forward_adaptive,
ensemble→eval.ensemble.forward, frp_season_adaptive→eval.frp_season.forward_adaptive, ratio_month_adaptive→eval.ratio_month.forward_adaptive,
ratio→eval.ratio.forward, naive→eval.switch.loyo, raw_rows→eval.raw_switch.loyo, aqua_only→none (reference).

Region JSON fields used: `title, bbox, NM, src` (one char per month: T Terra-converted, A Aqua, V VIIRS-converted), `series{alg:[NM]}`,
`sensor_rows{T,A,S,N20}`, `sensor_celldays{...}`, `eval{method:{loyo,forward,forward_adaptive,loyo_monthly}}`, `eval_months`, `eval_aqua`,
`calib{k_single,k_month[12],extra[12],rho[24],rho_season[4][24],rho_geom}`, `kT`. Month index 0 = 2001-01. FRP bin = clamp(floor((log10(max(frp,0.05))+1.5)/0.25),0,23).
Fire-day cell = (local solar day = UTC + lon/15 h, floor(lat/0.02), floor(lon/0.02)); MODIS needs raw confidence ≥ 30, VIIRS drops `low`.
Live conversion for month m, season s=floor(m/3), C cells: frp = Σ rho_season[s][bin(frp_cell)] + extra[m]·C; ratio_month = k_month[m]·C;
ensemble = (frp + ratio_month)/2; ratio = k_single·C. Global calibration = pooled sums of all regions (see tools/build_harm_data.py).

## MCP — `POST /mcp`

Streamable HTTP, stateless, protocol versions 2026-07-28 (`server/discover`), 2025-11-25, 2025-06-18 and 2025-03-26. Tools,
resources (+ templates), prompts and completion; tools carry `outputSchema` and return `structuredContent`; two MCP Apps
widgets (`ui://firms/calendar-v1.html`, `ui://firms/hotspots-v1.html`). Auth: `Authorization: Bearer` with an OAuth access
token (Firms is its own authorization server: RFC 9728 / 8414 metadata, dynamic registration and client ID metadata
documents, PKCE, rotating refresh tokens), a personal API key `firms_…`, or a feeef access token. Details in server/README.md.

## AI agent

feeef Cloud AI with the signed-in user's token (`POST {API}/ai/streams`, chat/completions with OpenAI-style tools; billed
to the user's feeef wallet). The model list is the reviewed `chat` collection (lightest model by default). The agent uses
the same tool registry as MCP plus `apply_view`, which drives the web app through its address — including the globe
(day or range, country, satellites, sensors, confidence, FRP, day/night, camera, area). The web sends what is on screen
(`context`, with a `globe` object on the globe page) with every turn.

## Globe address

`/globe?date=…|range=from..to&country=dz&bbox=W,S,E,N&sats=A,N20&sensor=modis,viirs&conf=1&frp=5&dn=night&cam=lat,lon,altKm&tab=area|record`
(web/src/pages/globe/globe-state.ts). Filters run in the fire shader and in picking alike; the country mask is a
point-in-polygon test on Natural Earth 1:50m shapes.

## Front-end rules

Follow `node_modules/@feeef.dev/ui/DESIGN.md` and AGENTS.md of the kit:
Provider → Scaffold(side, appBar) → content; one filled button per view; ToolbarGroup bubbles; TextField with floating label and hint;
SegmentedControl for modes; Sheet/Presentation for overlays; `--lab-*` tokens only, never repaint kit components; RTL-first (Arabic default,
English second), check light/dark/RTL/360px. Simple params: Region + Period preset (12 months / 5 years / all / custom) + View (count/anomaly);
algorithm lives in an "Advanced" sheet with the recommended default pre-selected.
