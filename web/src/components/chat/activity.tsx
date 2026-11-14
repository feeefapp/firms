import { useEffect, useState } from 'react'
import { Brain, Check, ChevronDown } from 'lucide-react'
import { PixelLoader } from '@feeef.dev/ui/pixel-art'
import { t } from '@/i18n/locale'
import { textDirection } from './markdown-core'
import { ChatToolAction, toolSettled, toolTitle } from './tool-card'
import type { MessagePart, ReasoningPart, ToolPart } from './types'

/** Ported from feeef Lab `activity.tsx` / `activity-model.ts`: quiet work grouped, decisions in the open. */

export type ActivityPart = ReasoningPart | ToolPart
export type ActivityBlock = { type: 'activity'; parts: ActivityPart[] }
export type ContentBlock = MessagePart | ActivityBlock

/** Approvals and failures stay visible; reasoning and quiet tool calls are grouped in order. */
export function contentBlocks(parts: readonly MessagePart[]): ContentBlock[] {
  const blocks: ContentBlock[] = []
  for (const part of parts) {
    const quiet = part.type === 'reasoning' || (part.type === 'dynamic-tool' && !['approval-requested', 'output-error'].includes(part.state))
    const previous = blocks.at(-1)
    if (quiet) {
      if (previous?.type === 'activity') previous.parts.push(part as ActivityPart)
      else blocks.push({ type: 'activity', parts: [part as ActivityPart] })
    } else blocks.push(part)
  }
  return blocks
}

export function blockKey(block: ContentBlock, index: number): string {
  if (block.type === 'activity') {
    const first = block.parts.find((p): p is ToolPart => p.type === 'dynamic-tool')
    return first ? `activity:${first.toolCallId}` : `activity@${index}`
  }
  if (block.type === 'dynamic-tool') return `tool:${block.toolCallId}`
  const id = (block as { id?: unknown }).id
  if (block.type.startsWith('data-') && typeof id === 'string') return `${block.type}:${id}`
  return `${block.type}@${index}`
}

const countWords = (text: string) => text.match(/[\p{L}\p{N}]+/gu)?.length ?? 0

/** Words the stream delivered so far and its latest planning line: proof it is moving. */
function liveProgress(parts: readonly ActivityPart[]) {
  let words = 0
  let note = ''
  for (const part of parts) {
    if (part.type === 'reasoning') {
      words += countWords(part.text)
      const line = part.text
        .split('\n')
        .map((l) => l.replace(/^[#>*\-\s]+|\*\*/g, '').trim())
        .filter(Boolean)
        .at(-1)
      if (line) note = line
    } else words += countWords(part.inputText ?? (part.input === undefined ? '' : JSON.stringify(part.input)))
  }
  return { words, note: note.slice(0, 220) }
}

function Elapsed() {
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const start = performance.now()
    const timer = window.setInterval(() => setSeconds(Math.floor((performance.now() - start) / 1000)), 1000)
    return () => window.clearInterval(timer)
  }, [])
  return (
    <small className="fm-activity-meta" aria-label={t('m.chat.activity.elapsed')}>
      <span dir="ltr">
        {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}
      </span>
    </small>
  )
}

export function ChatActivityGroup({ parts, streaming, onAnswer }: { parts: ActivityPart[]; streaming: boolean; onAnswer: (inputId: string, approved: boolean) => Promise<void> }) {
  const tools = parts.filter((part): part is ToolPart => part.type === 'dynamic-tool')
  const running = streaming && parts.some((part) => (part.type === 'reasoning' ? part.state !== 'done' : !toolSettled(part)))
  const live = liveProgress(parts)
  const activeTool = [...tools].reverse().find((part) => !toolSettled(part))
  const liveNote = live.note || (activeTool ? t('m.chat.activity.using', { tool: toolTitle(activeTool) }) : '')
  const [open, setOpen] = useState(false)
  const label = running
    ? t('m.chat.activity.working')
    : tools.length === 1
      ? toolTitle(tools[0])
      : tools.length
        ? t('m.chat.activity.used', { count: tools.length })
        : t('m.chat.activity.thought')
  return (
    <div className="fm-activity-group">
      <details className="fm-activity" data-running={running || undefined} onToggle={(event) => setOpen(event.currentTarget.open)}>
        <summary>
          <span className="fm-activity-status" aria-hidden="true">
            {running ? <PixelLoader size={18} decorative /> : tools.length ? <Check size={16} /> : <Brain size={16} />}
          </span>
          <span>{label}</span>
          {running ? <Elapsed /> : null}
          {running && live.words > 0 ? (
            <small className="fm-activity-meta" aria-live="off">
              · {t('m.chat.activity.words', { count: live.words })}
            </small>
          ) : null}
          <ChevronDown size={16} aria-hidden />
        </summary>
        <div className="fm-activity-body">
          {parts.map((part, index) =>
            part.type === 'dynamic-tool' ? (
              <ChatToolAction key={part.toolCallId} part={part} streaming={streaming} onAnswer={onAnswer} />
            ) : part.text ? (
              <details key={`reasoning-${index}`} className="fm-activity-reasoning" open={streaming && part.state !== 'done'}>
                <summary>
                  <Brain size={16} aria-hidden />
                  {t('m.chat.activity.reasoning')}
                </summary>
                <p dir={textDirection(part.text)}>{part.text}</p>
              </details>
            ) : null,
          )}
        </div>
      </details>
      {/* The latest planning line, live, while the group is collapsed. */}
      {running && !open && liveNote ? (
        <p className="fm-activity-live" dir={textDirection(liveNote)}>
          <Brain size={14} aria-hidden="true" />
          <span>{liveNote}</span>
        </p>
      ) : null}
    </div>
  )
}
