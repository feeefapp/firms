import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { ArrowRight, Flame, Satellite, ScanLine } from 'lucide-react'
import { drawCalendar } from '../guide/charts'
import guide from '../guide/data.json'
import study from './study.json'
import { regionNames, studyRegions, type Region } from './content'

export const fmt = (n: number, digits = 0) => n.toLocaleString('en-US', { maximumFractionDigits: digits })
export function RegionPicker({ value, onChange }: { value: Region; onChange: (r: Region) => void }) {
  return <div className="mission-region-picker" aria-label="Study region">{studyRegions.map(r => <button key={r} onClick={() => onChange(r)} aria-pressed={value === r}>{regionNames[r]}</button>)}</div>
}

export function StudyMap() {
  const regions = [
    ...studyRegions.map(r => ({ name: regionNames[r].replace(', India', ''), bbox: study[r].bbox, additional: false })),
    { name: 'Algeria (north)', bbox: guide.regions.algeria.bbox, additional: true },
  ]
  return <svg className="mission-study-map" viewBox="0 0 1000 500" role="img" aria-label="Four benchmark regions and an additional validation check in northern Algeria">
    <image href="/presentation/earth-blue-marble.jpg" width="1000" height="500" opacity=".5" />
    {regions.map(({ name, bbox, additional }, i) => {
      const [west, south, east, north] = bbox
      const x = ((west + east) / 2 + 180) / 360 * 1000, y = (90 - (south + north) / 2) / 180 * 500
      const color = additional ? '#7cd6b0' : i % 2 ? '#65baf3' : '#f4a364'
      const labelOffset = additional ? 23 : name === 'Portugal' ? -13 : 5
      return <g key={name}><circle cx={x} cy={y} r="15" fill="none" stroke={color} opacity=".5" /><circle cx={x} cy={y} r="4" fill={color} /><text x={x + 19} y={y + labelOffset}>{name}</text></g>
    })}
  </svg>
}

export function HistoryChart({ region }: { region: Region }) {
  const [showJoined, setShowJoined] = useState(true)
  const [hover, setHover] = useState<number | null>(null)
  const years = Array.from({ length: 25 }, (_, i) => 2001 + i)
  const annual = (key: 'naive' | 'ensemble_adaptive') => years.map((_, i) => study[region].series[key].slice(i * 12, i * 12 + 12).reduce((s, x) => s + x, 0))
  const joined = annual('naive'), harmonized = annual('ensemble_adaptive')
  const orangeSource = (year: number) => year === 2001 ? 'Terra' : year < 2012 ? 'Terra + Aqua' : 'VIIRS'
  const max = Math.max(...joined) * 1.12, X = (i: number) => 64 + i * 28, Y = (n: number) => 330 - n / max * 275
  const path = (v: number[]) => v.map((n, i) => `${i ? 'L' : 'M'}${X(i)},${Y(n)}`).join(' ')
  return <div className="mission-chart">
    <div className="mission-chart-legend"><button aria-pressed={showJoined} onClick={() => setShowJoined(v => !v)}><i className="is-orange" />MODIS → VIIRS (unadjusted)</button><span><i />Aqua-equivalent</span></div>
    <svg viewBox="0 0 800 400" role="img" aria-label={`Annual fire-days in ${regionNames[region]}: orange switches from Terra and Aqua MODIS to VIIRS in 2012; blue is harmonized to Aqua equivalents`}>
      {[0, 1, 2, 3].map(i => <g key={i}><line x1="64" x2="736" y1={Y(max * i / 3)} y2={Y(max * i / 3)} className="chart-grid" /><text x="49" y={Y(max * i / 3) + 5} textAnchor="end">{fmt(max * i / 3000)}k</text></g>)}
      {[0, 5, 10, 15, 20, 24].map(i => <text key={i} x={X(i)} y="360" textAnchor="middle">{years[i]}</text>)}
      <line x1={X(11)} x2={X(11)} y1="30" y2="332" className="chart-marker" /><text x={X(11) + 10} y="25" className="chart-annotation">Switch to VIIRS · 2012</text>
      {showJoined && <path key={`${region}-joined`} d={path(joined)} className="chart-trace trace-orange" pathLength="1" />}
      <path key={`${region}-harm`} d={path(harmonized)} className="chart-trace" pathLength="1" />
      {hover !== null && <g><line x1={X(hover)} x2={X(hover)} y1="45" y2="332" className="chart-crosshair" /><circle cx={X(hover)} cy={Y(harmonized[hover])} r="6" className="chart-dot" /></g>}
      <rect x="64" y="40" width="672" height="292" fill="transparent" onPointerMove={e => { const box = e.currentTarget.ownerSVGElement!.getBoundingClientRect(); setHover(Math.max(0, Math.min(24, Math.round(((e.clientX - box.left) / box.width * 800 - 64) / 28)))) }} onPointerLeave={() => setHover(null)} />
    </svg>
    <div className="mission-chart-explanation">
      <p>Orange: Terra + Aqua when available through 2011; VIIRS from 2012.</p>
      <p>Earlier gap: Terra adds observations; blue uses Aqua from July 2002.</p>
    </div>
    <div className="mission-chart-caption" aria-live="polite">{hover === null ? 'Annual fire-days, 2001–2025. Hover to inspect.' : `${years[hover]}: ${fmt(harmonized[hover])} Aqua-equivalent fire-days${showJoined ? ` / ${fmt(joined[hover])} unadjusted (${orangeSource(years[hover])})` : ''}`}</div>
  </div>
}

