import { forwardRef, useLayoutEffect, useMemo, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import type { CalendarMonth, CalendarYear } from '@/lib/api'
import { CMAPS, DIVERGING_STOPS, diverging, ramp, type ColorMap } from '@/lib/colors'
import { MONTHS_LONG, MONTHS_SHORT, formatCompact, formatNumber, formatPct } from '@/lib/format'
import type { View } from '@/lib/params'
import { dir, t } from '@/i18n/locale'
import { useWidth } from './use-width'
import './charts.css'

const ROW = 20
const GAP = 2
const HEAD = 22
const LABEL = 42

type Cell = { year: number; month: number; data: CalendarMonth | null }

const SOURCE_KEY: Record<string, string> = { T: 'm.source.T', A: 'm.source.A', V: 'm.source.V' }

/**
 * The fire calendar: one row per year, the twelve months in reading direction, the year's total
 * at the end. Counts use a sequential ramp (square-root scaled so quiet months stay visible),
 * anomalies a blue–grey–red diverging ramp around the baseline. Hover, tap or arrow keys show a
 * month's figures. RTL mirrors the layout; the SVG keeps physical coordinates.
 */
export const CalendarHeatmap = forwardRef<SVGSVGElement, {
  months: CalendarMonth[]
  years: CalendarYear[]
  view: View
  cmap: ColorMap
  baselineLabel: string
  label: string
}>(function CalendarHeatmap({ months, years, view, cmap, baselineLabel, label }, svgRef) {
  const [box, width] = useWidth<HTMLDivElement>()
  const [active, setActive] = useState<number | null>(null)
  const rtl = dir === 'rtl'

  const { cells, rows, max, yearMax, yearTotals } = useMemo(() => {
    const byYm = new Map(months.map((m) => [m.ym, m]))
    const ys = [...new Set(months.map((m) => Number(m.ym.slice(0, 4))))].sort((a, b) => a - b)
    const out: Cell[] = []
    for (const year of ys)
      for (let month = 0; month < 12; month++) out.push({ year, month, data: byYm.get(`${year}-${String(month + 1).padStart(2, '0')}`) ?? null })
    const totals = new Map(years.map((y) => [y.year, y]))
    return {
      cells: out,
      rows: ys,
      max: Math.max(1, ...months.map((m) => m.value)),
      yearMax: Math.max(1, ...years.map((y) => y.total)),
      yearTotals: totals,
    }
  }, [months, years])

  const totalW = width < 420 ? 44 : 88
  const cellW = Math.max(10, (width - LABEL - totalW - GAP * 2) / 12)
  const height = HEAD + rows.length * (ROW + GAP) + 2
  // Physical x of a month column / of the label and total columns.
  const colX = (month: number) => (rtl ? width - LABEL - (month + 1) * cellW : LABEL + month * cellW)
  const labelX = rtl ? width - 4 : 4
  const totalX0 = rtl ? 0 : width - totalW
  const narrowHead = cellW < 40

  const fill = (m: CalendarMonth) =>
    view === 'anomaly'
      ? diverging(Math.max(-2, Math.min(2, Math.log2((m.value + 1) / (m.baseline + 1)))))
      : ramp(CMAPS[cmap], Math.sqrt(m.value / max))

  const indexAt = (event: PointerEvent<SVGSVGElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top - HEAD
    const row = Math.floor(y / (ROW + GAP))
    const col = rtl ? Math.floor((width - LABEL - x) / cellW) : Math.floor((x - LABEL) / cellW)
    if (row < 0 || row >= rows.length || col < 0 || col > 11) return null
    const index = row * 12 + col
    return cells[index]?.data ? index : null
  }
  const onKey = (event: KeyboardEvent<SVGSVGElement>) => {
    const filled = cells.map((c, i) => (c.data ? i : -1)).filter((i) => i >= 0)
    if (!filled.length) return
    const forward = rtl ? 'ArrowLeft' : 'ArrowRight'
    const back = rtl ? 'ArrowRight' : 'ArrowLeft'
    const pos = active == null ? filled.length - 1 : filled.indexOf(active)
    let next: number | null = active
    if (event.key === forward) next = filled[Math.min(filled.length - 1, pos + 1)]
    else if (event.key === back) next = filled[Math.max(0, pos - 1)]
    else if (event.key === 'ArrowDown') next = filled.find((i) => i >= (active ?? 0) + 12) ?? next
    else if (event.key === 'ArrowUp') next = [...filled].reverse().find((i) => i <= (active ?? 0) - 12) ?? next
    else if (event.key === 'Home') next = filled[0]
    else if (event.key === 'End') next = filled[filled.length - 1]
    else if (event.key === 'Escape') next = null
    else return
    event.preventDefault()
    setActive(next)
  }

  const shown = active != null ? cells[active] : null
  const tip = useRef<HTMLDivElement>(null)
  const [tipSize, setTipSize] = useState({ w: 0, h: 0 })
  useLayoutEffect(() => setTipSize({ w: tip.current?.offsetWidth ?? 0, h: tip.current?.offsetHeight ?? 0 }), [active])
  let tipLeft = 0
  let tipTop = 0
  if (shown) {
    const cx = colX(shown.month) + cellW / 2
    const row = rows.indexOf(shown.year)
    tipLeft = Math.min(Math.max(cx - tipSize.w / 2, 0), Math.max(0, width - tipSize.w))
    const above = HEAD + row * (ROW + GAP) - tipSize.h - 6
    tipTop = above >= 0 ? above : HEAD + (row + 1) * (ROW + GAP) + 4
  }

  return (
    <div className="fm-heatmap">
      <div ref={box} className="fm-chart-box">
        <div ref={tip} className="fm-chart-tip" data-show={shown?.data ? true : undefined} style={{ left: tipLeft, top: tipTop }} aria-live="polite">
          {shown?.data ? (
            <>
              <strong>
                {MONTHS_LONG[shown.month]} {shown.year}
              </strong>
              <span>
                {t('m.cal.tip.value')} <b>{formatNumber(shown.data.value)}</b>
              </span>
              <span>
                {baselineLabel} <b>{formatNumber(shown.data.baseline)}</b>
              </span>
              <span>
                {t('m.cal.tip.anomaly')} <b>{formatPct(shown.data.anomaly_pct)}</b>
              </span>
              {SOURCE_KEY[shown.data.source] ? <small>{t(SOURCE_KEY[shown.data.source])}</small> : null}
            </>
          ) : null}
        </div>
        {width ? (
          <svg
            ref={svgRef}
            width={width}
            height={height}
            role="img"
            aria-label={label}
            style={{ direction: 'ltr' }}
            tabIndex={0}
            className="fm-chart-svg"
            onPointerMove={(e) => setActive(indexAt(e))}
            onPointerDown={(e) => setActive(indexAt(e))}
            onPointerLeave={(e) => (e.pointerType === 'mouse' ? setActive(null) : undefined)}
            onBlur={() => setActive(null)}
            onKeyDown={onKey}
          >
            {MONTHS_SHORT.map((name, month) => (
              <text key={month} className="fm-axis" x={colX(month) + cellW / 2} y={14} textAnchor="middle">
                {narrowHead ? month + 1 : name}
              </text>
            ))}
            <text className="fm-axis" x={rtl ? totalX0 + 2 : width - 2} y={14} textAnchor={rtl ? 'start' : 'end'}>
              {t('m.cal.yearTotal')}
            </text>
            {rows.map((year, r) => {
              const y = HEAD + r * (ROW + GAP)
              const total = yearTotals.get(year)
              // The figure takes ~38px at the end; the bar uses what is left (none on phones).
              const barMax = Math.max(0, totalW - 46)
              const barW = total && barMax ? (barMax * total.total) / yearMax : 0
              return (
                <g key={year}>
                  <text className="fm-axis" x={labelX} y={y + ROW / 2} dy="0.35em" textAnchor={rtl ? 'end' : 'start'}>
                    {year}
                  </text>
                  {total ? (
                    <>
                      {barW ? <rect className="fm-year-bar" data-partial={total.complete ? undefined : true} x={rtl ? totalX0 + totalW - 4 - barW : totalX0 + 4} y={y + 5} width={Math.max(1, barW)} height={ROW - 10} rx={2} /> : null}
                      <text className="fm-axis fm-axis-strong" x={rtl ? totalX0 + 2 : width - 2} y={y + ROW / 2} dy="0.35em" textAnchor={rtl ? 'start' : 'end'}>
                        {formatCompact(total.total)}
                      </text>
                    </>
                  ) : null}
                </g>
              )
            })}
            {cells.map((cell, i) => {
              const r = rows.indexOf(cell.year)
              const x = colX(cell.month) + 1
              const y = HEAD + r * (ROW + GAP)
              if (!cell.data) return <rect key={i} className="fm-cell-empty" x={x + 0.5} y={y + 0.5} width={cellW - 3} height={ROW - 1} rx={3} />
              return <rect key={i} x={x} y={y} width={cellW - 2} height={ROW} rx={3} fill={fill(cell.data)} className="fm-cell" data-active={active === i || undefined} />
            })}
          </svg>
        ) : (
          <div style={{ height }} />
        )}
      </div>
      <CalendarLegend view={view} cmap={cmap} max={max} baselineLabel={baselineLabel} />
    </div>
  )
})

export function CalendarLegend({ view, cmap, max, baselineLabel }: { view: View; cmap: ColorMap; max: number; baselineLabel: string }) {
  const stops = view === 'anomaly' ? DIVERGING_STOPS : CMAPS[cmap]
  const labels =
    view === 'anomaly'
      ? ['÷4', '÷2', `= ${baselineLabel}`, '×2', '×4']
      : [0, 1 / 16, 1 / 4, 9 / 16, 1].map((k) => formatNumber(max * k))
  return (
    <div className="fm-legend-ramp" aria-label={view === 'anomaly' ? t('m.cal.legendAnomaly') : t('m.cal.legendCount')}>
      <i style={{ background: `linear-gradient(${dir === 'rtl' ? 'to left' : 'to right'}, ${stops.join(',')})` }} aria-hidden />
      <div>
        {labels.map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </div>
      <small>{view === 'anomaly' ? t('m.cal.legendAnomaly') : t('m.cal.legendCount')}</small>
    </div>
  )
}
