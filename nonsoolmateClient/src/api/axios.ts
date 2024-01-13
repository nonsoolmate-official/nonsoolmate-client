import axios, { AxiosInstance } from "axios";

export const client: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `${import.meta.env.VITE_ACCESS_TOKEN}`,
  },
});
