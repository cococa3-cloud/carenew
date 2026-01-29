
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // 브라우저에서 process.env 참조 시 오류가 나지 않도록 빈 객체 또는 실제 값을 주입합니다.
    'process.env': {
      ...process.env,
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});
