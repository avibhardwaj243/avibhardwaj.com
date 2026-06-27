import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { GA_MEASUREMENT_ID } from './src/constants/config.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inject-ga-id',
      transformIndexHtml(html) {
        return html.replaceAll('__GA_MEASUREMENT_ID__', GA_MEASUREMENT_ID);
      },
    },
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8001,
    host: '0.0.0.0',
    allowedHosts: true,
  },
  preview: {
    port: 8001,
    host: '0.0.0.0',
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
