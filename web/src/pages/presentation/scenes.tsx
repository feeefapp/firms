import { useState, type ReactNode } from 'react'
import { ArrowUpRight, CalendarDays, Check, Database, Earth, Flame, CodeXml, Layers, Satellite, ScanLine } from 'lucide-react'
import { CalendarVisual, Experiments, FireDayGrid, FrpCurve, HistoryChart, ReferenceTimeline, RegionPicker, Results, StudyMap, ValidationTimeline, WeightChart, fmt } from './visuals'
import { GlobeVisual } from './globe-visual'
import { type Region } from './content'

function Copy({ title, children, className = '' }: { title: ReactNode; children?: ReactNode; className?: string }) {
  return <div className={`mission-copy ${className}`}><h1>{title}</h1>{children && <div className="mission-copy-body">{children}</div>}</div>
}
function Technical({ children }: { children: ReactNode }) { return <div className="mission-technical-mark"><ScanLine size={16} />A closer look{children}</div> }

function Formula() {
  const [term, setTerm] = useState('V')
  const definitions: Record<string, string> = { V: 'VIIRS fire-days observed during this month.', k: 'The learned Aqua-to-VIIRS ratio for this calendar month.', p: 'The learned probability Aqua also sees a cell-day, given fire strength and season.', e: 'A correction for cell-days detected only by Aqua.', A: 'The final monthly estimate in Aqua-equivalent fire-days.' }
  const piece = (key: string, children: ReactNode) => <button aria-pressed={term === key} onClick={() => setTerm(key)}>{children}</button>
  return <div className="mission-formulas"><div><span>Monthly ratio</span><div className="mission-equation">R<sub>m</sub> = {piece('k', <>k<sub>m</sub></>)} {piece('V', <>V<sub>m</sub></>)}</div></div><div><span>Fire-strength estimate</span><div className="mission-equation">F<sub>m</sub> = ∑ {piece('p', <>p<sub>s</sub>(FRP<sub>i</sub>)</>)} + {piece('e', <>e<sub>m</sub></>)} V<sub>m</sub></div></div><div className="mission-equation-final">{piece('A', <>Â<sub>m</sub></>)} = <span className="mission-fraction"><span>R<sub>m</sub> + F<sub>m</sub></span><span>2</span></span></div><p className="mission-formula-definition" aria-live="polite">{definitions[term]}</p><small>Sum over VIIRS cell-days in the month. FRP is summed within each cell-day.</small></div>
}

function ErrorExample() {
  const [error, setError] = useState(1000)
  return <div className="mission-error-example"><div className="mission-equation">WAPE = 100 × <span className="mission-fraction"><span>∑ |Â<sub>m</sub> − A<sub>m</sub>|</span><span>∑ A<sub>m</sub></span></span></div><div className="mission-error-figures"><div><span>Observed Aqua total</span><b>10,000</b></div><div><span>Absolute monthly errors</span><b>{fmt(error)}</b></div><div><span>WAPE</span><b>{(error / 100).toFixed(1)}<small>%</small></b></div></div><label className="mission-range">Total error <input aria-label="Sum of absolute monthly errors" type="range" min="100" max="3000" step="100" value={error} onChange={e => setError(Number(e.target.value))} /></label><p className="mission-footnote">Illustrative example. Individual monthly errors can be larger than the aggregate.</p></div>
}

function NoiseModel() {
  const [count, setCount] = useState(1000)
  const chance = .5, error = .8 * Math.sqrt(2 * (1 - chance) / count) * 100
  return <div className="mission-noise"><div className="mission-noise-stat"><b>≈7<small>%</small></b><p>Measured average disagreement<br />between two VIIRS instruments</p></div><div className="mission-noise-reasons"><span>Fires change between passes</span><span>Clouds move</span><span>Viewing angles differ</span></div><div className="mission-equation">Error ≈ 0.8 √<span className="mission-root-expression">2(1 − p) / N</span></div><label className="mission-range">Observed fire-days <input aria-label="Expected observed fire-days" type="range" min="100" max="5000" step="100" value={count} onChange={e => setCount(Number(e.target.value))} /><b>{fmt(count)}</b></label><p className="mission-noise-example">Sampling illustration: <b>{error.toFixed(1)}%</b> at p = 0.5</p><p className="mission-footnote">The formula assumes independent detections. The measured 7% provides context, not a universal accuracy limit.</p></div>
}

