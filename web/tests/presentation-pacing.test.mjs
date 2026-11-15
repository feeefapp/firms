import test from 'node:test'
import assert from 'node:assert/strict'
import { slides, visibleIndexes } from '../src/pages/presentation/content.ts'
import { allocateTime, elapsedTime, finishPresentation, formatCountdown, initialPresentation,
  navigatePresentation, paceColor, pacingPlan, PRESENTATION_MS, restorePresentation,
  setTechnicalSlides, startPresentation, togglePause } from '../src/pages/presentation/pacing.ts'

const sum = values => values.reduce((a, b) => a + b, 0)
const start = (technical = false) => startPresentation(initialPresentation(0, technical), 1_000)

test('browsing is idle; Start always opens at slide 1 with exactly 300 seconds', () => {
  assert.equal(PRESENTATION_MS, 300_000)
  const idle = initialPresentation(13)
  assert.equal(elapsedTime(idle, 999_999), 0)
  assert.equal(pacingPlan(idle, 999_999).remaining, PRESENTATION_MS)
  const running = startPresentation(idle, 50_000)
  assert.equal(running.index, 0)
  assert.equal(elapsedTime(running, 51_000), 1_000)
})

test('weighted budgets sum to exactly 300 seconds with or without technical slides', () => {
  for (const technical of [false, true]) {
    for (const total of [300_000, 123_457, 13, 1, 0]) {
      const budgets = allocateTime(visibleIndexes(technical), total)
      assert.equal(sum(budgets), total)
      assert.ok(budgets.every(n => Number.isInteger(n) && n >= 0))
    }
  }
  const main = allocateTime(visibleIndexes(false), PRESENTATION_MS)
  assert.equal(main[0], 16_667)
  assert.equal(main[13], 46_667)
  assert.ok(main[13] > main[14])
  assert.ok(allocateTime(visibleIndexes(true), PRESENTATION_MS)[0] < main[0])
})

test('early / late advancement redistributes remaining time without moving the deadline', () => {
  for (const spent of [5_000, 10_000, 30_000, 150_000]) {
    const first = start()
    const next = navigatePresentation(first, 1, 1_000 + spent)
    assert.equal(next.startedAt, first.startedAt)
    assert.equal(next.spentMs[0], spent)
    const plan = pacingPlan(next, 1_000 + spent)
    assert.equal(sum(plan.allocations), PRESENTATION_MS - spent)
    assert.equal(next.slideBudgetMs, allocateTime(visibleIndexes(false).filter(i => i >= 1), PRESENTATION_MS - spent)[1])
  }
  assert.ok(navigatePresentation(start(), 1, 6_000).slideBudgetMs > navigatePresentation(start(), 1, 31_000).slideBudgetMs)
})

test('overrunning a slide fills its bar and continuously shrinks future budgets', () => {
  const state = start()
  const onTime = pacingPlan(state, 1_000 + state.slideBudgetMs)
  const late = pacingPlan(state, 11_000 + state.slideBudgetMs)
  assert.equal(late.progress, 1)
  assert.equal(late.overrun, 10_000)
  assert.equal(late.currentRemaining, 0)
  assert.equal(sum(onTime.allocations) - sum(late.allocations), 10_000)
  assert.equal(late.remaining, PRESENTATION_MS - state.slideBudgetMs - 10_000)
})

test('skips, backwards navigation and reselecting a slide preserve the total deadline', () => {
  let state = start()
  state = navigatePresentation(state, 13, 21_000)
  assert.equal(sum(pacingPlan(state, 21_000).allocations), PRESENTATION_MS - 20_000)
  state = navigatePresentation(state, 2, 31_000)
  assert.equal(state.startedAt, 1_000)
  assert.equal(sum(pacingPlan(state, 31_000).allocations), PRESENTATION_MS - 30_000)
  assert.equal(navigatePresentation(state, 2, 40_000), state)
  assert.equal(navigatePresentation(state, NaN, 40_000), state)
})

