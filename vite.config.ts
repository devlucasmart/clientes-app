import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Permite que qualquer IP acesse o servidor
    port: 5173,  // ou qualquer porta que você queira usar
  },
})
