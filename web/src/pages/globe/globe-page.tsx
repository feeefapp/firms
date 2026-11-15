import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BoxSelect, Clock, Download, Earth, Flag, Flame, MapPinned, Pause, Play, Search, Trash2, X, ZoomIn } from 'lucide-react'
import { Button, IconButton } from '@feeef.dev/ui/primitives/button'
import { SegmentedControl } from '@feeef.dev/ui/primitives/segmented'
import { Slider } from '@feeef.dev/ui/primitives/slider'
import { NumberField } from '@feeef.dev/ui/primitives/number-field'
import { ListRow, ListSection } from '@feeef.dev/ui/primitives/list'
import { TextField } from '@feeef.dev/ui/primitives/text-field'
import { ToolbarGroup } from '@feeef.dev/ui/toolbar'
import { Sheet, useSheet } from '@feeef.dev/ui/containers/sheet'
import { PresentationDock } from '@feeef.dev/ui/presentation/dock'
import { FilterBar, type FilterOption, type FilterValue } from '@feeef.dev/ui/filter-bar'
import { useSession } from '@/app/session'
import { ErrorState, LoadingState, Notice } from '@/components/ui/data'
import { regionTitle } from '@/lib/algorithms'
import { api, ApiError, type Job } from '@/lib/api'
import { errorMessage } from '@/lib/errors'
import { formatDate, formatNumber } from '@/lib/format'
import { setPageContext } from '@/lib/page-context'
import { ScreenDock, ScreenTop } from '@/shell/screen-slots'
import { dir, t } from '@/i18n/locale'
import { GlobeEngine, SYSTEM_COLORS, type DayData, type DaySat, type PickedRecord, type Stats } from './engine'
import { countryMask, loadCountries, outlineOf, type CountryShape } from './countries'
import { parseGlobe, rangeDays, SENSORS, writeGlobe, type GlobeState, type Sensor } from './globe-state'
import { AreaPanel, RecordDetails } from './panels'
import './globe.css'

type Load = { state: 'loading' | 'building' | 'error' | 'ready'; data?: DayData; error?: string; job?: Job }
type Area = { country: string | null; bbox: number[] }

const DAY_SPEEDS = ['60', '600', '3600'] as const
const RANGE_SPEEDS = ['3600', '21600', '86400'] as const
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

const yesterday = () => daysAgo(1)

/**
 * The fire globe. The app bar holds every filter (FilterBar: period, country, sensors, satellites,
 * confidence, FRP, day/night); a Maps-style card at the leading edge searches places and lists what
 * is shown and where the fires are; an inspector pane at the end edge shows the drawn area or the
 * picked pixel; the dock plays the timeline and draws areas. Both sheets live inside the globe's
 * stage (between the app bar and the dock). Everything is in the address (globe-state.ts), which is
 * also how the assistant drives it.
 */
