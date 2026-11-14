import { Chat } from '@/components/chat/chat'
import { PageHeader } from '@/components/ui/data'
import { ParamsBar } from '@/shell/params-bar'
import { t } from '@/i18n/locale'

/**
 * The assistant on its own page. The parameter bar stays in view so what the assistant applies
 * (region, period, view) changes where the person can see it.
 */
export default function AssistantPage() {
  return (
    <>
      <ParamsBar />
      <PageHeader title={t('m.nav.assistant')} description={t('m.chat.pageHint')} />
      <div className="fm-chat-page">
        <Chat />
      </div>
    </>
  )
}
