import { Request, Response } from 'express';

import IListItemsUseCase from './IListItemsUseCase';
import ListItemsUseCase from './ListItemsUseCase';


class ListItemsController {
  private useCase: IListItemsUseCase;

  constructor() {
    this.useCase = new ListItemsUseCase();
  }

  async handle(_: Request, response: Response) {
    const items = await this.useCase.execute();
    return response.json({
      items
    });
  }
}

export default ListItemsController;