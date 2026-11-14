import { memo, useState } from 'react'
import { Check, Copy, RefreshCw, RotateCcw, SlidersHorizontal, TriangleAlert, Undo2 } from 'lucide-react'
import { Button, IconButton } from '@feeef.dev/ui/primitives/button'
import type { AppliedView } from '@/app/assistant'
import { t } from '@/i18n/locale'
import { ChatActivityGroup, blockKey, contentBlocks } from './activity'
import { FirmsCardView } from './cards'
import { ChatMarkdown } from './markdown'
import { textDirection } from './markdown-core'
import { textOf } from './reduce'
import { ChatToolAction } from './tool-card'
import type { ChatMessage, FirmsCard, FirmsView, MessagePart } from './types'
import { useViewSummary } from './view'

/** Ported from feeef Lab `message.tsx` (AssistantParts + ChatMessageView), with Firms parts. */

export type MessageActions = {
  busy: boolean
  applied: Record<string, AppliedView>
  onAnswer: (message: ChatMessage, inputId: string, approved: boolean) => Promise<void>
  onUndo: (key: string) => void
  onRedo: (key: string, view: FirmsView) => void
  onOpenView: (view: FirmsView) => void
  onRetry: (message: ChatMessage) => void
  onReconnect: (message: ChatMessage) => void
}

function CopyAction({ text }: { text: string }) {
  const [done, setDone] = useState(false)
  return (
    <IconButton
      variant="ghost"
      appearance="toolbar"
      controlSize="small"
      aria-label={done ? t('m.common.copied') : t('m.chat.copy')}
      title={t('m.chat.copy')}
      disabled={!text}
      onClick={() =>
        void navigator.clipboard?.writeText(text).then(() => {
          setDone(true)
          window.setTimeout(() => setDone(false), 1500)
        })
      }
    >
      {done ? <Check /> : <Copy />}
    </IconButton>
  )
}

/** "Applied: Portugal · 2025 · Overview" with Undo (live) or Apply again (history). */
function AppliedLine({ view, entry, onUndo, onRedo }: { view: FirmsView; entry: AppliedView | undefined; onUndo: () => void; onRedo: () => void }) {
  const summary = useViewSummary()(view)
  const undone = entry?.undone ?? false
  return (
    <p className="fm-applied" role="status" data-undone={undone || undefined}>
      <SlidersHorizontal size={14} aria-hidden />
      <span className="fm-applied-label">{undone ? t('m.chat.view.undone') : entry ? t('m.chat.view.applied') : t('m.chat.view.suggested')}</span>
      <bdi>{summary}</bdi>
      {entry && !undone ? (
        <Button variant="text" controlSize="small" onClick={onUndo}>
          <Undo2 size={14} aria-hidden className="lab-dir-flip" />
          {t('m.chat.view.undo')}
        </Button>
      ) : (
        <Button variant="text" controlSize="small" onClick={onRedo}>
          <RotateCcw size={14} aria-hidden className="lab-dir-flip" />
          {entry ? t('m.chat.view.again') : t('m.chat.view.apply')}
        </Button>
      )}
    </p>
  )
}

export function AssistantParts({ message, parts, streaming, actions }: { message: ChatMessage; parts: MessagePart[]; streaming: boolean; actions: MessageActions }) {
  const visible = parts.filter((p) => p.type !== 'step-start' && !(p.type.startsWith('data-') && p.type !== 'data-firms-view' && p.type !== 'data-firms-card'))
  const onAnswer = (inputId: string, approved: boolean) => actions.onAnswer(message, inputId, approved)
  if (!visible.length && streaming)
    return (
      <div className="fm-typing" role="status" aria-label={t('m.chat.thinking')}>
        <span />
        <span />
        <span />
      </div>
    )
  let views = 0
  return (
    <>
      {contentBlocks(visible).map((block, index) => {
        const key = blockKey(block, index)
        switch (block.type) {
          case 'text':
            return block.text ? <ChatMarkdown key={key} text={block.text} streaming={streaming && block.state !== 'done'} /> : null
          case 'activity':
            return <ChatActivityGroup key={key} parts={block.parts} streaming={streaming} onAnswer={onAnswer} />
          case 'reasoning':
          case 'step-start':
            return null
          case 'dynamic-tool':
            return <ChatToolAction key={key} part={block} streaming={streaming} onAnswer={onAnswer} />
          default: {
            if (block.type === 'data-firms-view') {
              const view = block.data as FirmsView
              const viewKey = `${message.id}:${views++}`
              if (!view || typeof view !== 'object') return null
              return <AppliedLine key={key} view={view} entry={actions.applied[viewKey]} onUndo={() => actions.onUndo(viewKey)} onRedo={() => actions.onRedo(viewKey, view)} />
            }
            if (block.type === 'data-firms-card') {
              const card = block.data as FirmsCard
              if (!card || typeof card !== 'object' || !card.kind) return null
              return <FirmsCardView key={key} card={card} onOpen={actions.onOpenView} />
            }
            return null
          }
        }
      })}
    </>
  )
}

export const ChatMessageView = memo(function ChatMessageView({ message, actions, latest }: { message: ChatMessage; actions: MessageActions; latest: boolean }) {
  const streaming = message.status === 'streaming'
  const text = textOf(message.parts)
  if (message.role === 'user')
    return (
      <article className="fm-msg" data-role="user" aria-label={t('m.chat.you')}>
        <div className="fm-bubble" dir={textDirection(text)}>
          <bdi>{text}</bdi>
        </div>
      </article>
    )
  const lost = message.status === 'failed' && message.error === t('m.chat.streamLost') && message.runId
  return (
    <article className="fm-msg" data-role="assistant" aria-label={t('m.chat.assistant')} aria-busy={streaming}>
      <AssistantParts message={message} parts={message.parts} streaming={streaming} actions={actions} />
      {message.status === 'failed' ? (
        <p className="fm-msg-error" role="alert">
          <TriangleAlert size={16} aria-hidden />
          <span>{message.error || t('m.chat.replyFailed')}</span>
          {latest ? (
            lost ? (
              <Button variant="tonal" controlSize="small" disabled={actions.busy} onClick={() => actions.onReconnect(message)}>
                <RefreshCw size={16} aria-hidden />
                {t('m.chat.reconnect')}
              </Button>
            ) : (
              <Button variant="tonal" controlSize="small" disabled={actions.busy} onClick={() => actions.onRetry(message)}>
                <RefreshCw size={16} aria-hidden />
                {t('m.common.tryAgain')}
              </Button>
            )
          ) : null}
        </p>
      ) : null}
      {message.status === 'stopped' ? <p className="fm-msg-note">{t('m.chat.stopped')}</p> : null}
      {!streaming && text ? (
        <div className="fm-msg-actions">
          <CopyAction text={text} />
        </div>
      ) : null}
    </article>
  )
})
