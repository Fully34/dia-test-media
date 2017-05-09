import _get from 'lodash/get.js';
import createDebug from 'debug';

export const findLongestPreviewDuration = titles => {
  if (!Array.isArray(titles)) return;
  if (titles.length === 0) return;

  const firstValid = titles.find(title => parseInt(_get(title, 'preview.duration', 0), 10) > 0);
  if (firstValid === undefined) return;

  return titles.reduce((longest, title) => {
    try {
      const current = parseInt(_get(title, 'preview.duration', 0), 10);
      const ceiling = parseInt(_get(longest, 'preview.duration', 0), 10);
      
      if (current > ceiling) return title;
    } catch (err) {
      debug(`There was a problem parsing a title: ${err.message}`);
    }

    return longest;
  }, firstValid);
};

export default {
  findLongestPreviewDuration
};
