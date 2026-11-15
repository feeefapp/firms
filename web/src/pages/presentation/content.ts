export const slides = [
  { id: '1', title: 'One fire record. A clearer picture.', section: 'The mission' },
  { id: '2', title: 'Two cameras. Different counts.', section: 'The challenge' },
  { id: '3', title: 'One detection is not one fire.', section: 'The observation' },
  { id: '4', title: 'A fair count. A common reference.', section: 'The approach' },
  { id: '4A', title: 'What counts as a fire-day?', section: 'Technical detail', technical: true },
  { id: '5', title: 'We tested the obvious. Then the alternatives.', section: 'The experiments' },
  { id: '6', title: 'Season meets fire strength.', section: 'The selected method' },
  { id: '6A', title: 'Two estimates. One scale.', section: 'Technical detail', technical: true },
  { id: '6B', title: 'Recent years carry more weight.', section: 'Technical detail', technical: true },
  { id: '7', title: 'Four regions. Real observations.', section: 'The validation' },
  { id: '7A', title: 'How far did we miss?', section: 'Technical detail', technical: true },
  { id: '8', title: 'Around 10% forward-test error.', section: 'The result' },
  { id: '8A', title: 'The instruments disagree, too.', section: 'Technical detail', technical: true },
  { id: '9', title: 'The history, in your hands.', section: 'The application' },
  { id: '10', title: 'A clearer history. Better preparation.', section: 'The next step' },
] as const

export type Slide = (typeof slides)[number]
export const regionNames = { punjab: 'Punjab, India', ssudan: 'South Sudan', portugal: 'Portugal', bolivia: 'Bolivia' }
export type Region = keyof typeof regionNames
export const studyRegions = Object.keys(regionNames) as Region[]

export type PresentationState = { index: number; technical: boolean; startedAt: number; pausedAt: number | null }
export type Message = { type: 'state'; state: PresentationState } | { type: 'request' } | { type: 'navigate'; index: number } | { type: 'technical'; value: boolean } | { type: 'timer'; action: 'pause' | 'reset' }

// Same-origin, ephemeral coordination. Never send speaker notes to the audience DOM.
export function connectPresentation(room: string, receive: (message: Message) => void) {
  const key = `firms-presentation:${room}`
  const channel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel(key) : null
  const onMessage = (event: MessageEvent<Message>) => receive(event.data)
  const onStorage = (event: StorageEvent) => {
    if (channel || event.key !== key || !event.newValue) return
    try { receive(JSON.parse(event.newValue).message as Message) } catch { /* Ignore unrelated storage. */ }
  }
  channel?.addEventListener('message', onMessage)
  window.addEventListener('storage', onStorage)
  return {
    send(message: Message) {
      if (channel) channel.postMessage(message)
      else { try { localStorage.setItem(key, JSON.stringify({ message, nonce: Math.random() })) } catch { /* Browsers may disable storage. */ } }
    },
    close() { channel?.close(); window.removeEventListener('storage', onStorage) },
  }
}

export function visibleIndexes(technical: boolean) { return slides.map((_, i) => i).filter(i => technical || !('technical' in slides[i])) }
export function neighbour(index: number, direction: number, technical: boolean) {
  const visible = visibleIndexes(technical)
  const position = visible.indexOf(index)
  if (position < 0) return direction > 0 ? (visible.find(i => i > index) ?? visible.at(-1)!) : ([...visible].reverse().find(i => i < index) ?? 0)
  return visible[Math.max(0, Math.min(visible.length - 1, position + direction))]
}
