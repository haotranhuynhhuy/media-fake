export interface Config {
  loginPath: string;
  accessToken: string;
  oauth2: {
    tokenType: "Bearer";
  };
}
