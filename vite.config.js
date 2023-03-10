import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: 'http://isclab.com.mx/personasuxd/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/get": {
        target: 'https://isclab.com.mx/personasuxd/getPersonasUxd.php/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/get/, ""),
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base:'./',
})
