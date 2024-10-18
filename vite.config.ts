import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
// @ts-expect-error
import { fileURLToPath } from 'node:url'
import Layouts from 'vite-plugin-vue-layouts';
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Layouts(),
    Pages(),
    Components({
      dirs: ['src/components'],
      dts: true,
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      vueTemplate: true,
    }),
  ],
  // @ts-expect-error
  define: { 'process.env': { ...process.env, ...loadEnv("dev", process.cwd()) } },
  build: {
    chunkSizeWarningLimit: 5000,
    target: 'esnext'
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
    }
  },
  optimizeDeps: {
    entries: ['./src/**/*.vue'],
    esbuildOptions: {
      target: 'esnext'
    }
  },
})
