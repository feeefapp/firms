import type { ReactNode } from 'react'
import { CalendarDays, Earth, Sparkles, Flame } from 'lucide-react'
import { PixelShader } from '@feeef.dev/ui/pixel-art'
import { t } from '@/i18n/locale'
import './entry.css'

/**
 * Screens before the workspace (sign in): a story panel on the pixel ground on wide screens, the
 * task in a column at the end. Phones show the column alone.
 */
export function EntryLayout({ children, label }: { children: ReactNode; label: string }) {
  const features = [
    { icon: CalendarDays, text: t('m.entry.feature.calendar') },
    { icon: Earth, text: t('m.entry.feature.globe') },
    { icon: Sparkles, text: t('m.entry.feature.assistant') },
  ]
  return (
    <main className="fm-entry">
      <section className="fm-entry-story" aria-hidden="true">
        <PixelShader className="fm-entry-pixels" density={0.8} speed={0.18} />
        <div className="fm-entry-logo">
          <Flame size={28} />
          <span>{t('m.app.name')}</span>
        </div>
        <h2>{t('m.entry.headline')}</h2>
        <p>{t('m.entry.body')}</p>
        <ul>
          {features.map(({ icon: Icon, text }) => (
            <li key={text}>
              <Icon size={22} aria-hidden />
              {text}
            </li>
          ))}
        </ul>
        <small>{t('m.entry.credit')}</small>
      </section>
      <section className="fm-entry-side" aria-label={label}>
        <div className="fm-entry-column">{children}</div>
      </section>
    </main>
  )
}

export function EntryLogo() {
  return (
    <div className="fm-entry-side-logo">
      <Flame size={24} aria-hidden />
      <span>{t('m.app.name')}</span>
    </div>
  )
}
