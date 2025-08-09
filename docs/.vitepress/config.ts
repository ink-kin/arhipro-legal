import { defineConfig } from 'vitepress'
import { devDependencies } from '../../package.json'

export default defineConfig({
  lang: 'ru-RU',
  title: 'Архи-про',
  description: 'Сообщество профессионалов наивысшей степени - АрхиПрофессионалов',
  sitemap: {
    hostname: 'https://arhi-pro.ru/'
  },

  lastUpdated: true,
  appearance: true,

  // https://vitepress.dev/reference/site-config#base
  // base: '/subpath/',
  // cleanUrls: true,

  themeConfig: {
    nav: nav(),

    sidebar: sidebarGuide(),

    editLink: {
      pattern: 'https://github.com/ink-kin/arhipro-legal/edit/master/docs/:path',
      text: 'Редактировать эту страницу',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ink-kin/arhipro-legal.git' }
    ],

    footer: {
      message: 'Оферта. MIT License.',
      copyright: 'Copyright © 2025',
    },
  },
})

function nav() {
  return [
      { text: 'О нас', link: '/about' },
      { text: 'Манифест', link: '/manifest' },
      { text: 'Договор', link: '/oferta' }
      ]
}

function sidebarGuide() {
  return [
    {text: 'Документы',
        items: [
          { text: 'О нас', link: '/about' },
          { text: 'Манифест', link: '/manifest' },
          { text: 'Шаги к признанию', link: '/step' },
          { text: 'Оферта', link: '/oferta' },
          { text: 'Контакты', link: '/arhi-pro-contact' }
        ]
      }
  ]
}
