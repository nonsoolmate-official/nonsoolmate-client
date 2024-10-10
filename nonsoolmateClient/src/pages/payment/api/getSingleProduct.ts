import { client } from "@api/axios";
import { Plan } from "types/productsListType";

export async function getSingleProduct(id: number) {
  const { data } = await client.get<Plan>(`/products/${id}`);
  return data;
}
