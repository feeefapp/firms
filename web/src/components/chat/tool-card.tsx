import { useId, useState, type ReactNode } from 'react'
import { Check, CircleDashed, ShieldQuestion, TriangleAlert, Wrench, X } from 'lucide-react'
import { PixelLoader } from '@feeef.dev/ui/pixel-art'
import { t } from '@/i18n/locale'
import { ChatApprovalRequest } from './approval'
import type { ToolPart } from './types'

/** Ported from feeef Lab `tool-card.tsx` + `activity.tsx` (ChatToolAction), on Firms copy. */

const pretty = (value: unknown) => (typeof value === 'string' ? value : JSON.stringify(value, null, 2))

export function humanizeToolName(name: string) {
  const last = name.split('__').at(-1)?.split(/[.:/]/).filter(Boolean).at(-1) ?? ''
  return last.replace(/[_-]+/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').trim().slice(0, 90) || 'Action'
}

/** The tool's title in the page language: our copy, else the registry's `title`, else its name. */
export function toolTitle(part: Pick<ToolPart, 'toolName' | 'title'>): string {
  // Our own copy first (it is in the page language), then the registry title, then the name.
  const key = `m.tool.${part.toolName}`
  const known = t(key)
  return known !== key ? known : part.title || humanizeToolName(part.toolName)
}

/** "punjab · 2025-01 → 2025-12 · ensemble_adaptive": the arguments that say what was asked. */
export function argsSummary(input: unknown): string {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return ''
  const r = input as Record<string, unknown>
  const out: string[] = []
  const scalar = (v: unknown) => (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' ? String(v) : null)
  if (r.from || r.to) out.push(`${scalar(r.from) ?? '…'} → ${scalar(r.to) ?? '…'}`)
  for (const [key, value] of Object.entries(r)) {
    if (key === 'from' || key === 'to') continue
    if (Array.isArray(value)) {
      if (value.every((v) => scalar(v) !== null)) out.push(key === 'bbox' ? value.map((v) => (typeof v === 'number' ? v.toFixed(1) : v)).join(', ') : value.slice(0, 4).join(', '))
    } else {
      const s = scalar(value)
      if (s !== null && s !== '') out.push(s)
    }
    if (out.length >= 4) break
  }
  return out.join(' · ').slice(0, 160)
}

/** One quiet surface for a tool call, including an approval it asks for. */
export function ChatToolCard({ title, detail, icon, status, attention, children }: { title: ReactNode; detail?: string; icon: ReactNode; status: string; attention?: 'approval' | 'error'; children?: ReactNode }) {
  const titleId = useId()
  return (
    <section className="fm-tool" data-attention={attention} aria-labelledby={titleId} data-lab-corners>
      <header className="fm-tool-head">
        <span className="fm-tool-icon" aria-hidden="true">
          {icon}
        </span>
        <div>
          <strong id={titleId}>{title}</strong>
          {detail ? <small dir="auto">{detail}</small> : null}
        </div>
        <span className="fm-tool-status">{status}</span>
      </header>
      {children}
    </section>
  )
}

/** Technical details render only while open: long chats keep large JSON out of the DOM. */
function ToolDetails({ part }: { part: ToolPart }) {
  const [open, setOpen] = useState(false)
  return (
    <details className="fm-tool-technical" onToggle={(event) => setOpen(event.currentTarget.open)}>
      <summary>{t('m.chat.tool.details')}</summary>
      {open ? (
        <div>
          <small>{t('m.chat.tool.name')}</small>
          <code dir="ltr">{part.toolName}</code>
          <small>{t('m.chat.tool.input')}</small>
          <pre dir="ltr">{pretty(part.input ?? part.inputText ?? {})}</pre>
          {part.state === 'output-available' ? (
            <>
              <small>{t('m.chat.tool.output')}</small>
              <pre dir="ltr">{pretty(part.output)}</pre>
            </>
          ) : null}
          {part.errorText ? (
            <>
              <small>{t('m.chat.tool.error')}</small>
              <pre dir="ltr">{part.errorText}</pre>
            </>
          ) : null}
        </div>
      ) : null}
    </details>
  )
}

const DONE = ['output-available', 'output-error', 'output-denied']
export const toolSettled = (part: ToolPart) => DONE.includes(part.state)

export function ChatToolAction({ part, streaming, onAnswer }: { part: ToolPart; streaming: boolean; onAnswer: (inputId: string, approved: boolean) => Promise<void> }) {
  const approval = streaming && part.state === 'approval-requested' && part.approval ? part.approval : null
  const [decision, setDecision] = useState<{ id: string; approved: boolean } | null>(null)
  const answered = approval && decision?.id === approval.id ? decision : null
  const failed = part.state === 'output-error'
  const denied = part.state === 'output-denied' || (part.state === 'approval-responded' && part.approval?.approved === false)
  const done = part.state === 'output-available'
  const running = streaming && !approval && !failed && !denied && !done
  const icon = answered ? (
    answered.approved ? <Check size={18} /> : <X size={18} />
  ) : approval ? (
    <ShieldQuestion size={18} />
  ) : failed ? (
    <TriangleAlert size={18} />
  ) : denied ? (
    <X size={18} />
  ) : done ? (
    <Check size={18} />
  ) : running ? (
    <PixelLoader size={16} decorative />
  ) : streaming ? (
    <Wrench size={18} />
  ) : (
    <CircleDashed size={18} />
  )
  const status = answered
    ? answered.approved
      ? t('m.chat.tool.approved')
      : t('m.chat.tool.denied')
    : approval
      ? t('m.chat.tool.needsApproval')
      : failed
        ? t('m.chat.tool.failed')
        : denied
          ? t('m.chat.tool.denied')
          : done
            ? t('m.chat.tool.done')
            : running
              ? t('m.chat.tool.running')
              : t('m.chat.tool.stopped')
  return (
    <ChatToolCard attention={approval && !answered ? 'approval' : failed ? 'error' : undefined} icon={icon} title={toolTitle(part)} detail={argsSummary(part.input) || undefined} status={status}>
      {failed ? <p className="fm-tool-error">{t('m.chat.tool.failedHint')}</p> : null}
      {approval ? (
        <ChatApprovalRequest
          key={approval.id}
          input={part.input}
          onAnswer={async (approved) => {
            await onAnswer(approval.id, approved)
            setDecision({ id: approval.id, approved })
          }}
        />
      ) : null}
      <ToolDetails part={part} />
    </ChatToolCard>
  )
}
