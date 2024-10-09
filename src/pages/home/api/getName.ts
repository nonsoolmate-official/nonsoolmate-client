import { Response } from "types/common";
import { client } from "@api/axios";

export interface NameDataTypes {
  memberName: string;
}

export async function getName() {
  const { data } = await client.get<Response<NameDataTypes>>(`/my/name`);
  return data;
}
