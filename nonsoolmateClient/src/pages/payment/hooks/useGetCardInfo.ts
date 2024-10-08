import { useQuery } from "@tanstack/react-query";
import { getCardInfo } from "../api/getCardInfo";

const QUERY_KEY = {
  getCardInfo: "getCardInfo",
};

export default function useGetCardInfo() {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.getCardInfo],
    queryFn: () => getCardInfo(),
  });

  return { cardInfo: data, isLoading };
}
