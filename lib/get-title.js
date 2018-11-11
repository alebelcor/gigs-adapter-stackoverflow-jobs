'use strict';

module.exports = json => {
  let title = null;

  if (json.title) {
    const matches = /^\s*(.*) at .*$/i.exec(json.title);
    title = matches[1];
  }

  return title;
};
