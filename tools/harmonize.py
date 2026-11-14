"""Build the harmonized fire calendar for ANY region and add it to the simulation.

Examples
  # download FIRMS archives for a box inside one country (2001..last year) + this year via the API, then build
  python3 tools/harmonize.py --name lebanon --title "لبنان" --country Lebanon --bbox 35.1,33.0,36.7,34.7

  # build from CSVs you already have (files named modis_<year>.csv, viirs-snpp_<year>.csv, viirs-jpss1_<year>.csv)
  python3 tools/harmonize.py --name punjab --title "البنجاب" --bbox 73.8,29.5,77.0,32.6 --from-dir /path/to/csvs

Archives come from https://firms.modaps.eosdis.nasa.gov/data/country/ (no key needed). The current year comes
from the FIRMS area API and needs FIRMS_MAP_KEY (environment variable or .env next to index.html).
Writes <data>/regions/<name>.json, where <data> is $FIRMS_DATA_DIR (the server's volume) or the repo's data/
folder; raw downloads go to <data>/raw/<name>. data/harm_data.js (legacy single-file page) is rebuilt only when
FIRMS_DATA_DIR is unset or --harm-data is given.
"""
import argparse, csv, datetime as dt, io, json, os, sys, time, urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
DATA = os.environ.get("FIRMS_DATA_DIR") or os.path.join(ROOT, "data")
sys.path.insert(0, HERE)
import harmlib  # noqa: E402

ARCH = "https://firms.modaps.eosdis.nasa.gov/data/country"
API = "https://firms.modaps.eosdis.nasa.gov/api"
KEEP = ["latitude", "longitude", "scan", "track", "acq_date", "acq_time", "satellite", "confidence", "frp", "daynight", "type"]

def map_key():
    k = os.environ.get("FIRMS_MAP_KEY")
    p = os.path.join(ROOT, ".env")
    if not k and os.path.exists(p):
        for line in open(p):
            if line.startswith("FIRMS_MAP_KEY="): k = line.split("=", 1)[1].strip()
    return k

def get(url, tries=20):
    for a in range(tries):
        try:
            with urllib.request.urlopen(url, timeout=180) as r: return r.read().decode()
        except urllib.error.HTTPError as e:
            if e.code == 404: return None
            time.sleep(60 if e.code in (400, 429) else 5 * (a + 1))
        except Exception:
            time.sleep(5 * (a + 1))
    raise RuntimeError("download failed: " + url.split("/api/")[0])

def inside(row, bb): return bb[1] <= float(row["latitude"]) <= bb[3] and bb[0] <= float(row["longitude"]) <= bb[2]

def fetch_archive(out, country, bb, last_year):
    jobs = [(f, y) for f, y0 in (("modis", 2001), ("viirs-snpp", 2012), ("viirs-jpss1", 2018)) for y in range(y0, last_year + 1)]
    def one(j):
        fam, y = j; path = f"{out}/{fam}_{y}.csv"
        if os.path.exists(path): return path, "cached"
        txt = get(f"{ARCH}/{fam}/{y}/{fam}_{y}_{country}.csv")
        if txt is None: return path, "missing"
        rows = [[r.get(k, "") for k in KEEP] for r in csv.DictReader(io.StringIO(txt)) if inside(r, bb)]
        with open(path, "w", newline="") as f: w = csv.writer(f); w.writerow(KEEP); w.writerows(rows)
        return path, len(rows)
    with ThreadPoolExecutor(6) as ex:
        for p, n in ex.map(one, jobs): print("  ", os.path.basename(p), n, flush=True)

