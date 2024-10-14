import { getMentor } from "@pages/mypage/api/getMentor";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = {
  getMentor: "getMentor",
};

export const useGetMentor = () => {
  return useQuery({
    queryKey: [QUERY_KEY.getMentor],
    queryFn: () => getMentor(),
  });
};
