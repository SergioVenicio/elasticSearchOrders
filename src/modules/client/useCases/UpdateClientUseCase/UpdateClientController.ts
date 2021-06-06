import { Request, Response } from "express";

import IUpdateClientUseCase from "./IUpdateClientUseCase";
import UpdateClientUseCase from "./UpdateClientUseCase";

class UpdateClientController {
  private useCase: IUpdateClientUseCase;

  constructor() {
    this.useCase = new UpdateClientUseCase();
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;
    const { name,  email } = request.body;
    const newUser = await this.useCase.execute(id, name, email);
    return response.status(201).json({
      ...newUser
    });
  }
}

export default UpdateClientController;