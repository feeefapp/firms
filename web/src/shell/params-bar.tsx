import { useEffect, useRef, useState } from 'react'
import { CalendarRange, SlidersHorizontal } from 'lucide-react'
import { Button } from '@feeef.dev/ui/primitives/button'
import { IconButton } from '@feeef.dev/ui/primitives/button'
import { Option, Select } from '@feeef.dev/ui/primitives/select'
import { SegmentedControl } from '@feeef.dev/ui/primitives/segmented'
import { ToolbarGroup } from '@feeef.dev/ui/toolbar'
import { TemporalDialog } from '@feeef.dev/ui/filters/temporal-dialog'
import type { TemporalValue } from '@feeef.dev/ui/filters/temporal'
import { useSession } from '@/app/session'
import { regionTitle } from '@/lib/algorithms'
import { formatYm } from '@/lib/format'
import { regionEnd, useAnalysisParams, ymIndex, ymOf, type Period, type View } from '@/lib/params'
import { dir, t } from '@/i18n/locale'
import { ScreenTop } from './screen-slots'
import { AdvancedSheet } from './advanced-sheet'

/** Last day of a `YYYY-MM` month. */
function monthEndDay(ym: string): string {
  const [y, m] = ym.split('-').map(Number)
  return `${ym}-${String(new Date(Date.UTC(y, m, 0)).getUTCDate()).padStart(2, '0')}`
}

/**
 * The simple parameters, one bubble: region, period preset and view. Custom periods open a
 * month-range picker; the algorithm, baseline and colours live behind "Advanced".
 */
export function ParamsBar({ showView = true }: { showView?: boolean }) {
  const { regions } = useSession()
  const { params, update } = useAnalysisParams()
  const [picking, setPicking] = useState(false)
  const [draft, setDraft] = useState<TemporalValue>(null)
  const [advanced, setAdvanced] = useState(false)
  const advancedButton = useRef<HTMLButtonElement>(null)
  const end = regionEnd(params.region)

  const openCustom = () => {
    setDraft({ from: `${params.from}-01`, to: monthEndDay(params.to) })
    setPicking(true)
  }
  const reopen = useRef(openCustom)
  reopen.current = openCustom
  useEffect(() => {
    const open = () => reopen.current()
    window.addEventListener(EDIT_PERIOD, open)
    return () => window.removeEventListener(EDIT_PERIOD, open)
  }, [])
  const periodOptions: { value: Period; label: string }[] = [
    { value: '12m', label: t('m.period.12m') },
    { value: '5y', label: t('m.period.5y') },
    { value: 'all', label: t('m.period.all') },
    // The range itself reads in the page header; the option stays short so the bar fits a phone.
    { value: 'custom', label: t('m.period.custom') },
  ]
  const lastYear = Number(end.slice(0, 4))
  const presets = [lastYear - 1, lastYear - 2, lastYear - 3].map((y) => ({ label: String(y), value: { from: `${y}-01-01`, to: `${y}-12-31` } }))
  presets.push({ label: t('m.period.baseline'), value: { from: '2003-01-01', to: '2022-12-31' } })

  return (
    <>
      <ScreenTop>
        <ToolbarGroup label={t('m.params.label')} className="fm-params">
          <Select
            hint={t('m.params.region')}
            labelStyle="inside"
            variant="text"
            value={params.regionName || null}
            onValueChange={(region) => update({ region })}
            containerClassName="fm-params-region"
          >
            {regions.map((r) => (
              <Option key={r.name} value={r.name}>
                {regionTitle(r)}
              </Option>
            ))}
          </Select>
          <SegmentedControl
            label={t('m.params.period')}
            value={params.period}
            onChange={(period) => {
              if (period === 'custom') openCustom()
              else update({ period })
            }}
            options={periodOptions}
          />

          {showView ? (
            <SegmentedControl<View>
              label={t('m.params.view')}
              value={params.view}
              onChange={(view) => update({ view })}
              options={[
                { value: 'count', label: t('m.view.count') },
                { value: 'anomaly', label: t('m.view.anomaly') },
              ]}
            />
          ) : null}
          <IconButton ref={advancedButton} variant="ghost" appearance="toolbar" aria-label={t('m.params.advanced')} onClick={() => setAdvanced(true)}>
            <SlidersHorizontal />
          </IconButton>
        </ToolbarGroup>
      </ScreenTop>
      <TemporalDialog
        open={picking}
        label={t('m.period.pick')}
        close={() => setPicking(false)}
        formId="firms-period"
        dir={dir}
        intro={t('m.period.pickIntro')}
        config={{ type: 'dateRange', min: '2001-01-01', max: monthEndDay(end), presets }}
        value={draft}
        onChange={setDraft}
        resetKey={picking}
        onSubmit={(event) => {
          event.preventDefault()
          if (draft && typeof draft === 'object' && draft.from) {
            const from = draft.from.slice(0, 7)
            const to = (draft.to || draft.from).slice(0, 7)
            const a = Math.min(ymIndex(from), ymIndex(to))
            const b = Math.max(ymIndex(from), ymIndex(to))
            update({ period: 'custom', from: ymOf(a), to: ymOf(b) })
            setPicking(false)
          }
        }}
      />
      <AdvancedSheet open={advanced} onClose={() => setAdvanced(false)} source={advancedButton} />
    </>
  )
}

const EDIT_PERIOD = 'firms:edit-period'

/** A text button beside the page title that reopens the custom period picker (the bar's
 * selected option can't be pressed again once it has folded on a phone). */
export function EditPeriodButton() {
  const { params } = useAnalysisParams()
  if (params.period !== 'custom') return null
  return (
    <Button variant="text" controlSize="small" onClick={() => window.dispatchEvent(new Event(EDIT_PERIOD))}>
      <CalendarRange aria-hidden />
      {t('m.period.edit')}
    </Button>
  )
}

/** "March 2020 – May 2026" for headers. */
export function rangeLabel(from: string, to: string): string {
  return from === to ? formatYm(from) : t('m.period.between', { from: formatYm(from), to: formatYm(to) })
}
