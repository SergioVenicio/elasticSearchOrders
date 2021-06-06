import { IClient } from "../../entities";

interface ICreateClientUseCase {
  execute(name: string, email: string): Promise<IClient>
}

export default ICreateClientUseCase;