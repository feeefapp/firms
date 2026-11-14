/** Saves text as a file through a temporary link (no new window). */
export function saveText(name: string, text: string, type = 'text/csv;charset=utf-8'): void {
  saveBlob(name, new Blob([type.startsWith('text/csv') ? '﻿' + text : text], { type }))
}

export function saveBlob(name: string, blob: Blob): void {
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = name
  document.body.appendChild(a)
  a.click()
  a.remove()
  window.setTimeout(() => URL.revokeObjectURL(a.href), 2000)
}

/** Opens a same-origin download URL (the server sets Content-Disposition). */
export function downloadUrl(url: string, name: string): void {
  const a = document.createElement('a')
  a.href = url
  a.download = name
  document.body.appendChild(a)
  a.click()
  a.remove()
}

/** Quotes a CSV cell when needed. */
export function csvCell(value: unknown): string {
  if (value == null) return ''
  const s = String(value)
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

/**
 * Renders an inline SVG to a PNG at 2× with its computed text colours and fonts inlined, so the
 * picture matches the screen in light and dark.
 */
export async function svgToPng(svg: SVGSVGElement, name: string, background: string): Promise<void> {
  const clone = svg.cloneNode(true) as SVGSVGElement
  const width = svg.clientWidth || Number(svg.getAttribute('width')) || 600
  const height = svg.clientHeight || Number(svg.getAttribute('height')) || 400
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  clone.setAttribute('width', String(width))
  clone.setAttribute('height', String(height))
  const source = svg.querySelectorAll<SVGElement>('*')
  const target = clone.querySelectorAll<SVGElement>('*')
  source.forEach((node, i) => {
    const cs = getComputedStyle(node)
    const el = target[i]
    for (const prop of ['fill', 'stroke', 'stroke-width', 'stroke-dasharray', 'opacity', 'font-size', 'font-weight', 'font-family']) {
      const v = cs.getPropertyValue(prop)
      if (v) el.style.setProperty(prop, v)
    }
  })
  const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
  bg.setAttribute('width', '100%')
  bg.setAttribute('height', '100%')
  bg.setAttribute('fill', background)
  clone.insertBefore(bg, clone.firstChild)
  const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(clone))
  const img = new Image()
  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve()
    img.onerror = () => reject(new Error('svg'))
    img.src = url
  })
  const canvas = document.createElement('canvas')
  canvas.width = width * 2
  canvas.height = height * 2
  const ctx = canvas.getContext('2d')!
  ctx.scale(2, 2)
  ctx.drawImage(img, 0, 0)
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'))
  if (blob) saveBlob(name, blob)
}
