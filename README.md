[![npm](https://img.shields.io/npm/v/@pautym/simply-eleventy-schema)](https://www.npmjs.com/package/@pautym/simply-schema-eleventy)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# The simple way to write 11ty-schema

[Eleventy](https://www.11ty.dev/) plugin to generate JSON-LD [structured data](https://schema.org/).

- [No Restricions!](#no-restricions)
- [Installation](#installation)
- [Usage](#usage)
- [Thanks](#thanks-to)
- [License](#license)

## No Restrictions

This plugin is a remake of [quasibit's](https://github.com/quasibit) [@quasibit/eleventy-plugin-schema](https://github.com/quasibit/eleventy-plugin-schema), it improves on his JSON-LD script implementation, you are no longer forced to use JSON-LD-values you don't need. 
You can basically write your schema into the frontmatter without any restricions. Please refer to the files in [demo](./demo).
The plugin adds a shortcode to generate JSON-LD structure (including the `<script>` tag).

The shortcode supports all [Schema](https://schema.org/) types.

## Installation

Install the package:

```sh
npm install --save @pautym/simply-schema-eleventy
```

Add the plugin to your [Eleventy configuration](https://www.11ty.dev/docs/config/)
(usually `.eleventy.js`):

```js
const schema = require("@pautym/simply-schema-eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(schema);
};
```

## Usage

### Creating the schema
Add data/front matter to your pages. Please refer to the files in [demo](./demo).
If you already have the value in other properties, you can use
[computed data](https://www.11ty.dev/docs/data-computed/) to clone them.

Call the shortcode where you want the script to be displayed:

```njk 
{% jsonLdScript meta %}
```

### Adding content to a hardcoded Schema in hindsight
Follow the same Steps as listed above, but call this shortcode instead:

```njk
{% addJsonData meta %}
```

### Validation

You can validate the structured data using one of the following tools:

- [Google's Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/u/0/).
- [JSON-LD Playground](https://json-ld.org/playground/).
- [JSON Schema Validator](https://www.jsonschemavalidator.net/).

## Thanks to:
[quasibit](https://github.com/quasibit) for creating [@quasibit/eleventy-plugin-schema](https://github.com/quasibit/eleventy-plugin-schema)!

## License

MIT. See [LICENSE](./LICENSE).