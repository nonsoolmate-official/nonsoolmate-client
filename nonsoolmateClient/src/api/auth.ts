import { client } from "./axios";

const ACCESS_TOKEN = "token";
const REFREH_TOKEN = "refresh";

export const getToken = () => {
  return sessionStorage.getItem(ACCESS_TOKEN);
};

export const setToken = (token: string) => {
  sessionStorage.setItem(ACCESS_TOKEN, token);
};

export const removeToken = () => {
  sessionStorage.removeItem(ACCESS_TOKEN);
};

export const getRefreshToken = () => {
  return sessionStorage.getItem(REFREH_TOKEN);
};

export const setRefreshToken = (token: string) => {
  sessionStorage.setItem(REFREH_TOKEN, token);
};

client.interceptors.request.use((config) => {
  const accessToken = getToken();
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});
