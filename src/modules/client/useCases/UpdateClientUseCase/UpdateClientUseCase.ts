import { IClient } from "../../entities";

import IUpdateClientUseCase from "./IUpdateClientUseCase";
import IClientRepository from "../../repositories/IClientRepository";

import ClientRepository from "../../repositories/ClientRepository";

class UpdateClientUseCase implements IUpdateClientUseCase {
  private repository: IClientRepository;

  constructor() {
    this.repository = new ClientRepository();
  }

  async execute(id: string, name: string, email: string): Promise<IClient> {
    return this.repository.update(id, name, email);
  }
}

export default UpdateClientUseCase;