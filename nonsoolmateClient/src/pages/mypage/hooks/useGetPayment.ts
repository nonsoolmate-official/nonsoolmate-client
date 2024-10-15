import { getPayment } from "@pages/mypage/api/getPayment";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = {
  getPayment: "geyPayment",
};

export default function useGetPayment() {
  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEY.getPayment],
    queryFn: () => getPayment(),
    refetchInterval: 3000,
  });

  return { data, refetch };
}
