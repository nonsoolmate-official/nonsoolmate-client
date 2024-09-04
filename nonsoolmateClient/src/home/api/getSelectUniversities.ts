import { Response } from "types/common";
import { client } from "@api/axios";

export interface SelectUniversitiesDataTypes {
  universityId: number;
  universityName: string;
  collegeName: string;
  memberStatus: boolean;
}

export async function getSelectUniversities() {
  const { data } = await client.get<Response<SelectUniversitiesDataTypes[]>>(`/select-college`);
  return data;
}
