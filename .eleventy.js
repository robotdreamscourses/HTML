module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  // eleventyConfig.addPassthroughCopy("**/*.jpg");

  eleventyConfig.setServerOptions({
    showAllHosts: true
  })
};