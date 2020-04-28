import {Request, Response, NextFunction} from 'express';
import {BAD_PATH, SERVER_NOT_FOUND} from '../constants';

export function getBadPathController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.status(SERVER_NOT_FOUND).json({
    ...BAD_PATH,
  });
}

export default {getBadPathController};
