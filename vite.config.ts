import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 4000
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@constants': '/src/constants',
      '@contexts': '/src/contexts',
      '@pages': '/src/pages',
      '@styles': '/src/styles'
    }
  }
})
