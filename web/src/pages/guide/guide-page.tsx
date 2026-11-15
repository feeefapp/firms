import { useMemo } from 'react'
import { Option, Select } from '@feeef.dev/ui/primitives/select'
import { ToolbarGroup } from '@feeef.dev/ui/toolbar'
import { Panel, PageHeader, Stat, Table, Tag, Td, Th } from '@/components/ui/data'
import { ScreenTop } from '@/shell/screen-slots'
import { t } from '@/i18n/locale'
import {
  Callout,
  Faq,
  FigBench,
  FigCalendar,
  FigCameras,
  FigDiurnal,
  FigDrift,
  FigFrp,
  FigHeldOut,
  FigJump,
  FigOneFire,
  FigSquares,
  FigSteps,
  FigTests,
  FloorTable,
  Formula,
  Glossary,
  Q,
  Section,
  Term,
} from './parts'
import './guide.css'

const SECTIONS: [string, string][] = [
  ['basics', '1 · The basics'],
  ['firedays', '2 · Counting fairly'],
  ['convert', '3 · Converting'],
  ['testing', '4 · How we test'],
  ['floor', '5 · The 7% floor'],
  ['results', '6 · Results'],
  ['after2022', '7 · After 2022'],
  ['calendar', '8 · The calendar'],
  ['tool', '9 · The app'],
  ['faq', '10 · More questions'],
  ['limits', '11 · Limits'],
  ['glossary', 'Glossary and sources'],
]

/**
 * The plain-language guide to the method (NASA Space Apps 2026, Harmonization of MODIS and VIIRS
 * Hot Spots): questions answered one sentence first, with figures drawn from the study's real
 * numbers. Written in English; it reads left-to-right inside the app in any language.
 */
