import type { NavbarConfig } from '@vuepress/theme-default'

export const en: NavbarConfig = [
  {
    text: 'Introduction',
    link: '/introduction/',
  },
  {
    text: 'Getting Started',
    children: [
      {
        text: 'Prerequisite',
        link: '/getting-started/prerequisite/',
      },
      {
        text: 'Installation',
        link: '/getting-started/installation',
      },
    ]
  },
  {
    text: 'Tutorial',
    link: '/tutorial/',
  },
  {
    text: 'Feature',
    link: '/feature/',
  },
  {
    text: `Version`,
    children: [
      {
        text: 'v0.x',
        link: 'https://github.com/unionj-cloud/go-doudou/blob/v0.9.8/README.md',
      },
      {
        text: 'Release Notes',
        link: 'https://github.com/unionj-cloud/go-doudou/releases',
      },
    ],
  },
  {
    text: 'github',
    link: 'https://github.com/mirzaakhena/gogen',
  },
]
