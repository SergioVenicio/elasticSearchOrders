import ElasticSearch from "../../../shared/elasticSearch/ElasticSearch";
import IElastcSearch from "../../../shared/elasticSearch/IElasticSearch";

import IItem from "../entities/IItem";
import IItemDTO from "../entities/IItemDTO";
import IItemRepository from "./IItemRepository";

import Item from "../entities/Item";

class ItemRepository implements IItemRepository {
  private esClient: IElastcSearch;

  constructor() {
    this.esClient = new ElasticSearch('items');
    
  }
  async create({ name, description, amount, price }: IItemDTO): Promise<IItem> {
    const item = new Item({ name, description, amount, price });
    await this.esClient.create(item.id, item);
    return item;
  }
  
  async update({ id, name, description, amount, price }: IItemDTO): Promise<IItem> {
    const item = await this.getById(id as string);
    if (!item) {
      throw new Error('Item not found!');
    }
    
    Object.assign(item, {name, description, amount, price});
    this.esClient.update(id as string, item);
    return item;
  }
  
  async list(): Promise<IItem[]> {
    const response = await this.esClient.search({}) as IItem[];
    return response;
  }

  async getById(id: string): Promise<IItem> {
    return await this.esClient.search({
      query:  {
        match: id
      }
    });
  }

}

export default ItemRepository;