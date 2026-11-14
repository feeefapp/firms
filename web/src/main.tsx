import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { dir, locale, stripLocaleParam } from './i18n/locale'
import { App } from './app/app'
import './styles/base.css'

document.documentElement.lang = locale
document.documentElement.dir = dir
stripLocaleParam()

const root = document.getElementById('root')
if (!root) throw new Error('Root element not found')

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
