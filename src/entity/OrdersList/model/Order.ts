export interface IOrderCommonData {
  _id: string;
  email: string;
  telNumber: string;
  username: string;
  orders: Order[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Order {
  id: string;
  title: string;
  isAddedBasket: boolean;
  _id: string;
}
