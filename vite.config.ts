import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://starmotmotor.com.br', // coloque o seu domínio
      dynamicRoutes: [
        '/',       // rota Home
        '/sobre'   // rota Sobre
      ],
      generateRobotsTxt: true
    })
  ],
})