def fetch_current_year(out, bb, year, key):
    avail = {}
    for line in get(f"{API}/data_availability/csv/{key}/all").splitlines()[1:]:
        p = line.split(","); avail[p[0]] = (p[1], p[2])
    plan = {"modis": ["MODIS_SP", "MODIS_NRT"], "viirs-snpp": ["VIIRS_SNPP_SP", "VIIRS_SNPP_NRT"], "viirs-jpss1": ["VIIRS_NOAA20_SP", "VIIRS_NOAA20_NRT"]}
    start, end = dt.date(year, 1, 1), dt.date.today() - dt.timedelta(days=1)
    for fam, srcs in plan.items():
        path = f"{out}/{fam}_{year}.csv"
        if os.path.exists(path): continue
        rows, d = [], start
        while d <= end:
            src = next((s for s in srcs if s in avail and avail[s][0] <= d.isoformat() <= avail[s][1]), None)
            n = min(5, (end - d).days + 1)
            if src:
                txt = get(f"{API}/area/csv/{key}/{src}/{','.join(map(str, bb))}/{n}/{d.isoformat()}")
                for r in csv.DictReader(io.StringIO(txt or "")):
                    if fam == "modis": r["satellite"] = {"T": "Terra", "A": "Aqua"}.get(r.get("satellite"), r.get("satellite"))
                    rows.append([r.get(k, "") for k in KEEP])
            d += dt.timedelta(days=n)
        with open(path, "w", newline="") as f: w = csv.writer(f); w.writerow(KEEP); w.writerows(rows)
        print("  ", os.path.basename(path), len(rows), flush=True)

def compact(name, title, bb, res, country=None):
    keep_series = ["ensemble_adaptive", "ensemble_geom_adaptive", "ensemble", "frp_season_adaptive", "ratio_month_adaptive",
                   "ratio_adaptive", "ratio", "naive", "raw_rows", "aqua_only"]
    return {"name": name, "title": title, "country": country, "bbox": bb, "NM": res["NM"], "src": res["src"],
            "series": {k: res["series"][k] for k in keep_series}, "sensor_celldays": res["sensor_celldays"],
            "sensor_rows": res["sensor_rows"], "rows_total": res["rows_total"], "eval": res.get("eval", {}),
            "eval_months": res.get("eval_months", []), "eval_aqua": res.get("eval_aqua", []),
            "calib": res["calib"], "calib_stats": res["calib_stats"], "kT": res["kT"]}

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--name", required=True); ap.add_argument("--title", default=None)
    ap.add_argument("--bbox", required=True, help="lon_min,lat_min,lon_max,lat_max")
    ap.add_argument("--country", help="FIRMS country file name, e.g. Lebanon, South_Sudan")
    ap.add_argument("--from-dir", help="use existing CSVs instead of downloading")
    ap.add_argument("--no-current-year", action="store_true")
    ap.add_argument("--harm-data", action="store_true", help="also rebuild data/harm_data.js (legacy page)")
    a = ap.parse_args()
    bb = [float(x) for x in a.bbox.split(",")]
    folder = a.from_dir or os.path.join(DATA, "raw", a.name)
    if not a.from_dir:
        if not a.country: sys.exit("--country is required when downloading")
        os.makedirs(folder, exist_ok=True)
        last = dt.date.today().year - 1
        print(f"downloading archives 2001-{last} for {a.country}, cropped to {bb}")
        fetch_archive(folder, a.country, bb, last)
        if not a.no_current_year:
            key = map_key()
            if key: print(f"downloading {last + 1} from the FIRMS API"); fetch_current_year(folder, bb, last + 1, key)
            else: print("no FIRMS_MAP_KEY: skipping the current year")
    print("building fire-day cells, evaluating algorithms, calibrating")
    res = harmlib.build_region(folder)
    out_dir = os.path.join(DATA, "regions")
    os.makedirs(out_dir, exist_ok=True)
    out = os.path.join(out_dir, f"{a.name}.json")
    with open(out + ".tmp", "w") as f:
        json.dump(compact(a.name, a.title or a.name, bb, res, a.country), f, ensure_ascii=False, separators=(",", ":"))
    os.replace(out + ".tmp", out)   # atomic: the server never reads a half-written region
    print("wrote", out, flush=True)
    if a.harm_data or not os.environ.get("FIRMS_DATA_DIR"):
        import build_harm_data
        build_harm_data.main()

if __name__ == "__main__":
    main()
