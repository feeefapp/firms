import { formatLocale, locale } from '@/i18n/locale'

const numberFormats = new Map<number, Intl.NumberFormat>()
function nf(digits: number) {
  let f = numberFormats.get(digits)
  if (!f) {
    f = new Intl.NumberFormat(formatLocale, { maximumFractionDigits: digits, minimumFractionDigits: digits })
    numberFormats.set(digits, f)
  }
  return f
}

/** A count or measure; `–` when missing. */
export function formatNumber(value: number | null | undefined, digits = 0): string {
  return value == null || !Number.isFinite(value) ? '–' : nf(digits).format(value)
}

/** `+23%` / `−8%`, always signed. */
export function formatPct(value: number | null | undefined, digits = 0): string {
  if (value == null || !Number.isFinite(value)) return '–'
  const sign = value > 0 ? '+' : value < 0 ? '−' : ''
  // Isolated left-to-right so the sign stays in front of the number inside Arabic text.
  return `\u2066${sign}${nf(digits).format(Math.abs(value))}%\u2069`
}

const compact = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 })
/** Short count for chart axes: 1.2K (Latin, so it reads the same inside LTR chart coordinates). */
export function formatCompact(value: number): string {
  return compact.format(value)
}

const monthLong = new Intl.DateTimeFormat(formatLocale, { month: 'long', timeZone: 'UTC' })
const monthShort = new Intl.DateTimeFormat(formatLocale, { month: 'short', timeZone: 'UTC' })

/** Names of the 12 months in the current language. */
export const MONTHS_LONG = Array.from({ length: 12 }, (_, m) => monthLong.format(Date.UTC(2001, m, 15)))
export const MONTHS_SHORT = Array.from({ length: 12 }, (_, m) =>
  // Arabic short month names equal the long ones; trim them to stay inside a calendar cell.
  locale === 'ar' ? monthLong.format(Date.UTC(2001, m, 15)) : monthShort.format(Date.UTC(2001, m, 15)),
)

/** `2026-03` → "March 2026". */
export function formatYm(ym: string | null | undefined): string {
  if (!ym) return '–'
  const [y, m] = ym.split('-').map(Number)
  if (!y || !m) return ym
  return `${MONTHS_LONG[m - 1]} ${y}`
}

const dateFormat = new Intl.DateTimeFormat(formatLocale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
const dateTimeFormat = new Intl.DateTimeFormat(formatLocale, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })

/** `2026-11-01` → "1 November 2026". */
export function formatDate(iso: string | null | undefined): string {
  if (!iso) return '–'
  const d = new Date(iso.length === 10 ? `${iso}T00:00:00Z` : iso)
  return Number.isNaN(d.getTime()) ? iso : dateFormat.format(d)
}

export function formatDateTime(iso: string | null | undefined): string {
  if (!iso) return '–'
  const d = new Date(iso)
  return Number.isNaN(d.getTime()) ? iso : dateTimeFormat.format(d)
}

/** `[W,S,E,N]` → "35.10, 33.00 → 36.70, 34.70" (Latin, LTR). */
export function formatBbox(bbox: readonly number[] | null | undefined): string {
  if (!bbox || bbox.length !== 4) return '–'
  return bbox.map((v) => v.toFixed(2)).join(', ')
}
