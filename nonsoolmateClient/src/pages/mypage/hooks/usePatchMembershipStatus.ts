import { patchMembershipStatus } from "@pages/mypage/api/patchMembershipStatus";
import { useMutation } from "@tanstack/react-query";

export default function usePatchMembershipStatus() {
  const mutate = useMutation({
    mutationFn: (status: string) => patchMembershipStatus(status),
  });

  return mutate;
}
