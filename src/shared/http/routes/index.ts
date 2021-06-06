import { Request, Response, Router } from "express";
import 'express-async-errors';

import clientRouter from '../../../modules/client/infra/http/routes';
import { itemRoutes, orderRoutes } from '../../../modules/order/infra/http/routes';

const mainRouter = Router();

mainRouter.get('/', (request: Request, response: Response) => {
  response.json({
    message: "OK"
  })
});

mainRouter.use('/items', itemRoutes);
mainRouter.use('/clients', clientRouter);
mainRouter.use('/orders', orderRoutes);

export { mainRouter };