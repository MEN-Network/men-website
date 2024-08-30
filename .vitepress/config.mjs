import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MRZZJ Experiment Network",
  description: "An Experimental Network",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MEN-Network' }
    ]
  }
})
