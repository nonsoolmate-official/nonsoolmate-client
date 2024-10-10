export interface Discount {
  discountId: number;
  discountName: string;
  discountRate: number;
}

export interface Plan {
  productId: number;
  productName: string;
  productDescriptions: never[];
  price: number;
  defaultDiscounts: Discount[];
}

export interface OrderProps {
  plan: Plan;
}
