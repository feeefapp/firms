import { useMemo, type ReactNode } from 'react'
import { ArrowUpRight, CalendarDays, Flame, GitCompareArrows, ListOrdered, MapPinned, TrendingUp } from 'lucide-react'
import { Button } from '@feeef.dev/ui/primitives/button'
import { useSession } from '@/app/session'
import { CalendarHeatmap } from '@/components/charts/calendar-heatmap'
import { LineChart } from '@/components/charts/line-chart'
import { useWidth } from '@/components/charts/use-width'
import { algorithmInfo, regionTitle } from '@/lib/algorithms'
import type { CalendarMonth, CalendarYear } from '@/lib/api'
import { algColor, diverging } from '@/lib/colors'
import { formatDate, formatNumber, formatPct, formatYm } from '@/lib/format'
import { dir, t } from '@/i18n/locale'
import type { FirmsCard, FirmsView } from './types'

/**
 * `data-firms-card` results: small, readable versions of the app's own views, each with "Open in
 * Firms" that applies the same view to the page. Shapes are read tolerantly (the tool outputs
 * evolve); anything unreadable falls back to nothing rather than a broken card.
 */

type Rec = Record<string, unknown>
const rec = (v: unknown): Rec => (v && typeof v === 'object' && !Array.isArray(v) ? (v as Rec) : {})
const arr = (v: unknown): unknown[] => (Array.isArray(v) ? v : [])
const num = (v: unknown): number | null => (typeof v === 'number' && Number.isFinite(v) ? v : typeof v === 'string' && v.trim() && Number.isFinite(Number(v)) ? Number(v) : null)
const str = (v: unknown): string | null => (typeof v === 'string' && v ? v : null)
const YM = /^\d{4}-\d{2}$/

function useRegionName() {
  const { regions } = useSession()
  return (name: string | null | undefined, fallback?: string | null) => {
    if (!name) return fallback ?? ''
    const region = regions.find((r) => r.name === name)
    return region ? regionTitle(region) : (fallback ?? name)
  }
}

function CardFrame({ icon, title, subtitle, view, onOpen, children, footer }: { icon: ReactNode; title: string; subtitle?: string; view: FirmsView | null; onOpen: (view: FirmsView) => void; children: ReactNode; footer?: ReactNode }) {
  return (
    <section className="fm-card" data-lab-corners aria-label={title}>
      <header className="fm-card-head">
        <span className="fm-card-icon" aria-hidden>
          {icon}
        </span>
        <div>
          <h3 dir="auto">{title}</h3>
          {subtitle ? <p dir="auto">{subtitle}</p> : null}
        </div>
      </header>
      <div className="fm-card-body">{children}</div>
      {footer || view ? (
        <footer className="fm-card-foot">
          {footer}
          {view ? (
            <Button variant="tonal" controlSize="small" onClick={() => onOpen(view)}>
              <ArrowUpRight size={16} aria-hidden className="lab-dir-flip" />
              {t('m.chat.card.open')}
            </Button>
          ) : null}
        </footer>
      ) : null}
    </section>
  )
}

const period = (from?: string | null, to?: string | null) => (from || to ? `${formatYm(from)} → ${formatYm(to)}` : '')

// ------------------------------------------------------------------ calendar

