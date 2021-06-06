import IItem from "../../entities/IItem";
import IItemDTO from "../../entities/IItemDTO";

import IItemRepository from "../../repositories/IItemRepository";
import ItemRepository from "../../repositories/ItemRepository";
import ICreateItemUseCase from "./ICreateItemUseCase";

class CreateItemUseCase implements ICreateItemUseCase {
  private repository: IItemRepository;

  constructor() {
    this.repository = new ItemRepository();
  }

  async execute({ name, description, price, amount }: IItemDTO): Promise<IItem> {
    return await this.repository.create({name, description, price, amount});
  }

}

export default CreateItemUseCase;