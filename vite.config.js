import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,   // Changed from Vite default 5174 — won't conflict with NodeLLM app (5173) or backend (8000)
    host: true,
  },
})
