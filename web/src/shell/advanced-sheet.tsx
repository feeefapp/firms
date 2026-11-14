import type { RefObject } from 'react'
import { Sheet } from '@feeef.dev/ui/containers/sheet'
import { RadioGroup } from '@feeef.dev/ui/primitives/choice'
import { Button } from '@feeef.dev/ui/primitives/button'
import { PresentationDock } from '@feeef.dev/ui/presentation/dock'
import { useSession } from '@/app/session'
import { Tag } from '@/components/ui/data'
import { algorithmList, measuredError } from '@/lib/algorithms'
import { CMAPS, DIVERGING_STOPS, type ColorMap } from '@/lib/colors'
import { formatNumber } from '@/lib/format'
import { DEFAULT_ALGORITHM, useAnalysisParams } from '@/lib/params'
import { t } from '@/i18n/locale'

/**
 * The advanced parameters: the conversion algorithm (name, one line, its measured error here,
 * the recommended one tagged and pre-selected), the baseline and the colour map. Changes apply
 * at once and stay in the address.
 */
export function AdvancedSheet({ open, onClose, source }: { open: boolean; onClose: () => void; source?: RefObject<HTMLElement | null> }) {
  const { algorithms } = useSession()
  const { params, update } = useAnalysisParams()
  const list = algorithmList(algorithms)
  const changed = params.algorithm !== DEFAULT_ALGORITHM || params.baseline !== 'median' || params.cmap !== 'cividis'
  return (
    <Sheet
      open={open}
      onOpenChange={(next) => (next ? undefined : onClose())}
      label={t('m.advanced.title')}
      title={t('m.advanced.title')}
      detents={['medium', 'large']}
      source={source}
      regular="pane"
      dock={
        changed ? (
          <PresentationDock label={t('m.advanced.actions')}>
            <Button variant="tonal" onClick={() => update({ alg: null, baseline: null, cmap: null })}>
              {t('m.advanced.reset')}
            </Button>
          </PresentationDock>
        ) : undefined
      }
    >
      <div className="fm-advanced">
        <RadioGroup
          label={t('m.advanced.algorithm')}
          description={t('m.advanced.algorithmHint')}
          value={params.algorithm}
          onValueChange={(alg) => update({ alg })}
          options={list.map((a) => {
            const err = measuredError(params.region, a.key)
            return {
              value: a.key,
              label: (
                <span className="fm-alg-label">
                  <span>{a.name}</span>
                  {a.recommended ? <Tag tone="primary">{t('m.advanced.recommended')}</Tag> : null}
                </span>
              ),
              description: (
                <>
                  {a.description}
                  <br />
                  <span className="fm-alg-error">
                    {a.key === 'aqua_only'
                      ? t('m.advanced.reference')
                      : err != null
                        ? t('m.advanced.error', { pct: formatNumber(err, 1) })
                        : t('m.advanced.noError')}
                  </span>
                </>
              ),
            }
          })}
        />
        <RadioGroup
          label={t('m.advanced.baseline')}
          description={t('m.advanced.baselineHint')}
          value={params.baseline}
          onValueChange={(baseline) => update({ baseline })}
          options={[
            { value: 'median', label: t('m.baseline.median') },
            { value: 'mean', label: t('m.baseline.mean') },
          ]}
        />
        <RadioGroup
          label={t('m.advanced.cmap')}
          description={t('m.advanced.cmapHint')}
          value={params.cmap}
          onValueChange={(cmap) => update({ cmap })}
          options={(Object.keys(CMAPS) as ColorMap[]).map((key) => ({
            value: key,
            label: (
              <span className="fm-cmap-label">
                <span>{t(`m.cmap.${key}`)}</span>
                <i className="fm-ramp" style={{ background: `linear-gradient(to right, ${CMAPS[key].join(',')})` }} aria-hidden />
              </span>
            ),
          }))}
        />
        <p className="fm-note">
          {t('m.advanced.anomalyNote')}{' '}
          <i className="fm-ramp fm-ramp-inline" style={{ background: `linear-gradient(to right, ${DIVERGING_STOPS.join(',')})` }} aria-hidden />
        </p>
      </div>
    </Sheet>
  )
}
