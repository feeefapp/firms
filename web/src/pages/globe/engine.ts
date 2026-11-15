/**
 * The globe: real FIRMS records of one day (or any range) drawn as their
 * real pixel footprints (scan × track, oriented by the satellite's ground track), satellites on
 * their TLE orbits (satellite.js) with their scan swaths, day/night shading, zoom-dependent map
 * tiles, picking, and a two-click box. Imperative on purpose: React owns the controls around it.
 */
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { eciToGeodetic, gstime, propagate, twoline2satrec, type EciVec3, type Kilometer } from 'satellite.js'

export type DaySat = {
  code: string
  name: string
  system: number
  instrument: string
  norad: number
  scan_deg: number
  pixel_km: number
  granule_s: number
  conf: 'pct' | 'word' | string
  symbol: string
  pattern: number
  /** Absent for range data: those pixels are drawn north-aligned, without an orbit. */
  tle?: [string, string]
}
export type DayData = {
  generated?: string
  window: [string, number]
  /** Set by `/api/range`: [from, to] (inclusive dates). */
  range?: [string, string]
  source?: string
  note?: string | null
  truncated?: boolean
  country?: string | null
  bbox?: number[]
  sats: DaySat[]
  versions?: string[]
  cols: {
    lat: number[]
    lon: number[]
    t: number[]
    sat: number[]
    scan: number[]
    track: number[]
    frp: (number | null)[]
    b4?: (number | null)[]
    b5?: (number | null)[]
    conf: number[]
    craw: number[]
    dn: number[]
    ver?: number[]
  }
}

export type PickedRecord = {
  index: number
  sat: DaySat
  lat: number
  lon: number
  time: number
  frp: number | null
  conf: number
  confRaw: number
  dayNight: 'D' | 'N'
  scanKm: number
  trackKm: number
  growth: number
  b4: number | null
  b5: number | null
  version: string | null
  altitudeKm: number | null
  nadirKm: number | null
  viewZenith: number | null
  samePass: number
  samePassFrp: number
  others: { sat: DaySat; count: number }[]
}

export const SYSTEM_COLORS = ['#e8a33d', '#4fb3d9', '#8fd16a', '#b58cf0']
const R_KM = 6371
const DEG = Math.PI / 180
const STEP = 10
const R_FIRE = 1.00005

export function ll2v(latDeg: number, lonDeg: number, r = 1, out = new THREE.Vector3()) {
  const phi = (lonDeg + 180) * DEG
  const th = latDeg * DEG
  return out.set(-Math.cos(phi) * Math.cos(th) * r, Math.sin(th) * r, Math.sin(phi) * Math.cos(th) * r)
}
export function v2ll(p: THREE.Vector3): [number, number] {
  const n = p.clone().normalize()
  const lat = Math.asin(n.y) / DEG
  const lon = ((Math.atan2(n.z, -n.x) / DEG - 180 + 540) % 360) - 180
  return [lat, lon]
}

type Callbacks = {
  onPick: (record: PickedRecord | null) => void
  onBoxPoint: (stage: 0 | 1 | 2, bbox: number[] | null) => void
  onTick: (simT: number, playing: boolean) => void
  /** A known heat source icon was tapped (null when the tap missed every icon). */
  onSource?: (source: HeatSource | null) => void
}

/** A persistent non-vegetation heat source from the FIRMS archives (tools/static_sources.py). */
export type HeatSource = {
  kind: 'volcano' | 'industrial' | 'offshore'
  lat: number
  lon: number
  detections: number
  days: number
  first: string
  last: string
  years: number
  cells: number
  frp_mean: number
  region?: string
  name?: string
}
export const HEAT_KINDS = ['industrial', 'offshore', 'volcano'] as const

/** How fires are drawn: their real pixels, a heat map, or animated 3D flames. */
export type Look = 'pixels' | 'heat' | 'fire3d'


/**
 * One gizmo per kind, drawn once (editor-style line icons): a thin coloured stroke over a dark
 * halo, no fill, so it reads on the night side, the desert and the sea without hiding the map.
 */
function iconCanvas(kind: HeatSource['kind']) {
  const S = 96
  const c = document.createElement('canvas')
  c.width = c.height = S
  const g = c.getContext('2d')!
  const m = S / 2
  g.lineJoin = 'round'
  g.lineCap = 'round'
  const color = kind === 'volcano' ? '#ff6a4d' : kind === 'industrial' ? '#ffb02e' : '#4fd2ff'
  const path = () => {
    g.beginPath()
    if (kind === 'volcano') {
      // cone with a crater and two plume strokes
      g.moveTo(m - 30, m + 26)
      g.lineTo(m - 9, m - 8)
      g.lineTo(m + 9, m - 8)
      g.lineTo(m + 30, m + 26)
      g.closePath()
      g.moveTo(m - 4, m - 16)
      g.quadraticCurveTo(m - 10, m - 24, m - 4, m - 32)
      g.moveTo(m + 5, m - 16)
      g.quadraticCurveTo(m + 11, m - 24, m + 5, m - 32)
    } else if (kind === 'industrial') {
      // a stack with a flame outline on top
      g.moveTo(m - 9, m + 28)
      g.lineTo(m - 9, m - 2)
      g.lineTo(m + 9, m - 2)
      g.lineTo(m + 9, m + 28)
      g.moveTo(m - 22, m + 28)
      g.lineTo(m + 22, m + 28)
      g.moveTo(m, m - 34)
      g.bezierCurveTo(m + 13, m - 22, m + 10, m - 8, m, m - 8)
      g.bezierCurveTo(m - 10, m - 8, m - 13, m - 22, m, m - 34)
    } else {
      // a platform deck on legs over a wave, with a flame
      g.moveTo(m - 26, m + 4)
      g.lineTo(m + 26, m + 4)
      g.moveTo(m - 17, m + 4)
      g.lineTo(m - 21, m + 26)
      g.moveTo(m + 17, m + 4)
      g.lineTo(m + 21, m + 26)
      g.moveTo(m - 30, m + 20)
      g.quadraticCurveTo(m - 15, m + 14, m, m + 20)
      g.quadraticCurveTo(m + 15, m + 26, m + 30, m + 20)
      g.moveTo(m + 8, m - 26)
      g.bezierCurveTo(m + 17, m - 17, m + 15, m - 6, m + 8, m - 6)
      g.bezierCurveTo(m + 1, m - 6, m - 1, m - 17, m + 8, m - 26)
    }
  }
  path()
  g.strokeStyle = 'rgba(8,10,14,0.85)'
  g.lineWidth = 12
  g.stroke()
  path()
  g.strokeStyle = color
  g.lineWidth = 5
  g.stroke()
  return c
}
const iconUrls = new Map<string, string>()
/** The icon as an image URL, for legends and lists. */
export function heatIconUrl(kind: HeatSource['kind']) {
  let u = iconUrls.get(kind)
  if (!u) iconUrls.set(kind, (u = iconCanvas(kind).toDataURL()))
  return u
}
function iconTexture(kind: HeatSource['kind']) {
  const tex = new THREE.CanvasTexture(iconCanvas(kind))
  tex.colorSpace = THREE.LinearSRGBColorSpace
  tex.anisotropy = 4
  return tex
}

/** What is shown besides time: per-satellite mask plus record filters. */
export type FireFilters = {
  /** Satellite indexes (into `DayData.sats`) to show. */
  sats: boolean[]
  minConf: 0 | 1 | 2
  minFrp: number
  /** 0 both, 1 day only, 2 night only */
  dayNight: 0 | 1 | 2
}

export type Stats = { total: number; bySystem: number[]; bySat: number[]; frp: number }

/** Camera as latitude, longitude and altitude above the surface (km). */
export type CameraView = { lat: number; lon: number; altKm: number }

type SatObj = {
  oi: number
  geo: boolean
  sats: number[]
  grp: THREE.Group
  swath?: THREE.Mesh
  disk?: THREE.LineLoop
  label: HTMLDivElement
  on: boolean
}

export class GlobeEngine {
  readonly tMin: number
  readonly span: number
  readonly bins: Float32Array[]
  readonly binSize: number
  readonly isRange: boolean
  readonly count: number
  readonly validPct: number
  private D: DayData
  private renderer: THREE.WebGLRenderer
  private scene = new THREE.Scene()
  private camera: THREE.PerspectiveCamera
  private controls: OrbitControls
  private view: HTMLElement
  private labels: HTMLDivElement
  private cb: Callbacks
  private T0: number
  private NS: number
  private orbit: { u: Float32Array; alt: Float32Array; sats: number[] }[]
  private FU: Float32Array
  private TOBS: Float32Array
  private NADIR: Float32Array
  private CROSS: Float32Array
  private ALONG: Float32Array
  private fireU: Record<string, THREE.IUniform>
  private earth: THREE.Mesh
  private earthU: Record<string, THREE.IUniform>
  private satObjs: SatObj[]
  private boxLine: THREE.Line
  private selGroup = new THREE.Group()
  private ring: THREE.Mesh
  private footprints: THREE.LineSegments
  private raf = 0
  private last = performance.now()
  private lastTick = 0
  private simT = 0
  private playing = true
  private speed = 600
  private flyTo: THREE.Vector3 | null = null
  private drawing: 0 | 1 | 2 = 0
  private p1: [number, number] | null = null
  private downXY: [number, number] | null = null
  private dragBox = false
  private zoomTarget: number | null = null
  private zoomAnchor: THREE.Vector3 | null = null
  private pinch = new Map<number, [number, number]>()
  private pinchDist = 0
  private order: Int32Array = new Int32Array(0)
  private sources: HeatSource[] = []
  private sourceLayers: THREE.Points[] = []
  private sourcesOn = true
  private look: Look = 'pixels'
  private fireMesh!: THREE.Mesh
  private heatScene = new THREE.Scene()
  private heatRT: THREE.WebGLRenderTarget | null = null
  private overlayScene = new THREE.Scene()
  private overlayCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  private heatU = { tHeat: { value: null as THREE.Texture | null }, uScale: { value: 0.16 } }
  private flames: THREE.Mesh | null = null
  private flameKey = ''
  private flameAt = 0
  private filterVersion = 0
  private inMask: Uint8Array | null = null
  private outline: THREE.LineSegments
  private disposed = false
  private resizeObserver: ResizeObserver
  private tiles: TileLayer
  private satOn: boolean[]

