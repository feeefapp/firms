import { useMemo } from 'react'
import { Download, Info } from 'lucide-react'
import { Button } from '@feeef.dev/ui/primitives/button'
import { Checkbox } from '@feeef.dev/ui/primitives/choice'
import { useSession } from '@/app/session'
import { LineChart } from '@/components/charts/line-chart'
import { ErrorState, LoadingState, Notice, PageHeader, Panel, PanelHeader, Table, Tag, Td, Th } from '@/components/ui/data'
import { useToast } from '@/components/ui/toast'
import { ALGORITHM_KEYS, algorithmInfo, algorithmList, regionTitle } from '@/lib/algorithms'
import { api, heldoutSeries, type Benchmark, type Compare } from '@/lib/api'
import { algColor } from '@/lib/colors'
import { csvCell, saveText } from '@/lib/download'
import { errorMessage } from '@/lib/errors'
import { formatNumber } from '@/lib/format'
import { DEFAULT_ALGORITHM, useAnalysisParams } from '@/lib/params'
import { useRemote } from '@/lib/use-remote'
import { EditPeriodButton, ParamsBar, rangeLabel } from '@/shell/params-bar'
import { ScreenDock } from '@/shell/screen-slots'
import { t } from '@/i18n/locale'

const DEFAULT_SET = ['ensemble_adaptive', 'ratio', 'naive', 'aqua_only']
const TESTS = ['loyo', 'forward', 'forward_adaptive'] as const

/**
 * How the conversion methods compare: annual totals side by side, this region's real held-out
 * evaluation, the held-out months against Aqua, and the full benchmark of every tested method.
 */
export default function ComparePage() {
  const { algorithms } = useSession()
  const { params, update, search } = useAnalysisParams()
  const list = algorithmList(algorithms)
  const selected = useMemo(() => {
    const raw = search.get('algs')
    const chosen = raw ? raw.split(',').filter((k) => (ALGORITHM_KEYS as readonly string[]).includes(k)) : DEFAULT_SET
    return chosen.length ? chosen : DEFAULT_SET
  }, [search])
  const key = params.region ? `${params.regionName}|${params.from}|${params.to}` : null
  const compare = useRemote(key, (signal) =>
    api.compare({ region: params.regionName, from: params.from, to: params.to, algorithms: ALGORITHM_KEYS.join(',') }, signal),
  )
  const benchmark = useRemote('benchmark', () => api.benchmark())
  const toggle = (k: string, on: boolean) => {
    const next = on ? [...new Set([...selected, k])] : selected.filter((x) => x !== k)
    update({ algs: next.length && next.join(',') !== DEFAULT_SET.join(',') ? ALGORITHM_KEYS.filter((a) => next.includes(a)).join(',') : null })
  }

  return (
    <>
      <ParamsBar showView={false} />
      <PageHeader title={t('m.compare.title')} description={<><bdi>{regionTitle(params.region)}</bdi> · {rangeLabel(params.from, params.to)}</>} action={<EditPeriodButton />} />
      {compare.error && !compare.data ? (
        <Panel>
          <ErrorState title={t('m.compare.loadFailed')} message={errorMessage(compare.error)} onRetry={compare.reload} />
        </Panel>
      ) : !compare.data ? (
        <Panel>
          <LoadingState label={t('m.compare.loading')} />
        </Panel>
      ) : (
        <>
          <Panel aria-busy={compare.loading || undefined}>
            <PanelHeader title={t('m.compare.annual')} description={t('m.compare.annualHint')} />
            <div className="fm-pad fm-stack">
              <fieldset className="fm-chips">
                <legend className="fm-note">{t('m.compare.pick')}</legend>
                {list.map((a) => (
                  <Checkbox key={a.key} controlSize="small" label={<span className="fm-chip-label"><i style={{ background: algColor(a.key) }} aria-hidden />{a.name}</span>} checked={selected.includes(a.key)} onCheckedChange={(on) => toggle(a.key, on)} />
                ))}
              </fieldset>
              <AnnualChart data={compare.data} selected={selected} current={params.algorithm} />
            </div>
          </Panel>
          <EvalTable data={compare.data} current={params.algorithm} />
          <HeldOut data={compare.data} current={params.algorithm} />
        </>
      )}
      <BenchmarkPanel remote={benchmark} region={params.regionName} />
      <ScreenDock>
        {benchmark.data ? <DownloadBenchmark data={benchmark.data} /> : null}
      </ScreenDock>
    </>
  )

}

