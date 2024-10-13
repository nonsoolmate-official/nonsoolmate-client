import { client } from "@api/axios";

interface Response<T> {
  message: string;
  status: number;
  data: T;
}

interface MembershipTypes {
  status: string;
  membershipName: string;
  startDate: string;
  endDate: string;
}

export async function getMembership() {
  const data = await client.get<Response<MembershipTypes>>("/membership");

  return data;
}
