import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative assets make this work both locally and on GitHub Pages project URLs.
   base: '/MyPortfolio/',
  plugins: [react(), tailwindcss()],
})