'use strict';

module.exports = function getRemote(json) {
  return Boolean(json.title[0]) && json.title[0].indexOf('(allows remote)') > 0 ||
    Boolean(json.description[0]) && json.description[0].indexOf('Location: Global (remote)') > 0;
};
