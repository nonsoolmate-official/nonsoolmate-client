import { Cookies } from "react-cookie";

const cookies = new Cookies();

export function setCookie(name: string, value: string | undefined, options: object) {
  return cookies.set(name, value, { ...options });
}

export function getCookie(name: string) {
  return cookies.get(name);
}
