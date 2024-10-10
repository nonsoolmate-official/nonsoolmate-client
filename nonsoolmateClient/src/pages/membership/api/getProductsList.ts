import { client } from "@api/axios";

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
export async function getProductsList() {
  const { data } = await client.get<ProductListTypes>(`/products`);
  return data;
}