function Demo() {
  const [view, setView] = useState<'calendar' | 'globe'>('calendar')
  return <div className={`mission-demo ${view === 'globe' ? 'is-globe' : ''}`}><div className="mission-demo-heading"><h1>The history,<br />in your hands.</h1><div className="mission-demo-actions"><div className="mission-toggle"><button aria-pressed={view === 'calendar'} onClick={() => setView('calendar')}><CalendarDays size={17} />Calendar</button><button aria-pressed={view === 'globe'} onClick={() => setView('globe')}><Earth size={17} />Globe</button></div><a href="/" target="_blank" rel="noreferrer">Open Firms<ArrowUpRight size={17} /></a></div></div><div className="mission-demo-stage">{view === 'calendar' ? <CalendarVisual /> : <GlobeVisual interactive />}</div></div>
}

function ThankYou() {
  const destinations = [
    { name: 'Explore the project', address: 'firms.apps.feeef.dev', url: 'https://firms.apps.feeef.dev', image: 'project-qr.svg', Icon: Earth },
    { name: 'Get the source', address: 'github.com/feeefapp/firms', url: 'https://github.com/feeefapp/firms', image: 'github-qr.svg', Icon: CodeXml },
  ]
  return <div className="mission-closing mission-thanks">
    <div className="mission-closing-earth"><GlobeVisual /></div>
    <Copy title={<>Thank you.</>}>
      <p>A clearer history.<br />Better preparation.</p>
      <span className="mission-thanks-invitation">Scan to explore. Stay curious.</span>
    </Copy>
    <div className="mission-qr-links" aria-label="Project and source code links">
      {destinations.map(({ name, address, url, image, Icon }) => <a key={url} href={url} target="_blank" rel="noreferrer" className="mission-qr-link">
        <div className="mission-qr-heading"><Icon size={20} aria-hidden /><span>{name}</span><ArrowUpRight size={16} aria-hidden /></div>
        <div className="mission-qr-frame"><img src={`/presentation/${image}`} alt={`QR code for ${url}`} width="232" height="232" /></div>
        <span className="mission-qr-address">{address}</span>
      </a>)}
    </div>
    <p className="mission-close-limit"><Flame size={17} />For responders, scientists, and land managers. Data from NASA FIRMS.</p>
  </div>
}

