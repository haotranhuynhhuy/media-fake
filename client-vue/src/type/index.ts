export interface Config {
  loginPath?: string;
  accessTokenStorageKey: string;
  refreshTokenStorageKey: string;
  refreshTokenEndpoint: string;
  oauth20?: {
    tokenType: "Basic" | "Bearer";
  };
}
export interface InputProps {
  id: string;
  placeholder?: string;
  inputType?: string;
  length?: number;
  modelValue?: string;
  mode?: any;
}
