import { useRef, useState } from 'react'
import { KeyRound, LogIn, Plus, Trash2 } from 'lucide-react'
import { Button, IconButton } from '@feeef.dev/ui/primitives/button'
import { TextField } from '@feeef.dev/ui/primitives/text-field'
import { SegmentedControl } from '@feeef.dev/ui/primitives/segmented'
import { Modal } from '@feeef.dev/ui/presentation/modal'
import { PresentationDock } from '@feeef.dev/ui/presentation/dock'
import { useSession } from '@/app/session'
import { CopyBlock, EmptyState, ErrorState, FormError, LoadingState, Notice, PageHeader, Panel, PanelHeader, Table, Td, Th } from '@/components/ui/data'
import { useConfirm } from '@/components/ui/overlays'
import { useToast } from '@/components/ui/toast'
import { api } from '@/lib/api'
import { errorMessage } from '@/lib/errors'
import { formatDateTime } from '@/lib/format'
import { useRemote } from '@/lib/use-remote'
import { ScreenDock, ScreenTitle } from '@/shell/screen-slots'
import { t } from '@/i18n/locale'

type Example = 'curl' | 'claude' | 'cursor' | 'rest'

/** MCP and the API for developers: the endpoint, personal keys and copyable examples. */
export default function DevelopersPage() {
  const { user, signIn } = useSession()
  const origin = window.location.origin
  const mcpUrl = `${origin}/mcp`
  const keys = useRemote(user ? `keys:${user.id}` : null, () => api.keys())
  const confirm = useConfirm()
  const toast = useToast()
  const [creating, setCreating] = useState(false)
  const createButton = useRef<HTMLButtonElement>(null)
  const [example, setExample] = useState<Example>('curl')
  const token = 'firms_…'

  const examples: Record<Example, string> = {
    curl: `curl -s ${mcpUrl} \\
  -H "Authorization: Bearer ${token}" \\
  -H "Content-Type: application/json" \\
  -H "Accept: application/json, text/event-stream" \\
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"get_calendar","arguments":{"region":"punjab","from":"2025-01","to":"2025-12"}}}'`,
    claude: JSON.stringify({ mcpServers: { firms: { type: 'http', url: mcpUrl, headers: { Authorization: `Bearer ${token}` } } } }, null, 2),
    cursor: JSON.stringify({ mcpServers: { firms: { url: mcpUrl, headers: { Authorization: `Bearer ${token}` } } } }, null, 2),
    rest: `curl -s "${origin}/api/calendar?region=punjab&from=2025-01&to=2025-12&algorithm=ensemble_adaptive"`,
  }

  return (
    <>
      <ScreenTitle title={t('m.nav.developers')} />
      <PageHeader title={t('m.dev.title')} description={t('m.dev.hint')} />
      <Panel>
        <PanelHeader title={t('m.dev.mcp')} description={t('m.dev.mcpHint')} />
        <div className="fm-pad fm-stack">
          <CopyBlock value={mcpUrl} label={t('m.dev.mcp')} />
          <p className="fm-note">{t('m.dev.tools')}</p>
          <p className="fm-note" dir="ltr">
            list_regions · get_calendar · compare_algorithms · get_benchmark · search_hotspots · live_convert · build_region · job_status · explain_method
          </p>
        </div>
      </Panel>

      <Panel>
        <PanelHeader title={t('m.dev.keys')} description={t('m.dev.keysHint')} />
        {user === null ? (
          <EmptyState
            icon={<KeyRound size={20} />}
            title={t('m.dev.signedOut')}
            description={t('m.dev.signedOutBody')}
            action={
              <Button variant="tonal" onClick={() => signIn()}>
                <LogIn aria-hidden className="lab-dir-flip" />
                {t('m.login.action')}
              </Button>
            }
          />
        ) : keys.error && !keys.data ? (
          <ErrorState title={t('m.dev.keysFailed')} message={errorMessage(keys.error)} onRetry={keys.reload} />
        ) : !keys.data ? (
          <LoadingState label={t('m.dev.keysLoading')} />
        ) : !keys.data.length ? (
          <EmptyState icon={<KeyRound size={20} />} title={t('m.dev.noKeys')} description={t('m.dev.noKeysBody')} />
        ) : (
          <Table label={t('m.dev.keys')}>
            <thead>
              <tr>
                <Th>{t('m.dev.col.name')}</Th>
                <Th className="fm-wide-only">{t('m.dev.col.prefix')}</Th>
                <Th>{t('m.dev.col.created')}</Th>
                <Th className="fm-wide-only">{t('m.dev.col.used')}</Th>
                <Th />
              </tr>
            </thead>
            <tbody>
              {keys.data.map((k) => (
                <tr key={k.id}>
                  <Td>
                    <bdi>{k.name}</bdi>
                  </Td>
                  <Td className="fm-wide-only">
                    <span dir="ltr" className="fm-mono-small">
                      {k.prefix ? `${k.prefix}…` : '–'}
                    </span>
                  </Td>
                  <Td>{formatDateTime(k.created_at)}</Td>
                  <Td className="fm-wide-only">{k.last_used_at ? formatDateTime(k.last_used_at) : t('m.dev.never')}</Td>
                  <Td>
                    <IconButton
                      variant="text"
                      aria-label={t('m.dev.delete', { name: k.name })}
                      onClick={() =>
                        confirm({
                          title: t('m.dev.deleteTitle', { name: k.name }),
                          message: t('m.dev.deleteBody'),
                          confirmLabel: t('m.dev.deleteAction'),
                          destructive: true,
                          action: async () => {
                            await api.deleteKey(k.id)
                            keys.reload()
                            toast.success(t('m.dev.deleted'))
                          },
                        })
                      }
                    >
                      <Trash2 />
                    </IconButton>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Panel>

      <Panel>
        <PanelHeader title={t('m.dev.examples')} description={t('m.dev.examplesHint')} />
        <div className="fm-pad fm-stack">
          <SegmentedControl<Example>
            label={t('m.dev.examples')}
            className="fm-segmented-box"
            value={example}
            onChange={setExample}
            overflow="scroll"
            options={[
              { value: 'curl', label: t('m.dev.ex.curl') },
              { value: 'claude', label: 'Claude' },
              { value: 'cursor', label: 'Cursor' },
              { value: 'rest', label: t('m.dev.ex.rest') },
            ]}
          />
          <CopyBlock block value={examples[example]} label={t('m.dev.examples')} />
          <p className="fm-note">{t(`m.dev.exHint.${example}`)}</p>
        </div>
      </Panel>

      <ScreenDock>
        {user ? (
          <Button ref={createButton} variant="filled" onClick={() => setCreating(true)}>
            <Plus aria-hidden />
            <span className="lab-control-label">{t('m.dev.create')}</span>
          </Button>
        ) : null}
      </ScreenDock>
      <CreateKeyModal open={creating} onClose={() => setCreating(false)} onCreated={keys.reload} />
    </>
  )
}

function CreateKeyModal({ open, onClose, onCreated }: { open: boolean; onClose: () => void; onCreated: () => void }) {
  const [name, setName] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [secret, setSecret] = useState<string | null>(null)
  const close = () => {
    onClose()
    window.setTimeout(() => {
      setName('')
      setSecret(null)
      setError(null)
    }, 300)
  }
  const create = async () => {
    if (!name.trim() || busy) return
    setBusy(true)
    setError(null)
    try {
      const res = await api.createKey(name.trim())
      setSecret(res.secret ?? res.token ?? null)
      onCreated()
    } catch (failure) {
      setError(errorMessage(failure))
    } finally {
      setBusy(false)
    }
  }
  return (
    <Modal
      open={open}
      onOpenChange={(next) => (next || busy ? undefined : close())}
      label={t('m.dev.create')}
      title={secret ? t('m.dev.createdTitle') : t('m.dev.create')}
      dock={
        <PresentationDock label={t('m.dev.create')}>
          {secret ? (
            <Button variant="filled" onClick={close}>
              {t('m.dev.copiedDone')}
            </Button>
          ) : (
            <>
              <Button variant="text" onClick={close} disabled={busy}>
                {t('m.common.cancel')}
              </Button>
              <Button variant="filled" loading={busy} disabled={busy || !name.trim()} onClick={() => void create()}>
                {t('m.dev.createAction')}
              </Button>
            </>
          )}
        </PresentationDock>
      }
    >
      {secret ? (
        <div className="fm-stack">
          <Notice tone="warning" icon={<KeyRound size={18} />}>
            {t('m.dev.secretOnce')}
          </Notice>
          <CopyBlock value={secret} label={t('m.dev.secret')} />
        </div>
      ) : (
        <form
          className="fm-form"
          onSubmit={(e) => {
            e.preventDefault()
            void create()
          }}
        >
          <TextField hint={t('m.dev.keyName')} value={name} onValueChange={setName} supportingText={t('m.dev.keyNameHint')} autoComplete="off" required maxLength={60} />
          {error ? <FormError>{error}</FormError> : null}
          <button type="submit" hidden aria-hidden tabIndex={-1} />
        </form>
      )}
    </Modal>
  )
}
