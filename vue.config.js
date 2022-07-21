const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.APP_BASEPATH,
  devServer: {
    host: "localhost",
    // port: 3000,
    https: false,
    proxy: {
      '/api': {target: 'http://localhost:80'},
    },
  },
});
