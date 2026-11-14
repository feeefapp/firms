import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react'
import { Alert } from '@feeef.dev/ui/presentation/alert'
import { errorMessage } from '@/lib/errors'
import { t } from '@/i18n/locale'
import { FormError } from './data'

type ConfirmRequest = {
  title: string
  message?: ReactNode
  confirmLabel: string
  destructive?: boolean
  /** Runs on confirm; a thrown error keeps the alert open and shows under the message. */
  action: () => Promise<unknown> | unknown
}

const ConfirmContext = createContext<(request: ConfirmRequest) => void>(() => {})

/** One kit Alert for the app's decisions ("Delete key?"). */
export function ConfirmProvider({ children }: { children: ReactNode }) {
  const [request, setRequest] = useState<ConfirmRequest | null>(null)
  const [open, setOpen] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const running = useRef(false)

  const confirm = useCallback((next: ConfirmRequest) => {
    if (running.current) return
    setRequest(next)
    setError(null)
    setOpen(true)
  }, [])

  const run = () => {
    if (!request || running.current) return false
    running.current = true
    setBusy(true)
    setError(null)
    void Promise.resolve()
      .then(() => request.action())
      .then(
        () => setOpen(false),
        (failure: unknown) => setError(errorMessage(failure)),
      )
      .finally(() => {
        running.current = false
        setBusy(false)
      })
    return false
  }

  return (
    <ConfirmContext.Provider value={confirm}>
      {children}
      <Alert
        open={open}
        onOpenChange={(next) => {
          if (!next && !running.current) setOpen(false)
        }}
        title={request?.title ?? ''}
        message={
          <>
            {request?.message}
            {error ? <FormError>{error}</FormError> : null}
          </>
        }
        actions={[
          { label: t('m.common.cancel'), role: 'cancel', disabled: busy },
          {
            label: busy ? t('m.common.working') : (request?.confirmLabel ?? t('m.common.confirm')),
            role: request?.destructive ? 'destructive' : 'primary',
            disabled: busy,
            onAction: run,
          },
        ]}
      />
    </ConfirmContext.Provider>
  )
}

export function useConfirm() {
  return useContext(ConfirmContext)
}
