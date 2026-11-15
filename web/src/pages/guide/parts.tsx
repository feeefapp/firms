import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import * as Popover from '@radix-ui/react-popover'
import { ChevronDown, Lightbulb, Pause, Play, RefreshCw } from 'lucide-react'
import { Button } from '@feeef.dev/ui/primitives/button'
import { Checkbox } from '@feeef.dev/ui/primitives/choice'
import { ListRow, ListSection } from '@feeef.dev/ui/primitives/list'
import { Option, Select } from '@feeef.dev/ui/primitives/select'
import { SegmentedControl } from '@feeef.dev/ui/primitives/segmented'
import { Slider } from '@feeef.dev/ui/primitives/slider'
import { PopoverSurface } from '@feeef.dev/ui/primitives/popover-surface'
import { Notice, Panel, PanelHeader, Table, Td, Th } from '@/components/ui/data'
import * as C from './charts'

// ---------------------------------------------------------------- structure

export function Section({ id, kicker, title, children }: { id: string; kicker: string; title: string; children: ReactNode }) {
  return (
    <Panel id={id} className="fm-g-sec" aria-labelledby={`${id}-h`}>
      <PanelHeader title={<span id={`${id}-h`}>{title}</span>} description={kicker} />
      <div className="fm-pad fm-g-body">{children}</div>
    </Panel>
  )
}

export function Q({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="fm-g-q">
      <h3>{title}</h3>
      {children}
    </div>
  )
}

export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Notice tone="info" icon={<Lightbulb size={16} />}>
      <b>{title}.</b> {children}
    </Notice>
  )
}

// ---------------------------------------------------------------- glossary

export const GLOSSARY: Record<string, [string, string, string]> = {
  modis: ['MODIS', 'Camera', 'A heat-sensing camera on the satellites Terra and Aqua. Its fire pixels are about 1 km wide when looking straight down, and up to about 4.8 × 2 km at the edge of its view.'],
  viirs: ['VIIRS', 'Camera', 'A newer heat-sensing camera on S-NPP, NOAA-20 and NOAA-21. Its fire pixels are 375 m wide, so it catches much smaller fires than MODIS.'],
  terra: ['Terra', 'Satellite', 'NASA satellite carrying MODIS. Fire data since November 2000. Passes around 10:30 in the morning; drifting earlier since 2022.'],
  aqua: ['Aqua', 'Satellite', 'NASA satellite carrying MODIS. Fire data since July 2002. Passes around 13:30, the same hour as VIIRS, so it is our yardstick; drifting later since 2022.'],
  snpp: ['S-NPP', 'Satellite', 'The first satellite with VIIRS (2012). Same 13:30 orbit as Aqua. Its counts are what we convert after 2022.'],
  noaa20: ['NOAA-20', 'Satellite', 'Second VIIRS satellite (data from 2018), same orbit as S-NPP about 50 minutes behind. Used to measure the 7% floor.'],
  firms: ['FIRMS', 'Data service', "NASA's Fire Information for Resource Management System. It publishes one row per hot pixel per satellite pass, from many satellites."],
  fireday: ['Fire-day', 'Counting unit', 'A 2 km × 2 km square with at least one fire detection on a given day, counted once no matter how many rows, passes or satellites saw it.'],
  goes: ['Geostationary satellite', 'Satellite type', 'A satellite that stays above the same point and images the whole half-globe every 10–15 minutes (GOES, Meteosat, Himawari). Coarser pixels (2–4 km), but it sees the whole day.'],
  frp: ['FRP', 'Fire strength', 'Fire Radiative Power, in megawatts: how much heat the fire radiates per second. Bigger, hotter fires have higher FRP and are easier for MODIS to see.'],
  wape: ['WAPE', 'Error measure', 'Average monthly miss in percent: the sum of all monthly misses divided by the sum of the true counts. 10% = off by about 100 per 1,000.'],
  drift: ['Orbital drift', 'Orbit', 'Terra and Aqua stopped their regular orbit corrections, so the hour they pass over a place slowly changes: Aqua later, Terra earlier.'],
  cividis: ['Cividis', 'Colours', 'A dark-blue-to-yellow colour scale designed to read the same for people with red-green colour blindness.'],
  anomaly: ['Anomaly', 'Calendar', 'How a month compares with its usual level: its value divided by the median of the same month in 2003–2022. ×2 = twice the usual.'],
  gb: ['Gradient boosting', 'Machine learning', 'Many small decision trees, each correcting the previous ones. It learned from 11–13 facts per fire but did not beat the simple method.'],
}

