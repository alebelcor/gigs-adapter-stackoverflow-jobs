'use strict';

import test from 'ava';
import getPublishedAt from '../lib/get-published-at';

test('it should return the date when the job was published', t => {
  t.deepEqual('2016-08-20', getPublishedAt({pubDate: ['Sat, 20 Aug 2016 20:30:35 Z']}));
});

test('it should return null', t => {
  t.deepEqual(null, getPublishedAt({}));
});
