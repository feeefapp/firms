import { useRef, useState } from 'react'
import { AppWindow, KeyRound, LogIn, Plug, Plus, Trash2, Unplug } from 'lucide-react'
import { Button, IconButton } from '@feeef.dev/ui/primitives/button'
import { TextField } from '@feeef.dev/ui/primitives/text-field'
import { SegmentedControl } from '@feeef.dev/ui/primitives/segmented'
import { Modal } from '@feeef.dev/ui/presentation/modal'
import { PresentationDock } from '@feeef.dev/ui/presentation/dock'
import { useSession } from '@/app/session'
import { CopyBlock, EmptyState, ErrorState, FormError, LoadingState, Notice, PageHeader, Panel, PanelHeader, Table, Td, Th } from '@/components/ui/data'
import { useConfirm } from '@/components/ui/overlays'
import { useToast } from '@/components/ui/toast'
import { mcpApi } from '@/components/chat/api'
import { api } from '@/lib/api'
import { errorMessage } from '@/lib/errors'
import { formatDateTime } from '@/lib/format'
import { useRemote } from '@/lib/use-remote'
import { ScreenDock, ScreenTitle } from '@/shell/screen-slots'
import { t } from '@/i18n/locale'

type Example = 'curl' | 'headers' | 'rest'
type Client = 'claude' | 'chatgpt' | 'cursor' | 'claudeCode'

/**
 * MCP and the API for developers: connect an AI app with the MCP URL (OAuth: sign in with feeef
 * and approve, no key), the apps connected that way (revocable), personal keys for scripts and
 * copyable examples.
 */
