const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'HighLo-Docs',
  tagline: 'HighLo-Engine Documentation',
  url: 'https://docs.highlo-engine.com',
  baseUrl: '/',
  onBrokenLinks: 'warn', // throw
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'HighLo-Engine', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      de: {
        label: 'Deutsch',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/HighLo-Engine/docs/edit/master/',

          routeBasePath: 'docs',
          path: 'docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/HighLo-Engine/docs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-api',
        path: 'docs-api',
        routeBasePath: 'docs-api',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs',
        path: 'docs',
        routeBasePath: 'docs',
        sidebarPath: require.resolve('./sidebars.js')
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'HighLo-Docs',
        logo: {
          alt: 'HighLo-Engine Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/',
            position: 'left',
            label: 'Getting started',
            activeBaseRegex: '/docs/'
          },
          {
            to: '/docs-api',
            position: 'left',
            label: 'API',
            activeBaseRegex: '/docs-api/'
          },
          {
            to: '/tutorials',
            label: 'Tutorials',
            position: 'left'
          },
          /*
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          */
         /*
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            dropdownActiveClassDisabled: true,
          },
          */
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/HighLo-Engine/HighLo-Engine',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorials for beginners',
                to: '/tutorials',
              },
            ],
          },
          {
            title: 'Community',
            items:
            [
              {
                label: 'Discord',
                href: 'https://discord.gg/xraRzHQ74U',
              },
            ],
          },
          {
            title: 'More',
            items:
            [
              /*
              {
                label: 'Blog',
                to: '/blog',
              },
              */
              {
                label: 'GitHub',
                href: 'https://github.com/HighLo-Engine/HighLo-Engine',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Can Karka and Albert Slepak. Built with Docusaurus. All Rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'cpp',
      },
    }),
});
