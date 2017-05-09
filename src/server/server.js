import express from 'express';
import path from 'path';
import createDebug from 'debug';
import attachRoutes from './routes/index.js';
import logger from './utils/logger.js';
import errorHandler from './utils/errorHandler.js';

const debug = createDebug('server');
const error = createDebug('server:error');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger(debug));

attachRoutes(app);

app.use(errorHandler(error));

app.listen(process.env.PORT, () => {
  debug(`Listening on port ${process.env.PORT}`);
});
