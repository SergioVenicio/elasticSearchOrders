import IOrder from "../../entities/IOrder";
import IOrderDTO from "../../entities/IOrderDTO";

interface ICreateOrderUseCase {
  execute({client, items}: IOrderDTO): Promise<IOrder>
}

export default ICreateOrderUseCase