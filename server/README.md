# firms-server

Rust server for **Firms** (harmonized MODIS/VIIRS fire calendar): serves the React SPA, the JSON API,
the MCP endpoint and the AI agent. The contract is [`../docs/ARCHITECTURE.md`](../docs/ARCHITECTURE.md).

axum 0.8 · tokio · tower-http (static files, gzip/br) · reqwest (rustls) · rusqlite (bundled) · Rust ≥ 1.86.

## Run locally

```sh
cd firms/server
# reads ../.env (FIRMS_FEEEF_*, FIRMS_MAP_KEY, …); variables already set in the shell win
FIRMS_BIND=127.0.0.1:8787 \
FIRMS_PUBLIC_ORIGIN=http://localhost:8787 \
FIRMS_DATA_DIR=/tmp/firms-data \
FIRMS_SEED_DIR=../data \
FIRMS_TOOLS_DIR=../tools \
FIRMS_WEB_DIR=../web/dist \
cargo run
```

On start the server copies `FIRMS_SEED_DIR` (`regions/*.json`, `benchmark.json`, `day/*`) into
`FIRMS_DATA_DIR` when missing, opens `firms.db` (SQLite) there and loads every region. Without a web
build it serves a small placeholder page. With the Vite dev server (`cd ../web && npm run dev`, port
5190, proxying `/api`, `/auth`, `/mcp` to 8787) set `FIRMS_EXTRA_ORIGINS=http://localhost:5190` so
the CSRF check accepts it.

Tests: `cargo test` (fallback parser, calibration parity with `tools/harmlib.py` on the seed regions,
CSV parsing, cookie signing). Lint: `cargo clippy --all-targets`.

## Environment

| Var | Default | Meaning |
|---|---|---|
| `FIRMS_BIND` | `0.0.0.0:8080` | listen address |
| `FIRMS_PUBLIC_ORIGIN` | `http://localhost:8787` | public origin; CSRF origin; `https` ⇒ `Secure` cookies |
| `FIRMS_FEEEF_API_URL` | `https://api.beta.feeef.org/v1` | feeef API (token, revoke, `users/auth`, `ai/streams`) |
| `FIRMS_FEEEF_ACCOUNTS_URL` | `https://accounts.beta.feeef.org` | authorize page |
| `FIRMS_FEEEF_CLIENT_ID` / `FIRMS_FEEEF_CLIENT_SECRET` | – | confidential OAuth client |
| `FIRMS_FEEEF_REDIRECT_URI` | `{PUBLIC_ORIGIN}/auth/feeef/callback` | registered redirect URI |
| `FIRMS_MAP_KEY` | – | NASA FIRMS MAP_KEY (server-side only; redacted from job logs) |
| `FIRMS_DATA_DIR` | `/data` | writable: `firms.db`, `session.key`, `regions/`, `day/`, `cache/`, `raw/` |
| `FIRMS_SEED_DIR` | – | read-only seed (image: `/app/seed`) |
| `FIRMS_WEB_DIR` | `/app/web` | built SPA |
| `FIRMS_TOOLS_DIR` | `/app/tools` | python tools |
| `FIRMS_PYTHON` | `python3` | interpreter for jobs |
| `FIRMS_AI_MODEL` | `openai/gpt-4.1-mini` | feeef Cloud AI model id (see `GET /v1/ai/models`) |
| `FIRMS_AI_DISABLED` | – | `1` forces the deterministic fallback |
| `FIRMS_SESSION_KEY` | generated | ≥ 32 bytes (hex) for signing the OAuth state cookie; else `DATA_DIR/session.key` |
| `FIRMS_EXTRA_ORIGINS` | – | comma list of extra origins accepted by the CSRF check (dev) |
| `FIRMS_LOG` | `info,tower_http=warn` | tracing filter |
| `FIRMS_ENV_FILE` | `.env` or `../.env` | dotenv file for local runs |

## Routes

| Route | Notes |
|---|---|
| `GET /healthz` | `{ok, version, regions, global_calibration, days, firms_key, oauth}` |
| `GET /auth/feeef/login?next=/path` | 302 to `{ACCOUNTS}/oauth/authorize` (code + PKCE S256, scope `auth ai.read ai.generate`); state + verifier in a signed 10-minute cookie |
| `GET /auth/feeef/callback` | token exchange, `GET {API}/users/auth`, SQLite session, cookie `firms_session` (HttpOnly, SameSite=Lax, Secure on https); errors redirect to `/?auth_error=…` |
| `POST /auth/logout` | revokes the token, deletes the session (same-origin only) |
| `GET /api/me` | `{user:null}` or `{user, via, scopes, ai}` |
| `GET /api/algorithms` | catalogue with `{ar,en}` names, recommended flag, evaluation mapping |
| `GET /api/regions` · `GET /api/regions/:name` | summaries (`eval` = measured error % per algorithm key) · the region JSON file |
| `POST /api/regions` (auth) | `{name,title,country,bbox}` → 202 `{job}` (runs `tools/harmonize.py`) |
| `GET /api/calendar?region&from&to&algorithm&baseline` | months (+`partial` for the running month), years, summary, error |
| `GET /api/compare?region&from&to&algorithms=a,b` | annual totals per algorithm, eval, held-out monthly predictions |
| `GET /api/benchmark` | `benchmark.json` |
| `GET /api/hotspots?bbox&date&days=1..5&sources&min_conf&min_frp&format=json\|csv` | FIRMS area API proxy, cached on disk per request (1 h for recent days, forever after 3 days); local guard of 400 upstream calls / 10 min |
| `GET /api/live?bbox&date` (or `region`) | per-satellite rows / fire-day cells and VIIRS→Aqua conversions (region calibration that contains the bbox, else pooled global). Uses the day snapshot, else the FIRMS area API |
| `GET /api/day?date` · `GET /api/days` | globe snapshot JSON (from `day/DATE.js`); if missing (last 60 days) 202 `{job}` running `tools/fetch_data.py` · available dates |
| `GET /api/jobs/:id` | `{id,kind,status,log_tail,result,…}` |
| `GET/POST /api/keys`, `DELETE /api/keys/:id` (auth) | personal API keys `firms_…` (returned once as `token`, stored as SHA-256) |
| `POST /api/agent` (auth, SSE) | events `text`, `tool_call`, `tool_result`, `apply`, `done`, `error` |
| `POST /mcp` | MCP Streamable HTTP (stateless JSON); GET/DELETE → 405 |

