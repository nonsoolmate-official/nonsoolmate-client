import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PatchDataTypes, patchTargetUniv } from "../api/patchTargetUniv";

export default function usePatchTargetUniv() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["patchTargetUniv"],
    mutationFn: (universityIdList: PatchDataTypes[]) => patchTargetUniv(universityIdList),
    onError: (error) => {
      console.log("에러 발생", error);
    },
    onSuccess: () => {
      console.log("성공");
      queryClient.invalidateQueries({ queryKey: ["getTargetUniv"] });
    },
  });
  return mutate;
}