export function Scene({ index }: { index: number }) {
  const [region, setRegion] = useState<Region>('punjab')
  switch (index) {
    case 0: return <div className="mission-opening"><div className="mission-earth-hero"><GlobeVisual /></div><Copy title={<>One fire record.<br />A clearer picture.</>}><p>A harmonized burning activity calendar.<br />NASA MODIS + VIIRS, 2001 to today.</p><div className="mission-opening-source"><Satellite size={20} /><span>Built for NASA Space Apps 2026</span></div></Copy><div className="mission-hero-bottom"><span>Firms</span><span>Earth observation, made comparable.</span></div></div>
    case 1: return <div className="mission-split"><Copy title={<>Two cameras.<br />Different counts.</>}><p>A finer sensor sees more.<br />A direct join creates a false jump.</p><div className="mission-sensor-spec"><div><span>MODIS</span><b>1 km</b></div><div><span>VIIRS</span><b>375 m</b></div></div><small>Approximate pixel sizes at nadir.</small></Copy><div className="mission-visual"><RegionPicker value={region} onChange={setRegion} /><HistoryChart region={region} /></div></div>
    case 2: return <div className="mission-split"><Copy title={<>One detection<br />is not one fire.</>}><p>Neighbouring pixels.<br />Repeated passes.<br />Different satellites.</p><div className="mission-inline-icons"><ScanLine /><Satellite /><Layers /></div><small>One FIRMS row records one hot pixel during one satellite pass.</small></Copy><div className="mission-visual"><FireDayGrid /></div></div>
    case 3: return <div className="mission-wide"><Copy title={<>A fair count.<br />A common reference.</>}><p>Count a burning cell once per local day.<br />Keep every period on the same scale.</p></Copy><ReferenceTimeline /><div className="mission-cleaning"><Check size={17} />Low-confidence filtering<Check size={17} />Static heat-source mask<Check size={17} />Local solar days</div></div>
    case 4: return <div className="mission-split mission-technical"><Copy title={<>What counts as<br />a fire-day?</>}><Technical>4A</Technical><div className="mission-equation-small">D(c, d) = <b>1</b> if observed<br /><span>0 otherwise</span></div><p>Monthly count = ∑ D(c, d)</p><small>0.02° grid spacing, roughly 2 km.<br />Each satellite stays separate during calibration.</small></Copy><div className="mission-visual"><FireDayGrid technical /></div></div>
    case 5: return <div className="mission-wide"><Copy title={<>We tested the obvious.<br />Then the alternatives.</>} /><Experiments /></div>
    case 6: return <div className="mission-split"><Copy title={<>Season meets<br />fire strength.</>}><div className="mission-method-line"><span>01</span><p><b>Monthly ratio</b>How the cameras usually compare in that month.</p></div><div className="mission-method-line"><span>02</span><p><b>Fire-strength model</b>How likely Aqua also sees that fire-day.</p></div><div className="mission-method-average">Final estimate: average the two.</div></Copy><div className="mission-visual"><FrpCurve /><p className="mission-footnote">Punjab calibration. Hover the curve to inspect.</p></div></div>
    case 7: return <div className="mission-split mission-technical"><Copy title={<>Two estimates.<br />One scale.</>}><Technical>6A</Technical><p>Estimate how many fire-days Aqua would have counted.</p><small>Click a term to unpack it.<br />m = month, s = season.</small></Copy><div className="mission-visual"><Formula /></div></div>
    case 8: return <div className="mission-split mission-technical"><Copy title={<>Recent years carry<br />more weight.</>}><Technical>6B</Technical><div className="mission-equation-small">w<sub>y</sub> = 2<sup>−(Y − y) / 2</sup></div><p>Two years older?<br />Half the influence.</p><small>Y: latest calibration year.<br />y: year being weighted.</small></Copy><div className="mission-visual"><WeightChart /></div></div>
    case 9: return <div className="mission-wide mission-validation-slide"><div className="mission-validation-head"><StudyMap /><Copy title={<>Four regions.<br />Real observations.</>} /><div className="mission-detection-total"><Database size={23} /><b>7.8M</b><span>detections in the main study</span></div></div><div className="mission-regimes">{[['Punjab', 'Agricultural'], ['South Sudan', 'Savanna'], ['Portugal', 'Mediterranean'], ['Bolivia', 'Tropical']].map(([name, regime], i) => <div key={name}><span className={`mission-region-dot region-${i}`} /><b>{name}</b><span>{regime} burning</span></div>)}</div><ValidationTimeline /></div>
    case 10: return <div className="mission-split mission-technical"><Copy title={<>How far<br />did we miss?</>}><Technical>7A</Technical><p>Add every monthly miss.<br />Divide by Aqua’s total.</p><small>A<sub>m</sub>: observed Aqua fire-days.<br />Â<sub>m</sub>: estimated Aqua equivalents.</small></Copy><div className="mission-visual"><ErrorExample /></div></div>
    case 11: return <div className="mission-wide"><div className="mission-result-heading"><Copy title={<>Around 10%<br />forward-test error.</>} /><p>About half the error<br />of a fixed multiplier.</p></div><Results /></div>
    case 12: return <div className="mission-split mission-technical"><Copy title={<>The instruments<br />disagree, too.</>}><Technical>8A</Technical><p>Even the same camera type sees a different moment.</p><small>Fewer fire-days mean larger percentage swings.<br />N = expected observed count per camera.<br />p = detection probability.</small></Copy><div className="mission-visual"><NoiseModel /></div></div>
    case 13: return <Demo />
    default: return <ThankYou />
  }
}
