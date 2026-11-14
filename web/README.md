# Firms web

The React front-end of Firms: a harmonized MODIS/VIIRS fire calendar. Vite + React 19 +
TypeScript + react-router 7 on the Feeef UI kit (`@feeef.dev/ui`, `github:feeefapp/ui#v0.14.5`).
No Tailwind, no shadcn. The API contract is `../docs/ARCHITECTURE.md`; the Rust server
(`../server`) serves the built SPA.

## Run

```sh
npm install                # the kit is a private GitHub repo: `gh auth setup-git` first if npm can't fetch it
npm run dev                # http://localhost:5190, proxies /api /auth /mcp /healthz to http://localhost:8787
FIRMS_MOCK=1 npm run dev   # no server needed: a dev-only mock answers from ../data (see below)
npm run build              # tsc --noEmit && vite build → dist/
```

`FIRMS_API=http://host:port` changes the proxy target. The production code path always calls the
real API; the mock (`mock/dev-api.ts`) is a Vite middleware loaded only by `vite.config.ts` when
`FIRMS_MOCK=1` and is never bundled. It mirrors the server's JSON shapes from
`../data/regions/*.json`, `benchmark.json` and `day/*.js`, fakes sign-in with a cookie
(`/auth/feeef/login` → signed in, `POST /auth/logout`), keys, region build jobs, and the
native agent (`mock/agent-mock.ts`): `/api/ai/catalog` (a 3-rung ladder), conversations,
streamed turns in the AI SDK UI message stream v1 with reasoning, parallel tool calls, cards,
a view apply and an approval (`build …`), resumable runs (a prompt containing "drop" cuts the
first connection) and connected MCP apps. `FIRMS_MOCK_AI=0` serves `ai_available:false`.

## Shape

- `src/app/`: `app.tsx` (Provider → routes, lazy pages), `session.tsx` (`/api/me`, regions,
  algorithms), `assistant.tsx` (the agent state for the app: catalog and model choice per
  person, server conversations, one streamed turn at a time with resume, approvals, views
  applied to the address with Undo), `page-boundary.tsx`.
- `src/components/chat/`: the thread, ported from feeef Lab's chat (`types`, `reduce` (chunk
  folder), `api` (`readChunks`, endpoints of docs/AGENT_MCP.md §4), `message`, `activity`,
  `tool-card`, `approval`, `markdown` (small safe parser, per-block direction),
  `stick-to-bottom`), plus `cards` (`data-firms-card`: calendar, anomalies, trend, hotspots,
  compare, ranking, each with "Open in Firms"), `composer` (kit `PromptComposer` + `ModelLadder`,
  reasoning effort under the model), `conversations` and `thread`. The Assistant page owns its
  scroll area (composer floating at the bottom); the Dock sheet shows the same chat.
- `src/shell/`: `app-shell.tsx` (Scaffold: sidebar, floating app bar, bottom dock with the page's
  actions and the assistant), `screen-slots.tsx` (`ScreenTop`, `ScreenDock`, `ScreenTitle`
  portals), `params-bar.tsx` (Region · Period · View in one ToolbarGroup, custom month range),
  `advanced-sheet.tsx` (algorithm with measured error and "recommended", baseline, colour map),
  `entry-layout.tsx` (sign-in screen).
- `src/pages/`: `overview.tsx` (KPIs, calendar heatmap, annual line, CSV/PNG), `compare.tsx`,
  `search.tsx` (FilterBar → `/api/hotspots`, paged table, CSV via `format=csv`), `assistant.tsx`,
  `regions.tsx` (list + add-region job), `developers.tsx` (connect Claude/ChatGPT/Cursor/Claude
Code with the MCP URL over OAuth, connected apps with Revoke, keys, examples), `login.tsx`,
  `globe/` (lazy chunk: `engine.ts` is the three.js + satellite.js port of
  `../reference/legacy-sim.html`, `globe-page.tsx` the controls, `panels.tsx` the pixel inspector
  and the `/api/live` box sheet).
- `src/components/charts/`: hand-rolled SVG on `--lab-*` tokens (`calendar-heatmap.tsx`,
  `line-chart.tsx`), RTL-aware, keyboard and tap tooltips.
- `src/components/ui/`: app-level helpers in the lite pattern (Panel, Table, Stat, Tag, states,
  toast, confirm). Kit components are composed, never copied or repainted.
- `src/lib/`: `api.ts` (typed calls + tolerant normalizers), `params.ts` (analysis parameters in
  the URL), `format.ts`, `colors.ts`, `download.ts`.

## Parameters in the address

`?region=punjab&period=12m|5y|all|custom&from=YYYY-MM&to=YYYY-MM&view=count|anomaly&alg=…&baseline=median|mean&cmap=cividis|inferno|blues`
(defaults are dropped). Search adds `bbox, date, days, sources, conf, frp`; the globe `date, bbox`;
compare `algs`. The sidebar carries the shared keys between pages, and the assistant's
`data-firms-view` (`region, from, to, algorithm, baseline, view, bbox, date, page`) writes the
same keys (on the Assistant page itself it changes the parameters and stays there).

## Language and rules

Arabic is the default (RTL), English second: flat ICU catalogs in `src/i18n/{ar,en}.json`, every
visible string through `t('m.…')`; `?hl=en` switches and is remembered. Follow
`node_modules/@feeef.dev/ui/DESIGN.md`: one filled button per view (page actions live in the
bottom dock), toolbar controls `appearance="toolbar"`, fields with hints, SegmentedControl for
modes, Sheet/Modal/Alert for overlays, only `--lab-*` tokens, check light/dark, Arabic/English and
360px. Chart series colours are the `--firms-series-N` slots in `charts.css` (light and dark steps).

## Notes

- `/api/day` may answer while the server builds the day (`{job}` / 202); the globe follows the job
  and asks again.
- Responses the contract leaves loose (`/api/live`, `/api/hotspots`, `/api/keys`) go through
  normalizers in `lib/api.ts`, which accept arrays or maps keyed by satellite code.
