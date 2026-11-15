import { useEffect, useMemo, useRef, useState, type ReactNode, type RefObject } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Tooltip from '@radix-ui/react-tooltip'
import { Flame, LogIn, LogOut, Maximize2, SquarePen, Sparkles } from 'lucide-react'
import { Button, IconButton } from '@feeef.dev/ui/primitives/button'
import { SquareSlot } from '@feeef.dev/ui/primitives/square-slot'
import { MenuSurface, useFloatingBoundary } from '@feeef.dev/ui/menu'
import { ThemeSwitch } from '@feeef.dev/ui/theme'
import { LanguageSwitcher } from '@feeef.dev/ui/i18n'
import { useServices } from '@feeef.dev/ui/services'
import { ToolbarGroup } from '@feeef.dev/ui/toolbar'
import { ScrollArea } from '@feeef.dev/ui/scroll'
import { Dock } from '@feeef.dev/ui/dock'
import { Sheet } from '@feeef.dev/ui/containers/sheet'
import {
  Scaffold,
  ScaffoldAppBar,
  ScaffoldSide,
  ScaffoldToggleButton,
  useScaffold,
  type ScaffoldSideMode,
} from '@feeef.dev/ui/workspace/scaffold'
import { useAssistant } from '@/app/assistant'
import { useSession } from '@/app/session'
import { ConversationList } from '@/components/chat/conversations'
import { ChatBottom, ChatThread, useChatSurface } from '@/components/chat/thread'
import { linkWithParams } from '@/lib/params'
import { t } from '@/i18n/locale'
import { isActive, navItems } from './navigation'
import { ScreenHostsContext, ShellActionsContext, ShellAppBarContext } from './screen-slots'
import '@feeef.dev/ui/navigation/navigation-item.css'
import '@feeef.dev/ui/account/profile-menu.css'
import '@feeef.dev/ui/actions/actions.css'
import './shell.css'

const SIDE_MODE_KEY = 'firms-navigation-collapsed'

/**
 * The workspace: kit Scaffold with the sidebar (destinations), the floating app bar (navigation
 * bubble · the page's own bar or its title · language, theme, account) and a bottom dock with the
 * page's actions and the assistant, which is one tap away everywhere. Full-bleed pages (the globe)
 * replace the scroll area with their own viewport and float the same chrome over it.
 */
export function AppShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const { preferences } = useServices()
  const [sideMode, setSideMode] = useState<ScaffoldSideMode>(() => (preferences.get(SIDE_MODE_KEY) === 'true' ? 'rail' : 'expanded'))
  const [top, setTop] = useState<HTMLElement | null>(null)
  const [dock, setDock] = useState<HTMLElement | null>(null)
  const [chatOpen, setChatOpen] = useState(false)
  const chatButton = useRef<HTMLButtonElement>(null)
  // The page that opened the assistant (the globe's card) lends its button for the morph.
  const chatSource = useRef<RefObject<HTMLElement | null> | null>(null)
  const actions = useMemo(
    () => ({
      openAssistant: (source?: RefObject<HTMLElement | null>) => {
        chatSource.current = source ?? null
        setChatOpen(true)
      },
    }),
    [],
  )
  const fullBleed = pathname === '/globe'
  const onAssistant = pathname === '/assistant'
  const current = navItems().find((item) => isActive(pathname, item))
  const { appliedAt } = useAssistant()

  // Each page names the tab (and what a share or bookmark shows).
  useEffect(() => {
    document.title = current && current.path !== '/' ? `${current.label} · Firms` : `Firms · ${t('m.shell.tagline')}`
  }, [current])

  // Leaving the page closes the sheet, unless the assistant itself moved the page (a view it
  // applied): the conversation stays open beside what it changed.
  useEffect(() => {
    if (performance.now() - appliedAt.current > 1500) setChatOpen(false)
  }, [pathname, appliedAt])

  const appBar = (
    <div className="fm-app-bar-host">
      <ScaffoldAppBar className="fm-app-bar" leading={<NavigationBubble />} trailing={<TopTools />}>
        <div ref={setTop} className="fm-top-slot" />
      </ScaffoldAppBar>
    </div>
  )
  const bottom = (
    <Dock label={t('m.shell.actions')} className="fm-dock" swapKey={pathname}>
      <div className="fm-dock-row">
        {onAssistant ? null : (
          <Button ref={chatButton} variant="tonal" className="fm-dock-ask" onClick={() => setChatOpen(true)} aria-label={t('m.shell.askAssistant')}>
            <Sparkles aria-hidden />
            <span className="lab-control-label">{t('m.shell.ask')}</span>
          </Button>
        )}
        <div ref={setDock} className="fm-dock-slot" />
      </div>
    </Dock>
  )

  return (
    <Tooltip.Provider delayDuration={250}>
      <ScreenHostsContext.Provider value={{ top, dock }}>
      <ShellActionsContext.Provider value={actions}>
        <div className="fm-host">
          <Scaffold
            className="fm-scaffold"
            sideMode={sideMode}
            onSideModeChange={(mode) => {
              setSideMode(mode)
              preferences.set(SIDE_MODE_KEY, String(mode !== 'expanded'))
            }}
            drawerLabel={t('m.shell.navigation')}
            contentLabel={current?.label ?? t('m.shell.content')}
            side={<Side />}
            appBar={appBar}
            // The globe carries its actions (assistant included) in its own sheet.
            bottom={onAssistant || fullBleed ? undefined : bottom}
            renderViewport={(chrome) =>
              onAssistant ? (
                <ShellAppBarContext.Provider value={chrome.appBar}>
                  <div className="fm-assistant-view">{children}</div>
                </ShellAppBarContext.Provider>
              ) : fullBleed ? (
                <div className="fm-bleed">
                  <div className="fm-bleed-content">{children}</div>
                  <div className="fm-bleed-top">{chrome.appBar}</div>
                  <div className="fm-bleed-bottom">{chrome.bottom}</div>
                </div>
              ) : (
                <ScrollArea label={current?.label ?? t('m.shell.content')} className="lab-workspace-route" top={chrome.appBar} bottom={chrome.bottom}>
                  <div className="fm-page">{children}</div>
                </ScrollArea>
              )
            }
          >
            {children}
          </Scaffold>
        </div>
        <AssistantSheet
          open={chatOpen}
          onClose={() => {
            setChatOpen(false)
            chatSource.current = null
          }}
          source={(chatSource.current as RefObject<HTMLButtonElement | null> | null) ?? chatButton}
        />
      </ShellActionsContext.Provider>
      </ScreenHostsContext.Provider>
    </Tooltip.Provider>
  )
}

