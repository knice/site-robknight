require("dotenv").config();
const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function () {
  try {
    let url = `https://feeds.pinboard.in/json/u:robknight/t:favorites/`;

    /* This returns a promise */
    return Cache(url, {
      duration: "3d",
      type: "json",
    });
  } catch (e) {
    console.log(e);
  }
};
