import { isAxiosError } from "axios";
import { client } from "./axios";

const ACCESS_TOKEN = "token";
const REFRESH_TOKEN = "refresh";

export const getToken = () => {
  return sessionStorage.getItem(ACCESS_TOKEN);
};

export const setToken = (token: string) => {
  sessionStorage.setItem(ACCESS_TOKEN, token);
};

export const removeToken = () => {
  sessionStorage.clear();
};

export const getRefreshToken = () => {
  return sessionStorage.getItem(REFRESH_TOKEN);
};

export const setRefreshToken = (token: string) => {
  sessionStorage.setItem(REFRESH_TOKEN, token);
};
const postRefresh = async () => {
  const refreshToken = getRefreshToken();

  try {
    const response = await client.post(
      "/auth/reissue",
      {},
      {
        headers: {
          "Authorization-refresh": `Bearer ${refreshToken}`,
        },
      },
    );

    const newToken = response.data.data;
    setToken(newToken.accessToken);
    setRefreshToken(newToken.refreshToken);
  } catch (err) {
    // refresh api에서 발생한 에러 처리
    // 지금 에러 처리를 못함..
    if (isAxiosError(err) && err.response?.status === 401) {
      //에러 관련 로직 처리 예정
      removeToken();
    }
  }
};

client.interceptors.request.use((config) => {
  const accessToken = getToken();
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

client.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response.status === 401) {
      console.log("401에러");
      await postRefresh();
      const token = getToken();
      err.config.headers["Authorization"] = `Bearer ${token}`;
      return client(err.config);
    }
    return Promise.reject(err);
  },
);
