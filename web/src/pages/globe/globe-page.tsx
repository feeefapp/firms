import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BoxSelect, CalendarDays, CalendarRange, Earth, Flag, Pause, Play, RotateCcw, Search, X } from 'lucide-react'
import { Button, IconButton } from '@feeef.dev/ui/primitives/button'
import { SegmentedControl } from '@feeef.dev/ui/primitives/segmented'
import { Slider } from '@feeef.dev/ui/primitives/slider'
import { Checkbox } from '@feeef.dev/ui/primitives/choice'
import { ListRow, ListSection } from '@feeef.dev/ui/primitives/list'
import { TextField } from '@feeef.dev/ui/primitives/text-field'
import { ToolbarGroup } from '@feeef.dev/ui/toolbar'
import { Sheet } from '@feeef.dev/ui/containers/sheet'
import { TemporalDialog } from '@feeef.dev/ui/filters/temporal-dialog'
import type { TemporalValue } from '@feeef.dev/ui/filters/temporal'
import { useSession } from '@/app/session'
import { ErrorState, LoadingState, Notice } from '@/components/ui/data'
import { regionTitle } from '@/lib/algorithms'
import { api, ApiError, type Job } from '@/lib/api'
import { errorMessage } from '@/lib/errors'
import { formatDate, formatNumber } from '@/lib/format'
import { setPageContext } from '@/lib/page-context'
import { ScreenDock, ScreenTop } from '@/shell/screen-slots'
import { dir, t } from '@/i18n/locale'
import { GlobeEngine, SYSTEM_COLORS, type DayData, type PickedRecord, type Stats } from './engine'
import { countryMask, loadCountries, outlineOf, type CountryShape } from './countries'
import { parseGlobe, rangeDays, SENSORS, writeGlobe, type GlobeState, type Sensor } from './globe-state'
import { AreaPanel, RecordDetails } from './panels'
import './globe.css'

type Load = { state: 'loading' | 'building' | 'error' | 'ready'; data?: DayData; error?: string; job?: Job }
type Area = { country: string | null; bbox: number[] }

const DAY_SPEEDS = ['60', '600', '3600'] as const
const RANGE_SPEEDS = ['3600', '21600', '86400'] as const
const FRP_STEPS = [0, 5, 20, 100] as const
const today = () => new Date().toISOString().slice(0, 10)
const daysAgo = (n: number) => new Date(Date.now() - n * 86400000).toISOString().slice(0, 10)
const SENSOR_OF_SYSTEM: Sensor[] = ['modis', 'viirs', 'landsat', 'geo']

async function fetchJson(url: string, signal: AbortSignal) {
  const response = await fetch(url, { credentials: 'same-origin', signal })
  const body = await response.json().catch(() => ({}))
  if (!response.ok && response.status !== 202) {
    const message = typeof body?.error === 'string' ? body.error : (body?.error?.message ?? `HTTP ${response.status}`)
    throw new ApiError(response.status, message)
  }
  return body as DayData & { job?: Job | string }
}

async function loadDay(date: string | null, signal: AbortSignal, onJob: (job: Job) => void): Promise<DayData> {
  for (let attempt = 0; attempt < 200; attempt++) {
    const body = await fetchJson(api.dayUrl(date ?? undefined), signal)
    if (body.cols && body.sats) return body
    // The server is building this day (tools/fetch_data.py): follow the job, then ask again.
    const job: Job = typeof body.job === 'string' ? { id: body.job, status: 'queued' } : (body.job ?? { id: '', status: 'queued' })
    onJob(job)
    if (job.status === 'failed') throw new Error(job.log_tail || t('m.globe.buildFailed'))
    await new Promise((r) => setTimeout(r, 2500))
    if (job.id) {
      try {
        const next = await api.job(job.id)
        onJob(next)
        if (next.status === 'failed') throw new Error(next.log_tail || t('m.globe.buildFailed'))
      } catch (failure) {
        if (failure instanceof ApiError && failure.status === 404) continue
        throw failure
      }
    }
  }
  throw new Error(t('m.globe.buildFailed'))
}

