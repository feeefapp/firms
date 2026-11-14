import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import './toast.css'

/** Brief confirmations ("Saved"). Anything to act on stays in the page. */
type Toast = { id: number; message: string; tone: 'success' | 'danger' }
type ToastApi = { success: (message: string) => void; error: (message: string) => void }

const ToastContext = createContext<ToastApi>({ success: () => {}, error: () => {} })

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const next = useRef(0)
  const push = useCallback((message: string, tone: Toast['tone']) => {
    const id = ++next.current
    setToasts((list) => [...list.slice(-2), { id, message, tone }])
    window.setTimeout(() => setToasts((list) => list.filter((toast) => toast.id !== id)), tone === 'danger' ? 6000 : 3200)
  }, [])
  const api = useMemo<ToastApi>(() => ({ success: (m) => push(m, 'success'), error: (m) => push(m, 'danger') }), [push])
  return (
    <ToastContext.Provider value={api}>
      {children}
      <div className="fm-toasts" role="status" aria-live="polite">
        {toasts.map((toast) => (
          <div key={toast.id} className="fm-toast" data-tone={toast.tone}>
            {toast.tone === 'success' ? <CheckCircle2 size={16} aria-hidden /> : <AlertCircle size={16} aria-hidden />}
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast(): ToastApi {
  return useContext(ToastContext)
}
