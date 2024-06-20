import logger from '@/libs/Logger';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Example logging
  logger.info('Received request', { method: req.method, path: req.url });

  // Your API logic here
  res.status(200).json({ message: 'Success' });
}