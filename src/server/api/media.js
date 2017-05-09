import _get from 'lodash/get.js';
import GaiaApi from './gaia.js';
import { findLongestPreviewDuration } from '../utils/mediaHelpers.js';

export const getLongestPreviewMediaUrl = async termId => {
  const vocabulary = await GaiaApi.getDirectories(termId);
  const videos = await GaiaApi.getVideos(_get(vocabulary, 'terms[0].tid', null));
  const longest = findLongestPreviewDuration(videos.titles);
  const media = await GaiaApi.getMedia(longest.preview.nid);

  const details = {
    bcHLS: media.mediaUrls.bcHLS,
    titleNid: parseInt(longest.nid, 10),
    previewNid: parseInt(longest.preview.nid, 10),
    previewDuration: parseInt(longest.preview.duration, 10)
  };

  return Promise.resolve({
    ...details
  });
};

export default {
  getLongestPreviewMediaUrl
};
