/**
 * The guide's figures: SVG drawn from the study's real numbers (data.json), ported from the
 * standalone guide. Each `draw*` paints into a container and wires its own hover read-outs; the
 * page owns the state through kit controls. Colours are the guide's CSS variables, which
 * guide.css maps onto the kit tokens (`--lab-*`), so the figures follow the theme.
 */
import raw from './data.json'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const D: any = raw
export const REG = ['punjab', 'ssudan', 'portugal', 'bolivia'] as const
export const REGX = [...REG, 'algeria'] as const
export type Region = (typeof REGX)[number]
export const RN: Record<string, string> = { punjab: 'Punjab, India', ssudan: 'South Sudan', portugal: 'Portugal', bolivia: 'Bolivia', algeria: 'Algeria (north)' }
export const RC: Record<string, string> = { punjab: 'var(--viirs)', ssudan: 'var(--modis)', portugal: '#1baf7a', bolivia: '#9085e9', algeria: '#e2679b' }
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const fmt = (x: number | null | undefined, d = 0) =>
  x == null || !isFinite(x) ? '–' : Number(x).toLocaleString('en-US', { maximumFractionDigits: d, minimumFractionDigits: d })
const niceMax = (v: number) => {
  const p = Math.pow(10, Math.floor(Math.log10(Math.max(v, 1e-9))))
  for (const k of [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]) if (k * p >= v) return k * p
  return 10 * p
}
const path = (vs: number[], X: (i: number) => number, Y: (v: number) => number) => vs.map((x, i) => `${i ? 'L' : 'M'}${X(i).toFixed(1)},${Y(x).toFixed(1)}`).join('')

// ---------- hover read-outs ----------
function tip(box: HTMLElement) {
  let t = box.querySelector<HTMLDivElement>('.fm-g-tip')
  if (!t) {
    t = document.createElement('div')
    t.className = 'fm-g-tip'
    t.hidden = true
    box.appendChild(t)
  }
  return t
}
function showTip(box: HTMLElement, ev: PointerEvent, html: string) {
  const t = tip(box)
  t.innerHTML = html
  t.hidden = false
  const r = box.getBoundingClientRect()
  let x = ev.clientX - r.left + 14
  if (x + 220 > r.width) x = ev.clientX - r.left - 230
  t.style.left = `${Math.max(0, x)}px`
  t.style.top = `${ev.clientY - r.top + 14}px`
}
function hideTip(box: HTMLElement) {
  const t = box.querySelector<HTMLDivElement>('.fm-g-tip')
  if (t) t.hidden = true
}
type M = { l: number; r: number; t: number; b: number }
function lineCrosshair(box: HTMLElement, W: number, m: M, n: number, X: (i: number) => number, html: (i: number) => string) {
  const hit = box.querySelector('.hit')
  const ln = box.querySelector('.xh')
  if (!hit || !ln) return
  hit.addEventListener('pointermove', (e) => {
    const ev = e as PointerEvent
    const r = box.querySelector('svg')!.getBoundingClientRect()
    const i = Math.max(0, Math.min(n - 1, Math.round((((ev.clientX - r.left) * W) / r.width - m.l) / (W - m.l - m.r) * (n - 1))))
    ln.setAttribute('x1', String(X(i)))
    ln.setAttribute('x2', String(X(i)))
    ln.setAttribute('visibility', 'visible')
    showTip(box, ev, html(i))
  })
  hit.addEventListener('pointerleave', () => {
    hideTip(box)
    ln.setAttribute('visibility', 'hidden')
  })
}
const crosshair = (m: M, W: number, H: number) =>
  `<line class="xh" y1="${m.t}" y2="${H - m.b}" stroke="var(--ink2)" visibility="hidden"/><rect class="hit" x="${m.l}" y="${m.t}" width="${W - m.l - m.r}" height="${H - m.t - m.b}" fill="transparent"/>`
const gridY = (m: M, W: number, Y: (v: number) => number, mx: number) => {
  let s = ''
  for (let i = 0; i <= 4; i++) {
    const v = (mx * i) / 4
    s += `<line x1="${m.l}" x2="${W - m.r}" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--grid)"/><text x="${m.l - 6}" y="${Y(v) + 4}" text-anchor="end" font-size="11" fill="var(--muted)">${fmt(v)}</text>`
  }
  return s
}

