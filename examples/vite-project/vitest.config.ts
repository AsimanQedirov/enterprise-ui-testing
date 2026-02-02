import { defineConfig , configDefaults} from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'happy-dom',
   include : [
    ...configDefaults.include,
    './**/*.{test,spec}.tsx?'
   ]
  },
})
