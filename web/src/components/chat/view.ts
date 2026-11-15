import { useCallback, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSession } from '@/app/session'
import { regionTitle } from '@/lib/algorithms'
import { formatYm } from '@/lib/format'
import { DEFAULT_ALGORITHM, resolveRange, sharedQuery } from '@/lib/params'
import { PAGE_PATHS } from '@/shell/navigation'
import { t } from '@/i18n/locale'
import type { FirmsView } from './types'

const YM = /^\d{4}-(0[1-9]|1[0-2])$/

/** The address a view leads to from `current` (pathname + search). */
export function viewHref(view: FirmsView, current: { pathname: string; search: string }, fallbackRange: (region: string | null) => { from: string; to: string }): string {
  const search = new URLSearchParams(current.search)
  const path = view.page ? (PAGE_PATHS[view.page] ?? current.pathname) : current.pathname
  const next = path === current.pathname ? search : sharedQuery(search)
  if (view.region) next.set('region', view.region)
  const from = view.from && YM.test(view.from) ? view.from : null
  const to = view.to && YM.test(view.to) ? view.to : null
  if (from || to) {
    const fallback = fallbackRange(view.region ?? search.get('region'))
    next.set('period', 'custom')
    next.set('from', from ?? fallback.from)
    next.set('to', to ?? fallback.to)
  }
  if (view.algorithm) {
    if (view.algorithm === DEFAULT_ALGORITHM) next.delete('alg')
    else next.set('alg', view.algorithm)
  }
  if (view.baseline === 'mean') next.set('baseline', 'mean')
  else if (view.baseline === 'median') next.delete('baseline')
  if (view.view === 'anomaly') next.set('view', 'anomaly')
  else if (view.view === 'count') next.delete('view')
  if (view.bbox) next.set('bbox', Array.isArray(view.bbox) ? view.bbox.join(',') : view.bbox)
  if (view.clear_bbox) next.delete('bbox')
  if (view.date) {
    next.set('date', view.date)
    next.delete('range')
  }
  if (Array.isArray(view.range) && view.range.length === 2) next.set('range', view.range.join('..'))
  if (typeof view.country === 'string') {
    if (view.country.trim()) next.set('country', view.country.trim())
    else next.delete('country')
  }
  const list = (k: string, v: string[] | undefined) => {
    if (!Array.isArray(v)) return
    if (v.length) next.set(k, v.join(','))
    else next.delete(k)
  }
  list('sats', view.satellites)
  list('sensor', view.sensors)
  if (typeof view.min_confidence === 'number') {
    if (view.min_confidence > 0) next.set('conf', String(Math.min(2, Math.round(view.min_confidence))))
    else next.delete('conf')
  }
  if (typeof view.min_frp === 'number') {
    if (view.min_frp > 0) next.set('frp', String(view.min_frp))
    else next.delete('frp')
  }
  if (view.day_night === 'day' || view.day_night === 'night') next.set('dn', view.day_night)
  else if (view.day_night === 'all') next.delete('dn')
  if (view.look === 'heat' || view.look === 'fire3d') next.set('look', view.look)
  else if (view.look === 'pixels') next.delete('look')
  if (view.heat_sources === false) next.set('heat', 'off')
  else if (view.heat_sources === true) next.delete('heat')
  if (view.hide_heat_source_detections === true) next.set('nostatic', '1')
  else if (view.hide_heat_source_detections === false) next.delete('nostatic')
  if (view.camera && Number.isFinite(view.camera.lat) && Number.isFinite(view.camera.lon)) {
    next.set('cam', [view.camera.lat, view.camera.lon, Math.round(view.camera.altitude_km ?? 1500)].join(','))
  }
  const qs = next.toString()
  return qs ? `${path}?${qs}` : path
}

/**
 * Applies a `data-firms-view` (or a card's "Open in Firms") to the address and returns the address
 * it replaced, so the change can be undone.
 */
export function useApplyView() {
  const navigate = useNavigate()
  const location = useLocation()
  const { regions } = useSession()
  const where = useRef(location)
  where.current = location
  const apply = useCallback(
    (view: FirmsView): string => {
      const current = where.current
      const previous = current.pathname + current.search
      const href = viewHref(view, current, (name) => resolveRange('12m', regions.find((r) => r.name === name) ?? regions[0] ?? null, null, null))
      if (href !== previous) navigate(href)
      return previous
    },
    [navigate, regions],
  )
  const restore = useCallback((href: string) => navigate(href), [navigate])
  return { apply, restore }
}

/** "Portugal · Jan 2025 → Dec 2025 · anomaly · Compare" */
export function useViewSummary() {
  const { regions } = useSession()
  return (view: FirmsView): string => {
    const parts: string[] = []
    if (view.region) {
      const region = regions.find((r) => r.name === view.region)
      parts.push(region ? regionTitle(region) : view.region)
    }
    if (view.from || view.to) parts.push(`${formatYm(view.from ?? null)} → ${formatYm(view.to ?? null)}`)
    if (view.view === 'anomaly') parts.push(t('m.view.anomaly'))
    if (view.algorithm) parts.push(t('m.chat.view.algorithm', { algorithm: view.algorithm }))
    if (view.bbox) parts.push(t('m.chat.applied.bbox'))
    if (view.date) parts.push(view.date)
    if (view.range) parts.push(`${view.range[0]} → ${view.range[1]}`)
    if (view.country) parts.push(view.country)
    if (view.satellites?.length) parts.push(view.satellites.join(', '))
    if (view.sensors?.length) parts.push(view.sensors.join(', '))
    if (view.min_frp) parts.push(`≥ ${view.min_frp} MW`)
    if (view.day_night && view.day_night !== 'all') parts.push(t(view.day_night === 'day' ? 'm.search.day' : 'm.search.night'))
    if (view.camera) parts.push(t('m.chat.applied.camera'))
    if (view.page) parts.push(t(`m.chat.page.${PAGE_PATHS[view.page] ? view.page : 'other'}`))
    return parts.join(' · ') || t('m.chat.applied.none')
  }
}
