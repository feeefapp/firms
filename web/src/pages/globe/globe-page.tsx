import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BoxSelect, CalendarDays, Crosshair, Earth, Pause, Play, X } from 'lucide-react'
import { Button, IconButton } from '@feeef.dev/ui/primitives/button'
import { SegmentedControl } from '@feeef.dev/ui/primitives/segmented'
import { Slider } from '@feeef.dev/ui/primitives/slider'
import { Checkbox } from '@feeef.dev/ui/primitives/choice'
import { ToolbarGroup } from '@feeef.dev/ui/toolbar'
import { Sheet } from '@feeef.dev/ui/containers/sheet'
import { TemporalDialog } from '@feeef.dev/ui/filters/temporal-dialog'
import type { TemporalValue } from '@feeef.dev/ui/filters/temporal'
import { useSession } from '@/app/session'
import { ErrorState, LoadingState, Notice } from '@/components/ui/data'
import { regionTitle } from '@/lib/algorithms'
import { api, ApiError, type Job } from '@/lib/api'
import { parseBbox } from '@/lib/bbox'
import { errorMessage } from '@/lib/errors'
import { formatBbox, formatDate, formatNumber } from '@/lib/format'
import { ScreenDock, ScreenTop } from '@/shell/screen-slots'
import { dir, t } from '@/i18n/locale'
import { GlobeEngine, SYSTEM_COLORS, type DayData, type PickedRecord } from './engine'
import { LiveSheet, RecordDetails } from './panels'
import './globe.css'

type Load = { state: 'loading' | 'building' | 'error' | 'ready'; data?: DayData; error?: string; job?: Job }
const SPEEDS = ['60', '600', '3600'] as const

