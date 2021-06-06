import { Request, Response } from "express";
import IListClientUseCase from "./IListClientUseCase";
import ListClientUseCase from "./ListClientUseCase";

class ListClientController {
  private useCase: IListClientUseCase;

  constructor() {
    this.useCase = new ListClientUseCase();
  }

  async handle(_: Request, response: Response): Promise<Response> {
    const clients = await this.useCase.execute();
    return response.json({
      clients
    })
  }
}

export default ListClientController;