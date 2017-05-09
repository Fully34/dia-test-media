export default debug => (req, res, next) => {
  debug(`${req.method} ${req.url}`);
  next();
};
