import createDebug from 'debug';
import callGet from '../utils/callGet.js';

const debug = createDebug('server:api');

const getDirectories = termId => {
  debug(`Fetching vocabulary for term id: ${termId}`);
  return callGet(`http://d6api.gaia.com/vocabulary/1/${termId}`);
};

const getVideos = termId => {
  debug(`Fetching videos for term id: ${termId}`);
  return callGet(`http://d6api.gaia.com/videos/term/${termId}`);
};

const getMedia = nodeId => {
  debug(`Fetching media for node id: ${nodeId}`);
  return callGet(`http://d6api.gaia.com/media/${nodeId}`);
};

export default {
  getDirectories,
  getVideos,
  getMedia
};
