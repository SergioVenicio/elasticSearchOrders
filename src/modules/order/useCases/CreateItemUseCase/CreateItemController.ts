import { Request, Response } from 'express';

import CreateItemUseCase from './CreateItemUseCase';
import ICreateItemUseCase from './ICreateItemUseCase';


class CreateItemController {
  private useCase: ICreateItemUseCase;

  constructor() {
    this.useCase = new CreateItemUseCase();
  }

  async handle(request: Request, response: Response) {
    const {name, description, amount, price} = request.body;
    const item = await this.useCase.execute({name, description, amount, price});
    return response.status(201).json({
      ...item
    });
  }
}

export default CreateItemController;