import api from "shared/config/axiosCongig/axiosCongig";
import { IDataToSendOrder } from "../model/types/dataToSendOrderType";

export const sendOrder = async (param: IDataToSendOrder) => {
  const res = await api.post("/order", param);
  return res.data;
};
