import { client } from "@api/axios";
import { ProductListTypes } from "types/productsListType";

export async function getProductsList() {
  const { data } = await client.get<ProductListTypes>(`/products`);
  return data;
}
