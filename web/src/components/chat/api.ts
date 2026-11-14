/**
 * The in-app agent API (docs/AGENT_MCP.md §4): model catalog, conversations, streamed turns
 * (AI SDK UI message stream v1 over SSE), resumable runs and approvals. Same-origin with the
 * session cookie; unsafe methods carry the page's Origin (the server's CSRF check).
 */
import { ApiError, get } from '@/lib/api'
import type { LadderStop } from '@feeef.dev/ui/model-ladder'
import type { ChatMessage, Chunk, ConversationSummary, MessagePart } from './types'

const asRecord = (v: unknown): Record<string, unknown> => (v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : {})
const str = (v: unknown): string | null => (typeof v === 'string' && v ? v : typeof v === 'number' ? String(v) : null)

async function call<T>(method: string, path: string, body?: unknown, headers?: Record<string, string>): Promise<T> {
  let response: Response
  try {
    response = await fetch(path, {
      method,
      credentials: 'same-origin',
      headers: { accept: 'application/json', ...(body === undefined ? {} : { 'content-type': 'application/json' }), ...headers },
      body: body === undefined ? undefined : JSON.stringify(body),
    })
  } catch {
    throw new ApiError(0, 'network')
  }
  if (!response.ok) throw await failure(response)
  if (response.status === 204) return undefined as T
  const text = await response.text()
  return (text ? JSON.parse(text) : undefined) as T
}

async function failure(response: Response): Promise<ApiError> {
  let message = `HTTP ${response.status}`
  try {
    const body = asRecord(await response.json())
    message = str(body.error) ?? str(body.message) ?? str(asRecord(body.error).message) ?? message
  } catch {
    // keep the status line
  }
  return new ApiError(response.status, message)
}

// ---------------------------------------------------------------- catalog

export type CatalogModel = { id: string; name: string; vision?: boolean; reasoning?: boolean }
export type Catalog = {
  stops: LadderStop[]
  defaultIndex: number
  models: CatalogModel[]
  free?: boolean
  aiAvailable: boolean
  reason: string | null
}

export async function fetchCatalog(signal?: AbortSignal): Promise<Catalog> {
  const raw = asRecord(await get<unknown>('/api/ai/catalog', signal))
  const ladder = asRecord(raw.ladder)
  const stops: LadderStop[] = (Array.isArray(ladder.stops) ? ladder.stops : []).flatMap((s) => {
    const r = asRecord(s)
    const modelId = str(r.modelId ?? r.model_id ?? r.id)
    if (!modelId) return []
    return [
      {
        modelId,
        label: str(r.label) ?? modelId,
        modelName: str(r.modelName ?? r.model_name ?? r.name) ?? modelId,
        description: str(r.description),
        ...(r.access === 'free' || r.access === 'pro' ? { access: r.access } : {}),
        ...(typeof (r.priceUsd ?? r.price_usd) === 'number' ? { priceUsd: (r.priceUsd ?? r.price_usd) as number } : {}),
      },
    ]
  })
  const models: CatalogModel[] = (Array.isArray(raw.models) ? raw.models : []).flatMap((m) => {
    const r = asRecord(m)
    const id = str(r.id)
    return id ? [{ id, name: str(r.name) ?? id, vision: r.vision === true, reasoning: r.reasoning === true }] : []
  })
  const index = Number(ladder.defaultIndex ?? ladder.default_index)
  return {
    stops,
    defaultIndex: Number.isFinite(index) ? Math.max(0, Math.min(stops.length - 1, index)) : Math.floor((stops.length - 1) / 2),
    models,
    free: raw.free === true,
    aiAvailable: raw.ai_available !== false && raw.aiAvailable !== false,
    reason: str(raw.reason),
  }
}

// ---------------------------------------------------------------- conversations

function summaryOf(value: unknown): ConversationSummary | null {
  const r = asRecord(value)
  const id = str(r.id)
  if (!id) return null
  return { id, title: str(r.title) ?? '', updatedAt: str(r.updated_at ?? r.updatedAt ?? r.created_at ?? r.createdAt) }
}

