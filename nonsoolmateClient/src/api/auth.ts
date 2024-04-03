const ACCESS_TOKEN = "token";

export const getToken = () => {
  return sessionStorage.getItem(ACCESS_TOKEN);
};

export const setToken = (token: string) => {
  sessionStorage.setItem(ACCESS_TOKEN, token);
};

export const removeToken = () => {
  sessionStorage.removeItem(ACCESS_TOKEN);
};
