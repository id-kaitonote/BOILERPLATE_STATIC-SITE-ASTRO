import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import alpine from '@astrojs/alpinejs'

// https://astro.build/config
export default {
  site: 'https://kaitonote.com',
  base: '/',
  integrations: [
    alpine({ entrypoint: '/src/entrypoint' }),
    (await import('@playform/inline')).default(),
    // (await import('@playform/compress')).default(),
    partytown(),
    sitemap(),
  ],
  server: {
    port: 3000,
  },
  compressHTML: false,
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/js/index.js',
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
    },
  },
}
