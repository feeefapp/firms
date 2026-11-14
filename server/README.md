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
CSV parsing, cookie signing, tool schemas + outputs vs outputSchema, MRTR requestState, PKCE / refresh rotation / reuse
revocation, CIMD SSRF guards, anomaly / trend / seasonal math, gazetteer, AI catalog, agent chunk sequences and approvals). Lint: `cargo clippy --all-targets`.

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
| `FIRMS_MCP_ORIGINS` | – | comma list of extra browser origins accepted on `/mcp` |
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
| `GET /api/export/calendar.csv?region&from&to&algorithm&baseline&exp&sig` | CSV behind the signed 1-hour links of `export_calendar_csv` |
| `POST /api/agent` (auth, SSE) | legacy agent: events `text`, `tool_call`, `tool_result`, `apply`, `done`, `error` |
| `/api/ai/catalog`, `/api/agent/conversations…`, `/api/agent/runs…` | in-app agent (below) |
| `/.well-known/oauth-*`, `/oauth/*`, `/api/mcp/grants` | MCP OAuth authorization server (below) |
| `POST /mcp` | MCP Streamable HTTP (below); GET → 405, DELETE → 204 |

Auth: session cookie, or `Authorization: Bearer firms_…` (API key) / a feeef access token (validated
with `GET {API}/users/auth`, cached 5 minutes). Unsafe cookie-authenticated requests need a same-origin
`Origin`/`Referer`. Session tokens are refreshed (single flight per session) when they are about to expire.

### In-app agent (docs/AGENT_MCP.md §4)

| Route | Notes |
|---|---|
| `GET /api/ai/catalog` (auth) | `{ladder:{id,name,source,stops:[{modelId,label,modelName,description,priceUsd?}],defaultIndex}, models:[{id,name,vision,reasoning}], free, reviewed, ai_available, default_model?, reason?}` — `{API}/ai/collections/chat` → 404 → `collections/text`, plus `{API}/ai/models`, filtered like feeef `buildChatCatalog` (cached 60 s per token). `reason`: `disabled`, `no_ai_scope`, `forbidden`, `upstream_unavailable`, `no_models` |
| `GET/POST /api/agent/conversations` · `GET/DELETE /api/agent/conversations/:id` | SQLite conversations; `GET :id` → `{conversation, messages:[{id,role,parts,metadata,created_at}], active_run}` (parts are the reduced UI parts) |
| `POST /api/agent/conversations/:id/messages` (SSE) | body `{text, model?, reasoning_effort?, context:{page,region,from,to,algorithm,bbox}}`, header `Idempotency-Key` (same key → replays the same run). Headers `X-Vercel-AI-UI-Message-Stream: v1`, `X-Firms-Run`, `X-Agent-Run-Id`. 409 while a run is active in the conversation |
| `GET /api/agent/runs/:run/events?after=<seq>` | resume a run (log kept 30 min after it ends) |
| `POST /api/agent/runs/:run/inputs` | `{input_id: <approvalId>, approved, reason?}` answers a `tool-approval-request` (10 min timeout) |
| `POST /api/agent/runs/:run/cancel` | aborts the run → `abort` + `finish {finishReason:"abort"}` |

Stream = AI SDK UI message stream v1, frames `id: <seq>\nevent: <type>\ndata: <json>\n\n`, ending with `data: [DONE]`.
Chunks: `start {messageId, messageMetadata:{run_id}}`, `data-firms-run {run_id}`, `start-step`, `reasoning-start|delta|end`,
`text-start|delta|end`, `tool-input-start|delta|available` (`dynamic:true`), `tool-approval-request {approvalId, toolCallId}`,
`tool-approval-response`, `tool-output-available|error|denied`, `data-firms-view` (validated `apply_view`), `data-firms-card
{kind: calendar|anomalies|trend|hotspots|compare|ranking|job, toolCallId, data}`, `finish-step`, `finish {finishReason,
messageMetadata:{mode:"ai"|"fallback", model?, reason?, run_id}}`, `error {errorText}`, `abort`.

