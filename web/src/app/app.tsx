import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Provider } from '@feeef.dev/ui/provider'
import type { ThemeConfig } from '@feeef.dev/ui/theme-config'
import { LoadingState } from '@/components/ui/data'
import { ToastProvider } from '@/components/ui/toast'
import { ConfirmProvider } from '@/components/ui/overlays'
import { AppShell } from '@/shell/app-shell'
import { changeLocale, dir, locale, LOCALES, messages, t } from '@/i18n/locale'
import { LoginPage } from '@/pages/login'
import { ConsentPage } from '@/pages/consent'
import { AssistantProvider } from './assistant'
import { PageBoundary } from './page-boundary'
import { SessionProvider } from './session'

const OverviewPage = lazy(() => import('@/pages/overview'))
const GlobePage = lazy(() => import('@/pages/globe/globe-page'))
const ComparePage = lazy(() => import('@/pages/compare'))
const SearchPage = lazy(() => import('@/pages/search'))
const AssistantPage = lazy(() => import('@/pages/assistant'))
const RegionsPage = lazy(() => import('@/pages/regions'))
const DevelopersPage = lazy(() => import('@/pages/developers'))
const GuidePage = lazy(() => import('@/pages/guide/guide-page'))
const PresentationPage = lazy(() => import('@/pages/presentation/presentation-page'))

/** Firms' look: the kit's defaults with a blue primary (selection, focus, the main action). */
const THEME: ThemeConfig = { primary: '#2a78d6' }

export function App() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  // The kit's language switcher opens `?hl=<code>`; the app stores the choice and reloads.
  const go = (to: string) => {
    const hl = new URL(to, window.location.origin).searchParams.get('hl')
    if (hl && hl !== locale) changeLocale(hl)
    else navigate(to)
  }
  // A presentation is its own stage, outside the workspace chrome and account providers.
  if (pathname === '/presentation' || pathname.startsWith('/presentation/')) {
    return <Suspense fallback={<div style={{ minHeight: '100dvh', background: '#070d13' }} />}><PresentationPage /></Suspense>
  }
  return (
    <Provider theme={THEME} i18n={{ locale, dir, availableLocales: [...LOCALES], translations: messages, navigate: go }} services={{ navigate: go }}>
      <ToastProvider>
        <ConfirmProvider>
          <SessionProvider>
            <AssistantProvider>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/oauth/consent" element={<ConsentPage />} />
                <Route path="/*" element={<Workspace />} />
              </Routes>
            </AssistantProvider>
          </SessionProvider>
        </ConfirmProvider>
      </ToastProvider>
    </Provider>
  )
}

function Workspace() {
  const { pathname } = useLocation()
  return (
    <AppShell>
      <PageBoundary resetKey={pathname}>
        <Suspense fallback={<LoadingState label={t('m.common.loading')} />}>
          <Routes>
            <Route index element={<OverviewPage />} />
            <Route path="globe" element={<GlobePage />} />
            <Route path="compare" element={<ComparePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="assistant" element={<AssistantPage />} />
            <Route path="regions" element={<RegionsPage />} />
            <Route path="developers" element={<DevelopersPage />} />
            <Route path="guide" element={<GuidePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </PageBoundary>
    </AppShell>
  )
}
