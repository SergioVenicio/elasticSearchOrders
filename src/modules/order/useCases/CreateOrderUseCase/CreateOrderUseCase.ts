import IOrder from "../../entities/IOrder";
import IOrderDTO from "../../entities/IOrderDTO";
import IOrderRepository from "../../repositories/IOrderRepository";
import OrderRepository from "../../repositories/OrderRepository";
import ICreateOrderUseCase from "./ICreateOrderUseCase";

class CreateOrderUseCase implements ICreateOrderUseCase {
  private repository: IOrderRepository;

  constructor() {
    this.repository = new OrderRepository();
  }

  async execute({client, items}: IOrderDTO): Promise<IOrder> {
    return await this.repository.create({client, items});
  }
}

export default CreateOrderUseCase;