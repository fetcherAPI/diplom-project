import { createAsyncThunk } from "@reduxjs/toolkit";

import { IAuthBody } from "../types/AuthType";
import { AuthAPI } from "entity/loginForm/api/AuthAPI";
import { message } from "antd";
import { AxiosError } from "axios";
import { errorHandler } from "shared/lib";

export const loginByPassword = createAsyncThunk(
  "auth/loginByUsernamePassword",
  async (param: IAuthBody, { rejectWithValue }) => {
    try {
      const response = await AuthAPI.Auth(param);
      if (!response.data) {
        throw new Error("");
      }
      return response.data;
    } catch (error) {
      message.error(errorHandler(error as AxiosError));
      return rejectWithValue(error);
    }
  }
);
