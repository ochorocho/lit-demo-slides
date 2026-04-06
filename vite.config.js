import { defineConfig } from 'vite';

export default defineConfig({
  base: '/lit-demo-slides/',
  // Serve src/ files as static assets so data-markdown can fetch them
  publicDir: false,
  server: {
    open: true,
  },
});
