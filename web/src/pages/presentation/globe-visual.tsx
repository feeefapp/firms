import { useEffect, useRef, useState } from 'react'
import { Crosshair, Pause, Play, RotateCcw } from 'lucide-react'
import { GlobeEngine, type DayData, type Look, type PickedRecord } from '../globe/engine'

let archive: Promise<DayData> | undefined
const loadArchive = () => archive ??= fetch('/presentation/sample-day.json').then(async r => {
  if (!r.ok) throw new Error('The archived globe sample could not load.')
  return await r.json() as DayData
}).catch(e => { archive = undefined; throw e })

export function GlobeVisual({ interactive = false }: { interactive?: boolean }) {
  const host = useRef<HTMLDivElement>(null)
  const engine = useRef<GlobeEngine | null>(null)
  const scrubber = useRef<HTMLInputElement>(null)
  const timeLabel = useRef<HTMLSpanElement>(null)
  const [ready, setReady] = useState(false)
  const [error, setError] = useState('')
  const [attempt, setAttempt] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [span, setSpan] = useState(0)
  const [look, setLook] = useState<Look>(interactive && !window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'fire3d' : 'pixels')
  const [sensor, setSensor] = useState('all')
  const [picked, setPicked] = useState<PickedRecord | null>(null)

  useEffect(() => {
    let cancelled = false
    let instance: GlobeEngine | null = null
    setReady(false)
    setError('')
    loadArchive().then(data => {
      if (cancelled || !host.current) return
      try {
        instance = new GlobeEngine(host.current, data, {
          onPick: interactive ? setPicked : () => undefined,
          onBoxPoint: () => undefined,
          onTick: (t, on) => {
            if (scrubber.current && document.activeElement !== scrubber.current) scrubber.current.value = String(t)
            if (timeLabel.current) timeLabel.current.textContent = new Date(((instance?.tMin ?? data.cols.t[0]) + t) * 1000).toISOString().slice(11, 16) + ' UTC'
            if (!on && interactive) setPlaying(false)
          },
        }, { textureBaseUrl: '/presentation' })
        engine.current = instance
        instance.setLook(interactive && !window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'fire3d' : 'pixels')
        instance.setAutoRotate(!interactive && !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
        instance.setTime(instance.span)
        instance.setWindow(1e9)
        instance.setPlaying(false)
        instance.setSpeed(3600)
        instance.flyToView({ lat: 12, lon: 23, altKm: interactive ? 12000 : 15000 })
        setSpan(instance.span)
        setReady(true)
      } catch (e) { setError(e instanceof Error ? e.message : 'WebGL is unavailable in this browser.') }
    }).catch(e => { if (!cancelled) setError(String(e.message)) })
    return () => { cancelled = true; instance?.dispose(); engine.current = null }
  }, [interactive, attempt])

  useEffect(() => { engine.current?.setLook(look) }, [look, ready])
  useEffect(() => {
    if (!engine.current || !ready) return
    engine.current.setFilters({ sats: [0, 1, 2, 3, 4].map(i => sensor === 'all' || (sensor === 'modis' ? i < 2 : i >= 2)), minConf: 0, minFrp: 0, dayNight: 0 })
  }, [sensor, ready])

  return <div className={`mission-globe ${interactive ? 'is-interactive' : 'is-backdrop'}`}>
    <div ref={host} className="mission-globe-host" aria-label="Interactive Earth with an archived NASA FIRMS detection sample" />
    {!ready && !error && <div className="mission-globe-loading"><span />Preparing the Earth observation view…</div>}
    {error && <div className="mission-globe-error"><p>{error}</p><button onClick={() => setAttempt(x => x + 1)}>Retry globe</button><p>The calendar and all presentation slides remain available.</p></div>}
    {interactive && ready && <>
      <div className="mission-globe-tools">
        <label>Sensor<select value={sensor} onChange={e => setSensor(e.target.value)}><option value="all">All sensors</option><option value="modis">MODIS</option><option value="viirs">VIIRS</option></select></label>
        <label>Display<select value={look} onChange={e => setLook(e.target.value as Look)}><option value="heat">Heat</option><option value="pixels">Pixels</option><option value="fire3d">3D fire</option></select></label>
        <button title="Reset camera" aria-label="Reset globe camera" onClick={() => engine.current?.flyToView({ lat: 12, lon: 23, altKm: 12000 })}><RotateCcw size={18} /></button>
      </div>
      <div className="mission-globe-time"><button aria-label={playing ? 'Pause timeline' : 'Play timeline'} onClick={() => { const on = !playing; setPlaying(on); engine.current?.setPlaying(on) }}>{playing ? <Pause size={18} /> : <Play size={18} />}</button><input ref={scrubber} aria-label="Observation timeline" type="range" min="-600" max={span} defaultValue={span} step="60" onChange={e => engine.current?.setTime(Number(e.target.value))} /><span ref={timeLabel}>All observations</span></div>
      <div className="mission-globe-source">Archived sample · 6,000 detections · 1 Nov 2026</div>
      {picked && <div className="mission-pixel"><Crosshair size={20} /><div><b>{picked.sat.name}</b><span>{picked.lat.toFixed(3)}°, {picked.lon.toFixed(3)}°</span><span>{picked.frp?.toFixed(1) ?? '—'} MW · {picked.scanKm.toFixed(2)} × {picked.trackKm.toFixed(2)} km</span></div><button aria-label="Close pixel details" onClick={() => setPicked(null)}>×</button></div>}
    </>}
  </div>
}
