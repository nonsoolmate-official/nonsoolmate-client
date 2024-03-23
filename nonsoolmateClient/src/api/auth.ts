const ACCESS_TOKEN = "token";

export const getToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

export const setToken = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN, token);
};

export const removeToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};
