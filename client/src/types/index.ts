export interface Config {
  loginPath: string;
  accessToken: string;
  oauth2: {
    tokenType: "Bearer";
  };
}

export interface SaleOffProps {
  src: string;
  alt: string;
  saleOff: string;
  name: string;
  remaining: string;
}
export interface HowComponentProps {
  icon: string;
  title: string;
  desc: string;
  alt: string;
}
export interface PopularProps {
  src: string;
  alt: string;
  title: string;
  location: string;
  price: string;
}
