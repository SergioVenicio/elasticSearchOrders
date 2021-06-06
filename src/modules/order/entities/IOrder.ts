import { IClient } from "../../client/entities"
import IItem from "./IItem"

interface IOrder {
  id: string
  client: IClient
  items: IItem[]
}

export default IOrder;