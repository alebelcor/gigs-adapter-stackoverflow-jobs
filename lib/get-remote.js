'use strict';

module.exports = function getRemote(json) {
  return typeof json.title === 'string' && json.title.indexOf('(allows remote)') > 0 ||
    typeof json.description === 'string' && json.description.indexOf('Location: Global (remote)') > 0;
};
