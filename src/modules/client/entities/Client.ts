import { v4 as uuidv4} from 'uuid';

import IClient from './IClient';
import ClientDTO from './IClientDTO';

class Client implements IClient {
  id: string;
  name: string;
  email: string;

  constructor({id, name, email}: ClientDTO) {
    this.id = id ? id : uuidv4();
    this.name = name;
    this.email = email;
  }
}

export default Client;