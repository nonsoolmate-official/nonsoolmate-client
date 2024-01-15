import { useQuery } from "react-query";
import { getSelectUniversities } from "home/api/getSelectUniversities";

export default function useGetSelectUniversities() {
  const { data } = useQuery("getSelectUniversities", () => getSelectUniversities(), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return data;
}
