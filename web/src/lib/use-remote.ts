import { useCallback, useEffect, useRef, useState } from 'react'

export type Remote<T> = {
  data: T | null
  error: Error | null
  loading: boolean
  reload: () => void
}

/**
 * Loads `load()` whenever `key` changes (null = don't load). Previous data stays on screen while
 * the next key loads (DESIGN: reloads keep what is on screen); stale answers are dropped.
 */
export function useRemote<T>(key: string | null, load: (signal: AbortSignal) => Promise<T>): Remote<T> {
  const [state, setState] = useState<{ data: T | null; error: Error | null; loading: boolean }>({ data: null, error: null, loading: key != null })
  const [tick, setTick] = useState(0)
  const loader = useRef(load)
  loader.current = load
  useEffect(() => {
    if (key == null) {
      setState((s) => ({ ...s, loading: false }))
      return
    }
    const controller = new AbortController()
    setState((s) => ({ ...s, loading: true, error: null }))
    loader
      .current(controller.signal)
      .then((data) => {
        if (!controller.signal.aborted) setState({ data, error: null, loading: false })
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return
        setState((s) => ({ ...s, error: error instanceof Error ? error : new Error(String(error)), loading: false }))
      })
    return () => controller.abort()
  }, [key, tick])
  const reload = useCallback(() => setTick((n) => n + 1), [])
  return { ...state, reload }
}
