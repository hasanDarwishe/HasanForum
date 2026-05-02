import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const env: NodeJS.ProcessEnv = loadEnv(mode, path.join(process.cwd(), ".."), "")

  return {
    plugins: [react()],
    server: {
      port: Number(env.VITE_PORT) || 5187,
      proxy: {
        "/api": {
          target: `http://localhost:${env.BACKEND_PORT}`,
          changeOrigin: true
        }
      }
    }
  }
})
