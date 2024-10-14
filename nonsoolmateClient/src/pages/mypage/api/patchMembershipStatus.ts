import { client } from "@api/axios";
import { Response } from "types/common";

interface MembershipStatusTypes {
  status: string;
  membershipName: string;
  startDate: string;
  endDate: string;
}

export async function patchMembershipStatus(status: string) {
  const data = await client.patch<Response<MembershipStatusTypes>>("/membership/status", {
    status: status,
  });

  return data;
}
