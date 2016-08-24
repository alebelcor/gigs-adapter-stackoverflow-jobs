'use strict';

const gigs = require('gigs');

const getCompanyName = require('./get-company-name');
const getLocation = require('./get-location');
const getRemote = require('./get-remote');
const getPublishedAt = require('./get-published-at');

const ADAPTER_SOURCE = 'stackoverflow-jobs';
const ADAPTER_SOURCE_URL = 'https://stackoverflow.com/jobs';

module.exports = function getGigs(json) {
  return json.items.map((job) => {
    return gigs.create({
      source: ADAPTER_SOURCE,
      source_url: ADAPTER_SOURCE_URL,
      title: job.title,
      description: job.description,
      url: job.link,
      company_name: getCompanyName(job),
      location: getLocation(job),
      remote: getRemote(job),
      published_at: getPublishedAt(job)
    });
  });
};
