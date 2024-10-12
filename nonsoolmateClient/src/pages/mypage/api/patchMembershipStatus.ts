import { client } from "@api/axios";

export async function patchMembershipStatus(status: string) {
  const data = await client.patch("/membership/status", {
    status: status,
  });

  return data;
}
