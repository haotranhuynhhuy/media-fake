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
  email?: string;
  confirmPassword?: string;
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

export type OptionsChild = {
  id?: number;
  name?: string;
  acronym?: string;
  icon?: string;
  slug?: string;
  click?: () => void;
};
