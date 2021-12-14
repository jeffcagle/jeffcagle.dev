module.exports = {
  siteMetadata: {
    title: 'Freelance Web Developer & Designer',
    titleTemplate: '%s | Jeff Cagle',
    description: `I build fast & responsive modern web applications using React & WordPress. I have 15+ years of professional experience, and serve clients globally.`,
    author: {
      name: `Jeff Cagle`,
      summary: `Building fast and modern web apps using JavaScript & Wordpress.`,
    },
    url: 'https://www.jeffcagle.dev',
    siteUrl: 'https://www.jeffcagle.dev',
    image: '/jeff_cagle.jpg',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/icon-javascript.png',
      },
    },
    'gatsby-plugin-styled-components',
    `gatsby-transformer-json`,
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/Layout.tsx`),
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
        ignore: [`**/.*`],
      },
      __key: 'data',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
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
    `gatsby-plugin-remove-trailing-slashes`,
  ],
};
