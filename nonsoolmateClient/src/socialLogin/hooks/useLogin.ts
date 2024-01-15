import { useMutation, useQueryClient } from "react-query";
import { login } from "socialLogin/api/login";

export default function useLogin() {
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useMutation(login, {
    onSuccess: (data) => {
      queryClient.setQueryData("authToken", data);
      window.location.href = "/home/test";
      console.log("성공", data);
    },
  });
  return { mutate, ...rest };
}
