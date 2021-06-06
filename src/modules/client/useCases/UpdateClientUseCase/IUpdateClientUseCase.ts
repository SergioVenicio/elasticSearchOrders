import { IClient } from "../../entities";

interface IUpdateClientUseCase {
  execute(id: string, name: string, email: string): Promise<IClient>
}

export default IUpdateClientUseCase;