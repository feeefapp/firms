import { useMemo, useState } from 'react'
import { FilterBar, type FilterOption, type FilterValue } from '@feeef.dev/ui/filter-bar'
import { useSession } from '@/app/session'
import { algorithmList, measuredError, regionTitle } from '@/lib/algorithms'
import { CMAPS, type ColorMap } from '@/lib/colors'
import { formatNumber, formatYm } from '@/lib/format'
import { DEFAULT_ALGORITHM, regionEnd, useAnalysisParams, ymIndex, ymOf, type Period } from '@/lib/params'
import { t } from '@/i18n/locale'
import { ScreenTop } from './screen-slots'

/** Last day of a `YYYY-MM` month. */
function monthEndDay(ym: string): string {
  const [y, m] = ym.split('-').map(Number)
  return `${ym}-${String(new Date(Date.UTC(y, m, 0)).getUTCDate()).padStart(2, '0')}`
}

/**
 * The analysis parameters as the kit's filter bar: region, period, a custom range and the view are
 * pinned chips; the conversion algorithm (with its measured error here), the baseline and the
 * colour map wait in the catalog. Back resets everything to the defaults. All of it is in the
 * address, so links and the assistant set it the same way.
 */
export function ParamsBar({
  showView = true,
  onOff,
}: {
  showView?: boolean
  /** Page-specific on/off filters (the methods Compare draws), pinned and in the catalog. */
  onOff?: { options: FilterOption[]; value: string[]; onChange: (ids: string[]) => void }
}) {
  const { regions, algorithms } = useSession()
  const { params, update } = useAnalysisParams()
  const [pinned, setPinned] = useState<string[]>(() => ['region', 'period', 'range', ...(showView ? ['view'] : []), ...(onOff?.value ?? [])])
  const end = regionEnd(params.region)
  const lastYear = Number(end.slice(0, 4))

  const options = useMemo<FilterOption[]>(() => {
    const presets = [lastYear - 1, lastYear - 2, lastYear - 3].map((y) => ({ label: String(y), value: { from: `${y}-01-01`, to: `${y}-12-31` } }))
    presets.push({ label: t('m.period.baseline'), value: { from: '2003-01-01', to: '2022-12-31' } })
    const list: FilterOption[] = [
      { id: 'region', label: t('m.params.region'), type: 'enum', choices: regions.map((r) => ({ value: r.name, label: regionTitle(r) })) },
      {
        id: 'period',
        label: t('m.params.period'),
        type: 'enum',
        choices: (['12m', '5y', 'all'] as const).map((p) => ({ value: p, label: t(`m.period.${p}`) })),
      },
      { id: 'range', label: t('m.period.custom'), description: t('m.period.pickIntro'), type: 'dateRange', min: '2001-01-01', max: monthEndDay(end), presets },
    ]
    if (showView)
      list.push({
        id: 'view',
        label: t('m.params.view'),
        type: 'enum',
        choices: [
          { value: 'count', label: t('m.view.count') },
          { value: 'anomaly', label: t('m.view.anomaly') },
        ],
      })
    list.push(
      {
        id: 'alg',
        label: t('m.advanced.algorithm'),
        description: t('m.advanced.algorithmHint'),
        type: 'enum',
        choices: algorithmList(algorithms).map((a) => {
          const err = measuredError(params.region, a.key)
          const note = a.key === 'aqua_only' ? t('m.advanced.reference') : err != null ? t('m.advanced.error', { pct: formatNumber(err, 1) }) : ''
          return { value: a.key, label: [a.name, a.recommended ? t('m.advanced.recommended') : '', note].filter(Boolean).join(' · ') }
        }),
      },
      {
        id: 'baseline',
        label: t('m.advanced.baseline'),
        description: t('m.advanced.baselineHint'),
        type: 'enum',
        choices: [
          { value: 'median', label: t('m.baseline.median') },
          { value: 'mean', label: t('m.baseline.mean') },
        ],
      },
      {
        id: 'cmap',
        label: t('m.advanced.cmap'),
        description: t('m.advanced.cmapHint'),
        type: 'enum',
        choices: (Object.keys(CMAPS) as ColorMap[]).map((key) => ({ value: key, label: t(`m.cmap.${key}`) })),
      },
    )
    return [...list, ...(onOff?.options ?? [])]
  }, [regions, algorithms, params.region, end, lastYear, showView, onOff?.options])

  const values: Record<string, FilterValue> = {
    region: params.regionName || null,
    period: params.period === 'custom' ? null : params.period,
    range: params.period === 'custom' ? { from: `${params.from}-01`, to: monthEndDay(params.to) } : null,
    view: params.view,
    alg: params.algorithm,
    baseline: params.baseline,
    cmap: params.cmap,
  }
  const onValues = (next: Record<string, FilterValue>) => {
    const str = (v: FilterValue) => (typeof v === 'string' && v ? v : null)
    const patch: Record<string, string | null> = {}
    if (str(next.region) && str(next.region) !== values.region) patch.region = str(next.region)
    const r = next.range && typeof next.range === 'object' && next.range.from ? next.range : null
    if (JSON.stringify(r) !== JSON.stringify(values.range)) {
      if (r) {
        const a = Math.min(ymIndex(r.from.slice(0, 7)), ymIndex((r.to || r.from).slice(0, 7)))
        const b = Math.max(ymIndex(r.from.slice(0, 7)), ymIndex((r.to || r.from).slice(0, 7)))
        Object.assign(patch, { period: 'custom', from: ymOf(a), to: ymOf(b) })
      } else Object.assign(patch, { period: null, from: null, to: null })
    } else if (str(next.period) !== values.period) {
      Object.assign(patch, { period: (str(next.period) as Period | null) ?? 'all', from: null, to: null })
    }
    if (str(next.view) !== values.view) patch.view = str(next.view)
    if (str(next.alg) !== values.alg) patch.alg = str(next.alg)
    if (str(next.baseline) !== values.baseline) patch.baseline = str(next.baseline)
    if (str(next.cmap) !== values.cmap) patch.cmap = str(next.cmap)
    if (Object.keys(patch).length) update(patch)
  }
  const changed = params.period !== 'all' || params.view !== 'count' || params.algorithm !== DEFAULT_ALGORITHM || params.baseline !== 'median' || params.cmap !== 'cividis'

  return (
    <ScreenTop>
      <FilterBar
        label={t('m.params.label')}
        options={options}
        value={onOff?.value ?? []}
        onChange={onOff?.onChange ?? (() => {})}
        values={values}
        onValuesChange={onValues}
        pinned={pinned}
        onPinnedChange={setPinned}
        onBack={changed ? () => update({ period: null, from: null, to: null, view: null, alg: null, baseline: null, cmap: null }) : undefined}
      />
    </ScreenTop>
  )
}

/** "March 2020 – May 2026" for headers. */
export function rangeLabel(from: string, to: string): string {
  return from === to ? formatYm(from) : t('m.period.between', { from: formatYm(from), to: formatYm(to) })
}
