import { useState } from 'react'
import { Check, ShieldCheck, X } from 'lucide-react'
import { Button } from '@feeef.dev/ui/primitives/button'
import { FormError } from '@/components/ui/data'
import { errorMessage } from '@/lib/errors'
import { t } from '@/i18n/locale'
import { humanizeToolName } from './tool-card'

/** Readable, bounded review fields; the full arguments stay in the technical disclosure. */
export function approvalFields(input: unknown): { label: string; value: string }[] {
  const fields: { label: string; value: string }[] = []
  const visit = (value: unknown, path: string[], depth: number) => {
    if (fields.length >= 10 || value == null) return
    const label = path.map((key) => {
      const known = t(`m.chat.field.${key}`)
      return known === `m.chat.field.${key}` ? humanizeToolName(key) : known
    }).join(' · ')
    if (['string', 'number', 'boolean'].includes(typeof value)) {
      if (String(value).trim()) fields.push({ label, value: String(value).slice(0, 600) })
    } else if (Array.isArray(value) && value.every((item) => ['string', 'number', 'boolean'].includes(typeof item))) {
      fields.push({ label, value: value.slice(0, 8).join(', ').slice(0, 600) })
    } else if (typeof value === 'object' && !Array.isArray(value) && depth < 2) {
      for (const [key, child] of Object.entries(value)) visit(child, [...path, key], depth + 1)
    }
  }
  if (input && typeof input === 'object' && !Array.isArray(input)) for (const [key, value] of Object.entries(input)) visit(value, [key], 0)
  return fields
}

/**
 * A decision for one approval id (Lab's `ChatApprovalRequest`): what the tool would do, one filled
 * "Approve" at the end of the reading direction and a text "Deny".
 */
export function ChatApprovalRequest({ input, onAnswer }: { input: unknown; onAnswer: (approved: boolean) => Promise<void> }) {
  const fields = approvalFields(input)
  const [pending, setPending] = useState<boolean | null>(null)
  const [sent, setSent] = useState<'approved' | 'denied' | null>(null)
  const [error, setError] = useState<string | null>(null)
  const answer = async (approved: boolean) => {
    if (sent || pending !== null) return
    setPending(approved)
    setError(null)
    try {
      await onAnswer(approved)
      setSent(approved ? 'approved' : 'denied')
    } catch (failure) {
      setError(errorMessage(failure))
    } finally {
      setPending(null)
    }
  }
  return (
    <div className="fm-approval" aria-busy={pending !== null}>
      <p>{t('m.chat.approval.explain')}</p>
      {fields.length ? (
        <dl>
          {fields.map((field) => (
            <div key={field.label}>
              <dt>{field.label}</dt>
              <dd dir="auto">{field.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      {error ? <FormError>{error}</FormError> : null}
      {sent ? (
        <p className="fm-approval-sent" role="status">
          {sent === 'approved' ? <ShieldCheck size={18} aria-hidden /> : <X size={18} aria-hidden />}
          {t(sent === 'approved' ? 'm.chat.approval.approvedNote' : 'm.chat.approval.deniedNote')}
        </p>
      ) : (
        <div className="fm-approval-actions">
          <Button variant="text" controlSize="small" disabled={pending !== null} loading={pending === false} onClick={() => void answer(false)}>
            <X size={18} aria-hidden />
            {t('m.chat.approval.deny')}
          </Button>
          <Button variant="filled" controlSize="small" disabled={pending !== null} loading={pending === true} onClick={() => void answer(true)}>
            <Check size={18} aria-hidden />
            {t('m.chat.approval.approve')}
          </Button>
        </div>
      )}
    </div>
  )
}
