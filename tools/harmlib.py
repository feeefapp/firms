"""MODIS/VIIRS active-fire harmonization: fire-day cells, transfer algorithms, adaptive calibration, evaluation.

Input: a folder of FIRMS CSVs for one region, named <family>_<year>.csv where family is
  modis | viirs-snpp | viirs-jpss1  (columns: latitude, longitude, scan, track, acq_date, acq_time,
  satellite, confidence, frp, daynight, type)
Output: build_region(...) -> dict with monthly series for every algorithm, evaluation scores and the
  calibration the simulation uses to convert VIIRS detections live.

Pure Python (no numpy). Months are indexed from Jan 2001.
"""
import csv, glob, math, os, statistics as stt, datetime as dt
from collections import defaultdict

Y0 = 2001
G = 0.02                      # fire-day cell size in degrees (~2 km)
NB = 24                       # FRP bins: log10(FRP) from -1.5 in steps of 0.25
TRAIN = list(range(2012, 2022))   # S-NPP / Aqua overlap while Aqua kept its 13:30 orbit
HALF_LIFE = 2.0               # adaptive calibration: weight halves every 2 years back from 2021
FAM = {"modis": None, "viirs-snpp": "S", "viirs-jpss1": "N20"}

def fbin(f): return max(0, min(NB - 1, int((math.log10(max(f, 0.05)) + 1.5) / 0.25)))
def yr(m): return Y0 + m // 12

_mc = {}
def month_idx(o):
    m = _mc.get(o)
    if m is None:
        d = dt.date.fromordinal(o); m = (d.year - Y0) * 12 + d.month - 1; _mc[o] = m
    return m

# ---------------------------------------------------------------- loading
def load(folder):
    """records per satellite code (T, A, S, N20): lists of (local-solar ordinal, lat, lon, frp, type, scan, local hour)"""
    sats = defaultdict(list); dc = {}
    for path in sorted(glob.glob(os.path.join(folder, "*.csv"))):
        fam = os.path.basename(path).rsplit("_", 1)[0]
        if fam not in FAM: continue
        with open(path) as f:
            for r in csv.DictReader(f):
                if fam == "modis":
                    code = "T" if r["satellite"].startswith("T") else "A"
                    try:
                        if int(float(r["confidence"])) < 30: continue
                    except ValueError: continue
                else:
                    code = FAM[fam]
                    if r["confidence"][:1].lower() == "l": continue
                la, lo = float(r["latitude"]), float(r["longitude"])
                ds = r["acq_date"]; o = dc.get(ds)
                if o is None: o = dt.date.fromisoformat(ds).toordinal(); dc[ds] = o
                t = r["acq_time"].zfill(4); h = int(t[:2]) + int(t[2:]) / 60 + lo / 15
                if h >= 24: o += 1
                elif h < 0: o -= 1
                typ = r.get("type", "").strip()
                sats[code].append((o, la, lo, float(r["frp"] or 0), int(typ) if typ else -1, float(r["scan"] or 0), h % 24))
    return sats

def nmonths(sats):
    last = max(rec[0] for v in sats.values() for rec in v)
    return month_idx(last) + 1

