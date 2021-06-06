import { IClient } from "../../client/entities"
import IItem from "./IItem"

interface IOrderDTO {
  id?: string
  client: IClient
  items: IItem[]
  total?: number
}

export default IOrderDTO;