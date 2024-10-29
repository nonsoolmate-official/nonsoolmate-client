import { getCoupon } from "@pages/payment/api/getCoupon";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = {
  getCoupon: "getCoupon",
};

export default function useGetCoupon() {
  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEY.getCoupon],
    queryFn: () => getCoupon(),
  });

  return { data, refetch };
}
