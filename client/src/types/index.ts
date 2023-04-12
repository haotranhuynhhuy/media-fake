import { Dispatch, SetStateAction } from "react";

export interface Config {
  loginPath?: string;
  accessTokenStorageKey: string;
  refreshTokenStorageKey: string;
  refreshTokenEndpoint: string;
  oauth20?: {
    tokenType: "Basic" | "Bearer";
  };
}
export interface IAuthContext {
  isAuthenticated: boolean;
  checkAuth: () => void;
  logoutClient: () => void;
}
export interface FormType {
  username: string;
  password: string;
}
export interface UserType {
  id: string;
  fullname: string;
  username: string;
  password: string;
  email: string;
  avatar: string;
  role: string;
  gender: string;
  address: string;
  mobile: string;
  story: string;
  website: string;
  followers: Array<UserType>;
  following: Array<UserType>;
  saved: Array<UserType>;
  accessToken: string;
}
