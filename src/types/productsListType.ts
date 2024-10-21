export interface Discount {
  discountId: number;
  discountName: string;
  discountRate: number;
}

export interface Plan {
  productId: number;
  productName: string;
  productDescriptions: string[];
  price: number;
  defaultDiscounts: Discount[];
}

export interface ProductListTypes {
  data: Plan[];
}
