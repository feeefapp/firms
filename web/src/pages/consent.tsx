import { useEffect, useState } from 'react'
import { CalendarDays, Check, Flame, Hammer, Link2, Search, ShieldCheck, WalletCards } from 'lucide-react'
import { Button } from '@feeef.dev/ui/primitives/button'
import { LanguageSwitcher } from '@feeef.dev/ui/i18n'
import { ThemeSwitch } from '@feeef.dev/ui/theme'
import { EntryLayout } from '@/shell/entry-layout'
import { t } from '@/i18n/locale'
import './consent.css'

type ConsentInfo = {
  client_name: string
  logo_uri?: string | null
  client_site?: string
  redirect_host: string
  origin_host: string
  user: { name?: string | null; email?: string | null; photo?: string | null }
  csrf: string
}

type State =
  | { kind: 'loading' }
  | { kind: 'ready'; info: ConsentInfo }
  | { kind: 'error'; reason: 'expired' | 'unknown_client' | 'failed' }

/**
 * MCP connection consent (OAuth): an AI app (Claude, ChatGPT, Cursor…) asks to use Firms for the
 * signed-in feeef account. Data comes from the server's `/oauth/consent.json`; the decision is POSTed
 * to `/oauth/consent` and the server answers with the client's redirect URL.
 */
export function ConsentPage() {
  const [state, setState] = useState<State>({ kind: 'loading' })
  const [busy, setBusy] = useState<'allow' | 'deny' | null>(null)

  useEffect(() => {
    let live = true
    fetch('/oauth/consent.json', { credentials: 'same-origin', headers: { accept: 'application/json' } })
      .then(async (res) => {
        const body = await res.json().catch(() => ({}))
        if (!live) return
        if (res.status === 401 && body.login) return window.location.assign(body.login)
        if (res.ok) return setState({ kind: 'ready', info: body as ConsentInfo })
        setState({ kind: 'error', reason: body.error === 'expired' ? 'expired' : body.error === 'unknown_client' ? 'unknown_client' : 'failed' })
      })
      .catch(() => live && setState({ kind: 'error', reason: 'failed' }))
    return () => {
      live = false
    }
  }, [])

  const decide = async (decision: 'allow' | 'deny') => {
    if (state.kind !== 'ready') return
    setBusy(decision)
    try {
      const res = await fetch('/oauth/consent', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify({ csrf: state.info.csrf, decision }),
      })
      const body = await res.json().catch(() => ({}))
      if (res.ok && typeof body.redirect === 'string') return window.location.assign(body.redirect)
      if (res.status === 401 && body.login) return window.location.assign(body.login)
      setState({ kind: 'error', reason: body.error === 'expired' ? 'expired' : 'failed' })
    } catch {
      setState({ kind: 'error', reason: 'failed' })
    } finally {
      setBusy(null)
    }
  }

  return (
    <EntryLayout label={t('m.consent.title')}>
      {state.kind === 'loading' ? (
        <div className="fm-entry-card fm-consent" aria-busy="true">
          <p>{t('m.consent.loading')}</p>
        </div>
      ) : state.kind === 'error' ? (
        <div className="fm-entry-card fm-consent" role="alert">
          <h1>{t(`m.consent.error.${state.reason}.title`)}</h1>
          <p>{t(`m.consent.error.${state.reason}.body`)}</p>
          <Button variant="tonal" onClick={() => window.location.assign('/')}>
            {t('m.consent.openFirms')}
          </Button>
        </div>
      ) : (
        <ConsentCard info={state.info} busy={busy} onDecide={decide} />
      )}
      <div className="fm-entry-tools">
        <LanguageSwitcher />
        <ThemeSwitch />
      </div>
    </EntryLayout>
  )
}

function ConsentCard({ info, busy, onDecide }: { info: ConsentInfo; busy: 'allow' | 'deny' | null; onDecide: (d: 'allow' | 'deny') => void }) {
  const initial = (info.client_name.match(/[\p{L}\p{N}]/u)?.[0] ?? '?').toUpperCase()
  const who = info.user.name || info.user.email || ''
  const can = [
    { icon: CalendarDays, text: t('m.consent.can.read') },
    { icon: Search, text: t('m.consent.can.search') },
    { icon: Hammer, text: t('m.consent.can.build') },
  ]
  return (
    <div className="fm-entry-card fm-consent">
      <div className="fm-consent-pair" aria-hidden="true">
        <span className="fm-consent-avatar">{info.logo_uri ? <img src={info.logo_uri} alt="" referrerPolicy="no-referrer" /> : initial}</span>
        <Link2 size={18} className="fm-consent-link" />
        <span className="fm-consent-avatar fm-consent-firms">
          <Flame size={22} />
        </span>
      </div>
      <h1>{t('m.consent.heading', { app: info.client_name })}</h1>
      <p>{t('m.consent.lead')}</p>

      {who ? (
        <div className="fm-consent-account">
          {info.user.photo ? <img src={info.user.photo} alt="" referrerPolicy="no-referrer" /> : <span className="fm-consent-dot">{who[0]?.toUpperCase()}</span>}
          <div>
            <span className="fm-consent-muted">{t('m.consent.as')}</span>
            <bdi>{who}</bdi>
          </div>
        </div>
      ) : null}

      <ul className="fm-consent-list" aria-label={t('m.consent.canTitle')}>
        {can.map(({ icon: Icon, text }) => (
          <li key={text}>
            <Icon size={18} aria-hidden />
            <span>{text}</span>
          </li>
        ))}
        <li className="fm-consent-not">
          <WalletCards size={18} aria-hidden />
          <span>{t('m.consent.cannot.wallet')}</span>
        </li>
      </ul>

      <p className="fm-consent-fine">
        <ShieldCheck size={16} aria-hidden />
        <span>
          {t('m.consent.redirect')} <bdi dir="ltr">{info.redirect_host}</bdi>
          {info.client_site ? (
            <>
              {' · '}
              {t('m.consent.site')} <bdi dir="ltr">{info.client_site}</bdi>
            </>
          ) : null}
          {'. '}
          {t('m.consent.revoke')}
        </span>
      </p>

      <div className="fm-consent-actions">
        <Button variant="filled" controlSize="large" loading={busy === 'allow'} disabled={busy !== null} onClick={() => onDecide('allow')}>
          <Check aria-hidden />
          {t('m.consent.allow')}
        </Button>
        <Button variant="text" loading={busy === 'deny'} disabled={busy !== null} onClick={() => onDecide('deny')}>
          {t('m.consent.deny')}
        </Button>
      </div>
    </div>
  )
}
