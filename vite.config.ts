import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: '/src/components'
      },
      {
        find: '@styles',
        replacement: '/src/styles'
      },
      {
        find: '@constants',
        replacement: '/src/constants'
      },
      {
        find: '@contexts',
        replacement: '/src/contexts'
      }
    ]
    // '@components': '/src/components',
    // '@layout': '/src/layout',
    // '@ui': '/src/ui',
    // '@pages': '/src/pages',
    // '@assets': '/src/assets',
    // '@styles': '/src/styles',
    // '@db': '/src/db',
    // '@hooks': '/src/hooks',
    // '@fonts': '/src/fonts',
    // '@utils': '/src/utils',
    // '@widgets': '/src/widgets',
    // '@contexts': '/src/contexts',
    // '@constants': '/src/constants'
  }
})