test('technical slide toggling reallocates within the same remaining time', () => {
  let state = start()
  state = setTechnicalSlides(state, true, 21_000)
  assert.equal(sum(pacingPlan(state, 21_000).allocations), PRESENTATION_MS - 20_000)
  assert.ok(pacingPlan(state, 21_000).allocations[4] > 0)
  state = navigatePresentation(state, 4, 31_000)
  state = setTechnicalSlides(state, false, 36_000)
  assert.equal(state.index, 3)
  assert.equal(state.spentMs[4], 5_000)
  const plan = pacingPlan(state, 36_000)
  assert.equal(sum(plan.allocations), PRESENTATION_MS - 35_000)
  assert.equal(plan.allocations[4], 0)
  assert.equal(state.startedAt, 1_000)
})

test('pause freezes all timers; resume preserves the full remaining speaking time', () => {
  let state = togglePause(start(), 5_000)
  assert.equal(elapsedTime(state, 800_000), 4_000)
  assert.equal(pacingPlan(state, 800_000).elapsed, 4_000)
  state = navigatePresentation(state, 1, 800_000)
  assert.equal(pacingPlan(state, 900_000).elapsed, 0)
  state = togglePause(state, 900_000)
  assert.equal(elapsedTime(state, 901_000), 5_000)
  assert.equal(pacingPlan(state, 901_000).elapsed, 1_000)
  assert.equal(finishPresentation(state, state.startedAt + PRESENTATION_MS).finished, true)
})

test('deadline is exact, ends on thank-you and stops the clock even after a delayed callback', () => {
  const state = start()
  const deadline = state.startedAt + PRESENTATION_MS
  assert.equal(finishPresentation(state, 181_000), state) // The old three-minute deadline no longer ends the talk.
  assert.equal(finishPresentation(state, deadline - 1), state)
  for (const time of [deadline, deadline + 120_000]) {
    const finished = finishPresentation(state, time)
    assert.equal(finished.finished, true)
    assert.equal(finished.index, slides.length - 1)
    assert.equal(elapsedTime(finished, 500_000), PRESENTATION_MS)
    assert.equal(sum(finished.spentMs), PRESENTATION_MS)
    assert.equal(pacingPlan(finished, 500_000).remaining, 0)
    assert.equal(navigatePresentation(state, 5, time).index, slides.length - 1)
    assert.equal(setTechnicalSlides(state, true, time).finished, true)
  }
})

test('restart clears elapsed time and history; the same technical choice is retained', () => {
  const finished = finishPresentation(start(), 1_000 + PRESENTATION_MS)
  const restarted = startPresentation(finished, 400_000)
  assert.equal(restarted.index, 0)
  assert.equal(restarted.technical, false)
  assert.equal(restarted.finished, false)
  assert.equal(sum(restarted.spentMs), 0)
  assert.equal(pacingPlan(restarted, 400_000).remaining, PRESENTATION_MS)
})

test('restores a running or paused clock across reload; ignores old or damaged saves', () => {
  const now = Date.now()
  const running = startPresentation(initialPresentation(), now - 10_000)
  assert.deepEqual(restorePresentation(JSON.stringify(running), 0), running)
  const paused = togglePause(running, now - 5_000)
  assert.deepEqual(restorePresentation(JSON.stringify(paused), 0), paused)
  assert.equal(restorePresentation(JSON.stringify(start()), 0).finished, true)
  for (const value of [null, '{', 'null', '{}', JSON.stringify({ index: 99 }), JSON.stringify({ ...running, spentMs: [] })]) {
    assert.equal(restorePresentation(value, 3).startedAt, null)
    assert.equal(restorePresentation(value, 3).index, 3)
  }
})

test('countdown rounds up; pace moves from white through blue to red', () => {
  assert.equal(formatCountdown(300_000), '05:00')
  assert.equal(formatCountdown(299_001), '05:00')
  assert.equal(formatCountdown(1), '00:01')
  assert.equal(formatCountdown(-1), '00:00')
  assert.equal(paceColor(0), 'rgb(238, 243, 247)')
  assert.equal(paceColor(.65), 'rgb(101, 186, 243)')
  assert.equal(paceColor(1), 'rgb(244, 112, 113)')
})
