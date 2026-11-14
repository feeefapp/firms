# Firms — harmonized MODIS/VIIRS fire calendar (feeef app)

Deployed at **https://firms.apps.feeef.dev** (Dokploy on 144.202.5.218, Dockerfile build from private repo `feeefapp/firms`).
One container: a Rust server (axum 0.8) that serves the React SPA, the JSON API, an MCP endpoint and the AI agent.

## Repository layout

```
server/        Rust crate `firms-server` (axum 0.8, tokio, tower-http, reqwest rustls, rusqlite bundled, serde)
web/           Vite + React 19 + TypeScript SPA on @feeef.dev/ui (github:feeefapp/ui#v0.14.5), react-router 7
tools/         Python harmonization (harmlib.py, harmonize.py, build_harm_data.py) + fetch_data.py (one globe day)
data/          seed data shipped in the image: regions/*.json, benchmark.json, day/2026-11-01.js
reference/     legacy-sim.html — the previous single-file simulation (three.js globe, panel logic) to port from
docs/          this file
Dockerfile     node:22 (web build, BuildKit secret gh_token for the private UI kit) → rust:1-slim-bookworm → debian:bookworm-slim + python3 + tini
```

## Environment (all prefixed FIRMS_)

| Var | Meaning |
|---|---|
| FIRMS_BIND | default `0.0.0.0:8080` |
| FIRMS_PUBLIC_ORIGIN | `https://firms.apps.feeef.dev` (local `http://localhost:8787`) |
| FIRMS_FEEEF_API_URL | `https://api.beta.feeef.org/v1` |
| FIRMS_FEEEF_ACCOUNTS_URL | `https://accounts.beta.feeef.org` |
| FIRMS_FEEEF_CLIENT_ID / FIRMS_FEEEF_CLIENT_SECRET | confidential OAuth app "Firms" (beta) |
| FIRMS_FEEEF_REDIRECT_URI | `{PUBLIC_ORIGIN}/auth/feeef/callback` (both prod and localhost:8787 are registered) |
| FIRMS_MAP_KEY | NASA FIRMS MAP_KEY (server-side only, never sent to the browser) |
| FIRMS_DATA_DIR | writable volume, default `/data` (sqlite `firms.db`, `regions/`, `cache/`, `raw/`, `day/`) |
| FIRMS_SEED_DIR | read-only seed copied into DATA_DIR on first start (image path `/app/seed`) |
| FIRMS_WEB_DIR | built SPA, `/app/web` |
| FIRMS_TOOLS_DIR | `/app/tools` |
| FIRMS_AI_MODEL | Cloud model id for the agent (e.g. `openai/gpt-4.1-mini`; check `GET /v1/ai/models`) |
| FIRMS_SESSION_KEY | 32+ random bytes (hex) for cookie signing |

Local dev reads `firms/.env` (gitignored).

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
| `GET /api/day?date` | globe snapshot for one day (format of `data/day/*.js` without the `window.FIRMS_DATA=` prefix); built by `tools/fetch_data.py` job if missing |
| `POST /api/regions` (auth) `{name,title,country,bbox}` | `{job}` — runs `python3 tools/harmonize.py` into DATA_DIR |
| `GET /api/jobs/:id` | `{id,status:queued|running|done|failed,log_tail,result}` |
| `GET/POST/DELETE /api/keys` (auth) | personal API keys `firms_…` (shown once, stored hashed) for MCP/API |
| `POST /api/agent` (auth, SSE) `{messages:[{role,content}], context:{page,region,from,to,algorithm,bbox}}` | events: `text`, `tool_call`, `tool_result`, `apply` (`{region?,from?,to?,algorithm?,baseline?,bbox?,page?}` the UI applies), `done`, `error` |

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

## MCP (Streamable HTTP, stateless) — `POST /mcp`

JSON-RPC: `initialize`, `ping`, `tools/list`, `tools/call`; notifications → 202; GET/DELETE → 405. Protocol versions
2025-11-25, 2025-06-18, 2025-03-26. Auth: `Authorization: Bearer firms_…` (API key) or a feeef access token. Tools (same
handlers as the API): `list_regions`, `get_calendar`, `compare_algorithms`, `get_benchmark`, `search_hotspots`, `live_convert`,
`build_region`, `job_status`, `explain_method`. Reference implementation style: `/Users/mohamad/Desktop/projects/cod_pilot_clone/cloud/rust/services/ads/src/mcp.rs`.

## AI agent

Uses **feeef Cloud AI with the signed-in user's token** (`POST {API}/ai/streams`, `stream:true`, chat/completions with
OpenAI-style `tools`; header `Idempotency-Key` unique per step; needs scope `ai.generate`; billed to the user's feeef wallet).
Server-side loop (max 6 steps): the model calls the same tools as MCP plus `apply_filters` (emits an `apply` event).
If AI is unavailable (no scope, 4xx/5xx, beta without Cloud AI), fall back to a deterministic parser (regions by name/country,
"last N months/years", years, algorithm names, "anomaly") that still emits `apply` + a short text answer, and say AI was unavailable.

## Front-end rules

Follow `node_modules/@feeef.dev/ui/DESIGN.md` and AGENTS.md of the kit (and `feeef.all/lite.feeef.org/AGENTS.md` as the app template):
Provider → Scaffold(side, appBar) → content; one filled button per view; ToolbarGroup bubbles; TextField with floating label and hint;
SegmentedControl for modes; Sheet/Presentation for overlays; `--lab-*` tokens only, never repaint kit components; RTL-first (Arabic default,
English second), check light/dark/RTL/360px. Simple params: Region + Period preset (12 months / 5 years / all / custom) + View (count/anomaly);
algorithm lives in an "Advanced" sheet with the recommended default pre-selected.
