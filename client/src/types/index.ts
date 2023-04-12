import { Dispatch, SetStateAction } from "react";

export interface Config {
  loginPath?: string;
  accessToken: string;
  oauth2: {
    tokenType: "Bearer";
  };
}
export interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  checkAuth: () => Promise<void>;
  logoutClient: () => void;
}
