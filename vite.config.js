import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    outDir: 'build',
    sourcemap: false,
    minify: true,
  },
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
  },
})