function partsOf(value: Record<string, unknown>): MessagePart[] {
  if (Array.isArray(value.parts)) return value.parts as MessagePart[]
  const text = str(value.content ?? value.text)
  return text ? [{ type: 'text', text, state: 'done' }] : []
}

function messageOf(value: unknown): ChatMessage | null {
  const r = asRecord(value)
  const id = str(r.id)
  const role = r.role === 'user' || r.role === 'assistant' ? r.role : null
  if (!id || !role) return null
  const status = str(r.status)
  return {
    id,
    role,
    parts: partsOf(r),
    status: status === 'failed' || status === 'error' ? 'failed' : status === 'cancelled' || status === 'stopped' ? 'stopped' : status === 'streaming' || status === 'running' ? 'streaming' : 'done',
    error: str(r.error) ?? undefined,
    runId: str(r.run_id ?? r.runId),
    createdAt: str(r.created_at ?? r.createdAt) ?? undefined,
  }
}

export type Conversation = ConversationSummary & { messages: ChatMessage[]; activeRun: string | null }

export const agentApi = {
  async conversations(): Promise<ConversationSummary[]> {
    const raw = await get<unknown>('/api/agent/conversations')
    const list = Array.isArray(raw) ? raw : (asRecord(raw).conversations ?? asRecord(raw).items ?? asRecord(raw).data)
    return (Array.isArray(list) ? list : []).map(summaryOf).filter((c): c is ConversationSummary => c !== null)
  },
  async create(title?: string): Promise<ConversationSummary> {
    const raw = await call<unknown>('POST', '/api/agent/conversations', title ? { title } : {})
    const summary = summaryOf(asRecord(raw).conversation ?? raw)
    if (!summary) throw new ApiError(500, 'no conversation id')
    return summary
  },
  async get(id: string): Promise<Conversation> {
    const raw = asRecord(await get<unknown>(`/api/agent/conversations/${encodeURIComponent(id)}`))
    const body = raw.conversation ? { ...asRecord(raw.conversation), messages: raw.messages ?? asRecord(raw.conversation).messages } : raw
    const summary = summaryOf(body) ?? { id, title: '' }
    const r = asRecord(body)
    const activeRun = str(r.active_run ?? r.activeRun ?? asRecord(r.active_run).id)
    return {
      ...summary,
      messages: (Array.isArray(r.messages) ? r.messages : []).map(messageOf).filter((m): m is ChatMessage => m !== null),
      activeRun,
    }
  },
  remove: (id: string) => call<void>('DELETE', `/api/agent/conversations/${encodeURIComponent(id)}`),
  /** Starts a turn; the response is the run's SSE stream. */
  async send(id: string, body: TurnBody, idempotencyKey: string, signal: AbortSignal): Promise<Response> {
    let response: Response
    try {
      response = await fetch(`/api/agent/conversations/${encodeURIComponent(id)}/messages`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'content-type': 'application/json', accept: 'text/event-stream', 'Idempotency-Key': idempotencyKey },
        body: JSON.stringify(body),
        signal,
      })
    } catch (error) {
      if (signal.aborted) throw error
      throw new ApiError(0, 'network')
    }
    if (!response.ok) throw await failure(response)
    return response
  },
  /** Re-opens a run's stream after `after` (the last `id:` seen). */
  async events(run: string, after: number, signal: AbortSignal): Promise<Response> {
    const response = await fetch(`/api/agent/runs/${encodeURIComponent(run)}/events?after=${after}`, {
      credentials: 'same-origin',
      headers: { accept: 'text/event-stream' },
      signal,
    })
    if (!response.ok) throw await failure(response)
    return response
  },
  answer: (run: string, inputId: string, approved: boolean) => call<unknown>('POST', `/api/agent/runs/${encodeURIComponent(run)}/inputs`, { input_id: inputId, approved }),
}

export type TurnBody = {
  text: string
  model?: string
  reasoning_effort?: 'low' | 'medium' | 'high'
  context: { page: string; region: string | null; from: string | null; to: string | null; algorithm: string | null; bbox: number[] | null }
}

