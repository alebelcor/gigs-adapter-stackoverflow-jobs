'use strict';

import test from 'ava';
import getRemote from '../lib/get-remote';

test('it should return true', t => {
  t.true(getRemote({title: 'Librarian (allows remote)'}));
  t.true(getRemote({title: 'Receptionist', description: 'A nice position. Location: Global (remote)'}));
});

test('it should return false', t => {
  t.false(getRemote({title: 'Foo', description: 'Bar'}));
  t.false(getRemote({title: 'Dev', description: 'A super nice position.'}));
});
