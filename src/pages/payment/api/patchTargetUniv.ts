import { client } from "@api/axios";

export interface PatchDataTypes {
  universityId: number;
}

export async function patchTargetUniv(universityIdList: PatchDataTypes[]) {
  const { data } = await client.patch(`/target-university`, universityIdList);

  return data;
}
