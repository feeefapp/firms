/** Ported from feeef Lab `markdown-core.ts`: streaming repair and per-block direction. */

/** Close a dangling code fence so half-streamed code renders as code, not prose. */
export function repairStreaming(text: string) {
  const fences = text.match(/^ {0,3}(```|~~~)/gm)?.length ?? 0
  return fences % 2 ? `${text}\n\`\`\`` : text
}

const RTL_START = /^[֐-ࣿיִ-﷿ﹰ-ﻼ]/
const STRONG = /[A-Za-zÀ-ɏͰ-ϿЀ-ӿ֐-ࣿיִ-﷿ﹰ-ﻼ]/

/**
 * Base direction of one text block, by majority of words (not the first strong character, which
 * is what `dir="auto"` uses): "CSS المخصّص لا يُحفظ." is an Arabic sentence and must be RTL.
 * Returns 'auto' when the text has no strong letters (numbers, emoji, punctuation).
 */
export function textDirection(text: string): 'rtl' | 'ltr' | 'auto' {
  let rtl = 0
  let ltr = 0
  for (const word of text.slice(0, 4000).split(/\s+/)) {
    const index = word.search(STRONG)
    if (index < 0) continue
    if (RTL_START.test(word.slice(index))) rtl++
    else ltr++
  }
  if (!rtl && !ltr) return 'auto'
  return rtl > ltr ? 'rtl' : rtl === ltr ? 'auto' : 'ltr'
}
