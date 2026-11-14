import { useMemo, useState } from 'react'
import { ArrowDown, LogIn, ShieldQuestion, Sparkles } from 'lucide-react'
import { Button } from '@feeef.dev/ui/primitives/button'
import { PixelLoader } from '@feeef.dev/ui/pixel-art'
import { useAssistant } from '@/app/assistant'
import { useSession } from '@/app/session'
import { EmptyState, ErrorState } from '@/components/ui/data'
import { t } from '@/i18n/locale'
import { ChatComposer } from './composer'
import { ChatMessageView, type MessageActions } from './message'
import { textOf } from './reduce'
import { useStickToBottom } from './stick-to-bottom'
import type { ChatMessage } from './types'
import './chat.css'

const SUGGESTIONS = [1, 2, 3, 4, 5, 6] as const

/** One chat surface's local state: the draft and the thread's stick-to-bottom. */
export function useChatSurface() {
  const { activeId } = useAssistant()
  const [prompt, setPrompt] = useState('')
  // A state ref: the thread mounts later than the surface (a sheet opens), and the scroll
  // viewport is found from it.
  const [content, setContent] = useState<HTMLDivElement | null>(null)
  const scroll = useStickToBottom(content, activeId)
  return { prompt, setPrompt, setContent, scroll }
}
export type ChatSurface = ReturnType<typeof useChatSurface>

function useActions(): MessageActions {
  const { busy, applied, answer, undoView, redoView, applyView, send, reconnect, messages } = useAssistant()
  return useMemo(
    () => ({
      busy,
      applied,
      onAnswer: answer,
      onUndo: undoView,
      onRedo: redoView,
      onOpenView: applyView,
      onReconnect: reconnect,
      onRetry: (message: ChatMessage) => {
        const index = messages.findIndex((m) => m.id === message.id)
        const question = [...messages.slice(0, index)].reverse().find((m) => m.role === 'user')
        if (question) void send(textOf(question.parts))
      },
    }),
    [busy, applied, answer, undoView, redoView, applyView, reconnect, send, messages],
  )
}

/** The conversation (or its welcome with suggestions). Signed-out people see how to sign in. */
export function ChatThread({ surface, compact = false }: { surface: ChatSurface; compact?: boolean }) {
  const { user, signIn } = useSession()
  const { messages, opening, openError, activeId, open, send, busy } = useAssistant()
  const actions = useActions()
  let body
  if (user === null)
    body = (
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
  else if (opening) body = <div className="fm-chat-loading" role="status"><PixelLoader size={24} label={t('m.chat.history.opening')} /></div>
  else if (openError) body = <ErrorState title={t('m.chat.history.openFailed')} message={openError} onRetry={activeId ? () => void open(activeId) : undefined} />
  else if (!messages.length)
    body = (
      <div className="fm-chat-welcome" data-compact={compact || undefined}>
        <Sparkles size={22} aria-hidden />
        <h2>{t('m.chat.intro.title')}</h2>
        <p>{t('m.chat.intro.body')}</p>
        <ul className="fm-chat-suggestions" aria-label={t('m.chat.suggestions')}>
          {SUGGESTIONS.map((n) => {
            const text = t(`m.chat.suggest.${n}`)
            return (
              <li key={n}>
                <Button variant="outlined" controlSize="small" disabled={busy || !user} onClick={() => void send(text)}>
                  <bdi>{text}</bdi>
                </Button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  else
    body = (
      <div className="fm-thread" aria-live="polite">
        {messages.map((m, i) => (
          <ChatMessageView key={m.id} message={m} actions={actions} latest={i === messages.length - 1} />
        ))}
      </div>
    )
  return (
    <div ref={surface.setContent} className="fm-chat" data-compact={compact || undefined}>
      {body}
    </div>
  )
}

/** Above the composer: "Jump to latest" or "Waiting for your approval", then the composer. */
export function ChatBottom({ surface, compact = false }: { surface: ChatSurface; compact?: boolean }) {
  const { messages } = useAssistant()
  const { user } = useSession()
  const waiting = messages.some((m) => m.status === 'streaming' && m.parts.some((p) => p.type === 'dynamic-tool' && p.state === 'approval-requested'))
  if (user === null) return null
  return (
    <div className="fm-chat-bottom" data-compact={compact || undefined}>
      {surface.scroll.away && messages.length ? (
        <Button variant={waiting ? 'tonal' : 'elevated'} controlSize="small" className="fm-chat-jump" onClick={() => surface.scroll.stick(true)}>
          {waiting ? <ShieldQuestion size={16} aria-hidden /> : <ArrowDown size={16} aria-hidden />}
          {waiting ? t('m.chat.waitingApproval') : t('m.chat.jump')}
        </Button>
      ) : null}
      <ChatComposer prompt={surface.prompt} setPrompt={surface.setPrompt} compact={compact} />
    </div>
  )
}
