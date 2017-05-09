/* global Headers, fetch */
import 'isomorphic-fetch';
import createDebug from 'debug';

const debug = createDebug('server:api');

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export default (url, options = {}) => {
  debug(`GET ${url}`);
  return fetch(url, {
    method: 'get',
    headers: new Headers({
      Accept: 'application/json'
    }),
    ...options
  })
  .then(handleErrors)
  .then(response => response.json())
  .catch(err => { throw Error(`There was a problem making the request: ${err.message}`); });
};
