import { Request, Response } from 'express';

import IListOrdersUseCase from './IListOrdersUseCase';
import ListOrderUseCase from './ListOrdersUseCase';

class ListOrdersController {
  private useCase: IListOrdersUseCase;

  constructor() {
    this.useCase = new ListOrderUseCase();
  }

  async handle(request: Request, response: Response) {
    const orders = await this.useCase.execute();
    return response.json({
        orders
    });
  }
}

export default ListOrdersController;