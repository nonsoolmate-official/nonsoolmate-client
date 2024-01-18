// axiosSetup.js
import axios from "axios";
import { client } from "./axios";
import { getCookie, setCookie } from "./cookie";
import { useEffect } from "react";

const SetupAxiosInterceptors = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const aT = getCookie("accessToken");
    if (aT) {
      client.defaults.headers.common.Authorization = `Bearer ${aT}`;
    }

    client.interceptors.response.use(
      function (response) {
        return response;
      },
      async function (error) {
        if (error.response.status === 401) {
          const originalRequest = error.config;
          console.log("hehehre");

          try {
            const res = await client.post(
              `${import.meta.env.VITE_BASE_URL}/auth/reissue`,
              {},
              {
                headers: {
                  "Authorization-refresh": `Bearer ${sessionStorage.getItem("rt")}`,
                },
              },
            );

            const newAccessToken = res.data.data.accessToken;
            const newRefreshToken = res.data.data.refreshToken;

            setCookie("accessToken", newAccessToken, { path: "/" });
            sessionStorage.setItem("rt", newRefreshToken);

            client.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;

            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

            return client(originalRequest);
          } catch (error) {
            return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      },
    );

    return () => {};
  }, []);
  return <div>{children}</div>;
};

export default SetupAxiosInterceptors;
