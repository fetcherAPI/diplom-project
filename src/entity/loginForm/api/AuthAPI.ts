import axios, { AxiosResponse } from "axios";
import { IAuthBody } from "../model/types/AuthType";
export class AuthAPI {
  static async Auth(param: IAuthBody): Promise<AxiosResponse> {
    return await axios.post("http://localhost:4444/auth/login", param);
  }
}