const dots = [[0, 0, 12, 18], [0, 0, 34, 31], [0, 0, 21, 57], [0, 0, 56, 44], [1, 1, 12, 25], [1, 1, 35, 60], [1, 1, 58, 42], [1, 1, 67, 70], [2, 1, 25, 15], [2, 1, 53, 42], [3, 2, 35, 35], [3, 2, 61, 52]]
export function FireDayGrid({ technical = false }: { technical?: boolean }) {
  const [collapsed, setCollapsed] = useState(false)
  const [days, setDays] = useState(1)
  return <div className="mission-grid-demo">
    <div className="mission-toggle"><button aria-pressed={!collapsed} onClick={() => setCollapsed(false)}><ScanLine size={17} />Detections</button><button aria-pressed={collapsed} onClick={() => setCollapsed(true)}><Flame size={17} />Fire-days</button></div>
    <svg viewBox="0 0 640 410" role="img" aria-label="Illustration of repeated detections grouped into grid cell-days">
      <defs><pattern id="terrain-grid" x="110" y="35" width="103" height="103" patternUnits="userSpaceOnUse"><path d="M103 0H0V103" fill="none" stroke="currentColor" strokeWidth="1" /></pattern></defs>
      <rect x="110" y="35" width="412" height="309" fill="url(#terrain-grid)" className="mission-map-grid" />
      {[0, 1, 2, 3].map((x, i) => <rect key={x} x={110 + x * 103 + 3} y={35 + [0, 1, 1, 2][i] * 103 + 3} width="97" height="97" className={`mission-burning-cell ${collapsed ? 'is-counted' : ''}`} />)}
      {dots.map(([x, y, dx, dy], i) => <circle key={i} cx={110 + x * 103 + (collapsed ? 51 : dx)} cy={35 + y * 103 + (collapsed ? 51 : dy)} r={collapsed ? 15 : 6} className={`mission-detection ${i % 2 ? 'is-viirs' : ''}`} style={{ transitionDelay: `${i * 18}ms` }} />)}
      {collapsed && [0, 1, 2, 3].map((x, i) => <text key={x} x={110 + x * 103 + 51} y={35 + [0, 1, 1, 2][i] * 103 + 56} textAnchor="middle" className="mission-cell-count">1</text>)}
      <text x="316" y="385" textAnchor="middle">0.02° cells · one local solar day</text>
    </svg>
    <div className="mission-grid-readout"><strong>{collapsed ? 4 * days : 12 * days}</strong><span>{collapsed ? 'fire-days' : 'detection rows'}<small>Illustrative example</small></span></div>
    {technical && <label className="mission-range">Days observed <input aria-label="Days observed" type="range" min="1" max="5" value={days} onChange={e => setDays(Number(e.target.value))} /><b>{days}</b></label>}
  </div>
}