async function loadDay(date: string | null, signal: AbortSignal, onJob: (job: Job) => void): Promise<DayData> {
  for (let attempt = 0; attempt < 200; attempt++) {
    const response = await fetch(api.dayUrl(date ?? undefined), { credentials: 'same-origin', signal })
    if (!response.ok && response.status !== 202) {
      let message = `HTTP ${response.status}`
      try {
        const body = (await response.json()) as { error?: string }
        message = body.error ?? message
      } catch {
        // keep status
      }
      throw new ApiError(response.status, message)
    }
    const body = (await response.json()) as DayData & { job?: Job | string }
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

/**
 * The day on the globe: every FIRMS record at its real pixel size and orientation, the
 * satellites with their swaths, a timeline to play the day, a tap to inspect a pixel, and a
 * two-tap box that converts the box's VIIRS fire-days to Aqua-equivalent (`/api/live`).
 */
export default function GlobePage() {
  const { regions } = useSession()
  const [search, setSearch] = useSearchParams()
  const date = search.get('date')
  const bbox = parseBbox(search.get('bbox'))
  const [load, setLoad] = useState<Load>({ state: 'loading' })
  const [attempt, setAttempt] = useState(0)
  const host = useRef<HTMLDivElement>(null)
  const engine = useRef<GlobeEngine | null>(null)
  const [simT, setSimT] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [speed, setSpeed] = useState<(typeof SPEEDS)[number]>('600')
  const [drawing, setDrawing] = useState<0 | 1 | 2>(0)
  const [picked, setPicked] = useState<PickedRecord | null>(null)
  const [liveOpen, setLiveOpen] = useState(false)
  const [systems, setSystems] = useState([true, true, true, true])
  const [pickingDate, setPickingDate] = useState(false)
  const [draftDate, setDraftDate] = useState<TemporalValue>(null)
  const [ready, setReady] = useState(false)
  // setSearchParams changes identity with the address; the engine must not rebuild for that.
  const setSearchRef = useRef(setSearch)
  setSearchRef.current = setSearch

  useEffect(() => {
    const controller = new AbortController()
    setLoad({ state: 'loading' })
    loadDay(date, controller.signal, (job) => setLoad({ state: 'building', job }))
      .then((data) => setLoad({ state: 'ready', data }))
      .catch((failure: unknown) => {
        if (!controller.signal.aborted) setLoad({ state: 'error', error: errorMessage(failure) })
      })
    return () => controller.abort()
  }, [date, attempt])

  const onPick = useCallback((r: PickedRecord | null) => setPicked(r), [])
  useLayoutEffect(() => {
    if (load.state !== 'ready' || !load.data || !host.current) return
    // Building the scene takes a moment for ~400k records: let the loader paint first.
    let cancelled = false
    const id = window.setTimeout(() => {
      if (cancelled || !host.current) return
      try {
        engine.current = new GlobeEngine(host.current, load.data!, {
          onPick,
          onBoxPoint: (stage, bb) => {
            setDrawing(stage === 2 ? 0 : 2)
            if (bb) {
              setSearchRef.current(
                (prev) => {
                  const next = new URLSearchParams(prev)
                  next.set('bbox', bb.join(','))
                  return next
                },
                { replace: true },
              )
              setLiveOpen(true)
            }
          },
          onTick: (t, p) => {
            setSimT(t)
            setPlaying(p)
          },
        })
        setReady(true)
      } catch (failure) {
        setLoad({ state: 'error', error: errorMessage(failure) })
      }
    }, 30)
    return () => {
      cancelled = true
      window.clearTimeout(id)
      engine.current?.dispose()
      engine.current = null
      setReady(false)
    }
  }, [load, onPick])

  // The box from the address (assistant, search page, a shared link).
  const bboxKey = bbox?.join(',') ?? ''
  useEffect(() => {
    if (!ready || !engine.current) return
    engine.current.setBox(bbox)
    if (bbox) engine.current.flyToBox(bbox)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, bboxKey])

  const e = engine.current
  const span = e?.span ?? 86400
  const tMin = e?.tMin ?? 0
  const clock = e ? new Date((tMin + simT) * 1000).toISOString().slice(11, 16) : '--:--'
  const dayLabel = load.data ? formatDate(load.data.window[0]) : date ? formatDate(date) : ''

  return (
    <div className="fm-globe">
      <div ref={host} className="fm-globe-host" />
      <ScreenTop>
        <ToolbarGroup label={t('m.globe.day')}>
          <Button
            variant="ghost"
            appearance="toolbar"
            onClick={() => {
              setDraftDate(load.data?.window[0] ?? date)
              setPickingDate(true)
            }}
            aria-label={t('m.globe.pickDay', { date: dayLabel })}
          >
            <CalendarDays aria-hidden />
            <span className="lab-control-label">{dayLabel || t('m.globe.today')}</span>
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
              setDrawing(0)
            }}
          >
            <X aria-hidden />
            <span className="lab-control-label">{t('m.globe.cancelBox')}</span>
          </Button>
        ) : bbox ? (
          <Button variant="tonal" onClick={() => setLiveOpen(true)} disabled={!ready}>
            <Crosshair aria-hidden />
            <span className="lab-control-label">{t('m.globe.boxResults')}</span>
          </Button>
        ) : null}
        {drawing ? null : (
          <Button
            variant="filled"
            disabled={!ready}
            onClick={() => {
              engine.current?.setDrawing(true)
              setDrawing(1)
              setPicked(null)
            }}
          >
            <BoxSelect aria-hidden />
            <span className="lab-control-label">{t('m.globe.drawBox')}</span>
          </Button>
        )}
      </ScreenDock>

      {load.state !== 'ready' || !ready ? (
        <div className="fm-globe-overlay">
          {load.state === 'error' ? (
            <div className="fm-globe-card">
              <ErrorState title={t('m.globe.failed')} message={load.error ?? ''} onRetry={() => setAttempt((n) => n + 1)} />
            </div>
          ) : (
            <div className="fm-globe-card">
              <LoadingState label={load.state === 'building' ? t('m.globe.building') : load.state === 'ready' ? t('m.globe.preparing') : t('m.globe.loading')} />
              {load.job?.log_tail ? <pre className="fm-log" dir="ltr">{load.job.log_tail}</pre> : null}
            </div>
          )}
        </div>
      ) : null}

      {drawing ? (
        <div className="fm-globe-hint" role="status">
          {drawing === 1 ? t('m.globe.firstCorner') : t('m.globe.secondCorner')}
        </div>
      ) : null}

      {ready && e ? (
        <section className="fm-globe-timeline" aria-label={t('m.globe.timeline')}>
          <div className="fm-tl-row">
            <IconButton
              variant="tonal"
              aria-label={playing ? t('m.globe.pause') : t('m.globe.play')}
              onClick={() => {
                engine.current?.setPlaying(!playing)
                setPlaying(!playing)
              }}
            >
              {playing ? <Pause /> : <Play />}
            </IconButton>
            <span className="fm-tl-clock" dir="ltr">
              {clock} UTC
            </span>
            <SegmentedControl
              label={t('m.globe.speed')}
              className="fm-segmented-box"
              value={speed}
              onChange={(s) => {
                setSpeed(s)
                engine.current?.setSpeed(Number(s))
              }}
              options={SPEEDS.map((s) => ({ value: s, label: `${s}×` }))}
            />
          </div>
          <Histogram engine={e} simT={simT} onSeek={(v) => engine.current?.setTime(v)} />
          <Slider
            label={t('m.globe.time')}
            trackStyle="thin"
            controlSize="small"
            min={-600}
            max={Math.round(span)}
            step={10}
            value={simT}
            onValueChange={(v) => {
              engine.current?.setPlaying(false)
              engine.current?.setTime(v)
              setSimT(v)
            }}
            getValueText={(v) => `${new Date((tMin + v) * 1000).toISOString().slice(11, 16)} UTC`}
          />
          <div className="fm-tl-legend">
            {['MODIS', 'VIIRS', 'Landsat', t('m.globe.geo')].map((name, k) => (
              <Checkbox
                key={name}
                controlSize="small"
                label={
                  <span className="fm-chip-label">
                    <i style={{ background: SYSTEM_COLORS[k], height: 10, width: 10, borderRadius: 2 }} aria-hidden />
                    {name}
                  </span>
                }
                checked={systems[k]}
                onCheckedChange={(on) => {
                  engine.current?.setSystemVisible(k, on)
                  setSystems((s) => s.map((x, i) => (i === k ? on : x)))
                }}
              />
            ))}
            <small className="fm-muted">{t('m.globe.records', { count: formatNumber(e.count), pct: formatNumber(e.validPct, 1) })}</small>
          </div>
        </section>
      ) : null}

      <Sheet
        open={Boolean(picked)}
        onOpenChange={(open) => {
          if (!open) {
            setPicked(null)
            engine.current?.clearSelection()
          }
        }}
        label={t('m.globe.record')}
        title={picked ? `${picked.sat.symbol} ${picked.sat.name}` : t('m.globe.record')}
        detents={['medium', 'large']}
        regular="card"
        modal={false}
        dismissible
      >
        {picked ? <RecordDetails record={picked} onZoom={() => engine.current?.zoomToSelection()} onGoTo={() => engine.current?.setTime(picked.time - tMin - 60)} /> : null}
      </Sheet>
      <LiveSheet open={liveOpen} onClose={() => setLiveOpen(false)} bbox={bbox} date={load.data?.window[0] ?? date ?? undefined} regions={regions.map((r) => ({ name: r.name, title: regionTitle(r), bbox: r.bbox }))} />
      <TemporalDialog
        open={pickingDate}
        label={t('m.globe.pickDayTitle')}
        close={() => setPickingDate(false)}
        formId="firms-globe-day"
        dir={dir}
        config={{ type: 'date', max: new Date().toISOString().slice(0, 10), min: new Date(Date.now() - 60 * 86400000).toISOString().slice(0, 10) }}
        intro={t('m.globe.pickDayHint')}
        value={draftDate}
        onChange={setDraftDate}
        resetKey={pickingDate}
        onSubmit={(event) => {
          event.preventDefault()
          if (typeof draftDate === 'string' && draftDate) {
            setSearch((prev) => {
              const next = new URLSearchParams(prev)
              next.set('date', draftDate)
              return next
            })
            setPickingDate(false)
          }
        }}
      />
      {bbox && !liveOpen && ready ? (
        <div className="fm-globe-boxnote">
          <Notice tone="info" icon={<Crosshair size={16} />}>
            <span dir="ltr">{formatBbox(bbox)}</span>
          </Notice>
        </div>
      ) : null}
    </div>
  )
}

/** Detections per 15 minutes by system; the line marks now. Click to jump. */
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
