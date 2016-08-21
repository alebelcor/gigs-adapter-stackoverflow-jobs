'use strict';

module.exports = function getCompanyName(json) {
  let companyName = null;

  if (json['a10:author']) {
    companyName = json['a10:author']['a10:name']
  }

  return companyName;
};