/**
 * The Dock's "Ask the assistant" sheet: the same thread and composer as the Assistant page (one
 * conversation for the app), with the page's context sent on every turn.
 */
function AssistantSheet({ open, onClose, source }: { open: boolean; onClose: () => void; source: RefObject<HTMLButtonElement | null> }) {
  const surface = useChatSurface()
  const { newChat, busy, messages } = useAssistant()
  const { user } = useSession()
  const { search } = useLocation()
  const navigate = useNavigate()
  return (
    <Sheet
      open={open}
      onOpenChange={(next) => (next ? undefined : onClose())}
      label={t('m.nav.assistant')}
      title={t('m.nav.assistant')}
      detents={['medium', 'large']}
      regular="pane"
      paneWidth={480}
      source={source}
      trailing={
        user ? (
          <ToolbarGroup label={t('m.chat.actions')}>
            <IconButton variant="ghost" appearance="toolbar" aria-label={t('m.chat.new')} title={t('m.chat.new')} disabled={busy || !messages.length} onClick={newChat}>
              <SquarePen />
            </IconButton>
            <IconButton variant="ghost" appearance="toolbar" aria-label={t('m.chat.openPage')} title={t('m.chat.openPage')} onClick={() => navigate(linkWithParams('/assistant', new URLSearchParams(search)))}>
              <Maximize2 />
            </IconButton>
          </ToolbarGroup>
        ) : undefined
      }
      dock={<ChatBottom surface={surface} compact />}
    >
      <ChatThread surface={surface} compact />
    </Sheet>
  )
}

/** While the sidebar is not expanded, its toggle and the logo share the bar's leading bubble. */
function NavigationBubble() {
  const state = useScaffold()
  if (!state.compact && state.sideMode === 'expanded') return null
  return (
    <ToolbarGroup label={t('m.shell.navigation')}>
      <ScaffoldToggleButton
        action={state.sideMode === 'rail' && !state.compact ? 'cycle' : 'restore'}
        label={state.compact ? t('m.shell.openNavigation') : t('m.shell.expandSidebar')}
      />
    </ToolbarGroup>
  )
}

function Brand() {
  const { search } = useLocation()
  return (
    <Link to={linkWithParams('/', new URLSearchParams(search))} className="fm-brand" aria-label={t('m.shell.home')}>
      <Flame size={20} aria-hidden />
      <span>{t('m.app.name')}</span>
    </Link>
  )
}

