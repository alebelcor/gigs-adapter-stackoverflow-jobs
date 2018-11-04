'use strict';

import test from 'ava';

import getTitle from '../lib/get-title';

test('it should return the title', t => {
  t.deepEqual('Developer', getTitle({title: ' Developer at Foo in San Francisco, Ca '}));
  t.deepEqual('Engineer (m/f)', getTitle({title: ' Engineer (m/f) at Foo in Denver, Colorado '}));
  t.deepEqual('Senior Developer - Ruby', getTitle({title: ' Senior Developer - Ruby at Foo in San Jose, California '}));
});

test('it should return null', t => {
  t.deepEqual(null, getTitle({}));
});
