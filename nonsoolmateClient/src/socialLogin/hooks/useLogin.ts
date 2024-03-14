import { useMutation, useQueryClient } from "react-query";
import { login } from "socialLogin/api/login";
import { setCookie } from "@api/cookie";

//login을 위한 useMutation customhook입니다.
export default function useLogin() {
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useMutation(login, {
    onSuccess: (data) => {
      console.log("성공", data);
      //accessToken을 cookie에 저장합니다.
      setCookie("accessToken", data.accessToken, { path: "/" });
      //해당 data를 querydata에 저장합니다.
      queryClient.setQueryData("authToken", data);
      //성공하면 바로 home으로 이동하도록 합니다.
      window.location.href = "/home/test";
    },
  });
  return { mutate, ...rest };
}
