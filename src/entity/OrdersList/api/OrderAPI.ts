import { AxiosResponse } from "axios";
import api from "shared/config/axiosCongig/axiosCongig";
import { IOrderCommonData } from "../model/Order";

export class OrderAPI {
  static async getOrdersList(): Promise<AxiosResponse> {
    return await api.get<Array<IOrderCommonData>>("/order");
  }
  static async deleteOrderById(id: string): Promise<AxiosResponse> {
    return await api.delete<Array<IOrderCommonData>>(`/order/${id}`);
  }
}
