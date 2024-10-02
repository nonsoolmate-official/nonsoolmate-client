import { getCoupon } from "payment/api/getCoupon";
import { useQuery } from "react-query";

const QUERY_KEY = {
  getCoupon: "getCoupon",
};

export default function useGetCoupon() {
  const { data, refetch } = useQuery([QUERY_KEY.getCoupon], () => getCoupon(), {
    refetchInterval: 3000,
    onSuccess: (data) => {
      console.log("쿠폰 리스트 조회", data);
    },
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });

  return { data, refetch };
}