function CalendarCard({ card, onOpen }: { card: FirmsCard; onOpen: (v: FirmsView) => void }) {
  const name = useRegionName()
  const d = rec(card.data)
  const all = arr(d.months)
    .map((m) => rec(m))
    .filter((m) => typeof m.ym === 'string' && num(m.value) !== null)
    .map((m) => ({ ym: String(m.ym), value: num(m.value)!, baseline: num(m.baseline) ?? 0, anomaly_pct: num(m.anomaly_pct), source: str(m.source) ?? '?' }) satisfies CalendarMonth)
  if (!all.length) return null
  // A mini calendar: the last six years at most; "Open in Firms" shows all of it.
  const lastYear = Number(all[all.length - 1].ym.slice(0, 4))
  const months = all.filter((m) => Number(m.ym.slice(0, 4)) > lastYear - 6)
  const years: CalendarYear[] = arr(d.years).length
    ? arr(d.years).map((y) => rec(y)).filter((y) => num(y.year) !== null && num(y.year)! > lastYear - 6).map((y) => ({ year: num(y.year)!, total: num(y.total) ?? 0, complete: y.complete !== false }))
    : [...new Set(months.map((m) => Number(m.ym.slice(0, 4))))].map((year) => {
        const ms = months.filter((m) => m.ym.startsWith(`${year}-`))
        return { year, total: ms.reduce((s, m) => s + m.value, 0), complete: ms.length === 12 }
      })
  const region = str(d.region)
  const viewKind = card.view?.view === 'anomaly' || d.view === 'anomaly' ? 'anomaly' : 'count'
  const summary = rec(d.summary)
  const latest = rec(summary.latest)
  const peak = rec(summary.peak)
  const view: FirmsView = card.view ?? { page: 'overview', region: region ?? undefined, from: str(d.from) ?? all[0].ym, to: str(d.to) ?? all[all.length - 1].ym, algorithm: str(d.algorithm) ?? undefined, view: viewKind }
  const title = card.title || t('m.chat.card.calendar', { region: name(region, str(d.title)) })
  return (
    <CardFrame icon={<CalendarDays size={18} />} title={title} subtitle={period(str(d.from) ?? all[0].ym, str(d.to) ?? all[all.length - 1].ym)} view={view} onOpen={onOpen}>
      <dl className="fm-card-facts">
        {num(summary.total) !== null ? (
          <div>
            <dt>{t('m.chat.card.total')}</dt>
            <dd>{formatNumber(num(summary.total))}</dd>
          </div>
        ) : null}
        {typeof peak.ym === 'string' ? (
          <div>
            <dt>{t('m.chat.card.peak')}</dt>
            <dd>
              {formatYm(peak.ym)} · {formatNumber(num(peak.value))}
            </dd>
          </div>
        ) : null}
        {typeof latest.ym === 'string' ? (
          <div>
            <dt>{t('m.chat.card.latest')}</dt>
            <dd>
              {formatYm(latest.ym)} · {formatPct(num(latest.anomaly_pct))}
            </dd>
          </div>
        ) : null}
      </dl>
      <CalendarHeatmap months={months} years={years} view={viewKind} cmap="cividis" baselineLabel={t('m.baseline.medianShort')} label={title} />
    </CardFrame>
  )
}

// ------------------------------------------------------------------ anomalies

function AnomaliesCard({ card, onOpen }: { card: FirmsCard; onOpen: (v: FirmsView) => void }) {
  const name = useRegionName()
  const d = rec(card.data)
  const rows = arr(d.months ?? d.items ?? d.anomalies)
    .map((m) => rec(m))
    .map((m) => ({ ym: str(m.ym) ?? str(m.month) ?? '', value: num(m.value), baseline: num(m.baseline), pct: num(m.anomaly_pct ?? m.pct), region: str(m.region) }))
    .filter((m) => YM.test(m.ym))
  const region = str(d.region)
  const sorted = [...rows].map((r) => r.ym).sort()
  const view: FirmsView = card.view ?? { page: 'overview', region: region ?? undefined, from: sorted[0], to: sorted[sorted.length - 1], view: 'anomaly' }
  const threshold = num(d.threshold_pct ?? d.threshold)
  const max = Math.max(1, ...rows.map((r) => Math.abs(r.pct ?? 0)))
  return (
    <CardFrame
      icon={<Flame size={18} />}
      title={card.title || t('m.chat.card.anomalies', { region: name(region, str(d.title)) })}
      subtitle={threshold !== null ? t('m.chat.card.threshold', { pct: formatPct(threshold) }) : undefined}
      view={rows.length ? view : null}
      onOpen={onOpen}
    >
      {rows.length ? (
        <ol className="fm-anomalies">
          {rows.slice(0, 8).map((r) => (
            <li key={`${r.region ?? ''}${r.ym}`}>
              <span className="fm-anomalies-month">
                {formatYm(r.ym)}
                {r.region && r.region !== region ? <small>{name(r.region)}</small> : null}
              </span>
              <span className="fm-anomalies-bar" aria-hidden>
                <i
                  style={{
                    inlineSize: `${Math.max(4, (Math.abs(r.pct ?? 0) / max) * 100)}%`,
                    background: diverging(Math.max(-2, Math.min(2, Math.log2(((r.value ?? 0) + 1) / ((r.baseline ?? 0) + 1))))),
                  }}
                />
              </span>
              <span className="fm-anomalies-figures">
                <b>{formatPct(r.pct)}</b>
                <small>
                  {formatNumber(r.value)} / {formatNumber(r.baseline)}
                </small>
              </span>
            </li>
          ))}
        </ol>
      ) : (
        <p className="fm-card-empty">{t('m.chat.card.noAnomalies')}</p>
      )}
    </CardFrame>
  )
}