  constructor(container: HTMLElement, data: DayData, cb: Callbacks) {
    this.D = data
    this.cb = cb
    this.view = container
    const C = data.cols
    const N = C.lat.length
    this.count = N
    const SATS = data.sats

    // ---------- time range + orbit tables (one per physical satellite) ----------
    let tMin = Infinity
    let tMax = -Infinity
    for (let i = 0; i < N; i++) {
      const t = C.t[i]
      if (t < tMin) tMin = t
      if (t > tMax) tMax = t
    }
    if (!Number.isFinite(tMin)) {
      tMin = Date.parse(`${data.window[0]}T00:00:00Z`) / 1000
      tMax = tMin + 86400
    }
    this.tMin = tMin
    this.T0 = tMin - 1800
    const T1 = tMax + 1800
    this.NS = Math.ceil((T1 - this.T0) / STEP) + 1
    this.span = tMax - tMin + 900
    this.isRange = Boolean(data.range)
    const norads = [...new Set(SATS.filter((s) => s.tle).map((s) => s.norad))]
    const oiOf = SATS.map((s) => (s.tle ? norads.indexOf(s.norad) : -1))
    const v = new THREE.Vector3()
    this.orbit = norads.map((n) => {
      const s = SATS.find((x) => x.norad === n)!
      const rec = twoline2satrec(s.tle![0], s.tle![1])
      const u = new Float32Array(this.NS * 3)
      const alt = new Float32Array(this.NS)
      for (let i = 0; i < this.NS; i++) {
        const date = new Date((this.T0 + i * STEP) * 1000)
        const pv = propagate(rec, date)
        if (typeof pv.position === 'boolean') continue
        const g = eciToGeodetic(pv.position as EciVec3<Kilometer>, gstime(date))
        ll2v(g.latitude / DEG, g.longitude / DEG, 1, v)
        u[i * 3] = v.x
        u[i * 3 + 1] = v.y
        u[i * 3 + 2] = v.z
        alt[i] = g.height
      }
      return { u, alt, sats: SATS.map((x, i) => (x.norad === n ? i : -1)).filter((i) => i >= 0) }
    })
    this.oiOf = oiOf

    // ---------- per record: observation time, distance from track, pixel orientation ----------
    this.FU = new Float32Array(N * 3)
    this.TOBS = new Float32Array(N)
    this.NADIR = new Float32Array(N)
    this.CROSS = new Float32Array(N * 3)
    this.ALONG = new Float32Array(N * 3)
    const scan = Float32Array.from(C.scan)
    const track = Float32Array.from(C.track)
    this.scan = scan
    this.track = track
    {
      const F = new THREE.Vector3(), a = new THREE.Vector3(), c = new THREE.Vector3(), q = new THREE.Vector3(), w = new THREE.Vector3(), S = new THREE.Vector3()
      let ok = 0
      let polar = 0
      for (let i = 0; i < N; i++) {
        ll2v(C.lat[i], C.lon[i], 1, F)
        this.FU[i * 3] = F.x
        this.FU[i * 3 + 1] = F.y
        this.FU[i * 3 + 2] = F.z
        const si = C.sat[i]
        const s = SATS[si]
        const oi = oiOf[si]
        if (oi < 0) {
          // No orbit (range data): observed at its row time, pixel aligned north / east.
          this.TOBS[i] = C.t[i] - tMin
          this.NADIR[i] = NaN
          a.set(0, 1, 0).addScaledVector(F, -F.y)
          if (a.lengthSq() < 1e-10) a.set(1, 0, 0).addScaledVector(F, -F.x)
          a.normalize()
          c.crossVectors(a, F).normalize()
          if (s.system === 2) {
            scan[i] = s.pixel_km
            track[i] = s.pixel_km
          }
        } else if (s.system === 3) {
          this.TOBS[i] = C.t[i] - tMin
          this.satPos(oi, C.t[i], S)
          this.subpoint(oi, C.t[i], q)
          this.NADIR[i] = Math.acos(Math.min(1, q.dot(F))) * R_KM
          a.copy(q).addScaledVector(F, -q.dot(F))
          if (a.lengthSq() < 1e-12) a.set(0, 1, 0).addScaledVector(F, -F.y)
          a.normalize()
          c.crossVectors(F, a).normalize()
          w.subVectors(S, F)
          const dKm = w.length() * R_KM
          w.normalize()
          const cosVza = Math.max(0.12, w.dot(F))
          const p0 = (s.pixel_km * dKm) / 35786
          scan[i] = p0
          track[i] = p0 / cosVza
        } else {
          const o = this.orbit[oi].u
          const j0 = Math.max(0, Math.floor((C.t[i] - 180 - this.T0) / STEP))
          const j1 = Math.min(this.NS - 1, Math.ceil((C.t[i] + s.granule_s + 420 - this.T0) / STEP))
          let best = -2
          let bj = j0
          for (let j = j0; j <= j1; j++) {
            const d = o[j * 3] * F.x + o[j * 3 + 1] * F.y + o[j * 3 + 2] * F.z
            if (d > best) {
              best = d
              bj = j
            }
          }
          const tObs = this.T0 + bj * STEP
          this.TOBS[i] = tObs - tMin
          this.NADIR[i] = Math.acos(Math.min(1, best)) * R_KM
          polar++
          if (this.NADIR[i] <= this.swathHalf(si, this.altAt(oi, tObs)) * R_KM + 100) ok++
          this.subpoint(oi, tObs + STEP, q)
          this.subpoint(oi, tObs - STEP, w)
          a.subVectors(q, w)
          a.addScaledVector(F, -a.dot(F)).normalize()
          c.crossVectors(F, a).normalize()
          if (s.system === 2) {
            scan[i] = s.pixel_km
            track[i] = s.pixel_km
          }
        }
        this.ALONG[i * 3] = a.x
        this.ALONG[i * 3 + 1] = a.y
        this.ALONG[i * 3 + 2] = a.z
        this.CROSS[i * 3] = c.x
        this.CROSS[i * 3 + 1] = c.y
        this.CROSS[i * 3 + 2] = c.z
      }
      this.validPct = polar ? (100 * ok) / polar : 100
    }

    // ---------- histogram bins (15 min for a day; whole hours, ~240 bins, for a range) ----------
    this.binSize = this.span <= 2 * 86400 ? 900 : Math.ceil(this.span / 240 / 3600) * 3600
    const NB = Math.ceil(this.span / this.binSize) + 1
    this.bins = [0, 1, 2, 3].map(() => new Float32Array(NB))
    for (let i = 0; i < N; i++) {
      const b = Math.floor(this.TOBS[i] / this.binSize)
      if (b >= 0 && b < NB) this.bins[SATS[C.sat[i]].system][b]++
    }

    // ---------- renderer / scene ----------
    THREE.ColorManagement.enabled = false
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
    this.renderer.domElement.className = 'fm-globe-canvas'
    container.appendChild(this.renderer.domElement)
    this.labels = document.createElement('div')
    this.labels.className = 'fm-globe-labels'
    container.appendChild(this.labels)
    this.camera = new THREE.PerspectiveCamera(40, 1, 0.001, 300)
    this.camera.position.copy(ll2v(20, 30, 3.6))
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.09
    this.controls.minDistance = 1.0004
    this.controls.maxDistance = 25
    this.controls.rotateSpeed = 0.5
    // Zoom is ours (wheel + pinch): multiplicative on altitude, eased, towards the cursor.
    this.controls.enableZoom = false
    this.controls.enablePan = false
    {
      const g = new THREE.BufferGeometry()
      const p: number[] = []
      for (let i = 0; i < 3000; i++) {
        const s = new THREE.Vector3().randomDirection().multiplyScalar(120 + Math.random() * 60)
        p.push(s.x, s.y, s.z)
      }
      g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3))
      this.scene.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0x777777, size: 0.25 })))
    }

    // earth with real day/night
    this.earthU = { dayTex: { value: null }, nightTex: { value: null }, hasTex: { value: 0 }, sunDir: { value: new THREE.Vector3(1, 0, 0) } }
    this.earth = new THREE.Mesh(
      new THREE.SphereGeometry(1, 192, 96),
      new THREE.ShaderMaterial({
        uniforms: this.earthU,
        vertexShader: `varying vec2 vUv; varying vec3 vN; void main(){ vUv=uv; vN=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
        fragmentShader: `uniform sampler2D dayTex, nightTex; uniform float hasTex; uniform vec3 sunDir; varying vec2 vUv; varying vec3 vN;
          void main(){
            float d = dot(normalize(vN), sunDir), k = smoothstep(-0.10, 0.10, d);
            vec3 day = hasTex > 0.5 ? texture2D(dayTex, vUv).rgb : vec3(0.12,0.2,0.3);
            vec3 night = hasTex > 0.5 ? texture2D(nightTex, vUv).rgb * 0.9 + day * 0.07 : vec3(0.02);
            gl_FragColor = vec4(mix(night, day * (0.75 + 0.25 * max(d, 0.)), k), 1.);
          }`,
      }),
    )
    this.scene.add(this.earth)
    const loader = new THREE.TextureLoader()
    Promise.all(
      ['earth-blue-marble.jpg', 'earth-night.jpg'].map(
        (f) => new Promise<THREE.Texture>((res, rej) => loader.load(`https://unpkg.com/three-globe@2.31.0/example/img/${f}`, res, undefined, rej)),
      ),
    )
      .then(([d, n]) => {
        if (this.disposed) return
        this.earthU.dayTex.value = d
        this.earthU.nightTex.value = n
        this.earthU.hasTex.value = 1
      })
      .catch(() => undefined)
    this.scene.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(1.015, 64, 32),
        new THREE.ShaderMaterial({
          transparent: true,
          depthWrite: false,
          side: THREE.BackSide,
          vertexShader: `varying vec3 vN; varying vec3 vV; void main(){ vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }`,
          fragmentShader: `varying vec3 vN; varying vec3 vV; void main(){ float f=pow(1.-abs(dot(vN,vV)),3.); gl_FragColor=vec4(0.55,0.65,0.8,f*0.5); }`,
        }),
      ),
    )
    this.tiles = new TileLayer(this.scene, this.renderer, this.earthU.sunDir)

    // ---------- fire pixels ----------
    this.satOn = SATS.map(() => true)
    this.fireU = {
      uTime: { value: 0 },
      uWindow: { value: 1e9 },
      uGeoWin: { value: 900 },
      uMinConf: { value: 0 },
      uMinFrp: { value: 0 },
      uDn: { value: 0 },
      uUseIn: { value: 0 },
      uPx: { value: 800 },
      uMinPx: { value: 2.5 * this.renderer.getPixelRatio() },
      uDpr: { value: this.renderer.getPixelRatio() },
      uMask: { value: new Array(16).fill(1) },
      uSysCol: { value: SYSTEM_COLORS.map((c) => new THREE.Color(c)) },
    }
    this.buildFires()

    // ---------- satellites ----------
    const SW_N = 150
    const SW_W = 13
    const GEO_N = 128
    this.satObjs = this.orbit.map((o, oi) => {
      const first = SATS[o.sats[0]]
      const col = new THREE.Color(SYSTEM_COLORS[first.system] ?? '#ffffff')
      const geo = first.system === 3
      const grp = new THREE.Group()
      const bodyM = new THREE.MeshBasicMaterial({ color: 0xd8d8d8 })
      grp.add(new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 1.0), bodyM))
      grp.add(new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.05, 0.7), new THREE.MeshBasicMaterial({ color: col })))
      this.scene.add(grp)
      const obj: SatObj = { oi, geo, sats: o.sats, grp, on: true, label: document.createElement('div') }
      if (!geo) {
        const sg = new THREE.BufferGeometry()
        sg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(SW_N * SW_W * 3), 3))
        sg.setAttribute('aA', new THREE.BufferAttribute(new Float32Array(SW_N * SW_W), 1))
        const idx: number[] = []
        for (let k = 0; k < SW_N - 1; k++)
          for (let w = 0; w < SW_W - 1; w++) {
            const a = k * SW_W + w
            const b = a + SW_W
            idx.push(a, a + 1, b, a + 1, b + 1, b)
          }
        sg.setIndex(idx)
        obj.swath = new THREE.Mesh(
          sg,
          new THREE.ShaderMaterial({
            uniforms: { c: { value: col } },
            transparent: true,
            depthWrite: false,
            side: THREE.DoubleSide,
            vertexShader: `attribute float aA; varying float vA; void main(){ vA=aA; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
            fragmentShader: `uniform vec3 c; varying float vA; void main(){ gl_FragColor=vec4(c, vA); }`,
          }),
        )
        obj.swath.renderOrder = 1
        obj.swath.frustumCulled = false
        this.scene.add(obj.swath)
      } else {
        const cg = new THREE.BufferGeometry()
        cg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(GEO_N * 3), 3))
        obj.disk = new THREE.LineLoop(cg, new THREE.LineDashedMaterial({ color: col, dashSize: 0.03, gapSize: 0.02, transparent: true, opacity: 0.8 }))
        obj.disk.frustumCulled = false
        this.scene.add(obj.disk)
      }
      obj.label.className = 'fm-globe-label'
      obj.label.style.color = SYSTEM_COLORS[first.system] ?? '#fff'
      obj.label.textContent = `${o.sats.map((i) => SATS[i].symbol).join(' ')} ${first.name.replace(' FRP', '')}`
      this.labels.appendChild(obj.label)
      return obj
    })
    this.SW_N = SW_N
    this.SW_W = SW_W
    this.GEO_N = GEO_N

    // ---------- overlays: box + selection ----------
    this.boxLine = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.95 }))
    this.boxLine.renderOrder = 8
    this.boxLine.frustumCulled = false
    this.scene.add(this.boxLine)
    this.ring = new THREE.Mesh(new THREE.RingGeometry(0.8, 1, 40), new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide, transparent: true, opacity: 0.9, depthTest: false }))
    this.ring.renderOrder = 6
    this.footprints = new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 }))
    this.footprints.renderOrder = 5
    this.footprints.frustumCulled = false
    this.selGroup.add(this.ring, this.footprints)
    this.selGroup.visible = false
    this.scene.add(this.selGroup)

    this.outline = new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0xffd27a, transparent: true, opacity: 0.9 }))
    this.outline.renderOrder = 7
    this.outline.frustumCulled = false
    this.outline.visible = false
    this.scene.add(this.outline)

    // ---------- input ----------
    const el = this.renderer.domElement
    el.style.touchAction = 'none'
    el.addEventListener('pointerdown', this.onDown)
    el.addEventListener('pointermove', this.onMove)
    el.addEventListener('pointerup', this.onUp)
    el.addEventListener('pointercancel', this.onCancel)
    el.addEventListener('wheel', this.onWheel, { passive: false })
    if (this.isRange) {
      this.simT = this.span
      this.playing = false
    }
    this.resizeObserver = new ResizeObserver(() => this.resize())
    this.resizeObserver.observe(container)
    this.resize()
    this.raf = requestAnimationFrame(this.frame)
  }

  private oiOf: number[]
  private fireGeo!: THREE.InstancedBufferGeometry
  private scan: Float32Array
  private track: Float32Array
  private SW_N: number
  private SW_W: number
  private GEO_N: number

  // ---------- orbit helpers ----------
  private subpoint(oi: number, t: number, out = new THREE.Vector3()) {
    const o = this.orbit[oi]
    let f = (t - this.T0) / STEP
    f = Math.max(0, Math.min(this.NS - 1.001, f))
    const i = Math.floor(f)
    const a = f - i
    const j = i * 3
    return out.set(o.u[j] + (o.u[j + 3] - o.u[j]) * a, o.u[j + 1] + (o.u[j + 4] - o.u[j + 1]) * a, o.u[j + 2] + (o.u[j + 5] - o.u[j + 2]) * a).normalize()
  }
  private altAt(oi: number, t: number) {
    return this.orbit[oi].alt[Math.max(0, Math.min(this.NS - 1, Math.round((t - this.T0) / STEP)))]
  }
  private satPos(oi: number, t: number, out = new THREE.Vector3()) {
    return this.subpoint(oi, t, out).multiplyScalar(1 + this.altAt(oi, t) / R_KM)
  }
  /** Half-width of the ground swath (Earth-centre angle) from the real scan angle and altitude. */
  private swathHalf(si: number, altKm: number) {
    const th = this.D.sats[si].scan_deg * DEG
    const k = ((R_KM + altKm) / R_KM) * Math.sin(th)
    return k >= 1 ? Math.acos(R_KM / (R_KM + altKm)) : Math.asin(k) - th
  }

  private buildFires() {
    const C = this.D.cols
    const SATS = this.D.sats
    const N = this.count
    const g = new THREE.InstancedBufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]), 3))
    g.setIndex([0, 1, 2, 0, 2, 3])
    g.instanceCount = N
    const iC = new Float32Array(N * 3), iX = new Float32Array(N * 3), iY = new Float32Array(N * 3)
    const aT = new Float32Array(N), aSat = new Float32Array(N), aSys = new Float32Array(N), aPat = new Float32Array(N), aConf = new Float32Array(N)
    const aDn = new Float32Array(N), aFrp = new Float32Array(N), aIn = new Float32Array(N).fill(1)
    // coarse geostationary first, then MODIS, VIIRS, and the 30 m Landsat pixels on top
    const RANK = [1, 2, 3, 0]
    const order = Array.from({ length: N }, (_, i) => i).sort((a, b) => RANK[SATS[C.sat[a]].system] - RANK[SATS[C.sat[b]].system] || a - b)
    this.order = Int32Array.from(order)
    for (let n = 0; n < N; n++) {
      const i = order[n]
      const s = SATS[C.sat[i]]
      const hs = this.scan[i] / 2 / R_KM
      const ht = this.track[i] / 2 / R_KM
      for (let k = 0; k < 3; k++) {
        iC[n * 3 + k] = this.FU[i * 3 + k] * R_FIRE
        iX[n * 3 + k] = this.CROSS[i * 3 + k] * hs
        iY[n * 3 + k] = this.ALONG[i * 3 + k] * ht
      }
      aT[n] = this.TOBS[i]
      aSat[n] = C.sat[i]
      aSys[n] = s.system
      aPat[n] = s.pattern
      aConf[n] = C.conf[i]
      aDn[n] = C.dn[i] ? 2 : 1
      aFrp[n] = C.frp[i] ?? 0
    }
    const IA = (arr: Float32Array, n: number) => new THREE.InstancedBufferAttribute(arr, n)
    g.setAttribute('iC', IA(iC, 3))
    g.setAttribute('iX', IA(iX, 3))
    g.setAttribute('iY', IA(iY, 3))
    g.setAttribute('aT', IA(aT, 1))
    g.setAttribute('aSat', IA(aSat, 1))
    g.setAttribute('aSys', IA(aSys, 1))
    g.setAttribute('aPat', IA(aPat, 1))
    g.setAttribute('aConf', IA(aConf, 1))
    g.setAttribute('aDn', IA(aDn, 1))
    g.setAttribute('aFrp', IA(aFrp, 1))
    g.setAttribute('aIn', IA(aIn, 1))
    this.fireGeo = g
    const mesh = new THREE.Mesh(
      g,
      new THREE.ShaderMaterial({
        uniforms: this.fireU,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        vertexShader: `
          attribute vec3 iC, iX, iY;
          attribute float aT, aSat, aSys, aPat, aConf, aDn, aFrp, aIn;
          uniform float uTime, uWindow, uGeoWin, uMinConf, uMinFrp, uDn, uUseIn, uPx, uMinPx; uniform float uMask[16]; uniform vec3 uSysCol[4];
          varying vec3 vCol; varying float vFlash, vPx, vSys, vPat; varying vec2 vUv;
          void main(){
            float age = uTime - aT;
            float win = aSys > 2.5 ? min(uWindow, uGeoWin) : uWindow;
            if (age < 0.0 || age > win || uMask[int(aSat + 0.5)] < 0.5 || aConf < uMinConf - 0.5 || aFrp < uMinFrp
                || (uDn > 0.5 && abs(aDn - uDn) > 0.5) || (uUseIn > 0.5 && aIn < 0.5)) { gl_Position = vec4(2.,2.,2.,1.); return; }
            vec3 c = uSysCol[int(aSys + 0.5)];
            vec4 mvC = modelViewMatrix * vec4(iC, 1.);
            float px = 2. * max(length(iX), length(iY)) * uPx / max(-mvC.z, 1e-6);
            float k = max(1., uMinPx / px);
            vFlash = exp(-age / 120.);
            if (px * k < 40.) k *= 1. + 4. * vFlash;
            vec3 p = iC + (iX * position.x + iY * position.y) * k;
            vUv = position.xy; vPx = px * k; vCol = mix(c, vec3(1.), (px * k >= 40. ? 0.6 : 0.) * vFlash); vSys = aSys; vPat = aPat;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.);
          }`,
        fragmentShader: `
          uniform float uDpr;
          varying vec3 vCol; varying float vFlash, vPx, vSys, vPat; varying vec2 vUv;
          void main(){
            if (vFlash > 0.08 && vPx < 200.) { float a = smoothstep(1., 0., length(vUv)); gl_FragColor = vec4(mix(vCol, vec3(1.), vFlash * 0.7), a); return; }
            if (vPx < 12.) { gl_FragColor = vec4(vCol, 0.92); return; }
            float u = uDpr;
            vec2 q = vUv * vPx * 0.5 + 4096.;
            float m = max(abs(vUv.x), abs(vUv.y));
            if (m > 1. - 2. * 2.2 * u / vPx) {
              float s = abs(vUv.x) > abs(vUv.y) ? q.y : q.x;
              bool on = true;
              if (vSys > 0.5 && vSys < 1.5) on = mod(s, 9. * u) < 5.5 * u;
              else if (vSys > 1.5 && vSys < 2.5) on = mod(s, 5. * u) < 2.2 * u;
              else if (vSys > 2.5) { float k = mod(s, 13. * u); on = k < 6.5 * u || (k > 8.6 * u && k < 10.6 * u); }
              gl_FragColor = vec4(vCol, on ? 1. : 0.1); return;
            }
            float P = 7. * u, a;
            if (vPat < 0.5) a = 0.42;
            else if (vPat < 1.5) a = mod(q.x + q.y, P) < 2.2 * u ? 0.95 : 0.1;
            else if (vPat < 2.5) a = length(mod(q, P) - 0.5 * P) < 1.5 * u ? 0.95 : 0.1;
            else if (vPat < 3.5) a = (mod(q.x + q.y, P) < 1.6 * u || mod(q.x - q.y, P) < 1.6 * u) ? 0.9 : 0.1;
            else a = mod(q.y, P) < 2. * u ? 0.95 : 0.1;
            gl_FragColor = vec4(vCol, a);
          }`,
      }),
    )
    mesh.frustumCulled = false
    mesh.renderOrder = 2
    this.scene.add(mesh)
    this.fireMesh = mesh
    this.buildHeat()
  }

  // ---------- public controls ----------
  setPlaying(playing: boolean) {
    if (playing && this.simT >= this.span) this.simT = -600
    this.playing = playing
  }
  setSpeed(speed: number) {
    this.speed = speed
  }
  setTime(t: number) {
    this.simT = Math.max(-600, Math.min(this.span, t))
  }
  /** Shows only the records of the last `seconds` (1e9 = everything seen so far). */
  setWindow(seconds: number) {
    this.fireU.uWindow.value = seconds
  }
  setLook(look: Look) {
    this.look = look
    this.flameKey = ''
  }

  /** Heat map: one soft splat per visible record (FRP-weighted), summed off-screen, then coloured. */
  private buildHeat() {
    const vs = `
      attribute vec3 iC; attribute float aT, aSat, aSys, aConf, aDn, aFrp, aIn;
      uniform float uTime, uWindow, uGeoWin, uMinConf, uMinFrp, uDn, uUseIn, uSplat; uniform float uMask[16]; uniform vec2 uView;
      varying vec2 vUv; varying float vW;
      void main(){
        float age = uTime - aT;
        float win = aSys > 2.5 ? min(uWindow, uGeoWin) : uWindow;
        bool off = age < 0.0 || age > win || uMask[int(aSat + 0.5)] < 0.5 || aConf < uMinConf - 0.5 || aFrp < uMinFrp
          || (uDn > 0.5 && abs(aDn - uDn) > 0.5) || (uUseIn > 0.5 && aIn < 0.5) || aSys > 2.5
          || dot(iC, cameraPosition - iC) < 0.0;
        if (off) { gl_Position = vec4(2.,2.,2.,1.); return; }
        vec4 c = projectionMatrix * modelViewMatrix * vec4(iC, 1.);
        c.xy += position.xy * uSplat * 2.0 / uView * c.w;
        vUv = position.xy;
        vW = 0.35 + log(1.0 + max(aFrp, 0.0)) * 0.35;
        gl_Position = c;
      }`
    const fs = `varying vec2 vUv; varying float vW;
      void main(){ float d = dot(vUv, vUv); if (d > 1.) discard; gl_FragColor = vec4(vW * exp(-d * 3.5), 0., 0., 1.); }`
    const u = this.fireU as Record<string, THREE.IUniform>
    u.uSplat = { value: 26 * this.renderer.getPixelRatio() }
    u.uView = { value: new THREE.Vector2(1, 1) }
    const splats = new THREE.Mesh(
      this.fireGeo,
      new THREE.ShaderMaterial({ uniforms: u, vertexShader: vs, fragmentShader: fs, transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending }),
    )
    splats.frustumCulled = false
    this.heatScene.add(splats)
    const quad = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({
        uniforms: this.heatU,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }`,
        fragmentShader: `uniform sampler2D tHeat; uniform float uScale; varying vec2 vUv;
          vec3 ramp(float t){
            vec3 a = vec3(0.35, 0.02, 0.18), b = vec3(0.86, 0.12, 0.08), c = vec3(1.0, 0.55, 0.05), d = vec3(1.0, 0.92, 0.55);
            return t < 0.33 ? mix(a, b, t / 0.33) : t < 0.66 ? mix(b, c, (t - 0.33) / 0.33) : mix(c, d, (t - 0.66) / 0.34);
          }
          void main(){
            float I = texture2D(tHeat, vUv).r * uScale;
            float v = 1.0 - exp(-I);
            float a = smoothstep(0.03, 0.28, v) * 0.92;
            if (a < 0.01) discard;
            gl_FragColor = vec4(ramp(v), a);
          }`,
      }),
    )
    quad.frustumCulled = false
    this.overlayScene.add(quad)
  }

  /**
   * 3D fire: visible records merged by their distance on screen (about 26 px), so fires that look
   * close become one flame; zooming out merges more, zooming in splits them. Each flame is a
   * camera-facing, faceted (low-poly) animated flame, taller and brighter with its total power.
   */
  private updateFlames(alt: number, now: number) {
    const pr = this.renderer.getPixelRatio()
    const pxPerRad = (this.fireU.uPx.value as number) / Math.max(alt, 1e-4)
    const rKm = Math.max(0.6, ((26 * pr) / pxPerRad) * R_KM)
    const key = `${Math.round(Math.log(rKm) * 5)}|${Math.floor(this.simT / 600)}|${this.filterVersion}`
    if (key === this.flameKey || now - this.flameAt < 250) return
    this.flameKey = key
    this.flameAt = now
    const C = this.D.cols
    const deg = rKm / 111.2
    const W = Math.ceil(360 / deg)
    type Cl = { la: number; lo: number; n: number; frp: number; i: number; j: number }
    const cells = new Map<number, Cl>()
    for (let i = 0; i < this.count; i++) {
      if (!this.isVisible(i) || this.D.sats[C.sat[i]].system === 3) continue
      const ci = Math.floor((C.lat[i] + 90) / deg), cj = Math.floor((C.lon[i] + 180) / deg)
      const k = ci * W + cj
      let c = cells.get(k)
      if (!c) cells.set(k, (c = { la: 0, lo: 0, n: 0, frp: 0, i: ci, j: cj }))
      c.la += C.lat[i]
      c.lo += C.lon[i]
      c.n++
      c.frp += C.frp[i] ?? 1
    }
    // Greedy merge, strongest first: each flame absorbs the cells whose centre lies within the merge
    // radius of it (no chaining across a whole fire zone, no grid seams between neighbours).
    const order = [...cells.entries()].sort((a, b) => b[1].frp - a[1].frp)
    const taken = new Set<number>()
    const lim = (rKm * 1.5) / 111.2
    const groups: { la: number; lo: number; n: number; frp: number }[] = []
    for (const [k, a] of order) {
      if (taken.has(k)) continue
      taken.add(k)
      const g = { la: a.la, lo: a.lo, n: a.n, frp: a.frp }
      const ala = a.la / a.n, alo = a.lo / a.n, kc = Math.cos((ala * Math.PI) / 180)
      for (let di = -2; di <= 2; di++)
        for (let dj = -2; dj <= 2; dj++) {
          if (!di && !dj) continue
          const nk = (a.i + di) * W + (a.j + dj)
          const b = cells.get(nk)
          if (!b || taken.has(nk)) continue
          if (Math.hypot(ala - b.la / b.n, (alo - b.lo / b.n) * kc) <= lim) {
            taken.add(nk)
            g.la += b.la
            g.lo += b.lo
            g.n += b.n
            g.frp += b.frp
          }
        }
      groups.push(g)
    }
    const list = groups.sort((a, b) => b.frp - a.frp).slice(0, 3000)
    if (this.flames) {
      this.scene.remove(this.flames)
      this.flames.geometry.dispose()
      ;(this.flames.material as THREE.Material).dispose()
      this.flames = null
    }
    if (!list.length) return
    const g = new THREE.InstancedBufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute([-0.5, 0, 0, 0.5, 0, 0, 0.5, 1, 0, -0.5, 1, 0], 3))
    g.setIndex([0, 1, 2, 0, 2, 3])
    g.instanceCount = list.length
    const iP = new Float32Array(list.length * 3), iI = new Float32Array(list.length), iS = new Float32Array(list.length)
    const v = new THREE.Vector3()
    // draw the smallest first so big flames stand in front
    list.reverse().forEach((c, n) => {
      ll2v(c.la / c.n, c.lo / c.n, 1, v)
      iP.set([v.x, v.y, v.z], n * 3)
      iI[n] = Math.min(1, Math.log10(1 + c.frp) / 3.6) // ~1 MW … 4 GW
      iS[n] = ((c.la * 12.9898 + c.lo * 78.233) % 1 + 1) % 1
    })
    g.setAttribute('iP', new THREE.InstancedBufferAttribute(iP, 3))
    g.setAttribute('iI', new THREE.InstancedBufferAttribute(iI, 1))
    g.setAttribute('iS', new THREE.InstancedBufferAttribute(iS, 1))
    const u = this.fireU as Record<string, THREE.IUniform>
    const mesh = new THREE.Mesh(
      g,
      new THREE.ShaderMaterial({
        uniforms: { uClock: this.flameClock, uView: u.uView, uPr: { value: pr }, uClose: this.flameClose },
        transparent: true,
        depthTest: false,
        depthWrite: false,
        vertexShader: `
          attribute vec3 iP; attribute float iI, iS;
          uniform vec2 uView; uniform float uPr, uClose;
          varying vec2 vUv; varying float vI, vS;
          void main(){
            if (dot(iP, cameraPosition - iP) < 0.0) { gl_Position = vec4(2., 2., 2., 1.); return; }
            vec4 c = projectionMatrix * modelViewMatrix * vec4(iP * 1.0002, 1.);
            float h = (16.0 + 58.0 * iI * iI + 10.0 * iI) * uPr * uClose;
            float w = h * (0.5 + 0.12 * iI);
            c.xy += vec2(position.x * w, position.y * h - h * 0.08) * 2.0 / uView * c.w;
            vUv = position.xy; vI = iI; vS = iS;
            gl_Position = c;
          }`,
        fragmentShader: `
          uniform float uClock;
          varying vec2 vUv; varying float vI, vS;
          float h1(float n){ return fract(sin(n) * 43758.5453); }
          float noise(vec2 p){
            vec2 i = floor(p), f = fract(p);
            float a = h1(i.x + i.y * 57.0), b = h1(i.x + 1.0 + i.y * 57.0), c = h1(i.x + (i.y + 1.0) * 57.0), d = h1(i.x + 1.0 + (i.y + 1.0) * 57.0);
            vec2 u = f * f * (3.0 - 2.0 * f);
            return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
          }
          void main(){
            float y = vUv.y;
            float t = uClock * (2.2 + vS) + vS * 40.0;
            // low-poly: the flame is cut into horizontal bands, each band one facet
            float band = floor(y * 6.0) / 6.0;
            float n = noise(vec2(vS * 9.0 + band * 3.0, band * 5.0 - t * 1.6));
            float sway = (noise(vec2(t * 0.7, vS * 3.0)) - 0.5) * 0.35 * y;
            float x = vUv.x - sway;
            // teardrop: wide at the base, a tongue toward the tip
            float width = 0.5 * pow(max(0.0, 1.0 - y), 0.75) * (0.62 + 0.5 * n) * smoothstep(0.0, 0.12, y + 0.05);
            float ax = abs(x);
            if (ax > width || y > 0.98) discard;
            float core = 1.0 - ax / max(width, 1e-3);
            float facet = floor(core * 3.0) / 3.0;
            vec3 red = vec3(0.86, 0.13, 0.05), orange = vec3(1.0, 0.45, 0.06), yellow = vec3(1.0, 0.82, 0.26), white = vec3(1.0, 0.97, 0.8);
            vec3 col = mix(red, orange, smoothstep(0.0, 0.34, facet));
            col = mix(col, yellow, smoothstep(0.34, 0.67, facet) * (1.0 - y * 0.7));
            col = mix(col, white, smoothstep(0.67, 1.0, facet) * (1.0 - y) * (0.4 + 0.6 * vI));
            col *= 0.82 + 0.18 * noise(vec2(band * 9.0, t));
            float edge = smoothstep(width, width - 0.04, ax);
            gl_FragColor = vec4(col * (0.85 + 0.35 * vI), edge);
          }`,
      }),
    )
    mesh.frustumCulled = false
    mesh.renderOrder = 10
    this.scene.add(mesh)
    this.flames = mesh
  }
  private flameClose = { value: 1 }
  private flameClock = { value: 0 }

  /** The known heat sources' icons (constant size on screen, hidden behind the Earth). */
  setSources(list: HeatSource[]) {
    for (const p of this.sourceLayers) {
      this.scene.remove(p)
      p.geometry.dispose()
      ;(p.material as THREE.PointsMaterial).map?.dispose()
      ;(p.material as THREE.Material).dispose()
    }
    this.sourceLayers = []
    this.sources = list
    const v = new THREE.Vector3()
    for (const kind of HEAT_KINDS) {
      const pts: number[] = []
      for (const s of list) {
        if (s.kind !== kind) continue
        ll2v(s.lat, s.lon, 1.0006, v)
        pts.push(v.x, v.y, v.z)
      }
      if (!pts.length) continue
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3))
      const layer = new THREE.Points(
        geo,
        new THREE.PointsMaterial({ map: iconTexture(kind), size: 16, sizeAttenuation: false, transparent: true, alphaTest: 0.02, depthWrite: false }),
      )
      layer.renderOrder = 9
      layer.frustumCulled = false
      this.scene.add(layer)
      this.sourceLayers.push(layer)
    }
  }
  setSourcesVisible(on: boolean) {
    this.sourcesOn = on
  }
  /** The icon under a screen point (16 px), front side of the Earth only. */
  private pickSource(e: { clientX: number; clientY: number }): HeatSource | null {
    if (!this.sourcesOn || !this.sourceLayers.some((l) => l.visible) || !this.sources.length) return null
    const r = this.renderer.domElement.getBoundingClientRect()
    const v = new THREE.Vector3()
    const cam = this.camera.position
    let best: HeatSource | null = null
    let bd = 14
    for (const s of this.sources) {
      ll2v(s.lat, s.lon, 1, v)
      if (v.dot(cam) - 1 < 0) continue
      v.project(this.camera)
      const d = Math.hypot(((v.x + 1) / 2) * r.width - (e.clientX - r.left), ((1 - v.y) / 2) * r.height - (e.clientY - r.top))
      if (d < bd) {
        bd = d
        best = s
      }
    }
    return best
  }

  /** Satellites, confidence, FRP and day/night: drawn and picked alike. */
  setFilters(f: FireFilters) {
    const mask = this.fireU.uMask.value as number[]
    this.D.sats.forEach((_, i) => {
      const on = f.sats[i] !== false
      mask[i] = on ? 1 : 0
      this.satOn[i] = on
    })
    for (const o of this.satObjs) o.on = o.sats.some((j) => this.satOn[j])
    this.fireU.uMinConf.value = f.minConf
    this.fireU.uMinFrp.value = f.minFrp
    this.fireU.uDn.value = f.dayNight
    this.filterVersion++
  }
  /** Records inside an area (one flag per record, in data order), or null for everywhere. */
  setAreaMask(mask: Uint8Array | null) {
    this.filterVersion++
    this.inMask = mask
    this.fireU.uUseIn.value = mask ? 1 : 0
    if (!mask) return
    const attr = this.fireGeo.getAttribute('aIn') as THREE.InstancedBufferAttribute
    const arr = attr.array as Float32Array
    for (let n = 0; n < this.order.length; n++) arr[n] = mask[this.order[n]]
    attr.needsUpdate = true
  }
  /** A country (or any) outline: rings of [lon, lat]. */
  setOutline(rings: [number, number][][] | null) {
    if (!rings?.length) {
      this.outline.visible = false
      return
    }
    const pts: number[] = []
    const a = new THREE.Vector3(), b = new THREE.Vector3()
    for (const ring of rings)
      for (let k = 0; k < ring.length - 1; k++) {
        ll2v(ring[k][1], ring[k][0], 1.0005, a)
        ll2v(ring[k + 1][1], ring[k + 1][0], 1.0005, b)
        pts.push(a.x, a.y, a.z, b.x, b.y, b.z)
      }
    this.outline.geometry.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3))
    this.outline.geometry.computeBoundingSphere()
    this.outline.visible = true
  }
  setDrawing(on: boolean) {
    this.drawing = on ? 1 : 0
    this.p1 = null
    this.dragBox = false
    this.controls.enabled = !on
    this.renderer.domElement.style.cursor = on ? 'crosshair' : ''
  }
  setBox(bb: number[] | null) {
    if (!bb) {
      this.boxLine.visible = false
      return
    }
    const [w, s, e, n] = bb
    const pts: THREE.Vector3[] = []
    const k = 60
    for (let i = 0; i <= k; i++) pts.push(ll2v(s, w + ((e - w) * i) / k, 1.0004))
    for (let i = 0; i <= k; i++) pts.push(ll2v(s + ((n - s) * i) / k, e, 1.0004))
    for (let i = 0; i <= k; i++) pts.push(ll2v(n, e - ((e - w) * i) / k, 1.0004))
    for (let i = 0; i <= k; i++) pts.push(ll2v(n - ((n - s) * i) / k, w, 1.0004))
    this.boxLine.geometry.setFromPoints(pts)
    this.boxLine.visible = true
  }
  /** Flies so the box fills about 70% of the view. */
  flyToBox(bb: number[]) {
    const [w, s, e, n] = bb
    const lat = (s + n) / 2
    const span = Math.max((e - w) * Math.cos(lat * DEG), n - s) * DEG
    const altKm = ((span / 0.7 / 2 / Math.tan((this.camera.fov * DEG) / 2)) * R_KM) * Math.max(1, 1 / this.camera.aspect)
    this.flyToView({ lat, lon: (w + e) / 2, altKm })
  }
  flyToView(v: CameraView) {
    const alt = Math.min(24, Math.max(0.0004, v.altKm / R_KM))
    this.zoomTarget = null
    this.flyTo = ll2v(v.lat, v.lon, 1 + alt)
  }
  flyHome() {
    this.zoomTarget = null
    this.flyTo = this.camera.position.clone().normalize().multiplyScalar(3.6)
  }
  zoomToSelection() {
    if (!this.selGroup.visible) return
    this.zoomTarget = null
    this.flyTo = this.ring.position.clone().normalize().multiplyScalar(1.003)
  }
  clearSelection() {
    this.selGroup.visible = false
  }
  /** Where the camera looks from. */
  cameraView(): CameraView {
    const [lat, lon] = v2ll(this.camera.position)
    return { lat: Math.round(lat * 1e3) / 1e3, lon: Math.round(lon * 1e3) / 1e3, altKm: Math.round((this.camera.position.length() - 1) * R_KM) }
  }
  /** Visible records right now (time window and every filter), by system and satellite. */
  /** The busiest cells (`cellDeg` wide) among visible records, by total FRP: where the fires are. */
  hotspots(limit = 8, cellDeg = 0.25): { lat: number; lon: number; count: number; frp: number; last: number }[] {
    const C = this.D.cols
    const cells = new Map<number, { la: number; lo: number; count: number; frp: number; last: number }>()
    const W = Math.ceil(360 / cellDeg)
    for (let i = 0; i < this.count; i++) {
      if (!this.isVisible(i)) continue
      const key = Math.floor((C.lat[i] + 90) / cellDeg) * W + Math.floor((C.lon[i] + 180) / cellDeg)
      let c = cells.get(key)
      if (!c) cells.set(key, (c = { la: 0, lo: 0, count: 0, frp: 0, last: 0 }))
      c.la += C.lat[i]
      c.lo += C.lon[i]
      c.count++
      c.frp += C.frp[i] ?? 0
      c.last = Math.max(c.last, C.t[i])
    }
    return [...cells.values()]
      .sort((a, b) => b.frp - a.frp || b.count - a.count)
      .slice(0, limit)
      .map((c) => ({ lat: c.la / c.count, lon: c.lo / c.count, count: c.count, frp: c.frp, last: c.last }))
  }
  /** Rows of the loaded data inside a box that pass every filter, as CSV. */
  csv(bb: number[]): string {
    const C = this.D.cols
    const out = ['satellite,latitude,longitude,time_utc,frp_mw,confidence,day_night,scan_km,track_km']
    for (let i = 0; i < this.count; i++) {
      if (C.lon[i] < bb[0] || C.lon[i] > bb[2] || C.lat[i] < bb[1] || C.lat[i] > bb[3] || !this.isVisible(i)) continue
      out.push(
        [this.D.sats[C.sat[i]].code, C.lat[i], C.lon[i], new Date(C.t[i] * 1000).toISOString(), C.frp[i] ?? '', ['low', 'nominal', 'high'][C.conf[i]] ?? '', C.dn[i] ? 'N' : 'D', this.scan[i].toFixed(2), this.track[i].toFixed(2)].join(','),
      )
    }
    return out.join('\n') + '\n'
  }
  stats(bb?: number[] | null): Stats {
    const C = this.D.cols
    const out: Stats = { total: 0, bySystem: [0, 0, 0, 0], bySat: this.D.sats.map(() => 0), frp: 0 }
    for (let i = 0; i < this.count; i++) {
      if (bb && (C.lon[i] < bb[0] || C.lon[i] > bb[2] || C.lat[i] < bb[1] || C.lat[i] > bb[3])) continue
      if (!this.isVisible(i)) continue
      out.total++
      out.bySat[C.sat[i]]++
      out.bySystem[this.D.sats[C.sat[i]].system]++
      out.frp += C.frp[i] ?? 0
    }
    return out
  }

  // ---------- picking ----------
  private hitLL(e: { clientX: number; clientY: number }): [number, number] | null {
    const hit = this.hit(e)
    return hit ? v2ll(hit) : null
  }
  private hit(e: { clientX: number; clientY: number }): THREE.Vector3 | null {
    const r = this.renderer.domElement.getBoundingClientRect()
    const mouse = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1)
    const ray = new THREE.Raycaster()
    ray.setFromCamera(mouse, this.camera)
    return ray.intersectObject(this.earth)[0]?.point ?? null
  }
  private boxFrom(a: [number, number], b: [number, number]) {
    return [Math.min(a[1], b[1]), Math.min(a[0], b[0]), Math.max(a[1], b[1]), Math.max(a[0], b[0])].map((x) => Math.round(x * 100) / 100)
  }
  private onDown = (e: PointerEvent) => {
    this.pinch.set(e.pointerId, [e.clientX, e.clientY])
    if (this.pinch.size === 2) {
      const [p, q] = [...this.pinch.values()]
      this.pinchDist = Math.hypot(p[0] - q[0], p[1] - q[1])
      this.downXY = null
      return
    }
    this.downXY = [e.clientX, e.clientY]
    this.flyTo = null
    if (this.drawing === 1) {
      const ll = this.hitLL(e)
      if (!ll) return
      this.p1 = [ll[0], ll[1]]
      this.dragBox = true
      this.renderer.domElement.setPointerCapture(e.pointerId)
    }
  }
  private onMove = (e: PointerEvent) => {
    if (this.pinch.has(e.pointerId)) this.pinch.set(e.pointerId, [e.clientX, e.clientY])
    if (this.pinch.size === 2 && this.pinchDist > 0) {
      const [p, q] = [...this.pinch.values()]
      const d = Math.hypot(p[0] - q[0], p[1] - q[1])
      if (d > 0) this.zoomBy(this.pinchDist / d, { clientX: (p[0] + q[0]) / 2, clientY: (p[1] + q[1]) / 2 }, true)
      this.pinchDist = d
      return
    }
    if ((this.drawing === 1 && this.dragBox && this.p1) || (this.drawing === 2 && this.p1)) {
      const ll = this.hitLL(e)
      if (ll) this.setBox(this.boxFrom(this.p1, ll))
    }
  }
  private onCancel = (e: PointerEvent) => {
    this.pinch.delete(e.pointerId)
    if (this.pinch.size < 2) this.pinchDist = 0
  }
  private onUp = (e: PointerEvent) => {
    this.pinch.delete(e.pointerId)
    if (this.pinch.size < 2) this.pinchDist = 0
    if (this.drawing) {
      const ll = this.hitLL(e)
      const moved = this.downXY ? Math.hypot(e.clientX - this.downXY[0], e.clientY - this.downXY[1]) : 0
      if (this.drawing === 1 && this.dragBox && this.p1 && ll && moved > 8) {
        // drag: one gesture draws the box
        const bb = this.boxFrom(this.p1, ll)
        this.setDrawing(false)
        this.setBox(bb)
        this.cb.onBoxPoint(2, bb)
      } else if (this.drawing === 1 && this.p1) {
        // a tap: the first corner; the second tap closes the box
        this.drawing = 2
        this.dragBox = false
        this.cb.onBoxPoint(1, null)
      } else if (this.drawing === 2 && this.p1 && ll) {
        const bb = this.boxFrom(this.p1, ll)
        this.setDrawing(false)
        this.setBox(bb)
        this.cb.onBoxPoint(2, bb)
      }
      this.downXY = null
      return
    }
    if (!this.downXY || Math.hypot(e.clientX - this.downXY[0], e.clientY - this.downXY[1]) > 5) return
    this.downXY = null
    const hit = this.hit(e)
    if (!hit) {
      this.select(-1)
      return
    }
    const source = this.pickSource(e)
    if (source) {
      this.cb.onSource?.(source)
      return
    }
    this.select(this.nearest(hit.clone().normalize()))
  }
  private onWheel = (e: WheelEvent) => {
    e.preventDefault()
    // trackpads send many small deltas, mice a few big ones: both map to a gentle factor
    const dy = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY
    this.zoomBy(Math.exp(Math.max(-1, Math.min(1, dy / 400))), e, false)
  }
  /** Altitude × factor, eased; the point under the cursor drifts towards the center while zooming in. */
  private zoomBy(factor: number, at: { clientX: number; clientY: number }, immediate: boolean) {
    const alt = this.zoomTarget ?? this.camera.position.length() - 1
    const next = Math.min(24, Math.max(0.0004, alt * factor))
    this.flyTo = null
    this.zoomTarget = next
    this.zoomAnchor = factor < 1 ? (this.hit(at)?.normalize() ?? null) : null
    if (immediate) this.applyZoom(1)
  }
  private applyZoom(k: number) {
    if (this.zoomTarget == null) return
    const d = this.camera.position.length()
    const alt = d - 1
    const nextAlt = alt + (this.zoomTarget - alt) * k
    const dirV = this.camera.position.clone().divideScalar(d)
    if (this.zoomAnchor && nextAlt < alt) {
      const share = Math.min(1, (1 - nextAlt / alt) * 0.9)
      dirV.lerp(this.zoomAnchor, share).normalize()
    }
    this.camera.position.copy(dirV.multiplyScalar(1 + nextAlt))
    if (Math.abs(this.zoomTarget - nextAlt) < this.zoomTarget * 0.002) {
      this.zoomTarget = null
      this.zoomAnchor = null
    }
  }

  private isVisible(i: number) {
    const C = this.D.cols
    const age = this.simT - this.TOBS[i]
    const geo = this.D.sats[C.sat[i]].system === 3
    const win = geo ? Math.min(this.fireU.uWindow.value as number, this.fireU.uGeoWin.value as number) : (this.fireU.uWindow.value as number)
    if (age < 0 || age > win || !this.satOn[C.sat[i]]) return false
    if (C.conf[i] < (this.fireU.uMinConf.value as number) || (C.frp[i] ?? 0) < (this.fireU.uMinFrp.value as number)) return false
    const dn = this.fireU.uDn.value as number
    if (dn && (C.dn[i] ? 2 : 1) !== dn) return false
    return !this.inMask || this.inMask[i] === 1
  }

  private nearest(P: THREE.Vector3) {
    const pxW = (this.fireU.uPx.value as number) / this.camera.position.distanceTo(P)
    const cosT = Math.cos(Math.max(8 / R_KM, (14 * this.renderer.getPixelRatio()) / pxW))
    let best = -1
    let bScore = Infinity
    const FU = this.FU
    for (let i = 0; i < this.count; i++) {
      const d = FU[i * 3] * P.x + FU[i * 3 + 1] * P.y + FU[i * 3 + 2] * P.z
      if (d < cosT || !this.isVisible(i)) continue
      const hs = this.scan[i] / 2 / R_KM
      const ht = this.track[i] / 2 / R_KM
      const k = Math.max(1, (this.fireU.uMinPx.value as number) / (2 * Math.max(hs, ht) * pxW))
      const dx = P.x - FU[i * 3], dy = P.y - FU[i * 3 + 1], dz = P.z - FU[i * 3 + 2]
      const lx = (dx * this.CROSS[i * 3] + dy * this.CROSS[i * 3 + 1] + dz * this.CROSS[i * 3 + 2]) / (hs * k)
      const ly = (dx * this.ALONG[i * 3] + dy * this.ALONG[i * 3 + 1] + dz * this.ALONG[i * 3 + 2]) / (ht * k)
      const mm = Math.max(Math.abs(lx), Math.abs(ly))
      const score = mm <= 1 ? mm : 10 + Math.acos(Math.min(1, d)) * pxW
      if (score < bScore) {
        bScore = score
        best = i
      }
    }
    return best
  }

  private footprintSegs(i: number, arr: number[]) {
    const F = new THREE.Vector3(this.FU[i * 3], this.FU[i * 3 + 1], this.FU[i * 3 + 2])
    const cr = new THREE.Vector3(this.CROSS[i * 3], this.CROSS[i * 3 + 1], this.CROSS[i * 3 + 2])
    const al = new THREE.Vector3(this.ALONG[i * 3], this.ALONG[i * 3 + 1], this.ALONG[i * 3 + 2])
    const hs = (this.scan[i] / 2 / R_KM) * 1.08
    const ht = (this.track[i] / 2 / R_KM) * 1.08
    const corner = (a: number, b: number) => F.clone().addScaledVector(cr, a * hs).addScaledVector(al, b * ht).normalize().multiplyScalar(1.00006)
    const c = [corner(-1, -1), corner(1, -1), corner(1, 1), corner(-1, 1)]
    for (let k = 0; k < 4; k++) {
      const a = c[k]
      const b = c[(k + 1) % 4]
      arr.push(a.x, a.y, a.z, b.x, b.y, b.z)
    }
  }

  private select(i: number) {
    if (i < 0) {
      this.selGroup.visible = false
      this.cb.onPick(null)
      return
    }
    const C = this.D.cols
    const SATS = this.D.sats
    const si = C.sat[i]
    const s = SATS[si]
    const oi = this.oiOf[si]
    const tObs = this.TOBS[i] + this.tMin
    const geo = s.system === 3
    const F = new THREE.Vector3(this.FU[i * 3], this.FU[i * 3 + 1], this.FU[i * 3 + 2])
    this.ring.position.copy(F).multiplyScalar(1.00007)
    this.ring.lookAt(F.clone().multiplyScalar(2))
    this.selGroup.visible = true
    const vza = oi < 0 ? null : Math.acos(this.satPos(oi, tObs).clone().sub(F).normalize().dot(F)) / DEG
    const same: number[] = []
    const segs: number[] = []
    const bySat = new Map<number, number>()
    const rOther = Math.max(1.5, this.scan[i], this.track[i])
    const cosSame = Math.cos(25 / R_KM)
    const cosOther = Math.cos(rOther / R_KM)
    for (let j = 0; j < this.count; j++) {
      const d = this.FU[j * 3] * F.x + this.FU[j * 3 + 1] * F.y + this.FU[j * 3 + 2] * F.z
      if (d < cosSame) continue
      const samePass = C.sat[j] === si && Math.abs(this.TOBS[j] - this.TOBS[i]) < (geo ? 1 : 900)
      if (samePass) {
        same.push(j)
        this.footprintSegs(j, segs)
      } else if (d >= cosOther) bySat.set(C.sat[j], (bySat.get(C.sat[j]) ?? 0) + 1)
    }
    this.footprints.geometry.setAttribute('position', new THREE.Float32BufferAttribute(segs, 3))
    this.footprints.geometry.computeBoundingSphere()
    this.cb.onPick({
      index: i,
      sat: s,
      lat: C.lat[i],
      lon: C.lon[i],
      time: C.t[i],
      frp: C.frp[i],
      conf: C.conf[i],
      confRaw: C.craw[i],
      dayNight: C.dn[i] ? 'N' : 'D',
      scanKm: this.scan[i],
      trackKm: this.track[i],
      growth: Math.sqrt(this.scan[i] * this.track[i]) / s.pixel_km,
      b4: C.b4?.[i] ?? null,
      b5: C.b5?.[i] ?? null,
      version: C.ver && this.D.versions ? (this.D.versions[C.ver[i]] ?? null) : null,
      altitudeKm: oi < 0 ? null : this.altAt(oi, tObs),
      nadirKm: Number.isFinite(this.NADIR[i]) ? this.NADIR[i] : null,
      viewZenith: vza,
      samePass: same.length,
      samePassFrp: same.reduce((a, j) => a + (C.frp[j] ?? 0), 0),
      others: [...bySat].sort((a, b) => b[1] - a[1]).map(([k, count]) => ({ sat: SATS[k], count })),
    })
  }

  // ---------- loop ----------
  private resize() {
    const w = this.view.clientWidth
    const h = this.view.clientHeight
    if (!w || !h) return
    this.renderer.setSize(w, h)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    this.fireU.uPx.value = (h * this.renderer.getPixelRatio()) / (2 * Math.tan((this.camera.fov * DEG) / 2))
    const pr = this.renderer.getPixelRatio()
    if (this.fireU.uView) (this.fireU.uView.value as THREE.Vector2).set(w * pr, h * pr)
    this.heatRT?.dispose()
    // half resolution is plenty for a blurred density
    this.heatRT = new THREE.WebGLRenderTarget(Math.ceil((w * pr) / 2), Math.ceil((h * pr) / 2), { type: THREE.HalfFloatType })
    this.heatU.tHeat.value = this.heatRT.texture
  }

  private updateSats(tAbs: number) {
    const S = new THREE.Vector3(), up = new THREE.Vector3(), q = new THREE.Vector3(), w = new THREE.Vector3(), c = new THREE.Vector3(), e = new THREE.Vector3()
    const basis = new THREE.Matrix4()
    for (const o of this.satObjs) {
      const si = o.sats[0]
      const oi = o.oi
      this.satPos(oi, tAbs, S)
      o.grp.visible = o.on
      o.grp.position.copy(S)
      up.copy(S).normalize()
      const fwd = this.subpoint(oi, tAbs + STEP, q).sub(this.subpoint(oi, tAbs - STEP, w))
      fwd.addScaledVector(up, -fwd.dot(up))
      if (fwd.lengthSq() < 1e-14) fwd.set(0, 1, 0).addScaledVector(up, -up.y)
      fwd.normalize()
      basis.makeBasis(c.crossVectors(up, fwd), up, fwd)
      o.grp.quaternion.setFromRotationMatrix(basis)
      o.grp.scale.setScalar(Math.max(0.004, this.camera.position.distanceTo(S) * 0.011))
      const altKm = this.altAt(oi, tAbs)
      if (o.swath) {
        o.swath.visible = o.on
        if (o.on) {
          const P = o.swath.geometry.attributes.position.array as Float32Array
          const A = o.swath.geometry.attributes.aA.array as Float32Array
          const half = this.swathHalf(si, altKm)
          const p = new THREE.Vector3()
          for (let k = 0; k < this.SW_N; k++) {
            const t = tAbs - k * STEP
            this.subpoint(oi, t, p)
            this.subpoint(oi, t + STEP, q)
            this.subpoint(oi, t - STEP, w)
            w.subVectors(q, w).normalize()
            c.crossVectors(p, w).normalize()
            const al = 0.32 * Math.pow(1 - k / this.SW_N, 1.4)
            for (let ww = 0; ww < this.SW_W; ww++) {
              const ang = half * ((2 * ww) / (this.SW_W - 1) - 1)
              e.copy(p).multiplyScalar(Math.cos(ang)).addScaledVector(c, Math.sin(ang)).normalize().multiplyScalar(1.002)
              const j = k * this.SW_W + ww
              P[j * 3] = e.x
              P[j * 3 + 1] = e.y
              P[j * 3 + 2] = e.z
              A[j] = ww === 0 || ww === this.SW_W - 1 ? Math.min(1, al * 1.8) : al
            }
          }
          o.swath.geometry.attributes.position.needsUpdate = true
          o.swath.geometry.attributes.aA.needsUpdate = true
        }
      } else if (o.disk) {
        const sub = this.subpoint(oi, tAbs, new THREE.Vector3())
        const g = this.swathHalf(si, altKm)
        const e1 = new THREE.Vector3(0, 1, 0).addScaledVector(sub, -sub.y).normalize()
        const e2 = new THREE.Vector3().crossVectors(sub, e1)
        o.disk.visible = o.on
        const P = o.disk.geometry.attributes.position.array as Float32Array
        for (let k = 0; k < this.GEO_N; k++) {
          const a = (k / this.GEO_N) * Math.PI * 2
          e.copy(sub).multiplyScalar(Math.cos(g)).addScaledVector(e1, Math.sin(g) * Math.cos(a)).addScaledVector(e2, Math.sin(g) * Math.sin(a)).multiplyScalar(1.002)
          P[k * 3] = e.x
          P[k * 3 + 1] = e.y
          P[k * 3 + 2] = e.z
        }
        o.disk.geometry.attributes.position.needsUpdate = true
        o.disk.computeLineDistances()
      }
    }
  }

  private sunDir(tAbs: number, out: THREE.Vector3) {
    const date = new Date(tAbs * 1000)
    const d = tAbs / 86400 - 10957.5
    const g = (357.529 + 0.98560028 * d) * DEG
    const q = 280.459 + 0.98564736 * d
    const Lm = (q + 1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g)) * DEG
    const e = (23.439 - 0.00000036 * d) * DEG
    const ra = Math.atan2(Math.cos(e) * Math.sin(Lm), Math.cos(Lm))
    const dec = Math.asin(Math.sin(e) * Math.sin(Lm))
    let lon = (ra - gstime(date)) / DEG
    lon = ((lon + 540) % 360) - 180
    return ll2v(dec / DEG, lon, 1, out)
  }

  private frame = (now: number) => {
    if (this.disposed) return
    const dt = Math.min(0.1, (now - this.last) / 1000)
    this.last = now
    if (this.playing) {
      this.setTime(this.simT + dt * this.speed)
      if (this.simT >= this.span) this.playing = false
    }
    const tAbs = this.tMin + this.simT
    this.fireU.uTime.value = this.simT
    this.sunDir(tAbs, this.earthU.sunDir.value as THREE.Vector3)
    this.updateSats(tAbs)
    const ease = 1 - Math.exp(-dt * 5)
    if (this.flyTo) {
      // fly in log-altitude so long trips feel even, the direction slerped
      const d = this.camera.position.length()
      const dirV = this.camera.position.clone().divideScalar(d)
      const to = this.flyTo.clone().normalize()
      const nd = dirV.lerp(to, ease)
      if (nd.lengthSq() < 1e-6) nd.set(0, 1, 0)
      const la = Math.log(d - 1), lb = Math.log(this.flyTo.length() - 1)
      this.camera.position.copy(nd.normalize().multiplyScalar(1 + Math.exp(la + (lb - la) * ease)))
      if (nd.angleTo(to) < 1e-4 && Math.abs(la - lb) < 0.01) this.flyTo = null
    }
    this.applyZoom(Math.min(1, ease * 1.6))
    const alt0 = this.camera.position.length() - 1
    // the surface follows the finger at any altitude
    this.controls.rotateSpeed = Math.min(0.5, Math.max(0.0006, alt0 * 0.19))
    this.controls.update()
    // 3D fire close up: tilt the view toward the horizon so the flames show their height.
    if (this.look === 'fire3d' && alt0 < 0.12) {
      const k = Math.min(1, (0.12 - alt0) / 0.08)
      const up = this.camera.position.clone().normalize()
      const north = new THREE.Vector3(0, 1, 0).addScaledVector(up, -up.y)
      if (north.lengthSq() < 1e-6) north.set(1, 0, 0)
      north.normalize()
      const target = up.clone().multiplyScalar(Math.cos(alt0 * 1.4 * k)).addScaledVector(north, Math.sin(alt0 * 1.4 * k))
      this.camera.up.copy(up)
      this.camera.lookAt(target)
      this.camera.up.set(0, 1, 0)
    }
    const alt = this.camera.position.length() - 1
    const near = Math.max(0.00003, alt * 0.3)
    if (Math.abs(near - this.camera.near) / this.camera.near > 0.05) {
      this.camera.near = near
      this.camera.updateProjectionMatrix()
    }
    if (this.selGroup.visible) this.ring.scale.setScalar(Math.max(alt * 0.012, 0.00004))
    this.tiles.update(this.camera, this.view.clientWidth, this.view.clientHeight)
    // Icons appear from about a continent's view down, growing a little as you zoom in.
    // Gizmos appear from a country's view (~2,500 km) down, small, growing a little close up.
    const iconsOn = this.sourcesOn && alt < 0.4
    const px = (alt > 0.15 ? 14 : alt > 0.03 ? 17 : 21) * this.renderer.getPixelRatio()
    for (const l of this.sourceLayers) {
      l.visible = iconsOn
      ;(l.material as THREE.PointsMaterial).size = px
    }

    // labels: hidden behind the Earth
    const w = this.view.clientWidth
    const h = this.view.clientHeight
    const cp = this.camera.position
    const d = new THREE.Vector3()
    const proj = new THREE.Vector3()
    for (const o of this.satObjs) {
      if (!o.on) {
        o.label.style.display = 'none'
        continue
      }
      const sp = o.grp.position
      d.subVectors(sp, cp)
      const len = d.length()
      d.divideScalar(len)
      const b = cp.dot(d)
      const disc = b * b - (cp.lengthSq() - 1)
      const tHit = -b - Math.sqrt(Math.max(disc, 0))
      proj.copy(sp).project(this.camera)
      const hidden = (disc > 0 && tHit > 0 && tHit < len) || proj.z > 1
      o.label.style.display = hidden ? 'none' : ''
      if (!hidden) o.label.style.transform = `translate(${((proj.x + 1) / 2) * w + 10}px, ${((1 - proj.y) / 2) * h - 8}px)`
    }
    this.flameClock.value = now / 1000
    this.fireMesh.visible = this.look === 'pixels'
    if (this.look === 'fire3d') {
      this.flameClose.value = alt < 0.02 ? 1.7 : alt < 0.08 ? 1.35 : 1
      this.updateFlames(alt, now)
    }
    if (this.flames) this.flames.visible = this.look === 'fire3d'
    if (this.look === 'heat' && this.heatRT) {
      this.fireU.uSplat.value = (alt < 0.05 ? 34 : alt < 0.5 ? 28 : 22) * this.renderer.getPixelRatio()
      this.renderer.setRenderTarget(this.heatRT)
      this.renderer.setClearColor(0x000000, 0)
      this.renderer.clear()
      this.renderer.render(this.heatScene, this.camera)
      this.renderer.setRenderTarget(null)
      this.renderer.setClearColor(0x000000, 1)
    }
    this.renderer.render(this.scene, this.camera)
    if (this.look === 'heat') {
      this.renderer.autoClear = false
      this.renderer.render(this.overlayScene, this.overlayCam)
      this.renderer.autoClear = true
    }
    if (now - this.lastTick > 120) {
      this.lastTick = now
      this.cb.onTick(this.simT, this.playing)
    }
    this.raf = requestAnimationFrame(this.frame)
  }

  dispose() {
    this.disposed = true
    cancelAnimationFrame(this.raf)
    this.resizeObserver.disconnect()
    this.renderer.domElement.removeEventListener('pointerdown', this.onDown)
    this.renderer.domElement.removeEventListener('pointerup', this.onUp)
    this.renderer.domElement.removeEventListener('pointermove', this.onMove)
    this.renderer.domElement.removeEventListener('pointercancel', this.onCancel)
    this.renderer.domElement.removeEventListener('wheel', this.onWheel)
    this.controls.dispose()
    this.tiles.dispose()
    this.scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh
      mesh.geometry?.dispose?.()
      const mat = mesh.material as THREE.Material | THREE.Material[] | undefined
      if (Array.isArray(mat)) mat.forEach((m) => m.dispose())
      else mat?.dispose?.()
    })
    this.renderer.dispose()
    this.renderer.domElement.remove()
    this.labels.remove()
  }
}

