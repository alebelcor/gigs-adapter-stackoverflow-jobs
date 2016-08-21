'use strict';

module.exports = function getRemote(json) {
  return Boolean(json.title) && json.title.indexOf('(allows remote)') > 0 ||
    Boolean(json.description) && json.description.indexOf('Location: Global (remote)') > 0;
};
