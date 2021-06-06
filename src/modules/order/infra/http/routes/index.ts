import { Router } from "express";

import CreateItemController from "../../../useCases/CreateItemUseCase/CreateItemController";

import CreateOrderController from "../../../useCases/CreateOrderUseCase/CreateOrderController";
import ListItemsController from "../../../useCases/ListItemsUseCase/ListItemsController";
import ListOrdersController from "../../../useCases/ListOrdersUseCase/ListOrdersController";

const itemRoutes = Router();
const orderRoutes = Router();

const listItemsController = new ListItemsController();
const createItemController = new CreateItemController();

const createOrderController = new CreateOrderController();
const listordersController = new ListOrdersController();

itemRoutes.get('/', async (req, res) => await listItemsController.handle(req, res))
itemRoutes.post('/', async (req, res) => await createItemController.handle(req, res))

orderRoutes.get('/', async (req, res) => await listordersController.handle(req, res));
orderRoutes.post('/', async (req, res) => await createOrderController.handle(req, res));


export { 
  itemRoutes,
  orderRoutes
};