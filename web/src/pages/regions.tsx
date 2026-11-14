import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays, LogIn, MapPinned, Plus } from 'lucide-react'
import { Button } from '@feeef.dev/ui/primitives/button'
import { TextField } from '@feeef.dev/ui/primitives/text-field'
import { Sheet } from '@feeef.dev/ui/containers/sheet'
import { PresentationDock } from '@feeef.dev/ui/presentation/dock'
import { PixelLoader } from '@feeef.dev/ui/pixel-art'
import { useSession } from '@/app/session'
import { EmptyState, ErrorState, FormError, LoadingState, PageHeader, Panel, Table, Tag, Td, Th } from '@/components/ui/data'
import { useToast } from '@/components/ui/toast'
import { regionTitle } from '@/lib/algorithms'
import { api, type FireLevel, type Job } from '@/lib/api'
import { parseBbox } from '@/lib/bbox'
import { errorMessage } from '@/lib/errors'
import { formatBbox, formatNumber, formatYm } from '@/lib/format'
import { regionEnd } from '@/lib/params'
import { ScreenDock, ScreenTitle } from '@/shell/screen-slots'
import { t } from '@/i18n/locale'

const LEVEL_TONE: Record<FireLevel, 'warning' | 'neutral' | 'success'> = { low: 'warning', medium: 'neutral', high: 'success' }

