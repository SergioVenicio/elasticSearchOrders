import { IClient } from "../entities";

interface IClientRepository {
  create(email: string, name: string): Promise<IClient>
  update(id: string, email: string, name: string): Promise<IClient>
  list(): Promise<IClient[]>
  getById(id: string): Promise<IClient>
  getByEmail(email: string): Promise<IClient>
  getByName(name: string): Promise<IClient[]>
}

export default IClientRepository;