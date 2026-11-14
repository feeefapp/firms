import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'

/** Ported from feeef Lab `stick-to-bottom.ts`; finds its scroll viewport from the thread element. */

/** Within this many pixels of the end the reader is "at the bottom" and follows the reply. */
export const STICK_THRESHOLD = 4

export function distanceFromBottom(el: { scrollHeight: number; scrollTop: number; clientHeight: number }) {
  return Math.max(0, el.scrollHeight - el.scrollTop - el.clientHeight)
}

/** Keys that move the reader up (unpin) while the transcript is focused. */
export const UNPIN_KEYS = new Set(['ArrowUp', 'PageUp', 'Home'])

/** The nearest ancestor that scrolls vertically (a kit ScrollArea viewport or a sheet's body). */
export function scrollParent(el: HTMLElement | null): HTMLElement | null {
  for (let node = el?.parentElement ?? null; node; node = node.parentElement) {
    const { overflowY } = getComputedStyle(node)
    if (overflowY === 'auto' || overflowY === 'scroll') return node
  }
  return null
}

/**
 * Stick the thread's scroll viewport to its bottom while content grows, until the reader scrolls up
 * (wheel, touch drag or keys). Scrolling back within `STICK_THRESHOLD` px re-pins. `resetKey`
 * (the conversation id) re-pins and jumps to the end.
 */
export function useStickToBottom(content: HTMLElement | null, resetKey: unknown) {
  const pinned = useRef(true)
  const [away, setAway] = useState(false)
  const setPinned = useCallback((value: boolean) => {
    pinned.current = value
    setAway(!value)
  }, [])
  const toBottom = useCallback((smooth = false) => {
    const el = scrollParent(content)
    el?.scrollTo({ top: el.scrollHeight, behavior: smooth ? 'smooth' : 'instant' })
  }, [content])
  const stick = useCallback(
    (smooth = false) => {
      setPinned(true)
      toBottom(smooth)
    },
    [setPinned, toBottom],
  )

  useLayoutEffect(() => {
    setPinned(true)
    toBottom()
  }, [resetKey, content, setPinned, toBottom])

  useEffect(() => {
    const inner = content
    const el = scrollParent(inner)
    if (!el || !inner) return
    let touchY: number | null = null
    const unpin = () => pinned.current && distanceFromBottom(el) > STICK_THRESHOLD && setPinned(false)
    const onWheel = (event: WheelEvent) => {
      if (event.deltaY < 0) window.requestAnimationFrame(unpin)
    }
    const onTouchStart = (event: TouchEvent) => {
      touchY = event.touches[0]?.clientY ?? null
    }
    const onTouchMove = (event: TouchEvent) => {
      const y = event.touches[0]?.clientY
      // Finger moving down scrolls the content up.
      if (touchY !== null && y !== undefined && y > touchY + 2) unpin()
    }
    const onKey = (event: KeyboardEvent) => {
      if (UNPIN_KEYS.has(event.key)) window.requestAnimationFrame(unpin)
    }
    const onScroll = () => {
      if (!pinned.current && distanceFromBottom(el) <= STICK_THRESHOLD) setPinned(true)
    }
    const follow = () => {
      if (pinned.current) el.scrollTop = el.scrollHeight
    }
    const resize = new ResizeObserver(follow)
    resize.observe(el)
    resize.observe(inner)
    el.addEventListener('wheel', onWheel, { passive: true })
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: true })
    el.addEventListener('keydown', onKey)
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      resize.disconnect()
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('keydown', onKey)
      el.removeEventListener('scroll', onScroll)
    }
  }, [content, setPinned])

  return { away, stick }
}
