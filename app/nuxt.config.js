module.exports = {
  modules: [
      '@nuxtjs/axios',
      '@nuxtjs/dotenv',
      '@nuxtjs/bulma'
  ],
  css: [
    'bulma',
    '@/assets/sass/main.scss'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Liwen Ye, MD & PhD',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'headless wordpress template for ye.online' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css' },
    ],
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    postcss: {
     plugins: {
       'postcss-preset-env': {
         features: {
           customProperties: false
         }
       }
     }
   },
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
