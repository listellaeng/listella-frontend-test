import { getMediaAlbumContents } from '@/services/nasa-api';
import { TNASAApiResponse } from '@/services/nasa-api.types';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ServerErrorMessage } from '../../server.constants';

type NasaSearchData = {};
type ErrorMessage = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TNASAApiResponse<NasaSearchData> | ErrorMessage>
) {
  const { query } = req;
  switch (req.method) {
    case 'GET':
      try {
        const { album_name, page } = query;
        const albumName = typeof album_name === 'string' ? album_name : '';
        const pageNum = typeof page === 'string' ? Number(page) : undefined;
        const data = await getMediaAlbumContents(albumName, pageNum);
        res.status(200).json(data);
      } catch (err: any) {
        const statusCode = err?.statusCode ?? 500;
        res
          .status(statusCode)
          .json({ message: ServerErrorMessage.GENERIC_500 });
      }
    default:
      res.status(400).json({ message: ServerErrorMessage.METHOD_NOT_ALLOWED });
  }
}
