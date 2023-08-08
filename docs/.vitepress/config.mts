import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vue-card-documentation/',
  title: "Vue Animated Card",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'HOME', link: '/' },
    ],

    sidebar: [
      {
        text: 'GETTING STARTED',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Starter Guide', link: '/getting-started' }
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'Props', link: '/props' },
          { text: 'Note', link: '/notes' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pyjim/' }
    ]
  }
})
