/**
 * AI SDK UI message stream v1 — the subset Firms speaks. Ported from feeef
 * Lab (`backend/inertia/components/lab/chat/types.ts`); unknown chunk types are ignored by readers.
 */

export type ToolState =
  | 'input-streaming'
  | 'input-available'
  | 'approval-requested'
  | 'approval-responded'
  | 'output-available'
  | 'output-error'
  | 'output-denied'

export type TextPart = { type: 'text'; text: string; state?: 'streaming' | 'done' }
export type ReasoningPart = { type: 'reasoning'; text: string; state?: 'streaming' | 'done' }
export type StepStartPart = { type: 'step-start' }
export type ToolPart = {
  type: 'dynamic-tool'
  toolName: string
  toolCallId: string
  state: ToolState
  /** Human title the server attaches from the tool registry (`title`), when present. */
  title?: string
  input?: unknown
  /** Raw JSON text while the model is still streaming arguments. */
  inputText?: string
  output?: unknown
  errorText?: string
  approval?: { id: string; approved?: boolean; reason?: string }
}
export type DataPart = { type: `data-${string}`; id?: string; data: unknown }

export type MessagePart = TextPart | ReasoningPart | StepStartPart | ToolPart | DataPart

export type Chunk =
  | { type: 'start'; messageId?: string; messageMetadata?: unknown }
  | { type: 'start-step' }
  | { type: 'finish-step' }
  | { type: 'text-start'; id: string }
  | { type: 'text-delta'; id: string; delta: string }
  | { type: 'text-end'; id: string }
  | { type: 'reasoning-start'; id: string }
  | { type: 'reasoning-delta'; id: string; delta: string }
  | { type: 'reasoning-end'; id: string }
  | { type: 'tool-input-start'; toolCallId: string; toolName: string; title?: string; dynamic?: boolean }
  | { type: 'tool-input-delta'; toolCallId: string; inputTextDelta: string }
  | { type: 'tool-input-available'; toolCallId: string; toolName: string; title?: string; input: unknown; dynamic?: boolean }
  | { type: 'tool-input-error'; toolCallId: string; toolName: string; input: unknown; errorText: string }
  | { type: 'tool-approval-request'; approvalId: string; toolCallId: string }
  | { type: 'tool-approval-response'; approvalId: string; toolCallId: string; approved: boolean; reason?: string }
  | { type: 'tool-output-available'; toolCallId: string; output: unknown }
  | { type: 'tool-output-error'; toolCallId: string; errorText: string }
  | { type: 'tool-output-denied'; toolCallId: string }
  | { type: `data-${string}`; id?: string; data: unknown; transient?: boolean }
  | { type: 'error'; errorText: string }
  | { type: 'finish'; finishReason?: string; messageMetadata?: unknown }
  | { type: 'abort' }

/** `data-firms-view`: what the web UI should show (the agent's `apply_view`). */
export type FirmsView = {
  page?: string
  region?: string
  from?: string
  to?: string
  algorithm?: string
  baseline?: string
  view?: string
  bbox?: number[] | string
  date?: string
  /** Globe (apply_view): any range, area and pixel filters, the camera. */
  range?: [string, string]
  country?: string
  satellites?: string[]
  sensors?: string[]
  min_confidence?: number
  min_frp?: number
  day_night?: 'all' | 'day' | 'night'
  camera?: { lat: number; lon: number; altitude_km?: number }
  clear_bbox?: boolean
  heat_sources?: boolean
  hide_heat_source_detections?: boolean
  look?: 'pixels' | 'heat' | 'fire3d'
}

export type FirmsCardKind = 'calendar' | 'anomalies' | 'trend' | 'hotspots' | 'compare' | 'ranking'

/** `data-firms-card`: a rich result card. `view` (optional) is what "Open in Firms" applies. */
export type FirmsCard = { kind: FirmsCardKind | string; title?: string; data: unknown; view?: FirmsView }

/** A message as the thread renders it (stored on the server, or live). */
export type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  parts: MessagePart[]
  status?: 'streaming' | 'done' | 'stopped' | 'failed'
  /** Why a reply failed (a sentence a person can act on). */
  error?: string
  /** The run behind this reply (approvals and resume use it). */
  runId?: string | null
  /** True for replies that streamed in this page (views were applied live, so they can be undone). */
  live?: boolean
  createdAt?: string
}

export type ConversationSummary = { id: string; title: string; updatedAt?: string | null }
