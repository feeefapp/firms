import { useLayoutEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import { formatCompact, formatNumber } from '@/lib/format'
import { dir } from '@/i18n/locale'
import { niceScale, useWidth } from './use-width'
import './charts.css'

export type LineSeries = {
  key: string
  label: string
  color: string
  values: (number | null)[]
  dashed?: boolean
  /** The series the page is about: drawn thicker. */
  emphasis?: boolean
}

export type LineMarker = { index: number; label: string }

/**
 * Lines over time on one value axis (never two). Time runs with the reading direction; the axis
 * sits at the start. A crosshair follows the pointer, a tap or the arrow keys, and the tooltip
 * lists every series at that point. Legend below; ≤ 4 series are also labelled at their end.
 */
export function LineChart({
  labels,
  series,
  markers = [],
  label,
  height = 220,
  format = (v: number) => formatNumber(v),
  tickEvery,
}: {
  labels: string[]
  series: LineSeries[]
  markers?: LineMarker[]
  label: string
  height?: number
  format?: (value: number) => string
  /** Show every n-th x label (auto when omitted). */
  tickEvery?: number
}) {
  const [box, width] = useWidth<HTMLDivElement>()
  const [active, setActive] = useState<number | null>(null)
  const rtl = dir === 'rtl'
  const AXIS = 44
  const TOP = 10
  const BOTTOM = 22
  const n = labels.length
  const plotW = Math.max(0, width - AXIS - 8)
  const plotH = height - TOP - BOTTOM
  const max = niceScale(Math.max(0, ...series.flatMap((s) => s.values.filter((v): v is number => v != null)))).max
  const ticks = Array.from({ length: 5 }, (_, i) => (max * i) / 4)
  const x = (i: number) => {
    const p = n < 2 ? plotW / 2 : (i / (n - 1)) * plotW
    return rtl ? width - AXIS - p : AXIS + p
  }
  const y = (v: number) => TOP + plotH - (v / max) * plotH
  const every = tickEvery ?? Math.max(1, Math.ceil(46 / Math.max(1, plotW / Math.max(1, n - 1))))

  const pick = (event: PointerEvent<SVGSVGElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const px = event.clientX - rect.left
    const p = rtl ? width - AXIS - px : px - AXIS
    const i = Math.round((p / Math.max(1, plotW)) * (n - 1))
    setActive(i >= 0 && i < n ? i : null)
  }
  const onKey = (event: KeyboardEvent<SVGSVGElement>) => {
    const forward = rtl ? 'ArrowLeft' : 'ArrowRight'
    const back = rtl ? 'ArrowRight' : 'ArrowLeft'
    let next = active
    if (event.key === forward) next = active == null ? n - 1 : Math.min(n - 1, active + 1)
    else if (event.key === back) next = active == null ? n - 1 : Math.max(0, active - 1)
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = n - 1
    else if (event.key === 'Escape') next = null
    else return
    event.preventDefault()
    setActive(next)
  }
  const path = (values: (number | null)[]) => {
    let d = ''
    let pen = false
    values.forEach((v, i) => {
      if (v == null) {
        pen = false
        return
      }
      d += `${pen ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`
      pen = true
    })
    return d
  }

  const tip = useRef<HTMLDivElement>(null)
  const [tipW, setTipW] = useState(0)
  useLayoutEffect(() => setTipW(tip.current?.offsetWidth ?? 0), [active])
  const tipLeft = active != null ? Math.min(Math.max(x(active) - tipW / 2, 0), Math.max(0, width - tipW)) : 0
  const lastIndex = (values: (number | null)[]) => {
    for (let i = values.length - 1; i >= 0; i--) if (values[i] != null) return i
    return -1
  }

  return (
    <div className="fm-line">
      <div ref={box} className="fm-chart-box" style={{ paddingBlockStart: 4 }}>
        <div ref={tip} className="fm-chart-tip" data-show={active != null || undefined} style={{ left: tipLeft, top: 0 }} aria-live="polite">
          {active != null ? (
            <>
              <strong>{labels[active]}</strong>
              {series.map((s) => (
                <span key={s.key} className="fm-tip-row">
                  <i style={{ background: s.color }} data-dashed={s.dashed || undefined} aria-hidden />
                  {s.label}
                  <b>{s.values[active] != null ? format(s.values[active]!) : '–'}</b>
                </span>
              ))}
            </>
          ) : null}
        </div>
        {width ? (
          <svg
            width={width}
            height={height}
            role="img"
            aria-label={label}
            style={{ direction: 'ltr' }}
            tabIndex={0}
            className="fm-chart-svg"
            onPointerMove={pick}
            onPointerDown={pick}
            onPointerLeave={(e) => (e.pointerType === 'mouse' ? setActive(null) : undefined)}
            onBlur={() => setActive(null)}
            onKeyDown={onKey}
          >
            {ticks.map((tick) => (
              <g key={tick}>
                <line className="fm-grid" x1={rtl ? 8 : AXIS} x2={rtl ? width - AXIS : width - 8} y1={y(tick)} y2={y(tick)} />
                <text className="fm-axis" x={rtl ? width - 4 : AXIS - 6} y={y(tick)} dy="0.35em" textAnchor="end">
                  {formatCompact(tick)}
                </text>
              </g>
            ))}
            {markers.map((m) =>
              m.index >= 0 && m.index < n ? (
                <g key={m.label}>
                  <line className="fm-marker" x1={x(m.index)} x2={x(m.index)} y1={TOP} y2={TOP + plotH} />
                  <text className="fm-axis" x={x(m.index) + (rtl ? -4 : 4)} y={TOP + 10} textAnchor={rtl ? 'end' : 'start'}>
                    {m.label}
                  </text>
                </g>
              ) : null,
            )}
            {labels.map((l, i) =>
              (n - 1 - i) % every === 0 ? (
                <text key={i} className="fm-axis" x={x(i)} y={height - 6} textAnchor="middle">
                  {l}
                </text>
              ) : null,
            )}
            {active != null ? <line className="fm-crosshair" x1={x(active)} x2={x(active)} y1={TOP} y2={TOP + plotH} /> : null}
            {series.map((s) => (
              <path
                key={s.key}
                d={path(s.values)}
                fill="none"
                stroke={s.color}
                strokeWidth={s.emphasis ? 2.6 : 1.8}
                strokeDasharray={s.dashed ? '5 4' : undefined}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            ))}
            {active != null
              ? series.map((s) =>
                  s.values[active] != null ? <circle key={s.key} className="fm-dot" cx={x(active)} cy={y(s.values[active]!)} r={4} fill={s.color} /> : null,
                )
              : null}
            {series.length <= 4 && n > 1
              ? series.map((s) => {
                  const i = lastIndex(s.values)
                  return i >= 0 && s.values.length > 1 ? (
                    <circle key={`end-${s.key}`} cx={x(i)} cy={y(s.values[i]!)} r={3} fill={s.color} className="fm-dot" />
                  ) : null
                })
              : null}
          </svg>
        ) : (
          <div style={{ height }} />
        )}
      </div>
      {series.length > 1 ? (
        <ul className="fm-legend">
          {series.map((s) => (
            <li key={s.key}>
              <i style={{ background: s.color }} data-dashed={s.dashed || undefined} aria-hidden />
              {s.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
