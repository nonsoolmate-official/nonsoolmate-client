import axios, { AxiosInstance } from "axios";

const ACCESS_TOKEN = "token";

export const getToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

export const setToken = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN, token);
};

export const removeToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};

export const client: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${getToken()}`,
  },
});
