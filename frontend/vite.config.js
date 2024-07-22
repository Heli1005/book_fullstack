import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Port for the frontend
    host: '0.0.0.0', // Bind to all network interfaces
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Your backend server URL
        port: 5000,
      },
    },
  },
})
