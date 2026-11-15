import { neighbour, slides, visibleIndexes, type PresentationState } from './content.ts'

export const PRESENTATION_MS = 180_000
// Relative speaking effort: opening, explanation, technical details, results, and live demo.
// Main-slide weights total 180 seconds. Enabling technical slides redistributes the same 180s.
export const SLIDE_WEIGHTS = [10, 18, 15, 15, 8, 22, 23, 12, 8, 20, 9, 20, 9, 28, 9] as const

/** Largest-remainder allocation preserves the exact millisecond total without minimum-time inflation. */
export function allocateTime(indexes: number[], milliseconds: number): number[] {
  const result = slides.map(() => 0)
  const total = Math.max(0, Math.floor(milliseconds))
  const weight = indexes.reduce((sum, i) => sum + SLIDE_WEIGHTS[i], 0)
  if (!weight || !total) return result
  const fractions = indexes.map(i => {
    const exact = total * SLIDE_WEIGHTS[i] / weight
    result[i] = Math.floor(exact)
    return { index: i, fraction: exact - result[i] }
  }).sort((a, b) => b.fraction - a.fraction || a.index - b.index)
  const remainder = total - result.reduce((sum, value) => sum + value, 0)
  for (let i = 0; i < remainder; i++) result[fractions[i].index]++
  return result
}

export function initialPresentation(index = 0, technical = true): PresentationState {
  return { index, technical, startedAt: null, pausedAt: null, slideStartedAt: null,
    slideBudgetMs: allocateTime(visibleIndexes(technical).filter(i => i >= index), PRESENTATION_MS)[index],
    spentMs: slides.map(() => 0), finished: false }
}

function clock(state: PresentationState, now: number) { return state.pausedAt ?? now }
export function elapsedTime(state: PresentationState, now: number): number {
  if (state.startedAt === null) return 0
  if (state.finished) return PRESENTATION_MS
  return Math.max(0, clock(state, now) - state.startedAt)
}
export function slideElapsed(state: PresentationState, now: number): number {
  return state.slideStartedAt === null || state.finished ? 0 : Math.max(0, clock(state, now) - state.slideStartedAt)
}

export function startPresentation(state: PresentationState, now: number): PresentationState {
  return { ...initialPresentation(0, state.technical), startedAt: now, slideStartedAt: now }
}

export function finishPresentation(state: PresentationState, now: number): PresentationState {
  if (state.startedAt === null || state.finished || elapsedTime(state, now) < PRESENTATION_MS) return state
  const deadline = state.startedAt + PRESENTATION_MS
  const spentMs = [...state.spentMs]
  spentMs[state.index] += Math.max(0, deadline - (state.slideStartedAt ?? deadline))
  return { ...state, index: slides.length - 1, slideStartedAt: deadline, slideBudgetMs: 0, spentMs, pausedAt: null, finished: true }
}

export function navigatePresentation(state: PresentationState, target: number, now: number): PresentationState {
  if (!Number.isFinite(target)) return state
  const index = Math.max(0, Math.min(slides.length - 1, Math.floor(target)))
  const finished = finishPresentation(state, now)
  if (finished !== state) return finished
  if (index === state.index) return state // Re-selecting a slide must not reset its allowance.
  if (state.finished) return { ...state, index }
  const spentMs = [...state.spentMs]
  spentMs[state.index] += slideElapsed(state, now)
  const remaining = Math.max(0, PRESENTATION_MS - elapsedTime(state, now))
  const remainingIndexes = visibleIndexes(state.technical).filter(i => i >= index)
  return { ...state, index, spentMs,
    slideStartedAt: state.startedAt === null ? null : clock(state, now),
    slideBudgetMs: allocateTime(remainingIndexes, remaining)[index] }
}

export function setTechnicalSlides(state: PresentationState, technical: boolean, now: number): PresentationState {
  const finished = finishPresentation(state, now)
  if (finished !== state) return { ...finished, technical }
  if (state.technical === technical) return state
  const updated = { ...state, technical }
  if (!technical && 'technical' in slides[state.index]) {
    return navigatePresentation(updated, neighbour(state.index, -1, false), now)
  }
  if (state.finished) return updated
  const remaining = Math.max(0, PRESENTATION_MS - elapsedTime(state, now))
  const currentAllocation = allocateTime(visibleIndexes(technical).filter(i => i >= state.index), remaining)[state.index]
  return { ...updated, slideBudgetMs: slideElapsed(state, now) + currentAllocation }
}

export function togglePause(state: PresentationState, now: number): PresentationState {
  if (state.startedAt === null) return startPresentation(state, now)
  if (state.finished) return state
  const finished = finishPresentation(state, now)
  if (finished !== state) return finished
  if (state.pausedAt === null) return { ...state, pausedAt: now }
  const duration = Math.max(0, now - state.pausedAt)
  return { ...state, pausedAt: null, startedAt: state.startedAt + duration,
    slideStartedAt: state.slideStartedAt === null ? null : state.slideStartedAt + duration }
}

/** Current allowance stays fixed. Extra time spent here continuously reduces future allowances. */
export function pacingPlan(state: PresentationState, now: number) {
  const remaining = Math.max(0, PRESENTATION_MS - elapsedTime(state, now))
  const elapsed = slideElapsed(state, now)
  const currentRemaining = state.finished ? 0 : Math.min(remaining, Math.max(0, state.slideBudgetMs - elapsed))
  const future = visibleIndexes(state.technical).filter(i => i > state.index)
  const allocations = allocateTime(future, Math.max(0, remaining - currentRemaining))
  allocations[state.index] = currentRemaining
  return { remaining, elapsed, currentRemaining, allocations,
    overrun: state.startedAt === null || state.finished ? 0 : Math.max(0, elapsed - state.slideBudgetMs),
    progress: state.startedAt === null || state.finished ? 0 : state.slideBudgetMs > 0 ? Math.min(1, elapsed / state.slideBudgetMs) : 1 }
}

export function formatCountdown(milliseconds: number) {
  const seconds = Math.max(0, Math.ceil(milliseconds / 1000))
  return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`
}

export function paceColor(progress: number) {
  const p = Math.max(0, Math.min(1, progress))
  const stops = [[238, 243, 247], [101, 186, 243], [244, 112, 113]]
  const segment = p <= .65 ? 0 : 1
  const amount = segment === 0 ? p / .65 : (p - .65) / .35
  return `rgb(${stops[segment].map((value, i) => Math.round(value + (stops[segment + 1][i] - value) * amount)).join(', ')})`
}

/** Ignore old stopwatch saves or malformed storage; the audience remains the clock authority. */
export function restorePresentation(value: string | null, index: number): PresentationState {
  if (value) try {
    const state = JSON.parse(value) as PresentationState
    if (Number.isInteger(state.index) && state.index >= 0 && state.index < slides.length &&
      typeof state.technical === 'boolean' && typeof state.finished === 'boolean' &&
      (state.startedAt === null || Number.isFinite(state.startedAt)) &&
      (state.pausedAt === null || Number.isFinite(state.pausedAt)) &&
      (state.slideStartedAt === null || Number.isFinite(state.slideStartedAt)) &&
      Number.isFinite(state.slideBudgetMs) && state.slideBudgetMs >= 0 &&
      Array.isArray(state.spentMs) && state.spentMs.length === slides.length && state.spentMs.every(n => Number.isFinite(n) && n >= 0) &&
      (state.startedAt === null || state.slideStartedAt !== null)) {
      return finishPresentation(state, Date.now())
    }
  } catch { /* Start with a fresh, idle presentation. */ }
  return initialPresentation(index)
}
