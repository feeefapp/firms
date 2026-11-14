/**
 * Dev-only stand-in for the Rust server (`FIRMS_MOCK=1 npm run dev`). It answers the routes of
 * docs/ARCHITECTURE.md from the seed files in `../data` with the same JSON shapes, so the SPA can
 * be built and checked before the server runs. Never bundled: only vite.config.ts imports it, and
 * only when the flag is set. The production code path always talks to the real API.
 */
import fs from 'node:fs'
import path from 'node:path'
import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Plugin } from 'vite'
import { agentMock } from './agent-mock'

type Json = Record<string, unknown>
type RegionFile = {
  name: string
  title: string
  title_en?: string
  country?: string
  bbox: number[]
  NM: number
  src: string
  series: Record<string, number[]>
  eval: Record<string, Record<string, number | number[]>>
  eval_months: number[]
  eval_aqua: number[]
  calib: { k_single: number; k_month: number[]; extra: number[]; rho_season: number[][] }
}

const Y0 = 2001
const ORDER = ['punjab', 'ssudan', 'portugal', 'bolivia', 'lebanon']
const EN: Record<string, string> = {
  punjab: 'Punjab, India',
  ssudan: 'South Sudan',
  portugal: 'Portugal',
  bolivia: 'Bolivia, Chiquitania',
  lebanon: 'Lebanon',
}
const ALGS: [string, string, string, string, string, [string, string] | null][] = [
  ['ensemble_adaptive', 'المزيج التكيّفي', 'Adaptive ensemble', 'متوسط نسبة شهرية ومنحنى FRP موسمي، يُعايَر على 2012–2021 مع وزن أكبر للسنوات الأحدث.', 'Average of a per-month ratio and a seasonal FRP curve, weighted toward recent years.', ['ensemble', 'forward_adaptive']],
  ['ensemble_geom_adaptive', 'المزيج التكيّفي + هندسة مدار Aqua', 'Adaptive ensemble + Aqua geometry', 'مثل السابق، ومنحنى FRP منفصل حسب حجم بكسل Aqua المتوقع.', 'Like the adaptive ensemble, with FRP curves by expected Aqua pixel size.', ['ensemble_geom', 'forward_adaptive']],
  ['ensemble', 'المزيج (معايرة ثابتة)', 'Ensemble (static)', 'نفس المزيج بأوزان متساوية لسنوات 2012–2021.', 'The same ensemble with equal weights for 2012–2021.', ['ensemble', 'forward']],
  ['frp_season_adaptive', 'منحنى FRP الموسمي', 'Seasonal FRP curve', 'احتمال أن يرى Aqua كل خلية حسب FRP والموسم.', 'Probability that Aqua sees each cell, by FRP and season.', ['frp_season', 'forward_adaptive']],
  ['ratio_month_adaptive', 'نسبة لكل شهر', 'Per-month ratio', 'نسبة Aqua ÷ S-NPP لكل شهر من السنة.', 'Aqua ÷ S-NPP ratio for each calendar month.', ['ratio_month', 'forward_adaptive']],
  ['ratio', 'نسبة ثابتة واحدة', 'Single fixed ratio', 'رقم واحد يُضرب فيه VIIRS دائماً.', 'One number VIIRS is always multiplied by.', ['ratio', 'forward']],
  ['naive', 'ربط مباشر (أيام حريق)', 'Naive splice (fire-days)', 'MODIS حتى 2011 ثم VIIRS كما هو.', 'MODIS until 2011, then VIIRS as is.', ['switch', 'loyo']],
  ['raw_rows', 'ربط مباشر (عدّ الأسطر)', 'Naive splice (raw rows)', 'عدّ كل أسطر FIRMS بالتكرار.', 'Counts every FIRMS row, duplicates included.', ['raw_switch', 'loyo']],
  ['aqua_only', 'Aqua وحده (مرجع)', 'Aqua only (reference)', 'قمر واحد طوال الفترة؛ ينجرف بعد 2021.', 'One satellite throughout; drifts after 2021.', null],
]

const ym = (m: number) => `${Y0 + Math.floor(m / 12)}-${String((m % 12) + 1).padStart(2, '0')}`
const parseYm = (s: string) => {
  const [y, mo] = s.split('-').map(Number)
  return (y - Y0) * 12 + (mo - 1)
}
const r1 = (x: number) => Math.round(x * 10) / 10
const fbin = (f: number) => Math.max(0, Math.min(23, Math.floor((Math.log10(Math.max(f, 0.05)) + 1.5) / 0.25)))

