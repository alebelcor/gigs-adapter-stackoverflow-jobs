'use strict';

import test from 'ava';
import getGigs from '../lib/get-gigs';

test('it should return an array of results', t => {
  const json = {
    rss: {
      channel: [{
        item: [
          {title: 'foo', description: 'bar', link: 'baz'},
          {title: 'zoo', description: 'zar', link: 'zaz'},
          {title: 'xoo', description: 'xar', link: 'xaz'}
        ]
      }]
    }
  };

  t.true(Array.isArray(getGigs(json)));
  t.deepEqual(3, getGigs(json).length);
});
