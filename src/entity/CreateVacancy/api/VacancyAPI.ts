import { AxiosResponse } from "axios";
import { IVacancy } from "../model/types";
import api from "shared/config/axiosCongig/axiosCongig";

export class VacancyAPI {
  static async createVacancy(param: IVacancy): Promise<AxiosResponse> {
    return await api.post("/vacancy", param);
  }
  static async getVacancy(): Promise<AxiosResponse> {
    return await api.get("/vacancy");
  }
}
