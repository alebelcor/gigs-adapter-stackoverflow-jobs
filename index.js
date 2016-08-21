'use strict';

const got = require('got');
const pify = require('pify');
const toJson = pify(require('xml2js').parseString);

const getGotOptions = require('./lib/get-got-options');
const getResponseBody = require('./lib/get-response-body');
const getGigs = require('./lib/get-gigs');

const ADAPTER_ENDPOINT = 'http://stackoverflow.com/jobs/feed';

module.exports = function gigsAdapterStackOverflowJobs(options) {
  options = options || {};

  return got.get(ADAPTER_ENDPOINT, getGotOptions())
    .then(getResponseBody)
    .then(toJson)
    .then(getGigs)
    .catch(console.error);
};
