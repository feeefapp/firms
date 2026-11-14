/**
 * Fold UI message stream chunks into message parts. Ported from feeef Lab's `reduce.ts` (same
 * semantics as the AI SDK and the server's stored messages): live and stored views agree.
 */
import type { Chunk, MessagePart, ToolPart } from './types'

/**
 * Incremental fold for live streams: `push` applies one chunk, `snapshot` returns a new parts
 * array where only parts touched since the previous snapshot are new objects, so memoized views of
 * untouched parts skip re-rendering.
 */
export function createChunkFolder(initial: MessagePart[] = []) {
  const parts: MessagePart[] = initial.map((p) => ({ ...p }) as MessagePart)
  const open = new Map<string, number>()
  const tools = new Map<string, number>()
  const dataIds = new Map<string, number>()
  parts.forEach((p, i) => {
    if (p.type === 'dynamic-tool' && !tools.has(p.toolCallId)) tools.set(p.toolCallId, i)
    const id = (p as { id?: string }).id
    if (p.type.startsWith('data-') && id && !dataIds.has(`${p.type}\u0000${id}`)) dataIds.set(`${p.type}\u0000${id}`, i)
  })
  let fresh = new Set<number>(parts.map((_, i) => i))
  const add = (part: MessagePart) => {
    const index = parts.push(part) - 1
    fresh.add(index)
    return index
  }
  /** Copy-on-write: the first change after a snapshot clones the part. */
  const touch = <T extends MessagePart>(index: number): T => {
    if (!fresh.has(index)) {
      parts[index] = { ...parts[index]! } as MessagePart
      fresh.add(index)
    }
    return parts[index] as T
  }
  const tool = (id: string) => {
    const index = tools.get(id)
    return index === undefined ? undefined : touch<ToolPart>(index)
  }
  const closeOpen = () => {
    for (const index of open.values()) (touch(index) as { state?: string }).state = 'done'
    open.clear()
  }
  const push = (c: Chunk) => {
    switch (c.type) {
      case 'start-step':
        add({ type: 'step-start' })
        break
      case 'text-start':
      case 'reasoning-start': {
        const kind = c.type === 'text-start' ? 'text' : 'reasoning'
        open.set(`${kind}:${c.id}`, add({ type: kind, text: '', state: 'streaming' }))
        break
      }
      case 'text-delta':
      case 'reasoning-delta': {
        const kind = c.type === 'text-delta' ? 'text' : 'reasoning'
        let index = open.get(`${kind}:${c.id}`)
        if (index === undefined) open.set(`${kind}:${c.id}`, (index = add({ type: kind, text: '', state: 'streaming' })))
        touch<{ type: 'text'; text: string }>(index).text += c.delta
        break
      }
      case 'text-end':
      case 'reasoning-end': {
        const key = `${c.type === 'text-end' ? 'text' : 'reasoning'}:${c.id}`
        const index = open.get(key)
        if (index !== undefined) (touch(index) as { state?: string }).state = 'done'
        open.delete(key)
        break
      }
      case 'tool-input-start':
        if (!tools.has(c.toolCallId))
          tools.set(
            c.toolCallId,
            add({ type: 'dynamic-tool', toolName: c.toolName, toolCallId: c.toolCallId, state: 'input-streaming', inputText: '', ...(c.title ? { title: c.title } : {}) }),
          )
        break
      case 'tool-input-delta': {
        const t = tool(c.toolCallId)
        if (t) t.inputText = (t.inputText ?? '') + c.inputTextDelta
        break
      }
      case 'tool-input-available':
      case 'tool-input-error': {
        let t = tool(c.toolCallId)
        if (!t) {
          t = { type: 'dynamic-tool', toolName: c.toolName, toolCallId: c.toolCallId, state: 'input-available' }
          tools.set(c.toolCallId, add(t))
        }
        t.toolName = c.toolName
        if (c.type === 'tool-input-available' && c.title) t.title = c.title
        t.input = c.input
        delete t.inputText
        if (c.type === 'tool-input-error') {
          t.state = 'output-error'
          t.errorText = c.errorText
        } else t.state = 'input-available'
        break
      }
      case 'tool-approval-request': {
        const t = tool(c.toolCallId)
        if (t) {
          t.state = 'approval-requested'
          t.approval = { id: c.approvalId }
        }
        break
      }
      case 'tool-approval-response': {
        const t = tool(c.toolCallId)
        if (t) {
          t.state = 'approval-responded'
          t.approval = { id: c.approvalId, approved: c.approved, ...(c.reason ? { reason: c.reason } : {}) }
        }
        break
      }
      case 'tool-output-available': {
        const t = tool(c.toolCallId)
        if (t) {
          t.state = 'output-available'
          t.output = c.output
        }
        break
      }
      case 'tool-output-error': {
        const t = tool(c.toolCallId)
        if (t) {
          t.state = 'output-error'
          t.errorText = c.errorText
        }
        break
      }
      case 'tool-output-denied': {
        const t = tool(c.toolCallId)
        if (t) t.state = 'output-denied'
        break
      }
      case 'finish':
      case 'abort':
      case 'error':
        closeOpen()
        break
      default:
        if (typeof c.type === 'string' && c.type.startsWith('data-') && !(c as { transient?: boolean }).transient) {
          const d = c as { type: `data-${string}`; id?: string; data: unknown }
          const part = { type: d.type, ...(d.id ? { id: d.id } : {}), data: d.data } as MessagePart
          const key = d.id ? `${d.type}\u0000${d.id}` : null
          const existing = key ? dataIds.get(key) : undefined
          if (existing !== undefined) {
            parts[existing] = part
            fresh.add(existing)
          } else {
            const index = add(part)
            if (key) dataIds.set(key, index)
          }
        }
    }
  }
  return {
    push,
    /** Marks streaming text and reasoning as done (a stopped or failed reply). */
    settle: closeOpen,
    snapshot(): MessagePart[] {
      fresh = new Set()
      return parts.slice()
    },
  }
}

/** Fold a whole chunk list (stored replays, the dev mock). */
export function reduceChunks(chunks: Iterable<Chunk>, initial: MessagePart[] = []): MessagePart[] {
  const folder = createChunkFolder(initial)
  for (const chunk of chunks) folder.push(chunk)
  return folder.snapshot()
}

/** Plain text of a message's text parts. */
export function textOf(parts: readonly MessagePart[]): string {
  return parts
    .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
    .map((p) => p.text)
    .join('\n\n')
}
