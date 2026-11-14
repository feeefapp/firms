/**
 * Dev-only stand-in for the native agent (docs/AGENT_MCP.md §4), used by `FIRMS_MOCK=1`: the model
 * catalog (a 3-rung ladder), conversations in memory, streamed turns in the AI SDK UI message
 * stream v1 (`id:`/`event:`/`data:` frames), resumable runs, approvals and connected MCP apps.
 * Scenarios follow keywords in the prompt (compare, anomaly, season, hotspots, explain, build);
 * a prompt containing "drop" cuts the first connection mid-reply to exercise the resume path.
 * `FIRMS_MOCK_AI=0` serves `ai_available:false`. Never bundled.
 */
import type { IncomingMessage, ServerResponse } from 'node:http'
import { reduceChunks } from '../src/components/chat/reduce'
import type { Chunk } from '../src/components/chat/types'

type Json = Record<string, unknown>
type RegionInfo = { name: string; title: string; title_en: string; bbox: number[]; nm: number }
type Deps = {
  regions: () => RegionInfo[]
  calendar: (region: string, q: Record<string, string>) => Json & { months: Json[]; years: { year: number; total: number; complete: boolean }[]; summary: Json }
  hotspots: (q: Record<string, string>) => { bbox: number[]; date: string; count: number; rows: Json[] }
}
type Message = { id: string; role: 'user' | 'assistant'; parts: unknown[]; status: string; run_id?: string; created_at: string }
type Conversation = { id: string; title: string; created_at: string; updated_at: string; messages: Message[] }
type Run = { id: string; conversation: string; message: string; log: { seq: number; chunk: Chunk }[]; listeners: Set<(seq: number, chunk: Chunk) => void>; done: boolean; inputs: Map<string, (approved: boolean) => void> }

const sleep = (ms: number) => new Promise((ok) => setTimeout(ok, ms))
const now = () => new Date().toISOString()
let n = 0
const id = (p: string) => `${p}_${Date.now().toString(36)}${(++n).toString(36)}`

