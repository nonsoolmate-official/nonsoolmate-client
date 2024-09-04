import { client } from "@api/axios";

export interface PatchDataTypes {
  universityId: number;
}

export async function patchSelectUniversities(universityIdList: PatchDataTypes[]) {
  const { data } = await client.patch(`/select-college`, universityIdList);

  return data;
}
