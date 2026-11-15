#!/usr/bin/env python3
"""
Known heat sources from the FIRMS archives: the detections FIRMS itself labels as not vegetation
fires (`type` 1 volcano, 2 other static land source such as gas flares, refineries and factories,
3 offshore platforms), grouped into sites.

Each 0.02° cell (the fire-day grid) with typed detections is counted; touching cells of the same
kind merge into one site (a flare field, a volcano summit). A site is kept when it burned on at
least `--min-days` distinct days in at least `--min-years` distinct years: persistent sources, not
one-off events. Output: data/static_sources.json, read by the server (`/api/static-sources`) and
drawn on the globe.

    python3 tools/static_sources.py                 # every data/raw/<region>/*.csv
    python3 tools/static_sources.py --raw /data/raw  # another archive folder
"""
import argparse
import csv
import glob
import json
import os
from collections import defaultdict
from datetime import datetime, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.environ.get("FIRMS_DATA_DIR", os.path.join(HERE, "..", "data"))
KIND = {"1": "volcano", "2": "industrial", "3": "offshore"}
# Named volcanoes (Smithsonian GVP summit coordinates); a volcano site within 20 km takes the name.
VOLCANOES = [
    ("Etna", 37.748, 14.999), ("Stromboli", 38.789, 15.213), ("Vulcano", 38.404, 14.962), ("Vesuvius", 40.821, 14.426),
    ("Campi Flegrei", 40.827, 14.139), ("Teide", 28.271, -16.641), ("Cumbre Vieja (La Palma)", 28.57, -17.83),
    ("Piton de la Fournaise", -21.244, 55.708), ("Erta Ale", 13.6, 40.67), ("Nyiragongo", -1.52, 29.25),
]
CELL = 0.02


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--raw", default=os.path.join(DATA, "raw"))
    ap.add_argument("--out", default=os.path.join(HERE, "..", "data", "static_sources.json"))
    ap.add_argument("--min-days", type=int, default=12)
    ap.add_argument("--min-years", type=int, default=2)
    a = ap.parse_args()

    # (kind, i, j) -> stats
    cells = defaultdict(lambda: {"n": 0, "days": set(), "years": set(), "frp": 0.0, "la": 0.0, "lo": 0.0, "region": None})
    files = sorted(glob.glob(os.path.join(a.raw, "*", "*.csv")))
    for f in files:
        region = os.path.basename(os.path.dirname(f))
        with open(f, newline="") as fh:
            for r in csv.DictReader(fh):
                kind = KIND.get((r.get("type") or "").strip())
                if not kind:
                    continue
                try:
                    la, lo = float(r["latitude"]), float(r["longitude"])
                except (KeyError, ValueError):
                    continue
                c = cells[(kind, int(la // CELL), int(lo // CELL))]
                c["n"] += 1
                d = r.get("acq_date", "")
                c["days"].add(d)
                c["years"].add(d[:4])
                try:
                    c["frp"] += float(r.get("frp") or 0)
                except ValueError:
                    pass
                c["la"] += la
                c["lo"] += lo
                c["region"] = c["region"] or region

    # merge touching cells of the same kind (8-neighbourhood) into sites
    seen, sites = set(), []
    for key in cells:
        if key in seen:
            continue
        kind = key[0]
        stack, group = [key], []
        seen.add(key)
        while stack:
            k = stack.pop()
            group.append(k)
            for di in (-1, 0, 1):
                for dj in (-1, 0, 1):
                    nb = (kind, k[1] + di, k[2] + dj)
                    if nb in cells and nb not in seen:
                        seen.add(nb)
                        stack.append(nb)
        n = sum(cells[k]["n"] for k in group)
        days = set().union(*(cells[k]["days"] for k in group))
        years = sorted(set().union(*(cells[k]["years"] for k in group)))
        if len(days) < a.min_days or len(years) < a.min_years:
            continue
        sites.append({
            "kind": kind,
            "lat": round(sum(cells[k]["la"] for k in group) / n, 4),
            "lon": round(sum(cells[k]["lo"] for k in group) / n, 4),
            "detections": n,
            "days": len(days),
            "first": min(days),
            "last": max(days),
            "years": len(years),
            "cells": len(group),
            "frp_mean": round(sum(cells[k]["frp"] for k in group) / n, 1),
            "region": cells[group[0]]["region"],
        })
    import math
    for site in sites:
        if site["kind"] != "volcano":
            continue
        for name, vla, vlo in VOLCANOES:
            dkm = 111.2 * math.hypot(site["lat"] - vla, (site["lon"] - vlo) * math.cos(math.radians(vla)))
            if dkm < 20:
                site["name"] = name
                break
    # FIRMS sometimes labels a volcano's pixels as "other static source" (older years): a site within
    # 6 km of a volcano is that volcano.
    volcanoes = [x for x in sites if x["kind"] == "volcano"]
    kept = []
    for site in sites:
        host = None
        if site["kind"] != "volcano":
            for v in volcanoes:
                if 111.2 * math.hypot(site["lat"] - v["lat"], (site["lon"] - v["lon"]) * math.cos(math.radians(v["lat"]))) < 6:
                    host = v
                    break
        if host is None:
            kept.append(site)
            continue
        n = host["detections"] + site["detections"]
        host["frp_mean"] = round((host["frp_mean"] * host["detections"] + site["frp_mean"] * site["detections"]) / n, 1)
        host["detections"] = n
        host["days"] += site["days"]
        host["cells"] += site["cells"]
        host["first"] = min(host["first"], site["first"])
        host["last"] = max(host["last"], site["last"])
    # One icon per named volcano (a flank vent joins its volcano).
    by_name, merged = {}, []
    for site in sorted(kept, key=lambda x: -x["detections"]):
        name = site.get("name")
        if site["kind"] == "volcano" and name in by_name:
            host = by_name[name]
            host["detections"] += site["detections"]
            host["days"] += site["days"]
            host["cells"] += site["cells"]
            host["first"] = min(host["first"], site["first"])
            host["last"] = max(host["last"], site["last"])
            continue
        if site["kind"] == "volcano" and name:
            by_name[name] = site
        merged.append(site)
    sites = merged
    sites.sort(key=lambda s: -s["detections"])
    out = {
        "generated": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%MZ"),
        "source": "NASA FIRMS archives, `type` 1 (volcano), 2 (other static land source), 3 (offshore)",
        "regions": sorted({s["region"] for s in sites}),
        "rule": f"0.02° cells merged into touching sites; kept when seen on ≥ {a.min_days} days in ≥ {a.min_years} years",
        "sources": sites,
    }
    with open(a.out, "w") as fh:
        json.dump(out, fh, separators=(",", ":"))
    by = defaultdict(int)
    for s in sites:
        by[s["kind"]] += 1
    print(f"{len(files)} files → {len(sites)} sites {dict(by)} → {a.out}")


if __name__ == "__main__":
    main()
