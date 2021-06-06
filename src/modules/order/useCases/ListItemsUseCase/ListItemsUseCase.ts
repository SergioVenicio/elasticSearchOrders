import IItem from "../../entities/IItem";

import IItemRepository from "../../repositories/IItemRepository";
import ItemRepository from "../../repositories/ItemRepository";
import IListItemsUseCase from "./IListItemsUseCase";

class ListItemsUseCase implements IListItemsUseCase {
  private repository: IItemRepository;

  constructor() {
    this.repository = new ItemRepository();
  }

  async execute(): Promise<IItem[]> {
    return await this.repository.list();
  }

}

export default ListItemsUseCase;