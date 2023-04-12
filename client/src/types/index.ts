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
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  checkAuth: () => Promise<void>;
  logoutClient: () => void;
}
export interface FormType {
  username: string;
  password: string;
}