/** The run id of a turn: a response header, or the `start` chunk's metadata, or a `data-firms-run` chunk. */
export function runIdFromHeaders(response: Response): string | null {
  return response.headers.get('x-firms-run') ?? response.headers.get('x-run-id') ?? response.headers.get('x-agent-run')
}
export function runIdFromChunk(chunk: Chunk): string | null {
  if (chunk.type === 'start') {
    const meta = asRecord(chunk.messageMetadata)
    return str(meta.run_id ?? meta.runId ?? meta.run)
  }
  if (chunk.type === 'data-firms-run') {
    const d = asRecord((chunk as { data: unknown }).data)
    return str(d.run_id ?? d.runId ?? d.id ?? d.run)
  }
  return null
}

/**
 * Reads an SSE body of UI message stream frames (`id: <seq>`, `event: <type>`, `data: <json>`)
 * incrementally (Lab's `readChunks`). Resolves `finished` on `data: [DONE]`, `ended` when the body
 * closes. Malformed frames are skipped.
 */
export async function readChunks(response: Response, onChunk: (chunk: Chunk, id: number | null) => void, signal?: AbortSignal): Promise<'finished' | 'ended'> {
  if (!response.body) return 'ended'
  const reader = response.body.getReader()
  signal?.addEventListener('abort', () => void reader.cancel().catch(() => {}), { once: true })
  const decoder = new TextDecoder()
  let buffer = ''
  for (;;) {
    const { value, done } = await reader.read()
    if (done) return 'ended'
    buffer = (buffer + decoder.decode(value, { stream: true })).replace(/\r\n/g, '\n')
    let end: number
    while ((end = buffer.indexOf('\n\n')) !== -1) {
      const frame = buffer.slice(0, end)
      buffer = buffer.slice(end + 2)
      let id: number | null = null
      let event: string | null = null
      const data: string[] = []
      for (const line of frame.split('\n')) {
        if (line.startsWith('id:')) id = Number(line.slice(3).trim())
        else if (line.startsWith('event:')) event = line.slice(6).trim()
        else if (line.startsWith('data:')) data.push(line.slice(5).replace(/^ /, ''))
      }
      const payload = data.join('\n')
      if (!payload) continue
      if (payload === '[DONE]') return 'finished'
      try {
        const parsed = asRecord(JSON.parse(payload))
        // `event:` names the type when the JSON leaves it out.
        const chunk = (typeof parsed.type === 'string' ? parsed : { ...parsed, type: event ?? 'message' }) as Chunk
        onChunk(chunk, id !== null && Number.isFinite(id) ? id : null)
      } catch {
        // ignore a malformed frame
      }
    }
  }
}

// ---------------------------------------------------------------- connected MCP apps

export type McpGrant = { clientId: string; name: string; logoUri: string | null; redirectHost: string | null; createdAt: string | null; lastUsedAt: string | null }

export const mcpApi = {
  async grants(): Promise<McpGrant[]> {
    const raw = await get<unknown>('/api/mcp/grants')
    const list = Array.isArray(raw) ? raw : (asRecord(raw).grants ?? asRecord(raw).clients)
    return (Array.isArray(list) ? list : []).flatMap((g) => {
      const r = asRecord(g)
      const clientId = str(r.client_id ?? r.clientId ?? r.id)
      if (!clientId) return []
      let redirectHost = str(r.redirect_host)
      const uris = r.redirect_uris
      if (!redirectHost && Array.isArray(uris) && typeof uris[0] === 'string') {
        try {
          redirectHost = new URL(uris[0]).host
        } catch {
          redirectHost = null
        }
      }
      return [
        {
          clientId,
          name: str(r.client_name ?? r.name) ?? clientId,
          logoUri: str(r.logo_uri ?? r.logoUri),
          redirectHost,
          createdAt: str(r.created_at ?? r.createdAt ?? r.granted_at),
          lastUsedAt: str(r.last_used_at ?? r.lastUsedAt),
        },
      ]
    })
  },
  revoke: (clientId: string) => call<void>('DELETE', `/api/mcp/grants/${encodeURIComponent(clientId)}`),
}