// ------------------------------------------------------------------ trend

function linearFit(points: [number, number][]) {
  const n = points.length
  if (n < 2) return null
  const mx = points.reduce((s, p) => s + p[0], 0) / n
  const my = points.reduce((s, p) => s + p[1], 0) / n
  let sxy = 0
  let sxx = 0
  for (const [x, y] of points) {
    sxy += (x - mx) * (y - my)
    sxx += (x - mx) ** 2
  }
  const slope = sxx ? sxy / sxx : 0
  return { slope, intercept: my - slope * mx, mean: my }
}

function Sparkline({ values, labels, fit, label }: { values: number[]; labels: string[]; fit: { slope: number; intercept: number } | null; label: string }) {
  const [box, width] = useWidth<HTMLDivElement>()
  const H = 64
  const n = values.length
  const max = Math.max(1, ...values)
  const x = (i: number) => {
    const p = n < 2 ? width / 2 : 4 + (i / (n - 1)) * (width - 8)
    return dir === 'rtl' ? width - p : p
  }
  const y = (v: number) => 6 + (H - 12) * (1 - v / max)
  const path = values.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join('')
  return (
    <div ref={box} className="fm-spark">
      {width ? (
        <svg width={width} height={H} role="img" aria-label={label} style={{ direction: 'ltr' }}>
          <path d={`${path}L${x(n - 1)},${H}L${x(0)},${H}Z`} className="fm-spark-area" />
          <path d={path} className="fm-spark-line" />
          {fit ? <line x1={x(0)} y1={y(fit.intercept)} x2={x(n - 1)} y2={y(fit.intercept + fit.slope * (n - 1))} className="fm-spark-fit" /> : null}
          {values.map((v, i) => (
            <circle key={i} cx={x(i)} cy={y(v)} r={i === n - 1 ? 3 : 1.6} className="fm-spark-dot">
              <title>{`${labels[i]}: ${formatNumber(v)}`}</title>
            </circle>
          ))}
        </svg>
      ) : (
        <div style={{ height: H }} />
      )}
      <div className="fm-spark-axis" aria-hidden>
        <span>{labels[0]}</span>
        <span>{labels[labels.length - 1]}</span>
      </div>
    </div>
  )
}

function TrendCard({ card, onOpen }: { card: FirmsCard; onOpen: (v: FirmsView) => void }) {
  const name = useRegionName()
  const d = rec(card.data)
  const years = arr(d.years ?? d.annual)
    .map((y) => rec(y))
    .map((y) => ({ year: num(y.year), total: num(y.total ?? y.value), complete: y.complete !== false }))
    .filter((y): y is { year: number; total: number; complete: boolean } => y.year !== null && y.total !== null)
  const complete = years.filter((y) => y.complete)
  if (complete.length < 2) return null
  const fit = linearFit(complete.map((y, i) => [i, y.total]))
  const pct = num(d.trend_pct_per_year ?? d.slope_pct_per_year ?? d.pct_per_year ?? rec(d.trend).pct_per_year) ?? (fit && fit.mean ? (fit.slope / fit.mean) * 100 : null)
  const sen = num(d.sen_slope ?? d.sens_slope ?? rec(d.trend).sen_slope)
  const region = str(d.region)
  const view: FirmsView = card.view ?? { page: 'overview', region: region ?? undefined, from: `${complete[0].year}-01`, to: `${complete[complete.length - 1].year}-12` }
  const title = card.title || t('m.chat.card.trend', { region: name(region, str(d.title)) })
  return (
    <CardFrame icon={<TrendingUp size={18} />} title={title} subtitle={`${complete[0].year} → ${complete[complete.length - 1].year}`} view={view} onOpen={onOpen}>
      <dl className="fm-card-facts">
        <div>
          <dt>{t('m.chat.card.slope')}</dt>
          <dd>{t('m.chat.card.perYear', { value: formatPct(pct, 1) })}</dd>
        </div>
        {sen !== null ? (
          <div>
            <dt>{t('m.chat.card.sen')}</dt>
            <dd>{t('m.chat.card.perYear', { value: formatNumber(sen, 1) })}</dd>
          </div>
        ) : null}
        <div>
          <dt>{t('m.chat.card.lastYear')}</dt>
          <dd>{formatNumber(complete[complete.length - 1].total)}</dd>
        </div>
      </dl>
      <Sparkline values={complete.map((y) => y.total)} labels={complete.map((y) => String(y.year))} fit={fit} label={title} />
    </CardFrame>
  )
}