/** Zoom-dependent satellite imagery tiles, re-projected from Web Mercator onto the sphere. */
class TileLayer {
  private group = new THREE.Group()
  private cache = new Map<string, { key: string; z: number; x: number; y: number; r: number; state: string; mesh: THREE.Mesh | null; used: number }>()
  private queue: { key: string; z: number; x: number; y: number; r: number; state: string; mesh: THREE.Mesh | null; used: number }[] = []
  private frame = 0
  private loading = 0
  private loader = new THREE.TextureLoader()
  private aniso: number
  private dead = false
  constructor(
    scene: THREE.Scene,
    renderer: THREE.WebGLRenderer,
    private sunDir: THREE.IUniform,
  ) {
    scene.add(this.group)
    this.loader.setCrossOrigin('anonymous')
    this.aniso = renderer.capabilities.getMaxAnisotropy()
  }
  private url(z: number, x: number, y: number) {
    return `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${z}/${y}/${x}`
  }
  private mesh(t: { z: number; x: number; y: number; r: number }, tex: THREE.Texture) {
    const tileLat = (z: number, y: number) => Math.atan(Math.sinh(Math.PI * (1 - (2 * y) / 2 ** z))) / DEG
    const n = 2 ** t.z
    const S = Math.max(6, Math.min(64, Math.ceil(360 / n / 0.15)))
    const pos = new Float32Array((S + 1) * (S + 1) * 3)
    const uv = new Float32Array((S + 1) * (S + 1) * 2)
    const idx: number[] = []
    const v = new THREE.Vector3()
    for (let j = 0; j <= S; j++)
      for (let i = 0; i <= S; i++) {
        const k = j * (S + 1) + i
        ll2v(tileLat(t.z, t.y + j / S), ((t.x + i / S) / n) * 360 - 180, t.r, v)
        pos[k * 3] = v.x
        pos[k * 3 + 1] = v.y
        pos[k * 3 + 2] = v.z
        uv[k * 2] = i / S
        uv[k * 2 + 1] = 1 - j / S
        if (i < S && j < S) idx.push(k, k + S + 1, k + 1, k + 1, k + S + 1, k + S + 2)
      }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2))
    g.setIndex(idx)
    g.computeBoundingSphere()
    return new THREE.Mesh(
      g,
      new THREE.ShaderMaterial({
        uniforms: { map: { value: tex }, sunDir: this.sunDir },
        vertexShader: `varying vec2 vUv; varying vec3 vN; void main(){ vUv = uv; vN = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,
        fragmentShader: `uniform sampler2D map; uniform vec3 sunDir; varying vec2 vUv; varying vec3 vN;
          void main(){ vec3 c = texture2D(map, vUv).rgb; float k = smoothstep(-0.10, 0.10, dot(vN, sunDir)); gl_FragColor = vec4(c * mix(0.3, 1., k), 1.); }`,
        side: THREE.DoubleSide,
      }),
    )
  }
  private need(z: number, x: number, y: number, r: number) {
    const key = `${z}/${x}/${y}`
    let t = this.cache.get(key)
    if (!t) {
      t = { key, z, x, y, r, state: 'queued', mesh: null, used: this.frame }
      this.cache.set(key, t)
      this.queue.push(t)
    }
    t.used = this.frame
  }
  private pump() {
    while (this.loading < 8 && this.queue.length) {
      const t = this.queue.pop()!
      if (this.frame - t.used > 20) {
        this.cache.delete(t.key)
        continue
      }
      this.loading++
      t.state = 'loading'
      this.loader.load(
        this.url(t.z, t.x, t.y),
        (tex) => {
          this.loading--
          tex.anisotropy = this.aniso
          if (this.dead || !this.cache.has(t.key)) {
            tex.dispose()
            return
          }
          t.mesh = this.mesh(t, tex)
          t.state = 'ready'
          this.group.add(t.mesh)
        },
        undefined,
        () => {
          this.loading--
          t.state = 'error'
        },
      )
    }
  }
  update(camera: THREE.PerspectiveCamera, W: number, H: number) {
    this.frame++
    const alt = camera.position.length() - 1
    const sub = camera.position.clone().normalize()
    const lat = Math.asin(sub.y) / DEG
    const lon = Math.atan2(sub.z, -sub.x) / DEG - 180
    const kmPerPx = (2 * alt * R_KM * Math.tan((camera.fov * DEG) / 2)) / Math.max(1, H)
    const cosLat = Math.max(0.05, Math.cos(lat * DEG))
    const z = Math.min(18, Math.round(Math.log2((40075 * cosLat) / (256 * kmPerPx)) + 0.4))
    if (z >= 5) {
      const add = (zz: number, rad: number, r: number) => {
        const n = 2 ** zz
        const cx = ((lon + 180) / 360) * n
        const cy = ((1 - Math.log(Math.tan(lat * DEG) + 1 / Math.cos(lat * DEG)) / Math.PI) / 2) * n
        for (let dy = -rad; dy <= rad; dy++)
          for (let dx = -rad; dx <= rad; dx++) {
            const y = Math.floor(cy) + dy
            if (y >= 0 && y < n) this.need(zz, (((Math.floor(cx) + dx) % n) + n) % n, y, r)
          }
      }
      if (z - 3 >= 5) add(z - 3, 1, 1.000012)
      add(z, Math.min(5, Math.ceil((Math.max(W, H) * kmPerPx) / ((40075 * cosLat) / 2 ** z) / 2) + 1), 1.00002)
    }
    for (const t of this.cache.values()) if (t.mesh) t.mesh.visible = t.used === this.frame
    this.pump()
    if (this.cache.size > 350) {
      const old = [...this.cache.values()].filter((t) => t.used !== this.frame && t.state !== 'loading').sort((a, b) => a.used - b.used)
      for (const t of old.slice(0, this.cache.size - 300)) {
        if (t.mesh) {
          this.group.remove(t.mesh)
          t.mesh.geometry.dispose()
          const m = t.mesh.material as THREE.ShaderMaterial
          ;(m.uniforms.map.value as THREE.Texture).dispose()
          m.dispose()
        }
        this.cache.delete(t.key)
        const qi = this.queue.indexOf(t)
        if (qi >= 0) this.queue.splice(qi, 1)
      }
    }
  }
  dispose() {
    this.dead = true
    for (const t of this.cache.values()) {
      if (!t.mesh) continue
      t.mesh.geometry.dispose()
      const m = t.mesh.material as THREE.ShaderMaterial
      ;(m.uniforms.map.value as THREE.Texture).dispose()
      m.dispose()
    }
    this.cache.clear()
  }
}
