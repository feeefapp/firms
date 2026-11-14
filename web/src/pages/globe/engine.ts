/**
 * The globe, ported from reference/legacy-sim.html: real FIRMS records of one day drawn as their
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
  tle: [string, string]
}
export type DayData = {
  generated?: string
  window: [string, number]
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
  altitudeKm: number
  nadirKm: number
  viewZenith: number
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
}

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
  readonly binSize = 900
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
    const norads = [...new Set(SATS.map((s) => s.norad))]
    const oiOf = SATS.map((s) => norads.indexOf(s.norad))
    const v = new THREE.Vector3()
    this.orbit = norads.map((n) => {
      const s = SATS.find((x) => x.norad === n)!
      const rec = twoline2satrec(s.tle[0], s.tle[1])
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
        if (s.system === 3) {
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

    // ---------- histogram bins (detections per 15 min, by system) ----------
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
    this.controls.minDistance = 1.002
    this.controls.maxDistance = 25
    this.controls.rotateSpeed = 0.5
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

    // ---------- input ----------
    const el = this.renderer.domElement
    el.addEventListener('pointerdown', this.onDown)
    el.addEventListener('pointerup', this.onUp)
    this.resizeObserver = new ResizeObserver(() => this.resize())
    this.resizeObserver.observe(container)
    this.resize()
    this.raf = requestAnimationFrame(this.frame)
  }

  private oiOf: number[]
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
    // coarse geostationary first, then MODIS, VIIRS, and the 30 m Landsat pixels on top
    const RANK = [1, 2, 3, 0]
    const order = Array.from({ length: N }, (_, i) => i).sort((a, b) => RANK[SATS[C.sat[a]].system] - RANK[SATS[C.sat[b]].system] || a - b)
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
    const mesh = new THREE.Mesh(
      g,
      new THREE.ShaderMaterial({
        uniforms: this.fireU,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        vertexShader: `
          attribute vec3 iC, iX, iY;
          attribute float aT, aSat, aSys, aPat, aConf;
          uniform float uTime, uWindow, uGeoWin, uMinConf, uPx, uMinPx; uniform float uMask[16]; uniform vec3 uSysCol[4];
          varying vec3 vCol; varying float vFlash, vPx, vSys, vPat; varying vec2 vUv;
          void main(){
            float age = uTime - aT;
            float win = aSys > 2.5 ? min(uWindow, uGeoWin) : uWindow;
            if (age < 0.0 || age > win || uMask[int(aSat + 0.5)] < 0.5 || aConf < uMinConf - 0.5) { gl_Position = vec4(2.,2.,2.,1.); return; }
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
  setSystemVisible(system: number, on: boolean) {
    const mask = this.fireU.uMask.value as number[]
    this.D.sats.forEach((s, i) => {
      if (s.system === system) {
        mask[i] = on ? 1 : 0
        this.satOn[i] = on
      }
    })
    for (const o of this.satObjs) o.on = o.sats.some((j) => this.satOn[j])
  }
  setDrawing(on: boolean) {
    this.drawing = on ? 1 : 0
    this.p1 = null
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
  flyToBox(bb: number[]) {
    const [w, s, e, n] = bb
    const span = Math.max(e - w, n - s)
    this.flyTo = ll2v((s + n) / 2, (w + e) / 2, 1 + Math.min(2, Math.max(0.02, span / 60)))
  }
  flyHome() {
    this.flyTo = this.camera.position.clone().normalize().multiplyScalar(3.6)
  }
  zoomToSelection() {
    if (!this.selGroup.visible) return
    this.flyTo = this.ring.position.clone().normalize().multiplyScalar(1.003)
  }
  clearSelection() {
    this.selGroup.visible = false
  }

  // ---------- picking ----------
  private onDown = (e: PointerEvent) => {
    this.downXY = [e.clientX, e.clientY]
  }
  private onUp = (e: PointerEvent) => {
    if (!this.downXY || Math.hypot(e.clientX - this.downXY[0], e.clientY - this.downXY[1]) > 5) return
    const r = this.renderer.domElement.getBoundingClientRect()
    const mouse = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1)
    const ray = new THREE.Raycaster()
    ray.setFromCamera(mouse, this.camera)
    const hit = ray.intersectObject(this.earth)[0]
    if (this.drawing) {
      if (!hit) return
      const [lat, lon] = v2ll(hit.point)
      if (this.drawing === 1) {
        this.p1 = [lon, lat]
        this.drawing = 2
        this.cb.onBoxPoint(1, null)
      } else if (this.p1) {
        const bb = [Math.min(this.p1[0], lon), Math.min(this.p1[1], lat), Math.max(this.p1[0], lon), Math.max(this.p1[1], lat)].map((x) => Math.round(x * 100) / 100)
        this.setDrawing(false)
        this.setBox(bb)
        this.cb.onBoxPoint(2, bb)
      }
      return
    }
    if (!hit) {
      this.select(-1)
      return
    }
    this.select(this.nearest(hit.point.clone().normalize()))
  }

  private isVisible(i: number) {
    const C = this.D.cols
    const age = this.simT - this.TOBS[i]
    const geo = this.D.sats[C.sat[i]].system === 3
    const win = geo ? Math.min(this.fireU.uWindow.value as number, this.fireU.uGeoWin.value as number) : (this.fireU.uWindow.value as number)
    return age >= 0 && age <= win && this.satOn[C.sat[i]]
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
    const SP = this.satPos(oi, tObs)
    const vza = Math.acos(SP.clone().sub(F).normalize().dot(F)) / DEG
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
      altitudeKm: this.altAt(oi, tObs),
      nadirKm: this.NADIR[i],
      viewZenith: vza,
      samePass: same.length,
      samePassFrp: same.reduce((a, j) => a + (C.frp[j] ?? 0), 0),
      others: [...bySat].sort((a, b) => b[1] - a[1]).map(([k, count]) => ({ sat: SATS[k], count })),
    })
  }

  /** Sat visible-record counts right now, by system (for the legend). */
  visibleBySystem(): number[] {
    const out = [0, 0, 0, 0]
    const C = this.D.cols
    for (let i = 0; i < this.count; i++) if (this.isVisible(i)) out[this.D.sats[C.sat[i]].system]++
    return out
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
    if (this.flyTo) {
      const d = this.camera.position.length()
      const dir = this.flyTo.clone().normalize()
      const nd = this.camera.position.clone().divideScalar(d).lerp(dir, 0.08)
      if (nd.lengthSq() < 1e-6) nd.set(0, 1, 0)
      this.camera.position.copy(nd.normalize().multiplyScalar(d + (this.flyTo.length() - d) * 0.08))
      if (this.camera.position.distanceTo(this.flyTo) < (this.flyTo.length() - 1) * 0.02) this.flyTo = null
    }
    this.controls.update()
    const alt = this.camera.position.length() - 1
    const near = Math.max(0.00003, alt * 0.3)
    if (Math.abs(near - this.camera.near) / this.camera.near > 0.05) {
      this.camera.near = near
      this.camera.updateProjectionMatrix()
    }
    this.controls.zoomSpeed = alt < 0.05 ? 0.5 : 1
    if (this.selGroup.visible) this.ring.scale.setScalar(Math.max(alt * 0.012, 0.00004))
    this.tiles.update(this.camera, this.view.clientWidth, this.view.clientHeight)

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
    this.renderer.render(this.scene, this.camera)
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
