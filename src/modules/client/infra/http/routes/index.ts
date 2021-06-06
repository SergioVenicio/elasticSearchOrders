import { Router } from "express";

import ListClientController from "../../../useCases/ListClientUseCase/ListClientController";
import CreateClientController from "../../../useCases/CreateClientUseCase/CreateClientController";
import UpdateClientController from "../../../useCases/UpdateClientUseCase/UpdateClientController";

const clientRouter = Router();

const listClientController = new ListClientController();
const createClientController = new CreateClientController();
const updateClientController = new UpdateClientController();

clientRouter.get('/', async (req, res) => await listClientController.handle(req, res));
clientRouter.post('/', async (req, res) => await createClientController.handle(req, res));
clientRouter.put('/:id', async (req, res) => await updateClientController.handle(req, res));

export default clientRouter;