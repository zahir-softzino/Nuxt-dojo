// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:{
    head:{
      title: 'Nuxt DOJO',
      meta:[
        {name: 'description', content: 'Everything about Nuxt 3'}
      ],
      link:[
        {rel:'stylesheet', href: 'https://fonts.gstatic.com/s/materialicons/v141/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2'},
        {rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'}
      ]
    }
  }
  
})


