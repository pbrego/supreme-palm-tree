import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      fastRefresh: process.env.NODE_ENV !== 'test',
    }),
  ],
  optimizeDeps: {
    include: ['@supreme-palm-tree/lib-react-query', '@supreme-palm-tree/lib-web-common-ui'],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
