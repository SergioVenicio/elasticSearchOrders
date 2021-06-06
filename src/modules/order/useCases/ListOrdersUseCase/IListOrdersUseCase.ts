import IOrder from "../../entities/IOrder";

interface IListOrdersUseCase {
  execute(): Promise<IOrder[]>
}

export default IListOrdersUseCase