import { useMutation } from "react-query";
import { PatchDataTypes, patchSelectUniversities } from "home/api/patchSelectUniversities";

const QUERY_KEY = {
  patchSelectUniversities: "patchSelectUniversities",
};

export default function usePatchSelectUniversities() {
  const { mutate } = useMutation(
    [QUERY_KEY.patchSelectUniversities],
    (universityIdList: PatchDataTypes[]) => patchSelectUniversities(universityIdList),
    {
      onError: (error) => {
        console.log("에러 발생", error);
      },
      onSuccess: () => {
        console.log("성공");
      },
    },
  );
  return mutate;
}
