export interface IBasketShema {
  OrdersInBasket: Array<IOrderInBasket>;
}

export interface IOrderInBasket {
  id: string;
  isAddedBasket: boolean;
  title: string;
}
