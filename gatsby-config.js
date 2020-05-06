require("dotenv").config()
const { massageNode } = require("./massageNode")

module.exports = {
  siteMetadata: {
    title: `Terrace House Social`,
    description: `We keep track of all the social media profiles for Terrace House cast and panel so you don't have to!`,
    author: `@terracesocial`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-108039956-1",
        anonymize: true,
        respectDNT: true,
        head: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ths_favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Cast`,
            tableView: `All Cast`
          }
        ]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
