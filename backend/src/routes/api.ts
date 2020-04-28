import { Router } from 'express';
import { getTokenController } from '../controllers/getTokenController';
import controllers from '../controllers';
import {
  getStashItemController,
  addStashItemController,
} from '../controllers/stashItemController';

const apiRouter = Router();

//Route definitions
apiRouter.get('/getToken', getTokenController);
apiRouter.get('/stashItem', getStashItemController);
apiRouter.post('/stashItem/add', addStashItemController);
apiRouter.all('*', controllers.errorControllers.getBadPathController);

export default apiRouter;
