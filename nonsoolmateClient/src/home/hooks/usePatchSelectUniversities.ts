import { useMutation, useQueryClient } from "react-query";
import { PatchDataTypes, patchSelectUniversities } from "home/api/patchSelectUniversities";

export default function usePatchSelectUniversities() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation((universityIdList: PatchDataTypes[]) => patchSelectUniversities(universityIdList), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
    onSuccess: (data) => {
      console.log("성공", data);
      queryClient.invalidateQueries("getSelectUniversityExams");
    },
  });
  return { mutate };
}
