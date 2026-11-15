import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { ApiError } from '@/lib/api'
import { errorMessage } from '@/lib/errors'
import { resolveRange } from '@/lib/params'
import { PAGE_PATHS } from '@/shell/navigation'
import { t } from '@/i18n/locale'
import { agentApi, fetchCatalog, readChunks, runIdFromChunk, runIdFromHeaders, type Catalog, type TurnBody } from '@/components/chat/api'
import { createChunkFolder } from '@/components/chat/reduce'
import type { ChatMessage, ConversationSummary, FirmsView } from '@/components/chat/types'
import { useApplyView } from '@/components/chat/view'
import { pageContext } from '@/lib/page-context'
import { useSession } from './session'

export type Effort = 'low' | 'medium' | 'high'
/** A view the assistant applied in this page: the address it replaced, for Undo. */
export type AppliedView = { previous: string; undone: boolean }

type Assistant = {
  conversations: ConversationSummary[]
  listState: 'idle' | 'loading' | 'ready' | 'error'
  activeId: string | null
  messages: ChatMessage[]
  opening: boolean
  openError: string | null
  busy: boolean
  catalog: Catalog | null
  catalogState: 'idle' | 'loading' | 'ready' | 'error'
  model: string | null
  setModel: (id: string) => void
  effort: Effort
  setEffort: (effort: Effort) => void
  applied: Record<string, AppliedView>
  send: (text: string) => Promise<void>
  stop: () => void
  answer: (message: ChatMessage, inputId: string, approved: boolean) => Promise<void>
  reconnect: (message: ChatMessage) => void
  open: (id: string) => Promise<void>
  newChat: () => void
  remove: (id: string) => Promise<void>
  reloadList: () => Promise<void>
  undoView: (key: string) => void
  redoView: (key: string, view: FirmsView) => void
  applyView: (view: FirmsView) => void
  /** performance.now() of the last address change the assistant made (the dock sheet stays open). */
  appliedAt: { current: number }
}

const AssistantContext = createContext<Assistant | null>(null)

let counter = 0
const uid = (prefix: string) => `${prefix}${Date.now().toString(36)}${(++counter).toString(36)}`
const idempotencyKey = () => (typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : uid('turn-'))

function stored(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}
function store(key: string, value: string | null) {
  try {
    if (value == null) localStorage.removeItem(key)
    else localStorage.setItem(key, value)
  } catch {
    // Private mode: the choice lasts for this page only.
  }
}

const pause = (ms: number, signal: AbortSignal) =>
  new Promise<void>((resolve, reject) => {
    const timer = window.setTimeout(resolve, ms)
    signal.addEventListener('abort', () => {
      window.clearTimeout(timer)
      reject(new DOMException('aborted', 'AbortError'))
    }, { once: true })
  })

class StreamLost extends Error {}

/**
 * The Firms assistant for the whole app (Assistant page and the Dock sheet share it): server-side
 * conversations, one streamed turn at a time (AI SDK UI message stream v1), resumable after a
 * dropped connection (`/api/agent/runs/:run/events?after=`), approvals, and `data-firms-view`
 * applied to the address with an Undo.
 */
