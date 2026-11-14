import { useState } from 'react'
import { CloudOff, LogIn } from 'lucide-react'
import { Button } from '@feeef.dev/ui/primitives/button'
import { SegmentedControl } from '@feeef.dev/ui/primitives/segmented'
import { PromptComposer } from '@feeef.dev/ui/composer/composer'
import { ModelLadder, type LadderStop } from '@feeef.dev/ui/model-ladder'
import { useAssistant, type Effort } from '@/app/assistant'
import { useSession } from '@/app/session'
import { t } from '@/i18n/locale'

/** Why AI is off, as the next step the person can take (DESIGN 8). */
function offlineHint(reason: string | null): { text: string; signIn: boolean } {
  const r = (reason ?? '').toLowerCase()
  if (/scope|ai\.read|ai\.generate|consent|token|sign|auth|401|403/.test(r)) return { text: t('m.chat.offline.scope'), signIn: true }
  if (/disabled|not.?enabled|unavailable|404|not.?found|beta|environment/.test(r)) return { text: t('m.chat.offline.disabled'), signIn: false }
  return { text: t('m.chat.offline.generic'), signIn: true }
}

/**
 * The prompt composer (kit `PromptComposer`): Enter sends, Shift+Enter breaks the line, send
 * becomes Stop while a reply streams. The model ladder (`/api/ai/catalog`) sits on its tools row,
 * with the reasoning effort under the model when that model reasons. Offline (no AI) it says why.
 */
export function ChatComposer({ prompt, setPrompt, compact = false }: { prompt: string; setPrompt: (value: string) => void; compact?: boolean }) {
  const { signIn } = useSession()
  const { busy, send, stop, catalog, model, setModel, effort, setEffort } = useAssistant()
  const [dismissed, setDismissed] = useState(false)
  const stops = catalog?.aiAvailable ? catalog.stops : []
  const list: LadderStop[] = catalog?.aiAvailable ? catalog.models.map((m) => catalog.stops.find((s) => s.modelId === m.id) ?? { modelId: m.id, label: m.name, modelName: m.name }) : []
  const index = stops.findIndex((s) => s.modelId === model)
  const reasons = Boolean(model && catalog?.models.find((m) => m.id === model)?.reasoning)
  const offline = catalog && !catalog.aiAvailable ? offlineHint(catalog.reason) : null

  const submit = () => {
    const text = prompt.trim()
    if (!text || busy) return
    setPrompt('')
    void send(text)
  }

  return (
    <PromptComposer
      className="fm-composer"
      label={t('m.chat.label')}
      placeholder={t('m.chat.placeholder')}
      value={prompt}
      onValueChange={setPrompt}
      onSubmit={submit}
      busy={busy}
      onStop={stop}
      submitLabel={t('m.chat.send')}
      stopLabel={t('m.chat.stop')}
      maxLength={4000}
      maxLines={compact ? 4 : 6}
      above={
        offline && !dismissed ? (
          <div className="fm-offline" role="note">
            <CloudOff size={16} aria-hidden />
            <p>
              <strong>{t('m.chat.offline.title')}</strong> {offline.text}
            </p>
            {offline.signIn ? (
              <Button variant="text" controlSize="small" onClick={() => signIn()}>
                <LogIn size={16} aria-hidden className="lab-dir-flip" />
                {t('m.chat.offline.signIn')}
              </Button>
            ) : (
              <Button variant="text" controlSize="small" onClick={() => setDismissed(true)}>
                {t('m.chat.offline.ok')}
              </Button>
            )}
          </div>
        ) : undefined
      }
      tools={
        stops.length ? (
          <ModelLadder
            variant="compact"
            side="top"
            align="start"
            stops={stops}
            catalog={list.length ? list : undefined}
            index={index >= 0 ? index : (catalog?.defaultIndex ?? 0)}
            defaultIndex={catalog?.defaultIndex ?? 0}
            selectedModel={index >= 0 ? undefined : list.find((s) => s.modelId === model)}
            enabled={!busy}
            onChange={(i) => stops[i] && setModel(stops[i].modelId)}
            onPickModel={setModel}
            belowModel={
              reasons ? (
                <div className="fm-effort">
                  <small>{t('m.chat.effort.label')}</small>
                  <SegmentedControl<Effort>
                    label={t('m.chat.effort.label')}
                    className="fm-segmented-box"
                    value={effort}
                    onChange={setEffort}
                    equalWidth
                    options={[
                      { value: 'low', label: t('m.chat.effort.low') },
                      { value: 'medium', label: t('m.chat.effort.medium') },
                      { value: 'high', label: t('m.chat.effort.high') },
                    ]}
                  />
                </div>
              ) : undefined
            }
          />
        ) : undefined
      }
      footer={<p className="fm-composer-footer">{offline ? t('m.chat.footerOffline') : t('m.chat.footer')}</p>}
    />
  )
}
