import { IClient } from "../../entities";

interface IListClientUseCase {
  execute(): Promise<IClient[]>
}

export default IListClientUseCase;