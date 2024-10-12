import { client } from "@api/axios";
import { Response } from "types/common";

interface MembershipTypes {
  status: string;
  membershipName: string;
  startDate: string;
  endDate: string;
}

export async function getMembership() {
  const data = await client.get<Response<MembershipTypes>>("/membership");

  return data.data;
}
