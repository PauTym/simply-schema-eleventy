"use strict";

module.exports = ({ meta }) => {
  if (meta === "") {
    return "";
  }

  const spaces = 2;
  const json = JSON.stringify(meta, undefined, spaces);
  const jsonSize = json.length - 1;
  const finalJson = json.slice(1, jsonSize);

  return `,${finalJson}`;
};
