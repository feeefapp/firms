import { useState } from 'react'
import { Link, Navigate, useSearchParams } from 'react-router-dom'
import { LogIn } from 'lucide-react'
import { Button } from '@feeef.dev/ui/primitives/button'
import { LanguageSwitcher } from '@feeef.dev/ui/i18n'
import { ThemeSwitch } from '@feeef.dev/ui/theme'
import { useSession } from '@/app/session'
import { loginUrl } from '@/lib/api'
import { EntryLayout, EntryLogo } from '@/shell/entry-layout'
import { t } from '@/i18n/locale'

/** Only in-app paths come back after sign-in. */
function safePath(path: string | null): string {
  return path && path.startsWith('/') && !path.startsWith('//') && !path.startsWith('/login') ? path : '/'
}

/** Sign in with feeef: one filled button that starts the OAuth flow on the server. */
export function LoginPage() {
  const { user } = useSession()
  const [search] = useSearchParams()
  const next = safePath(search.get('next'))
  const [starting, setStarting] = useState(false)
  if (user) return <Navigate to={next} replace />
  return (
    <EntryLayout label={t('m.login.title')}>
      <EntryLogo />
      <div className="fm-entry-card">
        <h1>{t('m.login.title')}</h1>
        <p>{t('m.login.body')}</p>
        <Button
          variant="filled"
          controlSize="large"
          loading={starting}
          onClick={() => {
            setStarting(true)
            window.location.assign(loginUrl(next))
          }}
        >
          <LogIn aria-hidden className="lab-dir-flip" />
          {t('m.login.action')}
        </Button>
        <Button asChild variant="text">
          <Link to={next}>{t('m.login.skip')}</Link>
        </Button>
      </div>
      <div className="fm-entry-tools">
        <LanguageSwitcher />
        <ThemeSwitch />
      </div>
    </EntryLayout>
  )
}
