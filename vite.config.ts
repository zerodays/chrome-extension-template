import { crx } from '@crxjs/vite-plugin';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import manifest from './manifest.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslintPlugin(), react(), crx({ manifest })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
