import { memo, type ReactElement, type ReactNode } from 'react'
import { CopyBlock } from '@/components/ui/data'
import { t } from '@/i18n/locale'
import { repairStreaming, textDirection } from './markdown-core'

/**
 * Safe Markdown for replies (no raw HTML, no remote images): paragraphs, headings, lists,
 * quotes, GFM tables, fenced code, `code`, **bold**, *italic* and https links. Every prose block
 * picks its own direction from its words (Lab's rule), code stays LTR. A small parser instead of
 * react-markdown keeps the chat chunk light; finished blocks of a live reply never re-parse.
 */

type Block =
  | { kind: 'p'; text: string }
  | { kind: 'h'; level: number; text: string }
  | { kind: 'hr' }
  | { kind: 'quote'; text: string }
  | { kind: 'code'; lang: string; code: string }
  | { kind: 'list'; ordered: boolean; start: number; items: string[] }
  | { kind: 'table'; head: string[]; rows: string[][]; align: ('start' | 'end' | 'center')[] }

const FENCE = /^ {0,3}(```+|~~~+)\s*([\w+-]*)/
const HEADING = /^ {0,3}(#{1,6})\s+(.*?)\s*#*\s*$/
const HR = /^ {0,3}([-*_])(\s*\1){2,}\s*$/
const ITEM = /^(\s*)([-*+]|(\d+)[.)])\s+(.*)$/
const TABLE_RULE = /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/

const cells = (line: string) =>
  line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((c) => c.trim())

function parseBlocks(text: string): Block[] {
  const lines = text.replace(/\r\n/g, '\n').split('\n')
  const blocks: Block[] = []
  let i = 0
  const startsBlock = (line: string, next?: string) =>
    FENCE.test(line) || HEADING.test(line) || HR.test(line) || /^\s*>/.test(line) || ITEM.test(line) || (line.includes('|') && next !== undefined && TABLE_RULE.test(next))
  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) {
      i++
      continue
    }
    const fence = FENCE.exec(line)
    if (fence) {
      const marker = fence[1]
      const code: string[] = []
      i++
      while (i < lines.length && !(lines[i].trim().startsWith(marker[0].repeat(3)) && lines[i].trim().replace(/[`~]/g, '') === '')) code.push(lines[i++])
      i++
      blocks.push({ kind: 'code', lang: fence[2] ?? '', code: code.join('\n') })
      continue
    }
    const heading = HEADING.exec(line)
    if (heading) {
      blocks.push({ kind: 'h', level: heading[1].length, text: heading[2] })
      i++
      continue
    }
    if (HR.test(line)) {
      blocks.push({ kind: 'hr' })
      i++
      continue
    }
    if (/^\s*>/.test(line)) {
      const quote: string[] = []
      while (i < lines.length && /^\s*>/.test(lines[i])) quote.push(lines[i++].replace(/^\s*>\s?/, ''))
      blocks.push({ kind: 'quote', text: quote.join('\n') })
      continue
    }
    if (line.includes('|') && i + 1 < lines.length && TABLE_RULE.test(lines[i + 1])) {
      const head = cells(line)
      const align = cells(lines[i + 1]).map((c) => (c.startsWith(':') && c.endsWith(':') ? 'center' : c.endsWith(':') ? 'end' : 'start') as 'start' | 'end' | 'center')
      i += 2
      const rows: string[][] = []
      while (i < lines.length && lines[i].includes('|') && lines[i].trim()) rows.push(cells(lines[i++]))
      blocks.push({ kind: 'table', head, rows, align })
      continue
    }
    const item = ITEM.exec(line)
    if (item) {
      const ordered = Boolean(item[3])
      const items: string[] = []
      const start = ordered ? Number(item[3]) : 1
      while (i < lines.length) {
        const m = ITEM.exec(lines[i])
        if (m && Boolean(m[3]) === ordered && m[1].length < 2) {
          items.push(m[4])
          i++
        } else if (lines[i].trim() && /^\s{2,}/.test(lines[i]) && items.length) {
          // A continuation or a nested item stays with its item.
          items[items.length - 1] += `\n${lines[i].trim()}`
          i++
        } else if (!lines[i].trim() && i + 1 < lines.length && ITEM.exec(lines[i + 1])) {
          i++
        } else break
      }
      blocks.push({ kind: 'list', ordered, start, items })
      continue
    }
    const para: string[] = [line]
    i++
    while (i < lines.length && lines[i].trim() && !startsBlock(lines[i], lines[i + 1])) para.push(lines[i++])
    blocks.push({ kind: 'p', text: para.join('\n') })
  }
  return blocks
}

