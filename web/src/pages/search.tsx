import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Download, Earth, SearchX } from 'lucide-react'
import { FilterBar, type FilterOption, type FilterValue } from '@feeef.dev/ui/filter-bar'
import { Button, IconButton } from '@feeef.dev/ui/primitives/button'
import { Checkbox } from '@feeef.dev/ui/primitives/choice'
import { NumberField } from '@feeef.dev/ui/primitives/number-field'
import { TextField } from '@feeef.dev/ui/primitives/text-field'
import { useSession } from '@/app/session'
import { EmptyState, ErrorState, LoadingState, PageHeader, Panel, Table, Td, Th } from '@/components/ui/data'
import { regionTitle } from '@/lib/algorithms'
import { api, type HotspotQuery, type HotspotRow } from '@/lib/api'
import { parseBbox } from '@/lib/bbox'
import { downloadUrl } from '@/lib/download'
import { errorMessage } from '@/lib/errors'
import { formatBbox, formatDate, formatNumber } from '@/lib/format'
import { useAnalysisParams } from '@/lib/params'
import { useRemote } from '@/lib/use-remote'
import { ScreenDock, ScreenTop } from '@/shell/screen-slots'
import { t } from '@/i18n/locale'

const SOURCES = ['MODIS_NRT', 'VIIRS_SNPP_NRT', 'VIIRS_NOAA20_NRT', 'VIIRS_NOAA21_NRT', 'MODIS_SP', 'VIIRS_SNPP_SP', 'VIIRS_NOAA20_SP'] as const
const PAGE = 50

/** Yesterday (UTC): FIRMS near-real-time is complete for it. */
function yesterday(): string {
  return new Date(Date.now() - 86400000).toISOString().slice(0, 10)
}

/** Bounding box editor with its rule and an example. */
function BboxEditor({ value, onChange }: { value: FilterValue; onChange: (v: FilterValue) => void }) {
  const text = typeof value === 'string' ? value : ''
  return (
    <TextField
      hint={t('m.search.bbox')}
      value={text}
      onValueChange={(v) => onChange(v || null)}
      dir="ltr"
      inputMode="decimal"
      supportingText={t('m.search.bboxHint')}
      error={text && !parseBbox(text) ? t('m.search.bboxError') : null}
    />
  )
}

function SourcesEditor({ value, onChange }: { value: FilterValue; onChange: (v: FilterValue) => void }) {
  const chosen = typeof value === 'string' && value ? value.split(',') : []
  return (
    <fieldset className="fm-chips fm-sources">
      <legend className="fm-note">{t('m.search.sourcesHint')}</legend>
      {SOURCES.map((s) => (
        <Checkbox
          key={s}
          label={t(`m.source.${s}`)}
          description={<span dir="ltr">{s}</span>}
          checked={chosen.includes(s)}
          onCheckedChange={(on) => {
            const next = on ? [...chosen, s] : chosen.filter((x) => x !== s)
            onChange(next.length ? SOURCES.filter((x) => next.includes(x)).join(',') : null)
          }}
        />
      ))}
    </fieldset>
  )
}

function FrpEditor({ value, onChange }: { value: FilterValue; onChange: (v: FilterValue) => void }) {
  return (
    <NumberField
      label={t('m.search.minFrp')}
      unit="MW"
      min={0}
      max={500}
      step={1}
      value={typeof value === 'string' ? Number(value) || 0 : 0}
      onValueChange={(v) => onChange(v > 0 ? String(v) : null)}
      supportingText={t('m.search.minFrpHint')}
    />
  )
}

/**
 * Hotspot search: the FIRMS rows of an area (a region or a box), a date and up to five days
 * before it, filtered by source, confidence and fire power. Filters live in the address.
 */
