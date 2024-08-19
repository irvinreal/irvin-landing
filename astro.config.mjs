import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://irvinreal.github.io',
  base: '/irvin-landing',
})
