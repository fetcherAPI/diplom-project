import { IOrder } from "./OrderType";

export interface IDataToSendOrder {
  username: string;
  email: string;
  telNumber: string;
  orders: Array<IOrder>;
}