function rangeUrl(range: [string, string], area: Area) {
  const q = new URLSearchParams({ from: range[0], to: range[1], bbox: area.bbox.map((x) => Math.round(x * 1000) / 1000).join(',') })
  if (area.country) q.set('country', area.country)
  return `/api/range?${q}`
}

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ًͯ-ٟ]/g, '')
    .replace(/[أإآ]/g, 'ا')
    .trim()

function findCountry(list: CountryShape[], q: string | null) {
  if (!q) return null
  const n = norm(q)
  return list.find((c) => c.code === n) ?? list.find((c) => norm(c.en) === n || norm(c.name) === n) ?? null
}

/**
 * The fire globe: one day with the satellites and their swaths, or any range in a country or box;
 * a Maps-style filters card (period, area, sensors, satellites, confidence, FRP, day/night) at the
 * leading edge, an inspector pane at the end edge (the drawn area, the picked pixel). Everything
 * is in the address (globe-state.ts), which is also how the assistant drives it.
 */
export default function GlobePage() {
  const { regions } = useSession()
  const [search, setSearch] = useSearchParams()
  const g = useMemo(() => parseGlobe(search), [search])
  const patch = useCallback(
    (p: Partial<GlobeState>, push = false) => setSearch((prev) => writeGlobe(prev, p), { replace: !push }),
    [setSearch],
  )

  // ---------- countries (loaded once, after the first paint) ----------
  const [countries, setCountries] = useState<CountryShape[] | null>(null)
  useEffect(() => {
    let live = true
    loadCountries()
      .then((list) => live && setCountries(list))
      .catch(() => live && setCountries([]))
    return () => {
      live = false
    }
  }, [])
  const country = useMemo(() => (countries ? findCountry(countries, g.country) : null), [countries, g.country])

  // ---------- data: a day, or a range once it has an area ----------
  const area: Area | null = country ? { country: country.en, bbox: country.bbox } : g.bbox ? { country: null, bbox: g.bbox } : null
  const wantsRange = Boolean(g.range)
  const rangeKey = g.range && area ? rangeUrl(g.range, area) : null
  const waitingCountry = wantsRange && g.country && !countries
  const loadKey = rangeKey ?? (waitingCountry ? null : `day|${g.date ?? ''}`)
  const [load, setLoad] = useState<Load>({ state: 'loading' })
  const [attempt, setAttempt] = useState(0)
  useEffect(() => {
    if (!loadKey) return
    const controller = new AbortController()
    setLoad((prev) => ({ state: 'loading', data: prev.data }))
    const job = rangeKey ? fetchJson(rangeKey, controller.signal) : loadDay(g.date, controller.signal, (j) => setLoad((prev) => ({ ...prev, state: 'building', job: j })))
    job
      .then((data) => setLoad({ state: 'ready', data }))
      .catch((failure: unknown) => {
        if (!controller.signal.aborted) setLoad({ state: 'error', error: errorMessage(failure) })
      })
    return () => controller.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadKey, attempt])
  const data = load.state === 'ready' ? load.data : undefined
  const isRange = Boolean(data?.range)

  // ---------- engine ----------
  const host = useRef<HTMLDivElement>(null)
  const engine = useRef<GlobeEngine | null>(null)
  const [ready, setReady] = useState(false)
  const [simT, setSimT] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState<string>('600')
  const [drawing, setDrawing] = useState<0 | 1 | 2>(0)
  const [picked, setPicked] = useState<PickedRecord | null>(null)
  const patchRef = useRef(patch)
  patchRef.current = patch

  useLayoutEffect(() => {
    if (!data || !host.current) return
    // Building the scene takes a moment for ~400k records: let the loader paint first.
    let cancelled = false
    const id = window.setTimeout(() => {
      if (cancelled || !host.current) return
      try {
        const e = new GlobeEngine(host.current, data, {
          onPick: (r) => {
            setPicked(r)
            if (r) patchRef.current({ tab: 'record' })
          },
          onBoxPoint: (stage, bb) => {
            setDrawing(stage === 2 ? 0 : 2)
            if (bb) patchRef.current({ bbox: bb, tab: 'area' }, true)
          },
          onTick: (time, p) => {
            setSimT(time)
            setPlaying(p)
          },
        })
        engine.current = e
        const s = data.range ? RANGE_SPEEDS[2] : DAY_SPEEDS[1]
        setSpeed(s)
        e.setSpeed(Number(s))
        setReady(true)
      } catch (failure) {
        setLoad({ state: 'error', error: errorMessage(failure) })
      }
    }, 30)
    return () => {
      cancelled = true
      window.clearTimeout(id)
      const view = engine.current?.cameraView()
      engine.current?.dispose()
      engine.current = null
      setReady(false)
      setPicked(null)
      // keep the camera across a data change (another day, a range)
      if (view) pendingView.current = view
    }
  }, [data])
  const pendingView = useRef<{ lat: number; lon: number; altKm: number } | null>(null)
  useEffect(() => {
    if (ready && pendingView.current) {
      engine.current?.flyToView(pendingView.current)
      pendingView.current = null
    }
  }, [ready])

  // ---------- filters → engine ----------
  const sats = data?.sats ?? []
  const present = useMemo(() => sats.map((_, i) => Boolean(data?.cols.sat.includes(i))), [data, sats])
  const satMask = useMemo(
    () => sats.map((s) => (!g.sats || g.sats.includes(s.code)) && (!g.sensors || g.sensors.includes(SENSOR_OF_SYSTEM[s.system]))),
    [sats, g.sats, g.sensors],
  )
  const filterKey = `${satMask.join()}|${g.conf}|${g.frp}|${g.dn}`
  useEffect(() => {
    if (!ready) return
    engine.current?.setFilters({ sats: satMask, minConf: g.conf, minFrp: g.frp, dayNight: g.dn })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, filterKey])

  // country: mask + outline; fly there when it changes (unless the address also flies)
  const flewCountry = useRef<string | null>(null)
  useEffect(() => {
    const e = engine.current
    if (!ready || !e || !data) return
    if (!country) {
      e.setAreaMask(null)
      e.setOutline(null)
      flewCountry.current = null
      return
    }
    e.setAreaMask(countryMask(country, data.cols.lat, data.cols.lon))
    e.setOutline(outlineOf(country))
    if (flewCountry.current !== country.code && !g.cam && !g.bbox) e.flyToBox(country.bbox)
    flewCountry.current = country.code
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, data, country])

  // box from the address (drawn, the assistant, a link)
  const bboxKey = g.bbox?.join(',') ?? ''
  useEffect(() => {
    if (!ready || !engine.current) return
    engine.current.setBox(g.bbox)
    if (g.bbox && !g.cam) engine.current.flyToBox(g.bbox)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, bboxKey])

  // camera from the address (the assistant, a shared view)
  const camKey = g.cam ? `${g.cam.lat},${g.cam.lon},${g.cam.altKm}` : ''
  useEffect(() => {
    if (ready && g.cam) engine.current?.flyToView(g.cam)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, camKey])

  // ---------- counts (filters change, or the timeline moves) ----------
  const [stats, setStats] = useState<Stats | null>(null)
  const [boxStats, setBoxStats] = useState<Stats | null>(null)
  const bucket = Math.floor(simT / (isRange ? 3600 : 300))
  useEffect(() => {
    const e = engine.current
    if (!ready || !e) return
    setStats(e.stats())
    setBoxStats(g.bbox ? e.stats(g.bbox) : null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, filterKey, country, bboxKey, bucket])

  // ---------- what the assistant sees ----------
  useEffect(() => {
    setPageContext(() => ({
      mode: data?.range ? 'range' : 'day',
      shown: data?.range ? { from: data.range[0], to: data.range[1], source: data.source } : { day: data?.window[0] },
      country: country ? { code: country.code, name: country.en } : null,
      camera: engine.current?.cameraView() ?? null,
      visible_records: stats?.total ?? null,
      visible_frp_mw: stats ? Math.round(stats.frp) : null,
      per_satellite: stats ? Object.fromEntries(sats.map((s, i) => [s.code, stats.bySat[i]]).filter(([, n]) => n)) : null,
      selected_record: picked ? { satellite: picked.sat.code, lat: picked.lat, lon: picked.lon, time: new Date(picked.time * 1000).toISOString(), frp: picked.frp } : null,
    }))
    return () => setPageContext(null)
  }, [data, country, stats, sats, picked])

  // ---------- period dialog ----------
  const [period, setPeriod] = useState<null | 'day' | 'range'>(null)
  const [draft, setDraft] = useState<TemporalValue>(null)
  const openPeriod = (kind: 'day' | 'range') => {
    setDraft(kind === 'day' ? (data && !data.range ? data.window[0] : (g.date ?? daysAgo(1))) : g.range ? { from: g.range[0], to: g.range[1] } : { from: daysAgo(30), to: daysAgo(1) })
    setPeriod(kind)
  }

  // ---------- inspector ----------
  const inspectorOpen = Boolean(g.bbox || picked)
  const tab: 'area' | 'record' = g.tab === 'record' && picked ? 'record' : g.bbox ? 'area' : 'record'
  const closeInspector = () => {
    setPicked(null)
    engine.current?.clearSelection()
    patch({ bbox: null, tab: null })
  }

  const e = engine.current
  const span = e?.span ?? 86400
  const tMin = e?.tMin ?? 0
  const periodLabel = g.range ? `${formatDate(g.range[0])} → ${formatDate(g.range[1])}` : data && !data.range ? formatDate(data.window[0]) : g.date ? formatDate(g.date) : t('m.globe.today')
  const busy = load.state === 'loading' || load.state === 'building' || (Boolean(data) && !ready)

  return (
    <div className="fm-globe">
      <div ref={host} className="fm-globe-host" />
      <ScreenTop>
        <ToolbarGroup label={t('m.globe.period')}>
          <Button variant="ghost" appearance="toolbar" onClick={() => openPeriod(g.range ? 'range' : 'day')} aria-label={t('m.globe.pickPeriod', { period: periodLabel })}>
            {g.range ? <CalendarRange aria-hidden /> : <CalendarDays aria-hidden />}
            <span className="lab-control-label">{periodLabel}</span>
          </Button>
          <IconButton variant="ghost" appearance="toolbar" aria-label={t('m.globe.home')} onClick={() => engine.current?.flyHome()} disabled={!ready}>
            <Earth />
          </IconButton>
        </ToolbarGroup>
      </ScreenTop>
      <ScreenDock>
        {drawing ? (
          <Button
            variant="tonal"
            onClick={() => {
              engine.current?.setDrawing(false)
              engine.current?.setBox(g.bbox)
              setDrawing(0)
            }}
          >
            <X aria-hidden />
            <span className="lab-control-label">{t('m.globe.cancelBox')}</span>
          </Button>
        ) : (
          <Button
            variant="filled"
            disabled={!ready}
            onClick={() => {
              engine.current?.setDrawing(true)
              setDrawing(1)
            }}
          >
            <BoxSelect aria-hidden />
            <span className="lab-control-label">{t('m.globe.drawBox')}</span>
          </Button>
        )}
      </ScreenDock>

      {!data || load.state === 'error' ? (
        <div className="fm-globe-overlay">
          <div className="fm-globe-card">
            {load.state === 'error' ? (
              <ErrorState title={t('m.globe.failed')} message={load.error ?? ''} onRetry={() => setAttempt((n) => n + 1)} />
            ) : (
              <>
                <LoadingState label={load.state === 'building' ? t('m.globe.building') : rangeKey ? t('m.globe.loadingRange') : t('m.globe.loading')} />
                {load.job?.log_tail ? <pre className="fm-log" dir="ltr">{load.job.log_tail}</pre> : null}
              </>
            )}
          </div>
        </div>
      ) : busy ? (
        <div className="fm-globe-busy" role="status">
          {load.state === 'ready' ? t('m.globe.preparing') : rangeKey ? t('m.globe.loadingRange') : t('m.globe.loading')}
        </div>
      ) : null}

      {drawing ? (
        <div className="fm-globe-hint" role="status">
          {drawing === 1 ? t('m.globe.dragBox') : t('m.globe.secondCorner')}
        </div>
      ) : null}

      <FiltersSheet
        g={g}
        patch={patch}
        countries={countries}
        country={country}
        data={data}
        present={present}
        satMask={satMask}
        stats={stats}
        wantsRangeArea={wantsRange && !area}
        onPeriod={openPeriod}
        onDraw={() => {
          engine.current?.setDrawing(true)
          setDrawing(1)
        }}
        timeline={
          ready && e ? (
            <Timeline
              engine={e}
              simT={simT}
              playing={playing}
              speed={speed}
              speeds={isRange ? RANGE_SPEEDS : DAY_SPEEDS}
              isRange={isRange}
              onPlay={() => {
                e.setPlaying(!playing)
                setPlaying(!playing)
              }}
              onSpeed={(s) => {
                setSpeed(s)
                e.setSpeed(Number(s))
              }}
              onSeek={(v) => {
                e.setPlaying(false)
                e.setTime(v)
                setSimT(v)
              }}
              span={span}
              tMin={tMin}
            />
          ) : (
            <p className="fm-note fm-tl-wait">{t('m.globe.preparing')}</p>
          )
        }
      />

      <Sheet
        open={inspectorOpen}
        onOpenChange={(open) => (open ? undefined : closeInspector())}
        label={t('m.globe.inspector')}
        regular="pane"
        paneWidth={400}
        modal={false}
        header={
          <div className="fm-inspector-head">
            {g.bbox && picked ? (
              <SegmentedControl
                label={t('m.globe.inspector')}
                value={tab}
                onChange={(v) => patch({ tab: v })}
                options={[
                  { value: 'area', label: t('m.globe.tabArea') },
                  { value: 'record', label: t('m.globe.tabRecord') },
                ]}
              />
            ) : (
              <strong className="fm-inspector-title">{tab === 'area' ? t('m.globe.tabArea') : t('m.globe.record')}</strong>
            )}
          </div>
        }
      >
        {tab === 'record' && picked ? (
          <RecordDetails record={picked} onZoom={() => engine.current?.zoomToSelection()} onGoTo={() => engine.current?.setTime(picked.time - tMin - 60)} />
        ) : g.bbox ? (
          <AreaPanel
            bbox={g.bbox}
            date={data && !data.range ? data.window[0] : null}
            regions={regions.map((r) => ({ name: r.name, title: regionTitle(r), bbox: r.bbox }))}
            stats={boxStats}
            sats={sats}
            onZoom={() => g.bbox && engine.current?.flyToBox(g.bbox)}
            onRedraw={() => {
              engine.current?.setDrawing(true)
              setDrawing(1)
            }}
            onClear={() => patch({ bbox: null, tab: picked ? 'record' : null })}
          />
        ) : null}
      </Sheet>

      <TemporalDialog
        open={period !== null}
        label={period === 'range' ? t('m.globe.pickRangeTitle') : t('m.globe.pickDayTitle')}
        close={() => setPeriod(null)}
        formId="firms-globe-period"
        dir={dir}
        config={period === 'range' ? { type: 'dateRange', min: '2000-11-01', max: today() } : { type: 'date', max: daysAgo(1), min: daysAgo(60) }}
        intro={period === 'range' ? t('m.globe.pickRangeHint') : t('m.globe.pickDayHint')}
        value={draft}
        onChange={setDraft}
        resetKey={period}
        onSubmit={(event) => {
          event.preventDefault()
          if (period === 'day' && typeof draft === 'string' && draft) {
            patch({ date: draft, range: null }, true)
            setPeriod(null)
          } else if (period === 'range' && draft && typeof draft === 'object' && draft.from && draft.to) {
            const r: [string, string] = draft.from <= draft.to ? [draft.from, draft.to] : [draft.to, draft.from]
            patch({ range: r }, true)
            setPeriod(null)
          }
        }}
      />
    </div>
  )
}

/** The leading card: search a country, the timeline, and every filter. */
function FiltersSheet({
  g,
  patch,
  countries,
  country,
  data,
  present,
  satMask,
  stats,
  wantsRangeArea,
  onPeriod,
  onDraw,
  timeline,
}: {
  g: GlobeState
  patch: (p: Partial<GlobeState>, push?: boolean) => void
  countries: CountryShape[] | null
  country: CountryShape | null
  data?: DayData
  present: boolean[]
  satMask: boolean[]
  stats: Stats | null
  wantsRangeArea: boolean
  onPeriod: (kind: 'day' | 'range') => void
  onDraw: () => void
  timeline: React.ReactNode
}) {
  const [query, setQuery] = useState('')
  const matches = useMemo(() => {
    if (!query.trim() || !countries) return []
    const n = norm(query)
    return countries.filter((c) => norm(c.name).includes(n) || norm(c.en).includes(n) || c.code === n).slice(0, 40)
  }, [query, countries])
  const sats = data?.sats ?? []
  const sensorOn = (s: Sensor) => !g.sensors || g.sensors.includes(s)
  const sensorsPresent = SENSORS.filter((_, k) => sats.some((x, i) => present[i] && x.system === k))
  const toggleSensor = (s: Sensor, on: boolean) => {
    const cur = g.sensors ?? [...SENSORS]
    const next = on ? [...new Set([...cur, s])] : cur.filter((x) => x !== s)
    patch({ sensors: next.length === SENSORS.length ? null : next })
  }
  const toggleSat = (code: string, on: boolean) => {
    const all = sats.filter((_, i) => present[i]).map((s) => s.code)
    const cur = g.sats ?? all
    const next = on ? [...new Set([...cur, code])] : cur.filter((x) => x !== code)
    patch({ sats: next.length >= all.length ? null : next })
  }
  const filtered = Boolean(g.sats || g.sensors || g.conf || g.frp || g.dn || g.country)
  const rangeDaysN = g.range ? rangeDays(g.range) : 0

  return (
    <Sheet
      open
      onOpenChange={() => {}}
      label={t('m.globe.filters')}
      detents={['peek', 'medium', 'large']}
      defaultDetent="peek"
      dismissible={false}
      backgroundInteraction="medium"
      regular="card"
      cardWidth={380}
      modal={false}
      header={
        <div className="fm-filters-head" data-lab-sheet-handle="">
          <TextField
            variant="tonal"
            placeholder={country ? country.name : t('m.globe.searchCountry')}
            aria-label={t('m.globe.searchCountry')}
            leadingIcon={<Search size={18} />}
            value={query}
            onValueChange={setQuery}
            autoComplete="off"
          />
          {timeline}
        </div>
      }
    >
      {query.trim() ? (
        <ListSection header={t('m.globe.countries')}>
          {!countries ? (
            <ListRow static title={t('m.common.loading')} />
          ) : matches.length ? (
            matches.map((c) => (
              <ListRow
                key={c.code}
                leading={<Flag size={18} aria-hidden />}
                title={c.name}
                subtitle={c.name !== c.en ? c.en : undefined}
                selected={country?.code === c.code}
                onClick={() => {
                  patch({ country: c.code, bbox: null, cam: null }, true)
                  setQuery('')
                }}
              />
            ))
          ) : (
            <ListRow static title={t('m.globe.noCountry')} />
          )}
        </ListSection>
      ) : (
        <div className="fm-stack fm-filters">
          {stats ? (
            <p className="fm-note fm-filters-count">
              {t('m.globe.showing', { count: formatNumber(stats.total), frp: formatNumber(stats.frp, 0) })}
              {data?.truncated ? ` · ${t('m.globe.truncated')}` : ''}
            </p>
          ) : null}
          {data?.note ? <Notice tone="info">{data.note}</Notice> : null}

          <ListSection header={t('m.globe.period')} footer={g.range ? t('m.globe.rangeFoot', { days: rangeDaysN }) : t('m.globe.dayFoot')}>
            <div className="fm-filter-row">
              <SegmentedControl
                label={t('m.globe.period')}
                value={g.range ? 'range' : 'day'}
                onChange={(v) => (v === 'day' ? patch({ range: null }, true) : onPeriod('range'))}
                options={[
                  { value: 'day', label: t('m.globe.oneDay') },
                  { value: 'range', label: t('m.globe.range') },
                ]}
              />
              <Button variant="text" onClick={() => onPeriod(g.range ? 'range' : 'day')}>
                {g.range ? <CalendarRange aria-hidden /> : <CalendarDays aria-hidden />}
                {g.range ? `${formatDate(g.range[0])} → ${formatDate(g.range[1])}` : formatDate(data && !data.range ? data.window[0] : (g.date ?? daysAgo(1)))}
              </Button>
            </div>
            {wantsRangeArea ? <Notice tone="warning">{t('m.globe.rangeNeedsArea')}</Notice> : null}
          </ListSection>

          <ListSection header={t('m.globe.area')}>
            {country ? (
              <ListRow
                leading={<Flag size={18} aria-hidden />}
                title={country.name}
                trailing={
                  <IconButton variant="ghost" aria-label={t('m.globe.clearCountry')} onClick={() => patch({ country: null })}>
                    <X />
                  </IconButton>
                }
                static
              />
            ) : (
              <ListRow static title={t('m.globe.everywhere')} subtitle={t('m.globe.searchAbove')} />
            )}
            <ListRow leading={<BoxSelect size={18} aria-hidden />} title={g.bbox ? t('m.globe.redraw') : t('m.globe.drawBox')} onClick={onDraw} />
          </ListSection>

          {sensorsPresent.length > 1 ? (
            <ListSection header={t('m.globe.sensors')}>
              <div className="fm-chips">
                {sensorsPresent.map((s) => (
                  <Checkbox
                    key={s}
                    controlSize="small"
                    label={
                      <span className="fm-chip-label">
                        <i className="fm-swatch" style={{ background: SYSTEM_COLORS[SENSORS.indexOf(s)] }} aria-hidden />
                        {t(`m.globe.sensor.${s}`)}
                        {stats ? <small> {formatNumber(stats.bySystem[SENSORS.indexOf(s)])}</small> : null}
                      </span>
                    }
                    checked={sensorOn(s)}
                    onCheckedChange={(on) => toggleSensor(s, on)}
                  />
                ))}
              </div>
            </ListSection>
          ) : null}

          <ListSection header={t('m.globe.satellites')}>
            {sats.map((s, i) =>
              present[i] ? (
                <ListRow
                  key={s.code}
                  leading={<i className="fm-swatch" style={{ background: SYSTEM_COLORS[s.system] }} aria-hidden />}
                  title={<span dir="ltr">{`${s.symbol} ${s.name}`}</span>}
                  subtitle={s.instrument}
                  trailing={
                    <span className="fm-sat-trail">
                      {stats ? <small>{formatNumber(stats.bySat[i])}</small> : null}
                      <Checkbox controlSize="small" aria-label={s.name} checked={satMask[i]} disabled={!sensorOn(SENSOR_OF_SYSTEM[s.system])} onCheckedChange={(on) => toggleSat(s.code, on)} />
                    </span>
                  }
                  static
                />
              ) : null,
            )}
          </ListSection>

          <ListSection header={t('m.globe.confidence')}>
            <div className="fm-filter-row">
              <SegmentedControl
                label={t('m.globe.confidence')}
                value={String(g.conf)}
                onChange={(v) => patch({ conf: Number(v) as 0 | 1 | 2 })}
                options={[
                  { value: '0', label: t('m.conf.all') },
                  { value: '1', label: t('m.conf.nominal') },
                  { value: '2', label: t('m.conf.high') },
                ]}
              />
            </div>
          </ListSection>

          <ListSection header={t('m.globe.minFrp')} footer={g.frp && !FRP_STEPS.includes(g.frp as never) ? t('m.globe.frpCustom', { frp: g.frp }) : undefined}>
            <div className="fm-filter-row">
              <SegmentedControl
                label={t('m.globe.minFrp')}
                value={String(FRP_STEPS.includes(g.frp as never) ? g.frp : 0)}
                onChange={(v) => patch({ frp: Number(v) })}
                options={FRP_STEPS.map((f) => ({ value: String(f), label: f ? `≥ ${f} MW` : t('m.conf.all') }))}
              />
            </div>
          </ListSection>

          <ListSection header={t('m.globe.dayNight')}>
            <div className="fm-filter-row">
              <SegmentedControl
                label={t('m.globe.dayNight')}
                value={String(g.dn)}
                onChange={(v) => patch({ dn: Number(v) as 0 | 1 | 2 })}
                options={[
                  { value: '0', label: t('m.conf.all') },
                  { value: '1', label: t('m.search.day') },
                  { value: '2', label: t('m.search.night') },
                ]}
              />
            </div>
          </ListSection>

          {filtered ? (
            <Button variant="text" onClick={() => patch({ sats: null, sensors: null, conf: 0, frp: 0, dn: 0, country: null })}>
              <RotateCcw aria-hidden />
              {t('m.globe.resetFilters')}
            </Button>
          ) : null}
        </div>
      )}
    </Sheet>
  )
}

function Timeline({
  engine,
  simT,
  playing,
  speed,
  speeds,
  isRange,
  onPlay,
  onSpeed,
  onSeek,
  span,
  tMin,
}: {
  engine: GlobeEngine
  simT: number
  playing: boolean
  speed: string
  speeds: readonly string[]
  isRange: boolean
  onPlay: () => void
  onSpeed: (s: string) => void
  onSeek: (t: number) => void
  span: number
  tMin: number
}) {
  const at = (v: number) => new Date((tMin + v) * 1000).toISOString()
  const clock = isRange ? `${formatDate(at(simT).slice(0, 10))} ${at(simT).slice(11, 16)}` : `${at(simT).slice(11, 16)} UTC`
  const speedLabel = (s: string) => (isRange ? t(`m.globe.speedRange.${s}`) : `${s}×`)
  return (
    <section className="fm-tl" aria-label={t('m.globe.timeline')}>
      <div className="fm-tl-row">
        <IconButton variant="tonal" controlSize="small" aria-label={playing ? t('m.globe.pause') : t('m.globe.play')} onClick={onPlay}>
          {playing ? <Pause /> : <Play />}
        </IconButton>
        <span className="fm-tl-clock" dir="ltr">
          {clock}
        </span>
        <SegmentedControl label={t('m.globe.speed')} className="fm-segmented-box" value={speed} onChange={onSpeed} options={speeds.map((s) => ({ value: s, label: speedLabel(s) }))} />
      </div>
      <Histogram engine={engine} simT={simT} onSeek={onSeek} />
      <Slider
        label={t('m.globe.time')}
        trackStyle="thin"
        controlSize="small"
        min={-600}
        max={Math.round(span)}
        step={isRange ? 600 : 10}
        value={simT}
        onValueChange={onSeek}
        getValueText={(v) => (isRange ? `${at(v).slice(0, 10)} ${at(v).slice(11, 16)} UTC` : `${at(v).slice(11, 16)} UTC`)}
      />
    </section>
  )
}

/** Detections per bin by system; the line marks now. Click to jump. */
function Histogram({ engine, simT, onSeek }: { engine: GlobeEngine; simT: number; onSeek: (t: number) => void }) {
  const canvas = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = canvas.current
    if (!c) return
    const w = c.clientWidth
    const h = c.clientHeight
    if (!w) return
    const dpr = devicePixelRatio
    c.width = w * dpr
    c.height = h * dpr
    const g = c.getContext('2d')!
    g.setTransform(dpr, 0, 0, dpr, 0, 0)
    g.clearRect(0, 0, w, h)
    const total = engine.span + 600
    const rtl = dir === 'rtl'
    const x = (t: number) => {
      const p = ((t + 600) / total) * w
      return rtl ? w - p : p
    }
    const NB = engine.bins[0].length
    let max = 1
    for (let b = 0; b < NB; b++) max = Math.max(max, engine.bins.reduce((s, a) => s + a[b], 0))
    const bw = Math.max(1, Math.abs(x(engine.binSize) - x(0)) - 1)
    for (let b = 0; b < NB; b++) {
      let y = h
      engine.bins.forEach((bins, k) => {
        const v = (bins[b] / max) * (h - 4)
        g.fillStyle = SYSTEM_COLORS[k]
        const x0 = rtl ? x((b + 1) * engine.binSize) : x(b * engine.binSize)
        g.fillRect(x0, y - v, bw, v)
        y -= v
      })
    }
    g.fillStyle = getComputedStyle(c).color
    g.fillRect(x(simT) - 1, 0, 2, h)
  }, [engine, simT])
  return (
    <canvas
      ref={canvas}
      className="fm-tl-hist"
      aria-hidden
      onClick={(ev) => {
        const r = ev.currentTarget.getBoundingClientRect()
        const p = (ev.clientX - r.left) / r.width
        onSeek((dir === 'rtl' ? 1 - p : p) * (engine.span + 600) - 600)
      }}
    />
  )
}
