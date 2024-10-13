import { getPayment } from "@pages/mypage/api/getPayment";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = {
  getPayment: "geyPayment",
};

export default function useGetPayment() {
  return useQuery({
    queryKey: [QUERY_KEY.getPayment],
    queryFn: () => getPayment(),
  });
}
