import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Flame, Pause, Play, RotateCcw } from 'lucide-react'
import { connectPresentation, neighbour, slides, visibleIndexes, type PresentationState } from './content'
import { notes } from './notes'

export default function Presenter() {
  const room = new URLSearchParams(window.location.search).get('session') ?? ''
  const [state, setState] = useState<PresentationState>({ index: 0, technical: true, startedAt: Date.now(), pausedAt: null })
  const [connected, setConnected] = useState(false)
  const [now, setNow] = useState(Date.now())
  const [lastSeen, setLastSeen] = useState(0)
  const channel = useRef<ReturnType<typeof connectPresentation> | null>(null)
  const current = useRef(state)
  current.current = state
  useEffect(() => {
    document.title = 'Firms · Private presenter notes'
    channel.current = connectPresentation(room, message => {
      if (message.type === 'state') { setState(message.state); setConnected(true); setLastSeen(Date.now()) }
    })
    channel.current.send({ type: 'request' })
    const heartbeat = setInterval(() => channel.current?.send({ type: 'request' }), 2000)
    const clock = setInterval(() => setNow(Date.now()), 500)
    return () => { channel.current?.close(); clearInterval(heartbeat); clearInterval(clock) }
  }, [room])
  const move = (direction: number) => channel.current?.send({ type: 'navigate', index: neighbour(current.current.index, direction, current.current.technical) })
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.target instanceof Element && e.target.closest('input, select, textarea')) return
      if (e.target instanceof Element && e.target.closest('button, a') && [' ', 'Enter'].includes(e.key)) return
      if (['ArrowRight', ' ', 'PageDown'].includes(e.key)) { e.preventDefault(); move(1) }
      if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); move(-1) }
    }
    window.addEventListener('keydown', key)
    return () => window.removeEventListener('keydown', key)
  }, [])
  const slide = slides[state.index], next = slides[neighbour(state.index, 1, state.technical)], note = notes[state.index]
  const elapsed = Math.max(0, Math.floor(((state.pausedAt ?? now) - state.startedAt) / 1000))
  const online = connected && now - lastSeen < 6500
  return <div className="mission-presenter" lang="en" dir="ltr">
    <header><div><Flame size={25} /><b>Firms</b><span>Presenter view</span></div><span className={online ? 'presenter-connected' : 'presenter-disconnected'}>{online ? 'Connected to audience' : 'Waiting for audience window'}</span></header>
    <div className="presenter-layout"><aside><h2>Slides</h2><label className="presenter-technical"><input type="checkbox" checked={state.technical} onChange={e => channel.current?.send({ type: 'technical', value: e.target.checked })} />Include technical slides</label><nav aria-label="Presentation slides">{visibleIndexes(state.technical).map(i => <button key={i} aria-current={state.index === i ? 'step' : undefined} onClick={() => channel.current?.send({ type: 'navigate', index: i })}><span>{slides[i].id}</span><b>{slides[i].title}</b></button>)}</nav></aside>
      <main><div className="presenter-current"><span>On the audience screen · {slide.id}</span><h1>{slide.title}</h1></div><div className="presenter-notes"><h2>Your speaking notes</h2><p>{note.say}</p><h3>Demo cue / extra explanation</h3><p>{note.cue}</p><details><summary>Source reference</summary><p>{note.source}</p></details></div><div className="presenter-next"><span>Up next · {next.id}</span><b>{next.title}</b></div></main>
    </div>
    <footer><div className="presenter-clock"><span>{String(Math.floor(elapsed / 60)).padStart(2, '0')}:{String(elapsed % 60).padStart(2, '0')}</span><button aria-label={state.pausedAt ? 'Resume timer' : 'Pause timer'} onClick={() => channel.current?.send({ type: 'timer', action: 'pause' })}>{state.pausedAt ? <Play size={17} /> : <Pause size={17} />}</button><button aria-label="Reset timer" onClick={() => channel.current?.send({ type: 'timer', action: 'reset' })}><RotateCcw size={17} /></button></div><p>Notes stay in this window. Share the audience window only.</p><div><button onClick={() => move(-1)} disabled={state.index === 0}><ArrowLeft size={19} />Previous</button><button onClick={() => move(1)} disabled={state.index === 14}>Next<ArrowRight size={19} /></button></div></footer>
  </div>
}
