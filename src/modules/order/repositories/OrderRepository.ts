import IElastcSearch from "../../../shared/elasticSearch/IElasticSearch";
import ElasticSearch from "../../../shared/elasticSearch/ElasticSearch";

import IOrderRepository from "./IOrderRepository";
import IOrderDTO from "../entities/IOrderDTO";
import IOrder from "../entities/IOrder";
import Order from "../entities/Order";
import Item from "../entities/Item";


class OrderRepository implements IOrderRepository {
  private esClient: IElastcSearch;

  constructor() {
    this.esClient = new ElasticSearch('orders');
  }

  async create({client, items}: IOrderDTO): Promise<IOrder> {
    const parsedItems = items?.map(i => new Item({...i}))
    const order = new Order({ client,  items: parsedItems});
    await this.esClient.create(order.id, order);
    return order
  }

  async update({id, client, items}: IOrderDTO): Promise<IOrder> {
    const order = await this.getById(id as string) as IOrder;

    if (!order) {
      throw new Error('Order donst exist!');
    }

    Object.assign(client, {client, items});
    await this.esClient.update(id as string, order);
    return order;
  }

  async list(): Promise<IOrder[]> {
    const response = await this.esClient.search({}) as IOrder[];
    return response.map(order => new Order({...order}))
  }

  async getById(id: string): Promise<IOrder> {
    const response = await this.esClient.search({
      query: {
        match: {
          id
        }
      }
    });
    return response[0];
  }
}

export default OrderRepository;