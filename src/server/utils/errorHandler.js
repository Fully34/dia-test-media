export default debug => (err, req, res, next) => { // eslint-disable-line no-unused-vars
  let message = '';
  if (Array.isArray(err) && err.length) {
    message = err[0].message;
  } else if (err.message) {
    message = err.message;
  }
  res.status(err.status || 500).send(message || 'There was an error');
  debug(err);
};