// ---------- Part 1: the fake 2012 jump ----------
export function drawJump(box: HTMLElement, region: Region): string {
  const S = D.regions[region].series
  const yrs: number[] = []
  for (let y = 2001; y <= 2026; y++) yrs.push(y)
  const ann = (a: number[]) => yrs.map((y) => {
    let s = 0
    for (let c = 0; c < 12; c++) s += a[(y - 2001) * 12 + c] || 0
    return s
  })
  const nv = ann(S.naive), hv = ann(S.ensemble_adaptive), W = 760, H = 280, m = { l: 60, r: 70, t: 14, b: 28 }
  const mx = niceMax(Math.max(...nv, ...hv) * 1.05)
  const X = (i: number) => m.l + (i / (yrs.length - 1)) * (W - m.l - m.r), Y = (v: number) => H - m.b - (v / mx) * (H - m.t - m.b)
  const avg = (a: number[], i: number, j: number) => a.slice(i, j).reduce((x, y) => x + y, 0) / (j - i)
  let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Annual fire-days, direct join versus harmonized">${gridY(m, W, Y, mx)}`
  yrs.forEach((y, i) => {
    if ((y % 4 === 1 && y < 2024) || y === 2026) s += `<text x="${X(i)}" y="${H - 8}" text-anchor="middle" font-size="11" fill="var(--muted)">${y}</text>`
  })
  s += `<line x1="${X(11)}" x2="${X(11)}" y1="${m.t}" y2="${H - m.b}" stroke="var(--ink2)" stroke-dasharray="4 4"/><text x="${X(11) + 5}" y="${m.t + 12}" font-size="11.5" fill="var(--ink2)">VIIRS starts</text>`
  ;([[nv, 'var(--modis)', 'Joined directly'], [hv, 'var(--accent)', 'Harmonized']] as const).forEach(([v, c, n]) => {
    s += `<path d="${path(v, X, Y)}" fill="none" stroke="${c}" stroke-width="2.4"/><text x="${X(yrs.length - 1) + 6}" y="${Y(v[v.length - 1]) + 4}" font-size="12" font-weight="600" fill="${c}">${n}</text>`
  })
  box.innerHTML = s + crosshair(m, W, H) + '</svg>'
  lineCrosshair(box, W, m, yrs.length, X, (i) => `<b>${yrs[i]}${yrs[i] === 2026 ? ' (to Oct)' : ''}</b><br><span style="color:var(--modis)">Joined directly:</span> <b>${fmt(nv[i])}</b><br><span style="color:var(--accent)">Harmonized:</span> <b>${fmt(hv[i])}</b>`)
  return `Joined directly, the count jumps ×${fmt(avg(nv, 11, 17) / avg(nv, 5, 11), 1)} at 2012; harmonized, ×${fmt(avg(hv, 11, 17) / avg(hv, 5, 11), 1)}`
}

// ---------- Part 2: nine squares, one fire ----------
export function drawSquares(box: HTMLElement) {
  const W = 760, H = 250, k = 64, ox = 40, oy = 22
  let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Nine 2 km squares with one fire">`
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) {
      const n = j * 3 + i + 1
      s += `<rect x="${ox + i * k}" y="${oy + j * k}" width="${k}" height="${k}" fill="${n === 5 ? 'var(--accent-soft)' : 'none'}" stroke="var(--rule)" stroke-width="1.5"/><text x="${ox + i * k + 6}" y="${oy + j * k + 15}" font-size="11" fill="var(--muted)">${n}</text>`
    }
  s += `<circle cx="${ox + 1.62 * k}" cy="${oy + 1.5 * k}" r="18" fill="var(--fire)" fill-opacity=".85"/>`
  ;[[1.25, 1.2], [1.55, 1.35], [1.3, 1.55], [1.62, 1.62], [1.45, 1.45], [1.75, 1.3], [1.4, 1.75], [2.05, 1.5]].forEach(([x, y]) => {
    s += `<rect x="${ox + x * k - 6}" y="${oy + y * k - 6}" width="12" height="12" fill="var(--viirs)" fill-opacity=".25" stroke="var(--viirs)" stroke-dasharray="2 2"/>`
  })
  s += `<rect x="${ox + 1.6 * k - 30}" y="${oy + 1.5 * k - 28}" width="58" height="52" fill="none" stroke="var(--modis)" stroke-width="2"/><text x="${ox}" y="${oy + 3 * k + 18}" font-size="11.5" fill="var(--muted)">2 km</text>`
  const tx = 300
  ;[
    ['Rows (FIRMS)', 'MODIS 2 · VIIRS 16', 'VIIRS looks 8× bigger', 'var(--bad)'],
    ['Fire-days', 'MODIS 1 · VIIRS 2', 'Same fire, one extra edge square', 'var(--good)'],
  ].forEach(([h, v, n, c], i) => {
    const y = 40 + i * 92
    s += `<text x="${tx}" y="${y}" font-size="13" fill="var(--muted)">${h}</text><text x="${tx}" y="${y + 30}" font-size="24" font-weight="600" fill="var(--ink)">${v}</text><text x="${tx}" y="${y + 52}" font-size="13" fill="${c}">${n}</text>`
  })
  box.innerHTML = s + '</svg>'
}

