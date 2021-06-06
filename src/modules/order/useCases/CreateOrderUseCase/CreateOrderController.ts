import { Request, Response } from 'express';

import CreateOrderUseCase from "./CreateOrderUseCase";
import ICreateOrderUseCase from "./ICreateOrderUseCase";

class CreateOrderController {
  private useCase: ICreateOrderUseCase;

  constructor() {
    this.useCase = new CreateOrderUseCase();
  }

  async handle(request: Request, response: Response) {
    const { client, items } = request.body;

    if (!client) {
      return response.status(400).json({
        error: "Client field is required!"
      });
    }

    if (!items) {
      return response.status(400).json({
        error: "Items field is required!"
      });
    }

    const order = await this.useCase.execute({client, items});
    return response.status(201).json({
        order
    });
  }
}

export default CreateOrderController;