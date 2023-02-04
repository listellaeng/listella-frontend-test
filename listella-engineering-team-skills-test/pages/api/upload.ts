import { upload } from '@/services/upload';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ServerErrorMessage } from './server.constants';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;
  switch (req.method) {
    case 'POST':
      try {
        const uploadedFile = await upload();
        res.status(200).json(uploadedFile);
      } catch (err: any) {
        const statusCode = err?.statusCode ?? 500;
        res.status(statusCode).json({
          message: ServerErrorMessage.GENERIC_500,
        });
      }
    default:
      res.status(400).json({ message: ServerErrorMessage.METHOD_NOT_ALLOWED });
  }
}