export default function SearchPage() {
  const { regions } = useSession()
  const { params, update, search } = useAnalysisParams()
  const [pinned, setPinned] = useState<string[]>(['area', 'bbox', 'date', 'days', 'sources', 'conf', 'frp'])
  const [page, setPage] = useState(0)

  const bboxText = search.get('bbox')
  const bbox = parseBbox(bboxText)
  const date = search.get('date') || yesterday()
  const days = Math.min(5, Math.max(1, Number(search.get('days')) || 1))
  const sources = search.get('sources') || ''
  const conf = Number(search.get('conf') || 0)
  const frp = Number(search.get('frp') || 0)

  const query: HotspotQuery = {
    ...(bbox ? { bbox: bbox.join(',') } : { region: params.regionName }),
    date,
    days,
    sources: sources || undefined,
    min_conf: conf || undefined,
    min_frp: frp || undefined,
  }
  const queryKey = bbox || params.regionName ? JSON.stringify(query) : null
  const result = useRemote(queryKey, async (signal) => {
    setPage(0)
    return api.hotspots(query, signal)
  })

  const options = useMemo<FilterOption[]>(
    () => [
      { id: 'area', label: t('m.search.region'), description: t('m.search.regionHint'), type: 'enum', choices: regions.map((r) => ({ value: r.name, label: regionTitle(r) })) },
      { id: 'bbox', label: t('m.search.bbox'), description: t('m.search.bboxHint'), type: 'custom', renderEditor: (v, on) => <BboxEditor value={v} onChange={on} />, formatValue: (v) => (typeof v === 'string' ? v : '') , validate: (v) => (typeof v === 'string' && v && !parseBbox(v) ? t('m.search.bboxError') : null) },
      { id: 'date', label: t('m.search.date'), description: t('m.search.dateHint'), type: 'date', max: new Date().toISOString().slice(0, 10), min: '2000-11-01' },
      { id: 'days', label: t('m.search.days'), description: t('m.search.daysHint'), type: 'enum', choices: [1, 2, 3, 4, 5].map((d) => ({ value: String(d), label: t('m.search.daysValue', { count: d }) })) },
      { id: 'sources', label: t('m.search.sources'), description: t('m.search.sourcesHint'), type: 'custom', renderEditor: (v, on) => <SourcesEditor value={v} onChange={on} />, formatValue: (v) => (typeof v === 'string' ? t('m.search.sourcesCount', { count: v.split(',').length }) : '') },
      { id: 'conf', label: t('m.search.conf'), description: t('m.search.confHint'), type: 'enum', choices: [
        { value: '0', label: t('m.conf.all') },
        { value: '1', label: t('m.conf.nominal') },
        { value: '2', label: t('m.conf.high') },
      ] },
      { id: 'frp', label: t('m.search.minFrp'), description: t('m.search.minFrpHint'), type: 'custom', renderEditor: (v, on) => <FrpEditor value={v} onChange={on} />, formatValue: (v) => (typeof v === 'string' ? `≥ ${v} MW` : '') },
    ],
    [regions],
  )
  const values: Record<string, FilterValue> = {
    area: bbox ? null : params.regionName || null,
    bbox: bboxText,
    date,
    days: String(days),
    sources: sources || null,
    conf: conf ? String(conf) : null,
    frp: frp ? String(frp) : null,
  }
  const onValues = (next: Record<string, FilterValue>) => {
    const str = (v: FilterValue) => (typeof v === 'string' && v ? v : null)
    const patch: Record<string, string | null> = {
      date: str(next.date) === yesterday() ? null : str(next.date),
      days: str(next.days) === '1' ? null : str(next.days),
      sources: str(next.sources),
      conf: str(next.conf) === '0' ? null : str(next.conf),
      frp: str(next.frp),
    }
    const area = str(next.area)
    const box = str(next.bbox)
    if (area && area !== values.area) {
      patch.region = area
      patch.bbox = null
    } else {
      patch.bbox = box && parseBbox(box) ? box : null
      if (area) patch.region = area
    }
    update(patch)
  }

  const rows = result.data?.rows ?? []
  const pages = Math.max(1, Math.ceil(rows.length / PAGE))
  const shown = rows.slice(page * PAGE, page * PAGE + PAGE)
  const area = bbox ? formatBbox(bbox) : regionTitle(params.region)
  const globeHref = `/globe?${new URLSearchParams({ date, ...(bbox ? { bbox: bbox.join(',') } : params.region ? { bbox: params.region.bbox.join(',') } : {}) }).toString()}`

  return (
    <>
      <ScreenTop>
        <FilterBar
          label={t('m.search.filters')}
          options={options}
          value={[]}
          onChange={() => {}}
          values={values}
          onValuesChange={onValues}
          pinned={pinned}
          onPinnedChange={setPinned}
        />
      </ScreenTop>
      <PageHeader
        title={t('m.search.title')}
        description={
          <>
            <bdi>{area}</bdi> · {days > 1 ? t('m.search.window', { date: formatDate(date), count: days }) : formatDate(date)}
          </>
        }
      />
      <Panel aria-busy={result.loading || undefined}>
        {result.error && !result.data ? (
          <ErrorState title={t('m.search.failed')} message={errorMessage(result.error)} onRetry={result.reload} />
        ) : !result.data ? (
          <LoadingState label={t('m.search.loading')} />
        ) : !rows.length ? (
          <EmptyState
            icon={<SearchX size={20} />}
            title={t('m.search.none')}
            description={t('m.search.noneBody')}
            action={
              <Button variant="tonal" onClick={() => update({ sources: null, conf: null, frp: null, days: '3' })}>
                {t('m.search.widen')}
              </Button>
            }
          />
        ) : (
          <>
            <p className="fm-note fm-pad" role="status">
              {t('m.search.count', { count: rows.length })}
            </p>
            <Table label={t('m.search.title')}>
              <thead>
                <tr>
                  <Th>{t('m.search.col.time')}</Th>
                  <Th>{t('m.search.col.satellite')}</Th>
                  <Th numeric className="fm-wide-only">{t('m.search.col.lat')}</Th>
                  <Th numeric className="fm-wide-only">{t('m.search.col.lon')}</Th>
                  <Th>{t('m.search.col.conf')}</Th>
                  <Th numeric>{t('m.search.col.frp')}</Th>
                  <Th className="fm-wide-only">{t('m.search.col.dn')}</Th>
                </tr>
              </thead>
              <tbody>
                {shown.map((row, i) => (
                  <HotspotTr key={`${page}-${i}`} row={row} />
                ))}
              </tbody>
            </Table>
            {pages > 1 ? (
              <nav className="fm-pager" aria-label={t('m.search.pages')}>
                <IconButton variant="text" aria-label={t('m.search.prev')} disabled={page === 0} onClick={() => setPage(page - 1)}>
                  <ChevronLeft className="lab-dir-flip" />
                </IconButton>
                <span>{t('m.search.page', { page: page + 1, pages })}</span>
                <IconButton variant="text" aria-label={t('m.search.next')} disabled={page >= pages - 1} onClick={() => setPage(page + 1)}>
                  <ChevronRight className="lab-dir-flip" />
                </IconButton>
              </nav>
            ) : null}
          </>
        )}
      </Panel>
      <ScreenDock>
        <Button asChild variant="tonal">
          <Link to={globeHref}>
            <Earth aria-hidden />
            <span className="lab-control-label">{t('m.search.onGlobe')}</span>
          </Link>
        </Button>
        <Button variant="filled" disabled={!queryKey} onClick={() => downloadUrl(api.hotspotsCsvUrl(query), `hotspots_${date}.csv`)}>
          <Download aria-hidden />
          <span className="lab-control-label">{t('m.search.csv')}</span>
        </Button>
      </ScreenDock>
    </>
  )
}

