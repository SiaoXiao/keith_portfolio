import { defineConfig } from 'vite'
import path from "path";
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
     resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  server: {
    open: true,
  },
  plugins: [vue(), tailwindcss()],
})
