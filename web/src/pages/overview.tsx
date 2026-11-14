import { useRef } from 'react'
import { Link } from 'react-router-dom'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { AlertTriangle, ChevronDown, Download, FileSpreadsheet, ImageDown, MapPinned } from 'lucide-react'
import { Button } from '@feeef.dev/ui/primitives/button'
import { MenuSurface, useFloatingBoundary } from '@feeef.dev/ui/menu'
import { useSession } from '@/app/session'
import { CalendarHeatmap } from '@/components/charts/calendar-heatmap'
import { LineChart } from '@/components/charts/line-chart'
import { EmptyState, ErrorState, LoadingState, Notice, PageHeader, Panel, PanelHeader, Stat, Table, Td, Th } from '@/components/ui/data'
import { useToast } from '@/components/ui/toast'
import { algorithmInfo, regionTitle } from '@/lib/algorithms'
import { api, type Calendar } from '@/lib/api'
import { csvCell, saveText, svgToPng } from '@/lib/download'
import { errorMessage } from '@/lib/errors'
import { formatNumber, formatPct, formatYm } from '@/lib/format'
import { useAnalysisParams } from '@/lib/params'
import { useRemote } from '@/lib/use-remote'
import { EditPeriodButton, ParamsBar, rangeLabel } from '@/shell/params-bar'
import { ScreenDock } from '@/shell/screen-slots'
import { t } from '@/i18n/locale'

const TEST_KEY: Record<string, string> = { loyo: 'm.test.loyo', forward: 'm.test.forward', forward_adaptive: 'm.test.forward_adaptive' }

/**
 * The fire calendar of one region: headline figures, the month × year calendar (counts or
 * anomalies against the 2003–2022 baseline) and the annual totals. Downloads in the dock.
 */
export default function OverviewPage() {
  const { regions, regionsLoading, regionsError, reloadRegions, algorithms } = useSession()
  const { params } = useAnalysisParams()
  const svg = useRef<SVGSVGElement>(null)
  const key = params.region ? `${params.region.name}|${params.from}|${params.to}|${params.algorithm}|${params.baseline}` : null
  const calendar = useRemote(key, (signal) =>
    api.calendar({ region: params.regionName, from: params.from, to: params.to, algorithm: params.algorithm, baseline: params.baseline }, signal),
  )
  const alg = algorithmInfo(params.algorithm, algorithms)
  const baselineLabel = params.baseline === 'mean' ? t('m.baseline.meanShort') : t('m.baseline.medianShort')

  if (!regions.length) {
    if (regionsLoading) return <LoadingState label={t('m.regions.loading')} />
    if (regionsError) return <ErrorState title={t('m.regions.loadFailed')} message={errorMessage(regionsError)} onRetry={() => void reloadRegions()} />
    return (
      <EmptyState
        icon={<MapPinned size={20} />}
        title={t('m.regions.none')}
        description={t('m.regions.noneBody')}
        action={
          <Button asChild variant="filled">
            <Link to="/regions">{t('m.regions.add')}</Link>
          </Button>
        }
      />
    )
  }

  const data = calendar.data
  const fullYears = data ? data.years.filter((y) => y.complete) : []
  const title = regionTitle(params.region)
  return (
    <>
      <ParamsBar />
      <PageHeader
        title={<bdi>{title}</bdi>}
        description={
          <>
            {rangeLabel(params.from, params.to)} · {alg.name}
            {params.view === 'anomaly' ? ` · ${t('m.overview.anomalyVs', { baseline: baselineLabel })}` : ''}
          </>
        }
        action={<EditPeriodButton />}
      />
      {params.region?.fire_level === 'low' ? (
        <Notice icon={<AlertTriangle size={18} />}>{t('m.overview.lowFire', { pct: formatNumber(params.region.eval?.[params.algorithm] ?? null, 0) })}</Notice>
      ) : null}

      {calendar.error && !data ? (
        <Panel>
          <ErrorState title={t('m.overview.loadFailed')} message={errorMessage(calendar.error)} onRetry={calendar.reload} />
        </Panel>
      ) : !data ? (
        <Panel>
          <LoadingState label={t('m.overview.loading')} />
        </Panel>
      ) : (
        <>
          <Kpis data={data} loading={calendar.loading} baselineLabel={baselineLabel} />
          <Panel aria-busy={calendar.loading || undefined}>
            <PanelHeader
              title={params.view === 'anomaly' ? t('m.overview.calendarAnomaly') : t('m.overview.calendar')}
              description={params.view === 'anomaly' ? t('m.overview.calendarAnomalyHint', { baseline: baselineLabel }) : t('m.overview.calendarHint')}
            />
            <div className="fm-pad">
              <CalendarHeatmap
                ref={svg}
                months={data.months}
                years={data.years}
                view={params.view}
                cmap={params.cmap}
                baselineLabel={baselineLabel}
                label={t('m.overview.calendarLabel', { region: title, range: rangeLabel(data.from, data.to) })}
              />
              <MonthsTable data={data} />
            </div>
          </Panel>
          <Panel>
            <PanelHeader title={t('m.overview.annual')} description={t('m.overview.annualHint')} />
            <div className="fm-pad">
              {fullYears.length >= 2 ? (
                <LineChart
                  labels={fullYears.map((y) => String(y.year))}
                  series={[{ key: 'total', label: t('m.overview.fireDays'), color: 'var(--firms-series-1)', values: fullYears.map((y) => y.total), emphasis: true }]}
                  markers={[
                    { index: fullYears.findIndex((y) => y.year === 2012), label: 'VIIRS' },
                    { index: fullYears.findIndex((y) => y.year === 2022), label: t('m.compare.aquaDrift') },
                  ]}
                  label={t('m.overview.annualLabel', { region: title })}
                />
              ) : null}
              {data.years.some((y) => !y.complete) ? <p className="fm-note">{t('m.overview.partialYears')}</p> : null}
            </div>
          </Panel>
        </>
      )}
      <ScreenDock>{data ? <DownloadMenu data={data} svg={svg} /> : null}</ScreenDock>
    </>
  )

}