const cell = (row: HotspotRow, ...keys: string[]) => {
  for (const k of keys) if (row[k] != null && row[k] !== '') return row[k]
  return null
}

function HotspotTr({ row }: { row: HotspotRow }) {
  const dateV = cell(row, 'acq_date', 'date')
  const time = String(cell(row, 'acq_time', 'time') ?? '').padStart(4, '0')
  // The server sends the class (0 low, 1 nominal, 2 high) and FIRMS' own value (MODIS %, VIIRS l/n/h).
  const words: Record<string, string> = { '0': t('m.conf.low'), '1': t('m.conf.nominalOne'), '2': t('m.conf.highOne'), l: t('m.conf.low'), n: t('m.conf.nominalOne'), h: t('m.conf.highOne'), low: t('m.conf.low'), nominal: t('m.conf.nominalOne'), high: t('m.conf.highOne') }
  const raw = cell(row, 'confidence_raw')
  const cls = cell(row, 'confidence', 'conf')
  const confText =
    raw != null && /^\d+(\.\d+)?$/.test(String(raw)) ? `${raw}%` : raw != null && words[String(raw)] ? words[String(raw)] : cls != null ? (words[String(cls)] ?? String(cls)) : '–'
  const lat = Number(cell(row, 'latitude', 'lat'))
  const lon = Number(cell(row, 'longitude', 'lon'))
  const dn = cell(row, 'daynight')
  return (
    <tr>
      <Td>
        <span dir="ltr">{dateV ? `${dateV} ${time.slice(0, 2)}:${time.slice(2)}` : '–'}</span>
      </Td>
      <Td>
        <span dir="ltr">{String(cell(row, 'satellite', 'source') ?? '–')}</span>
        <small className="fm-muted" dir="ltr"> {String(cell(row, 'instrument', 'source') ?? '')}</small>
      </Td>
      <Td numeric className="fm-wide-only">{formatNumber(lat, 4)}</Td>
      <Td numeric className="fm-wide-only">{formatNumber(lon, 4)}</Td>
      <Td>{confText}</Td>
      <Td numeric>{formatNumber(Number(cell(row, 'frp')), 1)}</Td>
      <Td className="fm-wide-only">{dn === 'N' ? t('m.search.night') : dn === 'D' ? t('m.search.day') : '–'}</Td>
    </tr>
  )
}
