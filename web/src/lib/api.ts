/**
 * The Firms JSON API (docs/ARCHITECTURE.md). Same-origin fetches with the session cookie; unsafe
 * methods carry the page's Origin automatically (the server's CSRF check). Shapes follow the
 * server; normalizers keep the UI calm if an optional field is missing.
 */

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message)
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let response: Response
  try {
    response = await fetch(path, {
      credentials: 'same-origin',
      ...init,
      headers: { accept: 'application/json', ...(init?.body ? { 'content-type': 'application/json' } : {}), ...init?.headers },
    })
  } catch {
    throw new ApiError(0, 'network')
  }
  if (response.status === 204) return undefined as T
  const text = await response.text()
  let body: unknown = null
  try {
    body = text ? JSON.parse(text) : null
  } catch {
    body = text
  }
  if (!response.ok) {
    const message =
      (body && typeof body === 'object' && ('error' in body || 'message' in body)
        ? String((body as { error?: unknown; message?: unknown }).error ?? (body as { message?: unknown }).message)
        : typeof body === 'string' && body.length < 200
          ? body
          : '') || `HTTP ${response.status}`
    throw new ApiError(response.status, message)
  }
  return body as T
}

export const get = <T>(path: string, signal?: AbortSignal) => request<T>(path, { signal })
const send = <T>(method: string, path: string, body?: unknown) =>
  request<T>(path, { method, body: body === undefined ? undefined : JSON.stringify(body) })

/** Builds `path?k=v` skipping empty values. */
export function withQuery(path: string, query: Record<string, string | number | null | undefined>): string {
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(query)) if (value != null && value !== '') params.set(key, String(value))
  const qs = params.toString()
  return qs ? `${path}?${qs}` : path
}

// ---------------------------------------------------------------- types

export type User = { id: string; name?: string | null; email?: string | null; photoUrl?: string | null }
export type Localized = { ar?: string; en?: string }

export type AlgorithmKey =
  | 'ensemble_adaptive'
  | 'ensemble_geom_adaptive'
  | 'ensemble'
  | 'frp_season_adaptive'
  | 'ratio_month_adaptive'
  | 'ratio'
  | 'naive'
  | 'raw_rows'
  | 'aqua_only'

export type Algorithm = {
  key: string
  name: Localized
  description: Localized
  recommended: boolean
  eval: { test: string; key: string } | null
}

export type FireLevel = 'low' | 'medium' | 'high'

export type RegionSummary = {
  name: string
  title: string
  title_en?: string | null
  country?: string | null
  bbox: [number, number, number, number]
  nm: number
  start: string
  end?: string
  fire_level: FireLevel
  /** Measured monthly error (%) per algorithm key. */
  eval: Record<string, number>
}

export type CalendarMonth = { ym: string; value: number; baseline: number; anomaly_pct: number | null; source: string }
export type CalendarYear = { year: number; total: number; complete: boolean }
export type Calendar = {
  region: string
  algorithm: string
  baseline_kind: 'median' | 'mean'
  from: string
  to: string
  months: CalendarMonth[]
  years: CalendarYear[]
  summary: {
    total: number
    peak: { ym: string; value: number }
    top_year: { year: number; total: number } | null
    extreme_months: number
    latest: { ym: string; value: number; baseline: number; anomaly_pct: number | null; rank: number; of: number }
  }
  error: { test: string; pct: number } | null
}

export type CompareEval = {
  method: string | null
  test: string | null
  pct: number | null
  loyo: number | null
  forward: number | null
  forward_adaptive: number | null
}
export type Compare = {
  region: string
  from: string
  to: string
  years: number[]
  complete?: boolean[]
  series: Record<string, number[]>
  eval: Record<string, CompareEval>
  /** `months` (YYYY-MM), `aqua` (actual), and one held-out prediction series per algorithm key. */
  heldout: { months: string[]; aqua: number[] } & Record<string, unknown>
}

export type Benchmark = {
  rows: { k: string; name: string; loyo: Record<string, number> | null; fw: Record<string, number> | null }[]
  raw: Record<string, [number, number]>
  order: string[]
  short: Record<string, string>
  dual?: Record<string, Record<string, number>>
  energy?: Record<string, Record<string, number | string>>
}

export type HotspotRow = Record<string, string | number | null>
export type Hotspots = { rows: HotspotRow[]; count?: number; bbox?: number[]; date?: string; days?: number }

export type LiveSatellite = { code: string; name: string; system?: number; rows: number; fire_day_cells: number | null }
export type LiveConversion = { code: string; name: string; cells: number; ratio: number; ratio_month: number; frp_season: number; ensemble: number }
export type Live = {
  date: string
  bbox: number[]
  month?: number
  calibration: { kind: 'region' | 'global' | string; region: string | null; title: string | null }
  satellites: LiveSatellite[]
  conversions: LiveConversion[]
  aqua: { fire_day_cells: number; overpass_local?: string }
}

export type Job = { id: string; status: 'queued' | 'running' | 'done' | 'failed'; log_tail?: string; result?: unknown }
export type ApiKey = { id: string; name: string; prefix?: string; created_at?: string; last_used_at?: string | null }

