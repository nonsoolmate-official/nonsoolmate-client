import { client } from "@api/axios";
import { Response } from "types/common";

interface UniversityExamAndAnswerDataTypes {
  universityExamName: string;
  universityExamUrl: string;
  universityExamAnswerUrl: string;
}

export async function getUniversityExamAndAnswer(examId: number) {
  const { data } = await client.get<Response<UniversityExamAndAnswerDataTypes>>(`/university/exam/${examId}/answer`);

  return data;
}
