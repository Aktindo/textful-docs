const { default: clsx } = require("clsx");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Textful",
  tagline: "A useful and modular NPM package in formatting string literals.",
  url: "https://aktindo.me/textful-docs", // Your website URL
  baseUrl: "/",
  projectName: "textful-docs",
  organizationName: "aktindo",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicons/favicon.ico",
  organizationName: "aktindo", // Usually your GitHub org/user name.
  projectName: "textful-docs", // Usually your repo name.
  scripts: [
    {
      src: "https://kit.fontawesome.com/e513b21ba7.js",
      async: true,
    },
  ],
  themeConfig: {
    navbar: {
      title: "Textful",
      logo: {
        alt: "Logo for Textful",
        src: "img/Textful-Logo.svg",
      },
      items: [
        {
          to: "docs/general/welcome",
          activeBasePath: "docs",
          label: "Documentation",
          position: "left",
        },
        {
          href: "https://textful.aktindo.me/docs/general/welcome",
          label: "Documentation",
          position: "right",
        },
        {
          href: "https://github.com/aktindo/textful-docs",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://aktindo.me/discord",
          label: "Discord",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Get Started",
              to: "docs/general/welcome",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://aktindo.me/discord",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/aktindo",
            },
          ],
        },
      ],
      copyright: `Copyright © 2020 - ${new Date().getFullYear()} Aktindo Inc.`,
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: "🌙",

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: "2px",
        },

        lightIcon: "☀️",

        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/aktindo/repo/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/aktindo/repo/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/docs/general/welcome",
            from: ["/docs/"],
          },
        ],
      },
    ],
  ],
};
