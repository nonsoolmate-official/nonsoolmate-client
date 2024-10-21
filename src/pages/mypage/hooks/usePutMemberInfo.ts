import { putMemberInfo } from "@pages/mypage/api/putMemberInfo";
import { useMutation } from "@tanstack/react-query";

export default function usePutMemberInfo() {
  const mutate = useMutation({
    mutationFn: putMemberInfo,
  });

  return mutate;
}
