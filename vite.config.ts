import { fileURLToPath } from 'node:url'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  console.info('BaseUrl:', env.VITE_BASE_URL)
  return {
    plugins: [
      tanstackRouter({ target: 'react', autoCodeSplitting: true }),
      viteReact(),
      tailwindcss(),
      nodePolyfills({ globals: { Buffer: true } }),
    ],
    appType: 'mpa',
    base: env.VITE_BASE_URL,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
