import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '@components', replacement: resolve(__dirname, 'src/components') },
      { find: '@pages', replacement: resolve(__dirname, 'src/pages') },
      { find: '@constants', replacement: resolve(__dirname, 'src/constants') },
      { find: '@api', replacement: resolve(__dirname, 'src/api') },
      { find: '@assets', replacement: resolve(__dirname, 'src/assets') },
      { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
      { find: '@components/UI', replacement: resolve(__dirname, 'src/components/UI') },
      { find: '@hooks', replacement: resolve(__dirname, 'src/hooks') },
    ],
  },
})
