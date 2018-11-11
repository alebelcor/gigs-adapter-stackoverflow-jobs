'use strict';

module.exports = json => {
  return (typeof json.title === 'string' && json.title.indexOf('(allows remote)') !== -1) ||
    (typeof json.description === 'string' && json.description.indexOf('Location: Global (remote)') !== -1);
};
