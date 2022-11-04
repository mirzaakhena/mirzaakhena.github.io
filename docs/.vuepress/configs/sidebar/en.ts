import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/getting-started/': [
    {
      text: 'Getting Started',
      children: [
        '/getting-started/README.md',
        '/getting-started/prerequisite.md',
        '/getting-started/installation.md',
        '/getting-started/basic-concept.md',
        '/getting-started/demo-1.md',
        '/getting-started/demo-2.md',
      ],
    },
  ],
  '/features/': [
    {
      text: 'Feature',
      children: [
        '/features/README.md',
        '/features/architecture.md',
        '/features/code-structure.md',
        '/features/cli.md',
        '/features/component.md',
        '/features/naming-convention.md',
        '/features/how-it-works.md',
        '/features/code-generation-behaviour.md',
        '/features/technology.md',
      ],
    },
  ],
  '/learn-more/': [
    {
      text: 'Learn More',
      children: [
        '/learn-more/README.md',
        '/learn-more/concept.md',
        '/learn-more/how-to.md',
      ],
    },
  ],
}
