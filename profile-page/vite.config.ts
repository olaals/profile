import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'



// https://vitejs.dev/config/
export default defineConfig({
  base: "/profile/",
  build: {
    outDir: 'build'
  },
  plugins: [react(), mdx()]
})
