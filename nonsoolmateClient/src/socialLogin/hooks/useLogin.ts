import { useMutation } from "react-query";
import { login } from "socialLogin/api/login";
import { setCookie } from "@api/cookie";

//login을 위한 useMutation customhook입니다.
export default function useLogin() {
  const { mutate, ...rest } = useMutation(login, {
    onSuccess: (data) => {
      const rtData = data.refreshToken;
      //accessToken을 cookie에 저장합니다.
      setCookie("accessToken", data.accessToken, { path: "/" });
      //refreshToken을 sessionStorage에 저장합니다.
      sessionStorage.setItem("rt", rtData);
      //성공하면 바로 home으로 이동하도록 합니다.
      window.location.href = "/home/test";
    },
  });
  return { mutate, ...rest };
}
