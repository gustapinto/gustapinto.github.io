import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import postcss from './postcss.config.cjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  css: {
    postcss: postcss
  },
  server: {
    host: '0.0.0.0'
  }
})
