'use strict';

const moment = require('moment');

module.exports = function getPublishedAt(json) {
  let publishedAt = null;

  if (json.pubDate) {
    publishedAt = moment.utc(json.pubDate[0], 'ddd, DD MMM YYYY HH:mm:ss Z').format('YYYY-MM-DD');
  }

  return publishedAt;
};
