'use strict';

module.exports = function getCompanyName(json) {
  let companyName = null;

  if (json['a10:author']) {
    companyName = json['a10:author'][0]['a10:name'][0]
  }

  return companyName;
};
