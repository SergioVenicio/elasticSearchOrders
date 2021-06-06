import { Client, IClient } from "../entities";

import IElastcSearch from "../../../shared/elasticSearch/IElasticSearch";
import ElasticSearch from "../../../shared/elasticSearch/ElasticSearch";

import IClientRepository from "./IClientRepository";


class ClientRepository implements IClientRepository {
  private esClient: IElastcSearch;

  constructor() {
    this.esClient = new ElasticSearch('clients');
  }

  async create(name: string, email: string): Promise<IClient> {
    const newClient = new Client({ name, email });
    await this.esClient.create(newClient.id, newClient);
    return newClient
  }

  async update(id: string, name: string, email: string): Promise<Client> {
    const client = await this.getById(id) as IClient;

    if (!client) {
      throw new Error('Client donst exist!');
    }

    Object.assign(client, {name, email});
    await this.esClient.update(id, client);
    return client;
  }

  async list(): Promise<IClient[]> {
    return await this.esClient.search({});
  }

  async getById(id: string): Promise<IClient> {
    const response = await this.esClient.search({
      query: {
        match: {
          id
        }
      }
    });
    return response[0];
  }

  async getByEmail(email: string): Promise<IClient> {
    return await this.esClient.search({
      query: {
        math: {email}
      }
    });
  }
  
  async getByName(name: string): Promise<IClient[]> {
    return await this.esClient.search({
      query: {
        math: {name}
      }
    });
  }

}

export default ClientRepository;