Auth: session cookie, or `Authorization: Bearer firms_…` (API key) / a feeef access token (validated
with `GET {API}/users/auth`, cached 5 minutes). Unsafe cookie-authenticated requests need a same-origin
`Origin`/`Referer`. Session tokens are refreshed (single flight per session) when they are about to expire.

### AI agent

With a session whose scope includes `ai.generate`, the server runs up to 6 steps against
`POST {API}/ai/streams` with the user's token and an `Idempotency-Key` per step
(`firms-agent-<run>-s<step>`). Body (same shape as the feeef JS SDK `feeef.ai.stream`):

```json
{ "endpoint": "chat/completions",
  "body": { "model": "<FIRMS_AI_MODEL>", "messages": [...], "tools": [...], "tool_choice": "auto", "stream": true } }
```

The response is relayed OpenAI SSE (`data: {choices:[{delta:{content|tool_calls}}]}` … `data: [DONE]`).
Tools are the MCP tools plus `apply_filters` (emits `apply`). If AI is unavailable (no scope,
non-2xx/202, network error) the deterministic parser answers instead: regions by name/title/country,
"last N months/years" (Arabic too), years and year ranges, `YYYY-MM` pairs, algorithm names, median/mean,
"anomaly", and the page (calendar, compare, globe, hotspots, regions); it emits `text` + `apply` + `done {mode:"fallback"}`.

## MCP usage

```sh
# 1. sign in on the site, then create a key (Developers page, or):
curl -X POST https://firms.apps.feeef.dev/api/keys -H 'Origin: https://firms.apps.feeef.dev' \
     -H 'content-type: application/json' -b 'firms_session=…' -d '{"name":"laptop"}'   # → {"token":"firms_…"}

K=firms_…
curl -s https://firms.apps.feeef.dev/mcp -H "Authorization: Bearer $K" -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"curl","version":"1"}}}'
curl -s https://firms.apps.feeef.dev/mcp -H "Authorization: Bearer $K" -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/list"}'
curl -s https://firms.apps.feeef.dev/mcp -H "Authorization: Bearer $K" -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"get_calendar","arguments":{"region":"punjab","from":"2025-01","to":"2026-10"}}}'
```

Claude Code: `claude mcp add --transport http firms https://firms.apps.feeef.dev/mcp --header "Authorization: Bearer $K"`.

Tools: `list_regions`, `get_calendar`, `compare_algorithms`, `get_benchmark`, `search_hotspots`,
`live_convert`, `build_region`, `job_status`, `explain_method`.

### Local testing without the browser sign-in

Insert a session directly (cookie value `SID`, row keyed by its SHA-256):

```sh
SID=testsession123; H=$(printf %s "$SID" | shasum -a 256 | cut -d' ' -f1); NOW=$(date +%s)
sqlite3 $FIRMS_DATA_DIR/firms.db "
 INSERT INTO users VALUES('u_test','{\"id\":\"u_test\",\"name\":\"Test\"}',$NOW);
 INSERT INTO sessions VALUES('$H','u_test','not-a-real-token',NULL,'auth',$((NOW+86400)),$NOW,$NOW);"
curl -b "firms_session=$SID" -H 'Origin: http://localhost:8787' -H 'content-type: application/json' \
     -X POST localhost:8787/api/keys -d '{"name":"test"}'                       # → token for /mcp
curl -N -b "firms_session=$SID" -H 'Origin: http://localhost:8787' -H 'content-type: application/json' \
     -X POST localhost:8787/api/agent -d '{"messages":[{"role":"user","content":"anomalies in Punjab last 6 months"}]}'
```

The scope `auth` (no `ai.generate`) exercises the fallback without calling Cloud AI.

## Docker

The repo-root `Dockerfile` builds `web/` (node:22, BuildKit secret `gh_token` for `github:feeefapp/ui`),
the server (rust:1-slim-bookworm, `CARGO_BUILD_JOBS=2`) and a `debian:bookworm-slim` runtime with
python3 + tini (non-root, `/data` volume, port 8080):

```sh
docker build --secret id=gh_token,env=GITHUB_TOKEN -t firms .
docker run -p 8080:8080 -v firms-data:/data --env-file .env -e FIRMS_PUBLIC_ORIGIN=http://localhost:8080 firms
```
