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
