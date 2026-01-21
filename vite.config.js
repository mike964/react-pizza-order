import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Fast Pizza',
        short_name: 'FastPizza',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: 'pizza-logo-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pizza-logo-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }) 
  ],
   base: '/react-pizza-order/', // Replace 'your-repo-name'
})
