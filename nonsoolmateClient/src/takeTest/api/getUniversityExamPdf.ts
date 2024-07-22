import { client } from "@api/axios";
import { Response } from "types/common";
interface DataTypes {
  examUrl: string;
}
export async function getUniversityExamPdf(examId: number) {
  const { data } = await client.get<Response<DataTypes>>(`/university/exam/${examId}`);

  return data;
}
