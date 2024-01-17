import axios from "axios";
import { client } from "./axios";
import { setCookie } from "./cookie";

client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = sessionStorage.getItem("rt");
      // refreshToken을 사용하여 새로운 accessToken을 요청합니다.
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/reissue`, {
        headers: {
          "Authorization-refresh": refreshToken,
        },
      });
      const newAccessToken = response.data.accessToken;
      // 새 토큰을 쿠키에 저장하고 요청 헤더를 업데이트합니다.
      setCookie("accessToken", newAccessToken, { path: "/" });
      client.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
      // 원래 요청을 새 토큰으로 재시도합니다.
      return client(originalRequest);
    }
    return Promise.reject(error);
  },
);
