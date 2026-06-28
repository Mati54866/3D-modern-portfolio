import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Raise chunk size warning limit (three.js is large by nature)
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        // Manual chunk splitting to improve caching & parallel loading
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'animation-vendor': ['framer-motion'],
          'ui-vendor': ['react-tilt', 'react-vertical-timeline-component'],
        },
      },
    },
    // Enable source map in production for easier debugging (optional, remove if not needed)
    sourcemap: false,
    // Minify with esbuild (default, fastest)
    minify: 'esbuild',
    // Target modern browsers for smaller output
    target: 'es2020',
  },
  // Optimize deps for faster dev cold starts
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'framer-motion',
    ],
  },
})
