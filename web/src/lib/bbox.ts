/** Parses "W,S,E,N"; null unless it is a valid box (W<E, S<N, lon ±180, lat ±90). */
export function parseBbox(text: string | null | undefined): number[] | null {
  if (!text) return null
  const v = text.split(',').map((x) => Number(x.trim()))
  if (v.length !== 4 || v.some((x) => !Number.isFinite(x))) return null
  if (v[0] >= v[2] || v[1] >= v[3] || Math.abs(v[0]) > 180 || Math.abs(v[2]) > 180 || Math.abs(v[1]) > 90 || Math.abs(v[3]) > 90) return null
  return v
}
