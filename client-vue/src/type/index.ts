export interface Config {
  loginPath?: string;
  accessTokenStorageKey: string;
  refreshTokenStorageKey: string;
  refreshTokenEndpoint: string;
  oauth20?: {
    tokenType: "Basic" | "Bearer";
  };
}
