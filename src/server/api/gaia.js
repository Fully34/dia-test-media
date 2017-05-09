import createDebug from 'debug';
import callGet from '../utils/callGet.js';

const debug = createDebug('server:api');

/**
 * Gets the Gaia video directories metadata by term id.
 *
 * @param      {number}  termId  The term identifier
 * @return     {Promise}  Promise resolving the directories.
 */
const getDirectories = termId => {
  debug(`Fetching vocabulary for term id: ${termId}`);
  return callGet(`http://d6api.gaia.com/vocabulary/1/${termId}`);
};

/**
 * Gets the Gaia videos metadata by term id.
 *
 * @param      {number}  termId  The term identifier
 * @return     {Promise}  Promise resolving the videos.
 */
const getVideos = termId => {
  debug(`Fetching videos for term id: ${termId}`);
  return callGet(`http://d6api.gaia.com/videos/term/${termId}`);
};

/**
 * Gets the Gaia media metadata by node id.
 *
 * @param      {number}  nodeId  The node identifier
 * @return     {Promise}  Promise resolving the media.
 */
const getMedia = nodeId => {
  debug(`Fetching media for node id: ${nodeId}`);
  return callGet(`http://d6api.gaia.com/media/${nodeId}`);
};

export default {
  getDirectories,
  getVideos,
  getMedia
};
