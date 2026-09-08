import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'text2image',
      formats: ['umd', 'iife', 'es'],
    },
  },
  plugins: [
    dts({
      tsconfigPath: './tsconfig.json',
      outDir: './dist',
      include: ['src/**/*.ts'],
    }),
  ],
});
