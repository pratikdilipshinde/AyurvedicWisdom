import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // ensures relative paths (important for GoDaddy)
  plugins: [react()],
  build: {
    outDir: 'dist', // default is 'dist' but good to be explicit
  },
});