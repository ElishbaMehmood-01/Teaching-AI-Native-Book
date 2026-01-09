// // @ts-check
// // `@type` JSDoc annotations allow editor autocompletion and type checking
// // (when paired with `@ts-check`).
// // There are various equivalent ways to declare your Docusaurus config.
// // See: https://docusaurus.io/docs/api/docusaurus-config

// import {themes as prismThemes} from 'prism-react-renderer';

// // This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// /** @type {import('@docusaurus/types').Config} */
// const config = {
  
//   favicon: 'img/favicon.ico',

//   // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
//   future: {
//     v4: true, // Improve compatibility with the upcoming Docusaurus v4
//   },

//   // Set the production url of your site here
//   url: 'https://your-docusaurus-site.example.com',
//   // Set the /<baseUrl>/ pathname under which your site is served
//   // For GitHub pages deployment, it is often '/<projectName>/'
//   baseUrl:   '/Teaching-AI-Native-Book/', 

//   // GitHub pages deployment config.
//   // If you aren't using GitHub pages, you don't need these.
//   organizationName: 'ElishbaMehmood-01', // Usually your GitHub org/user name.
//   projectName: 'Teaching-AI-Native_Book', // Usually your repo name.

//   onBrokenLinks: 'throw',

//   // Even if you don't use internationalization, you can use this field to set
//   // useful metadata like html lang. For example, if your site is Chinese, you
//   // may want to replace "en" with "zh-Hans".
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en'],
//   },

//   presets: [
//     [
//       'classic',
//       /** @type {import('@docusaurus/preset-classic').Options} */
//       ({
//           docs: {
//               sidebarPath: require.resolve('./sidebars.js'),
//   editUrl:
//     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
// },
//         blog: {
//           showReadingTime: true,
//           feedOptions: {
//             type: ['rss', 'atom'],
//             xslt: true,
//           },
//           // Please change this to your repo.
//           // Remove this to remove the "edit this page" links.
//           editUrl:
//             'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//           // Useful options to enforce blogging best practices
//           onInlineTags: 'warn',
//           onInlineAuthors: 'warn',
//           onUntruncatedBlogPosts: 'warn',
//         },
//         theme: {
//           customCss: './src/css/custom.css',
//         },
//       }),
//     ],
//   ],

//   themeConfig:
//     /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
//     ({
//       // Replace with your project's social card
//       image: 'img/docusaurus-social-card.jpg',
//       colorMode: {
//         respectPrefersColorScheme: true,
//       },
//       navbar: {
//         title: 'My Site',
//         logo: {
//           alt: 'My Site Logo',
//           src: 'img/logo.svg',
//         },
//         items: [
//           {
//             type: 'docSidebar',
//             sidebarId: 'tutorialSidebar',
//             position: 'left',
//             label: 'Tutorial',
//           },
//           {to: '/blog', label: 'Blog', position: 'left'},
//           {
//             href: 'https://github.com/ElishbaMehmood-01/Teaching-AI-Native-Book',
//             label: 'GitHub',
//             position: 'right',
//           },
//         ],
//       },
//       footer: {
//         style: 'dark',
//         links: [
//           {
//             title: 'Docs',
//             items: [
//               {
//                 label: 'Tutorial',
//                 to: '/docs/intro',
//               },
//             ],
//           },
//           {
//             title: 'Community',
//             items: [
//               {
//                 label: 'Stack Overflow',
//                 href: 'https://stackoverflow.com/questions/tagged/docusaurus',
//               },
//               {
//                 label: 'Discord',
//                 href: 'https://discordapp.com/invite/docusaurus',
//               },
//               {
//                 label: 'X',
//                 href: 'https://x.com/docusaurus',
//               },
//             ],
//           },
//           {
//             title: 'More',
//             items: [
//               {
//                 label: 'Blog',
//                 to: '/blog',
//               },
//               {
//                 href: 'https://github.com/ElishbaMehmood-01/Teaching-AI-Native-Book',

//               },
//             ],
//           },
//         ],
//         copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
//       },
//       prism: {
//         theme: prismThemes.github,
//         darkTheme: prismThemes.dracula,
//       },
//     }),
// };

// export default config;




// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Teaching AI-Native Book',
  tagline: 'An AI-native, spec-driven book on modern software development',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://elishbamehmood-01.github.io',
  baseUrl: '/Teaching-AI-Native-Book/',

  organizationName: 'ElishbaMehmood-01',
  projectName: 'Teaching-AI-Native-Book',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Teaching AI-Native Book',
      logo: {
        alt: 'AI-Native Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book',
        },
        {
          href: 'https://github.com/ElishbaMehmood-01/Teaching-AI-Native-Book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Elishba Mehmood. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