/** A defined word: tap or focus it for its definition in a kit popover. */
export function Term({ g, children }: { g: string; children: ReactNode }) {
  const def = GLOSSARY[g]
  if (!def) return <>{children}</>
  return (
    <Popover.Root>
      <Popover.Trigger className="fm-g-term">{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content side="bottom" align="start" sideOffset={6} collisionPadding={16} asChild>
          <PopoverSurface className="fm-g-pop" dir="ltr" lang="en">
            <div className="fm-g-pop-head">
              <strong>{def[0]}</strong>
              <span>{def[1]}</span>
            </div>
            <p>{def[2]}</p>
          </PopoverSurface>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export function Glossary() {
  return (
    <ListSection>
      {Object.values(GLOSSARY).map(([term, kind, text]) => (
        <ListRow key={term} static title={term} subtitle={text} trailing={kind} />
      ))}
    </ListSection>
  )
}

const FAQ: [string, string][] = [
  ['Do we lose information by converting VIIRS to MODIS units?', 'No. Two layers are kept: the harmonized calendar for comparing with the 25-year history, and the raw VIIRS record (since 2012) with every small fire for detail. Converting only changes the monthly number shown in the long calendar.'],
  ['What does "10% error" mean for me as a user?', 'If the calendar shows 1,000 fire-days for a month, the true MODIS-equivalent value is typically between about 900 and 1,100. A month showing twice its usual level is a real signal; a month 5% above usual is within the noise.'],
  ['Can I use this for daily or hourly fire monitoring?', 'Use the raw detections for that (the Globe and Search pages), or geostationary satellites for hour-by-hour tracking. The harmonized calendar is built for months and years: comparing this season with past seasons.'],
  ['What happens if a fire is bigger than one 2 km square?', 'It is counted once in each square it touches, so a 10-square fire counts as 10 fire-days. That is intended: bigger fires weigh more. Two small separate fires in the same square on the same day count as one, a small undercount.'],
  ['Are gas flares, factories or volcanoes counted as fires?', 'No. FIRMS flags permanent heat sources in its archive; every 2 km square that ever held one is removed from all years.'],
  ['Why do you calibrate each region separately?', 'Fires differ between regions: small crop fires in Punjab, large savanna fires in South Sudan. One curve for the whole world raised the error from about 10% to about 17%. For areas without their own calibration, the app falls back to a curve pooled from all calibrated regions.'],
  ['Why give recent years more weight?', 'The relationship between the two cameras changes slowly (sensor ageing, changes in how people burn). Recent years describe the present best; weighting them more cut the forward error from 11.5% to 10.0%.'],
  ['Why not use machine learning?', 'We did. A gradient-boosting model with 11–13 facts per fire did not beat the simple method; combined with it, it gained about 0.3 points, inside the noise. Almost all the useful information is already in fire strength and season.'],
  ['Why is Punjab so different after 2022?', 'Crop burning there happens mostly in the afternoon. The drifted Aqua now passes near 15:15, closer to that peak, so it sees up to 60% more than a 13:30 camera. Our calendar stays at the 13:30 standard, so it remains comparable with the past, but it under-counts burning that happens after 13:30.'],
  ['How do I get the calendar for my own area?', 'On the Regions page, add your area (its country and box): the server downloads 2001 to today, tests the methods and calibrates it. On the Globe you can also look at any range for any country right away.'],
  ['My area has very few fires. Can I trust the numbers?', "Less. With few fires, chance dominates (Part 5): Lebanon's monthly miss is about 43%. Look at seasonal or yearly totals, which add up enough fires to be reliable."],
  ['Where does the data come from?', 'All fire data comes from NASA FIRMS: the final yearly archive for 2001–2025 and the FIRMS API for 2026. Cloud data from NASA POWER, the daily cycle from GOES via FIRMS.'],
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <ListSection>
      {FAQ.map(([q, a], i) => [
        <ListRow
          key={`q${i}`}
          title={q}
          aria-expanded={open === i}
          trailing={<ChevronDown size={18} aria-hidden className="fm-g-chev" data-open={open === i || undefined} />}
          onClick={() => setOpen(open === i ? null : i)}
        />,
        open === i ? <ListRow key={`a${i}`} static title={<span className="fm-g-answer">{a}</span>} /> : null,
      ])}
    </ListSection>
  )
}

// ---------------------------------------------------------------- figures

/** A figure inside a section: title, kit controls, the drawing, a caption. */
function Fig({ title, note, controls, children, caption }: { title: ReactNode; note: string; controls?: ReactNode; children: ReactNode; caption?: ReactNode }) {
  return (
    <figure className="fm-g-fig">
      <div className="fm-g-fig-head">
        <h4>{title}</h4>
        <span className="fm-note">{note}</span>
      </div>
      {controls ? <div className="fm-g-controls">{controls}</div> : null}
      {children}
      {caption ? <figcaption className="fm-note">{caption}</figcaption> : null}
    </figure>
  )
}

/** A drawing box the chart functions paint into. */
function useDraw<T>(draw: (box: HTMLDivElement) => T, deps: unknown[]): [React.RefObject<HTMLDivElement | null>, T | null] {
  const ref = useRef<HTMLDivElement>(null)
  const [out, setOut] = useState<T | null>(null)
  useEffect(() => {
    if (ref.current) setOut(() => draw(ref.current!))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return [ref, out]
}

/** A kit slider with its name and current value shown above it. */
function Field({ label, value, children }: { label: string; value: string; children: ReactNode }) {
  return (
    <div className="fm-g-field">
      <span>
        {label} <b dir="ltr">{value}</b>
      </span>
      {children}
    </div>
  )
}

function RegionSelect({ value, onChange, regions = C.REGX }: { value: C.Region; onChange: (r: C.Region) => void; regions?: readonly C.Region[] }) {
  return (
    <Select hint="Region" labelStyle="inside" value={value} onValueChange={(v) => v && onChange(v as C.Region)} containerClassName="fm-g-select">
      {regions.map((r) => (
        <Option key={r} value={r}>
          {C.RN[r]}
        </Option>
      ))}
    </Select>
  )
}

export function FigJump() {
  const [region, setRegion] = useState<C.Region>('punjab')
  const [ref, title] = useDraw((b) => C.drawJump(b, region), [region])
  return (
    <Fig title={title ?? 'The fake 2012 jump'} note="real data · fire-days per year" controls={<RegionSelect value={region} onChange={setRegion} />} caption="Orange: MODIS until 2011, then VIIRS as it is. Blue: our harmonized series in one unit (Aqua-equivalent fire-days). 2026 runs to October.">
      <div ref={ref} className="fm-g-svg" />
    </Fig>
  )
}

export function FigSquares() {
  const [ref] = useDraw((b) => C.drawSquares(b), [])
  return (
    <Fig title="One afternoon in Punjab: 18 rows, 1 fire" note="worked example" caption="By rows: MODIS 2, VIIRS 16, so VIIRS looks 8 times bigger. By fire-days: MODIS 1 (square 5), VIIRS 2 (squares 5 and 6). It is the same fire; VIIRS saw its edge spill into the next square.">
      <div ref={ref} className="fm-g-svg" />
      <Table>
        <thead>
          <tr><Th>Satellite</Th><Th>Pass</Th><Th numeric>FIRMS rows</Th><Th>Squares touched</Th></tr>
        </thead>
        <tbody>
          <tr><Td className="fm-g-modis">Aqua (MODIS)</Td><Td numeric>15:15</Td><Td numeric>2</Td><Td>square 5</Td></tr>
          <tr><Td className="fm-g-viirs">S-NPP (VIIRS)</Td><Td numeric>13:18</Td><Td numeric>8</Td><Td>squares 5 and 6</Td></tr>
          <tr><Td className="fm-g-viirs">NOAA-20 (VIIRS)</Td><Td numeric>13:48</Td><Td numeric>8</Td><Td>square 5</Td></tr>
        </tbody>
      </Table>
    </Fig>
  )
}

export function FigOneFire() {
  const [size, setSize] = useState(55)
  const [upto, setUpto] = useState(5)
  const [playing, setPlaying] = useState(false)
  const fire = useMemo(() => C.buildFire(size), [size])
  const [ref] = useDraw((b) => C.drawFire(b, fire, upto), [fire, upto])
  useEffect(() => {
    if (!playing) return
    if (upto >= fire.passes.length) {
      setPlaying(false)
      return
    }
    const id = setTimeout(() => setUpto((n) => n + 1), matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 750)
    return () => clearTimeout(id)
  }, [playing, upto, fire])
  const n = C.fireCounts(fire, upto)
  const area = C.fireArea(size)
  return (
    <Fig
      title="Try it: one fire, five satellites, one day"
      note="simulation"
      controls={
        <>
          <Field label="Fire size" value={`${area < 0.1 ? C.fmt(area, 2) : C.fmt(area, 1)} km²`}>
            <Slider label="Fire size" min={0} max={100} value={size} onValueChange={(v) => { setSize(v); setUpto(5) }} getValueText={() => `${area < 0.1 ? C.fmt(area, 2) : C.fmt(area, 1)} km²`} />
          </Field>
          <Button variant="tonal" onClick={() => { setUpto(0); setPlaying(true) }}>
            {playing ? <Pause aria-hidden /> : <Play aria-hidden />}
            Play one day of passes
          </Button>
        </>
      }
      caption="Orange squares: MODIS pixels (about 1 km). Blue: VIIRS pixels (375 m). The dashed square is the 2 km fire-day cell. Make the fire small and MODIS often misses it entirely: that is the real sensitivity gap our conversion handles in Part 3."
    >
      <div className="fm-g-two">
        <div ref={ref} className="fm-g-svg" />
        <div className="fm-stack">
          <div className="fm-g-counters">
            <div><span>MODIS rows</span><strong className="fm-g-modis">{n.modisRows}</strong></div>
            <div><span>VIIRS rows</span><strong className="fm-g-viirs">{n.viirsRows}</strong></div>
            <div><span>MODIS fire-days</span><strong className="fm-g-modis">{n.modisDays}</strong></div>
            <div><span>VIIRS fire-days</span><strong className="fm-g-viirs">{n.viirsDays}</strong></div>
          </div>
          <p className="fm-g-log" dir="ltr">{n.log.length ? n.log.map((l) => <span key={l}>{l}</span>) : 'Press play to watch the satellites pass over one fire.'}</p>
        </div>
      </div>
    </Fig>
  )
}

const STEPS: [string, string, string][] = [
  ['Clean', 'Remove false fires', 'Drop low-confidence detections, and every 2 km square that ever held a permanent heat source such as a gas flare or a factory.'],
  ['Count fairly', 'Fire-days', 'Count each 2 km square once per day if it had any fire (Part 2). This removes repeated rows from extra pixels, passes and satellites.'],
  ['Pick a yardstick', 'One reference per period', "Terra (converted) until June 2002, Aqua from July 2002 to 2021, and VIIRS converted into Aqua-equivalent from 2022, when Aqua's pass time started to drift."],
  ['Convert', 'Two estimates, averaged', "Estimate 1: VIIRS × the usual Aqua-to-VIIRS ratio for that calendar month (fires differ by season). Estimate 2: for every square VIIRS saw, the chance Aqua would also see it given the fire's strength (FRP) and season, added up. The final number is the average of the two."],
  ['Keep it current', 'Recent years count more', "The ratios and curves are learned from 2012–2021, with each year's weight halving every two years back. The cameras' relationship drifts slowly, so recent years describe it best. This cut the forward error from 11.5% to 10.0%."],
]
export function FigSteps() {
  const [on, setOn] = useState(3)
  return (
    <Fig title="The five steps" note="select a step">
      <ListSection>
        {STEPS.map(([name, sub], i) => (
          <ListRow key={name} leading={<span className="fm-g-stepno">{i + 1}</span>} title={name} subtitle={sub} selected={on === i} onClick={() => setOn(i)} />
        ))}
      </ListSection>
      <Notice tone="info">
        <b>Step {on + 1} · {STEPS[on][0]}.</b> {STEPS[on][2]}
      </Notice>
    </Fig>
  )
}

export function FigFrp() {
  const [on, setOn] = useState<Set<string>>(() => new Set(C.REGX))
  const [ref] = useDraw((b) => C.drawFrp(b, on), [on])
  return (
    <Fig
      title="The stronger the fire, the more likely MODIS (Aqua) also sees it"
      note="real curves 2012–2021"
      controls={C.REGX.map((r) => (
        <Checkbox
          key={r}
          controlSize="small"
          label={<span className="fm-chip-label"><i className="fm-swatch" style={{ background: C.RC[r] }} aria-hidden />{C.RN[r]}</span>}
          checked={on.has(r)}
          onCheckedChange={(v) => setOn((s) => { const n = new Set(s); if (v) n.add(r); else n.delete(r); return n })}
        />
      ))}
      caption={<>For each 2 km square-day that VIIRS (S-NPP) saw, the share that Aqua also saw, by the fire strength (<Term g="frp">FRP</Term>) VIIRS measured. Dots are raw shares, lines the smoothed curves the method uses.</>}
    >
      <div ref={ref} className="fm-g-svg" />
    </Fig>
  )
}

export function FigTests() {
  const [mode, setMode] = useState<'loyo' | 'fw'>('loyo')
  const [round, setRound] = useState(0)
  useEffect(() => {
    if (mode !== 'loyo' || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setRound((r) => r + 1), 1400)
    return () => clearInterval(id)
  }, [mode])
  const [ref] = useDraw((b) => C.drawTests(b, mode, round), [mode, round])
  return (
    <Fig
      title="The two test designs"
      note="animated"
      controls={<SegmentedControl label="Test design" value={mode} onChange={setMode} options={[{ value: 'loyo', label: 'Hide one year at a time' }, { value: 'fw', label: 'Forward test' }]} />}
      caption={mode === 'loyo' ? 'Hide one year at a time: every year is predicted once by a version of the method that never saw it. The animation goes through all 10 rounds.' : 'Forward test: like real use after 2022, the method only learns from the past. Methods that drift over time are caught here.'}
    >
      <div ref={ref} className="fm-g-svg" />
    </Fig>
  )
}

export function FigCameras() {
  const [nv, setNv] = useState(45)
  const [pv, setPv] = useState(55)
  const [shared, setShared] = useState(false)
  const [seed, setSeed] = useState(3)
  const N = C.camN(nv), p = pv / 100
  const [ref, res] = useDraw((b) => C.drawCameras(b, N, p, shared, seed), [N, p, shared, seed])
  const note = shared
    ? 'With shared bad days the real miss is larger than the formula, just like the real data (formula 1–6.5%, measured 2.9–12.6%).'
    : N < 200
      ? "Few fires: luck dominates, so the miss is large. This is Portugal's situation."
      : "Many fires: luck averages out and the miss is small. This is South Sudan's situation."
  return (
    <Fig
      title="Try it: two identical cameras watching the same fires"
      note="simulator"
      controls={
        <>
          <Field label="Fires seen per month" value={C.fmt(N)}>
            <Slider label="Fires seen per month" min={0} max={100} value={nv} onValueChange={setNv} getValueText={() => C.fmt(N)} />
          </Field>
          <Field label="Detection chance" value={C.fmt(p, 2)}>
            <Slider label="Detection chance" min={10} max={90} value={pv} onValueChange={setPv} getValueText={() => C.fmt(p, 2)} />
          </Field>
          <Checkbox label="Add shared bad days (clouds, viewing angle)" checked={shared} onCheckedChange={setShared} />
          <Button variant="tonal" onClick={() => setSeed((s) => s + 1)}>
            <RefreshCw aria-hidden />
            Simulate 36 months
          </Button>
        </>
      }
      caption='Each bar is one month: how far camera B&apos;s real count was from the estimate made from camera A. Both cameras see the same true fires, with the same chance. Lower the fires per month and the misses grow; tick "shared bad days" and they grow beyond the formula, as in the real data.'
    >
      <div className="fm-g-two">
        <div ref={ref} className="fm-g-svg" />
        <div className="fm-stack">
          <div className="fm-g-counters">
            <div><span>Average monthly miss (simulated)</span><strong className="fm-g-accent">{res ? `${C.fmt(res.sim, 1)}%` : '–'}</strong></div>
            <div><span>Formula prediction</span><strong>{res ? `${C.fmt(res.form, 1)}%` : '–'}</strong></div>
          </div>
          <p className="fm-note">{note}</p>
        </div>
      </div>
    </Fig>
  )
}

const SYM: [string, string, string, string, string][] = [
  ['n', 'N', 'Fires seen per month', 'How many fire-days the camera usually reports in a month. The bigger it is, the smaller the percentage miss.', '1,000'],
  ['q', 'p', 'Detection chance', 'The chance the camera catches a given fire-day during its pass. In Punjab only 0.26 (small, short fires); in Bolivia 0.65.', '0.5'],
  ['q', '1 − p', 'Miss chance', 'The chance it misses that fire-day. If the camera caught everything (p = 1), this is 0 and there is no randomness.', '0.5'],
  ['two', '2', 'Two cameras', 'Both counts have their own luck, and the two luck factors add up. One camera alone would have 1 here.', '2'],
  ['sq', '√', 'Square root', 'Luck grows more slowly than the count. Four times more fires only doubles the spread, so as a percentage it halves.', '√0.001 = 0.032'],
  ['k', '0.8', 'Spread to average miss', 'The formula first gives the typical spread (standard deviation). For a bell-shaped spread, the average miss is about 0.8 of it (exactly √(2/π) = 0.798).', '0.8'],
  ['w', 'WAPE', 'Average monthly miss', 'The result: the percentage by which the estimate misses the real count in a typical month.', '2.5%'],
]
export function Formula() {
  const [on, setOn] = useState<string | null>(null)
  const P = ({ p, children }: { p: string; children: ReactNode }) => (
    <button type="button" className="fm-g-eqp" data-on={on === p || undefined} onMouseEnter={() => setOn(p)} onMouseLeave={() => setOn(null)} onFocus={() => setOn(p)} onBlur={() => setOn(null)}>
      {children}
    </button>
  )
  return (
    <>
      <div className="fm-g-eq" dir="ltr">
        WAPE ≈ <P p="k">0.8</P> × √( <P p="two">2</P> × (<P p="q">1 − <i>p</i></P>) ÷ <P p="n"><i>N</i></P> )
      </div>
      <p className="fm-note">Hover or focus a piece of the formula to highlight its row below.</p>
      <Table>
        <thead>
          <tr><Th>Piece</Th><Th>Name</Th><Th>What it means in plain words</Th><Th numeric>Example</Th></tr>
        </thead>
        <tbody>
          {SYM.map(([key, sym, name, what, ex]) => (
            <tr key={sym} data-on={on === key || undefined} className="fm-g-symrow">
              <Td className="fm-g-sym">{sym}</Td><Td>{name}</Td><Td>{what}</Td><Td numeric>{ex}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export function FloorTable() {
  const f = C.D.floorTheory
  return (
    <Table>
      <thead>
        <tr><Th>Region</Th><Th numeric>Fires seen per month (N)</Th><Th numeric>Detection chance (p)</Th><Th numeric>Formula (luck only)</Th><Th numeric>Measured</Th><Th numeric>Extra from shared bad days</Th></tr>
      </thead>
      <tbody>
        {C.REGX.map((r) => {
          const [n, p, fo, ms] = f[r]
          return (
            <tr key={r}><Td>{C.RN[r]}</Td><Td numeric>{C.fmt(n)}</Td><Td numeric>{C.fmt(p, 2)}</Td><Td numeric>{C.fmt(fo, 1)}%</Td><Td numeric><b>{C.fmt(ms, 1)}%</b></Td><Td numeric>+{C.fmt(ms - fo, 1)} pts</Td></tr>
          )
        })}
        <tr>
          <Td><b>Average (first 4)</b></Td><Td /><Td /><Td numeric>{C.fmt(C.REG.reduce((a, r) => a + f[r][2], 0) / 4, 1)}%</Td><Td numeric><b>{C.fmt(C.REG.reduce((a, r) => a + f[r][3], 0) / 4, 1)}%</b></Td><Td />
        </tr>
      </tbody>
    </Table>
  )
}

export function FigBench() {
  const [mode, setMode] = useState<'l' | 'f'>('f')
  const [ref, title] = useDraw((b) => C.drawBench(b, mode), [mode])
  return (
    <Fig
      title={title ?? ''}
      note="average of 4 regions"
      controls={<SegmentedControl label="Test" value={mode} onChange={setMode} options={[{ value: 'l', label: 'Hide one year' }, { value: 'f', label: 'Forward test' }]} />}
      caption="Average monthly miss; lower is better. Dots are the four regions (hover). The dashed line is the 7% floor. Joining the records directly (163–355%) is far off this scale."
    >
      <div ref={ref} className="fm-g-svg" />
    </Fig>
  )
}

export function FigHeldOut() {
  const [region, setRegion] = useState<C.Region>('punjab')
  const [ref, score] = useDraw((b) => C.drawHeldOut(b, region), [region])
  return (
    <Fig
      title="Hidden months: what Aqua saw versus our estimate"
      note="real data 2012–2021"
      controls={<><RegionSelect value={region} onChange={setRegion} /><span className="fm-g-readout">{score}</span></>}
      caption="Dashed: real Aqua count. Blue: estimate from VIIRS alone, each year predicted without seeing it."
    >
      <div ref={ref} className="fm-g-svg" />
    </Fig>
  )
}

export function FigDrift() {
  const [ref] = useDraw((b) => C.drawDrift(b), [])
  return (
    <Fig title="Local pass time, by year" note="from FIRMS timestamps">
      <div ref={ref} className="fm-g-svg" />
    </Fig>
  )
}

export function FigDiurnal() {
  const [region, setRegion] = useState<'bolivia' | 'portugal'>('bolivia')
  const [time, setTime] = useState(15.25)
  const [ref, read] = useDraw((b) => C.drawDiurnal(b, region, time), [region, time])
  const hm = (h: number) => `${String(Math.floor(h)).padStart(2, '0')}:${String(Math.round((h % 1) * 60)).padStart(2, '0')}`
  return (
    <Fig
      title="When fires burn during the day"
      note="GOES every 10 minutes"
      controls={
        <>
          <SegmentedControl label="Region" value={region} onChange={setRegion} options={[{ value: 'bolivia', label: 'Bolivia' }, { value: 'portugal', label: 'Portugal' }]} />
          <Field label="Pass time" value={hm(time)}>
            <Slider label="Pass time" min={0} max={23.5} step={0.25} value={time} onValueChange={setTime} getValueText={hm} />
          </Field>
          <span className="fm-g-readout">{read}</span>
        </>
      }
      caption="Each bar is half an hour's share of the day's fire activity. In Punjab, where crop burning concentrates in the afternoon, the drifted Aqua sees up to 60% more than a 13:30 camera (2024–2025)."
    >
      <div ref={ref} className="fm-g-svg" />
    </Fig>
  )
}

export function FigCalendar() {
  const [region, setRegion] = useState<C.Region>('punjab')
  const [series, setSeries] = useState<C.Series>('ensemble_adaptive')
  const [mode, setMode] = useState<'v' | 'a'>('v')
  const legend = useRef<HTMLDivElement>(null)
  const [ref, title] = useDraw((b) => (legend.current ? C.drawCalendar(b, legend.current, region, series, mode) : ''), [region, series, mode])
  return (
    <Fig
      title={title || 'Fire-days per month'}
      note="real data"
      controls={
        <>
          <RegionSelect value={region} onChange={setRegion} />
          <Select hint="Series" labelStyle="inside" value={series} onValueChange={(v) => v && setSeries(v as C.Series)} containerClassName="fm-g-select">
            <Option value="ensemble_adaptive">Harmonized (our method)</Option>
            <Option value="naive">Joined directly</Option>
            <Option value="aqua_only">Aqua only (drifts after 2022)</Option>
          </Select>
          <SegmentedControl label="Display" value={mode} onChange={setMode} options={[{ value: 'v', label: 'Count' }, { value: 'a', label: 'Anomaly' }]} />
        </>
      }
      caption='Hover a square for its value and how it compares with the usual level. Switch to "Joined directly" with the anomaly view: every month after 2012 turns red, which is the camera change, not more fire.'
    >
      <div ref={legend} className="fm-g-legend" />
      <div ref={ref} className="fm-g-svg" />
    </Fig>
  )
}
