import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { API_SECRET } from '../constants';

export let getTokenController = async (req: Request, res: Response) => {
  let randomNumber = Math.random();
  let authToken = jwt.sign(randomNumber.toString(), API_SECRET);
  res.send({ token: authToken });
};
