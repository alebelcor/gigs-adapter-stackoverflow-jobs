'use strict';

import test from 'ava';

import getIsRemote from '../lib/get-is-remote';

test('it should return true', t => {
  t.true(getIsRemote({title: 'Librarian (allows remote)'}));
  t.true(getIsRemote({title: 'Receptionist', description: 'A nice position. Location: Global (remote)'}));
});

test('it should return false', t => {
  t.false(getIsRemote({title: 'Foo', description: 'Bar'}));
  t.false(getIsRemote({title: 'Dev', description: 'A super nice position.'}));
});
