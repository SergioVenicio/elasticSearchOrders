interface IItem {
  id: string;
  name: string;
  description: string;
  price: number;
  amount: number;

  calcTotal(): number;
}

export default IItem;