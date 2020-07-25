const versioning = require('./lib/versioning.js')

module.exports = {
  title: 'Dev on Windows with WSL',
  description: '在 Windows 上用 WSL 优雅开发',
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  ],
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    // defaultTheme: 'light',
    repo: 'spencerwooo/dowww',
    docsDir: 'docs/',
    versions: {
      latest: versioning.versions.latest,
      selected: versioning.versions.latest,
      all: versioning.versions.all
    },
    nav: [{
      text: '文档版本', items: versioning.linksFor('1-preparations/1-0-intro.md')
    }, {
      text: '更新信息', link: 'https://github.com/spencerwooo/dowww/blob/master/CHANGELOG.md'
    }, {
      text: '联系', items: [
        {
          text: 'GitHub', items: [
            { text: '项目地址', link: 'https://github.com/spencerwooo/dowww' },
            { text: '反馈提问', link: 'https://github.com/spencerwooo/dowww/issues/new/choose' },
            { text: '参与贡献', link: 'https://github.com/spencerwooo/dowww/blob/master/.github/CONTRIBUTING.md' },
          ]
        },
        {
          text: '关于作者', items: [
            { text: '个人主页', link: 'https://spencerwoo.com' },
            { text: 'Telegram 频道', link: 'https://t.me/realSpencerWoo' }
          ]
        }
      ]
    }],
    algolia: {
      apiKey: '6534c856e645507d6cf52052fdfd5611',
      indexName: 'dowww',
    },
    searchPlaceholder: 'Search...',
    sidebar: versioning.sidebars,
    lastUpdated: 'Last Updated',
    logo: '/hero.png',
    sidebarDepth: 2,
    smoothScroll: true
  },
  plugins: [
    ['vuepress-plugin-container', {
      type: 'callout',
      before: info => `<div class="callout"><p class="title">${info}</p>`,
      after: '</div>'
    }],
    ['vuepress-plugin-container', {
      type: 'tree',
      before: `<pre class="tree"><code>`,
      after: `</code></pre>`
    }],
    ['@vuepress/back-to-top'],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-111664763-3'
      }
    ],
    ['@vuepress/medium-zoom'],
    ['@markspec/vuepress-plugin-footnote']
  ]
}
