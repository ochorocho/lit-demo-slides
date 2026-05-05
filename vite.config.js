import { defineConfig } from 'vite';

export default defineConfig({
  base: '/lit-demo-slides/',
  // Serve src/ files as static assets so data-markdown can fetch them
  publicDir: false,
  build: {
    // Keep all woff2 fonts as separate files instead of inlining as base64,
    // so the bundled CSS stays small and the browser can cache fonts independently.
    assetsInlineLimit: 0,
  },
  server: {
    open: true,
  },
});
