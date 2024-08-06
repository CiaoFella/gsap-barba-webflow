import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import { resolve } from 'path';

export default defineConfig({
  base: '/', // Adjust if necessary for your deployment
  build: {
    target: 'es2015', // Ensure compatibility
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ['gsap'],
          barba: ['@barba/core'],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
});
