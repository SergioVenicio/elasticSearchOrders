import { v4 as uuidv4 } from 'uuid';

import { IClient } from "../../client/entities"
import IItem from "./IItem"
import IOrderDTO from './IOrderDTO';
import Item from './Item';

class Order {
  id: string
  client: IClient
  items: IItem[]
  total?: number

  constructor({id, client, items, total}: IOrderDTO) {
    this.id = id ? id: uuidv4();
    this.client = client;
    this.items = items ? items.map(i => new Item({...i})): [];
    this.total = total && this.items ? total: this.items?.reduce(
      (acc, item) => acc + item?.calcTotal(), 0
    );
  }
}

export default Order;