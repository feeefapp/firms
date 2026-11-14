import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ApiError } from '@/lib/api'
import { errorMessage } from '@/lib/errors'
import { readSse } from '@/lib/sse'
import { resolveRange, sharedQuery } from '@/lib/params'
import { PAGE_PATHS } from '@/shell/navigation'
import { t } from '@/i18n/locale'
import { useSession } from './session'

export type ToolStep = { id: string; name: string; args?: unknown; ok?: boolean; summary?: string; done: boolean }
export type ApplyPatch = {
  region?: string
  from?: string
  to?: string
  algorithm?: string
  baseline?: string
  bbox?: number[] | string
  page?: string
  view?: string
}
export type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  text: string
  steps: ToolStep[]
  applied?: ApplyPatch[]
  error?: string
  pending?: boolean
}

type Assistant = {
  messages: ChatMessage[]
  busy: boolean
  send: (text: string) => Promise<void>
  stop: () => void
  clear: () => void
}

const AssistantContext = createContext<Assistant | null>(null)

let counter = 0
const uid = () => `m${Date.now().toString(36)}${(++counter).toString(36)}`

function asText(data: unknown): string {
  if (typeof data === 'string') return data
  if (data && typeof data === 'object') {
    const d = data as Record<string, unknown>
    return String(d.delta ?? d.text ?? d.content ?? '')
  }
  return ''
}

function summarize(value: unknown): string | undefined {
  if (value == null) return undefined
  if (typeof value === 'string') return value.length > 160 ? `${value.slice(0, 157)}…` : value
  const s = JSON.stringify(value)
  return s.length > 160 ? `${s.slice(0, 157)}…` : s
}

/**
 * The chat with the Firms assistant (`POST /api/agent`, SSE). One conversation for the whole app,
 * so the dock button and the Assistant page show the same thread. `apply` events change the
 * address (region, period, algorithm, page) so the filters move where the person can see them.
 */
