import { MessageSquare, RotateCw, Trash2 } from 'lucide-react'
import { Button, IconButton } from '@feeef.dev/ui/primitives/button'
import { SquareSlot } from '@feeef.dev/ui/primitives/square-slot'
import { PixelLoader } from '@feeef.dev/ui/pixel-art'
import { useAssistant } from '@/app/assistant'
import { useConfirm } from '@/components/ui/overlays'
import { formatDateTime } from '@/lib/format'
import { t } from '@/i18n/locale'
import '@feeef.dev/ui/navigation/navigation-item.css'

/**
 * Saved conversations (`/api/agent/conversations`), newest first: open one, delete one (confirmed).
 * Lives in the sidebar on wide screens and in a Sheet on phones (Lab's history list).
 */
export function ConversationList({ onOpened }: { onOpened?: () => void }) {
  const { conversations, listState, activeId, busy, open, remove, reloadList } = useAssistant()
  const confirm = useConfirm()
  return (
    <div className="fm-history">
      {listState === 'loading' && !conversations.length ? (
        <p className="fm-history-note" role="status">
          <PixelLoader size={16} decorative />
          {t('m.chat.history.loading')}
        </p>
      ) : null}
      {listState === 'error' ? (
        <p className="fm-history-note">
          {t('m.chat.history.failed')}
          <Button variant="text" controlSize="small" onClick={() => void reloadList()}>
            <RotateCw size={14} aria-hidden />
            {t('m.common.tryAgain')}
          </Button>
        </p>
      ) : null}
      {listState === 'ready' && !conversations.length ? <p className="fm-history-note">{t('m.chat.history.empty')}</p> : null}
      {conversations.length ? (
        <ul aria-label={t('m.chat.history.title')}>
          {conversations.map((c) => {
            const title = c.title || t('m.chat.history.untitled')
            return (
              <li key={c.id} data-active={c.id === activeId || undefined}>
                <Button
                  variant="ghost"
                  appearance="toolbar"
                  className="lab-navigation-item fm-history-open"
                  aria-current={c.id === activeId ? 'true' : undefined}
                  disabled={busy && c.id !== activeId}
                  onClick={() => {
                    void open(c.id)
                    onOpened?.()
                  }}
                  title={c.updatedAt ? formatDateTime(c.updatedAt) : undefined}
                >
                  <SquareSlot aria-hidden="true">
                    <MessageSquare />
                  </SquareSlot>
                  <span className="lab-control-label" dir="auto">
                    {title}
                  </span>
                </Button>
                <IconButton
                  variant="ghost"
                  appearance="toolbar"
                  className="fm-history-delete"
                  aria-label={t('m.chat.history.delete', { title })}
                  disabled={busy && c.id === activeId}
                  onClick={() =>
                    confirm({
                      title: t('m.chat.history.deleteTitle', { title }),
                      message: t('m.chat.history.deleteBody'),
                      confirmLabel: t('m.chat.history.deleteAction'),
                      destructive: true,
                      action: () => remove(c.id),
                    })
                  }
                >
                  <Trash2 />
                </IconButton>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
