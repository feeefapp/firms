import { useContext, useRef, useState } from 'react'
import { History, SquarePen } from 'lucide-react'
import { IconButton } from '@feeef.dev/ui/primitives/button'
import { ToolbarGroup } from '@feeef.dev/ui/toolbar'
import { ScrollArea } from '@feeef.dev/ui/scroll'
import { Sheet } from '@feeef.dev/ui/containers/sheet'
import { useScaffold } from '@feeef.dev/ui/workspace/scaffold'
import { useAssistant } from '@/app/assistant'
import { useSession } from '@/app/session'
import { ConversationList } from '@/components/chat/conversations'
import { ChatBottom, ChatThread, useChatSurface } from '@/components/chat/thread'
import { ParamsBar } from '@/shell/params-bar'
import { ScreenTop, ShellAppBarContext } from '@/shell/screen-slots'
import { t } from '@/i18n/locale'

/**
 * The assistant on its own page: it owns the scroll viewport so the composer floats at the
 * bottom (kit ScrollArea) while the parameter bar stays in the app bar, where what the assistant
 * applies (region, period, view) changes in sight. Conversations are in the sidebar on wide
 * screens and in a sheet on phones.
 */
export default function AssistantPage() {
  const appBar = useContext(ShellAppBarContext)
  const surface = useChatSurface()
  const { user } = useSession()
  const { newChat, busy, messages } = useAssistant()
  const { compact } = useScaffold()
  const [history, setHistory] = useState(false)
  const historyButton = useRef<HTMLButtonElement>(null)
  return (
    <>
      <ParamsBar />
      {user ? (
        <ScreenTop>
          <ToolbarGroup label={t('m.chat.history.title')} className="fm-chat-bar">
            {compact ? (
              <IconButton ref={historyButton} variant="ghost" appearance="toolbar" aria-label={t('m.chat.history.title')} onClick={() => setHistory(true)}>
                <History />
              </IconButton>
            ) : null}
            <IconButton variant="ghost" appearance="toolbar" aria-label={t('m.chat.new')} title={t('m.chat.new')} disabled={busy || !messages.length} onClick={newChat}>
              <SquarePen />
            </IconButton>
          </ToolbarGroup>
        </ScreenTop>
      ) : null}
      <ScrollArea label={t('m.nav.assistant')} className="lab-workspace-route" top={appBar} bottom={<ChatBottom surface={surface} />}>
        <ChatThread surface={surface} />
      </ScrollArea>
      <Sheet open={history} onOpenChange={() => setHistory(false)} label={t('m.chat.history.title')} title={t('m.chat.history.title')} detents={['medium', 'large']} source={historyButton}>
        <ConversationList onOpened={() => setHistory(false)} />
      </Sheet>
    </>
  )
}
