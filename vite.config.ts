import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base = subruta del sitio en GitHub Pages (https://<user>.github.io/consultora-it/)
export default defineConfig({
  base: '/consultora-it/',
  plugins: [react(), tailwindcss()],
})
