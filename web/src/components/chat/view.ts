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
  if (view.date) next.set('date', view.date)
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
    if (view.page) parts.push(t(`m.chat.page.${PAGE_PATHS[view.page] ? view.page : 'other'}`))
    return parts.join(' · ') || t('m.chat.applied.none')
  }
}