export function firmsMock(dataDir: string): Plugin {
  const regions = new Map<string, RegionFile>()
  const load = () => {
    for (const f of fs.readdirSync(path.join(dataDir, 'regions'))) {
      if (!f.endsWith('.json')) continue
      const r = JSON.parse(fs.readFileSync(path.join(dataDir, 'regions', f), 'utf8')) as RegionFile
      regions.set(r.name, r)
    }
  }
  load()
  const sorted = () => [...regions.values()].sort((a, b) => (ORDER.indexOf(a.name) + 1 || 99) - (ORDER.indexOf(b.name) + 1 || 99))
  let day: { raw: string; data: DayFile } | null = null
  const dayFile = () => {
    if (!day) {
      const dir = path.join(dataDir, 'day')
      const file = fs.readdirSync(dir).find((f) => f.endsWith('.js'))!
      const text = fs.readFileSync(path.join(dir, file), 'utf8')
      const raw = text.slice(text.indexOf('=') + 1).trim().replace(/;$/, '')
      day = { raw, data: JSON.parse(raw) }
    }
    return day
  }
  const keys: { id: string; name: string; prefix: string; created_at: string; last_used_at: string | null }[] = []
  const jobs = new Map<string, { id: string; status: string; polls: number; body: Json; log: string[]; result: Json | null }>()

  const errorOf = (r: RegionFile, alg: string) => {
    const a = ALGS.find((x) => x[0] === alg)
    if (!a || !a[5]) return null
    const v = r.eval[a[5][0]]?.[a[5][1]]
    return typeof v === 'number' ? { test: a[5][1], pct: v } : null
  }
  const fireLevel = (r: RegionFile) => {
    const mean = r.eval_aqua.reduce((s, v) => s + v, 0) / Math.max(1, r.eval_aqua.length)
    return mean < 150 ? 'low' : mean < 1000 ? 'medium' : 'high'
  }
  const summary = (r: RegionFile) => ({
    name: r.name,
    title: r.title,
    title_en: r.title_en ?? EN[r.name] ?? r.name,
    country: r.country ?? null,
    bbox: r.bbox,
    nm: r.NM,
    start: '2001-01',
    end: ym(r.NM - 1),
    fire_level: fireLevel(r),
    eval: Object.fromEntries(ALGS.map((a) => [a[0], errorOf(r, a[0])?.pct]).filter((e) => e[1] != null)),
  })
  const window = (r: RegionFile, from?: string | null, to?: string | null) => {
    const last = r.NM - 1
    const b = to ? Math.min(parseYm(to), last) : last
    const a = from ? Math.max(parseYm(from), 0) : Math.max(0, b - 11)
    return [a, b] as const
  }
  const baseline = (arr: number[], kind: string) =>
    Array.from({ length: 12 }, (_, c) => {
      const xs: number[] = []
      for (let y = 2003; y <= 2022; y++) {
        const v = arr[(y - Y0) * 12 + c]
        if (v != null) xs.push(v)
      }
      xs.sort((p, q) => p - q)
      if (!xs.length) return 0
      return kind === 'mean' ? xs.reduce((s, v) => s + v, 0) / xs.length : (xs[(xs.length - 1) >> 1] + xs[xs.length >> 1]) / 2
    })

  const calendar = (r: RegionFile, q: URLSearchParams) => {
    const alg = q.get('algorithm') || 'ensemble_adaptive'
    const kind = q.get('baseline') || 'median'
    const arr = r.series[alg]
    if (!arr) throw new HttpError(400, `unknown algorithm "${alg}"`)
    const [m0, m1] = window(r, q.get('from'), q.get('to'))
    const base = baseline(arr, kind)
    const an = (v: number, b: number) => (b > 0 ? r1((v / b - 1) * 100) : null)
    const months = []
    const byYear = new Map<number, [number, number]>()
    for (let m = m0; m <= m1; m++) {
      months.push({ ym: ym(m), value: arr[m], baseline: r1(base[m % 12]), anomaly_pct: an(arr[m], base[m % 12]), source: r.src[m] ?? '?' })
      const y = Y0 + Math.floor(m / 12)
      const e = byYear.get(y) ?? [0, 0]
      byYear.set(y, [e[0] + arr[m], e[1] + 1])
    }
    const years = [...byYear].map(([year, [t, n]]) => ({ year, total: r1(t), complete: n === 12 }))
    let peak = m0
    for (let m = m0; m <= m1; m++) if (arr[m] > arr[peak]) peak = m
    const full = years.filter((y) => y.complete).sort((a, b) => b.total - a.total)[0]
    const same: number[] = []
    for (let mm = m1 % 12; mm < r.NM; mm += 12) same.push(arr[mm])
    return {
      region: r.name,
      algorithm: alg,
      baseline_kind: kind,
      baseline_years: [2003, 2022],
      from: ym(m0),
      to: ym(m1),
      months,
      years,
      summary: {
        total: r1(months.reduce((s, m) => s + m.value, 0)),
        peak: { ym: ym(peak), value: arr[peak] },
        top_year: full ? { year: full.year, total: full.total } : null,
        extreme_months: months.filter((m) => m.baseline > 0 && m.value > 1.5 * m.baseline).length,
        latest: { ym: ym(m1), value: arr[m1], baseline: r1(base[m1 % 12]), anomaly_pct: an(arr[m1], base[m1 % 12]), rank: same.filter((v) => v > arr[m1]).length + 1, of: same.length },
      },
      error: errorOf(r, alg),
    }
  }

  const compare = (r: RegionFile, q: URLSearchParams) => {
    const [m0, m1] = window(r, q.get('from'), q.get('to'))
    const algs = (q.get('algorithms') || 'ensemble_adaptive,ratio,naive,aqua_only').split(',').filter(Boolean)
    const years: number[] = []
    for (let y = Y0 + Math.floor(m0 / 12); y <= Y0 + Math.floor(m1 / 12); y++) years.push(y)
    const series: Json = {}
    const evalOut: Json = {}
    const heldout: Json = { months: r.eval_months.map(ym), aqua: r.eval_aqua }
    for (const key of algs) {
      const arr = r.series[key]
      if (!arr) throw new HttpError(400, `unknown algorithm "${key}"`)
      series[key] = years.map((y) => {
        const ys = (y - Y0) * 12
        let s = 0
        for (let m = Math.max(ys, m0); m <= Math.min(ys + 11, m1); m++) s += arr[m]
        return r1(s)
      })
      const a = ALGS.find((x) => x[0] === key)!
      const ev = a[5] ? r.eval[a[5][0]] : undefined
      evalOut[key] = { method: a[5]?.[0] ?? null, test: a[5]?.[1] ?? null, pct: errorOf(r, key)?.pct ?? null, loyo: ev?.loyo ?? null, forward: ev?.forward ?? null, forward_adaptive: ev?.forward_adaptive ?? null }
      if (ev?.loyo_monthly) heldout[key] = ev.loyo_monthly
    }
    const complete = years.map((y) => (y - Y0) * 12 >= m0 && (y - Y0) * 12 + 11 <= m1)
    return { region: r.name, from: ym(m0), to: ym(m1), years, complete, series, eval: evalOut, heldout }
  }

  const inBox = (bb: number[]) => (lat: number, lon: number) => lat >= bb[1] && lat <= bb[3] && lon >= bb[0] && lon <= bb[2]
  const parseBbox = (s: string | null) => {
    const v = (s ?? '').split(',').map(Number)
    if (v.length !== 4 || v.some((x) => !Number.isFinite(x)) || v[0] >= v[2] || v[1] >= v[3]) throw new HttpError(400, 'bbox must be W,S,E,N')
    return v
  }

  const hotspots = (q: URLSearchParams) => {
    const bb = q.get('bbox') ? parseBbox(q.get('bbox')) : regions.get(q.get('region') || '')?.bbox
    if (!bb) throw new HttpError(400, 'bbox or region is required')
    const { data } = dayFile()
    const C = data.cols
    const sources = (q.get('sources') || '').split(',').filter(Boolean)
    const minConf = Number(q.get('min_conf') || 0)
    const minFrp = Number(q.get('min_frp') || 0)
    const keep = inBox(bb)
    const srcOf = (s: DaySat) => (s.code === 'T' || s.code === 'A' ? 'MODIS_NRT' : s.code === 'N' ? 'VIIRS_SNPP_NRT' : s.code === 'N20' ? 'VIIRS_NOAA20_NRT' : s.code === 'N21' ? 'VIIRS_NOAA21_NRT' : null)
    const rows: Json[] = []
    for (let i = 0; i < C.lat.length; i++) {
      const s = data.sats[C.sat[i]]
      const src = srcOf(s)
      if (!src || (sources.length && !sources.includes(src))) continue
      if (!keep(C.lat[i], C.lon[i]) || C.conf[i] < minConf || (C.frp[i] ?? 0) < minFrp) continue
      const t = new Date(C.t[i] * 1000).toISOString()
      rows.push({
        latitude: C.lat[i], longitude: C.lon[i], acq_date: t.slice(0, 10), acq_time: t.slice(11, 16).replace(':', ''),
        satellite: s.code, source: src,
        confidence: C.conf[i], confidence_raw: s.conf === 'pct' ? String(C.craw[i]) : ['l', 'n', 'h'][C.conf[i]],
        frp: C.frp[i], daynight: C.dn[i] ? 'N' : 'D', scan: C.scan[i], track: C.track[i],
      })
    }
    return { bbox: bb, date: q.get('date') || data.window[0], days: Number(q.get('days') || 1), count: rows.length, rows }
  }

  const live = (q: URLSearchParams) => {
    const bb = parseBbox(q.get('bbox'))
    const { data } = dayFile()
    const C = data.cols
    const keep = inBox(bb)
    const per = new Map<number, Map<string, number>>()
    const rows = new Map<number, number>()
    for (let i = 0; i < C.lat.length; i++) {
      const la = C.lat[i], lo = C.lon[i]
      if (!keep(la, lo)) continue
      const si = C.sat[i], s = data.sats[si]
      rows.set(si, (rows.get(si) ?? 0) + 1)
      if (s.system === 0 && !(C.craw[i] >= 30)) continue
      if (s.system === 1 && C.conf[i] < 1) continue
      if (s.system > 1) continue
      const d = Math.floor((C.t[i] + (lo / 15) * 3600) / 86400)
      const key = `${d}:${Math.floor(la / 0.02)}:${Math.floor(lo / 0.02)}`
      const m = per.get(si) ?? new Map()
      m.set(key, (m.get(key) ?? 0) + (C.frp[i] ?? 0))
      per.set(si, m)
    }
    const containing = sorted().filter((r) => r.bbox[0] <= bb[0] && r.bbox[1] <= bb[1] && r.bbox[2] >= bb[2] && r.bbox[3] >= bb[3])
    const region = containing[0] ?? null
    const P = (region ?? sorted()[0]).calib
    const month = new Date(data.window[0]).getUTCMonth()
    const satellites = [...rows].map(([si, n]) => ({ code: data.sats[si].code, name: data.sats[si].name, system: data.sats[si].system, rows: n, fire_day_cells: per.get(si)?.size ?? null }))
    const conversions = ['N', 'N20', 'N21'].flatMap((code) => {
      const si = data.sats.findIndex((s) => s.code === code)
      const cells = per.get(si)
      if (!cells) return []
      const C2 = cells.size
      let frp = 0
      for (const v of cells.values()) frp += P.rho_season[Math.floor(month / 3)][fbin(v)]
      frp += P.extra[month] * C2
      const rm = P.k_month[month] * C2
      return [{ code, name: data.sats[si].name, cells: C2, ratio: r1(P.k_single * C2), ratio_month: r1(rm), frp_season: r1(frp), ensemble: r1((frp + rm) / 2) }]
    })
    const ai = data.sats.findIndex((s) => s.code === 'A')
    return {
      date: data.window[0], bbox: bb, month: month + 1,
      calibration: region ? { kind: 'region', region: region.name, title: region.title } : { kind: 'global', region: null, title: null },
      satellites, conversions, aqua: { fire_day_cells: per.get(ai)?.size ?? 0, overpass_local: '15:15' },
    }
  }

  const agent = (res: ServerResponse, body: Json) => {
    res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-cache', connection: 'keep-alive' })
    const send = (event: string, data: unknown) => res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`)
    const messages = (body.messages as { role: string; content: string }[]) ?? []
    const text = (messages[messages.length - 1]?.content ?? '').toLowerCase()
    const apply: Json = {}
    for (const r of sorted()) if (text.includes(r.name) || text.includes(r.title.split('،')[0]) || text.includes((EN[r.name] ?? '').toLowerCase().split(',')[0])) apply.region = r.name
    const years = text.match(/(?:last|آخر)\s*(\d+)\s*(?:years|سنوات|سنة)/)
    const months = text.match(/(?:last|آخر)\s*(\d+)\s*(?:months|أشهر|شهر)/)
    const region = regions.get((apply.region as string) || (body.context as Json)?.region as string || 'punjab') ?? sorted()[0]
    const end = region.NM - 1
    if (years) { apply.from = ym(Math.max(0, end - Number(years[1]) * 12 + 1)); apply.to = ym(end) }
    if (months) { apply.from = ym(Math.max(0, end - Number(months[1]) + 1)); apply.to = ym(end) }
    const yr = text.match(/\b(20\d\d)\b/)
    if (yr && !years && !months) { apply.from = `${yr[1]}-01`; apply.to = `${yr[1]}-12` }
    if (/anomal|شذوذ/.test(text)) apply.view = 'anomaly'
    if (/globe|الكرة/.test(text)) apply.page = 'globe'
    else if (/compare|مقارنة/.test(text)) apply.page = 'compare'
    else apply.page = 'overview'
    const steps = [
      () => send('tool_call', { id: 't1', name: 'get_calendar', arguments: { region: region.name, from: apply.from, to: apply.to } }),
      () => send('tool_result', { id: 't1', name: 'get_calendar', ok: true, summary: `${region.title}: ${calendar(region, new URLSearchParams({ ...(apply.from ? { from: String(apply.from), to: String(apply.to) } : {}) })).summary.total} fire-days` }),
      () => send('apply', apply),
      () => send('text', { delta: 'AI is unavailable in the mock, so I used the simple parser. ' }),
      () => send('text', { delta: `I set the region to ${region.title}${apply.from ? ` from ${apply.from} to ${apply.to}` : ''}.` }),
      () => { send('done', {}); res.end() },
    ]
    steps.forEach((step, i) => setTimeout(step, 250 * (i + 1)))
  }

  const agent2 = agentMock({
    regions: () => sorted().map((r) => ({ name: r.name, title: r.title, title_en: r.title_en ?? EN[r.name] ?? r.name, bbox: r.bbox, nm: r.NM })),
    calendar: (name, q) => calendar(regions.get(name)!, new URLSearchParams(q)),
    hotspots: (q) => hotspots(new URLSearchParams(q)),
  })

  const handle = async (req: IncomingMessage, res: ServerResponse): Promise<boolean> => {
    const url = new URL(req.url ?? '/', 'http://localhost')
    const p = url.pathname
    const q = url.searchParams
    const signedIn = /firms_mock_session=1/.test(req.headers.cookie ?? '')
    const json = (value: unknown, status = 200) => {
      res.writeHead(status, { 'content-type': 'application/json' })
      res.end(JSON.stringify(value))
      return true
    }
    const readBody = () =>
      new Promise<Json>((resolve) => {
        let s = ''
        req.on('data', (c) => (s += c))
        req.on('end', () => resolve(s ? (JSON.parse(s) as Json) : {}))
      })
    const needAuth = () => (signedIn ? false : json({ error: 'sign in with feeef first' }, 401))
    try {
      if (p === '/healthz') return json({ ok: true, mock: true })
      if (p === '/auth/feeef/login') {
        res.writeHead(302, { 'set-cookie': 'firms_mock_session=1; Path=/; SameSite=Lax', location: q.get('next') || '/' })
        res.end()
        return true
      }
      if (p === '/auth/logout' && req.method === 'POST') {
        res.writeHead(204, { 'set-cookie': 'firms_mock_session=; Path=/; Max-Age=0' })
        res.end()
        return true
      }
      if (!p.startsWith('/api/')) return false
      await new Promise((ok) => setTimeout(ok, 120))
      if (p === '/api/me') return json({ user: signedIn ? { id: 'mock', name: 'Mock user', email: 'mock@example.com', photoUrl: null } : null })
      if (p === '/api/algorithms')
        return json(ALGS.map(([key, ar, en, dar, den, ev]) => ({ key, name: { ar, en }, description: { ar: dar, en: den }, recommended: key === 'ensemble_adaptive', eval: ev ? { test: ev[1], key: ev[0] } : null })))
      if (p === '/api/regions' && req.method === 'GET') return json(sorted().map(summary))
      if (p === '/api/regions' && req.method === 'POST') {
        if (needAuth()) return true
        const body = await readBody()
        const name = String(body.name ?? '')
        if (!/^[a-z][a-z0-9_]{1,31}$/.test(name)) return json({ error: 'name must be lowercase letters, digits or _' }, 400)
        if (regions.has(name)) return json({ error: `region "${name}" already exists` }, 409)
        const id = `job_${Date.now().toString(36)}`
        jobs.set(id, { id, status: 'queued', polls: 0, body, log: [], result: null })
        return json({ job: { id, status: 'queued' } }, 202)
      }
      const regionMatch = /^\/api\/regions\/([^/]+)$/.exec(p)
      if (regionMatch) {
        const reg = regions.get(decodeURIComponent(regionMatch[1]))
        return reg ? json(reg) : json({ error: 'unknown region' }, 404)
      }
      const jobMatch = /^\/api\/jobs\/([^/]+)$/.exec(p)
      if (jobMatch) {
        const job = jobs.get(jobMatch[1])
        if (!job) return json({ error: 'unknown job' }, 404)
        job.polls++
        const lines = ['downloading FIRMS archive (MODIS 2001–2026)…', 'downloading VIIRS S-NPP 2012–2026…', 'building fire-day cells…', 'calibrating (forward, adaptive)…', 'evaluating 9 algorithms…', 'writing region file']
        job.log = lines.slice(0, Math.min(lines.length, job.polls))
        job.status = job.polls < 2 ? 'queued' : job.polls < lines.length + 1 ? 'running' : 'done'
        if (job.status === 'done' && !job.result) {
          const base = regions.get('lebanon')!
          const b = job.body
          regions.set(String(b.name), { ...base, name: String(b.name), title: String(b.title || b.name), title_en: String(b.title || b.name), country: String(b.country ?? ''), bbox: (b.bbox as number[]) ?? base.bbox })
          job.result = { region: b.name }
        }
        return json({ id: job.id, status: job.status, log_tail: job.log.join('\n'), result: job.result })
      }
      if (p === '/api/calendar' || p === '/api/compare') {
        const reg = regions.get(q.get('region') || '')
        if (!reg) return json({ error: 'unknown region' }, 404)
        return json(p === '/api/calendar' ? calendar(reg, q) : compare(reg, q))
      }
      if (p === '/api/benchmark') return json(JSON.parse(fs.readFileSync(path.join(dataDir, 'benchmark.json'), 'utf8')))
      if (p === '/api/hotspots') {
        const out = hotspots(q)
        if (q.get('format') === 'csv') {
          const cols = ['source', 'satellite', 'latitude', 'longitude', 'acq_date', 'acq_time', 'frp', 'confidence', 'confidence_raw', 'daynight', 'scan', 'track']
          res.writeHead(200, { 'content-type': 'text/csv', 'content-disposition': 'attachment; filename="hotspots.csv"' })
          res.end([cols.join(','), ...out.rows.map((row) => cols.map((c) => row[c] ?? '').join(','))].join('\n'))
          return true
        }
        return json(out)
      }
      if (p === '/api/live') return json(live(q))
      if (p === '/api/day') {
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(dayFile().raw)
        return true
      }
      if (p === '/api/keys') {
        if (needAuth()) return true
        if (req.method === 'GET') return json(keys)
        if (req.method === 'POST') {
          const body = await readBody()
          const secret = `firms_${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}`
          const key = { id: `key_${Date.now().toString(36)}`, name: String(body.name || 'API key'), prefix: secret.slice(0, 12), created_at: new Date().toISOString(), last_used_at: null }
          keys.unshift(key)
          return json({ key, secret }, 201)
        }
      }
      const keyMatch = /^\/api\/keys\/([^/]+)$/.exec(p)
      if (keyMatch && req.method === 'DELETE') {
        if (needAuth()) return true
        const i = keys.findIndex((k) => k.id === keyMatch[1])
        if (i >= 0) keys.splice(i, 1)
        res.writeHead(204)
        res.end()
        return true
      }
      if (p.startsWith('/api/ai/') || p.startsWith('/api/agent/') || p.startsWith('/api/mcp/')) {
        if (needAuth()) return true
        return agent2.handle(req, res, p, q, readBody, json)
      }
      if (p === '/api/agent' && req.method === 'POST') {
        if (needAuth()) return true
        agent(res, await readBody())
        return true
      }
      return json({ error: 'not found in mock' }, 404)
    } catch (error) {
      if (error instanceof HttpError) return json({ error: error.message }, error.status)
      return json({ error: String(error) }, 500)
    }
  }

  return {
    name: 'firms-dev-mock',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        handle(req, res).then((done) => (done ? undefined : next()), next)
      })
    },
  }
}

class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message)
  }
}

type DaySat = { code: string; name: string; system: number; instrument: string; conf: string }
type DayFile = {
  window: [string, number]
  sats: DaySat[]
  cols: { lat: number[]; lon: number[]; t: number[]; sat: number[]; conf: number[]; craw: number[]; frp: (number | null)[]; dn: number[]; scan: number[]; track: number[] }
}