export function ReferenceTimeline() {
  const [active, setActive] = useState(1)
  const periods = [
    { satellite: 'Terra', date: '2001–Jun 2002', why: 'Aqua was not yet available. Convert Terra to the same reference.', className: 'terra' },
    { satellite: 'Aqua', date: 'Jul 2002–2021', why: 'The long reference. Its afternoon pass overlaps VIIRS during calibration.', className: 'aqua' },
    { satellite: 'VIIRS', date: '2022–today', why: 'Continue in Aqua equivalents as Aqua’s observation time drifts.', className: 'viirs' },
  ]
  return <div className="mission-reference"><div className="mission-reference-track">{periods.map((p, i) => <button key={p.satellite} className={p.className} aria-pressed={active === i} onClick={() => setActive(i)}><Satellite size={38} /><b>{p.satellite}</b><span>{p.date}</span></button>)}</div><div className="mission-reference-explanation"><ArrowRight size={25} /><p>{periods[active].why}</p></div><div className="mission-reference-unit">Aqua-equivalent fire-days throughout</div></div>
}

const meanForwardError = (method: 'ratio' | 'ratio_month' | 'frp' | 'ensemble', adaptive = false) =>
  (studyRegions.reduce((sum, r) => sum + study[r].eval[method][adaptive ? 'forward_adaptive' : 'forward'], 0) / studyRegions.length).toFixed(1)

const experiments = [
  { name: 'Fixed multiplier', hypothesis: 'Start with one conversion factor.', outcome: `${meanForwardError('ratio')}% error`, result: 'A useful baseline, but one factor misses the seasonal changes between the sensors.', state: 'baseline' },
  { name: 'Monthly ratios', hypothesis: 'Account for the burning season.', outcome: `${meanForwardError('ratio_month')}% error`, result: `A major improvement over the ${meanForwardError('ratio')}% baseline. The sensor relationship changes with the month.`, state: 'gain' },
  { name: 'Fire-strength curves', hypothesis: 'Account for weak and strong fire-days.', outcome: `${meanForwardError('frp')}% error alone`, result: `Useful on its own. Combining season-aware fire strength with monthly ratios reaches ${meanForwardError('ensemble')}% error.`, state: 'gain' },
  { name: 'Total fire energy', hypothesis: 'Try a different measure of activity.', outcome: 'Worse overall', result: 'Energy conversion had higher average error than fire-day counts in the original benchmark. A few large fires dominate the energy total.', state: 'tested' },
  { name: 'Clouds and overpass time', hypothesis: 'Account for observation conditions.', outcome: 'No reliable gain', result: 'Cloud corrections gave no consistent improvement. The tested GOES-based overpass-time correction over-corrected.', state: 'tested' },
  { name: 'Machine learning', hypothesis: 'Learn more complex relationships.', outcome: 'Similar accuracy', result: 'Plain boosting did not beat the ensemble on average. More advanced blends gave only small gains with added complexity.', state: 'tested' },
  { name: 'Adaptive calibration', hypothesis: 'Give recent years more influence.', outcome: `${meanForwardError('ensemble', true)}% error`, result: `Recent-year weighting lowers mean forward-test error from ${meanForwardError('ensemble')}% to ${meanForwardError('ensemble', true)}% across the four study regions.`, state: 'selected' },
]
export function Experiments() {
  const [active, setActive] = useState(6)
  const selected = experiments[active]
  return <div className="mission-experiments">
    <div className="mission-experiment-comparison">
      <p className="mission-experiment-score-label">Mean forward-test error · Lower is better</p>
      <div className="mission-experiment-list" aria-label="Tested methods and results">{experiments.map(({ name, outcome, state }, i) => <button key={name} onClick={() => setActive(i)} aria-pressed={i === active}><span className={`mission-experiment-dot ${state}`} /><span className="mission-experiment-label"><span>{name}</span><strong className={`mission-experiment-outcome ${state}`}>{outcome}</strong></span><ArrowRight size={17} /></button>)}</div>
      <p className="mission-experiment-score-note">Scores: fire-day WAPE, four-region mean, 2018–2021.</p>
    </div>
    <div className="mission-experiment-detail" key={active} role="region" aria-label="Selected method result">
      <span className="mission-detail-label">{selected.name}</span><h3>{selected.outcome}</h3><p>{selected.result}</p>
      <div className="mission-experiment-reason"><span className="mission-detail-label">Why we tested it</span><p>{selected.hypothesis}</p></div>
      <small className="mission-experiment-source">{[3, 4, 5].includes(active) ? 'Outcome from the original benchmark and tested corrections.' : 'Score from the current regional evaluation files.'}</small>
    </div>
  </div>
}

