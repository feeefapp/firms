import { pick, t } from '@/i18n/locale'
import type { Algorithm, RegionSummary } from './api'

/** Display order and the evaluation each algorithm is scored by (contract: region `eval`). */
export const ALGORITHM_KEYS = [
  'ensemble_adaptive',
  'ensemble_geom_adaptive',
  'ensemble',
  'frp_season_adaptive',
  'ratio_month_adaptive',
  'ratio',
  'naive',
  'raw_rows',
  'aqua_only',
] as const

export type AlgorithmInfo = { key: string; name: string; description: string; recommended: boolean }

/** Names from `/api/algorithms` in the page language, else the app's own copy. */
export function algorithmInfo(key: string, catalog: Algorithm[]): AlgorithmInfo {
  const fromApi = catalog.find((a) => a.key === key)
  const name = pick(fromApi?.name) || t(`m.alg.${key}`)
  return {
    key,
    // The API's name may carry "(recommended)"; the UI shows that as a tag instead.
    name: name.replace(/\s*\((موصى به|recommended)\)\s*$/i, ''),
    description: pick(fromApi?.description) || t(`m.alg.${key}.d`),
    recommended: fromApi?.recommended ?? key === 'ensemble_adaptive',
  }
}

export function algorithmList(catalog: Algorithm[]): AlgorithmInfo[] {
  const keys = catalog.length ? catalog.map((a) => a.key) : [...ALGORITHM_KEYS]
  return keys.map((key) => algorithmInfo(key, catalog))
}

/** Measured monthly error (%) of `key` in `region`, or null (the Aqua reference has none). */
export function measuredError(region: RegionSummary | null, key: string): number | null {
  const v = region?.eval?.[key]
  return typeof v === 'number' ? v : null
}

/** A region's name in the page language. */
export function regionTitle(region: Pick<RegionSummary, 'name' | 'title' | 'title_en'> | null | undefined): string {
  if (!region) return ''
  return document.documentElement.lang === 'en' ? region.title_en || region.title || region.name : region.title || region.name
}
