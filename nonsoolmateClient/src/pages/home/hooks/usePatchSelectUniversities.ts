import { useMutation } from "react-query";

import { useQueryClient } from "react-query";
import { PatchDataTypes, patchSelectUniversities } from "../api/patchSelectUniversities";

export default function usePatchSelectUniversities() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    ["patchSelectUniversities"],
    (universityIdList: PatchDataTypes[]) => patchSelectUniversities(universityIdList),
    {
      onError: (error) => {
        console.log("에러 발생", error);
      },
      onSuccess: () => {
        console.log("성공");
        queryClient.invalidateQueries("getSelectUniversityExams");
      },
    },
  );
  return mutate;
}
