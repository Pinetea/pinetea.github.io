import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";



export default defineConfig({
  site: 'https://pinetea.github.io',
  base: '/',
})

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    })
  ],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
});
