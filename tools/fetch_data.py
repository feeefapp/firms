"""Download FIRMS fire detections from EVERY satellite FIRMS serves, plus their orbits (TLE),
and write data/fires.js for the simulation page.

Usage:
  python3 fetch_data.py                      # latest full day that all satellites cover
  python3 fetch_data.py --date 2026-11-01 --days 2
  python3 fetch_data.py --skip GOES_NRT      # leave out a source (GOES is ~250k rows/day)
  python3 fetch_data.py --date 2026-11-01 --out /data/day/2026-11-01.js   # what the server runs

The FIRMS MAP_KEY is read from the FIRMS_MAP_KEY environment variable or from the .env file
next to this script or in its parent folder (FIRMS_MAP_KEY=...). It is never written into the page.
"""
import argparse
import csv
import io
import json
import os
import urllib.request
from datetime import date, datetime, timedelta, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "data", "fires.js")
API = "https://firms.modaps.eosdis.nasa.gov/api"

# One entry per satellite/product as FIRMS labels it in the "satellite" column.
# system: 0 MODIS, 1 VIIRS, 2 Landsat (OLI), 3 geostationary (GOES ABI, Meteosat SEVIRI/FCI, Himawari AHI)
# scan_deg = half scan angle of the instrument; pixel_km = nadir pixel size (used when FIRMS gives no size)
# conf: how FIRMS writes confidence for this product: word (l/n/h, H/M/L), pct (0-100), prob (0-1), fdc (GOES fire-mask codes)
# pattern: fill pattern inside each pixel (0 solid, 1 stripes, 2 dots, 3 cross-hatch, 4 lines) to tell satellites of one system apart
SATS = [
    dict(code="T",      alias=["Terra"], name="Terra",       system=0, instrument="MODIS",  norad=25994, scan_deg=55.0,  pixel_km=1.0,   granule_s=300, conf="pct",  symbol="●", pattern=0),
    dict(code="A",      alias=["Aqua"],  name="Aqua",        system=0, instrument="MODIS",  norad=27424, scan_deg=55.0,  pixel_km=1.0,   granule_s=300, conf="pct",  symbol="○", pattern=1),
    dict(code="N",      alias=[],        name="Suomi NPP",   system=1, instrument="VIIRS",  norad=37849, scan_deg=56.28, pixel_km=0.375, granule_s=360, conf="word", symbol="◆", pattern=2),
    dict(code="N20",    alias=[],        name="NOAA-20",     system=1, instrument="VIIRS",  norad=43013, scan_deg=56.28, pixel_km=0.375, granule_s=360, conf="word", symbol="■", pattern=0),
    dict(code="N21",    alias=[],        name="NOAA-21",     system=1, instrument="VIIRS",  norad=54234, scan_deg=56.28, pixel_km=0.375, granule_s=360, conf="word", symbol="□", pattern=1),
    dict(code="L8",     alias=[],        name="Landsat 8",   system=2, instrument="OLI",    norad=39084, scan_deg=7.5,   pixel_km=0.03,  granule_s=60,  conf="word", symbol="▲", pattern=0),
    dict(code="L9",     alias=[],        name="Landsat 9",   system=2, instrument="OLI",    norad=49260, scan_deg=7.5,   pixel_km=0.03,  granule_s=60,  conf="word", symbol="△", pattern=1),
    dict(code="G19",    alias=[],        name="GOES-19",     system=3, instrument="ABI",    norad=60133, scan_deg=8.7,   pixel_km=2.0,   granule_s=0,   conf="fdc",  symbol="★", pattern=0),
    dict(code="G19FRP", alias=[],        name="GOES-19 FRP", system=3, instrument="ABI",    norad=60133, scan_deg=8.7,   pixel_km=2.0,   granule_s=0,   conf="pct",  symbol="✦", pattern=1),
    dict(code="G18",    alias=[],        name="GOES-18",     system=3, instrument="ABI",    norad=51850, scan_deg=8.7,   pixel_km=2.0,   granule_s=0,   conf="fdc",  symbol="☆", pattern=2),
    dict(code="G18FRP", alias=[],        name="GOES-18 FRP", system=3, instrument="ABI",    norad=51850, scan_deg=8.7,   pixel_km=2.0,   granule_s=0,   conf="pct",  symbol="✧", pattern=3),
    dict(code="Met12",  alias=[],        name="Meteosat-12", system=3, instrument="FCI",    norad=54743, scan_deg=8.7,   pixel_km=2.0,   granule_s=0,   conf="prob", symbol="⬟", pattern=4),
    dict(code="Met10",  alias=[],        name="Meteosat-10", system=3, instrument="SEVIRI", norad=38552, scan_deg=8.7,   pixel_km=3.0,   granule_s=0,   conf="pct",  symbol="⬢", pattern=1),
    dict(code="Met9",   alias=[],        name="Meteosat-9",  system=3, instrument="SEVIRI", norad=28912, scan_deg=8.7,   pixel_km=3.0,   granule_s=0,   conf="pct",  symbol="⬡", pattern=2),
    dict(code="Him9",   alias=[],        name="Himawari-9",  system=3, instrument="AHI",    norad=41836, scan_deg=8.7,   pixel_km=2.0,   granule_s=0,   conf="pct",  symbol="✚", pattern=3),
]
SOURCES = ["MODIS_NRT", "VIIRS_SNPP_NRT", "VIIRS_NOAA20_NRT", "VIIRS_NOAA21_NRT", "LANDSAT_NRT", "GOES_NRT"]
SAT_INDEX = {}
for _i, _s in enumerate(SATS):
    for _c in [_s["code"], *_s["alias"]]:
        SAT_INDEX[_c] = _i
