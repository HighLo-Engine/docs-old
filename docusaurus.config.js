const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'HighLo-Docs',
  tagline: 'HighLo-Engine Documentation',
  url: 'https://docs.highlo-engine.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
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
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/HighLo-Engine/docs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
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
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Getting started',
          },
          {
            to: '/docs/api',
            label: 'API Documentation',
            position: 'left'
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
        copyright: `Copyright © ${new Date().getFullYear()} Can Karka and Albert Slepak. Built with Docusaurus. All Right reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'cpp',
      },
    }),
});
