import { useState, type HTMLAttributes, type ReactNode, type TdHTMLAttributes } from 'react'
import { AlertCircle, Check, Copy, RotateCw } from 'lucide-react'
import { Button, IconButton } from '@feeef.dev/ui/primitives/button'
import { PixelLoader } from '@feeef.dev/ui/pixel-art'
import { cn } from '@/lib/cn'
import { t } from '@/i18n/locale'
import './data.css'

/** An opaque region on the content panel. Panels never nest. */
export function Panel({ children, className, ...props }: { children: ReactNode; className?: string } & HTMLAttributes<HTMLElement>) {
  return (
    <section data-lab-corners className={cn('fm-panel', className)} {...props}>
      {children}
    </section>
  )
}

export function PanelHeader({ title, description, action }: { title: ReactNode; description?: ReactNode; action?: ReactNode }) {
  return (
    <header className="fm-panel-header">
      <div>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {action ? <div className="fm-panel-header-action">{action}</div> : null}
    </header>
  )
}

/** The page's own title block. */
export function PageHeader({ title, description, action }: { title: ReactNode; description?: ReactNode; action?: ReactNode }) {
  return (
    <header className="fm-page-header">
      <div>
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>
      {action ? <div className="fm-page-header-action">{action}</div> : null}
    </header>
  )
}

export function Table({ children, className, label }: { children: ReactNode; className?: string; label?: string }) {
  return (
    <div className="fm-table-scroll" role={label ? 'region' : undefined} aria-label={label} tabIndex={label ? 0 : undefined}>
      <table className={cn('fm-table', className)}>{children}</table>
    </div>
  )
}

export function Th({ children, numeric, className }: { children?: ReactNode; numeric?: boolean; className?: string }) {
  return (
    <th scope="col" className={cn(numeric && 'fm-numeric', className)}>
      {children}
    </th>
  )
}

export function Td({ children, numeric, className, ...props }: { children?: ReactNode; numeric?: boolean; className?: string } & TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td {...props} className={cn(numeric && 'fm-numeric', className)}>
      {children}
    </td>
  )
}

/** Empty states say what is missing and offer the next step. */
export function EmptyState({ icon, title, description, action }: { icon?: ReactNode; title: ReactNode; description?: ReactNode; action?: ReactNode }) {
  return (
    <div className="fm-empty" role="status">
      {icon ? <div className="fm-empty-icon">{icon}</div> : null}
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      {action ? <div className="fm-empty-action">{action}</div> : null}
    </div>
  )
}

/** One calm loader that says what is loading. */
export function LoadingState({ label }: { label: string }) {
  return (
    <div className="fm-empty" role="status" aria-live="polite">
      <PixelLoader size={32} label={label} />
      <p>{label}</p>
    </div>
  )
}

/** What failed, that nothing was lost, and a way forward. */
export function ErrorState({ title, message, onRetry }: { title: string; message: string; onRetry?: () => void }) {
  return (
    <div className="fm-empty" role="alert">
      <div className="fm-empty-icon" data-tone="danger">
        <AlertCircle size={20} aria-hidden />
      </div>
      <h3>{title}</h3>
      <p>{message}</p>
      {onRetry ? (
        <div className="fm-empty-action">
          <Button variant="tonal" onClick={onRetry}>
            <RotateCw aria-hidden />
            {t('m.common.tryAgain')}
          </Button>
        </div>
      ) : null}
    </div>
  )
}

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn('fm-skeleton', className)} aria-hidden />
}

/** A problem the reader can act on, inline next to what failed. */
export function FormError({ children, onRetry }: { children: ReactNode; onRetry?: () => void }) {
  if (!children) return null
  return (
    <div role="alert" className="fm-error">
      <AlertCircle size={16} aria-hidden />
      <span className="fm-error-text">{children}</span>
      {onRetry ? (
        <Button variant="text" controlSize="small" onClick={onRetry}>
          {t('m.common.tryAgain')}
        </Button>
      ) : null}
    </div>
  )
}

/** An in-page notice: a fact with its next step (DESIGN 8). */
export function Notice({ tone = 'warning', icon, children, action }: { tone?: 'warning' | 'info' | 'danger'; icon?: ReactNode; children: ReactNode; action?: ReactNode }) {
  return (
    <div className="fm-notice" data-tone={tone} role={tone === 'danger' ? 'alert' : 'note'}>
      {icon ? <span className="fm-notice-icon">{icon}</span> : null}
      <p>{children}</p>
      {action}
    </div>
  )
}

export type TagTone = 'neutral' | 'primary' | 'success' | 'warning' | 'danger'

/** A short status label. Tone carries meaning, never decoration. */
export function Tag({ tone = 'neutral', children }: { tone?: TagTone; children: ReactNode }) {
  return (
    <span className="fm-tag" data-tone={tone}>
      {children}
    </span>
  )
}

/** A KPI tile. */
export function Stat({ label, value, hint, tone, loading }: { label: ReactNode; value: ReactNode; hint?: ReactNode; tone?: 'up' | 'down'; loading?: boolean }) {
  return (
    <div className="fm-stat" data-loading={loading || undefined}>
      <span>{label}</span>
      <strong data-tone={tone}>{value}</strong>
      {hint ? <small>{hint}</small> : null}
    </div>
  )
}

/** Monospace text with a copy button (keys, URLs, config). */
export function CopyBlock({ value, label, block = false }: { value: string; label: string; block?: boolean }) {
  const [copied, setCopied] = useState(false)
  const copy = () =>
    void navigator.clipboard?.writeText(value).then(() => {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1400)
    })
  return (
    <div className={cn('fm-copy', block && 'fm-copy-block')} dir="ltr">
      <code>{value}</code>
      <IconButton variant="text" controlSize="small" aria-label={copied ? t('m.common.copied') : t('m.common.copyWhat', { what: label })} onClick={copy}>
        {copied ? <Check /> : <Copy />}
      </IconButton>
    </div>
  )
}
