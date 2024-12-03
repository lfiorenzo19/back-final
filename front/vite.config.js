import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000 // Puedes usar el puerto 3000 para el desarrollo local
  },
  build: {
    outDir: 'dist', // Asegúrate de que el directorio de salida sea 'dist'
  },
  plugins: [react()],
});