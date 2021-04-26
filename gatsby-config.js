/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Nemos`,
    titleTemplate: `%s · Nemos`,
    description: `Estudia el PER con viento de popa.`,
    siteUrl: `https://nemos.es`,
    image: "/favicon.ico",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nemos`,
        short_name: `Nemos`,
        start_url: `/`,
        background_color: `#d8dee9`,
        theme_color: `#5e81ac`,
        display: `standalone`,
        icon: "static/favicon.ico", // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`, // this plugin should be listed after gatsby-plugin-manifest so the manifest file can be included in the service worker.
  ],
}
