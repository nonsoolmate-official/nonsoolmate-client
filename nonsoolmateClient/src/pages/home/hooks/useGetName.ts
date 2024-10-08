import { useQuery } from "@tanstack/react-query";
import { getName } from "../api/getName";

const QUERY_KEY = {
  getName: "getName",
};

export default function useGetName() {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.getName],
    queryFn: () => getName(),
  });
  return data;
}
