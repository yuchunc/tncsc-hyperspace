module.exports = {
  pathPrefix: `/`, // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: 'True North Community Safety Consulting',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'True North Community Safety Consulting',
        short_name: 'tncsc',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    //'gatsby-plugin-offline',
  ],
};