export default function GlobePage() {
  const { regions } = useSession()
  const [search, setSearch] = useSearchParams()
  const g = useMemo(() => parseGlobe(search), [search])
  const patch = useCallback(
    (p: Partial<GlobeState>, push = false) => setSearch((prev) => writeGlobe(prev, p), { replace: !push }),
    [setSearch],
  )
  const [stage, setStage] = useState<HTMLDivElement | null>(null)
  const [query, setQuery] = useState('')
  // From the kit's regular breakpoint the card sits at the side, so the scrubber floats above the
  // dock; below it the card is a bottom sheet over the dock and keeps the scrubber inside.
  const [wide, setWide] = useState(false)
  useEffect(() => {
    if (!stage) return
    const ro = new ResizeObserver(([entry]) => setWide(entry.contentRect.width >= 720))
    ro.observe(stage)
    return () => ro.disconnect()
  }, [stage])

  // ---------- countries (loaded once) ----------
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
  const rangeKey = g.range && area ? rangeUrl(g.range, area) : null
  const waitingCountry = Boolean(g.range && g.country && !countries)
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
  const pendingView = useRef<{ lat: number; lon: number; altKm: number } | null>(null)

  useLayoutEffect(() => {
    if (!data || !host.current) return
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
      if (view) pendingView.current = view
    }
  }, [data])
  useEffect(() => {
    if (ready && pendingView.current) {
      engine.current?.flyToView(pendingView.current)
      pendingView.current = null
    }
  }, [ready])

  // ---------- filters → engine ----------
  const sats = useMemo(() => data?.sats ?? [], [data])
  const present = useMemo(() => {
    const seen = new Set(data?.cols.sat ?? [])
    return sats.map((_, i) => seen.has(i))
  }, [data, sats])
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

  const bboxKey = g.bbox?.join(',') ?? ''
  useEffect(() => {
    if (!ready || !engine.current) return
    engine.current.setBox(g.bbox)
    if (g.bbox && !g.cam) engine.current.flyToBox(g.bbox)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, bboxKey])

  const camKey = g.cam ? `${g.cam.lat},${g.cam.lon},${g.cam.altKm}` : ''
  useEffect(() => {
    if (ready && g.cam) engine.current?.flyToView(g.cam)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, camKey])

  // ---------- results (filters change, or the timeline moves) ----------
  const [stats, setStats] = useState<Stats | null>(null)
  const [boxStats, setBoxStats] = useState<Stats | null>(null)
  const [spots, setSpots] = useState<ReturnType<GlobeEngine['hotspots']>>([])
  const bucket = Math.floor(simT / (isRange ? 3600 : 300))
  useEffect(() => {
    const e = engine.current
    if (!ready || !e) return
    setStats(e.stats())
    setBoxStats(g.bbox ? e.stats(g.bbox) : null)
    setSpots(e.hotspots(8, isRange ? 0.25 : 0.1))
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
      top_hotspots: spots.slice(0, 5).map((h) => ({ lat: +h.lat.toFixed(3), lon: +h.lon.toFixed(3), pixels: h.count, frp_mw: Math.round(h.frp) })),
      selected_record: picked ? { satellite: picked.sat.code, lat: picked.lat, lon: picked.lon, time: new Date(picked.time * 1000).toISOString(), frp: picked.frp } : null,
    }))
    return () => setPageContext(null)
  }, [data, country, stats, sats, picked, spots])

  // ---------- filter bar ----------
  const [pinned, setPinned] = useState<string[]>(['day', 'range', 'country', 'frp', 'sensor:viirs', 'sensor:modis'])
  const shownDay = data && !data.range ? data.window[0] : (g.date ?? null)
  const options = useMemo<FilterOption[]>(() => {
    // Sensors and satellites are on/off filters: any that are on are shown, none on shows all.
    const onOff: FilterOption[] = [
      ...SENSORS.filter((_, k) => sats.some((x, i) => present[i] && x.system === k)).map((sensor) => ({
        id: `sensor:${sensor}`,
        label: t(`m.globe.sensor.${sensor}`),
        description: t('m.globe.sensorsHint'),
        keywords: [t('m.globe.sensors')],
      })),
      ...sats
        .filter((_, i) => present[i])
        .map((x) => ({ id: `sat:${x.code}`, label: `${x.symbol} ${x.name}`, description: `${x.instrument} · ${t('m.globe.satellitesHint')}`, keywords: [t('m.globe.satellites'), x.code] })),
    ]
    return [
      { id: 'day', label: t('m.globe.oneDay'), description: t('m.globe.dayFoot'), type: 'date', min: daysAgo(60), max: yesterday() },
      { id: 'range', label: t('m.globe.range'), description: t('m.globe.pickRangeHint'), type: 'dateRange', min: '2000-11-01', max: today() },
      { id: 'country', label: t('m.globe.country'), description: t('m.globe.searchAbove'), type: 'enum', choices: (countries ?? []).map((c) => ({ value: c.code, label: c.name })) },
      { id: 'conf', label: t('m.globe.confidence'), type: 'enum', choices: [{ value: '1', label: t('m.conf.nominal') }, { value: '2', label: t('m.conf.high') }] },
      {
        id: 'frp',
        label: t('m.globe.minFrp'),
        description: t('m.search.minFrpHint'),
        type: 'custom',
        renderEditor: (v, on) => (
          <NumberField label={t('m.globe.minFrp')} unit="MW" min={0} max={5000} step={1} value={typeof v === 'string' ? Number(v) || 0 : 0} onValueChange={(n) => on(n > 0 ? String(n) : null)} />
        ),
        formatValue: (v) => (typeof v === 'string' ? `≥ ${v} MW` : ''),
      },
      { id: 'dn', label: t('m.globe.dayNight'), type: 'enum', choices: [{ value: 'day', label: t('m.search.day') }, { value: 'night', label: t('m.search.night') }] },
      ...onOff,
    ]
  }, [countries, sats, present])
  const values: Record<string, FilterValue> = {
    day: g.range ? null : shownDay,
    range: g.range ? { from: g.range[0], to: g.range[1] } : null,
    country: country?.code ?? null,
    conf: g.conf ? String(g.conf) : null,
    frp: g.frp ? String(g.frp) : null,
    dn: g.dn === 1 ? 'day' : g.dn === 2 ? 'night' : null,
  }
  const onValues = (next: Record<string, FilterValue>) => {
    const str = (v: FilterValue) => (typeof v === 'string' && v ? v : null)
    const p: Partial<GlobeState> = {}
    const r = next.range && typeof next.range === 'object' && next.range.from && next.range.to ? next.range : null
    const rangeNow = r ? ([r.from <= r.to ? r.from : r.to, r.from <= r.to ? r.to : r.from] as [string, string]) : null
    if (JSON.stringify(rangeNow) !== JSON.stringify(g.range)) p.range = rangeNow
    if (str(next.day) !== values.day) {
      p.date = str(next.day)
      if (str(next.day)) p.range = null
    }
    if (str(next.country) !== values.country) {
      p.country = str(next.country)
      p.cam = null
    }
    if (str(next.conf) !== values.conf) p.conf = (Number(str(next.conf)) || 0) as 0 | 1 | 2
    if (str(next.frp) !== values.frp) p.frp = Number(str(next.frp)) || 0
    if (str(next.dn) !== values.dn) p.dn = str(next.dn) === 'day' ? 1 : str(next.dn) === 'night' ? 2 : 0
    if (Object.keys(p).length) patch(p, 'range' in p || 'date' in p || 'country' in p)
  }
  const onIds = [...(g.sensors ?? []).map((x) => `sensor:${x}`), ...(g.sats ?? []).map((x) => `sat:${x}`)]
  const onOffChange = (ids: string[]) => {
    const sensors = ids.filter((x) => x.startsWith('sensor:')).map((x) => x.slice(7) as Sensor)
    const picked = ids.filter((x) => x.startsWith('sat:')).map((x) => x.slice(4))
    patch({ sensors: sensors.length ? sensors : null, sats: picked.length ? picked : null })
  }
  const filtered = Boolean(g.sats || g.sensors || g.conf || g.frp || g.dn || g.country)

  // ---------- inspector ----------
  const inspectorOpen = Boolean(g.bbox || picked)
  const tab: 'area' | 'record' = g.tab === 'record' && picked ? 'record' : g.bbox ? 'area' : 'record'
  const closeInspector = () => {
    setPicked(null)
    engine.current?.clearSelection()
    patch({ bbox: null, tab: null })
  }
  const startDrawing = () => {
    engine.current?.setDrawing(true)
    setDrawing(1)
  }
  const downloadCsv = () => {
    const e = engine.current
    if (!e || !g.bbox) return
    const url = URL.createObjectURL(new Blob([e.csv(g.bbox)], { type: 'text/csv' }))
    const a = document.createElement('a')
    a.href = url
    a.download = `firms_${g.range ? g.range.join('_') : (shownDay ?? 'day')}_${g.bbox.join('_')}.csv`
    a.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  const e = engine.current
  const span = e?.span ?? 86400
  const tMin = e?.tMin ?? 0
  const at = (v: number) => new Date((tMin + v) * 1000).toISOString()
  const clock = !e ? '--:--' : isRange ? `${formatDate(at(simT).slice(0, 10))} ${at(simT).slice(11, 16)}` : `${at(simT).slice(11, 16)} UTC`
  const seek = (v: number) => {
    engine.current?.setPlaying(false)
    engine.current?.setTime(v)
    setSimT(v)
  }
  const busy = load.state === 'loading' || load.state === 'building' || (Boolean(data) && !ready)
  const periodLabel = g.range
    ? `${formatDate(g.range[0])} → ${formatDate(g.range[1])} · ${t('m.globe.days', { count: rangeDays(g.range) })}`
    : shownDay
      ? formatDate(shownDay)
      : t('m.globe.today')

  return (
    <div className="fm-globe">
      <div ref={host} className="fm-globe-host" />
      <ScreenTop>
        <FilterBar
          label={t('m.globe.filters')}
          options={options}
          value={onIds}
          onChange={onOffChange}
          values={values}
          onValuesChange={onValues}
          pinned={pinned}
          onPinnedChange={setPinned}
          onBack={filtered ? () => patch({ sats: null, sensors: null, conf: 0, frp: 0, dn: 0, country: null }) : undefined}
          trailing={
            <ToolbarGroup label={t('m.globe.view')}>
              <IconButton variant="text" appearance="toolbar" aria-label={t('m.globe.home')} onClick={() => engine.current?.flyHome()} disabled={!ready}>
                <Earth />
              </IconButton>
            </ToolbarGroup>
          }
        />
      </ScreenTop>
      <ScreenDock>
        <ToolbarGroup label={t('m.globe.timeline')}>
          <IconButton variant="text" appearance="toolbar" aria-label={playing ? t('m.globe.pause') : t('m.globe.play')} disabled={!ready} onClick={() => {
            engine.current?.setPlaying(!playing)
            setPlaying(!playing)
          }}>
            {playing ? <Pause /> : <Play />}
          </IconButton>
          <span className="fm-dock-clock" dir="ltr">{clock}</span>
        </ToolbarGroup>
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
          <Button variant={inspectorOpen ? 'tonal' : 'filled'} disabled={!ready} onClick={startDrawing}>
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

      {wide && ready && e ? (
        <section className="fm-globe-scrub" data-pane={inspectorOpen || undefined} aria-label={t('m.globe.timeline')}>
          <Scrubber engine={e} simT={simT} isRange={isRange} onSeek={seek} span={span} at={at} />
        </section>
      ) : null}

      {/* The sheets' stage: the globe between the floating app bar and the dock. */}
      <div ref={setStage} className="fm-globe-stage" />
      {stage ? (
        <>
          <Sheet
            open
            onOpenChange={() => {}}
            label={t('m.globe.explore')}
            container={stage}
            detents={['peek', 'medium', 'large']}
            defaultDetent="medium"
            dismissible={false}
            backgroundInteraction="medium"
            regular="card"
            modal={false}
            header={<ExploreSearch value={query} onChange={setQuery} placeholder={country ? country.name : t('m.globe.searchPlace')} />}
          >
            {query.trim() ? (
              <SearchResults
                query={query}
                countries={countries}
                regions={regions.map((r) => ({ name: r.name, title: regionTitle(r), bbox: r.bbox }))}
                current={country?.code ?? null}
                onCountry={(c) => {
                  patch({ country: c.code, bbox: null, cam: null }, true)
                  setQuery('')
                }}
                onRegion={(bb) => {
                  patch({ bbox: bb, tab: 'area', cam: null }, true)
                  setQuery('')
                }}
              />
            ) : (
              <Explore
                periodLabel={periodLabel}
                data={data}
                stats={stats}
                sats={sats}
                present={present}
                solo={g.sats?.length === 1 ? g.sats[0] : null}
                onSolo={(code) => patch({ sats: g.sats?.length === 1 && g.sats[0] === code ? null : [code] })}
                spots={spots}
                isRange={isRange}
                onSpot={(h) => engine.current?.flyToView({ lat: h.lat, lon: h.lon, altKm: isRange ? 120 : 60 })}
                rangeNeedsArea={Boolean(g.range && !area)}
                timeline={
                  ready && e ? (
                    <Timeline
                      engine={e}
                      simT={simT}
                      speed={speed}
                      speeds={isRange ? RANGE_SPEEDS : DAY_SPEEDS}
                      isRange={isRange}
                      onSpeed={(s) => {
                        setSpeed(s)
                        e.setSpeed(Number(s))
                      }}
                      onSeek={seek}
                      span={span}
                      at={at}
                      scrubber={!wide}
                    />
                  ) : null
                }
              />
            )}
          </Sheet>

          <Sheet
            open={inspectorOpen}
            onOpenChange={(open) => (open ? undefined : closeInspector())}
            label={t('m.globe.inspector')}
            container={stage}
            regular="pane"
            paneWidth={400}
            modal={false}
            title={g.bbox && picked ? undefined : tab === 'area' ? t('m.globe.tabArea') : t('m.globe.record')}
            leading={
              g.bbox && picked ? (
                <ToolbarGroup label={t('m.globe.inspector')}>
                  <SegmentedControl
                    label={t('m.globe.inspector')}
                    value={tab}
                    onChange={(v) => patch({ tab: v })}
                    options={[
                      { value: 'area', label: t('m.globe.tabArea') },
                      { value: 'record', label: t('m.globe.tabRecord') },
                    ]}
                  />
                </ToolbarGroup>
              ) : undefined
            }
            trailing={
              tab === 'area' && g.bbox ? (
                <ToolbarGroup label={t('m.globe.areaActions')}>
                  <IconButton variant="text" appearance="toolbar" aria-label={t('m.globe.zoomTo')} onClick={() => g.bbox && engine.current?.flyToBox(g.bbox)}>
                    <ZoomIn />
                  </IconButton>
                  <IconButton variant="text" appearance="toolbar" aria-label={t('m.globe.redraw')} onClick={startDrawing}>
                    <BoxSelect />
                  </IconButton>
                  <IconButton variant="text" appearance="toolbar" aria-label={t('m.globe.clearBox')} onClick={() => patch({ bbox: null, tab: picked ? 'record' : null })}>
                    <Trash2 />
                  </IconButton>
                </ToolbarGroup>
              ) : picked ? (
                <ToolbarGroup label={t('m.globe.pixelActions')}>
                  <IconButton variant="text" appearance="toolbar" aria-label={t('m.globe.goToTime')} onClick={() => engine.current?.setTime(picked.time - tMin - 60)}>
                    <Clock />
                  </IconButton>
                </ToolbarGroup>
              ) : undefined
            }
            dock={
              tab === 'area' && g.bbox ? (
                <PresentationDock label={t('m.globe.areaActions')}>
                  <Button variant="filled" disabled={!boxStats?.total} onClick={downloadCsv}>
                    <Download aria-hidden />
                    {t('m.globe.downloadCsv', { count: formatNumber(boxStats?.total ?? 0) })}
                  </Button>
                </PresentationDock>
              ) : picked ? (
                <PresentationDock label={t('m.globe.pixelActions')}>
                  <Button variant="filled" onClick={() => engine.current?.zoomToSelection()}>
                    <ZoomIn aria-hidden />
                    {t('m.globe.zoomIn')}
                  </Button>
                </PresentationDock>
              ) : undefined
            }
          >
            {tab === 'record' && picked ? (
              <RecordDetails record={picked} />
            ) : g.bbox ? (
              <AreaPanel
                bbox={g.bbox}
                date={data && !data.range ? data.window[0] : null}
                regions={regions.map((r) => ({ name: r.name, title: regionTitle(r), bbox: r.bbox }))}
                stats={boxStats}
                sats={sats}
              />
            ) : null}
          </Sheet>
        </>
      ) : null}
    </div>
  )
}