// ------------------------------------------------------------------ hotspots

const SAT_COLOR: Record<string, string> = {
  T: 'var(--firms-series-2)',
  A: 'var(--firms-series-4)',
  N: 'var(--firms-series-1)',
  N20: 'var(--firms-series-7)',
  N21: 'var(--firms-series-3)',
}
const satColor = (code: string) => SAT_COLOR[code] ?? 'var(--lab-muted)'
const SAT_NAME: Record<string, string> = { T: 'Terra', A: 'Aqua', N: 'S-NPP', N20: 'NOAA-20', N21: 'NOAA-21' }
const satOf = (raw: string | null) => {
  if (!raw) return '?'
  const s = raw.toUpperCase()
  if (s === 'TERRA' || s === 'T') return 'T'
  if (s === 'AQUA' || s === 'A') return 'A'
  if (s.includes('NOAA21') || s.includes('NOAA-21') || s === 'N21') return 'N21'
  if (s.includes('NOAA20') || s.includes('NOAA-20') || s === 'N20' || s === '1') return 'N20'
  if (s.includes('SNPP') || s.includes('NPP') || s === 'N') return 'N'
  return s
}

function HotspotsCard({ card, onOpen }: { card: FirmsCard; onOpen: (v: FirmsView) => void }) {
  const [box, width] = useWidth<HTMLDivElement>()
  const d = rec(card.data)
  const points = useMemo(
    () =>
      arr(d.points ?? d.rows)
        .map((p) => {
          if (Array.isArray(p)) return { lat: num(p[0]), lon: num(p[1]), sat: satOf(str(p[2])), frp: num(p[3]) }
          const r = rec(p)
          return { lat: num(r.latitude ?? r.lat), lon: num(r.longitude ?? r.lon), sat: satOf(str(r.satellite ?? r.sat)), frp: num(r.frp) }
        })
        .filter((p): p is { lat: number; lon: number; sat: string; frp: number | null } => p.lat !== null && p.lon !== null),
    [d.points, d.rows],
  )
  const bboxRaw = arr(d.bbox).map(num)
  const bbox =
    bboxRaw.length === 4 && bboxRaw.every((v) => v !== null)
      ? (bboxRaw as number[])
      : points.length
        ? [Math.min(...points.map((p) => p.lon)), Math.min(...points.map((p) => p.lat)), Math.max(...points.map((p) => p.lon)), Math.max(...points.map((p) => p.lat))]
        : null
  const counts = new Map<string, number>()
  const per = d.per_satellite ?? d.by_satellite ?? d.counts
  if (Array.isArray(per)) for (const c of per) counts.set(satOf(str(rec(c).code ?? rec(c).satellite)), num(rec(c).count ?? rec(c).rows) ?? 0)
  else for (const [code, n] of Object.entries(rec(per))) counts.set(satOf(code), num(n) ?? num(rec(n).rows) ?? 0)
  if (!counts.size) for (const p of points) counts.set(p.sat, (counts.get(p.sat) ?? 0) + 1)
  const total = num(d.count) ?? [...counts.values()].reduce((s, n) => s + n, 0)
  const date = str(d.date)
  const view: FirmsView | null = card.view ?? (bbox ? { page: 'search', bbox: bbox.map((v) => Math.round(v * 100) / 100), date: date ?? undefined } : null)
  const title = card.title || (str(d.title) ? t('m.chat.card.hotspotsIn', { place: str(d.title)! }) : t('m.chat.card.hotspots'))

  let map: ReactNode = null
  if (bbox && width) {
    const [W, S, E, N] = bbox
    const padX = Math.max(0.05, (E - W) * 0.06)
    const padY = Math.max(0.05, (N - S) * 0.06)
    const x0 = W - padX
    const x1 = E + padX
    const y0 = S - padY
    const y1 = N + padY
    // Equirectangular, with longitude scaled by cos(mid-latitude) so shapes keep their proportions.
    const k = Math.cos((((y0 + y1) / 2) * Math.PI) / 180)
    const aspect = ((x1 - x0) * k) / (y1 - y0)
    const height = Math.round(Math.min(260, Math.max(140, width / Math.max(0.6, aspect))))
    const px = (lon: number) => ((lon - x0) / (x1 - x0)) * width
    const py = (lat: number) => ((y1 - lat) / (y1 - y0)) * height
    const step = [0.1, 0.25, 0.5, 1, 2, 5, 10, 20].find((s) => (x1 - x0) / s <= 6) ?? 30
    const grid: ReactNode[] = []
    for (let lon = Math.ceil(x0 / step) * step; lon <= x1; lon += step) grid.push(<line key={`x${lon}`} x1={px(lon)} x2={px(lon)} y1={0} y2={height} className="fm-map-grid" />)
    for (let lat = Math.ceil(y0 / step) * step; lat <= y1; lat += step) grid.push(<line key={`y${lat}`} y1={py(lat)} y2={py(lat)} x1={0} x2={width} className="fm-map-grid" />)
    map = (
      <svg width={width} height={height} role="img" aria-label={t('m.chat.card.mapLabel', { count: points.length })} style={{ direction: 'ltr' }} className="fm-map">
        <rect x={0} y={0} width={width} height={height} className="fm-map-ground" rx={8} />
        {grid}
        <rect x={px(W)} y={py(N)} width={px(E) - px(W)} height={py(S) - py(N)} className="fm-map-box" />
        {points.slice(0, 1500).map((p, i) => (
          <circle key={i} cx={px(p.lon)} cy={py(p.lat)} r={p.frp && p.frp > 50 ? 3.2 : 2.2} fill={satColor(p.sat)} className="fm-map-dot" />
        ))}
        <text x={6} y={height - 6} className="fm-axis">
          {`${W.toFixed(1)}°, ${S.toFixed(1)}° → ${E.toFixed(1)}°, ${N.toFixed(1)}°`}
        </text>
      </svg>
    )
  }
  return (
    <CardFrame
      icon={<MapPinned size={18} />}
      title={title}
      subtitle={[date ? formatDate(date) : null, total !== null ? t('m.chat.card.detections', { count: total }) : null].filter(Boolean).join(' · ')}
      view={view}
      onOpen={onOpen}
    >
      <div ref={box} className="fm-map-box-host">
        {map ?? <div style={{ height: 140 }} />}
      </div>
      {counts.size ? (
        <ul className="fm-legend">
          {[...counts].map(([code, n]) => (
            <li key={code}>
              <i style={{ background: satColor(code), height: 8, width: 8, borderRadius: 8 }} aria-hidden />
              <span dir="ltr">{SAT_NAME[code] ?? code}</span>
              <b>{formatNumber(n)}</b>
            </li>
          ))}
        </ul>
      ) : null}
    </CardFrame>
  )
}