The loop runs ≤ 8 steps on `POST {API}/ai/streams` (`{endpoint:"chat/completions", body:{model, stream:true, messages,
tools, tool_choice:"auto", reasoning_effort?}}`, `Idempotency-Key: firms-<run>-s<step>`) with the user's feeef token, runs
tool calls in parallel and asks approval for write tools (`build_region`). Without AI (`FIRMS_AI_DISABLED`, no `ai.generate`,
4xx/5xx or no stream on the first step) the deterministic parser answers in the same chunk format (text + `data-firms-view`
+ calendar / anomalies cards). The legacy `POST /api/agent` (events `text`, `tool_call`, `tool_result`, `apply`, `done`,
`error`) still works for the old UI.

## MCP (docs/AGENT_MCP.md §2–3)

Endpoint `https://firms.apps.feeef.dev/mcp` (Streamable HTTP). Protocol versions 2026-07-28 (stateless: `_meta`
version/capabilities on every request, `server/discover`, `resultType`, MRTR elicitation with an HMAC-signed `requestState`
bound to user + tool + argument digest, 10 min), 2025-11-25 / 2025-06-18 (initialize; signed `Mcp-Session-Id` carries the
version and client capabilities; `elicitation/create` over an SSE response to `tools/call`, the client POSTs its answer → 202)
and 2025-03-26. Clients without elicitation get a text result listing the regions. CORS `*` on `/mcp`, `/.well-known/*`,
`/oauth/token|register|revoke`; a browser `Origin` on `/mcp` must be ours, `FIRMS_EXTRA_ORIGINS`, `FIRMS_MCP_ORIGINS`,
localhost or a known client (claude.ai, chatgpt.com, cursor.com, vscode.dev, the MCP inspector).

**Tools** (one registry shared with the in-app agent, `src/tools.rs`; region / algorithm / baseline / topic enums with
`oneOf` titles built from the loaded regions; `outputSchema` + `structuredContent` + `resource_link`s):
`find_region`, `list_regions`, `get_region`, `get_calendar` (widget), `get_anomalies`, `get_trend`, `seasonal_profile`,
`rank_regions`, `compare_algorithms`, `get_benchmark`, `search_hotspots` (widget), `hotspot_stats`, `live_convert`,
`export_calendar_csv` (signed `GET /api/export/calendar.csv`, 1 h), `explain_method`, `build_region` (write, asks to confirm),
`job_status`. Agent-only: `apply_view`.

**Resources**: `firms://regions`, `firms://benchmark`, `firms://method`, `firms://region/{region}`,
`firms://region/{region}/calendar{?from,to,algorithm,baseline}`, and the MCP Apps widgets `ui://firms/calendar-v1.html`
(calendar heatmap, cividis) and `ui://firms/hotspots-v1.html` (detections map) — `text/html;profile=mcp-app`, self-contained
(`assets/`), rendering from `ui/notifications/tool-result` (or ChatGPT `window.openai.toolOutput`); the tools carry
`_meta.ui.resourceUri` and `_meta["openai/outputTemplate"]`. **Prompts**: `fire_season_brief(region)`,
`anomaly_report(region, month?)`, `compare_regions(regions)`, `method_explainer(topic?)`. **Completion**: region(s),
algorithm, baseline, topic, country, month.

### Connect

No key needed: clients discover OAuth from the 401 (`WWW-Authenticate: Bearer resource_metadata=…`).

- **Claude** (claude.ai / Desktop): Settings → Connectors → Add custom connector → `https://firms.apps.feeef.dev/mcp`.
- **ChatGPT**: Settings → Apps & Connectors → Advanced → Developer mode → Create → MCP server URL
  `https://firms.apps.feeef.dev/mcp`, authentication OAuth.
- **Cursor**: `~/.cursor/mcp.json` → `{"mcpServers":{"firms":{"url":"https://firms.apps.feeef.dev/mcp"}}}`.
- **Claude Code**: `claude mcp add --transport http firms https://firms.apps.feeef.dev/mcp` (then `/mcp` → Authenticate),
  or with a key: `--header "Authorization: Bearer firms_…"`.

### OAuth flow (Firms is the authorization server, feeef the identity provider)

1. `GET /.well-known/oauth-protected-resource[/mcp]` → `{resource:"{ORIGIN}/mcp", authorization_servers:["{ORIGIN}"], scopes_supported:["firms"]}`;
   `GET /.well-known/oauth-authorization-server` (also `/openid-configuration`) → endpoints, `S256`, `none` auth,
   `client_id_metadata_document_supported`, `authorization_response_iss_parameter_supported`.
