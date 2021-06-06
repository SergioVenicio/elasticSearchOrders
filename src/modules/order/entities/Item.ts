import { v4 as uuidv4 } from 'uuid';
import IItem from './IItem';

import IItemDTO from "./IItemDTO";

class Item implements IItem {
  id: string;
  name: string;
  description: string;
  price: number;
  amount: number;

  constructor({id, name, description, price, amount}: IItemDTO) {
    this.id = id ? id : uuidv4();
    this.name = name;
    this.description = description;
    this.price = price;
    this.amount = amount;
  }

  calcTotal(): number {
    return this.price * this.amount;
  }
}

export default Item;