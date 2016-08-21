'use strict';

import test from 'ava';
import getCompanyName from '../lib/get-company-name';

test('it should return the company name', t => {
  t.deepEqual('Evil Corp', getCompanyName({'a10:author': [{'a10:name': ['Evil Corp']}]}));
});

test('it should return null', t => {
  t.deepEqual(null, getCompanyName({}));
});
