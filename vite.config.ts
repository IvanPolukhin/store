import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    react(),
    svgr(),
    ViteImageOptimizer({
      png: {
        quality: 90,
        compressionLevel: 3,
      },
      jpeg: {
        quality: 90,
      },
      jpg: {
        quality: 90,
      },
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  css: {
    postcss: './postcss.config.cjs',
  },
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react'
            if (id.includes('tronweb') || id.includes('tron')) return 'tron'
          }
        },
      },
    },
  },
})
