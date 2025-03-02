import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import emojis from './emojis'
import data from './data/data.route'


const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/data', data)

export default router;
