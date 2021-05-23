const { resolve } = require("path");

module.exports = {
    filenameHashing: false,
  productionSourceMap: false,
//   css: {
//     loaderOptions: {
//       sass: {
//         additionalData: `
//         @import "./src/assets/scss/fonts.scss";
//         `
//       }
//     }
//   },
    configureWebpack: {
        resolve: {
          alias: {
            "@": resolve(__dirname, "./src")
          }
        }
      },
  }