"use strict";

module.exports = ({ meta }) => {
  const spaces = 2;

  if (meta === "") {
    return "";
  }

  const json = JSON.stringify(meta, undefined, spaces);
  const jsonSize = json.length - 1;

  const finalJson = json.slice(1, jsonSize);

  return `,${finalJson}`;
};
