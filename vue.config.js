const path = require("path");
const pkgs = require("./package.json");

const rootPath = path.resolve(__dirname);

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/" + pkgs.pages.name + "/" : "/",

  transpileDependencies: ["vuetify"],
  chainWebpack: function(config) {
    config.resolve.alias.set("@", path.resolve(rootPath, "src/"));

    return config;
  },
};
