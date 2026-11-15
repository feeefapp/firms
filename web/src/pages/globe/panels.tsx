import { Info } from 'lucide-react'
import { ListRow, ListSection } from '@feeef.dev/ui/primitives/list'
import { ErrorState, LoadingState, Notice, Table, Td, Th } from '@/components/ui/data'
import { api } from '@/lib/api'
import { errorMessage } from '@/lib/errors'
import { formatBbox, formatDate, formatNumber } from '@/lib/format'
import { useRemote } from '@/lib/use-remote'
import { t } from '@/i18n/locale'
import { SYSTEM_COLORS, type DaySat, type PickedRecord, type Stats } from './engine'

const hhmm = (t: number) => new Date(t * 1000).toISOString().slice(11, 16)
const kelvin = (v: number | null) => (v == null ? '–' : `${v.toFixed(1)} K ≈ ${(v - 273.15).toFixed(0)}°C`)

/** One FIRMS record: what the satellite measured and how it saw the place. */
export function RecordDetails({ record: r }: { record: PickedRecord }) {
  const confWords = [t('m.conf.low'), t('m.conf.nominalOne'), t('m.conf.highOne')]
  const conf = r.sat.conf === 'pct' && r.confRaw >= 0 ? `${r.confRaw}% → ${confWords[r.conf]}` : confWords[r.conf] ?? '–'
  const fact = (title: string, value: string, ltr = true) => <ListRow static title={title} trailing={<span dir={ltr ? 'ltr' : undefined}>{value}</span>} />
  return (
    <div className="fm-stack">
      <p className="fm-note">
        <span style={{ color: SYSTEM_COLORS[r.sat.system] }} aria-hidden>
          ■{' '}
        </span>
        {r.sat.symbol} {r.sat.name} · {r.sat.instrument} · {formatDate(new Date(r.time * 1000).toISOString().slice(0, 10))} · {t('m.globe.observedAt', { time: hhmm(r.time) })}
      </p>
      <ListSection header={t('m.globe.measured')}>
        {fact(t('m.globe.f.position'), `${r.lat.toFixed(4)}, ${r.lon.toFixed(4)}`)}
        {fact('FRP', r.frp == null ? '–' : `${formatNumber(r.frp, 1)} MW`)}
        {fact(t('m.globe.f.conf'), conf, false)}
        {fact(t('m.globe.f.dn'), r.dayNight === 'N' ? t('m.search.night') : t('m.search.day'), false)}
        {fact(t('m.globe.f.bright'), kelvin(r.b4))}
        {fact(t('m.globe.f.brightBg'), kelvin(r.b5))}
        {fact(t('m.globe.f.size'), `${r.scanKm.toFixed(2)} × ${r.trackKm.toFixed(2)} km (×${r.growth.toFixed(1)})`)}
        {r.version ? fact(t('m.globe.f.version'), r.version) : null}
      </ListSection>
      <ListSection header={t('m.globe.geometry')}>
        {r.altitudeKm == null ? null : fact(t('m.globe.f.altitude'), `${formatNumber(r.altitudeKm)} km`)}
        {r.nadirKm == null ? null : fact(t('m.globe.f.nadir'), `${formatNumber(r.nadirKm)} km`)}
        {r.viewZenith == null ? <ListRow static title={t('m.globe.noOrbit')} /> : fact(t('m.globe.f.vza'), `${r.viewZenith.toFixed(0)}°`)}
      </ListSection>
      <ListSection header={t('m.globe.nearby')} footer={t('m.globe.nearbyHint')}>
        <ListRow static title={t('m.globe.samePass', { count: r.samePass })} trailing={<span dir="ltr">{formatNumber(r.samePassFrp, 1)} MW</span>} />
        {r.others.length ? (
          r.others.map((o) => (
            <ListRow key={o.sat.code} static title={`${o.sat.symbol} ${o.sat.name}`} trailing={`${o.count}×`} />
          ))
        ) : (
          <ListRow static title={t('m.globe.noOthers')} />
        )}
      </ListSection>
    </div>
  )
}

/**
 * The box on the globe: FIRMS rows and fire-day cells per satellite, the VIIRS fire-days turned
 * into Aqua-equivalent by each method, and Aqua's own count (which drifted to ~15:15 local).
 */
