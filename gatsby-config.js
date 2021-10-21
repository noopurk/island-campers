module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-starter-scss",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://w47.4b7.myftpupload.com/graphql.",
        production: {
          allow404Images: true,
        },
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: "IGQVJWaVJKWkhGcUozREd3SnlFUmZASazYyOW44UmQzbXVOSVAyQmtqakd6MWFZAYXlDaWdxNWJYdHFFd21pQUpBRTlUcDhINVlVMmQxbmsxOV9SSUFwY0ctZADhkZAV9KWEtlbmJVczFpTTNsZA0xSMEowTwZDZD"
      }
    },
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     type: `user-profile`,
    //   username: `mudassarali75`,
    //   access_token:"IGQVJWaVJKWkhGcUozREd3SnlFUmZASazYyOW44UmQzbXVOSVAyQmtqakd6MWFZAYXlDaWdxNWJYdHFFd21pQUpBRTlUcDhINVlVMmQxbmsxOV9SSUFwY0ctZADhkZAV9KWEtlbmJVczFpTTNsZA0xSMEowTwZDZD"
    //   },
    // },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        // forceBase64Format: ``, // valid formats: png,jpg,webp
        // useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
  ],
};