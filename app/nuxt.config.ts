// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        includeWorkspace: true
    },
    extends: [
        '../layer/',
    ]
})
