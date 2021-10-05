"use strict";

const script = require("./src/script.js");

/**
 * Add a shortcode to generate JSON-LD structured data.
 * @param {Object} eleventyConfig Eleventy Configuration API.
 */
module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode("jsonLdScript", (meta) => script({ meta }));
};