export default function GuidePage() {
  const jump = useMemo(
    () => (id: string | null) => {
      if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    [],
  )
  return (
    <>
      <ScreenTop>
        <ToolbarGroup label={t('m.guide.sections')}>
          <Select hint={t('m.guide.jump')} labelStyle="inside" variant="text" value={null} onValueChange={jump} containerClassName="fm-g-jump">
            {SECTIONS.map(([id, label]) => (
              <Option key={id} value={id}>
                {label}
              </Option>
            ))}
          </Select>
        </ToolbarGroup>
      </ScreenTop>
      <article className="fm-guide" lang="en" dir="ltr">
        <PageHeader
          title="One fire calendar from two different satellite cameras"
          description="NASA Space Apps 2026 · Harmonization of MODIS and VIIRS Hot Spots · a plain-language guide. Underlined words open a short definition; the charts use the study's real numbers and respond to hover or tap."
        />
        <Panel className="fm-g-short">
          <div className="fm-pad fm-g-body">
            <h3>The short answer</h3>
            <ul className="fm-g-list">
              <li>Two families of satellite cameras record fires: <Term g="modis">MODIS</Term> since 2000 and <Term g="viirs">VIIRS</Term> since 2012. VIIRS is sharper, so it reports 2–4 times as many fires. Putting the two records side by side creates a fake "fire explosion" in 2012.</li>
              <li>We count fires fairly (one <Term g="fireday">fire-day</Term> per 2 km square per day), then convert VIIRS counts into "what MODIS would have counted".</li>
              <li>Tested on 7.8 million real detections, the conversion misses by about 10% a month. Even two identical cameras miss each other by about 7%, so little room is left.</li>
            </ul>
          </div>
        </Panel>
        <div className="fm-stats">
          <Stat label="Joined as they are" value="163–355%" hint="monthly error" />
          <Stat label="One fixed multiplier" value="18.6%" hint="monthly error" />
          <Stat label="Our method" value="≈10%" hint="monthly error" />
          <Stat label="Smallest possible" value="≈7%" hint="two identical cameras" />
        </div>
      <Section id="basics" kicker={"Part 1 · The basics"} title={"Cameras, satellites and fire records"}>
        <Q title={"What are MODIS and VIIRS?"}>
          <p><b>They are cameras, not satellites.</b> Each is a heat-sensing camera that looks down at Earth and flags pixels that are much hotter than their surroundings. Those flags are active fires.</p></Q>
        <Q title={"Then what are Terra, Aqua, S-NPP and NOAA-20?"}>
          <p><b>They are the satellites that carry the cameras.</b> "MODIS data" means what Terra and Aqua recorded; "VIIRS data" means what S-NPP, NOAA-20 and NOAA-21 recorded.</p>
          <Table>
            <thead><tr><Th>Camera</Th><Th>Satellite</Th><Th>Fire data since</Th><Th>Passes over a place at about</Th><Th>Pixel size (straight down)</Th></tr></thead>
            <tbody>
              <tr><Td style={{ color: "var(--modis)", fontWeight: "600" }}>MODIS</Td><Td><Term g="terra">Terra</Term></Td><Td numeric>Nov 2000</Td><Td numeric>10:30 and 22:30</Td><Td numeric>1 km</Td></tr>
              <tr><Td style={{ color: "var(--modis)", fontWeight: "600" }}>MODIS</Td><Td><Term g="aqua">Aqua</Term></Td><Td numeric>Jul 2002</Td><Td numeric>13:30 and 01:30</Td><Td numeric>1 km</Td></tr>
              <tr><Td style={{ color: "var(--viirs)", fontWeight: "600" }}>VIIRS</Td><Td><Term g="snpp">S-NPP</Term></Td><Td numeric>Jan 2012</Td><Td numeric>13:30 and 01:30</Td><Td numeric>375 m</Td></tr>
              <tr><Td style={{ color: "var(--viirs)", fontWeight: "600" }}>VIIRS</Td><Td><Term g="noaa20">NOAA-20</Term></Td><Td numeric>Apr 2018</Td><Td numeric>13:30 and 01:30</Td><Td numeric>375 m</Td></tr>
              <tr><Td style={{ color: "var(--viirs)", fontWeight: "600" }}>VIIRS</Td><Td>NOAA-21</Td><Td numeric>Mar 2023</Td><Td numeric>13:30 and 01:30</Td><Td numeric>375 m</Td></tr>
            </tbody></Table>
          <p>We keep the satellites apart because they pass at different hours. Aqua passes at the same hour as VIIRS (13:30), so it is the fairest partner for comparison. Terra passes in the morning, when fires are weaker.</p></Q>
        <Q title={"What is one \"fire\" in the data?"}>
          <p><b>One row in <Term g="firms">FIRMS</Term> is one hot pixel seen by one satellite in one pass.</b> It is not one fire. A single field fire can produce 1 row in MODIS and 20 rows across three VIIRS satellites on the same afternoon.</p></Q>
        <Q title={"So why not just put the two records one after the other?"}>
          <p><b>Because the count jumps when the camera changes, not when fires change.</b> Pick a region below: the direct join (orange) leaps in 2012 when VIIRS starts; the harmonized series (blue) does not.</p>
          <FigJump /></Q>
      </Section>

      <Section id="firedays" kicker={"Part 2 · Counting fairly"} title={"Fire-days: counting each burning place once a day"}>
        <Q title={"What does \"fire-days on 2 km cells\" mean?"}>
          <p><b>We do not create new fire points; we count the existing ones differently.</b> The map is divided into squares of 2 km × 2 km. For each square and each day we ask one question: was any fire detected here today? Yes counts as 1, whether there were 1 or 20 rows. No counts as 0.</p>
          <FigSquares /></Q>
        <FigOneFire />
        <Q title={"Doesn't this break analysis over a few hours?"}>
          <p><b>No, because fire-days are only used for the monthly calendar.</b> The raw detections stay untouched, at their exact place and time, for the map, the CSV download and any hourly analysis.</p>
          <ul className="fm-g-list"><li>Polar satellites (MODIS, VIIRS) pass over a place only about twice a day, so they cannot give hourly data anyway. One day is the smallest fair unit for comparing satellites that pass at different hours.</li>
            <li>For hour-by-hour tracking, use the raw detections or <Term g="goes">geostationary satellites</Term>, which image every 10–15 minutes.</li></ul></Q>
        <Q title={"Why 2 km and not 1 km or 5 km?"}>
          <p><b>2 km is just larger than a MODIS pixel (1 km) plus the position wobble between passes (about 300 m).</b> Smaller squares would split one MODIS pixel into several; larger ones merge neighbouring fires. We tested 1, 2 and 5 km and the final accuracy changed by less than one point.</p></Q>
      </Section>

      <Section id="convert" kicker={"Part 3 · Converting"} title={"Turning VIIRS counts into \"MODIS-equivalent\" counts"}>
        <Q title={"Do you delete VIIRS fires to make it look like MODIS?"}>
          <p><b>No fire is deleted.</b> We convert the monthly number only. If VIIRS counted 1,000 fire-days in a month, and history shows Aqua sees about 30% of what VIIRS sees in that month and for fires of that strength, the calendar shows about 300 "Aqua-equivalent" fire-days. The 1,000 detections stay on the map.</p></Q>
        <Q title={"Why convert VIIRS down to MODIS, and not MODIS up to VIIRS?"}>
          <p><b>Because converting down estimates fires that were actually seen; converting up would guess fires nobody saw.</b> It also touches fewer years (2022 onward instead of 2001–2011). Comparisons against the usual level of each month work the same in either unit.</p></Q>
        <Q title={"How does the conversion work, step by step?"}>
          <FigSteps /></Q>
        <Q title={"Why not just multiply VIIRS by one fixed number?"}>
          <p><b>Because how much of VIIRS's fires MODIS also sees depends on the fire's strength and on the region.</b> Strong fires are almost always seen by both; weak ones mostly only by VIIRS. A fixed number pretends the lines below are flat and identical. They are neither, and a fixed number doubles the error (18.6% instead of about 10%).</p>
          <FigFrp /></Q>
      </Section>

      <Section id="testing" kicker={"Part 4 · How we test"} title={"How we know the method works"}>
        <Q title={"To test a result you must compare it with something real. What did we compare with?"}>
          <p><b>With what Aqua actually recorded.</b> From 2012 to 2021 Aqua (MODIS) and S-NPP (VIIRS) flew at the same time, so for every month we know what both saw. We hide Aqua, let the method estimate Aqua from VIIRS alone, then compare the estimate with the real Aqua count.</p></Q>
        <FigTests />
        <Q title={"How is the error measured?"}>
          <p><b>As the average monthly miss, in percent (<Term g="wape">WAPE</Term>).</b> Add up how far the estimate missed in every hidden month, and divide by the total true count. 10% means: for every 1,000 fire-days Aqua really counted, the estimate was off by about 100.</p>
          <p>WAPE (Weighted Absolute Percentage Error) is a <b>standard, published error measure</b>, widely used to score forecasts. We did not invent it. We chose it because a plain average of monthly percentages explodes in quiet months (a miss of 3 on a true count of 1 is 300%), while WAPE weights each month by how many fires it really had.</p></Q>
        <Q title={"Why these four regions (and Algeria)?"}>
          <p><b>To test the method in situations as different from each other as possible.</b> A method that only works for one kind of fire is not useful. Each region stresses it in a different way:</p>
          <Table>
            <thead><tr><Th>Region</Th><Th>Kind of fire</Th><Th numeric>Fires seen / month (N)</Th><Th numeric>Detection chance (p)</Th><Th>What it tests</Th></tr></thead>
            <tbody>
              <tr><Td>Punjab, India</Td><Td>Crop-stubble burning: very small, very short fires</Td><Td numeric>3,484</Td><Td numeric>0.26</Td><Td>The hardest case to detect; the gap between MODIS and VIIRS is largest here.</Td></tr>
              <tr><Td>South Sudan</Td><Td>Savanna grass fires: very many, widespread</Td><Td numeric>2,934</Td><Td numeric>0.55</Td><Td>Dry tropics with huge counts; the statistically "easy" case.</Td></tr>
              <tr><Td>Portugal</Td><Td>Mediterranean forest fires: few, but sudden and large</Td><Td numeric>133</Td><Td numeric>0.58</Td><Td>Few fires, cloudy European weather, higher latitude.</Td></tr>
              <tr><Td>Bolivia</Td><Td>Forest clearing and Amazon fires: large, heavy smoke</Td><Td numeric>2,997</Td><Td numeric>0.65</Td><Td>Humid tropics, a short and intense season.</Td></tr>
              <tr><Td>Algeria (north) <Tag tone="primary">added</Tag></Td><Td>Summer forest fires in the Tell mountains (such as Kabylie 2021) and crop-stubble burning</Td><Td numeric>217</Td><Td numeric>0.41</Td><Td>North Africa; few fires, and some years far bigger than others. See Part 6.</Td></tr>
            </tbody></Table>
          <p>Together they cover three continents, fire sizes from tiny to huge, monthly counts from about 130 to about 3,500, different climates and cloud cover, and different latitudes (which change how satellite tracks overlap). All four have complete FIRMS archives from 2001 to today. Lebanon was added later only to test the "new region" tool on a low-fire area. <b>Algeria</b> was added afterwards and tested in exactly the same way (Part 6), but it is kept out of the four-region averages so the earlier numbers stay comparable. Only northern Algeria (north of 34°N) is used: almost all vegetation fires are there, while the Sahara mostly shows gas flares, which are not wildfires.</p>
          <Callout title="Honest limit">Four regions is a small sample. Missing are <b>boreal forests</b> (Canada, Siberia: huge fires, and at high latitude satellites pass several times a day) and <b>Australia</b>. The results are convincing for these four fire types; claiming they hold everywhere needs more regions.</Callout></Q>
        <Q title={"Why compare with Aqua? Is Aqua the truth?"}>
          <p><b>Aqua is the best yardstick available, not the absolute truth.</b> No record of every fire on Earth exists. Our goal is a series that continues the MODIS history, so the right question is: what would MODIS have seen? Aqua answers exactly that. Aqua also has its own randomness, and that is part of the 7% floor in Part 5.</p></Q>
        <Q title={"How reliable is the test?"}>
          <Table><thead><tr><Th>Strong</Th><Th>Weak</Th></tr></thead><tbody><tr>
            <Td><ul className="fm-g-list"><li>Compares with real counts, not simulated ones.</li><li>The method never sees the year it predicts.</li><li>480 test months, 4 different fire regions, 2 test designs.</li><li>Large differences are certain: 163–355% vs about 19% vs about 10%.</li></ul></Td>
            <Td><ul className="fm-g-list"><li>Aqua has its own noise.</li><li>Differences under 1 point between methods are inside the noise; we did not compute confidence intervals.</li><li>Only four regions in the main averages (plus Algeria as a check); other fire regimes (boreal forests) are untested.</li></ul></Td>
          </tr></tbody></Table></Q>
      </Section>

      <Section id="floor" kicker={"Part 5 · The 7% floor"} title={"Why even a perfect method misses by about 7%"}>
        <Q title={"Where does the 7% come from?"}>
          <p><b>We measured it; we did not choose it.</b> S-NPP and NOAA-20 carry the <i>same</i> camera on the <i>same</i> orbit, 50 minutes apart. We used the method to predict one from the other. They still disagree by about 7% a month (2.9% to 12.6% by region). If two identical cameras disagree that much, no method comparing two different cameras can do better.</p></Q>
        <Q title={"Why would two identical cameras disagree?"}>
          <ol className="fm-g-list">
            <li><b>The fire changes in 50 minutes.</b> A small field fire can start at 13:20 and be out by 13:40. The first satellite sees it; the second finds nothing.</li>
            <li><b>Clouds move.</b> A cloud may cover the area during one pass and clear before the next.</li>
            <li><b>Viewing angle.</b> One satellite looks straight down (small, sharp pixels); the other looks from the side (bigger, blurrier pixels) and misses small fires.</li>
            <li><b>Pure chance.</b> Even with nothing else going on, which individual fires get caught is partly luck, like coin flips.</li>
          </ol></Q>
        <Callout title="The coin idea">Flip 10 coins: you expect 5 heads but often get 3 or 7, a 40% miss. Flip 1,000 coins: you get about 485 to 515, a 3% miss. With more cases, luck matters less as a percentage. That is why Portugal (few fires) has 12.6% and South Sudan (many fires) 2.9%.</Callout>
        <FigCameras />
        <Q title={"The formula, one piece at a time"}>
          <p>For pure chance between two identical cameras, the expected average monthly miss is:</p>
          <Formula /></Q>
        <Q title={"Worked example"}>
          <div className="fm-g-calc">
            <div>N = 1,000 fires seen per month, p = 0.5</div>
            <div>1 − p = 0.5</div>
            <div>2 × 0.5 = 1</div>
            <div>1 ÷ 1,000 = 0.001</div>
            <div>√0.001 = 0.0316</div>
            <div>0.8 × 0.0316 = 0.025 → <strong>about 2.5% average monthly miss</strong></div>
            <div style={{ marginTop: "6px", color: "var(--muted)" }}>Same p, but N = 100: √(1 ÷ 100) = 0.1 → 0.8 × 0.1 = <strong>8%</strong>. Ten times fewer fires, about three times bigger miss.</div>
          </div></Q>
        <Q title={"Where does this formula come from? Is it published?"}>
          <p><b>WAPE itself is a standard measure. This floor formula is our own derivation for this problem</b>, not taken from a fire paper. But it is not made up: every step is a textbook rule of statistics.</p>
          <Table>
            <thead><tr><Th>Step</Th><Th>Textbook rule</Th><Th>Gives</Th></tr></thead>
            <tbody>
              <tr><Td>Each camera catches each fire with chance <i>p</i>, independently</Td><Td>Binomial distribution: the count's variance is <i>N</i>·(1 − <i>p</i>)</Td><Td numeric><i>N</i>(1 − <i>p</i>)</Td></tr>
              <tr><Td>Compare two independent cameras</Td><Td>Variance of a difference = sum of the two variances</Td><Td numeric>2·<i>N</i>(1 − <i>p</i>)</Td></tr>
              <tr><Td>Turn variance into typical spread, as a share of <i>N</i></Td><Td>Standard deviation = square root of variance</Td><Td numeric>√(2(1 − <i>p</i>) ÷ <i>N</i>)</Td></tr>
              <tr><Td>Turn typical spread into average miss</Td><Td>For a bell curve, mean absolute deviation = σ·√(2/π)</Td><Td numeric>× 0.8</Td></tr>
            </tbody></Table>
          <p><b>How we checked it:</b> the camera simulator above flips a real "coin" for every fire, without using the formula, and its result matches the formula (for example 4.8% simulated vs 5.1% predicted). Against real data it explains only part of the 7%, as the next question shows.</p>
          <p><b>Its limits:</b> it is an approximation. It assumes fires are caught independently, all with the same chance <i>p</i>, and that there are enough fires for a bell-shaped spread. Use it to understand <i>why</i> a floor exists, not to compute it exactly.</p></Q>
        <Q title={"Does the formula explain the whole 7%?"}>
          <p><b>It explains the pattern, but only part of the size.</b> Using each region's real N and p, the formula predicts 1–6.5%; we measured 2.9–12.6%.</p>
          <FloorTable />
          <p>The formula assumes each fire is caught independently, by luck. In reality some effects hit <b>all fires on the same day at once</b>: a cloudy day, a day when the whole region falls at one satellite's swath edge. Like a truck passing in front of one of two people counting birds, they cause many misses together, and those do not average out. So the floor is pure chance (falls with √N) plus these shared daily effects. Neither is a flaw of the method; both are in the data.</p></Q>
        <Callout title="What it means for our result">Two identical cameras: about 7%. Our method, converting between two <i>different</i> cameras: about 10%. Joining the records directly: 163–355%. Like a ruler marked only in millimetres, 7% is the finest this data can measure. Our method sits about 3 points above it, which is why smarter models could not improve it much.</Callout>
      </Section>

      <Section id="results" kicker={"Part 6 · Results"} title={"What worked and what did not"}>
        <FigBench />
        <Q title={"Did smarter ideas help?"}>
          <Table><thead><tr><Th>Idea</Th><Th>Why it seemed promising</Th><Th>What happened</Th></tr></thead><tbody>
            <tr><Td>Count fire energy instead of fires</Td><Td>Energy depends less on pixel size</Td><Td><Tag tone="danger">Worse</Tag> 14% vs 10%: a few huge fires dominate the totals</Td></tr>
            <tr><Td>Correct for clouds</Td><Td>Clouds hide fires</Td><Td><Tag tone="danger">No help</Tag> Aqua and VIIRS pass at the same hour and see the same clouds</Td></tr>
            <tr><Td>Correct for overpass time with GOES</Td><Td>Fires peak in the afternoon</Td><Td><Tag tone="danger">Over-corrected</Tag> GOES's coarse pixels see mostly big fires</Td></tr>
            <tr><Td>Two VIIRS satellites as reference</Td><Td>Two looks reduce luck</Td><Td><Tag tone="danger">Worse</Tag> three overlap years are too few to calibrate</Td></tr>
            <tr><Td>Aqua's predictable viewing angle</Td><Td>Pixel size follows a 16-day cycle</Td><Td><Tag tone="primary">Tiny gain</Tag> 0.1 point</Td></tr>
            <tr><Td>Machine learning (<Term g="gb">gradient boosting</Term>)</Td><Td>More information per fire</Td><Td><Tag tone="primary">Tiny gain</Tag> about 0.3 point, inside the noise</Td></tr>
            <tr><Td>Weight recent years more (adaptive)</Td><Td>The cameras' relationship drifts slowly</Td><Td><Tag tone="success">Real gain</Tag> 11.5% → 10.0% forward</Td></tr>
          </tbody></Table></Q>
        <FigHeldOut />
        <Q title={"What about Algeria?"}>
          <p><b>The method works there too, but a different variant wins.</b> Same tests, same data source (2001 to November 2026). Northern Algeria has few fires (Aqua: about 118 fire-days a month), so its own floor is high: 10.4% measured between S-NPP and NOAA-20 (the formula gives 6.1%).</p>
          <Table>
            <thead><tr><Th>Method</Th><Th numeric>Hide one year</Th><Th numeric>Forward test</Th></tr></thead>
            <tbody>
              <tr><Td>Joined directly (rows / fire-days)</Td><Td numeric>221% / 201%</Td><Td numeric>–</Td></tr>
              <tr><Td>One fixed multiplier</Td><Td numeric>28.9%</Td><Td numeric>34.2%</Td></tr>
              <tr><Td>Multiplier per month</Td><Td numeric>18.6%</Td><Td numeric>22.4%</Td></tr>
              <tr><Td>Our ensemble (default)</Td><Td numeric>14.5%</Td><Td numeric>17.5%</Td></tr>
              <tr><Td><b>Fire-strength curve alone</b></Td><Td numeric><b>11.5%</b></Td><Td numeric><b>12.8%</b></Td></tr>
              <tr><Td>Fire-strength curve by season</Td><Td numeric>11.3%</Td><Td numeric>12.9%</Td></tr>
              <tr><Td><i>Floor for this region</i></Td><Td numeric><i>10.4%</i></Td><Td numeric>–</Td></tr>
            </tbody></Table>
          <p><b>Why the difference?</b> In Algeria the share of VIIRS fires that Aqua also sees jumps from year to year: 0.17 in a quiet year (2018) and 0.40 in a big-fire year (2012). In big-fire years the fires are larger and hotter, so MODIS catches more of them. A multiplier per month learns an average and cannot follow those swings, which pulls the ensemble down. The fire-strength curve looks at how strong each fire is, so it adapts automatically. In Punjab that share hardly moves (0.21–0.26), which is why the multiplier works well there.</p>
          <Callout title="What it means">For Algeria, use the fire-strength curve (FRP). It lands about 1 point above the region's own floor, so there is little left to gain. More generally: in regions where fire size varies a lot from year to year, prefer the FRP-based method. The Compare page and the algorithm filter let you choose it per region.</Callout></Q>
      </Section>

      <Section id="after2022" kicker={"Part 7 · After 2022"} title={"Why the calendar switches to VIIRS in 2022"}>
        <Q title={"What changed in 2022?"}>
          <p><b>Terra and Aqua started to <Term g="drift">drift</Term>: they now pass at different hours than before.</b> We measured this from the detection times themselves. Aqua moved from about 13:24 to 15:16; Terra from 10:44 to 9:07. VIIRS stayed at about 13:20.</p>
          <FigDrift /></Q>
        <Q title={"Why does a later pass matter?"}>
          <p><b>Fires burn most in mid-afternoon.</b> A satellite passing at 15:15 sees more fire than one at 13:30, so Aqua's counts after 2022 are not comparable with its own past. Drag the pass time below.</p>
          <FigDiurnal /></Q>
      </Section>

      <Section id="calendar" kicker={"Part 8 · The calendar"} title={"How to read the fire calendar"}>
        <ul className="fm-g-list">
          <li><b>Rows are years, columns are months.</b> Each square is the number of fire-days in that month.</li>
          <li><b>Count view:</b> darker blue = fewer fires, yellow = more (<Term g="cividis">Cividis</Term> colours, readable with colour blindness).</li>
          <li><b>Anomaly view:</b> red = more than usual for that month, blue = less, grey = normal. "Usual" is the median of the same month in 2003–2022 (<Term g="anomaly">anomaly</Term>).</li>
          <li><b>The letter beside each year</b> is where the number came from: T Terra converted, A Aqua, V VIIRS converted.</li>
        </ul>
        <FigCalendar />
      </Section>

      <Section id="tool" kicker={"Part 9 · The app"} title={"What Firms lets you do"}>
        <Table><thead><tr><Th>You want to…</Th><Th>In Firms</Th></tr></thead><tbody>
          <tr><Td>See the fire history</Td><Td>Overview: the calendar from 2001, as counts or as anomalies, for any period</Td></tr>
          <tr><Td>Know if this month is unusual</Td><Td>Overview: this month against its usual level, and its rank among all years</Td></tr>
          <tr><Td>Compare methods</Td><Td>Compare: nine algorithms side by side, with their measured error for that region</Td></tr>
          <tr><Td>See the fires themselves</Td><Td>Globe: every FIRMS pixel of a day with the satellites and their swaths, or any range in a country or a drawn area, with filters</Td></tr>
          <tr><Td>Look up detections</Td><Td>Search: FIRMS rows of an area and up to five days, as a table or CSV</Td></tr>
          <tr><Td>Ask in plain words</Td><Td>Assistant: answers from the data, opens views and drives the globe; also over MCP from Claude, ChatGPT or Cursor</Td></tr>
          <tr><Td>Add a new region</Td><Td>Regions: downloads 2001–today, tests the methods and calibrates it (<code>tools/harmonize.py</code>)</Td></tr>
        </tbody></Table>
      </Section>

      <Section id="faq" kicker={"Part 10 · More questions"} title={"Questions people usually ask"}>
        <Faq />
      </Section>

      <Section id="limits" kicker={"Part 11 · Limits"} title={"What this method cannot do"}>
        <ul className="fm-g-list">
          <li><b>Few-fire regions are noisy.</b> Lebanon (about 3 fire-days a month) misses by about 43% monthly; use seasonal or yearly totals there.</li>
          <li><b>It measures 13:30-equivalent activity.</b> Where people burn after the satellites pass (Punjab), total activity is undercounted.</li>
          <li><b>Four test regions only.</b> Boreal forests and other regimes were not tested.</li>
          <li><b>The newest months are provisional.</b> 2026 uses near-real-time data that may shift slightly when reprocessed.</li>
          <li><b>Aqua is a yardstick, not the truth.</b> No complete record of all fires exists.</li>
        </ul>
      </Section>

      <Section id="glossary" kicker={"Glossary and sources"} title={"Words used in this guide"}>
        <Glossary />
        <h3>Sources</h3>
        <ul className="fm-g-list">
          <li>NASA FIRMS. <a href="https://www.earthdata.nasa.gov/data/tools/firms" target="_blank" rel="noreferrer">Fire Information for Resource Management System</a></li>
          <li>Schroeder et al. (2014). The New VIIRS 375 m active fire detection data product. <i>Remote Sensing of Environment</i> 143. <a href="https://earthdata.nasa.gov/s3fs-public/imported/Schroeder_et_al_2014b_RSE.pdf" target="_blank" rel="noreferrer">PDF</a></li>
          <li>Vadrevu and Lasko (2018). Intercomparison of MODIS AQUA and VIIRS I-Band Fires. <i>Remote Sensing</i> 10(7). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6108185/" target="_blank" rel="noreferrer">Article</a></li>
          <li>Giglio et al. (2006). Global distribution and seasonality of active fires as observed with the Terra and Aqua MODIS sensors. <i>JGR</i>. <a href="https://dataserver-coids.inpe.br/queimadas/queimadas/Publicacoes-Impacto/material3os/2006_Giglio_etal_GlobalDistribuiton_JGR_DE3os.pdf" target="_blank" rel="noreferrer">PDF</a></li>
          <li>NASA Space Apps Challenge 2026. <a href="https://www.spaceappschallenge.org/2026/challenges/modis-and-viirs-hot-spots/?tab=details" target="_blank" rel="noreferrer">Harmonization of MODIS and VIIRS Hot Spots</a></li>
        </ul>
      </Section>
      </article>
    </>
  )
}
