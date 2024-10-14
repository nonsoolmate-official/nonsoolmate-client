import { client } from "@api/axios";

interface MemberInfo {
  name: string;
  gender: string;
  birthYear: string;
  email: string;
  phoneNumber: string;
}

export async function putMemberInfo(data: MemberInfo) {
  const response = await client.put("/my/profile", data);
  return response;
}
