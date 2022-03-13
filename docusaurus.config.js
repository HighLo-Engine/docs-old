const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const trackingConfig = {
  trackingID: 'UA-217301418-1',
  anonymizeIP: true,
};

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
        googleAnalytics: {
          trackingID: trackingConfig.trackingID,
          anonymizeIP: trackingConfig.anonymizeIP,
        },
      }),
    ],
  ],

  plugins: [
    'plugin-image-zoom',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-api',
        path: 'docs-api',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./docsApi.js')
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'HighLo-Docs',
        logo: {
          alt: 'HighLo-Engine Logo',
          src: 'img/HighLo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Getting started',
          },
          {
            to: '/tutorials',
            label: 'Tutorials',
            position: 'left'
          },
          {
            to: 'blog',
            label: 'Blog',
            position: 'left'
          },
         /*
          {
            type: 'docsVersionDropdown',
            docsPluginId: 'docs',
            position: 'right',
            dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            dropdownActiveClassDisabled: true,
          },
          */
         /*
         // not working yet, because we do not have provided any translations yet
          {
            type: 'localeDropdown',
            position: 'right',
          },
          */
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
                label: 'Developer guide',
                to: '/docs/developer-guide'
              },
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
                label: 'Blog',
                to: 'blog'
              },
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
      zoomSelector: '.markdown img',
    }),
});
