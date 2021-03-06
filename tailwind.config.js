// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    spinner: theme => ({
      default: {
        color: "teal", // color you want to make the spinner
        size: "1em", // size of the spinner (used for both width and height)
        border: "2px", // border-width of the spinner (shouldn't be bigger than half the spinner's size)
        speed: "500ms" // the speed at which the spinner should rotate
      },
      container: {
        center: true
      }
    }),
    variants: {
      spinner: ["responsive"]
    },
    plugins: [require("tailwindcss-spinner")()]
  }
};
