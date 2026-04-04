import { defineConfig } from 'vite';

export default defineConfig({
  // Serve src/ files as static assets so data-markdown can fetch them
  publicDir: false,
  server: {
    open: true,
  },
});
