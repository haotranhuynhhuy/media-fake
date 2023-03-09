export interface Config {
  loginPath: string;
  accessToken: string;
  oauth2: {
    tokenType: "Bearer";
  };
}

export interface SaleOffProps {
  data: {
    src: string;
    alt: string;
    saleOff: string;
    name: string;
    remaining: string;
  };
}