// ------------------------------------------------------------------ compare

function CompareCard({ card, onOpen }: { card: FirmsCard; onOpen: (v: FirmsView) => void }) {
  const name = useRegionName()
  const { algorithms } = useSession()
  const d = rec(card.data)
  let labels = arr(d.years ?? d.labels).map((y) => (typeof y === 'string' ? y : String(num(y) ?? num(rec(y).year) ?? '')))
  const series: { key: string; label: string; values: (number | null)[] }[] = []
  if (Array.isArray(d.series)) {
    for (const s of d.series) {
      const r = rec(s)
      const key = str(r.key ?? r.region ?? r.algorithm) ?? String(series.length)
      series.push({ key, label: str(r.label ?? r.title) ?? name(str(r.region), key), values: arr(r.values ?? r.totals).map(num) })
    }
  } else if (d.series && typeof d.series === 'object') {
    for (const [key, values] of Object.entries(rec(d.series))) series.push({ key, label: algorithmInfo(key, algorithms).name, values: arr(values).map(num) })
  } else if (Array.isArray(d.regions)) {
    const all = new Set<number>()
    const per = d.regions.map((r) => {
      const x = rec(r)
      const ys = arr(x.years).map((y) => rec(y))
      ys.forEach((y) => num(y.year) !== null && all.add(num(y.year)!))
      return { key: str(x.region) ?? '?', label: name(str(x.region), str(x.title)), byYear: new Map(ys.map((y) => [num(y.year), num(y.total)])) }
    })
    labels = [...all].sort().map(String)
    for (const p of per) series.push({ key: p.key, label: p.label, values: labels.map((y) => p.byYear.get(Number(y)) ?? null) })
  }
  if (!labels.length || !series.length) return null
  const regionKeyed = series.every((s) => !algorithms.some((a) => a.key === s.key) && !/_/.test(s.key))
  const lines = series.slice(0, 6).map((s, i) => ({
    key: s.key,
    label: s.label,
    color: regionKeyed ? `var(--firms-series-${[1, 2, 3, 7, 4, 5][i]})` : algColor(s.key),
    values: s.values,
    dashed: s.key === 'aqua_only',
    emphasis: i === 0,
  }))
  const region = str(d.region)
  const view: FirmsView | null =
    card.view ?? (regionKeyed ? { page: 'overview', region: series[0].key, from: `${labels[0]}-01`, to: `${labels[labels.length - 1]}-12` } : { page: 'compare', region: region ?? undefined, from: str(d.from) ?? undefined, to: str(d.to) ?? undefined })
  const title = card.title || (regionKeyed ? t('m.chat.card.compareRegions', { a: series[0].label, b: series[1]?.label ?? '' }) : t('m.chat.card.compareAlgorithms', { region: name(region) }))
  return (
    <CardFrame icon={<GitCompareArrows size={18} />} title={title} subtitle={`${labels[0]} → ${labels[labels.length - 1]}`} view={view} onOpen={onOpen}>
      <LineChart labels={labels} series={lines} label={title} height={180} />
    </CardFrame>
  )
}

