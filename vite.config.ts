import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cd-MedQCM-Pro/', // Assure que les chemins sont relatifs pour GitHub Pages
  build: {
    outDir: 'dist',
  }
})