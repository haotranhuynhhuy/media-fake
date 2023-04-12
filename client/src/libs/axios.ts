import axios, { AxiosInstance } from "axios";
import { Config } from "../types";

export class HttpClient {
  oauth2: AxiosInstance;
  config: Config = {
    accessToken: "access-token",
    oauth2: {
      tokenType: "Bearer",
    },
  };
  constructor(axiosIns: AxiosInstance, config?: Config) {
    this.config = Object.assign(this.config, config);
    this.oauth2 = this.initOauth2(axiosIns);
  }

  initOauth2(axiosIns: AxiosInstance) {
    axiosIns.interceptors.request.use(
      (config) => {
        const accessToken = this.getAccessToken();
        if (accessToken && config.headers) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => console.log(error)
    );
    return axiosIns;
  }

  getAccessToken() {
    return localStorage.getItem(this.config.accessToken);
  }
  setAccessToken(token: string) {
    return localStorage.setItem(this.config.accessToken, token);
  }
  clearToken() {
    localStorage.removeItem(this.config.accessToken);
  }
}

export const HttpClientMethod = new HttpClient(
  axios.create({
    baseURL: "http://localhost:8080/api",
  })
);