// ------------------------------------------------------------------ ranking

function RankingCard({ card, onOpen }: { card: FirmsCard; onOpen: (v: FirmsView) => void }) {
  const name = useRegionName()
  const d = rec(card.data)
  const by = str(d.by) ?? 'anomaly'
  const rows = arr(d.rows ?? d.items ?? d.regions)
    .map((r) => rec(r))
    .map((r, i) => ({ rank: num(r.rank) ?? i + 1, region: str(r.region ?? r.name) ?? '?', title: str(r.title), value: num(r.value ?? r.total), pct: num(r.anomaly_pct ?? r.trend_pct ?? r.pct), ym: str(r.ym) }))
  if (!rows.length) return null
  const top = rows[0]
  const view: FirmsView = card.view ?? { page: 'overview', region: top.region, ...(by === 'anomaly' ? { view: 'anomaly' } : {}) }
  const label = t(`m.chat.card.by.${['anomaly', 'total', 'trend'].includes(by) ? by : 'anomaly'}`)
  return (
    <CardFrame icon={<ListOrdered size={18} />} title={card.title || t('m.chat.card.ranking')} subtitle={[label, str(d.ym) ? formatYm(str(d.ym)) : period(str(d.from), str(d.to))].filter(Boolean).join(' · ')} view={view} onOpen={onOpen}>
      <div className="fm-table-scroll">
        <table className="fm-table fm-card-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">{t('m.chat.card.region')}</th>
              <th scope="col" className="fm-numeric">
                {by === 'total' ? t('m.chat.card.total') : by === 'trend' ? t('m.chat.card.slope') : t('m.chat.card.anomaly')}
              </th>
              {by !== 'trend' && rows.some((r) => r.value !== null && r.pct !== null) ? (
                <th scope="col" className="fm-numeric">
                  {t('m.cal.tip.value')}
                </th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {rows.slice(0, 10).map((r) => (
              <tr key={r.region} data-current={r === top || undefined}>
                <td className="fm-numeric">{r.rank}</td>
                <td>
                  <bdi>{name(r.region, r.title)}</bdi>
                </td>
                <td className="fm-numeric">{by === 'total' ? formatNumber(r.value) : by === 'trend' ? t('m.chat.card.perYear', { value: formatPct(r.pct, 1) }) : formatPct(r.pct)}</td>
                {by !== 'trend' && rows.some((x) => x.value !== null && x.pct !== null) ? <td className="fm-numeric">{formatNumber(r.value)}</td> : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CardFrame>
  )
}

export function FirmsCardView({ card, onOpen }: { card: FirmsCard; onOpen: (view: FirmsView) => void }) {
  switch (card.kind) {
    case 'calendar':
      return <CalendarCard card={card} onOpen={onOpen} />
    case 'anomalies':
      return <AnomaliesCard card={card} onOpen={onOpen} />
    case 'trend':
      return <TrendCard card={card} onOpen={onOpen} />
    case 'hotspots':
      return <HotspotsCard card={card} onOpen={onOpen} />
    case 'compare':
      return <CompareCard card={card} onOpen={onOpen} />
    case 'ranking':
      return <RankingCard card={card} onOpen={onOpen} />
    default:
      return null
  }
}
