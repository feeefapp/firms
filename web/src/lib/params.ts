import { useCallback, useMemo } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useSession } from '@/app/session'
import type { RegionSummary } from './api'
import type { ColorMap } from './colors'

/**
 * The analysis parameters live in the address (`?region=punjab&period=5y&view=anomaly…`), so a
 * link, a reload or the assistant (`apply` events) can set them. Simple by default: region,
 * period preset and view; the algorithm, baseline and colours sit in the Advanced sheet.
 */
export type Period = '12m' | '5y' | 'all' | 'custom'
export type View = 'count' | 'anomaly'
export type Baseline = 'median' | 'mean'

export const DEFAULT_ALGORITHM = 'ensemble_adaptive'
export const PERIODS: Period[] = ['12m', '5y', 'all', 'custom']

/** Shared analysis keys: carried across pages by the navigation. */
export const SHARED_KEYS = ['region', 'period', 'from', 'to', 'view', 'alg', 'baseline', 'cmap'] as const

export type AnalysisParams = {
  region: RegionSummary | null
  regionName: string
  period: Period
  view: View
  algorithm: string
  baseline: Baseline
  cmap: ColorMap
  /** Resolved inclusive month range for the API. */
  from: string
  to: string
  /** Custom range as typed in the address (only when period = custom). */
  customFrom: string | null
  customTo: string | null
}

const YM = /^\d{4}-(0[1-9]|1[0-2])$/

export function ymIndex(ym: string): number {
  const [y, m] = ym.split('-').map(Number)
  return (y - 2001) * 12 + (m - 1)
}
export function ymOf(index: number): string {
  return `${2001 + Math.floor(index / 12)}-${String((index % 12) + 1).padStart(2, '0')}`
}

/** The last month of a region's archive (falls back to last month). */
export function regionEnd(region: RegionSummary | null): string {
  if (region?.end && YM.test(region.end)) return region.end
  if (region?.nm) return ymOf(region.nm - 1)
  const now = new Date()
  return ymOf((now.getUTCFullYear() - 2001) * 12 + now.getUTCMonth() - 1)
}

export function resolveRange(period: Period, region: RegionSummary | null, customFrom: string | null, customTo: string | null) {
  const end = regionEnd(region)
  const last = ymIndex(end)
  if (period === 'all') return { from: '2001-01', to: end }
  if (period === '5y') return { from: ymOf(Math.max(0, last - 59)), to: end }
  if (period === 'custom' && customFrom && customTo) {
    const a = Math.max(0, Math.min(ymIndex(customFrom), last))
    const b = Math.max(a, Math.min(ymIndex(customTo), last))
    return { from: ymOf(a), to: ymOf(b) }
  }
  return { from: ymOf(Math.max(0, last - 11)), to: end }
}

export function useAnalysisParams() {
  const [search] = useSearchParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { regions } = useSession()

  const params = useMemo<AnalysisParams>(() => {
    const name = search.get('region') ?? ''
    const region = regions.find((r) => r.name === name) ?? regions[0] ?? null
    const p = search.get('period')
    const period: Period = p === '5y' || p === '12m' || p === 'custom' ? p : 'all'
    const customFrom = YM.test(search.get('from') ?? '') ? search.get('from') : null
    const customTo = YM.test(search.get('to') ?? '') ? search.get('to') : null
    const range = resolveRange(period, region, customFrom, customTo)
    const cmap = search.get('cmap')
    return {
      region,
      regionName: region?.name ?? name,
      period,
      view: search.get('view') === 'anomaly' ? 'anomaly' : 'count',
      algorithm: search.get('alg') || DEFAULT_ALGORITHM,
      baseline: search.get('baseline') === 'mean' ? 'mean' : 'median',
      cmap: cmap === 'inferno' || cmap === 'blues' ? cmap : 'cividis',
      ...range,
      customFrom,
      customTo,
    }
  }, [search, regions])

  /** Patches the address; `null` removes a key. Defaults are dropped to keep links short. */
  const update = useCallback(
    (patch: Record<string, string | null | undefined>, options?: { path?: string; replace?: boolean }) => {
      const next = new URLSearchParams(options?.path && options.path !== location.pathname ? sharedQuery(search) : search)
      for (const [key, value] of Object.entries(patch)) {
        if (value == null || value === '') next.delete(key)
        else next.set(key, value)
      }
      if (next.get('period') === 'all') next.delete('period')
      if (next.get('view') === 'count') next.delete('view')
      if (next.get('alg') === DEFAULT_ALGORITHM) next.delete('alg')
      if (next.get('baseline') === 'median') next.delete('baseline')
      if (next.get('cmap') === 'cividis') next.delete('cmap')
      if (next.get('period') !== 'custom') {
        next.delete('from')
        next.delete('to')
      }
      const qs = next.toString()
      navigate({ pathname: options?.path ?? location.pathname, search: qs ? `?${qs}` : '' }, { replace: options?.replace ?? true })
    },
    [search, navigate, location.pathname],
  )

  return { params, update, search }
}

/** The shared analysis keys of the current address, for links to other pages. */
export function sharedQuery(search: URLSearchParams): URLSearchParams {
  const out = new URLSearchParams()
  for (const key of SHARED_KEYS) {
    const v = search.get(key)
    if (v) out.set(key, v)
  }
  return out
}

/** `/path` + the shared analysis query. */
export function linkWithParams(path: string, search: URLSearchParams): string {
  const qs = sharedQuery(search).toString()
  return qs ? `${path}?${qs}` : path
}
