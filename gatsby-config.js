module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Portfolio",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-typegen`,
    `gatsby-plugin-material-ui`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.API_KEY,
        serviceId: "toku-blog",
        apis: [
          {
            endpoint: "blog_with_picture",
          },
        ],
      },
    },
  ],
};

const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
