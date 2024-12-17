// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  // vite: {
  //   optimizeDeps: {
  //     include: ['wujie-vue3']
  //   }
  // },
  // // 添加运行时配置
  // runtimeConfig: {
  //   public: {
  //     microApps: {
  //       web: process.env.WEB_APP_URL || 'http://localhost:5173' // web应用的地址
  //     }
  //   }
  // }
});