/** The card's header: a search field that also drags the card (Maps). */
function ExploreSearch({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <div className="fm-sheet-search" data-lab-sheet-handle="">
      <TextField variant="tonal" placeholder={placeholder} aria-label={t('m.globe.searchPlace')} leadingIcon={<Search size={18} />} value={value} onValueChange={onChange} autoComplete="off" />
    </div>
  )
}

function SearchResults({
  query,
  countries,
  regions,
  current,
  onCountry,
  onRegion,
}: {
  query: string
  countries: CountryShape[] | null
  regions: { name: string; title: string; bbox: number[] }[]
  current: string | null
  onCountry: (c: CountryShape) => void
  onRegion: (bbox: number[]) => void
}) {
  const n = norm(query)
  const matches = (countries ?? []).filter((c) => norm(c.name).includes(n) || norm(c.en).includes(n) || c.code === n).slice(0, 30)
  const regionHits = regions.filter((r) => norm(r.title).includes(n) || r.name.includes(n))
  return (
    <>
      {regionHits.length ? (
        <ListSection header={t('m.globe.regions')}>
          {regionHits.map((r) => (
            <ListRow key={r.name} leading={<MapPinned size={18} aria-hidden />} title={r.title} subtitle={t('m.globe.regionHint')} onClick={() => onRegion(r.bbox)} />
          ))}
        </ListSection>
      ) : null}
      <ListSection header={t('m.globe.countries')}>
        {!countries ? (
          <ListRow static title={t('m.common.loading')} />
        ) : matches.length ? (
          matches.map((c) => <ListRow key={c.code} leading={<Flag size={18} aria-hidden />} title={c.name} subtitle={c.name !== c.en ? c.en : undefined} selected={current === c.code} onClick={() => onCountry(c)} />)
        ) : (
          <ListRow static title={t('m.globe.noCountry')} />
        )}
      </ListSection>
    </>
  )
}