/** The calibrated regions, and building a new one from the FIRMS archive. */
export default function RegionsPage() {
  const { regions, regionsLoading, regionsError, reloadRegions, user, signIn } = useSession()
  const [adding, setAdding] = useState(false)
  const addButton = useRef<HTMLButtonElement>(null)

  return (
    <>
      <ScreenTitle title={t('m.nav.regions')} />
      <PageHeader title={t('m.regions.title')} description={t('m.regions.hint')} />
      <Panel>
        {regionsError && !regions.length ? (
          <ErrorState title={t('m.regions.loadFailed')} message={errorMessage(regionsError)} onRetry={() => void reloadRegions()} />
        ) : regionsLoading && !regions.length ? (
          <LoadingState label={t('m.regions.loading')} />
        ) : !regions.length ? (
          <EmptyState icon={<MapPinned size={20} />} title={t('m.regions.none')} description={t('m.regions.noneBody')} />
        ) : (
          <Table label={t('m.regions.title')}>
            <thead>
              <tr>
                <Th>{t('m.regions.col.name')}</Th>
                <Th>{t('m.regions.col.level')}</Th>
                <Th className="fm-wide-only">{t('m.regions.col.bbox')}</Th>
                <Th className="fm-wide-only">{t('m.regions.col.range')}</Th>
                <Th numeric>{t('m.regions.col.error')}</Th>
                <Th />
              </tr>
            </thead>
            <tbody>
              {regions.map((r) => (
                <tr key={r.name}>
                  <Td>
                    <strong>
                      <bdi>{regionTitle(r)}</bdi>
                    </strong>
                    <br />
                    <small className="fm-muted" dir="ltr">
                      {r.name}
                    </small>
                  </Td>
                  <Td>
                    <Tag tone={LEVEL_TONE[r.fire_level] ?? 'neutral'}>{t(`m.level.${r.fire_level}`)}</Tag>
                  </Td>
                  <Td className="fm-wide-only">
                    <span dir="ltr" className="fm-mono-small">
                      {formatBbox(r.bbox)}
                    </span>
                  </Td>
                  <Td className="fm-wide-only">{t('m.period.between', { from: formatYm(r.start), to: formatYm(regionEnd(r)) })}</Td>
                  <Td numeric>{r.eval?.ensemble_adaptive != null ? `${formatNumber(r.eval.ensemble_adaptive, 1)}%` : '–'}</Td>
                  <Td>
                    <Button asChild variant="text" controlSize="small">
                      <Link to={`/?region=${encodeURIComponent(r.name)}`}>
                        <CalendarDays aria-hidden />
                        {t('m.regions.open')}
                      </Link>
                    </Button>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <p className="fm-note fm-pad">{t('m.regions.levelNote')}</p>
      </Panel>
      <ScreenDock>
        {user === null ? (
          <Button variant="filled" onClick={() => signIn()}>
            <LogIn aria-hidden className="lab-dir-flip" />
            <span className="lab-control-label">{t('m.regions.signInToAdd')}</span>
          </Button>
        ) : (
          <Button ref={addButton} variant="filled" onClick={() => setAdding(true)} disabled={!user}>
            <Plus aria-hidden />
            <span className="lab-control-label">{t('m.regions.add')}</span>
          </Button>
        )}
      </ScreenDock>
      <AddRegionSheet open={adding} onClose={() => setAdding(false)} source={addButton} />
    </>
  )
}

type Draft = { name: string; title: string; country: string; bbox: string }
const EMPTY: Draft = { name: '', title: '', country: '', bbox: '' }

function validate(d: Draft, taken: string[]) {
  return {
    name: !d.name ? t('m.regions.form.nameRequired') : !/^[a-z][a-z0-9_]{1,31}$/.test(d.name) ? t('m.regions.form.nameRule') : taken.includes(d.name) ? t('m.regions.form.nameTaken') : null,
    title: d.title.trim() ? null : t('m.regions.form.titleRequired'),
    country: /^[A-Za-z][A-Za-z_]+$/.test(d.country.trim()) ? null : t('m.regions.form.countryRule'),
    bbox: parseBbox(d.bbox) ? null : t('m.search.bboxError'),
  }
}

/** The add-region form, then the build job's progress until the region appears. */
function AddRegionSheet({ open, onClose, source }: { open: boolean; onClose: () => void; source: React.RefObject<HTMLButtonElement | null> }) {
  const { regions, reloadRegions } = useSession()
  const toast = useToast()
  const [draft, setDraft] = useState<Draft>(EMPTY)
  const [touched, setTouched] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [job, setJob] = useState<Job | null>(null)
  const errors = validate(draft, regions.map((r) => r.name))
  const invalid = Object.values(errors).some(Boolean)
  const set = (k: keyof Draft) => (v: string) => setDraft((d) => ({ ...d, [k]: v }))

  useEffect(() => {
    if (!job || job.status === 'done' || job.status === 'failed') return
    const timer = window.setTimeout(async () => {
      try {
        const next = await api.job(job.id)
        setJob(next)
        if (next.status === 'done') {
          await reloadRegions()
          toast.success(t('m.regions.built', { name: draft.title || draft.name }))
        }
      } catch (failure) {
        setError(errorMessage(failure))
        setJob({ ...job, status: 'failed' })
      }
    }, 1500)
    return () => window.clearTimeout(timer)
  }, [job, reloadRegions, toast, draft])

  const submit = async () => {
    setTouched(true)
    if (invalid || submitting) return
    setSubmitting(true)
    setError(null)
    try {
      const res = await api.addRegion({ name: draft.name, title: draft.title.trim(), country: draft.country.trim(), bbox: parseBbox(draft.bbox)! })
      const j = typeof res.job === 'string' ? ({ id: res.job, status: 'queued' } as Job) : res.job
      setJob(j)
    } catch (failure) {
      setError(errorMessage(failure))
    } finally {
      setSubmitting(false)
    }
  }
  const close = () => {
    onClose()
    if (!job || job.status === 'done' || job.status === 'failed') {
      setDraft(EMPTY)
      setJob(null)
      setTouched(false)
      setError(null)
    }
  }
  const running = job && (job.status === 'queued' || job.status === 'running')
  return (
    <Sheet
      open={open}
      onOpenChange={(next) => (next ? undefined : close())}
      label={t('m.regions.add')}
      title={t('m.regions.add')}
      detents={['large']}
      source={source}
      dock={
        <PresentationDock label={t('m.regions.add')}>
          {job?.status === 'done' ? (
            <Button asChild variant="filled">
              <Link to={`/?region=${encodeURIComponent(draft.name)}`} onClick={close}>
                {t('m.regions.openNew')}
              </Link>
            </Button>
          ) : (
            <>
              <Button variant="text" onClick={close}>
                {running ? t('m.regions.keepRunning') : t('m.common.cancel')}
              </Button>
              {running ? null : (
                <Button variant="filled" loading={submitting} disabled={submitting} onClick={() => void submit()}>
                  {t('m.regions.build')}
                </Button>
              )}
            </>
          )}
        </PresentationDock>
      }
    >
      {job ? (
        <div className="fm-stack" aria-live="polite">
          <div className="fm-job">
            {running ? <PixelLoader size={24} label={t('m.regions.building')} /> : null}
            <div>
              <strong>{t(`m.job.${job.status}`)}</strong>
              <p className="fm-note">{running ? t('m.regions.buildingHint') : job.status === 'done' ? t('m.regions.doneHint') : t('m.regions.failedHint')}</p>
            </div>
          </div>
          {job.log_tail ? (
            <pre className="fm-log" dir="ltr">
              {job.log_tail}
            </pre>
          ) : null}
          {error ? <FormError>{error}</FormError> : null}
        </div>
      ) : (
        <form
          className="fm-form"
          noValidate
          onSubmit={(e) => {
            e.preventDefault()
            void submit()
          }}
        >
          <p className="fm-note">{t('m.regions.form.intro')}</p>
          <TextField hint={t('m.regions.form.name')} value={draft.name} onValueChange={(v) => set('name')(v.toLowerCase())} dir="ltr" autoCapitalize="off" autoComplete="off" spellCheck={false} supportingText={t('m.regions.form.nameHint')} error={touched ? errors.name : null} required />
          <TextField hint={t('m.regions.form.title')} value={draft.title} onValueChange={set('title')} supportingText={t('m.regions.form.titleHint')} error={touched ? errors.title : null} required />
          <TextField hint={t('m.regions.form.country')} value={draft.country} onValueChange={set('country')} dir="ltr" autoComplete="off" supportingText={t('m.regions.form.countryHint')} error={touched ? errors.country : null} required />
          <TextField hint={t('m.regions.form.bbox')} value={draft.bbox} onValueChange={set('bbox')} dir="ltr" inputMode="decimal" supportingText={t('m.regions.form.bboxHint')} error={touched ? errors.bbox : null} required />
          {error ? <FormError>{error}</FormError> : null}
          <button type="submit" hidden aria-hidden tabIndex={-1} />
        </form>
      )}
    </Sheet>
  )
}
