import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  server: {
    host: '0.0.0.0', // phone se access karne ke liye
    port: 5173       // optional: custom port rakhna ho to
  }
})