WORD_CONF = {"l": 0, "low": 0, "n": 1, "nominal": 1, "m": 1, "h": 2, "high": 2}


def map_key():
    k = os.environ.get("FIRMS_MAP_KEY")
    for p in (os.path.join(HERE, ".env"), os.path.join(os.path.dirname(HERE), ".env")):
        if not k and os.path.exists(p):
            for line in open(p):
                if line.startswith("FIRMS_MAP_KEY="):
                    k = line.split("=", 1)[1].strip()
    if not k:
        raise SystemExit("No MAP_KEY: set FIRMS_MAP_KEY or put FIRMS_MAP_KEY=... in .env")
    return k


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "firms-sim/2.0"})
    with urllib.request.urlopen(req, timeout=300) as r:
        return r.read().decode("utf-8", "replace")


def conf_of(raw, kind):
    """-> (class 0 low / 1 nominal / 2 high, raw number or -1)"""
    c = raw.strip().lower()
    if c in WORD_CONF:
        return WORD_CONF[c], -1
    v = float(c)
    if kind == "fdc":   # GOES fire-mask codes: 10/11/30/31 good or saturated fire, 12/13/32/33 cloudy or high prob, rest lower
        v = int(v)
        return (2 if v in (10, 11, 30, 31) else 1 if v in (12, 13, 32, 33) else 0), v
    if kind == "prob":  # 0-1 probability -> percent
        v *= 100
    return (0 if v < 30 else 1 if v < 80 else 2), round(v, 1)


def num(x):
    try:
        v = float(x)
        return None if v <= -998 else v
    except (TypeError, ValueError):
        return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--date", help="first day YYYY-MM-DD (default: latest full day covered by every source)")
    ap.add_argument("--days", type=int, default=1, help="1-5")
    ap.add_argument("--skip", nargs="*", default=[], help="sources to leave out")
    ap.add_argument("--out", default=OUT, help="output .js file (default data/fires.js next to this script)")
    a = ap.parse_args()
    out = os.path.abspath(a.out)
    key = map_key()
    sources = [s for s in SOURCES if s not in a.skip]

    avail = {r["data_id"]: r for r in csv.DictReader(io.StringIO(get(f"{API}/data_availability/csv/{key}/ALL")))}
    if a.date:
        start = date.fromisoformat(a.date)
    else:
        last_common = min(date.fromisoformat(avail[s]["max_date"]) for s in sources)
        start = last_common - timedelta(days=a.days)   # step back one day so every source has a full day
    print(f"window: {start} + {a.days} day(s)")

    cols = {k: [] for k in ["lat", "lon", "t", "sat", "scan", "track", "frp", "b4", "b5", "conf", "craw", "dn", "ver"]}
    versions, counts, skipped = [], {}, {}
    for src in sources:
        print("downloading", src, "...", flush=True)
        text = get(f"{API}/area/csv/{key}/{src}/world/{a.days}/{start.isoformat()}")
        n = 0
        for r in csv.DictReader(io.StringIO(text)):
            code = r.get("satellite", "").strip()
            si = SAT_INDEX.get(code)
            if si is None:
                skipped[code] = skipped.get(code, 0) + 1
                continue
            s = SATS[si]
            t = datetime.strptime(r["acq_date"] + r["acq_time"].zfill(4), "%Y-%m-%d%H%M").replace(tzinfo=timezone.utc)
            conf, craw = conf_of(r.get("confidence") or "0", s["conf"])
            ver = r.get("version", src)
            if ver not in versions:
                versions.append(ver)
            # MODIS / VIIRS give real pixel size in km; Landsat / GOES give pixel indices -> size computed in the page
            real_size = s["system"] in (0, 1)
            cols["lat"].append(round(float(r["latitude"]), 5))
            cols["lon"].append(round(float(r["longitude"]), 5))
            cols["t"].append(int(t.timestamp()))
            cols["sat"].append(si)
            cols["scan"].append(float(r["scan"]) if real_size else 0)
            cols["track"].append(float(r["track"]) if real_size else 0)
            cols["frp"].append(num(r.get("frp")))
            cols["b4"].append(num(r.get("bright_ti4") or r.get("brightness")))
            cols["b5"].append(num(r.get("bright_ti5") or r.get("bright_t31")))
            cols["conf"].append(conf)
            cols["craw"].append(craw)
            cols["dn"].append(0 if r.get("daynight", "D") == "D" else 1)
            cols["ver"].append(versions.index(ver))
            counts[s["name"]] = counts.get(s["name"], 0) + 1
            n += 1
        print(f"  {n} records")


    for s in SATS:
        s.pop("alias", None)
        lines =[l.strip() for l in get(f"https://celestrak.org/NORAD/elements/gp.php?CATNR={s['norad']}&FORMAT=TLE").splitlines() if l.strip()]
        s["tle"] = lines[-2:]

    data = {
        "generated": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "window": [start.isoformat(), a.days],
        "sats": SATS, "versions": versions, "cols": cols,
    }
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out + ".tmp", "w") as f:
        f.write("window.FIRMS_DATA=")
        json.dump(data, f, separators=(",", ":"))
        f.write(";\n")
    os.replace(out + ".tmp", out)   # atomic: the server never serves a half-written day
    print("per satellite:", json.dumps(counts, ensure_ascii=False))
    if skipped:
        print("skipped unknown satellite codes:", skipped)
    print(f"wrote {len(cols['lat'])} records to {out} ({os.path.getsize(out) / 1e6:.1f} MB)")


if __name__ == "__main__":
    main()
