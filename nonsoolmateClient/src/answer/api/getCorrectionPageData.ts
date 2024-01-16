import { client } from "@api/axios";

interface DefaultData<T> {
  code: number;
  message: string;
  data: T;
}

interface CorrectionPageData {
  universityExamName: string;
  examAnswerUrl: string;
  examResultUrl: string;
}

export async function getCorrectionPageData(id: number) {
  const { data } = await client.get<DefaultData<CorrectionPageData>>(`/university/exam-record/${id}`);

  return data;
}
