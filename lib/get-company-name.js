'use strict';

module.exports = json => {
  let companyName = null;

  if (json['a10:author']) {
    companyName = json['a10:author']['a10:name'];
  }

  return companyName;
};
