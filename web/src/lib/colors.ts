/**
 * Colour with a job (DESIGN 6, dataviz method): sequential ramps for counts (cividis is safe for
 * colour-vision deficiency), a blue–grey–red diverging ramp for anomalies (grey = normal), and a
 * fixed categorical slot per algorithm so a series keeps its colour whatever else is shown.
 * Categorical slots are CSS variables (`--firms-series-N`, light/dark in charts.css).
 */
export type ColorMap = 'cividis' | 'inferno' | 'blues'

export const CMAPS: Record<ColorMap, string[]> = {
  cividis: ['#00204c', '#213d6b', '#555b6c', '#7b7a77', '#a59c74', '#d3c164', '#ffe945'],
  inferno: ['#000004', '#320a5e', '#781c6d', '#bc3754', '#ed6925', '#fbb61a', '#fcffa4'],
  blues: ['#101c2c', '#123a63', '#1c5cab', '#3987e5', '#86b6ef', '#cde2fb'],
}

const hex = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16))
function mix(a: string, b: string, t: number): string {
  const A = hex(a)
  const B = hex(b)
  return `rgb(${A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(',')})`
}

/** `t` in 0…1 along a ramp. */
export function ramp(stops: string[], t: number): string {
  const x = Math.max(0, Math.min(1, t)) * (stops.length - 1)
  const i = Math.min(stops.length - 2, Math.floor(x))
  return mix(stops[i], stops[i + 1], x - i)
}

const DIV_MID = '#8a8a86'
const DIV_LOW = '#2a78d6'
const DIV_HIGH = '#d6403f'

/** log2(value / baseline), clamped to ±2 (÷4 … ×4): blue below normal, grey normal, red above. */
export function diverging(log2ratio: number): string {
  const t = Math.min(1, Math.abs(log2ratio) / 2)
  return log2ratio >= 0 ? mix(DIV_MID, DIV_HIGH, t) : mix(DIV_MID, DIV_LOW, t)
}

export const DIVERGING_STOPS = [-2, -1, 0, 1, 2].map(diverging)

/** Fixed categorical slot per algorithm; the Aqua reference is ink, dashed. */
export const ALG_SLOT: Record<string, number> = {
  ensemble_adaptive: 1,
  ensemble_geom_adaptive: 3,
  ensemble: 7,
  frp_season_adaptive: 5,
  ratio_month_adaptive: 4,
  ratio: 8,
  naive: 2,
  raw_rows: 6,
}

export function algColor(key: string): string {
  const slot = ALG_SLOT[key]
  return slot ? `var(--firms-series-${slot})` : 'var(--lab-ink)'
}

/** Globe colours by instrument system (MODIS, VIIRS, Landsat, geostationary). */
export const SYSTEM_COLORS = ['#e8a33d', '#4fb3d9', '#8fd16a', '#b58cf0']