2. Client registration: `POST /oauth/register` (RFC 7591, public clients) or a Client ID Metadata Document (https `client_id`
   fetched with a 5 s timeout, 64 KB cap, no redirects, public IPs only, pinned DNS, cached 1 h).
3. `GET /oauth/authorize` (exact redirect match — loopback ports may vary —, PKCE S256, `resource` = `{ORIGIN}/mcp`) → signed
   10-minute cookie → `/auth/feeef/login?next=/oauth/consent` when not signed in → consent page (Arabic + English) →
   `POST /oauth/consent` (same-origin + CSRF token) → `redirect_uri?code&state&iss`.
4. `POST /oauth/token`: `authorization_code` (single use; replay revokes what it issued) → `firms_at_…` (1 h) + `firms_rt_…`
   (60 days), both stored as SHA-256, bound to user + client + resource; `refresh_token` rotates; reusing a rotated refresh
   token revokes the whole family. `POST /oauth/revoke`.
5. Developers page: `GET /api/mcp/grants` → `{grants:[{client_id, client_name, kind, client_uri, logo_uri, redirect_host, scope,
   created_at, last_used_at}]}`; `DELETE /api/mcp/grants/:client_id` (URL-encode CIMD URLs) revokes every token of that app.

`firms_` API keys and feeef access tokens are still accepted as Bearer on `/mcp`.

### Local testing without the browser sign-in

Insert a session directly (cookie value `SID`, row keyed by its SHA-256):

```sh
SID=testsession123; H=$(printf %s "$SID" | shasum -a 256 | cut -d' ' -f1); NOW=$(date +%s)
sqlite3 $FIRMS_DATA_DIR/firms.db "
 INSERT INTO users VALUES('u_test','{\"id\":\"u_test\",\"name\":\"Test\"}',$NOW);
 INSERT INTO sessions VALUES('$H','u_test','not-a-real-token',NULL,'auth',$((NOW+86400)),$NOW,$NOW);"
# OAuth: register, authorize with the cookie, read the csrf from the consent page, POST it, exchange the code
curl -s -X POST localhost:8787/oauth/register -H 'content-type: application/json' \
     -d '{"client_name":"test","redirect_uris":["http://127.0.0.1:33418/callback"]}'
curl -i -c jar -b "firms_session=$SID" "localhost:8787/oauth/authorize?response_type=code&client_id=…&redirect_uri=…&code_challenge=…&code_challenge_method=S256&state=s"
curl -b "firms_session=$SID; firms_mcp_az=…" localhost:8787/oauth/consent        # html with name="csrf"
curl -i -X POST -H 'Origin: http://localhost:8787' -b "firms_session=$SID; firms_mcp_az=…" \
     --data-urlencode csrf=… -d decision=allow localhost:8787/oauth/consent        # 303 → redirect_uri?code&state&iss
curl -X POST localhost:8787/oauth/token -d grant_type=authorization_code -d code=… -d client_id=… \
     --data-urlencode redirect_uri=http://127.0.0.1:33418/callback -d code_verifier=…
# agent fallback (scope `auth` → no Cloud AI is called)
C=$(curl -s -b "firms_session=$SID" -H 'Origin: http://localhost:8787' -X POST localhost:8787/api/agent/conversations | jq -r .conversation.id)
curl -N -b "firms_session=$SID" -H 'Origin: http://localhost:8787' -H 'content-type: application/json' \
     -X POST localhost:8787/api/agent/conversations/$C/messages -d '{"text":"anomalies in Punjab last 6 months"}'
```

To exercise the AI loop and approvals without paying, point `FIRMS_FEEEF_API_URL` at a local stub that serves
`GET /v1/ai/models` and an OpenAI-style SSE `POST /v1/ai/streams`, and set `FIRMS_TOOLS_DIR` to a directory whose
`harmonize.py` only prints (so `build_region` does not download archives).

## Docker

The repo-root `Dockerfile` builds `web/` (node:22, BuildKit secret `gh_token` for `github:feeefapp/ui`),
the server (rust:1-slim-bookworm, `CARGO_BUILD_JOBS=2`) and a `debian:bookworm-slim` runtime with
python3 + tini (non-root, `/data` volume, port 8080):

```sh
docker build --secret id=gh_token,env=GITHUB_TOKEN -t firms .
docker run -p 8080:8080 -v firms-data:/data --env-file .env -e FIRMS_PUBLIC_ORIGIN=http://localhost:8080 firms
```
