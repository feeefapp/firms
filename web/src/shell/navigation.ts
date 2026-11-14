import type { LucideIcon } from 'lucide-react'
import { CalendarDays, CodeXml, Earth, GitCompareArrows, MapPinned, Search, Sparkles } from 'lucide-react'
import { t } from '@/i18n/locale'

export type NavItem = { id: string; path: string; label: string; icon: LucideIcon }

/** Sidebar destinations, in reading order. */
export function navItems(): NavItem[] {
  return [
    { id: 'overview', path: '/', label: t('m.nav.overview'), icon: CalendarDays },
    { id: 'globe', path: '/globe', label: t('m.nav.globe'), icon: Earth },
    { id: 'compare', path: '/compare', label: t('m.nav.compare'), icon: GitCompareArrows },
    { id: 'search', path: '/search', label: t('m.nav.search'), icon: Search },
    { id: 'assistant', path: '/assistant', label: t('m.nav.assistant'), icon: Sparkles },
    { id: 'regions', path: '/regions', label: t('m.nav.regions'), icon: MapPinned },
    { id: 'developers', path: '/developers', label: t('m.nav.developers'), icon: CodeXml },
  ]
}

export function isActive(pathname: string, item: NavItem): boolean {
  return item.path === '/' ? pathname === '/' : pathname === item.path || pathname.startsWith(`${item.path}/`)
}

/** Assistant `page` names → routes. */
export const PAGE_PATHS: Record<string, string> = {
  overview: '/',
  calendar: '/',
  globe: '/globe',
  compare: '/compare',
  search: '/search',
  hotspots: '/search',
  assistant: '/assistant',
  regions: '/regions',
  developers: '/developers',
}
