interface Membership {
  name: string;
  startDate: string;
  endDate: string;
}

interface MembershipData {
  membership: Membership;
}

export const MEMBERSHIP_DATA: MembershipData = {
  membership: {
    name: "베이직 플랜",
    startDate: "2024.01.01",
    endDate: "2024.01.01",
  },
};

interface Payment {
  dueDate: string;
  paymentMethod: string;
  couponInfo?: {
    name: string;
    discount: string;
  };
  discountEvent?: {
    name: string;
    discount: string;
  };
  totalDiscount: string;
  totalPrice: string;
}

interface PaymentData {
  payment: Payment;
}

export const PAYMENT_DATA: PaymentData = {
  payment: {
    dueDate: "2024.01.01",
    paymentMethod: "신한카드 **** 4532",
    couponInfo: {
      name: "아산 데모데이 카카오톡 채널 추가 쿠폰",
      discount: "20%",
    },
    discountEvent: {
      name: "아산 데모데이 카카오톡 채널 추가 쿠폰",
      discount: "20%",
    },
    totalDiscount: "0원",
    totalPrice: "210,000원",
  },
};
