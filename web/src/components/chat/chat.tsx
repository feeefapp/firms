import { useEffect, useRef, useState } from 'react'
import { Check, CircleAlert, LogIn, SlidersHorizontal, Sparkles, Trash2, Wrench } from 'lucide-react'
import { Button } from '@feeef.dev/ui/primitives/button'
import { PixelLoader } from '@feeef.dev/ui/pixel-art'
import { PromptComposer } from '@feeef.dev/ui/composer/composer'
import { useAssistant, type ApplyPatch, type ChatMessage } from '@/app/assistant'
import { useSession } from '@/app/session'
import { EmptyState, FormError } from '@/components/ui/data'
import { t } from '@/i18n/locale'
import './chat.css'

function patchSummary(patch: ApplyPatch): string {
  const parts: string[] = []
  if (patch.region) parts.push(t('m.chat.applied.region', { region: patch.region }))
  if (patch.from || patch.to) parts.push(t('m.chat.applied.range', { from: patch.from ?? '…', to: patch.to ?? '…' }))
  if (patch.algorithm) parts.push(t('m.chat.applied.algorithm', { algorithm: patch.algorithm }))
  if (patch.view) parts.push(t(patch.view === 'anomaly' ? 'm.view.anomaly' : 'm.view.count'))
  if (patch.bbox) parts.push(t('m.chat.applied.bbox'))
  if (patch.page) parts.push(t('m.chat.applied.page', { page: patch.page }))
  return parts.join(' · ') || t('m.chat.applied.none')
}

function Message({ message }: { message: ChatMessage }) {
  return (
    <li className="fm-chat-msg" data-role={message.role}>
      {message.steps.length ? (
        <ul className="fm-chat-steps" aria-label={t('m.chat.steps')}>
          {message.steps.map((step) => (
            <li key={step.id} data-state={!step.done ? 'running' : step.ok === false ? 'failed' : 'done'}>
              {!step.done ? <PixelLoader size={14} decorative /> : step.ok === false ? <CircleAlert size={14} aria-hidden /> : <Wrench size={14} aria-hidden />}
              <code dir="ltr">{step.name}</code>
              {step.summary ? <span className="fm-chat-step-summary">{step.summary}</span> : null}
            </li>
          ))}
        </ul>
      ) : null}
      {message.text ? <div className="fm-chat-bubble"><bdi>{message.text}</bdi></div> : null}
      {message.pending && !message.text ? (
        <div className="fm-chat-thinking" role="status">
          <PixelLoader size={16} decorative />
          {t('m.chat.thinking')}
        </div>
      ) : null}
      {message.applied?.map((patch, i) => (
        <div key={i} className="fm-chat-applied">
          <SlidersHorizontal size={14} aria-hidden />
          <span>{t('m.chat.appliedLabel')}</span>
          <bdi>{patchSummary(patch)}</bdi>
          <Check size={14} aria-hidden />
        </div>
      ))}
      {message.error ? <FormError>{message.error}</FormError> : null}
    </li>
  )
}

/** The assistant thread and its composer. Signed-out people see why and how to sign in. */
export function Chat({ compact = false }: { compact?: boolean }) {
  const { user, signIn } = useSession()
  const { messages, busy, send, stop, clear } = useAssistant()
  const [prompt, setPrompt] = useState('')
  const end = useRef<HTMLDivElement>(null)
  useEffect(() => {
    end.current?.scrollIntoView({ block: 'end' })
  }, [messages])

  if (user === null) {
    return (
      <EmptyState
        icon={<Sparkles size={20} />}
        title={t('m.chat.signedOut.title')}
        description={t('m.chat.signedOut.body')}
        action={
          <Button variant="filled" onClick={() => signIn()}>
            <LogIn aria-hidden className="lab-dir-flip" />
            {t('m.login.action')}
          </Button>
        }
      />
    )
  }

  const suggestions = [t('m.chat.suggest.1'), t('m.chat.suggest.2'), t('m.chat.suggest.3')]
  const submit = (text = prompt) => {
    if (!text.trim() || busy) return
    setPrompt('')
    void send(text)
  }
  return (
    <div className="fm-chat" data-compact={compact || undefined}>
      {messages.length ? (
        <ol className="fm-chat-list" aria-live="polite">
          {messages.map((m) => (
            <Message key={m.id} message={m} />
          ))}
        </ol>
      ) : (
        <div className="fm-chat-intro">
          <Sparkles size={20} aria-hidden />
          <h2>{t('m.chat.intro.title')}</h2>
          <p>{t('m.chat.intro.body')}</p>
          <div className="fm-chat-suggestions">
            {suggestions.map((s) => (
              <Button key={s} variant="outlined" controlSize="small" onClick={() => submit(s)}>
                {s}
              </Button>
            ))}
          </div>
        </div>
      )}
      <div ref={end} />
      <div className="fm-chat-composer">
        <PromptComposer
          label={t('m.chat.label')}
          placeholder={t('m.chat.placeholder')}
          value={prompt}
          onValueChange={setPrompt}
          onSubmit={() => submit()}
          busy={busy}
          onStop={stop}
          submitLabel={t('m.chat.send')}
          stopLabel={t('m.chat.stop')}
          maxLength={2000}
          actions={
            messages.length ? (
              <Button variant="ghost" controlSize="icon" aria-label={t('m.chat.clear')} onClick={clear} disabled={busy}>
                <Trash2 />
              </Button>
            ) : undefined
          }
          footer={<p className="fm-chat-footer">{t('m.chat.footer')}</p>}
        />
      </div>
    </div>
  )
}
