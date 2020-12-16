const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production'){
  dotenv.config()
}

module.exports = {
  
  siteMetadata: {
    title: `Olympic Games`,
    description: `Site created for "Human Computer Interactions" course`,
    author: `tjuric03,lcmrle00`,
  }, 
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "f7wwsvhmspom", //process.env.CONTENTFUL_SPACE_ID,
        accessToken: `Rzgj3CzKGwieVX_YvRh2KCa96p1gv2HV5cmYiBt_y7w`//process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    `gatsby-plugin-sass`,
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
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
