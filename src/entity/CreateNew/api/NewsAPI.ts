import { AxiosResponse } from "axios";
import { INews } from "../model/types";
import api from "shared/config/axiosCongig/axiosCongig";
export class NewsAPI {
  static async createNews(param: INews): Promise<AxiosResponse> {
    return await api.post("/news", param);
  }
}
