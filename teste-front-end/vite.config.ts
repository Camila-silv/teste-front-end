import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/api': {
        target: 'https://app.econverse.com.br',
        changeOrigin: true,
        rewrite: path =>
          path.replace(
            /^\/api/,
            '/teste-front-end/junior/tecnologia/lista-produtos'
          ),
      },
    },
  },
});
