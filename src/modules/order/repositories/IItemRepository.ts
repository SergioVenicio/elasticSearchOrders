import IItem from "../entities/IItem";
import IItemDTO from "../entities/IItemDTO";

interface IItemRepository {
  create({name, description, amount, price}: IItemDTO): Promise<IItem>
  update({name, description, amount, price}: IItemDTO): Promise<IItem>
  list(): Promise<IItem[]>
  getById(id: string): Promise<IItem>
}

export default IItemRepository;