// ---------------------------------------------------------------- normalizers

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : {}
}
const num = (v: unknown): number | null => (typeof v === 'number' && Number.isFinite(v) ? v : typeof v === 'string' && v.trim() && Number.isFinite(Number(v)) ? Number(v) : null)

/** Accepts `[{code,…}]` or `{ code: {…} }`. */
function listOf<T extends { code: string }>(value: unknown): T[] {
  if (Array.isArray(value)) return value as T[]
  return Object.entries(asRecord(value)).map(([code, v]) => ({ code, ...asRecord(v) }) as unknown as T)
}

export function normalizeLive(raw: unknown): Live {
  const r = asRecord(raw)
  const cal = asRecord(r.calibration)
  const aqua = asRecord(r.aqua)
  return {
    date: String(r.date ?? ''),
    bbox: Array.isArray(r.bbox) ? (r.bbox as number[]) : [],
    month: num(r.month) ?? undefined,
    calibration: {
      kind: String(cal.kind ?? (cal.region || r.region ? 'region' : 'global')),
      region: (cal.region as string) ?? (r.region as string) ?? null,
      title: (cal.title as string) ?? null,
    },
    satellites: listOf<LiveSatellite>(r.satellites ?? r.per_satellite).map((s) => ({
      ...s,
      name: String(s.name ?? s.code),
      rows: num(s.rows) ?? 0,
      fire_day_cells: num(s.fire_day_cells ?? (s as Record<string, unknown>).cells),
    })),
    conversions: listOf<LiveConversion>(r.conversions ?? r.viirs).map((c) => ({
      ...c,
      name: String(c.name ?? c.code),
      cells: num(c.cells ?? (c as Record<string, unknown>).fire_day_cells) ?? 0,
      ratio: num(c.ratio) ?? 0,
      ratio_month: num(c.ratio_month) ?? 0,
      frp_season: num(c.frp_season ?? (c as Record<string, unknown>).frp) ?? 0,
      ensemble: num(c.ensemble) ?? 0,
    })),
    aqua: { fire_day_cells: num(aqua.fire_day_cells ?? aqua.cells) ?? 0, overpass_local: (aqua.overpass_local as string) ?? undefined },
  }
}

export function normalizeHotspots(raw: unknown): Hotspots {
  if (Array.isArray(raw)) return { rows: raw as HotspotRow[], count: raw.length }
  const r = asRecord(raw)
  const rows = Array.isArray(r.rows) ? (r.rows as HotspotRow[]) : []
  return { ...r, rows, count: num(r.count) ?? rows.length } as Hotspots
}

/** Held-out predictions of one algorithm, whatever key form the server used. */
export function heldoutSeries(compare: Compare, alg: string, method?: string | null): number[] | null {
  const h = compare.heldout as Record<string, unknown>
  const pickArr = (v: unknown) => (Array.isArray(v) && v.every((x) => typeof x === 'number') ? (v as number[]) : null)
  return pickArr(h[alg]) ?? (method ? pickArr(h[method]) : null) ?? pickArr(asRecord(h.alg)[alg]) ?? null
}

// ---------------------------------------------------------------- calls

export const api = {
  me: () => get<{ user: User | null }>('/api/me'),
  algorithms: () => get<Algorithm[]>('/api/algorithms'),
  regions: () => get<RegionSummary[]>('/api/regions'),
  calendar: (q: { region: string; from?: string; to?: string; algorithm?: string; baseline?: string }, signal?: AbortSignal) =>
    get<Calendar>(withQuery('/api/calendar', q), signal),
  compare: (q: { region: string; from?: string; to?: string; algorithms: string }, signal?: AbortSignal) =>
    get<Compare>(withQuery('/api/compare', q), signal),
  benchmark: () => get<Benchmark>('/api/benchmark'),
  hotspots: async (q: HotspotQuery, signal?: AbortSignal) => normalizeHotspots(await get<unknown>(withQuery('/api/hotspots', { ...q, format: 'json' }), signal)),
  hotspotsCsvUrl: (q: HotspotQuery) => withQuery('/api/hotspots', { ...q, format: 'csv' }),
  live: async (q: { bbox: string; date?: string }, signal?: AbortSignal) => normalizeLive(await get<unknown>(withQuery('/api/live', q), signal)),
  dayUrl: (date?: string) => withQuery('/api/day', { date }),
  addRegion: (body: { name: string; title: string; country: string; bbox: number[] }) => send<{ job: Job | string }>('POST', '/api/regions', body),
  job: (id: string) => get<Job>(`/api/jobs/${encodeURIComponent(id)}`),
  keys: async () => {
    const raw = await get<unknown>('/api/keys')
    return (Array.isArray(raw) ? raw : (asRecord(raw).keys as ApiKey[]) ?? []) as ApiKey[]
  },
  createKey: (name: string) => send<{ key?: ApiKey; secret?: string; token?: string } & Partial<ApiKey>>('POST', '/api/keys', { name }),
  deleteKey: (id: string) => send<void>('DELETE', `/api/keys/${encodeURIComponent(id)}`),
  logout: () => send<void>('POST', '/auth/logout'),
}

export type HotspotQuery = {
  bbox?: string
  region?: string
  date?: string
  days?: number
  sources?: string
  min_conf?: number
  min_frp?: number
}

export function loginUrl(next: string): string {
  return withQuery('/auth/feeef/login', { next })
}