export function FrpCurve() {
  const [bin, setBin] = useState(12)
  const v = guide.frp.punjab.iso
  const x = (i: number) => 65 + i * 25, y = (n: number) => 350 - n * 280
  return <div className="mission-frp"><svg viewBox="0 0 720 420" role="img" aria-label="Aqua detection probability by VIIRS fire strength in Punjab">
    {[0, .25, .5, .75, 1].map(n => <g key={n}><line x1="65" x2="640" y1={y(n)} y2={y(n)} className="chart-grid" /><text x="52" y={y(n) + 4} textAnchor="end">{n * 100}%</text></g>)}
    <path className="chart-trace" pathLength="1" d={v.map((n, i) => `${i ? 'L' : 'M'}${x(i)},${y(n)}`).join(' ')} />
    <line x1={x(bin)} x2={x(bin)} y1="70" y2="350" className="chart-crosshair" /><circle cx={x(bin)} cy={y(v[bin])} r="8" className="chart-dot" />
    <text x="65" y="388">Weaker fire-days</text><text x="640" y="388" textAnchor="end">Stronger fire-days</text>
    <rect x="65" y="65" width="575" height="285" fill="transparent" onPointerMove={e => { const b = e.currentTarget.ownerSVGElement!.getBoundingClientRect(); setBin(Math.max(0, Math.min(23, Math.round(((e.clientX - b.left) / b.width * 720 - 65) / 25)))) }} />
  </svg><div className="mission-probability"><strong>{fmt(v[bin] * 100, 1)}%</strong><span>chance Aqua also sees this cell-day</span></div><label className="sr-only">Fire-strength bin<input type="range" min="0" max="23" value={bin} onChange={e => setBin(Number(e.target.value))} /></label></div>
}

export function WeightChart() {
  const [half, setHalf] = useState(2)
  return <div className="mission-weights"><div className="mission-weight-bars">{Array.from({ length: 10 }, (_, i) => 2012 + i).map(year => { const w = 2 ** (-(2021 - year) / half); return <div key={year}><span>{w.toFixed(2)}</span><i style={{ height: `${w * 100}%` }} /><small>{year}</small></div> })}</div><label className="mission-range">Half-life <input aria-label="Calibration weight half-life in years" type="range" min="1" max="5" step=".5" value={half} onChange={e => setHalf(Number(e.target.value))} /><b>{half} years</b></label><p className="mission-footnote">Interactive illustration. The reported method uses a 2-year half-life, anchored at 2021.</p></div>
}

export function ValidationTimeline() {
  const [mode, setMode] = useState<'forward' | 'hidden'>('forward')
  const [year, setYear] = useState(2018)
  const unseenYear = mode === 'hidden'
  return <div className="mission-validation">
    <div className="mission-toggle" role="group" aria-label="Test design"><button aria-pressed={unseenYear} onClick={() => setMode('hidden')}>Test on an unseen year</button><button aria-pressed={!unseenYear} onClick={() => setMode('forward')}>Forward test</button></div>
    <div className="mission-validation-summary" role="status" aria-live="polite">
      <span><b>{unseenYear ? '9 years' : '6 years'}</b> learn{!unseenYear && ' · 2012–2017'}</span><ArrowRight size={20} aria-hidden="true" /><span className="is-test"><b>{unseenYear ? '1 year' : '4 years'}</b> test · {unseenYear ? year : '2018–2021'}</span>
    </div>
    <div className="mission-year-strip">{Array.from({ length: 10 }, (_, i) => 2012 + i).map(y => {
      const test = unseenYear ? y === year : y >= 2018
      return <button key={y} aria-label={`Test on unseen year ${y}`} aria-pressed={unseenYear && y === year} onClick={() => { setYear(y); setMode('hidden') }} className={test ? 'test-year' : 'learn-year'}><span>{y}</span><b>{test ? 'Test' : 'Learn'}</b></button>
    })}</div>
    <p>{unseenYear ? `Test ${year} using a model trained on the other nine years. Repeat for every year.` : 'Testing starts in 2018: six years to learn, then four later years to test.'}</p>
    <div className="mission-validation-actions">{unseenYear && <button onClick={() => setYear(y => y === 2021 ? 2012 : y + 1)}>Next test year<ArrowRight size={15} aria-hidden="true" /></button>}<small>{unseenYear ? 'Unseen means excluded from training, not bad data. Click a year to select it.' : 'Click a year to test it separately. Adaptive forward refits using only earlier years.'}</small></div>
  </div>
}