/** What is shown, the timeline, the satellites and where the fires are (Maps' results). */
function Explore({
  periodLabel,
  data,
  stats,
  sats,
  present,
  solo,
  onSolo,
  spots,
  isRange,
  onSpot,
  rangeNeedsArea,
  timeline,
}: {
  periodLabel: string
  data?: DayData
  stats: Stats | null
  sats: DaySat[]
  present: boolean[]
  solo: string | null
  onSolo: (code: string) => void
  spots: ReturnType<GlobeEngine['hotspots']>
  isRange: boolean
  onSpot: (h: ReturnType<GlobeEngine['hotspots']>[number]) => void
  rangeNeedsArea: boolean
  timeline: React.ReactNode
}) {
  const sheet = useSheet()
  if (sheet?.detent === 'peek') return null
  const when = (ts: number) => {
    const iso = new Date(ts * 1000).toISOString()
    return isRange ? `${formatDate(iso.slice(0, 10))} ${iso.slice(11, 16)}` : `${iso.slice(11, 16)} UTC`
  }
  return (
    <>
      {rangeNeedsArea ? <Notice tone="warning">{t('m.globe.rangeNeedsArea')}</Notice> : null}
      {data?.note ? <Notice tone="info">{data.note}</Notice> : null}
      <ListSection header={periodLabel} footer={data?.truncated ? t('m.globe.truncated') : undefined}>
        <ListRow static leading={<Flame size={18} aria-hidden />} title={t('m.globe.visible')} trailing={stats ? formatNumber(stats.total) : '…'} />
        <ListRow static title={t('m.globe.frpSum')} trailing={stats ? <span dir="ltr">{formatNumber(stats.frp, 0)} MW</span> : '…'} />
      </ListSection>
      {timeline}
      <ListSection header={t('m.globe.hotspots')} footer={t('m.globe.hotspotsHint')}>
        {spots.length ? (
          spots.map((h) => (
            <ListRow
              key={`${h.lat.toFixed(3)},${h.lon.toFixed(3)}`}
              leading={<Flame size={18} aria-hidden />}
              title={<span dir="ltr">{`${h.lat.toFixed(2)}, ${h.lon.toFixed(2)}`}</span>}
              subtitle={t('m.globe.spot', { count: formatNumber(h.count), when: when(h.last) })}
              trailing={<span dir="ltr">{formatNumber(h.frp, 0)} MW</span>}
              chevron
              onClick={() => onSpot(h)}
            />
          ))
        ) : (
          <ListRow static title={t('m.globe.noSpots')} />
        )}
      </ListSection>
      <ListSection header={t('m.globe.satellites')} footer={t('m.globe.soloHint')}>
        {sats.map((s, i) =>
          present[i] ? (
            <ListRow
              key={s.code}
              leading={<i className="fm-swatch" style={{ background: SYSTEM_COLORS[s.system] }} aria-hidden />}
              title={<span dir="ltr">{`${s.symbol} ${s.name}`}</span>}
              subtitle={s.instrument}
              trailing={stats ? formatNumber(stats.bySat[i]) : undefined}
              selected={solo === s.code}
              onClick={() => onSolo(s.code)}
            />
          ) : null,
        )}
      </ListSection>
    </>
  )
}

