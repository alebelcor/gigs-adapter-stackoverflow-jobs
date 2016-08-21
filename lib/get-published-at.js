'use strict';

const moment = require('moment');

module.exports = function getPublishedAt(json) {
  return moment.utc(json.pubDate, 'ddd, DD MMM YYYY HH:mm:ss Z').format('YYYY-MM-DD');
};
