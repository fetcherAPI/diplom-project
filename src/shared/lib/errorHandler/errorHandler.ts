/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RESPONSE_ERRORS } from "shared/models/enums/errorEmuns";
import { AxiosError } from "axios";

export const errorHandler = (
  error: AxiosError,
  errorLocation?: string,
  status?: number
): string => {
  switch (status || error.response?.status) {
    case 500:
      return (
        //@ts-ignore
        error.response?.data.message || RESPONSE_ERRORS.SERVER_ERROR
      );
    case 401:
      return (
        //@ts-ignore
        error.response?.data.message || RESPONSE_ERRORS.UN_AUTH
      );
    case 400:
      return (
        //@ts-ignore
        error.response?.data.message || ERRRESPONSE_ERRORSORS.BAD_REQUEST
      );
    case 403:
      return (
        //@ts-ignore
        error.response?.data.message || RESPONSE_ERRORS.PERMISSION_DENIDED
      );
    case 404:
      return (
        //@ts-ignore
        error.response?.data.message || RESPONSE_ERRORS.UNKNOWN_URL
      );
    default:
      return RESPONSE_ERRORS.UNEXPECTED_ERROR;
  }
};
