import { client } from "@api/axios";

export interface CustomerInfoResponse {
  customerKey: string;
  customerName: string;
  customerEmail: string;
}

export async function getCustomerInfo() {
  const { data } = await client.get<CustomerInfoResponse>(`/payment/customer/info`);
  return data;
}