def cellify(sats, NM, g=G):
    """fire-day cells per satellite: {(ordinal, i, j): [n_pixels, frp_sum]}; monthly row counts; static-source mask"""
    static = {(int(r[1] // g), int(r[2] // g)) for v in sats.values() for r in v if r[4] > 0}
    cells, rows = {}, {}
    for code, recs in sats.items():
        c = {}; rm = [0] * NM
        for o, la, lo, frp, typ, sc, h in recs:
            if typ > 0: continue
            ij = (int(la // g), int(lo // g))
            if ij in static: continue
            mi = month_idx(o)
            if not 0 <= mi < NM: continue
            rm[mi] += 1
            k = (o, ij[0], ij[1]); v = c.get(k)
            if v is None: c[k] = [1, frp]
            else: v[0] += 1; v[1] += frp
        cells[code] = c; rows[code] = rm
    return cells, rows, static

def monthly(cd, NM):
    m = [0] * NM
    for (o, _, _) in cd:
        mi = month_idx(o)
        if 0 <= mi < NM: m[mi] += 1
    return m

# ---------------------------------------------------------------- Aqua viewing geometry (16-day repeat cycle)
def aqua_geometry(sats):
    by = defaultdict(list)
    for o, la, lo, frp, typ, sc, h in sats.get("A", []):
        if 9 <= h <= 18 and 2012 <= dt.date.fromordinal(o).year <= 2021:
            by[(o % 16, int(lo // 0.5))].append(sc)
    med = {k: stt.median(v) for k, v in by.items() if len(v) >= 10}
    cyc = defaultdict(list)
    for (c, _), v in med.items(): cyc[c].append(v)
    cmed = {c: stt.median(v) for c, v in cyc.items()}
    return lambda o, lon: med.get((o % 16, int(lon // 0.5)), cmed.get(o % 16, 1.5))

def gbin(s): return 0 if s < 1.4 else 1 if s < 2.4 else 2

def pair_stats(ref, tgt, NM, geo=None):
    """per reference cell-day: (month, FRP bin, geometry bin) -> [n, n also seen by target]; per month target-only cells"""
    recs = defaultdict(lambda: [0, 0]); only = [0] * NM
    for k, (n, f) in ref.items():
        mi = month_idx(k[0])
        if not 0 <= mi < NM: continue
        gb = gbin(geo(k[0], (k[2] + 0.5) * G)) if geo else 0
        r = recs[(mi, fbin(f), gb)]; r[0] += 1
        if k in tgt: r[1] += 1
    for k in tgt:
        if k not in ref:
            mi = month_idx(k[0])
            if 0 <= mi < NM: only[mi] += 1
    return recs, only

def isotonic(num, den):
    blocks = []
    for b in range(NB):
        if den[b] <= 0: continue
        blocks.append([num[b], den[b], b, b])
        while len(blocks) > 1 and blocks[-2][0] / blocks[-2][1] > blocks[-1][0] / blocks[-1][1]:
            x = blocks.pop(); y = blocks.pop(); blocks.append([x[0] + y[0], x[1] + y[1], y[2], x[3]])
    out = [None] * NB
    for n, d, lo, hi in blocks:
        for b in range(lo, hi + 1): out[b] = n / d
    last = None
    for b in range(NB):
        if out[b] is None: out[b] = last
        else: last = out[b]
    last = None
    for b in reversed(range(NB)):
        if out[b] is None: out[b] = last
        else: last = out[b]
    return [x if x is not None else 0.0 for x in out]

# ---------------------------------------------------------------- calibration (sufficient statistics -> parameters)
def calib_stats(recs, only, R, T, wy, NM, use_geom=False):
    """weighted sums that define every transfer; can be pooled across regions by adding them"""
    s = {"T": [0.0] * 12, "R": [0.0] * 12, "only": [0.0] * 12,
         "num": [[[0.0] * NB for _ in range(3)] for _ in range(4)], "den": [[[0.0] * NB for _ in range(3)] for _ in range(4)]}
    for m in range(NM):
        w = wy.get(yr(m), 0)
        if w: s["T"][m % 12] += w * T[m]; s["R"][m % 12] += w * R[m]; s["only"][m % 12] += w * only[m]
    for (mi, fb, gb), (n, k) in recs.items():
        w = wy.get(yr(mi), 0)
        if w:
            se = (mi % 12) // 3; g = gb if use_geom else 0
            s["num"][se][g][fb] += w * k; s["den"][se][g][fb] += w * n
    return s

def add_stats(a, b):
    out = {k: [x + y for x, y in zip(a[k], b[k])] for k in ("T", "R", "only")}
    for k in ("num", "den"):
        out[k] = [[[a[k][s][g][i] + b[k][s][g][i] for i in range(NB)] for g in range(3)] for s in range(4)]
    return out

def calib_params(s):
    kt = sum(s["T"]) / max(1e-9, sum(s["R"]))
    k = [(s["T"][c] + 50 * kt) / (s["R"][c] + 50) for c in range(12)]
    tot = sum(s["only"]) / max(1e-9, sum(s["R"]))
    extra = [(s["only"][c] + 50 * tot) / (s["R"][c] + 50) for c in range(12)]
    nb = [sum(s["num"][se][g][b] for se in range(4) for g in range(3)) for b in range(NB)]
    db = [sum(s["den"][se][g][b] for se in range(4) for g in range(3)) for b in range(NB)]
    base = isotonic(nb, db)
    season = []
    for se in range(4):
        ns = [sum(s["num"][se][g][b] for g in range(3)) for b in range(NB)]; ds = [sum(s["den"][se][g][b] for g in range(3)) for b in range(NB)]
        season.append(isotonic([ns[b] + 30 * base[b] for b in range(NB)], [ds[b] + 30 for b in range(NB)]))
    geom = [[isotonic([s["num"][se][g][b] + 30 * season[se][b] for b in range(NB)], [s["den"][se][g][b] + 30 for b in range(NB)]) for g in range(3)] for se in range(4)]
    return {"k_single": kt, "k_month": k, "extra": extra, "rho": base, "rho_season": season, "rho_geom": geom}

def transfer(method, P, recs, R, pred_m):
    """apply calibration P to reference (VIIRS) cell-days -> Aqua-equivalent fire-days per month"""
    if method == "ratio": return {m: P["k_single"] * R[m] for m in pred_m}
    if method == "ratio_month": return {m: P["k_month"][m % 12] * R[m] for m in pred_m}
    pm = set(pred_m); e = defaultdict(float)
    for (mi, fb, gb), (n, k) in recs.items():
        if mi not in pm: continue
        se = (mi % 12) // 3
        if method == "frp": e[mi] += n * P["rho"][fb]
        elif method in ("frp_season", "ensemble"): e[mi] += n * P["rho_season"][se][fb]
        elif method == "ensemble_geom": e[mi] += n * P["rho_geom"][se][gb][fb]
    out = {m: e[m] + P["extra"][m % 12] * R[m] for m in pred_m}
    if method in ("ensemble", "ensemble_geom"):
        out = {m: (out[m] + P["k_month"][m % 12] * R[m]) / 2 for m in pred_m}
    return out

def adaptive_weights(last_year, first=2012):
    return {y: 0.5 ** ((last_year - y) / HALF_LIFE) for y in range(first, last_year + 1)}

# ---------------------------------------------------------------- main entry
METHODS = ["ratio", "ratio_month", "frp", "frp_season", "ensemble", "ensemble_geom"]

def wape(e, T, ms): return round(sum(abs(e[m] - T[m]) for m in ms) / max(1e-9, sum(T[m] for m in ms)) * 100, 2)

def build_region(folder, evaluate=True, log=print):
    sats = load(folder)
    if "A" not in sats or "S" not in sats:
        raise SystemExit("need MODIS (Aqua) and VIIRS S-NPP files covering 2012-2021")
    NM = nmonths(sats)
    cells, rows, static = cellify(sats, NM)
    M = {k: monthly(v, NM) for k, v in cells.items()}
    R, T = M["S"], M["A"]
    geo = aqua_geometry(sats)
    recs, only = pair_stats(cells["S"], cells["A"], NM, geo)
    out = {"NM": NM, "rows_total": {k: len(v) for k, v in sats.items()}, "static_cells": len(static)}

    # -- evaluation: leave-one-year-out (2012-2021) and forward (train 2012-2017, then each year with adaptive weights)
    if evaluate:
        msL = [m for m in range(NM) if yr(m) in TRAIN]; msF = [m for m in range(NM) if 2018 <= yr(m) <= 2021]
        ev = {}
        for meth in METHODS:
            eL, eF, eA = {}, {}, {}
            for Y in TRAIN:
                tst = [m for m in msL if yr(m) == Y]
                P = calib_params(calib_stats(recs, only, R, T, {y: 1 for y in TRAIN if y != Y}, NM, use_geom=True))
                eL.update(transfer(meth, P, recs, R, tst))
            P = calib_params(calib_stats(recs, only, R, T, {y: 1 for y in range(2012, 2018)}, NM, use_geom=True))
            eF.update(transfer(meth, P, recs, R, msF))
            for Y in range(2018, 2022):
                tst = [m for m in msF if yr(m) == Y]
                P = calib_params(calib_stats(recs, only, R, T, adaptive_weights(Y - 1), NM, use_geom=True))
                eA.update(transfer(meth, P, recs, R, tst))
            ev[meth] = {"loyo": wape(eL, T, msL), "forward": wape(eF, T, msF), "forward_adaptive": wape(eA, T, msF),
                        "loyo_monthly": [round(eL[m], 1) for m in msL]}
            log(f"  {meth:14s} held-out {ev[meth]['loyo']:6.2f}%  forward {ev[meth]['forward']:6.2f}%  adaptive {ev[meth]['forward_adaptive']:6.2f}%")
        ev["raw_switch"] = {"loyo": wape({m: rows["S"][m] for m in msL}, [rows["T"][m] + rows["A"][m] for m in range(NM)], msL)}
        ev["switch"] = {"loyo": wape({m: R[m] for m in msL}, T, msL)}
        out["eval"] = ev; out["eval_months"] = msL; out["eval_aqua"] = [T[m] for m in msL]

    # -- final calibration: adaptive weights anchored at 2021 (static and pooled versions too)
    st_adapt = calib_stats(recs, only, R, T, adaptive_weights(2021), NM, use_geom=True)
    st_flat = calib_stats(recs, only, R, T, {y: 1 for y in TRAIN}, NM, use_geom=True)
    P_ad, P_fl = calib_params(st_adapt), calib_params(st_flat)
    out["calib_stats"] = st_adapt
    out["calib"] = {k: v for k, v in P_ad.items()}

    # -- full 2001..now chains for each algorithm: Terra->Aqua (to Jun 2002), Aqua (to 2021), VIIRS->Aqua-equivalent (2022+)
    num = [0] * 12; den = [0] * 12
    for m in range(NM):
        if 2003 <= yr(m) <= 2011: num[m % 12] += T[m]; den[m % 12] += M["T"][m]
    kT = [num[c] / den[c] if den[c] else 1 for c in range(12)]
    post = [m for m in range(NM) if yr(m) >= 2022]
    series, src = {}, []
    for m in range(NM): src.append("T" if m < 18 else "A" if yr(m) < 2022 else "V")
    def chain(post_est):
        return [round(M["T"][m] * kT[m % 12], 1) if m < 18 else T[m] if yr(m) < 2022 else round(post_est[m], 1) for m in range(NM)]
    for meth in METHODS:
        series[meth] = chain(transfer(meth, P_fl, recs, R, post))
        series[meth + "_adaptive"] = chain(transfer(meth, P_ad, recs, R, post))
    modis_u = monthly({**cells["T"], **cells["A"]}, NM)
    viirs_u = monthly({**cells["S"], **cells.get("N20", {})}, NM)
    series["naive"] = [modis_u[m] if yr(m) < 2012 else viirs_u[m] for m in range(NM)]
    series["raw_rows"] = [sum(rows[k][m] for k in rows) for m in range(NM)]
    series["aqua_only"] = T
    out["series"] = series; out["src"] = "".join(src)
    out["sensor_celldays"] = {k: M[k] for k in M}; out["sensor_rows"] = rows
    out["kT"] = kT
    return out
