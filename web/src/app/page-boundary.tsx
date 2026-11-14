import { Component, type ReactNode } from 'react'
import { ErrorState } from '@/components/ui/data'
import { t } from '@/i18n/locale'

/** A crashed page shows what happened and a way back, instead of a blank screen. */
export class PageBoundary extends Component<{ children: ReactNode; resetKey: string }, { error: Error | null }> {
  state = { error: null as Error | null }
  static getDerivedStateFromError(error: Error) {
    return { error }
  }
  componentDidUpdate(prev: { resetKey: string }) {
    if (prev.resetKey !== this.props.resetKey && this.state.error) this.setState({ error: null })
  }
  render() {
    if (this.state.error)
      return <ErrorState title={t('m.error.pageTitle')} message={this.state.error.message} onRetry={() => this.setState({ error: null })} />
    return this.props.children
  }
}