export function AssistantProvider({ children }: { children: ReactNode }) {
  const { user, regions } = useSession()
  const location = useLocation()
  const where = useRef(location)
  where.current = location
  const { apply, restore } = useApplyView()

  const [conversations, setConversations] = useState<ConversationSummary[]>([])
  const [listState, setListState] = useState<Assistant['listState']>('idle')
  const [activeId, setActiveId] = useState<string | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [opening, setOpening] = useState(false)
  const [openError, setOpenError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [catalog, setCatalog] = useState<Catalog | null>(null)
  const [catalogState, setCatalogState] = useState<Assistant['catalogState']>('idle')
  const [model, setModelState] = useState<string | null>(null)
  const [effort, setEffortState] = useState<Effort>('medium')
  const [applied, setApplied] = useState<Record<string, AppliedView>>({})
  const controller = useRef<AbortController | null>(null)
  const appliedAt = useRef(0)
  const active = useRef<string | null>(null)
  active.current = activeId
  const userId = user ? user.id : null
  const keys = useMemo(
    () => (userId ? { model: `firms-agent-model:${userId}`, effort: `firms-agent-effort:${userId}`, conversation: `firms-agent-conversation:${userId}` } : null),
    [userId],
  )

  const reloadList = useCallback(async () => {
    if (!userId) return
    setListState((s) => (s === 'ready' ? s : 'loading'))
    try {
      setConversations(await agentApi.conversations())
      setListState('ready')
    } catch {
      setListState('error')
    }
  }, [userId])

  // Catalog and history once per signed-in person; the model choice is remembered per person.
  useEffect(() => {
    setConversations([])
    setMessages([])
    setActiveId(null)
    setCatalog(null)
    if (!userId || !keys) {
      setListState('idle')
      setCatalogState('idle')
      return
    }
    const abort = new AbortController()
    setModelState(stored(keys.model))
    const e = stored(keys.effort)
    setEffortState(e === 'low' || e === 'high' ? e : 'medium')
    setCatalogState('loading')
    fetchCatalog(abort.signal).then(
      (c) => {
        setCatalog(c)
        setCatalogState('ready')
      },
      () => !abort.signal.aborted && setCatalogState('error'),
    )
    void reloadList()
    const last = stored(keys.conversation)
    if (last) void openRef.current(last, true)
    return () => abort.abort()
  }, [userId, keys, reloadList])

  const setModel = useCallback(
    (id: string) => {
      setModelState(id)
      if (keys) store(keys.model, id)
    },
    [keys],
  )
  const setEffort = useCallback(
    (value: Effort) => {
      setEffortState(value)
      if (keys) store(keys.effort, value)
    },
    [keys],
  )

  const patch = useCallback((id: string, change: (m: ChatMessage) => ChatMessage) => setMessages((list) => list.map((m) => (m.id === id ? change(m) : m))), [])

  const applyLive = useCallback(
    (key: string, view: FirmsView) => {
      appliedAt.current = performance.now()
      // On the Assistant page the conversation stays in view: the parameters change in its bar,
      // and the reply's "Apply again" / cards' "Open in Firms" go to the page itself.
      const stay = where.current.pathname === '/assistant'
      // Only a page to open: offer it (Apply) instead of leaving the conversation.
      if (stay && Object.entries(view).every(([k, v]) => k === 'page' || v == null)) return
      const previous = apply(stay ? { ...view, page: undefined } : view)
      setApplied((map) => ({ ...map, [key]: { previous, undone: false } }))
    },
    [apply],
  )

  /**
   * Follows one run until it finishes: reads the turn's own response first, then re-attaches with
   * `events?after=<last id>` whenever the connection drops (backing off, five tries).
   */
  const follow = useCallback(
    async (messageId: string, first: Response | null, runId: string | null, abort: AbortController, live: boolean) => {
      const folder = createChunkFolder()
      let lastSeq = 0
      let views = 0
      let finished = false
      let failed: string | null = null
      let frame = 0
      let run = runId
      const publish = () => {
        frame = 0
        const parts = folder.snapshot()
        patch(messageId, (m) => ({ ...m, parts, runId: run ?? m.runId }))
      }
      const schedule = () => {
        if (!frame) frame = window.requestAnimationFrame(publish)
      }
      let response = first
      let attempts = 0
      try {
        for (;;) {
          let outcome: 'finished' | 'ended' = 'ended'
          try {
            if (!response) {
              if (!run) throw new StreamLost()
              response = await agentApi.events(run, lastSeq, abort.signal)
            }
            run ??= runIdFromHeaders(response)
            outcome = await readChunks(
            response,
            (chunk, id) => {
              if (id !== null) {
                if (id <= lastSeq) return
                lastSeq = id
              }
              attempts = 0
              run ??= runIdFromChunk(chunk)
              folder.push(chunk)
              if (chunk.type === 'data-firms-view' && live) {
                const view = (chunk as { data: unknown }).data
                if (view && typeof view === 'object') applyLive(`${messageId}:${views}`, view as FirmsView)
                views++
              } else if (chunk.type === 'data-firms-view') views++
              if (chunk.type === 'error') failed = chunk.errorText || t('m.chat.replyFailed')
              if (chunk.type === 'finish' || chunk.type === 'abort') finished = true
              schedule()
            },
            abort.signal,
            )
          } catch (error) {
            // A dropped connection (fetch/read TypeError, 5xx) resumes; a refusal (4xx) or Stop ends.
            if (abort.signal.aborted || error instanceof StreamLost) throw error
            if (error instanceof ApiError && error.status >= 400 && error.status < 500) throw error
          }
          response = null
          if (finished || failed || outcome === 'finished') break
          attempts++
          if (attempts > 5 || !run) throw new StreamLost()
          await pause(Math.min(8000, 400 * 2 ** (attempts - 1)), abort.signal)
        }
        if (frame) window.cancelAnimationFrame(frame)
        folder.settle()
        publish()
        patch(messageId, (m) => ({ ...m, status: failed ? 'failed' : 'done', error: failed ?? undefined }))
      } catch (error) {
        if (frame) window.cancelAnimationFrame(frame)
        folder.settle()
        publish()
        if (abort.signal.aborted) patch(messageId, (m) => ({ ...m, status: 'stopped' }))
        else if (error instanceof StreamLost) patch(messageId, (m) => ({ ...m, status: 'failed', error: t('m.chat.streamLost'), runId: run ?? m.runId }))
        else if (error instanceof ApiError && error.status >= 400 && error.status < 500 && error.status !== 401 && error.status !== 403)
          patch(messageId, (m) => ({ ...m, status: 'failed', error: error.message || errorMessage(error) }))
        else patch(messageId, (m) => ({ ...m, status: 'failed', error: errorMessage(error) }))
      }
    },
    [patch, applyLive],
  )

  const context = useCallback((): TurnBody['context'] => {
    const current = where.current
    const search = new URLSearchParams(current.search)
    const page = Object.entries(PAGE_PATHS).find(([, p]) => p === current.pathname)?.[0] ?? 'overview'
    const region = regions.find((r) => r.name === search.get('region')) ?? regions[0] ?? null
    const p = search.get('period')
    const period = p === '12m' || p === '5y' || p === 'custom' ? p : 'all'
    const range = resolveRange(period, region, search.get('from'), search.get('to'))
    const bbox = search.get('bbox')?.split(',').map(Number)
    return {
      page,
      region: region?.name ?? null,
      from: range.from,
      to: range.to,
      algorithm: search.get('alg') || 'ensemble_adaptive',
      bbox: bbox && bbox.length === 4 && bbox.every(Number.isFinite) ? bbox : null,
      ...(page === 'globe' ? { globe: { address: Object.fromEntries(search), ...pageContext() } } : {}),
    }
  }, [regions])

  const selectedModel = useMemo(() => {
    if (!catalog?.aiAvailable) return null
    const ids = new Set([...catalog.stops.map((s) => s.modelId), ...catalog.models.map((m) => m.id)])
    return model && ids.has(model) ? model : (catalog.stops[catalog.defaultIndex]?.modelId ?? null)
  }, [catalog, model])
  const reasoning = useMemo(() => Boolean(selectedModel && catalog?.models.find((m) => m.id === selectedModel)?.reasoning), [catalog, selectedModel])

  const send = useCallback(
    async (text: string) => {
      const prompt = text.trim()
      if (!prompt || controller.current || !userId) return
      const abort = new AbortController()
      controller.current = abort
      setBusy(true)
      const userMessage: ChatMessage = { id: uid('u'), role: 'user', parts: [{ type: 'text', text: prompt, state: 'done' }], status: 'done' }
      const reply: ChatMessage = { id: uid('a'), role: 'assistant', parts: [], status: 'streaming', live: true }
      setMessages((list) => [...list, userMessage, reply])
      try {
        let conversation = active.current
        if (!conversation) {
          const created = await agentApi.create(prompt.slice(0, 80))
          conversation = created.id
          setActiveId(created.id)
          active.current = created.id
          if (keys) store(keys.conversation, created.id)
          setConversations((list) => [{ ...created, title: created.title || prompt.slice(0, 80) }, ...list.filter((c) => c.id !== created.id)])
        }
        const body: TurnBody = {
          text: prompt,
          ...(selectedModel ? { model: selectedModel } : {}),
          ...(selectedModel && reasoning ? { reasoning_effort: effort } : {}),
          context: context(),
        }
        const response = await agentApi.send(conversation, body, idempotencyKey(), abort.signal)
        await follow(reply.id, response, runIdFromHeaders(response), abort, true)
      } catch (error) {
        if (abort.signal.aborted) patch(reply.id, (m) => ({ ...m, status: 'stopped' }))
        else patch(reply.id, (m) => ({ ...m, status: 'failed', error: errorMessage(error) }))
      } finally {
        controller.current = null
        setBusy(false)
        void reloadList()
      }
    },
    [userId, keys, selectedModel, reasoning, effort, context, follow, patch, reloadList],
  )

  const reconnect = useCallback(
    (message: ChatMessage) => {
      if (controller.current || !message.runId) return
      const abort = new AbortController()
      controller.current = abort
      setBusy(true)
      patch(message.id, (m) => ({ ...m, status: 'streaming', error: undefined }))
      void follow(message.id, null, message.runId, abort, message.live ?? false).finally(() => {
        controller.current = null
        setBusy(false)
      })
    },
    [follow, patch],
  )

  const open = useCallback(
    async (id: string, quiet = false) => {
      if (controller.current) return
      setActiveId(id)
      active.current = id
      if (keys) store(keys.conversation, id)
      setOpening(true)
      setOpenError(null)
      setMessages([])
      try {
        const conversation = await agentApi.get(id)
        if (active.current !== id) return
        setMessages(conversation.messages)
        // A reply still running (another tab, a reload mid-turn): follow it from the start.
        const last = conversation.messages[conversation.messages.length - 1]
        const run = conversation.activeRun ?? (last?.status === 'streaming' ? last.runId : null)
        if (run && last?.role === 'assistant') {
          const abort = new AbortController()
          controller.current = abort
          setBusy(true)
          patch(last.id, (m) => ({ ...m, status: 'streaming', runId: run, parts: [] }))
          void follow(last.id, null, run, abort, false).finally(() => {
            controller.current = null
            setBusy(false)
          })
        }
      } catch (error) {
        if (active.current !== id) return
        if (quiet) {
          // The remembered conversation is gone: start fresh without an error.
          setActiveId(null)
          active.current = null
          if (keys) store(keys.conversation, null)
        } else setOpenError(errorMessage(error))
      } finally {
        setOpening(false)
      }
    },
    [keys, follow, patch],
  )
  const openRef = useRef(open)
  openRef.current = open

  const newChat = useCallback(() => {
    if (controller.current) return
    setActiveId(null)
    active.current = null
    setMessages([])
    setOpenError(null)
    if (keys) store(keys.conversation, null)
  }, [keys])

  const remove = useCallback(
    async (id: string) => {
      await agentApi.remove(id)
      setConversations((list) => list.filter((c) => c.id !== id))
      if (active.current === id) newChat()
    },
    [newChat],
  )

  const answer = useCallback(async (message: ChatMessage, inputId: string, approved: boolean) => {
    if (!message.runId) throw new ApiError(409, t('m.chat.approval.noRun'))
    await agentApi.answer(message.runId, inputId, approved)
  }, [])

  const undoView = useCallback(
    (key: string) => {
      const entry = applied[key]
      if (!entry || entry.undone) return
      appliedAt.current = performance.now()
      restore(entry.previous)
      setApplied((map) => ({ ...map, [key]: { ...entry, undone: true } }))
    },
    [applied, restore],
  )
  const redoView = useCallback(
    (key: string, view: FirmsView) => {
      appliedAt.current = performance.now()
      const previous = apply(view)
      setApplied((map) => ({ ...map, [key]: { previous, undone: false } }))
    },
    [apply],
  )
  const applyView = useCallback(
    (view: FirmsView) => {
      appliedAt.current = performance.now()
      apply(view)
    },
    [apply],
  )

  const value = useMemo<Assistant>(
    () => ({
      conversations,
      listState,
      activeId,
      messages,
      opening,
      openError,
      busy,
      catalog,
      catalogState,
      model: selectedModel,
      setModel,
      effort,
      setEffort,
      applied,
      send,
      stop: () => {
        // stop the run on the server too (it emits abort + finish), then drop the local stream
        const run = [...messages].reverse().find((m) => m.status === 'streaming' && m.runId)?.runId
        if (run) void fetch(`/api/agent/runs/${encodeURIComponent(run)}/cancel`, { method: 'POST', credentials: 'same-origin' }).catch(() => {})
        controller.current?.abort()
      },
      answer,
      reconnect,
      open: (id) => open(id),
      newChat,
      remove,
      reloadList,
      undoView,
      redoView,
      applyView,
      appliedAt,
    }),
    [conversations, listState, activeId, messages, opening, openError, busy, catalog, catalogState, selectedModel, setModel, effort, setEffort, applied, send, answer, reconnect, open, newChat, remove, reloadList, undoView, redoView, applyView],
  )
  return <AssistantContext.Provider value={value}>{children}</AssistantContext.Provider>
}

export function useAssistant(): Assistant {
  const value = useContext(AssistantContext)
  if (!value) throw new Error('useAssistant outside AssistantProvider')
  return value
}
