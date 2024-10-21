interface ListDetailType {
  couponMemberId: number;
  couponName: string;
  couponDescription: string;
  couponImageUrl: string;
  couponType: string;
  discountRate: number;
  discountAmount: number;
  ticketCount: number;
  validStartDate: string;
  validEndDate: string;
}

interface CouponListType {
  coupons: ListDetailType[];
}

export const COUPON_LIST: CouponListType = {
  coupons: [
    {
      couponMemberId: 1,
      couponName: "아산 데모데이 카카오톡 채널 추가 쿠폰",
      couponDescription: "쿠폰 설명입니다.",
      couponImageUrl: "[url] 형식",
      couponType: "RATE",
      discountRate: 20,
      discountAmount: 30000,
      ticketCount: 10,
      validStartDate: "2024-08-22T05:16:44.051Z",
      validEndDate: "2024-11-13T05:16:44.051Z",
    },
    {
      couponMemberId: 2,
      couponName: "신규 회원 친구 초대 쿠폰",
      couponDescription: "쿠폰 설명입니다.",
      couponImageUrl: "[url] 형식",
      couponType: "AMOUNT",
      discountRate: 20,
      discountAmount: 30000,
      ticketCount: 10,
      validStartDate: "2024-08-22T05:16:44.051Z",
      validEndDate: "2024-11-13T05:16:44.051Z",
    },
    {
      couponMemberId: 3,
      couponName: "테스트 쿠폰",
      couponDescription: "쿠폰 설명입니다.",
      couponImageUrl: "[url] 형식",
      couponType: "RATE",
      discountRate: 20,
      discountAmount: 30000,
      ticketCount: 10,
      validStartDate: "2024-08-22T05:16:44.051Z",
      validEndDate: "2024-11-13T05:16:44.051Z",
    },
  ],
};
