const siteMetadata = require("./site-metadata.json");

module.exports = {
  pathPrefix: "/",
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-source-data`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {},
    },
    {
      resolve: `gatsby-remark-page-creator`,
      options: {},
    },
    {
      resolve: `@stackbit/gatsby-plugin-menus`,
      options: {
        sourceUrlPath: `fields.url`,
        pageContextProperty: `menus`,
      },
    },
    {
      resolve: `gatsby-source-tumblr`,
      options: {
        blogIdentifier: `whizziwig-blog`,
        consumerKey: `86GQY1FOM6ktxcW2NY5EwKw9wlPilWPYl6fFTZw7amIJWeJXab`,
      },
    },
  ],
};
