import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Flame, Pause, Play, RotateCcw } from 'lucide-react'
import { connectPresentation, neighbour, slides, visibleIndexes, type PresentationState } from './content'
import { notes } from './notes'
import { formatCountdown, initialPresentation, paceColor, pacingPlan } from './pacing.ts'

export default function Presenter() {
  const room = new URLSearchParams(window.location.search).get('session') ?? ''
  const [state, setState] = useState<PresentationState>(() => initialPresentation())
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
    const clock = setInterval(() => setNow(Date.now()), 100)
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
  const plan = pacingPlan(state, now)
  const idle = state.startedAt === null
  const paused = state.pausedAt !== null
  const color = paceColor(plan.progress)
  const seconds = (ms: number) => `${Math.ceil(ms / 1000)}s`
  const status = state.finished ? 'Three minutes complete' : idle ? 'Ready when you are' : paused ? 'Paused' : plan.overrun > 0 ? 'Move on to protect your finish' : plan.progress >= .8 ? 'Wrap up this slide' : 'Your pace for this slide'
  const online = connected && now - lastSeen < 6500
  return <div className="mission-presenter" lang="en" dir="ltr">
    <header><div><Flame size={25} /><b>Firms</b><span>Presenter view</span></div><span className={online ? 'presenter-connected' : 'presenter-disconnected'}>{online ? 'Connected to audience' : 'Waiting for audience window'}</span></header>
    <div className="presenter-layout"><aside><h2>Slides <small>3:00 total</small></h2><label className="presenter-technical"><input type="checkbox" checked={state.technical} onChange={e => channel.current?.send({ type: 'technical', value: e.target.checked })} />Include technical slides</label><p className="presenter-budget-help">Times adapt as you move through the slides.</p><nav aria-label="Presentation slides">{visibleIndexes(state.technical).map(i => {
      const active = state.index === i
      const past = i < state.index || state.finished
      const budget = active && !state.finished ? plan.currentRemaining : past ? state.spentMs[i] : plan.allocations[i]
      return <button key={i} aria-current={active ? 'step' : undefined} onClick={() => channel.current?.send({ type: 'navigate', index: i })}><span>{slides[i].id}</span><span className="presenter-slide-body"><b>{slides[i].title}</b><span className="presenter-slide-budget">{past ? `${seconds(budget)} used` : `${seconds(budget)} left`}</span><span className="presenter-slide-track" aria-hidden="true"><i style={{ width: `${active && !state.finished ? plan.progress * 100 : past ? 100 : 0}%`, backgroundColor: active && !state.finished ? color : '#667988' }} /></span></span></button>
    })}</nav></aside>
      <main><div className="presenter-current"><span>On the audience screen · {slide.id}</span><h1>{slide.title}</h1></div>
        <section className="presenter-pace" aria-label="Slide pacing">
          <div className="presenter-pace-heading"><span>{status}</span><strong style={{ color: state.finished ? undefined : color }}>{state.finished ? '00:00' : plan.overrun > 0 ? `+${seconds(plan.overrun)}` : formatCountdown(plan.currentRemaining)}</strong></div>
          <div className="presenter-pace-track" role="progressbar" aria-label="Slide time used" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(plan.progress * 100)} aria-valuetext={`${seconds(plan.elapsed)} used of ${seconds(state.slideBudgetMs)} suggested`}><i style={{ width: `${plan.progress * 100}%`, backgroundColor: color }} /></div>
          <div className="presenter-pace-caption"><span>{state.finished ? 'Thank-you page shown at 3:00.' : idle ? 'Starts when you choose Start presentation.' : `${Math.floor(plan.elapsed / 1000)}s used / ${seconds(state.slideBudgetMs)} suggested`}</span><span>{state.finished ? 'Ready for questions' : paused ? 'Frozen until you resume' : plan.overrun > 0 ? 'Future slide times are shrinking' : 'White → blue → red'}</span></div>
        </section>
        <div className="presenter-notes"><h2>Your speaking notes</h2><p>{note.say}</p><h3>Demo cue / extra explanation</h3><p>{note.cue}</p><details><summary>Source reference</summary><p>{note.source}</p></details></div><div className="presenter-next"><span>{state.finished ? 'Presentation complete' : `Up next · ${next.id}`}</span><b>{state.finished ? 'Thank you. Questions?' : next.title}</b>{!state.finished && state.index < slides.length - 1 && <small>{seconds(plan.allocations[neighbour(state.index, 1, state.technical)])} available at this pace</small>}</div></main>
    </div>
    <footer><div className={`presenter-clock ${plan.remaining <= 30_000 ? 'is-urgent' : ''}`}><div className="presenter-countdown"><span role="timer" aria-label="Presentation time remaining">{formatCountdown(plan.remaining)}</span><small>{state.finished ? 'Complete' : idle ? 'Ready · 3:00' : paused ? 'Paused · 3:00' : 'Remaining · 3:00'}</small></div><button disabled={!online || state.finished} aria-label={idle ? 'Start presentation' : paused ? 'Resume timer' : 'Pause timer'} onClick={() => channel.current?.send({ type: 'timer', action: 'pause' })}>{idle || paused ? <Play size={17} /> : <Pause size={17} />}</button><button disabled={!online} aria-label="Restart presentation at slide 1" title="Restart at slide 1 with three minutes" onClick={() => channel.current?.send({ type: 'timer', action: 'reset' })}><RotateCcw size={17} /></button></div><p>Private notes & timing<br />Share the audience window only.</p><div><button onClick={() => move(-1)} disabled={!online || state.index === 0}><ArrowLeft size={19} />Previous</button><button onClick={() => move(1)} disabled={!online || state.index === 14}>Next<ArrowRight size={19} /></button></div></footer>
  </div>
}
