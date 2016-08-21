'use strict';

const got = require('got');
const toJson = require('xml2json').toJson;

const getGotOptions = require('./lib/get-got-options');
const getResponseBody = require('./lib/get-response-body');
const getGigs = require('./lib/get-gigs');

const ADAPTER_ENDPOINT = 'http://stackoverflow.com/jobs/feed';

module.exports = function gigsAdapterStackOverflowJobs(options) {
  options = options || {};

  return got.get(ADAPTER_ENDPOINT, getGotOptions())
    .then(getResponseBody)
    .then(toJson)
    .then(JSON.parse)
    .then(getGigs)
    .catch(console.error);
};
