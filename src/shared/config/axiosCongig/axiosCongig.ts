import { errorHandler, tokenAvailability } from "shared/lib";
import { RESPONSE_ERRORS } from "shared/models/enums/errorEmuns";
import { message } from "antd";
import axios from "axios";

const api = axios.create({
  withCredentials: false,
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config: any) => {
  if (config.url.includes("/file/upload")) {
    config.headers["Content-Type"] = "multipart/form-datan";
  }
  if (tokenAvailability()) {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "authentication"
    )}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log("response", response);
    return response;
  },
  (error) => {
    switch (error.response.status) {
      case 401:
        message.error(errorHandler(error));
        throw error;
      case 403:
        message.error(errorHandler(error));
        throw error;
      case 400:
        message.error(errorHandler(error));
        throw error;
      case 500:
        message.error(errorHandler(error));
        throw error;
      default:
        message.error(RESPONSE_ERRORS.UNEXPECTED_ERROR);
    }
  }
);

export default api;
