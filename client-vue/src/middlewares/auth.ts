import constRouter from "../constants/constRouter";
import { httpClient } from "../libs/httpClient";

export const checkNotLogin = () => {
  if (httpClient.getAccessToken()) {
    return constRouter.INTRO.name;
  }
  return null;
};

export const auth = () => {
  if (!httpClient.getAccessToken()) {
    return constRouter.INTRO.name;
  }
  return null;
};
