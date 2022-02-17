import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    assetsDir: 'assets',
    lib: {
      entry: path.resolve(__dirname, 'src/index.lib.ts'),
      name: 'pinia-component'
    },
    outDir: "dist",
    rollupOptions: {
      external: ['vue'],
      output: {
        dir: "dist",
        globals: {
          vue: 'Vue'
        }
      }
    }
  }

})
