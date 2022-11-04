import type { NavbarConfig } from '@vuepress/theme-default'

export const id: NavbarConfig = [
  {
    text: 'Guide',
    link: '/getting-started/',
  },
  {
    text: 'ORM',
    link: '/orm/',
  },
  {
    text: 'Resources',
    link: '/resources/',
  },
  {
    text: 'Contribution',
    link: '/contribution/',
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
    text: `中文`,
    link: 'https://go-doudou.unionj.cloud',
  },
]