export function agentMock(deps: Deps) {
  const conversations = new Map<string, Conversation>()
  const runs = new Map<string, Run>()
  const grants = [
    { client_id: 'https://claude.ai/oauth/mcp-oauth-client-metadata', client_name: 'Claude', logo_uri: null, redirect_uris: ['https://claude.ai/api/mcp/auth_callback'], created_at: '2026-11-02T09:12:00Z', last_used_at: '2026-11-13T18:40:00Z' },
    { client_id: 'cursor-7f3a', client_name: 'Cursor', logo_uri: null, redirect_uris: ['cursor://anysphere.cursor-mcp/oauth/callback'], created_at: '2026-11-09T14:03:00Z', last_used_at: null },
  ]

  const writeFrame = (res: ServerResponse, seq: number, chunk: Chunk) => res.write(`id: ${seq}\nevent: ${chunk.type}\ndata: ${JSON.stringify(chunk)}\n\n`)
  const sseHead = (res: ServerResponse, run: Run) =>
    res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-cache', connection: 'keep-alive', 'x-vercel-ai-ui-message-stream': 'v1', 'x-firms-run': run.id })

  /** Streams a run from `after` to its end into `res` (catch-up from the log, then live). */
  const attach = (res: ServerResponse, run: Run, after: number, dropAfter?: number) => {
    sseHead(res, run)
    let sent = 0
    let closed = false
    const send = (seq: number, chunk: Chunk) => {
      if (closed || seq <= after) return
      writeFrame(res, seq, chunk)
      sent++
      if (dropAfter && sent >= dropAfter) {
        closed = true
        run.listeners.delete(send)
        res.destroy()
        return
      }
      if (chunk.type === 'finish') {
        res.write('data: [DONE]\n\n')
        res.end()
        closed = true
        run.listeners.delete(send)
      }
    }
    for (const e of run.log) send(e.seq, e.chunk)
    if (closed) return
    if (run.done) {
      res.end()
      return
    }
    run.listeners.add(send)
    res.on('close', () => {
      closed = true
      run.listeners.delete(send)
    })
  }

  const emit = (run: Run, chunk: Chunk) => {
    const seq = run.log.length + 1
    run.log.push({ seq, chunk })
    for (const listener of [...run.listeners]) listener(seq, chunk)
    const conversation = conversations.get(run.conversation)
    const message = conversation?.messages.find((m) => m.id === run.message)
    if (message) message.parts = reduceChunks(run.log.map((e) => e.chunk))
    if (chunk.type === 'finish' || chunk.type === 'error') {
      run.done = true
      if (message) message.status = chunk.type === 'error' ? 'failed' : 'done'
      if (conversation) conversation.updated_at = now()
    }
  }

  // ------------------------------------------------------------- scenario

  const arabic = (text: string) => /[؀-ۿ]/.test(text)
  const pickRegion = (text: string, fallback: string) => {
    const t = text.toLowerCase()
    const list = deps.regions()
    return (
      list.find((r) => t.includes(r.name) || t.includes(r.title.split('،')[0]) || t.includes(r.title_en.toLowerCase().split(',')[0])) ??
      list.find((r) => r.name === fallback) ??
      list[0]
    )
  }

  async function script(run: Run, text: string, context: Json) {
    const ar = arabic(text)
    const lower = text.toLowerCase()
    const say = (en: string, arText: string) => (ar ? arText : en)
    const e = (chunk: Chunk) => emit(run, chunk)
    const words = async (kind: 'text' | 'reasoning', partId: string, body: string, pace = 18) => {
      e({ type: `${kind}-start`, id: partId } as Chunk)
      for (const piece of body.match(/\S+\s*|\s+/g) ?? []) {
        e({ type: `${kind}-delta`, id: partId, delta: piece } as Chunk)
        await sleep(pace)
      }
      e({ type: `${kind}-end`, id: partId } as Chunk)
    }
    const tool = async (callId: string, name: string, title: string, input: Json) => {
      e({ type: 'tool-input-start', toolCallId: callId, toolName: name, title } as Chunk)
      const json = JSON.stringify(input)
      for (let i = 0; i < json.length; i += 12) {
        e({ type: 'tool-input-delta', toolCallId: callId, inputTextDelta: json.slice(i, i + 12) })
        await sleep(15)
      }
      e({ type: 'tool-input-available', toolCallId: callId, toolName: name, title, input } as Chunk)
    }
    const region = pickRegion(text, String(context.region ?? 'punjab'))
    const end = `${2001 + Math.floor((region.nm - 1) / 12)}-${String(((region.nm - 1) % 12) + 1).padStart(2, '0')}`
    const year = text.match(/\b(20\d\d)\b/)?.[1]

    e({ type: 'start', messageId: run.message, messageMetadata: { run_id: run.id } })
    e({ type: 'start-step' })

    if (/build|ابن|بناء/.test(lower)) {
      await words('reasoning', 'r1', say('The person wants a new region. Greece is not calibrated yet, so I need build_region, which writes data and needs their approval.', 'يريد المستخدم منطقة جديدة. اليونان غير مُعايَرة بعد، لذا أحتاج build_region، وهي أداة تكتب بيانات وتحتاج موافقته.'))
      await tool('c1', 'find_region', 'Find a place', { query: 'Greece' })
      await sleep(300)
      e({ type: 'tool-output-available', toolCallId: 'c1', output: { match: null, country: { code: 'GR', name: 'Greece', bbox: [19.3, 34.8, 29.7, 41.8] } } })
      e({ type: 'finish-step' })
      e({ type: 'start-step' })
      await tool('c2', 'build_region', 'Build a region', { name: 'greece', title: 'Greece', country: 'GR', bbox: [19.3, 34.8, 29.7, 41.8] })
      const approvalId = id('in')
      e({ type: 'tool-approval-request', approvalId, toolCallId: 'c2' })
      const approved = await new Promise<boolean>((resolve) => {
        run.inputs.set(approvalId, resolve)
        setTimeout(() => resolve(false), 10 * 60_000)
      })
      e({ type: 'tool-approval-response', approvalId, toolCallId: 'c2', approved })
      if (approved) {
        await sleep(500)
        e({ type: 'tool-output-available', toolCallId: 'c2', output: { job: { id: 'job_greece', status: 'queued' } } })
        e({ type: 'finish-step' })
        e({ type: 'start-step' })
        await words('text', 't1', say('Done: the **Greece** build is queued (job `job_greece`). It downloads 25 years of MODIS and VIIRS, calibrates and evaluates 9 methods; it usually takes **10–20 minutes**. Follow it on the Regions page.', 'تم: وُضع بناء **اليونان** في الطابور (المهمة `job_greece`). يُنزّل 25 سنة من MODIS وVIIRS، ويعايِر ويقيّم 9 طرق؛ يستغرق عادةً **10–20 دقيقة**. تابعه في صفحة المناطق.'))
        e({ type: 'data-firms-view', id: 'v1', data: { page: 'regions' } })
      } else {
        e({ type: 'tool-output-denied', toolCallId: 'c2' })
        e({ type: 'finish-step' })
        e({ type: 'start-step' })
        await words('text', 't1', say('OK, I did not start the build. Ask me again whenever you want a calendar for Greece.', 'حسناً، لم أبدأ البناء. اطلب مني ذلك متى أردت تقويماً لليونان.'))
      }
    } else if (/compare|قارن|مقارنة/.test(lower)) {
      const list = deps.regions()
      const a = list.find((r) => r.name === 'portugal') ?? list[0]
      const b = list.find((r) => r.name === 'lebanon') ?? list[1]
      await words('reasoning', 'r1', say(`Algeria and Tunisia aren't calibrated regions in this mock, so I compare ${a.title_en} and ${b.title_en} instead, annual totals 2015–${year ?? 2025}.`, `الجزائر وتونس ليستا منطقتين مُعايَرتين في هذه النسخة التجريبية، لذا أقارن ${a.title} و${b.title}، المجاميع السنوية 2015–${year ?? 2025}.`))
      await tool('c1', 'get_calendar', 'Fire calendar', { region: a.name, from: '2015-01', to: `${year ?? 2025}-12` })
      await tool('c2', 'get_calendar', 'Fire calendar', { region: b.name, from: '2015-01', to: `${year ?? 2025}-12` })
      await sleep(400)
      const ca = deps.calendar(a.name, { from: '2015-01', to: `${year ?? 2025}-12` })
      const cb = deps.calendar(b.name, { from: '2015-01', to: `${year ?? 2025}-12` })
      e({ type: 'tool-output-available', toolCallId: 'c2', output: cb.summary })
      e({ type: 'tool-output-available', toolCallId: 'c1', output: ca.summary })
      e({ type: 'data-firms-card', id: 'card1', data: { kind: 'compare', data: { regions: [{ region: a.name, years: ca.years }, { region: b.name, years: cb.years }] } } })
      e({ type: 'finish-step' })
      e({ type: 'start-step' })
      const ta = ca.years.at(-1)!
      const tb = cb.years.at(-1)!
      await words('text', 't1', say(
        `In **${ta.year}**, ${a.title_en} had **${ta.total.toLocaleString('en')}** fire-days against **${tb.total.toLocaleString('en')}** in ${b.title_en}.\n\n| Region | ${ta.year} | Peak month |\n|---|---:|---|\n| ${a.title_en} | ${ta.total} | ${String((ca.summary.peak as Json).ym)} |\n| ${b.title_en} | ${tb.total} | ${String((cb.summary.peak as Json).ym)} |\n\nMonthly figures carry about **±10%** error, so differences under that are noise.`,
        `في **${ta.year}** سجّلت ${a.title} **${ta.total}** يوم حريق مقابل **${tb.total}** في ${b.title}.\n\n| المنطقة | ${ta.year} | شهر الذروة |\n|---|---:|---|\n| ${a.title} | ${ta.total} | ${String((ca.summary.peak as Json).ym)} |\n| ${b.title} | ${tb.total} | ${String((cb.summary.peak as Json).ym)} |\n\nالأرقام الشهرية تحمل خطأً بنحو **±10%**، فالفروق الأصغر من ذلك ضجيج.`,
      ))
    } else if (/strongest|rank|anomal|شذوذ|أقوى/.test(lower)) {
      await words('reasoning', 'r1', say('I rank every region by its latest month against the 2003–2022 median, then list the unusual months of the top one.', 'أرتّب كل المناطق حسب آخر شهر مقارنةً بوسيط 2003–2022، ثم أعرض الأشهر غير المعتادة للأولى.'))
      await tool('c1', 'rank_regions', 'Rank regions', { by: 'anomaly' })
      await sleep(350)
      const rows = deps
        .regions()
        .map((r) => {
          const c = deps.calendar(r.name, {})
          const latest = c.summary.latest as Json
          return { region: r.name, value: latest.value as number, anomaly_pct: latest.anomaly_pct as number, ym: latest.ym as string }
        })
        .sort((x, y) => (y.anomaly_pct ?? -1e9) - (x.anomaly_pct ?? -1e9))
        .map((r, i) => ({ ...r, rank: i + 1 }))
      e({ type: 'tool-output-available', toolCallId: 'c1', output: { rows } })
      const top = rows[0]
      await tool('c2', 'get_anomalies', 'Unusual months', { region: top.region, min_pct: 50 })
      await sleep(300)
      const cal = deps.calendar(top.region, { from: '2021-01' })
      const months = (cal.months as Json[]).filter((m) => (m.anomaly_pct as number) >= 50).sort((x, y) => (y.anomaly_pct as number) - (x.anomaly_pct as number)).slice(0, 6)
      e({ type: 'tool-output-available', toolCallId: 'c2', output: { months } })
      e({ type: 'data-firms-card', id: 'card1', data: { kind: 'ranking', data: { by: 'anomaly', ym: top.ym, rows } } })
      e({ type: 'data-firms-card', id: 'card2', data: { kind: 'anomalies', data: { region: top.region, threshold_pct: 50, months } } })
      e({ type: 'finish-step' })
      e({ type: 'start-step' })
      const name = deps.regions().find((r) => r.name === top.region)!
      await words('text', 't1', say(`**${name.title_en}** had the strongest anomaly: **${top.anomaly_pct > 0 ? '+' : ''}${top.anomaly_pct}%** against normal in ${top.ym}. I opened its calendar in anomaly view.`, `سجّلت **${name.title}** أقوى شذوذ: **${top.anomaly_pct > 0 ? '+' : ''}${top.anomaly_pct}%** مقارنةً بالمعتاد في ${top.ym}. فتحت تقويمها بعرض الشذوذ.`))
      e({ type: 'data-firms-view', id: 'v1', data: { page: 'overview', region: top.region, view: 'anomaly' } })
    } else if (/hotspot|بؤر|search|ابحث/.test(lower)) {
      const r = pickRegion(text, 'punjab')
      await words('reasoning', 'r1', say(`Searching FIRMS detections in ${r.title_en}'s box for the latest day, all satellites.`, `أبحث في رصدات FIRMS داخل مستطيل ${r.title} لآخر يوم، كل الأقمار.`))
      const q = { bbox: r.bbox.join(',') }
      await tool('c1', 'search_hotspots', 'Search hotspots', { region: r.name, days: 1 })
      await tool('c2', 'hotspot_stats', 'Hotspot statistics', { region: r.name, days: 1 })
      await sleep(450)
      const h = deps.hotspots(q)
      const per: Record<string, number> = {}
      for (const row of h.rows) per[String(row.satellite)] = (per[String(row.satellite)] ?? 0) + 1
      e({ type: 'tool-output-available', toolCallId: 'c2', output: { per_satellite: per, rows: h.count } })
      e({ type: 'tool-output-available', toolCallId: 'c1', output: { count: h.count, rows: h.rows.slice(0, 3) } })
      e({ type: 'data-firms-card', id: 'card1', data: { kind: 'hotspots', data: { title: ar ? r.title : r.title_en, bbox: r.bbox, date: h.date, count: h.count, per_satellite: per, points: h.rows.slice(0, 800).map((x) => [x.latitude, x.longitude, x.satellite, x.frp]) } } })
      e({ type: 'finish-step' })
      e({ type: 'start-step' })
      await words('text', 't1', say(`**${h.count}** detections in ${r.title_en} on ${h.date}. VIIRS sees many more small fires than MODIS, which is why Firms converts everything to Aqua-equivalent fire-days before comparing years.`, `**${h.count}** رصدة في ${r.title} يوم ${h.date}. يرى VIIRS حرائق صغيرة أكثر بكثير من MODIS، ولهذا يحوّل Firms كل شيء إلى أيام حريق مكافئة لـAqua قبل مقارنة السنوات.`))
    } else if (/explain|noise|اشرح|ضجيج/.test(lower)) {
      await words('reasoning', 'r1', say('A method question: explain_method(noise_floor) has the figures.', 'سؤال عن الطريقة: explain_method(noise_floor) فيها الأرقام.'))
      await tool('c1', 'explain_method', 'Explain the method', { topic: 'noise_floor' })
      await sleep(250)
      e({ type: 'tool-output-available', toolCallId: 'c1', output: { topic: 'noise_floor', floor_pct: 7 } })
      e({ type: 'finish-step' })
      e({ type: 'start-step' })
      await words('text', 't1', say(
        '### The 7% noise floor\n\nEven a *perfect* conversion can\'t beat about **7%** monthly error, because two Aqua passes of the same month already disagree that much:\n\n1. Clouds hide different fires on different days.\n2. The swath geometry changes pixel size from 1 km to ~5 km.\n3. Small, short fires are hit or miss.\n\n| Method | Monthly error |\n|---|---:|\n| Adaptive ensemble | ~10% |\n| Naive splice | ~45% |\n| Noise floor | 7% |\n\nSo a method at 10% is close to the best possible.',
        '### حدّ الضجيج 7%\n\nحتى التحويل *المثالي* لا يمكنه النزول تحت خطأ شهري بنحو **7%**، لأن مرورين لـAqua في الشهر نفسه يختلفان بهذا القدر أصلاً:\n\n1. الغيوم تحجب حرائق مختلفة في أيام مختلفة.\n2. هندسة المسح تغيّر حجم البكسل من 1 كم إلى نحو 5 كم.\n3. الحرائق الصغيرة القصيرة تُرصد أحياناً وتُفوَّت أحياناً.\n\n| الطريقة | الخطأ الشهري |\n|---|---:|\n| المزيج التكيّفي | ~10% |\n| الربط المباشر | ~45% |\n| حدّ الضجيج | 7% |\n\nلذلك فطريقة بخطأ 10% قريبة من أفضل الممكن.',
      ))
    } else {
      const seasonal = /season|profile|موسم|trend|اتجاه/.test(lower)
      const from = year ? `${year}-01` : seasonal ? '2003-01' : `${Number(end.slice(0, 4)) - 4}-01`
      const to = year ? `${year}-12` : end
      await words('reasoning', 'r1', say(
        `The question is about ${region.title_en}. I'll read its calendar for ${from} → ${to} and, in parallel, its unusual months, then open that view.\n\nI'll quote numbers only from the tools.`,
        `السؤال عن ${region.title}. سأقرأ تقويمها للفترة ${from} → ${to} وبالتوازي أشهرها غير المعتادة، ثم أفتح هذا العرض.\n\nسأذكر أرقاماً من الأدوات فقط.`,
      ))
      await tool('c1', 'get_calendar', 'Fire calendar', { region: region.name, from, to, algorithm: 'ensemble_adaptive' })
      await tool('c2', seasonal ? 'get_trend' : 'get_anomalies', seasonal ? 'Yearly trend' : 'Unusual months', { region: region.name, ...(seasonal ? {} : { min_pct: 50, from, to }) })
      await sleep(500)
      const cal = deps.calendar(region.name, { from, to })
      e({ type: 'tool-output-available', toolCallId: 'c2', output: { ok: true } })
      await sleep(200)
      e({ type: 'tool-output-available', toolCallId: 'c1', output: { summary: cal.summary, months: (cal.months as Json[]).length } })
      e({ type: 'data-firms-card', id: 'card1', data: { kind: 'calendar', data: { ...cal, view: 'count' } } })
      if (seasonal) {
        const full = deps.calendar(region.name, { from: '2003-01', to: end })
        const complete = full.years.filter((y) => y.complete)
        const xs = complete.map((_, i) => i)
        const mx = xs.reduce((s, x) => s + x, 0) / xs.length
        const my = complete.reduce((s, y) => s + y.total, 0) / complete.length
        const slope = complete.reduce((s, y, i) => s + (i - mx) * (y.total - my), 0) / xs.reduce((s, x) => s + (x - mx) ** 2, 0)
        const pairs: number[] = []
        for (let i = 0; i < complete.length; i++) for (let j = i + 1; j < complete.length; j++) pairs.push((complete[j].total - complete[i].total) / (j - i))
        pairs.sort((p, q) => p - q)
        e({ type: 'data-firms-card', id: 'card2', data: { kind: 'trend', data: { region: region.name, years: full.years, trend_pct_per_year: Math.round((slope / my) * 1000) / 10, sen_slope: Math.round(pairs[pairs.length >> 1] * 10) / 10 } } })
      } else {
        const months = (cal.months as Json[]).filter((m) => (m.anomaly_pct as number) >= 50).sort((x, y) => (y.anomaly_pct as number) - (x.anomaly_pct as number)).slice(0, 6)
        e({ type: 'data-firms-card', id: 'card2', data: { kind: 'anomalies', data: { region: region.name, threshold_pct: 50, months } } })
      }
      e({ type: 'finish-step' })
      e({ type: 'start-step' })
      await tool('c3', 'apply_view', 'Open a view', { page: 'overview', region: region.name, from, to })
      e({ type: 'tool-output-available', toolCallId: 'c3', output: { ok: true } })
      e({ type: 'data-firms-view', id: 'v1', data: { page: 'overview', region: region.name, from, to } })
      const peak = cal.summary.peak as Json
      const latest = cal.summary.latest as Json
      await words('text', 't1', say(
        `**${region.title_en}**, ${from} → ${to}:\n\n- **${Number(cal.summary.total).toLocaleString('en')}** fire-days in total\n- Peak: **${String(peak.ym)}** with ${String(peak.value)} fire-days\n- Latest month (${String(latest.ym)}): **${Number(latest.anomaly_pct) > 0 ? '+' : ''}${String(latest.anomaly_pct)}%** against the 2003–2022 median\n\nThe calendar is open above. Monthly figures carry about ±10% error (7% is the floor), so read small anomalies with care.`,
        `**${region.title}**، ${from} → ${to}:\n\n- **${Number(cal.summary.total)}** يوم حريق إجمالاً\n- الذروة: **${String(peak.ym)}** بـ${String(peak.value)} يوم حريق\n- آخر شهر (${String(latest.ym)}): **${Number(latest.anomaly_pct) > 0 ? '+' : ''}${String(latest.anomaly_pct)}%** مقارنةً بوسيط 2003–2022\n\nفتحت التقويم في الأعلى. الأرقام الشهرية تحمل خطأً بنحو ±10% (والحد الأدنى 7%)، فاقرأ الشذوذ الصغير بحذر.`,
      ))
    }
    e({ type: 'finish-step' })
    e({ type: 'finish', finishReason: 'stop' })
  }

  // ------------------------------------------------------------- routes

  const summaryOf = (c: Conversation) => ({ id: c.id, title: c.title, created_at: c.created_at, updated_at: c.updated_at })

  return {
    async handle(req: IncomingMessage, res: ServerResponse, p: string, q: URLSearchParams, readBody: () => Promise<Json>, json: (v: unknown, status?: number) => boolean): Promise<boolean> {
      if (p === '/api/ai/catalog') {
        if (process.env.FIRMS_MOCK_AI === '0') return json({ ladder: null, models: [], free: false, ai_available: false, reason: 'missing scope ai.read' })
        return json({
          ladder: {
            id: 'chat',
            name: 'Chat',
            source: 'catalog',
            stops: [
              { modelId: 'google/gemini-2.5-flash-lite', label: 'Fast', modelName: 'Gemini 2.5 Flash Lite', description: 'Quick answers, lowest cost', priceUsd: 0.0004 },
              { modelId: 'openai/gpt-4.1-mini', label: 'Balanced', modelName: 'GPT-4.1 mini', description: 'Good reasoning over tool results', priceUsd: 0.002 },
              { modelId: 'anthropic/claude-sonnet-4.5', label: 'Best', modelName: 'Claude Sonnet 4.5', description: 'Careful analysis, longest answers', priceUsd: 0.018 },
            ],
            defaultIndex: 1,
          },
          models: [
            { id: 'google/gemini-2.5-flash-lite', name: 'Gemini 2.5 Flash Lite', vision: true, reasoning: false },
            { id: 'openai/gpt-4.1-mini', name: 'GPT-4.1 mini', vision: true, reasoning: false },
            { id: 'deepseek/deepseek-r1', name: 'DeepSeek R1', vision: false, reasoning: true },
            { id: 'anthropic/claude-sonnet-4.5', name: 'Claude Sonnet 4.5', vision: true, reasoning: true },
          ],
          free: false,
          ai_available: true,
        })
      }
      if (p === '/api/mcp/grants' && req.method === 'GET') return json({ grants })
      const grant = /^\/api\/mcp\/grants\/(.+)$/.exec(p)
      if (grant && req.method === 'DELETE') {
        const i = grants.findIndex((g) => g.client_id === decodeURIComponent(grant[1]))
        if (i < 0) return json({ error: 'unknown client' }, 404)
        grants.splice(i, 1)
        res.writeHead(204)
        res.end()
        return true
      }
      if (p === '/api/agent/conversations') {
        if (req.method === 'GET') return json({ conversations: [...conversations.values()].sort((a, b) => b.updated_at.localeCompare(a.updated_at)).map(summaryOf) })
        if (req.method === 'POST') {
          const body = await readBody()
          const c: Conversation = { id: id('conv'), title: String(body.title ?? '').slice(0, 80), created_at: now(), updated_at: now(), messages: [] }
          conversations.set(c.id, c)
          return json(summaryOf(c), 201)
        }
      }
      const conv = /^\/api\/agent\/conversations\/([^/]+)$/.exec(p)
      if (conv) {
        const c = conversations.get(conv[1])
        if (!c) return json({ error: 'conversation not found' }, 404)
        if (req.method === 'DELETE') {
          conversations.delete(c.id)
          res.writeHead(204)
          res.end()
          return true
        }
        const active = [...runs.values()].find((r) => r.conversation === c.id && !r.done)
        return json({ ...summaryOf(c), messages: c.messages, active_run: active?.id ?? null })
      }
      const turn = /^\/api\/agent\/conversations\/([^/]+)\/messages$/.exec(p)
      if (turn && req.method === 'POST') {
        const c = conversations.get(turn[1])
        if (!c) return json({ error: 'conversation not found' }, 404)
        const body = await readBody()
        const text = String(body.text ?? '').trim()
        if (!text) return json({ error: 'text is required' }, 400)
        const run: Run = { id: id('run'), conversation: c.id, message: id('msg'), log: [], listeners: new Set(), done: false, inputs: new Map() }
        runs.set(run.id, run)
        c.messages.push({ id: id('msg'), role: 'user', parts: [{ type: 'text', text }], status: 'done', created_at: now() })
        c.messages.push({ id: run.message, role: 'assistant', parts: [], status: 'streaming', run_id: run.id, created_at: now() })
        if (!c.title) c.title = text.slice(0, 80)
        c.updated_at = now()
        attach(res, run, 0, /drop|انقطاع/.test(text) ? 14 : undefined)
        void script(run, text, (body.context as Json) ?? {}).catch((error) => emit(run, { type: 'error', errorText: String(error) }))
        setTimeout(() => runs.delete(run.id), 30 * 60_000)
        return true
      }
      const events = /^\/api\/agent\/runs\/([^/]+)\/events$/.exec(p)
      if (events && req.method === 'GET') {
        const run = runs.get(events[1])
        if (!run) return json({ error: 'run not found or expired' }, 404)
        attach(res, run, Number(q.get('after') ?? 0) || 0)
        return true
      }
      const inputs = /^\/api\/agent\/runs\/([^/]+)\/inputs$/.exec(p)
      if (inputs && req.method === 'POST') {
        const run = runs.get(inputs[1])
        if (!run) return json({ error: 'run not found or expired' }, 404)
        const body = await readBody()
        const resolve = run.inputs.get(String(body.input_id))
        if (!resolve) return json({ error: 'no pending input with this id' }, 409)
        run.inputs.delete(String(body.input_id))
        resolve(body.approved === true)
        return json({ ok: true }, 202)
      }
      return json({ error: 'not found in mock' }, 404)
    },
  }
}
