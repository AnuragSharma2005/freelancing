import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Automatically use correct base path for GitHub Pages
const base = process.env.NODE_ENV === 'production' ? '/freelancing/' : '/'

export default defineConfig({
  base, // 👈 This ensures correct asset linking on GitHub Pages
  plugins: [react()],
})
