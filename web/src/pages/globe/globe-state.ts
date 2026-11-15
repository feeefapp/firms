/**
 * The globe's whole state lives in the address, so a link, the back button and the assistant
 * (`apply_view`) all drive it the same way:
 *
 *   date=YYYY-MM-DD                  one day, animated with the satellites (default: latest)
 *   range=YYYY-MM-DD..YYYY-MM-DD     any range in an area (country or box)
 *   country=dz | Algeria | الجزائر   area filter (ISO alpha-2 or a name)
 *   bbox=W,S,E,N                     the drawn area (inspector "Area" tab)
 *   sats=A,N20                       satellites to show (default: all)
 *   sensor=modis,viirs               sensor families: modis, viirs, landsat, geo (default: all)
 *   conf=1                           minimum confidence: 0 any, 1 nominal, 2 high
 *   frp=5                            minimum fire radiative power, MW
 *   dn=day | night                   day or night overpasses only
 *   cam=lat,lon,altKm                fly the camera there (applied when it changes)
 *   heat=off                         hide the known heat source icons (volcanoes, flares, platforms)
 *   nostatic=1                       hide the detections at known heat sources
 *   tab=area | record | source       inspector tab
 */
import { parseBbox } from '@/lib/bbox'

export const SENSORS = ['modis', 'viirs', 'landsat', 'geo'] as const
export type Sensor = (typeof SENSORS)[number]

export type GlobeState = {
  date: string | null
  range: [string, string] | null
  country: string | null
  bbox: number[] | null
  sats: string[] | null
  sensors: Sensor[] | null
  conf: 0 | 1 | 2
  frp: number
  dn: 0 | 1 | 2
  cam: { lat: number; lon: number; altKm: number } | null
  tab: 'area' | 'record' | 'source' | null
  heat: boolean
  nostatic: boolean
}

const DAY = /^\d{4}-\d{2}-\d{2}$/

export function parseGlobe(search: URLSearchParams): GlobeState {
  const date = search.get('date')
  const r = search.get('range')?.split('..')
  const range = r && r.length === 2 && DAY.test(r[0]) && DAY.test(r[1]) && r[0] <= r[1] ? ([r[0], r[1]] as [string, string]) : null
  const list = (k: string) =>
    search
      .get(k)
      ?.split(',')
      .map((x) => x.trim())
      .filter(Boolean) ?? null
  const sensors = list('sensor')?.map((x) => x.toLowerCase()).filter((x): x is Sensor => (SENSORS as readonly string[]).includes(x)) ?? null
  const conf = Number(search.get('conf'))
  const frp = Number(search.get('frp'))
  const dn = search.get('dn')
  const cam = search.get('cam')?.split(',').map(Number)
  const tab = search.get('tab')
  return {
    date: date && DAY.test(date) ? date : null,
    range,
    country: search.get('country')?.trim() || null,
    bbox: parseBbox(search.get('bbox')),
    sats: list('sats'),
    sensors: sensors?.length ? sensors : null,
    conf: conf === 1 || conf === 2 ? conf : 0,
    frp: Number.isFinite(frp) && frp > 0 ? frp : 0,
    dn: dn === 'day' ? 1 : dn === 'night' ? 2 : 0,
    cam: cam && cam.length === 3 && cam.every(Number.isFinite) ? { lat: cam[0], lon: cam[1], altKm: cam[2] } : null,
    tab: tab === 'area' || tab === 'record' || tab === 'source' ? tab : null,
    heat: search.get('heat') !== 'off',
    nostatic: search.get('nostatic') === '1',
  }
}

/** Writes the changed fields into `search` (null / default removes the parameter). */
export function writeGlobe(search: URLSearchParams, patch: Partial<GlobeState>): URLSearchParams {
  const next = new URLSearchParams(search)
  const set = (k: string, v: string | null) => (v == null || v === '' ? next.delete(k) : next.set(k, v))
  if ('date' in patch) set('date', patch.date ?? null)
  if ('range' in patch) set('range', patch.range ? patch.range.join('..') : null)
  if ('country' in patch) set('country', patch.country ?? null)
  if ('bbox' in patch) set('bbox', patch.bbox ? patch.bbox.join(',') : null)
  if ('sats' in patch) set('sats', patch.sats?.length ? patch.sats.join(',') : null)
  if ('sensors' in patch) set('sensor', patch.sensors?.length && patch.sensors.length < SENSORS.length ? patch.sensors.join(',') : null)
  if ('conf' in patch) set('conf', patch.conf ? String(patch.conf) : null)
  if ('frp' in patch) set('frp', patch.frp ? String(patch.frp) : null)
  if ('dn' in patch) set('dn', patch.dn === 1 ? 'day' : patch.dn === 2 ? 'night' : null)
  if ('cam' in patch) set('cam', patch.cam ? [patch.cam.lat, patch.cam.lon, Math.round(patch.cam.altKm)].join(',') : null)
  if ('tab' in patch) set('tab', patch.tab ?? null)
  if ('heat' in patch) set('heat', patch.heat === false ? 'off' : null)
  if ('nostatic' in patch) set('nostatic', patch.nostatic ? '1' : null)
  return next
}

/** Days in an inclusive range. */
export function rangeDays(r: [string, string]) {
  return Math.round((Date.parse(`${r[1]}T00:00:00Z`) - Date.parse(`${r[0]}T00:00:00Z`)) / 86400000) + 1
}
