import { client } from "@api/axios";

interface MembershipTypes {
  status: string;
  membershipName: string;
  startDate: string;
  endDate: string;
}

export async function getMembership() {
  const data = await client.get<MembershipTypes>("/membership");

  return data.data;
}
