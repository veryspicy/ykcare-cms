import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import tailwindcss from "@tailwindcss/vite";

import viteSvgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '颐康老年养护中心',
      meta: [
        { charset: 'utf-8' },
        { name: 'keywords', content:  '颐康,老年养护,护理,护理中心,护理服务'},
        { hid: 'description', name: 'description', content: '颐康老年养护中心' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' }
      ,],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  imports: {
    autoImport: true
  },
  compatibilityDate: '2024-11-01',
  devServer: {
    port: 4090,
    host: '0.0.0.0'
  },
  devtools: { enabled: true },
  css: [
    "vuetify/styles",
    "@/assets/css/tailwind.css",
    
  
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    plugins: [
      vuetify(),
      tailwindcss(),
      viteSvgLoader(),
  ],
  },
  nitro: {
    preset: "cloudflare-pages"
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@nuxthub/core",
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    "nitro-cloudflare-dev"
  ],
  hub: {
    blob:  true,
  }
})