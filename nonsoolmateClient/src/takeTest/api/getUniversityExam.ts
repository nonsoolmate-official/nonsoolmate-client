import { client } from "@api/axios";
import { Response } from "types/common";
export interface DataTypes {
  examId: number;
  examName: string;
  examTimeLimit: number;
}

export async function getUniversityExam(id: number) {
  const { data } = await client.get<Response<DataTypes>>(`/university/exam/${id}/info`);
  return data;
}
