import IItem from "../../entities/IItem";
import IItemDTO from "../../entities/IItemDTO";

interface ICreateItemUseCase {
  execute({name, description, price, amount}: IItemDTO): Promise<IItem>
}

export default ICreateItemUseCase