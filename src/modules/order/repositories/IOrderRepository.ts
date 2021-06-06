import IOrder from "../entities/IOrder";
import IOrderDTO from "../entities/IOrderDTO";

interface IOrderRepository {
  create({client, items}: IOrderDTO): Promise<IOrder>
  update({id, client, items}: IOrderDTO): Promise<IOrder>
  list(): Promise<IOrder[]>
  getById(id: string): Promise<IOrder>
}

export default IOrderRepository;