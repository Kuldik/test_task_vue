const { defineConfig } = require("@vue/cli-service");
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/test_task_vue/tet-project/'
    : '/',
  ...defineConfig({
    transpileDependencies: true,
  }),
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/main.scss";`,
      },
    },
  },
};