export default function DevelopersPage() {
  const { user, signIn } = useSession()
  const origin = window.location.origin
  const mcpUrl = `${origin}/mcp`
  const keys = useRemote(user ? `keys:${user.id}` : null, () => api.keys())
  const confirm = useConfirm()
  const toast = useToast()
  const [creating, setCreating] = useState(false)
  const createButton = useRef<HTMLButtonElement>(null)
  const grants = useRemote(user ? `grants:${user.id}` : null, () => mcpApi.grants())
  const [example, setExample] = useState<Example>('curl')
  const [client, setClient] = useState<Client>('claude')
  const token = 'firms_…'

  const examples: Record<Example, string> = {
    curl: `curl -s ${mcpUrl} \\
  -H "Authorization: Bearer ${token}" \\
  -H "Content-Type: application/json" \\
  -H "Accept: application/json, text/event-stream" \\
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"get_calendar","arguments":{"region":"punjab","from":"2025-01","to":"2025-12"}}}'`,
    headers: JSON.stringify({ mcpServers: { firms: { type: 'http', url: mcpUrl, headers: { Authorization: `Bearer ${token}` } } } }, null, 2),
    rest: `curl -s "${origin}/api/calendar?region=punjab&from=2025-01&to=2025-12&algorithm=ensemble_adaptive"`,
  }
  // OAuth clients: the URL is all they need; they open feeef sign-in and the consent page.
  const configs: Record<Client, string | null> = {
    claude: null,
    chatgpt: null,
    cursor: JSON.stringify({ mcpServers: { firms: { url: mcpUrl } } }, null, 2),
    claudeCode: `claude mcp add --transport http firms ${mcpUrl}`,
  }
  const steps = [1, 2, 3].map((n) => t(`m.dev.connect.${client}.${n}`))

  return (
    <>
      <ScreenTitle title={t('m.nav.developers')} />
      <PageHeader title={t('m.dev.title')} description={t('m.dev.hint')} />
      <Panel>
        <PanelHeader title={t('m.dev.connect.title')} description={t('m.dev.connect.hint')} />
        <div className="fm-pad fm-stack">
          <CopyBlock value={mcpUrl} label={t('m.dev.mcp')} />
          <SegmentedControl<Client>
            label={t('m.dev.connect.client')}
            className="fm-segmented-box"
            value={client}
            onChange={setClient}
            overflow="scroll"
            options={[
              { value: 'claude', label: 'Claude' },
              { value: 'chatgpt', label: 'ChatGPT' },
              { value: 'cursor', label: 'Cursor' },
              { value: 'claudeCode', label: 'Claude Code' },
            ]}
          />
          <ol className="fm-steps">
            {steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          {configs[client] ? <CopyBlock block value={configs[client]!} label={t('m.dev.connect.config')} /> : null}
          {client === 'claudeCode' ? <CopyBlock block value={JSON.stringify({ mcpServers: { firms: { type: 'http', url: mcpUrl } } }, null, 2)} label={t('m.dev.connect.config')} /> : null}
          <Notice tone="info" icon={<Plug size={18} />}>
            {t('m.dev.connect.oauth')}
          </Notice>
          <details className="fm-details">
            <summary>{t('m.dev.tools')}</summary>
            <p className="fm-note" dir="ltr">
              find_region · list_regions · get_region · get_calendar · get_anomalies · get_trend · seasonal_profile · rank_regions · compare_algorithms · get_benchmark · search_hotspots ·
              hotspot_stats · live_convert · export_calendar_csv · explain_method · build_region · job_status
            </p>
          </details>
        </div>
      </Panel>

      <Panel>
        <PanelHeader title={t('m.dev.apps.title')} description={t('m.dev.apps.hint')} />
        {user === null ? (
          <EmptyState icon={<AppWindow size={20} />} title={t('m.dev.apps.signedOut')} description={t('m.dev.signedOutBody')} />
        ) : grants.error && !grants.data ? (
          <ErrorState title={t('m.dev.apps.failed')} message={errorMessage(grants.error)} onRetry={grants.reload} />
        ) : !grants.data ? (
          <LoadingState label={t('m.dev.apps.loading')} />
        ) : !grants.data.length ? (
          <EmptyState icon={<AppWindow size={20} />} title={t('m.dev.apps.empty')} description={t('m.dev.apps.emptyBody')} />
        ) : (
          <Table label={t('m.dev.apps.title')}>
            <thead>
              <tr>
                <Th>{t('m.dev.apps.col.app')}</Th>
                <Th className="fm-wide-only">{t('m.dev.apps.col.connected')}</Th>
                <Th className="fm-wide-only">{t('m.dev.col.used')}</Th>
                <Th />
              </tr>
            </thead>
            <tbody>
              {grants.data.map((g) => (
                <tr key={g.clientId}>
                  <Td>
                    <span className="fm-app-cell">
                      {g.logoUri ? <img src={g.logoUri} alt="" width={20} height={20} /> : <AppWindow size={18} aria-hidden />}
                      <span>
                        <bdi>{g.name}</bdi>
                        {g.redirectHost ? (
                          <small dir="ltr" className="fm-mono-small">
                            {g.redirectHost}
                          </small>
                        ) : null}
                      </span>
                    </span>
                  </Td>
                  <Td className="fm-wide-only">{formatDateTime(g.createdAt)}</Td>
                  <Td className="fm-wide-only">{g.lastUsedAt ? formatDateTime(g.lastUsedAt) : t('m.dev.never')}</Td>
                  <Td>
                    <Button
                      variant="text"
                      controlSize="small"
                      aria-label={t('m.dev.apps.revokeWhat', { name: g.name })}
                      onClick={() =>
                        confirm({
                          title: t('m.dev.apps.revokeTitle', { name: g.name }),
                          message: t('m.dev.apps.revokeBody'),
                          confirmLabel: t('m.dev.apps.revoke'),
                          destructive: true,
                          action: async () => {
                            await mcpApi.revoke(g.clientId)
                            grants.reload()
                            toast.success(t('m.dev.apps.revoked'))
                          },
                        })
                      }
                    >
                      <Unplug aria-hidden />
                      {t('m.dev.apps.revoke')}
                    </Button>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
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
              { value: 'headers', label: t('m.dev.ex.headers') },
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
