import { client } from "@api/axios";

export interface TargetUnivResponse {
  universityId: number;
  universityName: string;
  universityImageUrl: string;
}

export async function getTargetUniv() {
  const { data } = await client.get<TargetUnivResponse[]>(`/target-university`);
  return data;
}
