import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  entry: ['src/default/index.ts', 'src/lib/'],
  splitting: false,
  sourcemap: false,
  clean: true,
  outDir: 'build',
  publicDir: true,
  format: ['esm', 'cjs'],
  dts: true,
  minify: !options.watch,
}))
