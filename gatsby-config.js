require("dotenv").config({ path: ".env" });

module.exports = {
  siteMetadata: {
    title: "BottleTracker",
    description: "Bottle Tracker for babies or animals",
    author: "@Mark&Kevin"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-tailwind",
        short_name: "starter",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#4dc0b5",
        display: "minimal-ui",
        icon: "src/images/tailwind-icon.png"
      }
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        // Configure SASS to process Tailwind
        postCssPlugins: [require('tailwindcss')],
        // tailwind: true,
        // purgeOnly: ["src/css/style.scss"]
      }
    },
    // 'gatsby-plugin-sass',
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "dark-mode",
        classNameLight: "light-mode",
        storageKey: "darkMode",
        minify: true
      }
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: true,
          database: false,
          firestore: true,
          storage: true,
          messaging: false,
          functions: true,
          performance: true
        }
      }
    },
    "gatsby-plugin-offline",
  ]
};
