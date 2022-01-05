const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // A useful way to reference the context we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  // Layout aliases can make templates more portable
  eleventyConfig.addLayoutAlias("default", "default.njk");
  //eleventyConfig.addLayoutAlias('article', 'layouts/article.njk');

  // minify the html output
  //eleventyConfig.addTransform("htmlmin", require("./src/utils/minify-html.js"));
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "LLLL dd, yyyy"
    );
  });

  eleventyConfig.addFilter("post_permalink", (page) => {
    const yyyy = page.date.getFullYear();
    const mm = String(page.date.getMonth() + 1).padStart(2, "0");
    return `${yyyy}/${mm}/${page.fileSlug}/`;
  });

  // use a filter for simple css minification
  // eleventyConfig.addFilter("cssmin", require("./src/utils/minify-css.js"));
  // eleventyConfig.addFilter("class_year", require("./src/utils/filter-class-year.js"));

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("src/assets/images");

  return {
    dir: {
      input: "./src",
      data: "data",
      layouts: "layouts",
      includes: "includes",
      output: "_site",
    },
    templateFormats: ["njk", "md", "css"],
    htmlTemplateEngine: "njk",
    dataTemplateEngine: false,
  };
};
