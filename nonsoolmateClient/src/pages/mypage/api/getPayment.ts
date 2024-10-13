import { client } from "@api/axios";

interface PaymentTypes {
  nextPaymentDate: string;
  paymentMethod: string;
  cardNumber: string;
  coupon: [
    {
      couponId: number;
      couponName: string;
      couponImageUrl: string;
      discountRate: number;
    },
  ];
  discountEvent: [
    {
      discountId: number;
      discountName: string;
      discountRate: number;
    },
  ];
  totalDiscountPrice: number;
  totalPrice: number;
}

export async function getPayment() {
  const data = await client.get<PaymentTypes>("/membership/payment");

  return data;
}
