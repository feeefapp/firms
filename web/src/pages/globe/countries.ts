/**
 * Countries for the globe's area filter: Natural Earth 1:50m shapes (world-atlas), names in the
 * app language (i18n-iso-countries), and a point-in-polygon mask for the records of a day.
 * Loaded on demand (≈200 kB gzipped) the first time the globe needs it.
 */
import type { Topology, GeometryCollection } from 'topojson-specification'
import { locale } from '@/i18n/locale'

export type Ring = [number, number][]
export type CountryShape = {
  /** ISO 3166-1 alpha-2, lowercase (the `country` URL parameter). */
  code: string
  /** English name (what the server's gazetteer knows). */
  en: string
  /** Name in the app language. */
  name: string
  /** Polygons: each is an outer ring followed by its holes. */
  polygons: Ring[][]
  /** [W, S, E, N] of the largest polygon (mainland): where to fly, what to ask the server for. */
  bbox: [number, number, number, number]
}

/** Countries left out of the picker (ISO alpha-2). */
const EXCLUDED = new Set(['IL'])

let loading: Promise<CountryShape[]> | null = null

export function loadCountries(): Promise<CountryShape[]> {
  loading ??= (async () => {
    const [{ feature }, topo, iso, en, ar, fr] = await Promise.all([
      import('topojson-client'),
      import('world-atlas/countries-50m.json').then((m) => m.default as unknown as Topology<{ countries: GeometryCollection<{ name: string }> }>),
      import('i18n-iso-countries').then((m) => m.default),
      import('i18n-iso-countries/langs/en.json'),
      import('i18n-iso-countries/langs/ar.json'),
      import('i18n-iso-countries/langs/fr.json'),
    ])
    for (const l of [en, ar, fr]) iso.registerLocale((l as { default?: unknown }).default as never ?? (l as never))
    const lang = locale.startsWith('ar') ? 'ar' : locale.startsWith('fr') ? 'fr' : 'en'
    const fc = feature(topo, topo.objects.countries)
    const out: CountryShape[] = []
    for (const f of fc.features) {
      const id = String(f.id ?? '').padStart(3, '0')
      const a2 = iso.numericToAlpha2(id)
      if (!a2 || !f.geometry || EXCLUDED.has(a2)) continue
      const g = f.geometry
      const polygons: Ring[][] =
        g.type === 'Polygon' ? [g.coordinates as Ring[]] : g.type === 'MultiPolygon' ? (g.coordinates as Ring[][]) : []
      if (!polygons.length) continue
      let best = polygons[0]
      let bestArea = -1
      for (const p of polygons) {
        const b = ringBbox(p[0])
        const area = (b[2] - b[0]) * (b[3] - b[1])
        if (area > bestArea) {
          bestArea = area
          best = p
        }
      }
      const enName = iso.getName(a2, 'en') ?? f.properties?.name ?? a2
      out.push({ code: a2.toLowerCase(), en: enName, name: iso.getName(a2, lang) ?? enName, polygons, bbox: ringBbox(best[0]) })
    }
    const collator = new Intl.Collator(locale)
    return out.sort((a, b) => collator.compare(a.name, b.name))
  })()
  return loading
}

function ringBbox(ring: Ring): [number, number, number, number] {
  let w = 180, s = 90, e = -180, n = -90
  for (const [x, y] of ring) {
    if (x < w) w = x
    if (x > e) e = x
    if (y < s) s = y
    if (y > n) n = y
  }
  return [w, s, e, n]
}

function inRing(x: number, y: number, ring: Ring) {
  let inside = false
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i]
    const [xj, yj] = ring[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside
  }
  return inside
}

/** 1 for each record inside the country (any polygon, minus its holes), else 0. */
export function countryMask(c: CountryShape, lat: ArrayLike<number>, lon: ArrayLike<number>): Uint8Array {
  const boxes = c.polygons.map((p) => ringBbox(p[0]))
  const out = new Uint8Array(lat.length)
  for (let i = 0; i < lat.length; i++) {
    const x = lon[i], y = lat[i]
    for (let k = 0; k < c.polygons.length; k++) {
      const b = boxes[k]
      if (x < b[0] || x > b[2] || y < b[1] || y > b[3]) continue
      const p = c.polygons[k]
      if (inRing(x, y, p[0]) && !p.slice(1).some((h) => inRing(x, y, h))) {
        out[i] = 1
        break
      }
    }
  }
  return out
}

/** 1 for each record inside the box. */
export function boxMask(bb: number[], lat: ArrayLike<number>, lon: ArrayLike<number>): Uint8Array {
  const out = new Uint8Array(lat.length)
  for (let i = 0; i < lat.length; i++) out[i] = lon[i] >= bb[0] && lon[i] <= bb[2] && lat[i] >= bb[1] && lat[i] <= bb[3] ? 1 : 0
  return out
}

/** Outline rings (outer rings and holes) for drawing. */
export const outlineOf = (c: CountryShape): Ring[] => c.polygons.flat()

/** 0 for each record at a known heat source (within its site's radius), else 1. */
export function heatMask(sources: { lat: number; lon: number; cells: number }[], lat: ArrayLike<number>, lon: ArrayLike<number>): Uint8Array {
  const G = 0.1
  const grid = new Map<string, { la: number; lo: number; r: number }[]>()
  for (const s of sources) {
    const r = (1.5 + Math.sqrt(s.cells) * 1.4) / 111.2 // degrees of latitude
    const key = `${Math.floor(s.lat / G)}|${Math.floor(s.lon / G)}`
    let list = grid.get(key)
    if (!list) grid.set(key, (list = []))
    list.push({ la: s.lat, lo: s.lon, r })
  }
  const out = new Uint8Array(lat.length).fill(1)
  for (let i = 0; i < lat.length; i++) {
    const gi = Math.floor(lat[i] / G), gj = Math.floor(lon[i] / G)
    const k = Math.cos((lat[i] * Math.PI) / 180)
    search: for (let a = -1; a <= 1; a++)
      for (let b = -1; b <= 1; b++) {
        const list = grid.get(`${gi + a}|${gj + b}`)
        if (!list) continue
        for (const s of list) {
          if (Math.hypot(lat[i] - s.la, (lon[i] - s.lo) * k) <= s.r) {
            out[i] = 0
            break search
          }
        }
      }
  }
  return out
}
