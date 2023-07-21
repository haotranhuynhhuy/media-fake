import axios, { AxiosError, AxiosInstance } from "axios";
import { Config } from "../types";

export class HttpClient {
  oauth2: AxiosInstance;

  alreadyRefresh = false;

  config: Config = {
    loginPath: "/login",
    accessTokenStorageKey: "access-token",
    refreshTokenStorageKey: "refresh-token",
    refreshTokenEndpoint: "/refresh-token",
    oauth20: {
      tokenType: "Bearer",
    },
  };

  subscribers: Function[] = [];

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

    axiosIns.interceptors.response.use(
      (response) => response,
      async (error) => {
        const { config, response } = error;
        if (response?.status === 401 && this.alreadyRefresh === false) {
          this.alreadyRefresh = true;

          this.refreshToken()
            .then((res) => {
              this.alreadyRefresh = false;
              this.setAccessToken(res.data.data?.accessToken);
            })
            .catch((err) => {
              console.log(err);
              this.clearToken();
              this.redirectLogin();
            });

          return new Promise((resolve) => {
            this.subscribe((accessToken: string) => {
              config.headers.Authorization = `${accessToken}`;
              resolve(this.oauth2(config));
            });
          });
        }
        if (response.status === 500) {
          alert("Kết nối bị gián đoạn, vui lòng thử lại sau ít phút!");
        }
        return Promise.reject(error);
      }
    );
    return axiosIns;
  }

  onAccessTokenFetched(accessToken: string) {
    this.subscribers = this.subscribers.filter((callback: any) =>
      callback(accessToken)
    );
  }

  subscribe(callback: any) {
    this.subscribers.push(callback);
  }

  getAccessToken() {
    return localStorage.getItem(this.config.accessTokenStorageKey);
  }
  setAccessToken(token: string) {
    return localStorage.setItem(this.config.accessTokenStorageKey, token);
  }
  getRefreshToken() {
    return localStorage.getItem(this.config.refreshTokenStorageKey);
  }
  setRefreshToken(token: string) {
    return localStorage.setItem(this.config.refreshTokenStorageKey, token);
  }
  refreshToken() {
    this.setAccessToken(this.getRefreshToken() as string);
    return this.oauth2.post(this.config.refreshTokenEndpoint);
  }

  clearToken() {
    const keysToRemove = [
      this.config.accessTokenStorageKey,
      this.config.refreshTokenStorageKey,
    ];
    keysToRemove.forEach((k) => localStorage.removeItem(k));
  }
  redirectLogin() {
    window.location.href = this.config.loginPath || "/login";
  }
}

export const HttpClientMethod = new HttpClient(
  axios.create({
    baseURL: "http://localhost:4000",
  })
);
