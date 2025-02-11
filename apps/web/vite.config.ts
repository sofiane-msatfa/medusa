import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  preview: {
    port: 5000,
    host: true
  },
  server: {
    port: 5173,
    host: true
  }
})
