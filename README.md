# Firms

**One fire record from 2001 to now.** Firms harmonizes NASA's MODIS (2000→) and VIIRS (2012→) active-fire
detections into a single monthly calendar of *Aqua-equivalent fire-days*. You can count fires across 25
years without the jump that appears when one sensor hands over to the other. It was built for the NASA
Space Apps 2026 challenge *Harmonization of MODIS and VIIRS Hot Spots*.

Live: **https://firms.apps.feeef.dev** (Arabic and English). New to the topic? Read the
**[plain-language guide](https://firms.apps.feeef.dev/guide.html)** ([`web/public/guide.html`](web/public/guide.html)):
cameras vs satellites, fire-days, the conversion, how it was tested, the 7% floor, results per
region (Algeria included), the 2022 orbit drift and how to read the calendar, with interactive charts.

## What's inside

- **Calendar & compare**: monthly fire-days per region from 2001, anomalies against 2003–2022, and nine
  harmonization methods side by side with their measured errors (leave-one-year-out and forward tests).
- **Globe**: a WebGL Earth showing every FIRMS pixel at its real size and orientation. One day plays with
  the satellites on their orbits and their scan swaths. Any date range can be shown for a country or a drawn
  area. You can filter by satellite, sensor, confidence, FRP and day/night, and pick a pixel to see what the
  satellite measured.
- **Agent**: a chat assistant that answers from the data (every number comes from a tool call). It can
  also drive the app: open views, filter the globe, fly the camera and draw areas.
- **MCP server**: the same tools for Claude, ChatGPT, Cursor and other MCP clients at `/mcp`, with OAuth
  sign-in, typed outputs and two interactive widgets.

## The method in one paragraph

A *fire-day* is a ~2 km cell (0.02°) on one local solar day. MODIS needs confidence ≥ 30, VIIRS drops
`low`, and static sources (volcanoes, industry) are masked. Aqua MODIS is the reference sensor. Terra-only
months before mid-2002 and VIIRS months after Aqua's orbit drift (2022→) are converted to Aqua-equivalent
counts. The recommended *adaptive ensemble* averages two estimates:

- a per-month ratio;
- a seasonal FRP-binned response curve, fitted isotonically.

It weights recent years more (2-year half-life). Measured error on monthly totals is about 10%, against a
noise floor of about 7% (`tools/harmlib.py`, `data/benchmark.json`).

## Run it

```sh
cp .env.example .env            # set FIRMS_PUBLIC_ORIGIN at least; a FIRMS MAP key unlocks live data
docker build -t firms .
docker run -p 8080:8080 -v firms-data:/data --env-file .env -e FIRMS_PUBLIC_ORIGIN=http://localhost:8080 firms
```

Develop the pieces separately with [`server/README.md`](server/README.md) (Rust, `cargo run`, `cargo test`)
and [`web/README.md`](web/README.md) (React + Vite). `FIRMS_MOCK=1 npm run dev` runs the web app on the seed
data without the server. The web app is built on the `@feeef.dev/ui` kit. A Docker build without access to
the kit uses the committed bundle in `web/prebuilt`.

Repository layout: `server/` (axum API, MCP, OAuth, agent), `web/` (SPA), `tools/` (Python harmonization and
data fetchers), `data/` (seed regions and benchmark), `docs/ARCHITECTURE.md` (API and design reference).

## Data and credits

- Fire detections: **NASA FIRMS**. *We acknowledge the use of data and/or imagery from NASA's Fire Information
  for Resource Management System (FIRMS) (https://earthdata.nasa.gov/firms), part of NASA's Earth Science Data and
  Information System (ESDIS).*
- Satellite orbits from public TLEs (CelesTrak) via `satellite.js`.
- Base imagery: NASA Blue Marble and Black Marble (via `three-globe`), plus Esri World Imagery tiles when you zoom in.
- Country shapes: Natural Earth (public domain) via `world-atlas`.

## License

[MIT](LICENSE). Report security issues privately, as described in [SECURITY.md](SECURITY.md).
