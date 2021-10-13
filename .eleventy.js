"use strict";

const script = require("./src/script.js");
const add = require("./src/add.js");

/**
 * Add the "jsonLdScript"-shortcode to generate JSON-LD structured data.
 * @param {Object} eleventyConfig Eleventy Configuration API.
 */
/**
 * Add the "addJsonData"-shortcode to generate additional JSON-LD data in a
 * allready existing hardcoded data structure
 * (this doesent add the context-tag).
 */
module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode("jsonLdScript", (meta) => script({ meta }));
  eleventyConfig.addShortcode("addJsonData", (meta) => add({ meta }));
};
