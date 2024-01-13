import axios, { AxiosInstance } from "axios";

export const client: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsIm1lbWJlcklkIjoyLCJlbWFpbCI6InRoZGFsc3JiNzlAbmF2ZXIuY29tIiwiaWF0IjoxNzA1MDQwMjU4LCJleHAiOjE3MDU2NDUwNTh9.WIxr69oXK4GTMPGtgYq9hCULPFqv5JXT0HGNCkbUz78",
  },
});