export function AreaPanel({
  bbox,
  date,
  regions,
  stats,
  sats,
}: {
  bbox: number[]
  /** The day shown, or null for a range (the conversion is per day). */
  date: string | null
  regions: { name: string; title: string; bbox: number[] }[]
  /** Records of the loaded data inside the box, with every filter applied. */
  stats: Stats | null
  sats: DaySat[]
}) {
  return (
    <div className="fm-stack">
      <p className="fm-note">
        <span dir="ltr">{formatBbox(bbox)}</span>
      </p>
      {stats ? (
        <ListSection header={t('m.globe.inBox')} footer={t('m.globe.inBoxHint')}>
          <ListRow static title={t('m.globe.visible')} trailing={formatNumber(stats.total)} />
          <ListRow static title={t('m.globe.frpSum')} trailing={<span dir="ltr">{formatNumber(stats.frp, 0)} MW</span>} />
          {stats.bySat.map((n, i) =>
            n ? (
              <ListRow
                key={sats[i].code}
                static
                leading={<i className="fm-swatch" style={{ background: SYSTEM_COLORS[sats[i].system] }} aria-hidden />}
                title={<span dir="ltr">{`${sats[i].symbol} ${sats[i].name}`}</span>}
                trailing={formatNumber(n)}
              />
            ) : null,
          )}
        </ListSection>
      ) : null}
      {date ? <Conversions bbox={bbox} date={date} regions={regions} /> : <Notice tone="info" icon={<Info size={16} />}>{t('m.globe.rangeConversion')}</Notice>}
    </div>
  )
}

/** VIIRS fire-days of one day in the box, as Aqua-equivalent (`/api/live`). */
function Conversions({ bbox, date, regions }: { bbox: number[]; date: string; regions: { name: string; title: string; bbox: number[] }[] }) {
  const key = `${bbox.join(',')}|${date}`
  const live = useRemote(key, (signal) => api.live({ bbox: bbox.join(','), date }, signal))
  const data = live.data
  const inside = bbox ? regions.find((r) => bbox[0] >= r.bbox[0] - 0.01 && bbox[1] >= r.bbox[1] - 0.01 && bbox[2] <= r.bbox[2] + 0.01 && bbox[3] <= r.bbox[3] + 0.01) : null
  const methods = [
    ['ensemble', t('m.alg.ensemble')],
    ['frp_season', t('m.alg.frp_season_adaptive')],
    ['ratio_month', t('m.alg.ratio_month_adaptive')],
    ['ratio', t('m.alg.ratio')],
  ] as const
  return (
    <>
      {live.error && !data ? (
        <ErrorState title={t('m.live.failed')} message={errorMessage(live.error)} onRetry={live.reload} />
      ) : !data ? (
        <LoadingState label={t('m.live.loading')} />
      ) : (
        <div className="fm-stack" aria-busy={live.loading || undefined}>
          <p className="fm-note">{formatDate(data.date || date)}</p>
          {inside ? <Notice tone="info" icon={<Info size={16} />}>{t('m.live.inside', { region: inside.title })}</Notice> : null}
          <section className="fm-stack" aria-label={t('m.live.perSat')}>
            <h3 className="fm-subhead">{t('m.live.perSat')}</h3>
            {data.satellites.length ? (
              <Table label={t('m.live.perSat')}>
                <thead>
                  <tr>
                    <Th>{t('m.live.satellite')}</Th>
                    <Th numeric>{t('m.live.rows')}</Th>
                    <Th numeric>{t('m.live.cells')}</Th>
                  </tr>
                </thead>
                <tbody>
                  {data.satellites.map((s) => (
                    <tr key={s.code}>
                      <Td>
                        <span dir="ltr">{s.name}</span>
                      </Td>
                      <Td numeric>{formatNumber(s.rows)}</Td>
                      <Td numeric>{s.fire_day_cells == null ? '–' : formatNumber(s.fire_day_cells)}</Td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <p className="fm-note">{t('m.live.none')}</p>
            )}
          </section>
          <section className="fm-stack" aria-label={t('m.live.converted')}>
            <h3 className="fm-subhead">{t('m.live.converted')}</h3>
            <p className="fm-note">
              {data.calibration.kind === 'region' ? t('m.live.calRegion', { region: data.calibration.title ?? data.calibration.region ?? '' }) : t('m.live.calGlobal')}
            </p>
            {data.conversions.length ? (
              <Table label={t('m.live.converted')}>
                <thead>
                  <tr>
                    <Th>{t('m.live.from')}</Th>
                    <Th numeric>{t('m.live.cells')}</Th>
                    {methods.map(([k, n]) => (
                      <Th key={k} numeric>
                        {n}
                      </Th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.conversions.map((c) => (
                    <tr key={c.code}>
                      <Td>
                        <span dir="ltr">{c.name}</span>
                      </Td>
                      <Td numeric>{formatNumber(c.cells)}</Td>
                      {methods.map(([k]) => (
                        <Td key={k} numeric data-best={k === 'ensemble' || undefined}>
                          {formatNumber(c[k], 1)}
                        </Td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <Td>
                      <strong>{t('m.live.aquaActual')}</strong>
                    </Td>
                    <Td numeric colSpan={methods.length + 1}>
                      <strong>{formatNumber(data.aqua.fire_day_cells)}</strong>
                    </Td>
                  </tr>
                </tbody>
              </Table>
            ) : (
              <p className="fm-note">{t('m.live.noViirs')}</p>
            )}
            <Notice tone="warning" icon={<Info size={16} />}>
              {t('m.live.aquaNote', { time: data.aqua.overpass_local ?? '15:15' })}
            </Notice>
          </section>
        </div>
      )}
    </>
  )
}
