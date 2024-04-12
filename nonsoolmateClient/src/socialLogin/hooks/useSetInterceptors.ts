import { useLayoutEffect } from "react";
import { client } from "@api/axios";
import { getToken } from "socialLogin/utils/token";
import useRefresh from "./useRefresh";

export default function useSetInterceptors() {
  const refresh = useRefresh();
  useLayoutEffect(() => {
    const requestInterceptor = client.interceptors.request.use((config) => {
      const accessToken = getToken();
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    });

    const responseInterceptor = client.interceptors.response.use(
      (res) => res,
      async (err) => {
        if (err.config.url !== "/auth/reissue" && err.response.status === 401) {
          console.log("401에러");
          await refresh();
          const token = getToken();
          if (token) {
            err.config.headers["Authorization"] = `Bearer ${token}`;
            return client(err.config);
          }
        }
        return Promise.reject(err);
      },
    );
    return () => {
      client.interceptors.request.eject(requestInterceptor);
      client.interceptors.response.eject(responseInterceptor);
    };
  }, []);
}
