'use strict';

module.exports = function getLocation(json) {
  let location = null;

  if (json.location) {
    location = json.location[0]['_'];
  }

  return location;
};
