const path = require("path");

const rootPath = path.resolve(__dirname);

module.exports = {
  publicPath: "/",
  transpileDependencies: ["vuetify"],
  chainWebpack: function(config) {
    config.resolve.alias.set("@", path.resolve(rootPath, "src/"));

    return config;
  },
};
