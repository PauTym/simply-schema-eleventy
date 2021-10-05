"use strict";

const main = require("./main.js");

module.exports = ({ meta }) => {
  const json = main({ meta });
  const spaces = 2;

  if(json === ""){
    return "";
  };
  return `
  <script type="application/ld+json">
    ${JSON.stringify(json, undefined, spaces)}
  </script>`;
};
