import IntlMessageFormat from 'intl-messageformat'
import ar from './ar.json'
import en from './en.json'

/**
 * The app's language, fixed for the life of the page: changing it stores the choice and reloads
 * (`changeLocale`), so module-level helpers (`t`, the formatters in `@/lib/format`) never go stale.
 * Catalogs are flat `{ "m.…": ICU message }` maps; the kit gets them merged over its own strings.
 * Arabic is the default (RTL); English is second.
 */
export const LOCALES = ['ar', 'en'] as const
export type Locale = (typeof LOCALES)[number]

const CATALOGS: Record<Locale, Record<string, string>> = { ar, en }
const STORAGE_KEY = 'firms-locale'

function isLocale(value: string | null | undefined): value is Locale {
  return Boolean(value && (LOCALES as readonly string[]).includes(value))
}

function resolveLocale(): Locale {
  if (typeof window === 'undefined') return 'ar'
  const requested = new URLSearchParams(window.location.search).get('hl')
  if (isLocale(requested)) {
    try {
      localStorage.setItem(STORAGE_KEY, requested)
    } catch {
      // Private mode: the choice lasts for this page only.
    }
    return requested
  }
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isLocale(stored)) return stored
  } catch {
    // Storage blocked: fall through to the default.
  }
  return 'ar'
}

export const locale: Locale = resolveLocale()
export const dir: 'rtl' | 'ltr' = locale === 'ar' ? 'rtl' : 'ltr'
export const messages: Record<string, string> = CATALOGS[locale]

/** BCP 47 tag for `Intl` formatters: Latin digits in Arabic too (numbers stay comparable). */
export const formatLocale = locale === 'ar' ? 'ar-u-nu-latn' : 'en-GB'

const compiled = new Map<string, IntlMessageFormat>()

/** Translates `key` with ICU `params`; English, then the key itself, when the locale lacks it. */
export function t(key: string, params?: Record<string, string | number | Date>): string {
  const source = messages[key] ?? CATALOGS.en[key]
  if (source == null) return key
  let format = compiled.get(key)
  if (!format) {
    format = new IntlMessageFormat(source, formatLocale)
    compiled.set(key, format)
  }
  return String(format.format(params))
}

/** Picks the current language from a `{ ar, en }` pair the API sends. */
export function pick(value: { ar?: string; en?: string } | string | null | undefined): string {
  if (!value) return ''
  if (typeof value === 'string') return value
  return value[locale] ?? value.en ?? value.ar ?? ''
}

/** Stores `code` and reloads the current page without `?hl=`. */
export function changeLocale(code: string): void {
  if (!isLocale(code) || code === locale) return
  try {
    localStorage.setItem(STORAGE_KEY, code)
  } catch {
    // Falls back to ?hl= below.
  }
  const url = new URL(window.location.href)
  url.searchParams.set('hl', code)
  window.location.replace(url.toString())
}

/** Drops `?hl=` from the address bar once it has been read. */
export function stripLocaleParam(): void {
  const url = new URL(window.location.href)
  if (!url.searchParams.has('hl')) return
  url.searchParams.delete('hl')
  window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash)
}
