import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { api, loginUrl, type Algorithm, type RegionSummary, type User } from '@/lib/api'

type Session = {
  /** undefined while checking, null when signed out. */
  user: User | null | undefined
  regions: RegionSummary[]
  regionsError: Error | null
  regionsLoading: boolean
  algorithms: Algorithm[]
  reloadRegions: () => Promise<RegionSummary[]>
  signIn: (next?: string) => void
  signOut: () => Promise<void>
}

const SessionContext = createContext<Session | null>(null)

/** Who is signed in (`/api/me`), the regions and the algorithm catalog: loaded once for the app. */
export function SessionProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null | undefined>(undefined)
  const [regions, setRegions] = useState<RegionSummary[]>([])
  const [regionsError, setRegionsError] = useState<Error | null>(null)
  const [regionsLoading, setRegionsLoading] = useState(true)
  const [algorithms, setAlgorithms] = useState<Algorithm[]>([])

  const reloadRegions = useCallback(async () => {
    setRegionsLoading(true)
    try {
      const list = await api.regions()
      setRegions(list)
      setRegionsError(null)
      return list
    } catch (error) {
      setRegionsError(error instanceof Error ? error : new Error(String(error)))
      return []
    } finally {
      setRegionsLoading(false)
    }
  }, [])

  useEffect(() => {
    api.me().then((r) => setUser(r?.user ?? null), () => setUser(null))
    api.algorithms().then(setAlgorithms, () => setAlgorithms([]))
    void reloadRegions()
  }, [reloadRegions])

  const value = useMemo<Session>(
    () => ({
      user,
      regions,
      regionsError,
      regionsLoading,
      algorithms,
      reloadRegions,
      signIn: (next) => window.location.assign(loginUrl(next ?? window.location.pathname + window.location.search)),
      signOut: async () => {
        try {
          await api.logout()
        } finally {
          setUser(null)
        }
      },
    }),
    [user, regions, regionsError, regionsLoading, algorithms, reloadRegions],
  )
  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
}

export function useSession(): Session {
  const value = useContext(SessionContext)
  if (!value) throw new Error('useSession outside SessionProvider')
  return value
}
