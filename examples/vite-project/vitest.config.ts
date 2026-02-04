import { defineConfig , configDefaults} from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'happy-dom',
    setupFiles: ['./src/test/utilities.ts'],
    globals: true,
   include : [
    ...configDefaults.include,
    './**/*.{test,spec}.tsx?'
   ]
  },
})
