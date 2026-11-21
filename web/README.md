# Firms web

The React front-end of Firms: a harmonized MODIS/VIIRS fire calendar. Vite + React 19 +
TypeScript + react-router 7 on the Feeef UI kit (`@feeef.dev/ui`, `github:feeefapp/ui#v0.16.2`).
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

## Interactive presentation

Open `/presentation` (also in the sidebar) for the Space Apps presentation: ten main slides and
five technical subslides. It runs outside the workspace shell, with locally hosted fonts, Earth
textures and an archived sample, so its core content does not need a sign-in or API access.

- Left/right arrows or Page Up/Down move between slides. Space advances when a control is not focused.
- **Start presentation** (or `P`) opens a separate presenter window and starts the five-minute
  countdown at slide 1. Browsing slides beforehand does not start it. Reopening **Presenter**
  during a run keeps the same clock.
  Share only the audience window. Notes never appear in the audience slide DOM.
- The private view shows a white → blue → red time bar for the current slide, suggested slide
  times, and the total time remaining. Method, results and demo slides get more time. Advancing
  early, overrunning, jumping or toggling technical slides redistributes the remaining 300-second
  budget. Slide changes stay manual until the thank-you page is shown automatically at 5:00.
- Pause freezes both countdowns; resume continues the remaining speaking time. Restart returns
  to slide 1 with 5:00. The clock survives audience refreshes in the same tab. Run the timing
  regression checks with `npm run test:presentation` (Node 22.6+).
- `F` toggles fullscreen, `O` opens the overview, and `T` includes/skips technical slides.
- The demo uses the actual `GlobeEngine` and the guide's `drawCalendar` figure. Its globe is an explicitly
  labelled sample of 6,000 real detections from 1 November 2026, rather than a live feed.
- `src/pages/presentation/study.json` is a checked-in snapshot of the four current regional files.
  The headline is the mean regional forward-test WAPE. `notes.ts` loads only in the presenter chunk.
  Slide 7 also includes northern Algeria as an additional validation check, using the study box
  from the app guide. The 7.8M detection total and headline scores still describe the original four regions.
  Slide 8 shows that northern-study result separately: forward WAPE of 34.2% for a fixed multiplier,
  17.5% for the ensemble, and 12.8% for the fire-strength curve. These guide-snapshot scores describe
  a different box from the current full-country `data/regions/algeria.json` dataset.
  The simple speaking script is about 230 words across all 15 slides, leaving time for pauses and
  interaction within five minutes. Each note fits its initial slide budget at 110 words per minute.
  Demo action cues are separate from the spoken script; sources stay available for questions.
- The presenter synchronizes through a per-presentation BroadcastChannel, with a storage-event fallback.
  Pop-ups must be allowed. A separate window or display keeps the notes out of the shared audience view.

The source bundle and `public/presentation/` assets ship through the existing Vite/Rust/Docker path.
Refresh `prebuilt/` after building when preparing a Docker release without the private UI-kit build secret.

## Front-end structure

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
