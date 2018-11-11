'use strict';

module.exports = json => {
  return json.location ? json.location.text : null;
};
