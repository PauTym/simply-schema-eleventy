"use strict";

module.exports = ({ meta }) => {
  if(!meta){ return };
  return {
    "@context": "https://schema.org",
    ...meta,
  };
};
