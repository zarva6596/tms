import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["./assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/prismic", ["@nuxtjs/google-fonts", {
    display: "swap",
    families: {
      Inter: [200, 300, 400],
    },
  }], "nuxt-svgo", "@vueuse/nuxt", "@nuxt/image", "@nuxt/icon", "nuxt-swiper", "@nuxt/eslint"],
  prismic: {
    endpoint: apiEndpoint || repositoryName
  },
  icon: {
    componentName: "NuxtIcon"
  },
  components: [
    {
      path: "~/components/general",
      global: true 
    },
    {
      path: "~/components/universal",
      global: true
    },
    {
      path: "~/components/universal/accordion",
      global: true
    }
  ]
})