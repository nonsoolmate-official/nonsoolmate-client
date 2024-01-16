import axios, { AxiosInstance } from "axios";
import { getCookie } from "./cookie";

export const client: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${getCookie("accessToken")}`,
  },
});
