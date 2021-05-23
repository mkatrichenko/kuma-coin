const { resolve } = require("path");

module.exports = {
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
};
