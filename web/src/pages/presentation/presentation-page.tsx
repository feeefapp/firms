import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Check, Copy, Expand, Flame, Grid2x2, Monitor, Presentation, X } from 'lucide-react'
import { connectPresentation, neighbour, slides, visibleIndexes, type Message, type PresentationState } from './content'
import { Scene } from './scenes'
import './presentation.css'

const Presenter = lazy(() => import('./presenter'))
const presenter = new URLSearchParams(window.location.search).get('presenter') === '1'

export default function PresentationPage() {
  return presenter ? <Suspense fallback={<div className="mission-presenter" />}><Presenter /></Suspense> : <Audience />
}

function Audience() {
  const [state, setState] = useState<PresentationState>(() => {
    const index = Math.max(0, slides.findIndex(s => s.id === window.location.hash.slice(1)))
    return { index, technical: true, startedAt: Date.now(), pausedAt: null }
  })
  const [overview, setOverview] = useState(false)
  const [help, setHelp] = useState(false)
  const [notice, setNotice] = useState('')
  const [copied, setCopied] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const live = useRef(state)
  live.current = state
  const [room] = useState(() => {
    const requested = new URLSearchParams(window.location.search).get('session')
    if (requested) return requested
    // Keep a presenter connected when the audience refreshes the same tab.
    try {
      const existing = sessionStorage.getItem('firms-presentation-room')
      if (existing) return existing
      const created = crypto.randomUUID()
      sessionStorage.setItem('firms-presentation-room', created)
      return created
    } catch { return crypto.randomUUID() }
  })
  const channel = useRef<ReturnType<typeof connectPresentation> | null>(null)
  const popup = useRef<Window | null>(null)

  const go = useCallback((index: number) => { setState(s => ({ ...s, index: Math.max(0, Math.min(slides.length - 1, index)) })); setOverview(false) }, [])
  const step = useCallback((direction: number) => { const s = live.current; go(neighbour(s.index, direction, s.technical)) }, [go])
  const technical = useCallback((value: boolean) => setState(s => ({ ...s, technical: value, index: !value && 'technical' in slides[s.index] ? neighbour(s.index, -1, false) : s.index })), [])
  const full = useCallback(async () => {
    try { if (document.fullscreenElement) await document.exitFullscreen(); else await root.current?.requestFullscreen() }
    catch { setNotice('Fullscreen is unavailable here. Open this page in your browser to present fullscreen.') }
  }, [])
  const openPresenter = useCallback(() => {
    const url = new URL(window.location.href)
    url.search = new URLSearchParams({ presenter: '1', session: room }).toString()
    url.hash = ''
    popup.current = window.open(url, `firms-presenter-${room}`, 'popup,width=1150,height=850')
    if (!popup.current) setNotice('Your browser blocked the presenter window. Allow pop-ups for this page, then choose Presenter again.')
    else { popup.current.focus(); setNotice('Presenter notes opened in a separate window. Share this audience window during your presentation.') }
  }, [room])

  useEffect(() => {
    const receive = (message: Message) => {
      if (message.type === 'request') channel.current?.send({ type: 'state', state: live.current })
      if (message.type === 'navigate') go(message.index)
      if (message.type === 'technical') technical(message.value)
      if (message.type === 'timer') setState(s => message.action === 'reset' ? { ...s, startedAt: Date.now(), pausedAt: null } : s.pausedAt ? { ...s, startedAt: s.startedAt + Date.now() - s.pausedAt, pausedAt: null } : { ...s, pausedAt: Date.now() })
    }
    channel.current = connectPresentation(room, receive)
    return () => channel.current?.close()
  }, [room, go, technical])

  useEffect(() => {
    channel.current?.send({ type: 'state', state })
    const url = new URL(window.location.href)
    url.hash = slides[state.index].id
    window.history.replaceState(window.history.state, '', url)
    document.title = `${slides[state.index].title} · Firms presentation`
  }, [state])
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || (event.target instanceof Element && event.target.closest('input, select, textarea, [contenteditable]'))) return
      if (event.target instanceof Element && event.target.closest('button, a') && [' ', 'Enter'].includes(event.key)) return
      if (['ArrowRight', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); step(1) }
      else if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); step(-1) }
      else if (event.key === 'Home') { event.preventDefault(); go(0) }
      else if (event.key === 'End') { event.preventDefault(); go(14) }
      else if (event.key.toLowerCase() === 'p') openPresenter()
      else if (event.key.toLowerCase() === 'f') void full()
      else if (event.key.toLowerCase() === 'o') setOverview(v => !v)
      else if (event.key.toLowerCase() === 't') technical(!live.current.technical)
      else if (event.key === '?') setHelp(v => !v)
      else if (event.key === 'Escape') { setOverview(false); setHelp(false) }
    }
    const onFull = () => setFullscreen(Boolean(document.fullscreenElement))
    const onHash = () => { const i = slides.findIndex(s => s.id === window.location.hash.slice(1)); if (i >= 0) go(i) }
    window.addEventListener('keydown', onKey)
    window.addEventListener('hashchange', onHash)
    document.addEventListener('fullscreenchange', onFull)
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('hashchange', onHash); document.removeEventListener('fullscreenchange', onFull) }
  }, [step, go, full, technical, openPresenter])
  useEffect(() => { if (!notice) return; const timeout = setTimeout(() => setNotice(''), 7000); return () => clearTimeout(timeout) }, [notice])
  useEffect(() => () => { document.title = 'Firms' }, [])

  const visible = visibleIndexes(state.technical)
  const slide = slides[state.index]
  return <div ref={root} className={`mission ${fullscreen ? 'is-fullscreen' : ''}`} lang="en" dir="ltr">
    <header className="mission-header"><a className="mission-brand" href="/" aria-label="Back to Firms"><Flame size={22} /><b>Firms</b></a><span className="mission-event">NASA Space Apps 2026</span><span className="mission-section">{slide.section}</span><div className="mission-header-tools"><button onClick={openPresenter} title="Presenter notes (P)"><Presentation size={17} /><span>Presenter</span></button><button onClick={() => void full()} title="Fullscreen (F)" aria-label="Toggle fullscreen"><Expand size={18} /></button></div></header>
    <main className="mission-stage" aria-label={`Slide ${slide.id}: ${slide.title}`}><div key={slide.id} className="mission-scene"><Scene index={state.index} /></div></main>
    <footer className="mission-footer"><div className="mission-footer-left"><button onClick={() => setOverview(v => !v)} aria-label="Slide overview" aria-expanded={overview} title="Slide overview (O)"><Grid2x2 size={18} /></button><label className="mission-technical-toggle"><input type="checkbox" checked={state.technical} onChange={e => technical(e.target.checked)} /><span>Technical slides</span></label></div><div className="mission-progress" aria-label="Slide progress">{visible.map(i => <button key={i} title={`${slides[i].id}: ${slides[i].title}`} aria-label={`Go to slide ${slides[i].id}`} aria-current={i === state.index ? 'step' : undefined} className={'technical' in slides[i] ? 'is-technical' : ''} onClick={() => go(i)} />)}</div><div className="mission-navigation"><span>{String(visible.indexOf(state.index) + 1).padStart(2, '0')}<i>/</i>{visible.length}</span><button aria-label="Previous slide" onClick={() => step(-1)} disabled={state.index === 0}><ArrowLeft size={20} /></button><button aria-label="Next slide" onClick={() => step(1)} disabled={state.index === 14}><ArrowRight size={20} /></button></div></footer>
    <div className="mission-shortcuts"><button onClick={() => setHelp(v => !v)}>Keyboard shortcuts</button><button onClick={async () => { try { await navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 1600) } catch { setNotice('Copy this page’s address from your browser to share the current slide.') } }}>{copied ? <Check size={13} /> : <Copy size={13} />}{copied ? 'Copied' : 'Copy slide link'}</button></div>
    {notice && <div className="mission-notice" role="status">{notice}<button onClick={() => setNotice('')} aria-label="Dismiss message"><X size={16} /></button></div>}
    {(overview || help) && <div className="mission-overlay" role="dialog" aria-modal="true" aria-label={overview ? 'Slide overview' : 'Keyboard shortcuts'} onClick={() => { setOverview(false); setHelp(false) }}><div className={overview ? 'mission-overview' : 'mission-help'} onClick={e => e.stopPropagation()}><div className="mission-overlay-heading"><h2>{overview ? 'The mission, at a glance' : 'At the controls'}</h2><button onClick={() => { setOverview(false); setHelp(false) }} aria-label="Close dialog"><X /></button></div>{overview ? <div className="mission-overview-grid">{visible.map(i => <button key={i} onClick={() => go(i)} aria-current={state.index === i ? 'step' : undefined}><span>{slides[i].id}{'technical' in slides[i] && <ScanLabel />}</span><b>{slides[i].title}</b><small>{slides[i].section}</small></button>)}</div> : <><dl><dt>← / → / Space</dt><dd>Move between slides</dd><dt>P</dt><dd>Open private presenter notes</dd><dt>F</dt><dd>Toggle fullscreen</dd><dt>O</dt><dd>Slide overview</dd><dt>T</dt><dd>Include or skip technical slides</dd></dl><p><Monitor size={18} />Share the audience window. Keep the presenter window on your own display.</p></>}</div></div>}
  </div>
}
function ScanLabel() { return <span className="mission-tech-label">Technical</span> }
