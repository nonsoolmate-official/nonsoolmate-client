import { useMutation, useQueryClient } from "react-query";
import { login } from "socialLogin/api/login";
import { setCookie } from "@api/cookie";

export default function useLogin() {
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useMutation(login, {
    onSuccess: (data) => {
      console.log("성공", data);
      setCookie("accessToken", data.accessToken, { path: "/" });
      queryClient.setQueryData("authToken", data);
      //   window.location.href = "/home/test";
    },
  });
  return { mutate, ...rest };
}
