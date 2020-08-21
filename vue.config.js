const pkgs = require("./package.json");

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/" + pkgs.pages.name + "/" : "/",
};
