// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css'],
    modules: [
      '@nuxt/content'
    ],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
  })

  
  