function Kpis({ data, loading, baselineLabel }: { data: Calendar; loading: boolean; baselineLabel: string }) {
  const s = data.summary
  const latest = s.latest
  const tone = latest.anomaly_pct == null ? undefined : latest.anomaly_pct > 50 ? 'up' : latest.anomaly_pct < -33 ? 'down' : undefined
  return (
    <div className="fm-stats">
      <Stat loading={loading} label={t('m.kpi.total')} value={formatNumber(s.total)} hint={t('m.kpi.totalHint', { count: data.months.length })} />
      <Stat
        loading={loading}
        label={t('m.kpi.latest', { month: formatYm(latest.ym), baseline: baselineLabel })}
        value={formatPct(latest.anomaly_pct)}
        tone={tone}
        hint={t('m.kpi.latestHint', { value: formatNumber(latest.value), baseline: formatNumber(latest.baseline), rank: latest.rank, of: latest.of })}
      />
      <Stat loading={loading} label={t('m.kpi.peak')} value={formatNumber(s.peak.value)} hint={formatYm(s.peak.ym)} />
      <Stat
        loading={loading}
        label={t('m.kpi.topYear')}
        value={s.top_year ? formatNumber(s.top_year.total) : '–'}
        hint={s.top_year ? String(s.top_year.year) : t('m.kpi.noFullYear')}
      />
      <Stat loading={loading} label={t('m.kpi.extreme')} value={formatNumber(s.extreme_months)} hint={t('m.kpi.extremeHint', { baseline: baselineLabel })} />
      <Stat
        loading={loading}
        label={t('m.kpi.error')}
        value={data.error ? `${formatNumber(data.error.pct, 1)}%` : '–'}
        hint={data.error ? t(TEST_KEY[data.error.test] ?? 'm.test.other') : t('m.kpi.errorNone')}
      />
    </div>
  )
}

/** The calendar as a table, folded away (screen readers, copying figures). */
function MonthsTable({ data }: { data: Calendar }) {
  return (
    <details className="fm-details">
      <summary>{t('m.overview.asTable')}</summary>
      <Table label={t('m.overview.asTable')}>
        <thead>
          <tr>
            <Th>{t('m.table.month')}</Th>
            <Th numeric>{t('m.table.value')}</Th>
            <Th numeric>{t('m.table.baseline')}</Th>
            <Th numeric>{t('m.table.anomaly')}</Th>
            <Th>{t('m.table.source')}</Th>
          </tr>
        </thead>
        <tbody>
          {[...data.months].reverse().map((m) => (
            <tr key={m.ym}>
              <Td>{formatYm(m.ym)}</Td>
              <Td numeric>{formatNumber(m.value)}</Td>
              <Td numeric>{formatNumber(m.baseline)}</Td>
              <Td numeric>{formatPct(m.anomaly_pct)}</Td>
              <Td>{t(`m.source.${m.source}`)}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </details>
  )
}

function DownloadMenu({ data, svg }: { data: Calendar; svg: React.RefObject<SVGSVGElement | null> }) {
  const boundary = useFloatingBoundary()
  const toast = useToast()
  const tag = `${data.region}_${data.from}_${data.to}_${data.algorithm}`
  const csv = () => {
    const head = ['year', 'month', 'ym', 'source', `value_${data.algorithm}`, `baseline_${data.baseline_kind}_2003_2022`, 'anomaly_pct']
    const rows = data.months.map((m) => [m.ym.slice(0, 4), Number(m.ym.slice(5)), m.ym, m.source, m.value, m.baseline, m.anomaly_pct ?? ''].map(csvCell).join(','))
    saveText(`fire_calendar_${tag}.csv`, [head.join(','), ...rows].join('\n'))
    toast.success(t('m.download.saved'))
  }
  const png = async () => {
    if (!svg.current) return
    try {
      await svgToPng(svg.current, `fire_calendar_${tag}.png`, getComputedStyle(document.body).backgroundColor || '#fff')
      toast.success(t('m.download.saved'))
    } catch {
      toast.error(t('m.download.failed'))
    }
  }
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <Button variant="filled">
          <Download aria-hidden />
          <span className="lab-control-label">{t('m.download.label')}</span>
          <ChevronDown aria-hidden size={16} />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal container={boundary ?? undefined}>
        <MenuSurface asChild cover={false} side="top">
          <DropdownMenu.Content className="lab-actions-menu" align="end" sideOffset={6} aria-label={t('m.download.label')}>
            <DropdownMenu.Item className="lab-actions-menu__item" onSelect={csv}>
              <FileSpreadsheet size={18} aria-hidden />
              <span className="lab-actions-menu__label">{t('m.download.calendarCsv')}</span>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="lab-actions-menu__item" onSelect={() => void png()}>
              <ImageDown size={18} aria-hidden />
              <span className="lab-actions-menu__label">{t('m.download.calendarPng')}</span>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </MenuSurface>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