export function AssistantProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [busy, setBusy] = useState(false)
  const controller = useRef<AbortController | null>(null)
  const navigate = useNavigate()
  const location = useLocation()
  const { regions } = useSession()
  const where = useRef(location)
  where.current = location

  const applyPatch = useCallback(
    (patch: ApplyPatch) => {
      const current = where.current
      const search = new URLSearchParams(current.search)
      const path = patch.page ? (PAGE_PATHS[patch.page] ?? current.pathname) : current.pathname
      const next = path === current.pathname ? search : sharedQuery(search)
      if (patch.region) next.set('region', patch.region)
      if (patch.from || patch.to) {
        const region = regions.find((r) => r.name === (patch.region ?? search.get('region'))) ?? regions[0] ?? null
        const fallback = resolveRange('12m', region, null, null)
        next.set('period', 'custom')
        next.set('from', patch.from ?? fallback.from)
        next.set('to', patch.to ?? fallback.to)
      }
      if (patch.algorithm) next.set('alg', patch.algorithm)
      if (patch.baseline) next.set('baseline', patch.baseline)
      if (patch.view === 'anomaly' || patch.view === 'count') next.set('view', patch.view)
      if (patch.bbox) next.set('bbox', Array.isArray(patch.bbox) ? patch.bbox.join(',') : patch.bbox)
      const qs = next.toString()
      navigate({ pathname: path, search: qs ? `?${qs}` : '' })
    },
    [navigate, regions],
  )

  const update = (id: string, change: (m: ChatMessage) => ChatMessage) =>
    setMessages((list) => list.map((m) => (m.id === id ? change(m) : m)))

  const send = useCallback(
    async (text: string) => {
      const prompt = text.trim()
      if (!prompt || controller.current) return
      const user: ChatMessage = { id: uid(), role: 'user', text: prompt, steps: [] }
      const reply: ChatMessage = { id: uid(), role: 'assistant', text: '', steps: [], pending: true }
      const history = [...messages, user].filter((m) => m.text).map((m) => ({ role: m.role, content: m.text }))
      setMessages((list) => [...list, user, reply])
      setBusy(true)
      const abort = new AbortController()
      controller.current = abort
      const search = new URLSearchParams(where.current.search)
      const page = Object.entries(PAGE_PATHS).find(([, p]) => p === where.current.pathname)?.[0] ?? 'overview'
      const region = regions.find((r) => r.name === search.get('region')) ?? regions[0] ?? null
      const period = (search.get('period') as '12m' | '5y' | 'all' | 'custom' | null) ?? '12m'
      const range = resolveRange(period, region, search.get('from'), search.get('to'))
      try {
        const response = await fetch('/api/agent', {
          method: 'POST',
          credentials: 'same-origin',
          headers: { 'content-type': 'application/json', accept: 'text/event-stream' },
          body: JSON.stringify({
            messages: history,
            context: {
              page,
              region: region?.name ?? null,
              from: range.from,
              to: range.to,
              algorithm: search.get('alg') || 'ensemble_adaptive',
              bbox: search.get('bbox') ? search.get('bbox')!.split(',').map(Number) : null,
            },
          }),
          signal: abort.signal,
        })
        if (!response.ok) {
          let message = `HTTP ${response.status}`
          try {
            const body = (await response.json()) as { error?: string; message?: string }
            message = body.error ?? body.message ?? message
          } catch {
            // keep the status line
          }
          throw new ApiError(response.status, message)
        }
        await readSse(
          response,
          (event, data) => {
            const d = (data && typeof data === 'object' ? data : {}) as Record<string, unknown>
            if (event === 'text' || event === 'message') {
              const delta = asText(data)
              if (delta) update(reply.id, (m) => ({ ...m, text: m.text + delta }))
            } else if (event === 'tool_call') {
              const step: ToolStep = { id: String(d.id ?? uid()), name: String(d.name ?? d.tool ?? 'tool'), args: d.arguments ?? d.args ?? d.input, done: false }
              update(reply.id, (m) => ({ ...m, steps: [...m.steps, step] }))
            } else if (event === 'tool_result') {
              const id = d.id != null ? String(d.id) : null
              const name = String(d.name ?? d.tool ?? '')
              update(reply.id, (m) => {
                const index = id ? m.steps.findIndex((s) => s.id === id) : m.steps.map((s) => !s.done && (!name || s.name === name)).lastIndexOf(true)
                const result: Partial<ToolStep> = { done: true, ok: d.ok !== false && !d.error, summary: summarize(d.summary ?? d.error ?? d.result ?? d.output) }
                if (index < 0) return { ...m, steps: [...m.steps, { id: id ?? uid(), name: name || 'tool', ...result, done: true }] }
                return { ...m, steps: m.steps.map((s, i) => (i === index ? { ...s, ...result } : s)) }
              })
            } else if (event === 'apply') {
              const patch = (d.filters ?? d) as ApplyPatch
              applyPatch(patch)
              update(reply.id, (m) => ({ ...m, applied: [...(m.applied ?? []), patch] }))
            } else if (event === 'error') {
              update(reply.id, (m) => ({ ...m, error: asText(data) || String(d.message ?? d.error ?? t('m.error.unknown')) }))
            }
          },
          abort.signal,
        )
      } catch (error) {
        if (!abort.signal.aborted) update(reply.id, (m) => ({ ...m, error: errorMessage(error) }))
      } finally {
        update(reply.id, (m) => ({ ...m, pending: false, steps: m.steps.map((s) => ({ ...s, done: true })) }))
        controller.current = null
        setBusy(false)
      }
    },
    [messages, regions, applyPatch],
  )

  const value = useMemo<Assistant>(
    () => ({
      messages,
      busy,
      send,
      stop: () => controller.current?.abort(),
      clear: () => {
        controller.current?.abort()
        setMessages([])
      },
    }),
    [messages, busy, send],
  )
  return <AssistantContext.Provider value={value}>{children}</AssistantContext.Provider>
}

export function useAssistant(): Assistant {
  const value = useContext(AssistantContext)
  if (!value) throw new Error('useAssistant outside AssistantProvider')
  return value
}
