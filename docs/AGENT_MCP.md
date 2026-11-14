# Firms — native agent + MCP v2 (binding contract)

Extends docs/ARCHITECTURE.md. Server: firms/server (Rust, axum 0.8, Rust 1.86 locally). Web: firms/web (React 19, @feeef.dev/ui v0.14.5).
Research behind this: feeef Lab chat (feeef.all/backend/app/services/lab/{chat.ts,chat_catalog.ts,model_ladder.ts},
backend/inertia/components/lab/chat/*), feeef MCP (feeef.all/mcp lib/http/*), MCP spec 2025-11-25 + 2026-07-28, MCP Apps 2026-01-26.

## 1. One tool registry (server/src/tools_registry.rs or similar)

Every tool is defined ONCE (name, title, description, inputSchema with enums/oneOf titles, outputSchema, annotations, optional
`ui` widget, `write` flag) and is used by BOTH the MCP server and the in-app agent. Tools (all read-only unless marked):

| name | purpose |
|---|---|
| `find_region` | resolve a place/country/region name (ar/en/fr) to a calibrated region or a bbox (small built-in gazetteer of countries + our regions) |
| `list_regions` | regions with fire level, bbox, months, measured error; optional filter by fire_level |
| `get_region` | one region: bbox, coverage, sensors, evaluation per algorithm, calibration summary |
| `get_calendar` | month×year calendar for region/from/to/algorithm/baseline (+ summary); **has MCP Apps widget** `ui://firms/calendar-v1.html` |
| `get_anomalies` | months above/below a threshold vs baseline, sorted (default ≥ +50%) |
| `get_trend` | annual totals + linear trend per year (%/yr) + Sen's slope on complete years |
| `seasonal_profile` | median month profile 2003–2022, peak months, fire-season window |
| `rank_regions` | rank all regions by latest-month anomaly / total in period / trend |
| `compare_algorithms` | annual totals per algorithm + this region's evaluation |
| `get_benchmark` | the full study benchmark (all methods × 4 regions, held-out and forward) |
| `search_hotspots` | FIRMS area API (server-side key, cached): bbox or region, date, days 1–5, sources[], min_confidence, min_frp, limit → rows + per-satellite counts; **has widget** `ui://firms/hotspots-v1.html` (map of points) |
| `hotspot_stats` | aggregate stats for bbox/date: per satellite rows, fire-day cells, FRP percentiles, day/night split |
| `live_convert` | VIIRS→Aqua-equivalent conversion for bbox/date (all algorithms) |
| `export_calendar_csv` | returns a `resource_link` to `/api/export/calendar.csv?...` (signed URL, 1h) |
| `explain_method` | topic enum: fire_days, reference_chain, transfer, adaptive, geometry, noise_floor, accuracy, data_sources |
| `build_region` (**write**, openWorld) | queue a new region build (name, title, country, bbox) — needs approval/confirmation |
| `job_status` | status/log tail of a job |
| `apply_view` (agent-only, not MCP) | ask the web UI to navigate/apply `{page, region, from, to, algorithm, baseline, bbox}` |

Region/algorithm/baseline/sources params use `enum` (+ `oneOf` titles) built from live data, so clients render selects.
Results: `structuredContent` (matches outputSchema) + a short text summary + `resource_link`s (`firms://region/{r}/calendar?...`).
Annotations: `readOnlyHint:true, openWorldHint:false` except search/hotspot/live (`openWorldHint:true`) and build_region
(`readOnlyHint:false, destructiveHint:false, openWorldHint:true`).

## 2. MCP server v2 (`POST /mcp`)

- Protocol versions: 2026-07-28 (with `server/discover`, MRTR, `resultType`), 2025-11-25, 2025-06-18, 2025-03-26.
- Methods: initialize/server/discover, ping, tools/list, tools/call, resources/list, resources/templates/list, resources/read,
  prompts/list, prompts/get, completion/complete, notifications/*.
- Resources: `firms://regions`, `firms://benchmark`, `firms://method`, templates `firms://region/{region}`,
  `firms://region/{region}/calendar{?from,to,algorithm,baseline}`; plus `ui://firms/calendar-v1.html`, `ui://firms/hotspots-v1.html`
  (mimeType `text/html;profile=mcp-app`, self-contained HTML that renders from `ui/notifications/tool-result` structuredContent,
  `_meta.ui.csp`, also `_meta["openai/outputTemplate"]` alias on the tool).
- Prompts: `fire_season_brief(region)`, `anomaly_report(region, month)`, `compare_regions(regions)`, `method_explainer(topic)`.
- Completion: region, algorithm, topic, country argument values.
- Elicitation ("select"): `get_calendar`/`get_anomalies`/`seasonal_profile` without `region` → ask the user to pick a region
  (titled enum); `build_region` → confirm form (name/title/country select/bbox). Transport:
  2026-07-28 → MRTR (`resultType:"input_required"`, `inputRequests`, `requestState` = HMAC(session_key) blob bound to principal,
  tool, args digest, 10-min TTL); 2025-11-25 clients that declared `elicitation` → SSE response to tools/call with
  `elicitation/create`, pending map keyed by request id, client answer POSTed (202); otherwise → isError result listing options.
- CORS `*` on /mcp, /.well-known/*, /oauth/token, /oauth/register; expose WWW-Authenticate, Mcp-Session-Id. Validate Origin on /mcp
  when present (allow known MCP client origins + same origin).

## 3. MCP OAuth (Firms is its own authorization server; feeef is the identity provider)

- `GET /.well-known/oauth-protected-resource` and `/.well-known/oauth-protected-resource/mcp` →
  `{resource:"{ORIGIN}/mcp", authorization_servers:["{ORIGIN}"], scopes_supported:["firms"], bearer_methods_supported:["header"], resource_name:"Firms"}`.
- `GET /.well-known/oauth-authorization-server` (+ alias `/.well-known/openid-configuration`) → issuer, authorization_endpoint
  `/oauth/authorize`, token_endpoint `/oauth/token`, registration_endpoint `/oauth/register`, revocation_endpoint `/oauth/revoke`,
  response_types ["code"], grant_types ["authorization_code","refresh_token"], code_challenge_methods ["S256"],
  token_endpoint_auth_methods ["none"], `client_id_metadata_document_supported:true`, `authorization_response_iss_parameter_supported:true`,
  scopes ["firms"].
- `POST /oauth/register` (DCR, RFC 7591) → sqlite `oauth_clients`. CIMD: client_id that is an https URL → fetch (timeout 5s, 64KB, no
  redirects, public IP only), validate `client_id` + `redirect_uris`, cache 1h.
- `GET /oauth/authorize` → validate client/redirect (exact)/S256/`resource` (= `{ORIGIN}/mcp` if given) → signed cookie with the request →
  if not signed in: `/auth/feeef/login?next=/oauth/consent` (reuses the existing feeef callback); else consent page.
- Consent page (feeef UI style, server-rendered minimal HTML or SPA route `/oauth/consent`): app name/logo/redirect host, what it can do
  (read calendars, search hotspots, start region builds, use your feeef AI wallet: no — MCP never spends AI), Allow / Deny.
- `POST /oauth/consent` → one-time code (sha256 stored, 10 min) → `redirect_uri?code&state&iss={ORIGIN}`.
- `POST /oauth/token`: authorization_code (PKCE S256, client, redirect, resource) and refresh_token (rotating, single use, family revoke
  on reuse). Tokens: `firms_at_…` (1h) and `firms_rt_…` (60 days), stored hashed, bound to user_id + client_id + resource.
- `POST /oauth/revoke`. 401 from /mcp: `WWW-Authenticate: Bearer resource_metadata="{ORIGIN}/.well-known/oauth-protected-resource/mcp", scope="firms"`.
- Still accepted on /mcp: `firms_` API keys (Developers page). Raw feeef tokens: keep accepting for backward compat.
- Developers page lists connected MCP apps (clients with active grants) with Revoke.

## 4. In-app agent (native, Lab-style)

- `GET /api/ai/catalog` (auth): with the user's feeef token, `GET {API}/ai/collections/chat` → 404 → `collections/text` → fallback
  `GET {API}/ai/models` filtered exactly like feeef `buildChatCatalog` (endpoints include chat/completions and streaming chat/completions;
  first-party providers google/openai/anthropic/meta/coconutstudio/deepseek/qwen; exclude tts/audio/image/embed/realtime/transcri/robotics;
  one per canonical model; sort by output price; spread to ≤5; default = middle). Response:
  `{ladder:{id,name,source,stops:[{modelId,label,modelName,description,access?,priceUsd?}],defaultIndex}, models:[{id,name,vision,reasoning}], free, ai_available:bool, reason?}`.
  If the user lacks `ai.read`/AI is unavailable → `ai_available:false` + reason; the UI still works with the deterministic fallback.
- Conversations in sqlite: `GET/POST /api/agent/conversations`, `GET/DELETE /api/agent/conversations/:id` (messages with parts).
- `POST /api/agent/conversations/:id/messages` (SSE) body `{text, model?, reasoning_effort?, context:{page,region,from,to,algorithm,bbox}}`,
  header `Idempotency-Key` from the client. Server loop ≤ 8 steps: `POST {API}/ai/streams` `{endpoint:"chat/completions",
  body:{model, stream:true, messages, tools, tool_choice:"auto", reasoning_effort?}}` with `Idempotency-Key: firms-<turn>-s<step>`;
  run tool calls from the registry (in parallel when several); write tools (`build_region`) emit `tool-approval-request` and wait for
  `POST /api/agent/runs/:run/inputs {input_id, approved}` (timeout 10 min).
- Stream = **AI SDK UI message stream v1** (same as feeef Lab: header `X-Vercel-AI-UI-Message-Stream: v1`, frames
  `id: <seq>\nevent: <type>\ndata: <json>`), chunk types: `start`, `start-step`, `text-start|delta|end`, `reasoning-start|delta|end`,
  `tool-input-start|delta|available`, `tool-approval-request`, `tool-output-available|error`, `data-firms-view` (apply_view payload),
  `data-firms-card` ({kind:"calendar"|"anomalies"|"trend"|"hotspots"|"compare"|"ranking", data}), `finish-step`, `finish`, `error`.
  Runs are resumable: `GET /api/agent/runs/:run/events?after=<seq>` (in-memory log kept 30 min).
- System prompt: Firms expert, Arabic/English matching the user, cite numbers from tools only, prefer cards, call apply_view when the
  user asks to "show"/"open", explain uncertainty (~10% monthly error, 7% floor).
- Fallback (no AI): keep the deterministic parser, emitted with the SAME chunk format (text + data-firms-view + cards).

## 5. Web chat (feeef UI)

- Assistant page and the Dock sheet use `PromptComposer` / `ComposerBar` + `ComposerField` + `ComposerSend` from
  `@feeef.dev/ui/composer/composer` with `tools={<ModelLadder variant="compact" side="top" align="start" … />}` from
  `@feeef.dev/ui/model-ladder` fed by `/api/ai/catalog`; busy/onStop wired to abort.
- Thread components ported (adapted, app-level) from feeef Lab `backend/inertia/components/lab/chat/` (message, activity, tool-card,
  approval, markdown, reduce, stick-to-bottom, readChunks): reasoning collapsible, tool cards with input/output, approval card
  (one filled Approve), data cards rendering mini calendar heatmap / anomaly list / trend sparkline / hotspot mini-map / ranking table with
  "Open in Firms" buttons, conversation list (Sheet on phone), suggestions chips on empty state (in Arabic + English).
- Developers page: "Connect to Claude / ChatGPT / Cursor" with the MCP URL and the OAuth flow explained (no key needed), plus API keys
  and connected apps list.
