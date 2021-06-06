import { Request, Response } from "express";

import ICreateClientUseCase from "./ICreateClientUseCase";
import CreateClientUseCase from "./CreateClientUseCase";

class CreateClientController {
  private useCase: ICreateClientUseCase;

  constructor() {
    this.useCase = new CreateClientUseCase();
  }

  async handle(request: Request, response: Response): Promise<Response> {
    if (!request.body) {
      return response.status(400).json({
        "error": "name and email fields is required!"
      });
    }

    const { name,  email } = request.body;
    const newUser = await this.useCase.execute(name, email);
    return response.status(201).json({
      ...newUser
    });
  }
}

export default CreateClientController;