// ---------- Part 2: one fire, five satellites ----------
export function rng(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
export type Pass = { name: string; fam: 'M' | 'V'; h: number; p: number; det: boolean; px: [number, number, number, number][] }
export type OneFire = { A: number; r: number; passes: Pass[] }
export const fireArea = (size: number) => Math.pow(10, -2 + 3.3 * (size / 100))
export function buildFire(size: number): OneFire {
  const A = fireArea(size), r = Math.sqrt(A / Math.PI), F = 25 * Math.pow(A, 0.85), R = rng(11)
  const sats: [string, 'M' | 'V', number][] = [['Terra', 'M', 10.5], ['S-NPP', 'V', 13.3], ['NOAA-20', 'V', 13.8], ['NOAA-21', 'V', 12.9], ['Aqua', 'M', 15.25]]
  const diur = (h: number) => 0.12 + 0.88 * Math.exp(-((h - 14.5) ** 2) / (2 * 2.6 * 2.6))
  const passes = sats.map(([name, fam, h]) => {
    const u = R(), w = fam === 'M' ? 1 + 2.2 * u * u : 0.375 * (1 + 0.5 * u * u), hh = fam === 'M' ? 1 + 0.6 * u * u : 0.375 * (1 + 0.3 * u * u)
    const ox = R() * w, oy = R() * hh, p = 1 / (1 + Math.exp(-(Math.log(F * diur(h)) - Math.log(6 * w * hh)) / 0.45)), det = R() < p * 0.92
    const px: [number, number, number, number][] = []
    if (det) {
      const i0 = Math.floor((3 - ox) / w), j0 = Math.floor((3 - oy) / hh), span = Math.ceil(r / Math.min(w, hh)) + 1
      for (let i = i0 - span; i <= i0 + span; i++)
        for (let j = j0 - span; j <= j0 + span; j++) {
          const x0 = ox + i * w, y0 = oy + j * hh, nx = Math.max(x0, Math.min(3, x0 + w)), ny = Math.max(y0, Math.min(3, y0 + hh))
          if ((i === i0 && j === j0) || Math.hypot(nx - 3, ny - 3) < r * 0.9) px.push([x0, y0, w, hh])
        }
    }
    return { name, fam, h, p, det, px }
  })
  return { A, r, passes }
}
export function drawFire(box: HTMLElement, fire: OneFire, upto: number) {
  const W = 480, k = W / 6, X = (x: number) => x * k
  let s = `<svg viewBox="0 0 ${W} ${W}" role="img" aria-label="Pixel footprints over one fire"><rect width="${W}" height="${W}" fill="var(--paper)" stroke="var(--rule)"/>`
  for (let g = 1; g < 6; g++) s += `<line x1="${X(g)}" x2="${X(g)}" y1="0" y2="${W}" stroke="var(--grid)"/><line x1="0" x2="${W}" y1="${X(g)}" y2="${X(g)}" stroke="var(--grid)"/>`
  s += `<rect x="${X(2)}" y="${X(2)}" width="${2 * k}" height="${2 * k}" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="6 4"/><text x="${X(2) + 6}" y="${X(2) + 16}" font-size="12" fill="var(--accent)">2 km fire-day square</text>`
  fire.passes.slice(0, upto).forEach((p, idx) => {
    const c = p.fam === 'M' ? 'var(--modis)' : 'var(--viirs)', last = idx === upto - 1
    p.px.forEach(([x, y, w, h]) => {
      s += `<rect x="${X(x)}" y="${X(y)}" width="${w * k}" height="${h * k}" fill="${c}" fill-opacity="${p.fam === 'V' ? 0.15 : 0.07}" stroke="${c}" stroke-width="${last ? 2 : 1.1}" ${p.fam === 'V' ? 'stroke-dasharray="3 2"' : ''}/>`
    })
  })
  s += `<circle cx="${X(3)}" cy="${X(3)}" r="${Math.max(3, fire.r * k)}" fill="var(--fire)" fill-opacity=".85"/><line x1="10" x2="${10 + k}" y1="${W - 12}" y2="${W - 12}" stroke="var(--ink)" stroke-width="2"/><text x="10" y="${W - 18}" font-size="11" fill="var(--ink2)">1 km</text>`
  box.innerHTML = s + '</svg>'
}
export function fireCounts(fire: OneFire, upto: number) {
  const sh = fire.passes.slice(0, upto)
  return {
    modisRows: sh.filter((p) => p.fam === 'M').reduce((a, p) => a + p.px.length, 0),
    viirsRows: sh.filter((p) => p.fam === 'V').reduce((a, p) => a + p.px.length, 0),
    modisDays: sh.some((p) => p.fam === 'M' && p.det) ? 1 : 0,
    viirsDays: sh.some((p) => p.fam === 'V' && p.det) ? 1 : 0,
    log: sh.map((p) => `${String(Math.floor(p.h)).padStart(2, '0')}:${String(Math.round((p.h % 1) * 60)).padStart(2, '0')} ${p.name}: ${p.det ? `${p.px.length} row${p.px.length > 1 ? 's' : ''}` : 'missed it'}`),
  }
}

// ---------- Part 3: FRP curves ----------
export function drawFrp(box: HTMLElement, on: Set<string>) {
  const W = 760, H = 310, m = { l: 54, r: 16, t: 16, b: 46 }, bins: number[] = D.frp.punjab.bins_log10
  let lo = 99, hi = 0
  REGX.forEach((r) => D.frp[r].n.forEach((n: number, b: number) => {
    if (n >= 30) {
      lo = Math.min(lo, b)
      hi = Math.max(hi, b)
    }
  }))
  const X = (b: number) => m.l + ((b - lo) / (hi - lo)) * (W - m.l - m.r), Y = (v: number) => H - m.b - v * (H - m.t - m.b)
  let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Chance Aqua sees a square by fire strength">`
  for (let i = 0; i <= 4; i++) {
    const v = i / 4
    s += `<line x1="${m.l}" x2="${W - m.r}" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--grid)"/><text x="${m.l - 8}" y="${Y(v) + 4}" text-anchor="end" font-size="11.5" fill="var(--muted)">${v * 100}%</text>`
  }
  for (let b = lo; b <= hi; b++)
    if (Math.abs(bins[b] - Math.round(bins[b])) < 1e-6) s += `<text x="${X(b)}" y="${H - 26}" text-anchor="middle" font-size="11.5" fill="var(--muted)">${fmt(Math.pow(10, bins[b]), bins[b] < 0 ? 1 : 0)} MW</text>`
  s += `<text x="${(m.l + W - m.r) / 2}" y="${H - 6}" text-anchor="middle" font-size="12" fill="var(--ink2)">fire strength measured by VIIRS (FRP, log scale)</text>`
  const shown = REGX.filter((r) => on.has(r))
  shown.forEach((r) => {
    const C = D.frp[r]
    let d = ''
    for (let b = lo; b <= hi; b++) {
      if (C.n[b] < 30) continue
      d += `${d ? 'L' : 'M'}${X(b).toFixed(1)},${Y(C.iso[b]).toFixed(1)}`
    }
    s += `<path d="${d}" fill="none" stroke="${RC[r]}" stroke-width="2.4"/>`
    for (let b = lo; b <= hi; b++) if (C.raw[b] != null) s += `<circle cx="${X(b)}" cy="${Y(Math.min(1, C.raw[b]))}" r="3" fill="${RC[r]}" fill-opacity=".5"/>`
  })
  box.innerHTML = s + crosshair(m, W, H) + '</svg>'
  lineCrosshair(box, W, m, hi - lo + 1, (i) => X(lo + i), (i) => {
    const b = lo + i
    return `<b>FRP ≈ ${fmt(Math.pow(10, bins[b] + 0.125), 1)} MW</b><br>` + shown.map((r) => `<span style="color:${RC[r]}">●</span> ${RN[r]}: <b>${D.frp[r].n[b] >= 30 ? fmt(D.frp[r].iso[b] * 100) + '%' : '–'}</b>`).join('<br>')
  })
}

// ---------- Part 4: test designs ----------
export function drawTests(box: HTMLElement, mode: 'loyo' | 'fw', round: number) {
  const W = 760, H = 150, x0 = 30, cw = (W - 60) / 10, hold = 2012 + (round % 10)
  let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Test design">`
  for (let i = 0; i < 10; i++) {
    const y = 2012 + i, test = mode === 'loyo' ? y === hold : y >= 2018, x = x0 + i * cw
    s += `<rect x="${x + 3}" y="36" width="${cw - 6}" height="54" rx="6" fill="${test ? 'var(--accent)' : 'var(--grey)'}" fill-opacity="${test ? 1 : 0.55}"/><text x="${x + cw / 2}" y="60" text-anchor="middle" font-size="12" font-weight="600" fill="${test ? 'var(--on-accent)' : 'var(--ink)'}">${test ? 'hidden' : 'learn'}</text><text x="${x + cw / 2}" y="78" text-anchor="middle" font-size="11" fill="${test ? 'var(--on-accent)' : 'var(--ink2)'}">${test ? 'predict' : 'from'}</text><text x="${x + cw / 2}" y="110" text-anchor="middle" font-size="12" fill="var(--ink2)">${y}</text>`
  }
  s += `<text x="${x0}" y="22" font-size="13" fill="var(--ink2)">${mode === 'loyo' ? `Round ${(round % 10) + 1} of 10: learn from 9 years, predict ${hold} without ever seeing it` : 'Learn from 2012–2017 only, then predict 2018–2021'}</text>`
  s += `<text x="${x0}" y="138" font-size="12" fill="var(--muted)">2012–2021: Aqua and VIIRS both flying, Aqua still at 13:30</text>`
  box.innerHTML = s + '</svg>'
}

// ---------- Part 5: two identical cameras ----------
function binom(n: number, p: number, R: () => number) {
  if (n < 60) {
    let k = 0
    for (let i = 0; i < n; i++) if (R() < p) k++
    return k
  }
  const z = Math.sqrt(-2 * Math.log(R() || 1e-9)) * Math.cos(2 * Math.PI * R())
  return Math.max(0, Math.round(n * p + z * Math.sqrt(n * p * (1 - p))))
}
export const camN = (v: number) => Math.round(Math.pow(10, 1 + 3 * (v / 100)))
export function drawCameras(box: HTMLElement, N: number, p: number, shared: boolean, seed: number) {
  const R = rng(seed), F = Math.round(N / p), months: { A: number; B: number; miss: number }[] = []
  for (let k = 0; k < 36; k++) {
    const jit = () => Math.min(0.98, Math.max(0.02, p * (1 + 0.22 * (R() * 2 - 1))))
    const fA = shared ? jit() : p, fB = shared ? jit() : p
    const A = binom(F, fA, R), B = binom(F, fB, R)
    months.push({ A, B, miss: ((A - B) / Math.max(1, B)) * 100 })
  }
  const sim = (months.reduce((a, x) => a + Math.abs(x.A - x.B), 0) / months.reduce((a, x) => a + x.B, 0)) * 100
  const form = 0.798 * Math.sqrt((2 * (1 - p)) / N) * 100
  const W = 480, H = 260, m = { l: 40, r: 10, t: 14, b: 26 }, mx = Math.max(10, ...months.map((x) => Math.abs(x.miss))) * 1.1, bw = (W - m.l - m.r) / 36
  const Y = (v: number) => m.t + (H - m.t - m.b) / 2 - ((v / mx) * (H - m.t - m.b)) / 2
  let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Monthly miss between two identical cameras">`
  ;[-1, -0.5, 0, 0.5, 1].forEach((f) => {
    const v = f * Math.round(mx * 0.9)
    s += `<line x1="${m.l}" x2="${W - m.r}" y1="${Y(v)}" y2="${Y(v)}" stroke="${f === 0 ? 'var(--ink2)' : 'var(--grid)'}"/><text x="${m.l - 4}" y="${Y(v) + 4}" text-anchor="end" font-size="10.5" fill="var(--muted)">${v > 0 ? '+' : ''}${fmt(v)}%</text>`
  })
  months.forEach((x, i) => {
    s += `<rect x="${m.l + i * bw + 1}" y="${Math.min(Y(x.miss), Y(0))}" width="${bw - 2}" height="${Math.abs(Y(x.miss) - Y(0))}" rx="1.5" fill="var(--accent)" fill-opacity=".8"><title>Month ${i + 1}: camera A ${fmt(x.A)}, camera B ${fmt(x.B)}, miss ${x.miss > 0 ? '+' : ''}${fmt(x.miss, 1)}%</title></rect>`
  })
  s += `<text x="${m.l}" y="${H - 6}" font-size="11" fill="var(--muted)">36 simulated months →</text>`
  box.innerHTML = s + '</svg>'
  return { sim, form }
}

// ---------- Part 6: the benchmark ----------
const KEY: [string, string][] = [
  ['raw_switch', 'Joined directly (rows)'], ['ratio', 'One fixed multiplier'], ['energy', 'Fire energy instead of count'], ['frp', 'Fire-strength curve'],
  ['ratio_month', 'Multiplier per month'], ['ens_cloud', 'Ours + cloud correction'], ['ensemble', 'Our method, equal-weight years'], ['ml_blend', 'Ours + machine learning'],
  ['adaptive', 'Our method (adaptive)'], ['ml_full', 'Ours + ML + orbit geometry'],
]
export function drawBench(box: HTMLElement, mode: 'l' | 'f'): string {
  type Row = { k: string; n: string; off?: boolean; v?: Record<string, number>; avg?: number }
  const rows = KEY.map(([k, n]): Row | null => {
    if (k === 'raw_switch') return { k, n, off: true }
    const r = D.bench.find((x: { k: string }) => x.k === k), v = r && r[mode]
    return v ? { k, n, v, avg: REG.reduce((a, g) => a + v[g], 0) / 4 } : null
  }).filter((r): r is Row => r != null)
  const best = mode === 'f' ? 'adaptive' : 'ensemble'
  const W = 760, lw = 240, x1 = 680, mx = 40, rh = 28, y0 = 30, H = y0 + rows.length * rh + 26, X = (v: number) => lw + (Math.min(v, mx) / mx) * (x1 - lw)
  let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Method comparison">`
  ;[0, 10, 20, 30, 40].forEach((t) => {
    s += `<line x1="${X(t)}" x2="${X(t)}" y1="${y0 - 14}" y2="${H - 22}" stroke="var(--grid)"/><text x="${X(t)}" y="${H - 6}" text-anchor="middle" font-size="11" fill="var(--muted)">${t}%</text>`
  })
  s += `<line x1="${X(7)}" x2="${X(7)}" y1="${y0 - 18}" y2="${H - 22}" stroke="var(--ink2)" stroke-dasharray="4 4"/><text x="${X(7) + 4}" y="${y0 - 20}" font-size="11.5" fill="var(--ink2)">7% floor</text>`
  rows.forEach((r, i) => {
    const y = y0 + i * rh, hl = r.k === best
    s += `<g class="bm" data-i="${i}"><rect x="0" y="${y - rh / 2}" width="${W}" height="${rh}" fill="transparent"/><text x="${lw - 10}" y="${y + 4}" text-anchor="end" font-size="13" font-weight="${hl ? 600 : 400}" fill="${hl ? 'var(--ink)' : 'var(--ink2)'}">${r.n}</text>`
    if (r.off) s += `<rect x="${lw}" y="${y - 6}" width="${x1 - lw}" height="12" rx="3" fill="var(--bad)" fill-opacity=".35"/><text x="${x1 + 8}" y="${y + 4}" font-size="12" fill="var(--bad)">163–355% →</text></g>`
    else {
      s += `<rect x="${lw}" y="${y - 6}" width="${X(r.avg!) - lw}" height="12" rx="3" fill="${hl ? 'var(--accent)' : 'var(--grey)'}"/>`
      REG.forEach((g) => (s += `<circle cx="${X(r.v![g])}" cy="${y}" r="3.4" fill="var(--ink2)" fill-opacity=".7"/>`))
      s += `<text x="${Math.max(X(r.avg!), ...REG.map((g) => X(r.v![g]))) + 8}" y="${y + 4}" font-size="12.5" font-weight="${hl ? 600 : 400}" fill="var(--ink)">${fmt(r.avg!, 1)}%</text></g>`
    }
  })
  box.innerHTML = s + '</svg>'
  box.querySelectorAll<SVGGElement>('.bm').forEach((g) => {
    g.addEventListener('pointermove', (e) => {
      const r = rows[Number(g.dataset.i)]
      showTip(box, e as PointerEvent, r.off ? `<b>${r.n}</b><br>163–355% monthly error` : `<b>${r.n}</b><br>` + REG.map((x) => `${RN[x]}: <b>${fmt(r.v![x], 1)}%</b>`).join('<br>'))
    })
    g.addEventListener('pointerleave', () => hideTip(box))
  })
  return mode === 'f' ? 'Our adaptive method misses by 10% a month, about half of a fixed multiplier' : 'Modelling the season halves the error; extra complexity adds little'
}

// ---------- Part 6: hidden months ----------
export function drawHeldOut(box: HTMLElement, region: Region): string {
  const R = D.regions[region], a: number[] = R.loyo_aqua, e: number[] = R.loyo_est, n = a.length, W = 760, H = 270, m = { l: 56, r: 12, t: 14, b: 28 }, mx = niceMax(Math.max(...a, ...e) * 1.05)
  const X = (i: number) => m.l + (i / (n - 1)) * (W - m.l - m.r), Y = (v: number) => H - m.b - (v / mx) * (H - m.t - m.b)
  let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Hidden months, Aqua versus estimate">${gridY(m, W, Y, mx)}`
  for (let y = 0; y < 10; y++) s += `<text x="${X(y * 12)}" y="${H - 8}" font-size="11" fill="var(--muted)">${2012 + y}</text>`
  s += `<path d="${path(a, X, Y)}" fill="none" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="5 3"/><path d="${path(e, X, Y)}" fill="none" stroke="var(--accent)" stroke-width="2"/>`
  box.innerHTML = s + crosshair(m, W, H) + '</svg>'
  lineCrosshair(box, W, m, n, X, (i) => `<b>${MON[i % 12]} ${2012 + Math.floor(i / 12)}</b><br>Aqua: <b>${fmt(a[i])}</b><br>Estimate: <b>${fmt(e[i])}</b>`)
  return `average monthly miss ${fmt((a.reduce((s2, v, i) => s2 + Math.abs(e[i] - v), 0) / a.reduce((s2, v) => s2 + v, 0)) * 100, 1)}%`
}

// ---------- Part 7: orbit drift ----------
export function drawDrift(box: HTMLElement) {
  const W = 760, H = 300, m = { l: 56, r: 120, t: 14, b: 30 }, X = (y: number) => m.l + ((y - 2001) / 25) * (W - m.l - m.r), Y = (h: number) => H - m.b - ((h - 8.5) / 7.5) * (H - m.t - m.b)
  const hm = (h: number) => `${Math.floor(h)}:${String(Math.round((h % 1) * 60)).padStart(2, '0')}`
  let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Local pass time by year">`
  for (let h = 9; h <= 16; h++) s += `<line x1="${m.l}" x2="${W - m.r}" y1="${Y(h)}" y2="${Y(h)}" stroke="var(--grid)"/><text x="${m.l - 8}" y="${Y(h) + 4}" text-anchor="end" font-size="11" fill="var(--muted)">${h}:00</text>`
  ;[2002, 2006, 2010, 2014, 2018, 2022, 2026].forEach((y) => (s += `<text x="${X(y)}" y="${H - 8}" text-anchor="middle" font-size="11" fill="var(--muted)">${y}</text>`))
  s += `<line x1="${X(2022)}" x2="${X(2022)}" y1="${m.t}" y2="${H - m.b}" stroke="var(--ink2)" stroke-dasharray="4 4"/><text x="${X(2022) - 6}" y="${m.t + 12}" text-anchor="end" font-size="11.5" fill="var(--ink2)">drift begins</text>`
  ;([['A', 'Aqua (MODIS)', 'var(--modis)', 2.6], ['T', 'Terra (MODIS)', 'var(--grey)', 1.8], ['S', 'VIIRS', 'var(--viirs)', 2]] as const).forEach(([k, n, c, w]) => {
    const pts: [number, number][] = D.over[k]
    s += `<path d="${pts.map((p, i) => `${i ? 'L' : 'M'}${X(p[0]).toFixed(1)},${Y(p[1]).toFixed(1)}`).join('')}" fill="none" stroke="${c}" stroke-width="${w}"/>`
    const l = pts[pts.length - 1]
    s += `<circle cx="${X(l[0])}" cy="${Y(l[1])}" r="3.5" fill="${c}"/><text x="${X(l[0]) + 8}" y="${Y(l[1]) + (k === 'S' ? 14 : 4)}" font-size="12" font-weight="${k === 'A' ? 600 : 400}" fill="var(--ink)">${n} ${hm(l[1])}</text>`
  })
  box.innerHTML = s + '</svg>'
}

// ---------- Part 7: the daily cycle ----------
export function drawDiurnal(box: HTMLElement, region: 'bolivia' | 'portugal', t: number): string {
  const dv: number[] = D.diurnal[region], W = 760, H = 260, m = { l: 50, r: 14, t: 26, b: 30 }, mx = niceMax(Math.max(...dv) * 1.1)
  const X = (h: number) => m.l + (h / 24) * (W - m.l - m.r), Y = (v: number) => H - m.b - (v / mx) * (H - m.t - m.b), bw = (W - m.l - m.r) / 48
  const at = (h: number) => {
    const b = Math.floor(h * 2) % 48
    return (dv[(b + 47) % 48] + 2 * dv[b] + dv[(b + 1) % 48]) / 4
  }
  let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Fire activity through the day">`
  for (let h = 0; h <= 24; h += 3) s += `<text x="${X(h)}" y="${H - 8}" text-anchor="middle" font-size="11" fill="var(--muted)">${String(h).padStart(2, '0')}:00</text>`
  dv.forEach((v, b) => (s += `<rect x="${X(b / 2) + 1}" y="${Y(v)}" width="${Math.max(1, bw - 2)}" height="${H - m.b - Y(v)}" rx="2" fill="var(--grey)"/>`))
  s += `<line x1="${X(13.5)}" x2="${X(13.5)}" y1="${m.t - 10}" y2="${H - m.b}" stroke="var(--ink2)" stroke-dasharray="3 3"/><text x="${X(13.5) - 4}" y="${m.t - 12}" text-anchor="end" font-size="11" fill="var(--ink2)">VIIRS 13:30</text>`
  s += `<line x1="${X(t)}" x2="${X(t)}" y1="${m.t - 10}" y2="${H - m.b}" stroke="var(--accent)" stroke-width="2.5"/><circle cx="${X(t)}" cy="${Y(at(t))}" r="5" fill="var(--accent)"/><text x="${X(t) + 6}" y="${m.t - 12}" font-size="11.5" font-weight="600" fill="var(--accent)">your pass</text>`
  box.innerHTML = s + '</svg>'
  return `${String(Math.floor(t)).padStart(2, '0')}:${String(Math.round((t % 1) * 60)).padStart(2, '0')} sees ${fmt((at(t) / at(13.5)) * 100)}% of what 13:30 sees`
}

// ---------- Part 8: the calendar ----------
const CIV = ['#00204c', '#213d6b', '#555b6c', '#7b7a77', '#a59c74', '#d3c164', '#ffe945']
const h2r = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16))
const mix = (a: string, b: string, t: number) => {
  const A = h2r(a), B = h2r(b)
  return `rgb(${A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(',')})`
}
const ramp = (t: number) => {
  t = Math.max(0, Math.min(1, t)) * (CIV.length - 1)
  const i = Math.min(CIV.length - 2, Math.floor(t))
  return mix(CIV[i], CIV[i + 1], t - i)
}
const isDark = () => document.documentElement.getAttribute('data-lab-theme') === 'dark'
const divColor = (v: number) => {
  const t = Math.min(1, Math.abs(v) / 2), mid = isDark() ? '#30363d' : '#e9ecef'
  return v >= 0 ? mix(mid, '#c4312f', t) : mix(mid, '#1c5cab', t)
}
export type Series = 'ensemble_adaptive' | 'naive' | 'aqua_only'
export function drawCalendar(box: HTMLElement, legend: HTMLElement, region: Region, ser: Series, mode: 'v' | 'a'): string {
  const R = D.regions[region], arr: number[] = R.series[ser], NM = arr.length, med: number[] = []
  for (let c = 0; c < 12; c++) {
    const xs: number[] = []
    for (let y = 2003; y <= 2022; y++) xs.push(arr[(y - 2001) * 12 + c])
    xs.sort((a, b) => a - b)
    med.push((xs[9] + xs[10]) / 2)
  }
  const mx = Math.max(...arr), W = 760, lw = 66, top = 22, ch = 15, cw = (W - lw - 8) / 12, H = top + 26 * (ch + 2) + 6
  let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Monthly fire calendar">`
  MON.forEach((mn, i) => (s += `<text x="${lw + i * cw + cw / 2}" y="14" text-anchor="middle" font-size="11" fill="var(--muted)">${mn}</text>`))
  for (let y = 0; y < 26; y++) {
    const yy = top + y * (ch + 2), yr = 2001 + y, src = ser === 'naive' ? (yr < 2012 ? 'M' : 'V') : ser === 'aqua_only' ? 'A' : yr === 2002 ? 'T/A' : R.src[y * 12]
    s += `<text x="2" y="${yy + ch - 3}" font-size="11" fill="var(--muted)">${yr}</text><text x="${lw - 6}" y="${yy + ch - 3}" text-anchor="end" font-size="11" font-weight="600" fill="var(--ink2)">${src}</text>`
    for (let c = 0; c < 12; c++) {
      const k = y * 12 + c, x = lw + c * cw
      if (k >= NM) {
        s += `<rect x="${x + 1}" y="${yy}" width="${cw - 2}" height="${ch}" rx="2" fill="none" stroke="var(--rule)" stroke-dasharray="2 2"/>`
        continue
      }
      const v = arr[k], fill = mode === 'v' ? ramp(Math.sqrt(v / mx)) : divColor(Math.max(-2, Math.min(2, Math.log2((v + 1) / (med[c] + 1)))))
      s += `<rect class="cc" data-m="${k}" x="${x + 1}" y="${yy}" width="${cw - 2}" height="${ch}" rx="2" fill="${fill}"/>`
    }
  }
  box.innerHTML = s + '</svg>'
  box.querySelectorAll<SVGRectElement>('.cc').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const k = Number(el.dataset.m), v = arr[k], b = med[k % 12]
      showTip(box, e as PointerEvent, `<b>${MON[k % 12]} ${2001 + Math.floor(k / 12)}</b><br>Fire-days: <b>${fmt(v)}</b><br>Usual ${MON[k % 12]}: ${fmt(b)}<br>${b > 0 ? `<b>${v >= b ? '+' : ''}${fmt((v / b - 1) * 100)}%</b> vs usual` : ''}`)
    })
    el.addEventListener('pointerleave', () => hideTip(box))
  })
  legend.innerHTML =
    mode === 'v'
      ? `<div class="fm-g-ramp" style="background:linear-gradient(90deg,${CIV.join(',')})"></div><div class="fm-g-ramp-labels"><span>0</span><span>${fmt(mx)} fire-days</span></div>`
      : `<div class="fm-g-ramp" style="background:linear-gradient(90deg,${[-2, -1, 0, 1, 2].map(divColor).join(',')})"></div><div class="fm-g-ramp-labels"><span>¼ of usual</span><span>usual</span><span>4× usual</span></div>`
  return { ensemble_adaptive: 'Harmonized fire-days per month', naive: 'Joined directly: the false jump at 2012', aqua_only: 'Aqua alone: fine until its orbit drifts' }[ser]
}
