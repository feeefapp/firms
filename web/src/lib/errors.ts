import { ApiError } from './api'
import { t } from '@/i18n/locale'

/** A sentence a person can act on, never a raw code. */
export function errorMessage(error: unknown): string {
  if (error instanceof ApiError) {
    if (error.status === 0) return t('m.error.network')
    if (error.status === 401) return t('m.error.signIn')
    if (error.status === 403) return t('m.error.forbidden')
    if (error.status === 404) return t('m.error.notFound')
    if (error.status >= 500) return t('m.error.server')
    return error.message
  }
  if (error instanceof Error && error.name !== 'AbortError') return error.message
  return t('m.error.unknown')
}
