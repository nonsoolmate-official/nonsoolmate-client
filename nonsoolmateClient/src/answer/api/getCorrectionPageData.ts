import { client } from "@api/axios";
import { Response } from "types/common";

interface CorrectionPageData {
  universityExamName: string;
  examAnswerUrl: string;
  examResultUrl: string;
}

export async function getCorrectionPageData(id: number) {
  const { data } = await client.get<Response<CorrectionPageData>>(`/university/exam-record/${id}`);

  return data;
}
