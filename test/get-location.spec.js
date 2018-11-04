'use strict';

import test from 'ava';

import getLocation from '../lib/get-location';

test('it should return the location', t => {
  t.deepEqual('My Location, CA, US', getLocation({location: {text: 'My Location, CA, US'}}));
});

test('it should return null', t => {
  t.deepEqual(null, getLocation({}));
});
