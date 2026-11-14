"""Combine data/regions/*.json (+ data/benchmark.json) into data/harm_data.js for the simulation,
including a pooled 'global' calibration used for areas that have no regional calibration."""
import glob, json, os, sys
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)
import harmlib  # noqa: E402

def main():
    regs = [json.load(open(p)) for p in sorted(glob.glob(os.path.join(ROOT, "data", "regions", "*.json")))]
    pooled = None
    for r in regs:
        pooled = r["calib_stats"] if pooled is None else harmlib.add_stats(pooled, r["calib_stats"])
    out = {"start": "2001-01", "nb": harmlib.NB, "cell_deg": harmlib.G, "half_life": harmlib.HALF_LIFE,
           "regions": {r["name"]: {k: v for k, v in r.items() if k != "calib_stats"} for r in regs},
           "global_calib": harmlib.calib_params(pooled) if pooled else None}
    bp = os.path.join(ROOT, "data", "benchmark.json")
    if os.path.exists(bp): out["benchmark"] = json.load(open(bp))
    with open(os.path.join(ROOT, "data", "harm_data.js"), "w") as f:
        f.write("window.HARM_DATA=" + json.dumps(out, ensure_ascii=False, separators=(",", ":")) + ";\n")
    print(f"data/harm_data.js: {len(regs)} regions")

if __name__ == "__main__":
    main()
