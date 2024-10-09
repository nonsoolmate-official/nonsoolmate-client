import { client } from "@api/axios";

interface DataTypes {
  customerKey: string;
  customerName: string;
  customerEmail: string;
}
export async function getCustomerInfo() {
  const { data } = await client.get<DataTypes>("/payment/customer/info");
  return data;
}
