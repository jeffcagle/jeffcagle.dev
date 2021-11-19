module.exports = {
  siteMetadata: {
    title: "Jeff Cagle Dev",
    description: `Freelance JavaScript / Wordpress development and modern UI / UX Design by Jeff Cagle.`,
    author: {
      name: `Jeff Cagle`,
      summary: `who lives and works in the US building fast and modern web apps.`,
    },
    siteUrl: "https://www.jeffcagle.dev",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-transformer-json`,
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/Layout.js`),
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
        ignore: [`**/\.*`],
      },
      __key: "data",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 928,
              withWebp: true,
              loading: `lazy`,
              linkImagesToOriginal: false,
              quality: 50,
            },
          },
        ],
      },
    },
  ],
};
