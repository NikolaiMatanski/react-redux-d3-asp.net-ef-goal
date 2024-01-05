import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint({
    include: [
      `${path.resolve(__dirname, '')}/**/*.{js,ts,jsx,tsx}`,
    ],
  })],
});
