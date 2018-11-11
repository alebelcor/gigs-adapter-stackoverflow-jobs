'use strict';

const defaultsDeep = require('lodash/defaultsDeep');
const got = require('got');

const getGotOptions = require('./lib/get-got-options');
const getResponseBody = require('./lib/get-response-body');
const getJson = require('./lib/get-json');
const getGigs = require('./lib/get-gigs');

const ADAPTER_ENDPOINT = 'https://stackoverflow.com/jobs/feed';

module.exports = async options => {
  options = defaultsDeep({}, options, {
    endpoint: ADAPTER_ENDPOINT,
    gotOptions: getGotOptions()
  });

  try {
    const response = await got.get(options.endpoint, options.gotOptions);
    return getGigs(getJson(getResponseBody(response)));
  } catch (error) {
    console.error(error);
  }
};