function AnnualChart({ data, selected, current }: { data: Compare; selected: string[]; current: string }) {
  const { algorithms } = useSession()
  const series = selected
    .filter((k) => data.series[k])
    .map((k) => ({
      key: k,
      label: algorithmInfo(k, algorithms).name,
      color: algColor(k),
      values: data.series[k],
      dashed: k === 'aqua_only',
      emphasis: k === current,
    }))
  return (
    <>
      <LineChart
        labels={data.years.map(String)}
        series={series}
        markers={[
          { index: data.years.indexOf(2012), label: 'VIIRS' },
          { index: data.years.indexOf(2022), label: t('m.compare.aquaDrift') },
        ]}
        label={t('m.compare.annual')}
        height={240}
      />
      {data.complete?.some((c) => !c) ? <p className="fm-note">{t('m.overview.partialYears')}</p> : null}
    </>
  )
}

function EvalTable({ data, current }: { data: Compare; current: string }) {
  const { algorithms } = useSession()
  const rows = ALGORITHM_KEYS.filter((k) => data.eval[k] && k !== 'aqua_only')
  const best = Object.fromEntries(
    TESTS.map((test) => [test, Math.min(...rows.map((k) => data.eval[k]?.[test] ?? Infinity))]),
  ) as Record<(typeof TESTS)[number], number>
  return (
    <Panel>
      <PanelHeader title={t('m.compare.eval')} description={t('m.compare.evalHint')} />
      <Table label={t('m.compare.eval')}>
        <thead>
          <tr>
            <Th>{t('m.compare.method')}</Th>
            {TESTS.map((test) => (
              <Th key={test} numeric>
                {t(`m.test.${test}`)}
              </Th>
            ))}
            <Th numeric>{t('m.compare.used')}</Th>
          </tr>
        </thead>
        <tbody>
          {rows.map((k) => {
            const e = data.eval[k]
            const info = algorithmInfo(k, algorithms)
            return (
              <tr key={k} data-current={k === current || undefined}>
                <Td>
                  <span className="fm-chip-label">
                    <i style={{ background: algColor(k) }} aria-hidden />
                    {info.name}
                    {info.recommended ? <Tag tone="primary">{t('m.advanced.recommended')}</Tag> : null}
                  </span>
                </Td>
                {TESTS.map((test) => (
                  <Td key={test} numeric data-best={e?.[test] != null && e[test] === best[test] ? true : undefined}>
                    {e?.[test] != null ? `${formatNumber(e[test], 1)}%` : '–'}
                  </Td>
                ))}
                <Td numeric>{e?.pct != null ? `${formatNumber(e.pct, 1)}%` : '–'}</Td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <p className="fm-note fm-pad">{t('m.compare.evalNote')}</p>
    </Panel>
  )
}

function HeldOut({ data, current }: { data: Compare; current: string }) {
  const { algorithms } = useSession()
  const alg = current === 'aqua_only' ? DEFAULT_ALGORITHM : current
  const pred = heldoutSeries(data, alg, data.eval[alg]?.method) ?? heldoutSeries(data, DEFAULT_ALGORITHM, data.eval[DEFAULT_ALGORITHM]?.method)
  const months = data.heldout.months ?? []
  if (!pred || !months.length) return null
  return (
    <Panel>
      <PanelHeader title={t('m.compare.heldout')} description={t('m.compare.heldoutHint')} />
      <div className="fm-pad">
        <LineChart
          labels={months}
          series={[
            { key: 'aqua', label: t('m.compare.aquaActual'), color: 'var(--lab-ink)', values: data.heldout.aqua, dashed: true },
            { key: alg, label: algorithmInfo(alg, algorithms).name, color: algColor(alg), values: pred, emphasis: true },
          ]}
          label={t('m.compare.heldout')}
          height={200}
          tickEvery={12}
        />
      </div>
    </Panel>
  )
}

function BenchmarkPanel({ remote, region }: { remote: { data: Benchmark | null; error: Error | null; reload: () => void }; region: string }) {
  if (remote.error && !remote.data)
    return (
      <Panel>
        <ErrorState title={t('m.compare.benchFailed')} message={errorMessage(remote.error)} onRetry={remote.reload} />
      </Panel>
    )
  const B = remote.data
  if (!B) return null
  const here = B.order.includes(region) ? region : null
  const mean = (v: Record<string, number> | null) => (v ? B.order.reduce((s, g) => s + (v[g] ?? 0), 0) / B.order.length : null)
  const rows = B.rows
    .filter((r) => r.loyo || r.fw)
    .map((r) => ({ ...r, ml: mean(r.loyo), mf: mean(r.fw) }))
    .sort((a, b) => (a.ml ?? a.mf ?? 1e9) - (b.ml ?? b.mf ?? 1e9))
  const floor = B.rows.find((r) => r.k === 'floor')
  const floorMean = mean(floor?.loyo ?? null)
  return (
    <Panel>
      <PanelHeader title={t('m.compare.bench')} description={t('m.compare.benchHint', { regions: B.order.map((g) => B.short[g] ?? g).join('، ') })} />
      <div className="fm-pad">
        <Notice tone="info" icon={<Info size={18} />}>
          {t('m.compare.noiseFloor', { pct: formatNumber(floorMean ?? 7, 1) })}
        </Notice>
      </div>
      <Table label={t('m.compare.bench')}>
        <thead>
          <tr>
            <Th>#</Th>
            <Th>{t('m.compare.method')}</Th>
            {here ? <Th numeric>{t('m.compare.hereLoyo')}</Th> : null}
            {here ? <Th numeric>{t('m.compare.hereFw')}</Th> : null}
            <Th numeric>{t('m.compare.meanLoyo')}</Th>
            <Th numeric>{t('m.compare.meanFw')}</Th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.k} data-current={r.k === 'floor' || undefined}>
              <Td numeric>{i + 1}</Td>
              <Td>
                <bdi>{r.name}</bdi>
              </Td>
              {here ? <Td numeric>{r.loyo?.[here] != null ? `${formatNumber(r.loyo[here], 1)}%` : '–'}</Td> : null}
              {here ? <Td numeric>{r.fw?.[here] != null ? `${formatNumber(r.fw[here], 1)}%` : '–'}</Td> : null}
              <Td numeric>{r.ml != null ? `${formatNumber(r.ml, 1)}%` : '–'}</Td>
              <Td numeric>{r.mf != null ? `${formatNumber(r.mf, 1)}%` : '–'}</Td>
            </tr>
          ))}
          {Object.keys(B.raw).length ? (
            <tr>
              <Td numeric>–</Td>
              <Td>{t('m.compare.rawSwitch')}</Td>
              {here ? <Td numeric>{B.raw[here] ? `${formatNumber(B.raw[here][0], 0)}%` : '–'}</Td> : null}
              {here ? <Td numeric>–</Td> : null}
              <Td numeric>{`${formatNumber(B.order.reduce((s, g) => s + (B.raw[g]?.[0] ?? 0), 0) / B.order.length, 0)}%`}</Td>
              <Td numeric>–</Td>
            </tr>
          ) : null}
        </tbody>
      </Table>
      <p className="fm-note fm-pad">{t('m.compare.benchNote')}</p>
    </Panel>
  )
}

function DownloadBenchmark({ data }: { data: Benchmark }) {
  const toast = useToast()
  return (
    <Button
      variant="filled"
      onClick={() => {
        const out = [['method', 'test', ...data.order].join(',')]
        for (const r of data.rows) {
          if (r.loyo) out.push([csvCell(r.name), 'held_out_year', ...data.order.map((g) => r.loyo![g] ?? '')].join(','))
          if (r.fw) out.push([csvCell(r.name), 'forward_2018_2021', ...data.order.map((g) => r.fw![g] ?? '')].join(','))
        }
        saveText('benchmark_all_methods.csv', out.join('\n'))
        toast.success(t('m.download.saved'))
      }}
    >
      <Download aria-hidden />
      <span className="lab-control-label">{t('m.compare.downloadBench')}</span>
    </Button>
  )
}
