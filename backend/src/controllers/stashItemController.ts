import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import prisma from '../prisma';
import { SERVER_BAD_REQUEST, BAD_REQUEST, API_SECRET } from '../constants';
import { productLookup } from '../helpers/lookup';

type RequestBodyStashItem = {
  name?: string;
  price?: number;
};

export let getStashItemController = async (req: Request, res: Response) => {
  let requestToken = req.headers['x-auth-token'];
  try {
    if (!requestToken) {
      res.status(SERVER_BAD_REQUEST).json({
        ...BAD_REQUEST,
      });
      return;
    }
    let payloadToken = jwt.verify(String(requestToken), API_SECRET);
    let stashItems = await prisma.stashItem.findMany({
      where: {
        token: payloadToken,
      },
      select: {
        name: true,
        price: true,
        result: {
          select: {
            url: true,
            price: true,
          },
        },
      },
    });
    res.send(stashItems);
  } catch {
    res.status(SERVER_BAD_REQUEST).json({
      ...BAD_REQUEST,
    });
    return;
  }
};

export let addStashItemController = async (req: Request, res: Response) => {
  let requestToken = req.headers['x-auth-token'];
  try {
    if (!requestToken) {
      res.status(SERVER_BAD_REQUEST).json({
        ...BAD_REQUEST,
      });
      return;
    }
    let requestBody: RequestBodyStashItem = req.body;
    if (!requestBody.name || !requestBody.price) {
      res.status(SERVER_BAD_REQUEST).json({
        ...BAD_REQUEST,
      });
      return;
    }
    let payloadToken = jwt.verify(String(requestToken), API_SECRET);
    let productRecommendation = productLookup({
      name: requestBody.name,
      price: requestBody.price,
      source: 'https://amazon.com',
    });

    // let stashItem = await prisma.stashItem.create({
    //   data: {
    //     name: requestBody.name,
    //     price: requestBody.price,
    //     token: payloadToken.toString(),
    //     result: {
    //       create: {
    //         price: 10,
    //         url: 'google.com',
    //       },
    //     },
    //   },
    //   select: {
    //     name: true,
    //     price: true,
    //     result: {
    //       select: {
    //         url: true,
    //         price: true,
    //       },
    //     },
    //   },
    // });
    // res.send(stashItem);
  } catch {
    res.status(SERVER_BAD_REQUEST).json({
      ...BAD_REQUEST,
    });
    return;
  }
};

export default {
  getStashItemController,
  addStashItemController,
};
