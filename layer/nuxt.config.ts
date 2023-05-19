import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        includeWorkspace: true
    },
    modules: [
        '@nuxtjs/i18n'
    ],
    i18n: {
        vueI18n: resolve('./i18n.config.ts'),
    },
})