function Timeline({
  engine,
  simT,
  speed,
  speeds,
  isRange,
  onSpeed,
  onSeek,
  span,
  at,
  scrubber,
}: {
  engine: GlobeEngine
  simT: number
  speed: string
  speeds: readonly string[]
  isRange: boolean
  onSpeed: (s: string) => void
  onSeek: (t: number) => void
  span: number
  at: (v: number) => string
  /** Also show the histogram and slider (phones; on wide screens they float above the dock). */
  scrubber: boolean
}) {
  return (
    <ListSection header={scrubber ? t('m.globe.timeline') : t('m.globe.speed')}>
      <div className="fm-tl">
        {scrubber ? <Scrubber engine={engine} simT={simT} isRange={isRange} onSeek={onSeek} span={span} at={at} /> : null}
        <SegmentedControl label={t('m.globe.speed')} value={speed} onChange={onSpeed} options={speeds.map((s) => ({ value: s, label: isRange ? t(`m.globe.speedRange.${s}`) : `${s}×` }))} />
      </div>
    </ListSection>
  )
}

/** Detections over time and the time slider. */
function Scrubber({ engine, simT, isRange, onSeek, span, at }: { engine: GlobeEngine; simT: number; isRange: boolean; onSeek: (t: number) => void; span: number; at: (v: number) => string }) {
  return (
    <>
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
    </>
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
