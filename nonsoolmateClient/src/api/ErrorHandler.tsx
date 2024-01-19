import { client } from "./axios";
import { getCookie } from "./cookie";

export const ErrorHandler = ({ children }: { children: React.ReactNode }) => {
  client.interceptors.request.use(
    (request) => {
      const accessToken = getCookie("accessToken");
      if (accessToken) {
        request.headers.Authorization = `Bearer ${accessToken}`;
      }
      return request;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  client.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 403) {
        const token = getCookie("accessToken");
        console.log("here");

        client.defaults.headers.common.Authorization = `Bearer ${token}`;
        const originalRequest = error.config;
        return client(originalRequest);
      }
      return Promise.reject(error);
    },
  );

  return <>{children}</>;
};
