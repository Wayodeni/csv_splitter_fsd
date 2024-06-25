import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
  plugins: [
    react(),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    proxy: {
      [env.VITE_API_URL]: {
        changeOrigin: true,
        secure: false,
        target: env.SERVER_ORIGIN,
      },
    },
  },
}
})