const INLINE = /(`[^`\n]+`)|(\*\*[^*\n]+\*\*|__[^_\n]+__)|(\*[^*\s][^*\n]*\*|(?<![\w])_[^_\s][^_\n]*_(?![\w]))|(\[[^\]\n]+\]\((?:https?:\/\/|\/)[^)\s]+\))|(https?:\/\/[^\s<>()]+[^\s<>().,;:!?'"])|(\d{4}-\d{2}(?:-\d{2})?(?:\s*[→–]\s*\d{4}-\d{2}(?:-\d{2})?)?|[+−-]?\d[\d,]*(?:\.\d+)?%)/g

function inline(text: string, key = 'i'): ReactNode[] {
  const out: (string | ReactElement)[] = []
  let last = 0
  let n = 0
  for (const m of text.matchAll(INLINE)) {
    const index = m.index ?? 0
    if (index > last) out.push(text.slice(last, index))
    const k = `${key}${n++}`
    const [token] = m
    if (m[1]) out.push(<code key={k} className="fm-md-code" dir="ltr">{token.slice(1, -1)}</code>)
    else if (m[2]) out.push(<strong key={k}>{inline(token.slice(2, -2), k)}</strong>)
    else if (m[3]) out.push(<em key={k}>{inline(token.slice(1, -1), k)}</em>)
    else if (m[4]) {
      const split = token.lastIndexOf('](')
      const label = token.slice(1, split)
      const href = token.slice(split + 2, -1)
      out.push(
        <a key={k} href={href} {...(href.startsWith('/') ? {} : { target: '_blank', rel: 'noopener noreferrer nofollow' })}>
          {inline(label, k)}
        </a>,
      )
    } else if (m[6])
      // Dates, ranges and signed percentages keep their order inside right-to-left prose.
      out.push(
        <bdi key={k} dir="ltr">
          {token}
        </bdi>,
      )
    else if (m[5])
      out.push(
        <a key={k} href={token} target="_blank" rel="noopener noreferrer nofollow" dir="ltr">
          {token}
        </a>,
      )
    last = index + token.length
  }
  if (last < text.length) out.push(text.slice(last))
  // Single newlines inside a paragraph are line breaks (chat replies use them that way).
  return out.flatMap((node, i) =>
    typeof node === 'string' ? node.split('\n').flatMap((part, j) => (j ? [<br key={`${key}b${i}.${j}`} />, part] : [part])) : [node],
  )
}

const MarkdownBlock = memo(function MarkdownBlock({ block }: { block: Block }) {
  switch (block.kind) {
    case 'p':
      return <p dir={textDirection(block.text)}>{inline(block.text)}</p>
    case 'h': {
      const Tag = (['h3', 'h3', 'h4', 'h5', 'h5', 'h5'] as const)[block.level - 1]
      return <Tag dir={textDirection(block.text)}>{inline(block.text)}</Tag>
    }
    case 'hr':
      return <hr />
    case 'quote':
      return <blockquote dir={textDirection(block.text)}>{inline(block.text)}</blockquote>
    case 'code':
      return (
        <figure className="fm-md-pre">
          {block.lang ? <figcaption dir="ltr">{block.lang}</figcaption> : null}
          <CopyBlock block value={block.code} label={t('m.chat.code')} />
        </figure>
      )
    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul'
      return (
        <Tag dir={textDirection(block.items.join(' '))} start={block.ordered && block.start !== 1 ? block.start : undefined}>
          {block.items.map((item, i) => (
            <li key={i} dir={textDirection(item)}>
              {inline(item, `l${i}`)}
            </li>
          ))}
        </Tag>
      )
    }
    case 'table':
      return (
        <div className="fm-md-table" role="region" tabIndex={0} aria-label={t('m.chat.table')}>
          <table dir={textDirection([...block.head, ...block.rows.flat()].join(' '))}>
            <thead>
              <tr>
                {block.head.map((cell, i) => (
                  <th key={i} style={{ textAlign: block.align[i] ?? 'start' }}>
                    {inline(cell, `h${i}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {block.head.map((_, c) => (
                    <td key={c} style={{ textAlign: block.align[c] ?? 'start' }}>
                      {inline(row[c] ?? '', `c${r}.${c}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
  }
})

const sameBlock = (a: Block, b: Block) => JSON.stringify(a) === JSON.stringify(b)

let cache: { text: string; blocks: Block[] } | null = null

export const ChatMarkdown = memo(function ChatMarkdown({ text, streaming = false }: { text: string; streaming?: boolean }) {
  const source = streaming ? repairStreaming(text) : text
  let blocks: Block[]
  if (cache && cache.text === source) blocks = cache.blocks
  else {
    blocks = parseBlocks(source)
    // Keep identity for unchanged blocks so memoized ones skip re-rendering while a reply streams.
    if (cache && streaming) blocks = blocks.map((b, i) => (cache!.blocks[i] && sameBlock(cache!.blocks[i], b) ? cache!.blocks[i] : b))
    cache = { text: source, blocks }
  }
  return (
    <div className="fm-md" dir={textDirection(text)} data-streaming={streaming || undefined}>
      {blocks.map((block, i) => (
        <MarkdownBlock key={i} block={block} />
      ))}
    </div>
  )
})
