import { IClient } from "../../entities";

import IClientRepository from "../../repositories/IClientRepository";

import ICreateClientUseCase from "./ICreateClientUseCase";

import ClientRepository from "../../repositories/ClientRepository";

class CreateClientUseCase implements ICreateClientUseCase {
  private repository: IClientRepository;

  constructor() {
    this.repository = new ClientRepository();
  }

  async execute(name: string, email: string): Promise<IClient> {
    return this.repository.create(name, email);
  }
}

export default CreateClientUseCase;