require("dotenv").config({ path: ".env" });
const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: "BottleTracker",
    description: "BottleTracker 🍼 is for anyone that needs to track feedings of infant humans 👶 or animals 😺.",
    author: "@Mcorupe"
  },
  plugins: [
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          autoprefixer(),
        ],
      },
    },
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
    {
      resolve: "gatsby-plugin-sass",
      options: {
        // Configure SASS to process Tailwind
        postCssPlugins: [require("@tailwindcss/postcss")],
        // tailwind: true,
        // purgeOnly: ["src/css/style.scss"]
      }
    },
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
        credentials: {
          apiKey: process.env.GATSBY_FIREBASE_API_KEY,
          authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
          projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
          storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.GATSBY_FIREBASE_APP_ID,
          mesaurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID
        }
      }
    }
  ]
};
