import { defineConfig, loadEnv, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

/**
 * Dev: the Rust server (firms/server) listens on :8787 and the dev server proxies its routes, so
 * the browser stays same-origin (session cookie, CSRF Origin check). `FIRMS_MOCK=1 npm run dev`
 * swaps the proxy for a dev-only mock built from `../data` (mock/dev-api.ts); it is never bundled.
 */
export default defineConfig(async ({ mode, command }) => {
  const env = { ...loadEnv(mode, process.cwd(), ''), ...process.env }
  const mock = command === 'serve' && env.FIRMS_MOCK === '1'
  const target = env.FIRMS_API ?? 'http://localhost:8787'
  const plugins: PluginOption[] = [react()]
  if (mock) {
    const { firmsMock } = await import('./mock/dev-api')
    plugins.push(firmsMock(path.resolve(__dirname, '../data')))
  }
  const proxied = { target, changeOrigin: false, ws: false }
  return {
    plugins,
    resolve: { alias: { '@': path.resolve(__dirname, './src') } },
    server: {
      port: 5190,
      proxy: mock ? undefined : { '/api': proxied, '/auth': proxied, '/oauth': proxied, '/.well-known': proxied, '/mcp': proxied, '/healthz': proxied },
    },
    build: {
      chunkSizeWarningLimit: 900,
    },
  }
})
