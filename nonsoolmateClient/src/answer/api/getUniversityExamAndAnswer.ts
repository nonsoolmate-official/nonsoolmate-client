import { client } from "@api/axios";
import { Response } from "types/common";

interface UniversityExamAndAnswerDataTypes {
  examName: string;
  examUrl: string;
  examAnswerUrl: string;
}

export async function getUniversityExamAndAnswer(id: number) {
  const { data } = await client.get<Response<UniversityExamAndAnswerDataTypes>>(`/university/exam/${id}/answer`);

  return data;
}
