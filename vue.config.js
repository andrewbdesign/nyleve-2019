module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/main.scss";`
      }
    }
  }
};
