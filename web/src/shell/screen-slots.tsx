import { createContext, useContext, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { ToolbarGroup } from '@feeef.dev/ui/toolbar'

/**
 * Pages float their own chrome into the shell: `ScreenTop` replaces the app bar's title with the
 * page's toolbar groups, `ScreenDock` adds the page's task actions to the bottom dock (beside the
 * assistant button). Portals keep the page's state and handlers where they belong.
 */
export type ScreenHosts = { top: HTMLElement | null; dock: HTMLElement | null }

export const ScreenHostsContext = createContext<ScreenHosts>({ top: null, dock: null })

export function ScreenTop({ children }: { children: ReactNode }) {
  const { top } = useContext(ScreenHostsContext)
  return top ? createPortal(children, top) : null
}

export function ScreenDock({ children }: { children: ReactNode }) {
  const { dock } = useContext(ScreenHostsContext)
  return dock ? createPortal(children, dock) : null
}

/** A page without its own toolbar shows its name in the bar's title bubble. */
export function ScreenTitle({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <ScreenTop>
      <ToolbarGroup label={title}>
        <span className="fm-bar-title">{title}</span>
        {children}
      </ToolbarGroup>
    </ScreenTop>
  )
}