export type ResultsRegion = Region | 'average' | 'algeria'
// Northern study box used on slide 7; the guide documents these forward-test scores.
// This snapshot differs from data/regions/algeria.json, which covers a larger country box.
export const algeriaResults = { fixed: 34.2, ensemble: 17.5, frp: 12.8 } as const

export function Results({ region, onChange }: { region: ResultsRegion; onChange: (region: ResultsRegion) => void }) {
  const algeria = region === 'algeria'
  const values = (r: Region) => [study[r].eval.ratio.forward, study[r].eval.ensemble.forward, study[r].eval.ensemble.forward_adaptive]
  const data = algeria ? [algeriaResults.fixed, algeriaResults.ensemble, algeriaResults.frp] : region === 'average' ? [0, 1, 2].map(i => studyRegions.reduce((a, r) => a + values(r)[i], 0) / studyRegions.length) : values(region)
  const labels = ['Fixed multiplier', 'Static ensemble', algeria ? 'Fire-strength curve' : 'Adaptive ensemble']
  return <div className="mission-results"><div className="mission-region-picker" role="group" aria-label="Results region"><button aria-pressed={region === 'average'} onClick={() => onChange('average')}>Four-region average</button>{studyRegions.map(r => <button key={r} aria-pressed={r === region} onClick={() => onChange(r)}>{regionNames[r]}</button>)}<button aria-pressed={algeria} onClick={() => onChange('algeria')}>Algeria (north)</button></div><div className="mission-result-bars">{labels.map((name, i) => <div className={i === 2 ? 'is-selected' : ''} key={name}><span>{name}</span><div><i style={{ width: `${data[i] / 40 * 100}%` } as CSSProperties} /><strong>{data[i].toFixed(1)}%</strong></div></div>)}</div><div className="mission-result-axis"><span>0%</span><span>20%</span><span>40% WAPE</span></div>
    <div className="mission-algeria-result"><b>Algeria (north) · Additional check</b><span>Fire strength <strong>{algeriaResults.frp.toFixed(1)}%</strong> vs ensemble <strong>{algeriaResults.ensemble.toFixed(1)}%</strong></span></div>
    <p className="mission-footnote">{algeria ? 'Forward-test WAPE, 2018–2021. Northern-Algeria study in the app guide; excluded from the four-region average.' : 'Test years 2018–2021. Lower is better. Four-region scores use current regional files; Algeria uses the northern study in the app guide.'}</p></div>
}

export function CalendarVisual() {
  const [region, setRegion] = useState<Region>('punjab')
  const [anomaly, setAnomaly] = useState(false)
  const box = useRef<HTMLDivElement>(null), legend = useRef<HTMLDivElement>(null)
  useEffect(() => { if (box.current && legend.current) drawCalendar(box.current, legend.current, region, 'ensemble_adaptive', anomaly ? 'a' : 'v') }, [region, anomaly])
  return <div className="mission-calendar"><div className="mission-calendar-controls"><RegionPicker value={region} onChange={setRegion} /><div className="mission-toggle"><button aria-pressed={!anomaly} onClick={() => setAnomaly(false)}>Count</button><button aria-pressed={anomaly} onClick={() => setAnomaly(true)}>Anomaly</button></div></div><div ref={box} className="mission-calendar-chart" /><div ref={legend} className="mission-calendar-legend" /><p className="mission-footnote">The app’s interactive calendar figure. Hover a month to inspect its record.</p></div>
}
