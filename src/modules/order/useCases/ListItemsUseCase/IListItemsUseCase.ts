import IItem from "../../entities/IItem";

interface IListItemsUseCase {
  execute(): Promise<IItem[]>
}

export default IListItemsUseCase