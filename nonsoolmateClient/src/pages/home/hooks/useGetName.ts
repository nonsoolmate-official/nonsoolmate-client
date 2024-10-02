import { useQuery } from "react-query";
import { getName } from "../api/getName";

const QUERY_KEY = {
  getName: "getName",
};

export default function useGetName() {
  const { data } = useQuery(QUERY_KEY.getName, () => getName(), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return data;
}
