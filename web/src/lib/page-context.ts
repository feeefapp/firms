/**
 * Live context a page offers the assistant beyond its address (the globe: camera, what is
 * visible, the selected record). The page registers a getter while mounted; the assistant reads
 * it when it sends a turn, so the agent knows exactly what the user is looking at.
 */
let getter: (() => Record<string, unknown>) | null = null

export function setPageContext(next: (() => Record<string, unknown>) | null) {
  getter = next
}

export function pageContext(): Record<string, unknown> | null {
  try {
    return getter?.() ?? null
  } catch {
    return null
  }
}
