import { IClient } from "../../entities";
import IClientRepository from "../../repositories/IClientRepository";
import IListClientUseCase from "./IListClientUseCase";

import ClientRepository from "../../repositories/ClientRepository";

class ListClientUseCase implements IListClientUseCase {
  private repository: IClientRepository;

  constructor() {
    this.repository = new ClientRepository();
  }
  
  async execute(): Promise<IClient[]> {
    return await this.repository.list()
  }
  
}

export default ListClientUseCase;