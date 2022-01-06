const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");

const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // A useful way to reference the context we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  // Layout aliases can make templates more portable
  eleventyConfig.addLayoutAlias("default", "default.njk");
  //eleventyConfig.addLayoutAlias('article', 'layouts/article.njk');
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPlugin(pluginRss);

  // minify the html output
  //eleventyConfig.addTransform("htmlmin", require("./src/utils/minify-html.js"));
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addFilter(
    "readableDate",
    (dateObj, format = "LLLL dd, yyyy") => {
      return DateTime.fromISO(dateObj, {
        zone: "America/Los_Angeles",
      }).toFormat(format);
    }
  );
  eleventyConfig.addNunjucksFilter("timeSince", function (arg1) {
    var now = new Date().getFullYear();
    return now - arg1;
  });

  eleventyConfig.addFilter("post_permalink", (page) => {
    const yyyy = page.date.getFullYear();
    const mm = String(page.date.getMonth() + 1).padStart(2, "0");
    return `${yyyy}/${mm}/${page.fileSlug}/`;
  });

  const now = new Date();
  const livePosts = (post) => post.date <= now && !post.data.draft;
  eleventyConfig.addCollection("posts", (collection) => {
    return [
      ...collection.getFilteredByGlob("./src/posts/*.md").filter(livePosts),
    ].reverse();
  });

  eleventyConfig.addCollection("projects", (collection) => {
    return [
      ...collection.getFilteredByGlob("./src/projects/*.md").filter(livePosts),
    ].reverse();
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
    markdownTemplateEngine: "njk",
  };
};