function Side() {
  const state = useScaffold()
  const rail = state.sideMode === 'rail' && !state.drawerOpen
  const { pathname, search } = useLocation()
  const params = new URLSearchParams(search)
  return (
    <ScaffoldSide
      leading={
        <div className="fm-side-heading">
          {rail ? null : <Brand />}
          {state.drawerOpen ? null : <ScaffoldToggleButton label={state.sideMode === 'expanded' ? t('m.shell.collapseSidebar') : t('m.shell.hideSidebar')} />}
        </div>
      }
      trailing={rail ? null : <p className="fm-side-foot">{t('m.shell.foot')}</p>}
    >
      <nav aria-label={t('m.shell.main')} className="fm-navigation">
        {navItems().map((item) => (
          <NavLink
            key={item.id}
            label={item.label}
            icon={<item.icon />}
            href={item.id === 'regions' || item.id === 'developers' ? item.path : linkWithParams(item.path, params)}
            active={isActive(pathname, item)}
            compact={rail}
            onNavigate={() => state.setDrawerOpen(false)}
          />
        ))}
      </nav>
      {!rail && pathname === '/assistant' ? <SideHistory /> : null}
    </ScaffoldSide>
  )
}

/** Saved conversations under the destinations while the Assistant page is open (Lab's history). */
function SideHistory() {
  const { user } = useSession()
  const { newChat, busy, messages } = useAssistant()
  const state = useScaffold()
  if (!user || state.compact) return null
  return (
    <section className="fm-side-history" aria-label={t('m.chat.history.title')}>
      <div className="fm-side-history-head">
        <span>{t('m.chat.history.title')}</span>
        <IconButton variant="ghost" appearance="toolbar" aria-label={t('m.chat.new')} title={t('m.chat.new')} disabled={busy || !messages.length} onClick={newChat}>
          <SquarePen />
        </IconButton>
      </div>
      <ConversationList onOpened={() => state.setDrawerOpen(false)} />
    </section>
  )
}

/** The kit's navigation row, as a router link (navigation is a link). */
function NavLink({ label, icon, href, active, compact, onNavigate }: { label: string; icon: ReactNode; href: string; active: boolean; compact: boolean; onNavigate: () => void }) {
  const boundary = useFloatingBoundary()
  const link = (
    <Button asChild variant="ghost" appearance="toolbar" className="lab-navigation-item" data-compact={compact}>
      <Link to={href} aria-current={active ? 'page' : undefined} onClick={onNavigate}>
        <SquareSlot aria-hidden="true">{icon}</SquareSlot>
        {compact ? <span className="lab-sr-only">{label}</span> : <span className="lab-control-label">{label}</span>}
      </Link>
    </Button>
  )
  if (!compact) return link
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>{link}</Tooltip.Trigger>
      <Tooltip.Portal container={boundary ?? undefined}>
        <Tooltip.Content className="lab-navigation-tooltip" side="right" sideOffset={8} collisionPadding={12}>
          {label}
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}

/** Language, theme and the account, in one bubble at the bar's end. */
function TopTools() {
  return (
    <ToolbarGroup label={t('m.shell.tools')}>
      <LanguageSwitcher iconOnly />
      <ThemeSwitch />
      <AccountMenu />
    </ToolbarGroup>
  )
}

function AccountMenu() {
  const { user, signOut } = useSession()
  const navigate = useNavigate()
  const boundary = useFloatingBoundary()
  const { pathname, search } = useLocation()
  if (user === undefined) return null
  if (user === null) {
    return (
      <IconButton variant="ghost" appearance="toolbar" aria-label={t('m.login.action')} onClick={() => navigate(`/login?next=${encodeURIComponent(pathname + search)}`)}>
        <LogIn className="lab-dir-flip" />
      </IconButton>
    )
  }
  const name = user.name || user.email || t('m.account.account')
  const initial = Array.from(name)[0]?.toLocaleUpperCase() ?? '?'
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <IconButton variant="ghost" appearance="toolbar" aria-label={t('m.account.openMenu', { name })}>
          {user.photoUrl ? <img className="fm-account-photo" src={user.photoUrl} alt="" /> : <span className="fm-account-glyph" aria-hidden="true">{initial}</span>}
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal container={boundary ?? undefined}>
        <MenuSurface asChild cover={false} side="bottom">
          <DropdownMenu.Content className="lab-actions-menu lab-account-profile-menu" align="end" sideOffset={6} aria-label={t('m.account.account')}>
            <DropdownMenu.Label asChild>
              <div className="lab-account-menu-heading">
                <span className="lab-account-avatar" aria-hidden="true">
                  {user.photoUrl ? <img src={user.photoUrl} alt="" /> : <span>{initial}</span>}
                </span>
                <span>
                  <strong>
                    <bdi>{name}</bdi>
                  </strong>
                  <small dir="ltr">{user.email ?? ''}</small>
                </span>
              </div>
            </DropdownMenu.Label>
            <DropdownMenu.Separator className="lab-account-menu-separator" />
            <DropdownMenu.Item className="lab-actions-menu__item" onSelect={() => void signOut()}>
              <LogOut size={18} aria-hidden className="lab-dir-flip" />
              <span className="lab-actions-menu__label">{t('m.account.signOut')}</span>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </MenuSurface>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
