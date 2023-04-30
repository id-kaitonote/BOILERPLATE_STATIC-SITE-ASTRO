import image from '@astrojs/image'
import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import purgecss from 'astro-purgecss'
import Settings from './src/data/settings.json'

export default defineConfig({
  site: Settings.siteDomain,
  base: '/',
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/js/[name].js',
          assetFileNames: ({ name }) => {
            if (/\.css$/.test(name ?? '')) {
              return 'assets/css/style.css'
            }
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
              return 'assets/images/[name][extname]'
            }
            return 'assets/[name].[ext]'
          },
        },
      },
      cssCodeSplit: false,
      minify: false,
    },
  },
  integrations: [
    purgecss(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    compress({
      css: false,
    }),
  ],
})
