import express from 'express';
import { getLongestPreviewMediaUrl } from '../api/media.js';

const router = express.Router();

router.param('tid', (req, res, next, tid) => {
  req.tid = tid; // eslint-disable-line no-param-reassign
  next();
});

router.get('/terms/:tid/longest-preview-media-url', async (req, res, next) => {
  try {
    const ret = await getLongestPreviewMediaUrl(req.tid);
    res.json(ret);
    next();
  } catch (err) {
    next(err);
  }
});

export default router;
