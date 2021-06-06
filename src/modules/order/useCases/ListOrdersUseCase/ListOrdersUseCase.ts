import IOrder from "../../entities/IOrder";
import IOrderRepository from "../../repositories/IOrderRepository";
import IListOrdersUseCase from "./IListOrdersUseCase";

import OrderRepository from "../../repositories/OrderRepository";

class ListOrderUseCase implements IListOrdersUseCase {
  private repository: IOrderRepository;

  constructor() {
    this.repository = new OrderRepository();
  }

  async execute(): Promise<IOrder[]> {
    return await this.repository.list();    
  }
}

export default ListOrderUseCase;