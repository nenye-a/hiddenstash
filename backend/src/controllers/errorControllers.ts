import { Request, Response } from 'express';

import { BAD_PATH, SERVER_NOT_FOUND } from '../constants';

export function getBadPathController(_: Request, res: Response) {
  res.status(SERVER_NOT_FOUND).json({
    ...BAD_PATH,
  });
}

export default { getBadPathController };
