import { client } from "@api/axios";

export async function postExamRecord({
  examId,
  totalTime,
  fileName,
}: {
  examId: number;
  totalTime: number;
  fileName: string;
}) {
  const { data } = await client.post(`/university/exam-record/sheet`, {
    examId: examId,
    memberTakeTimeExam: totalTime,
    memberSheetFileName: fileName,
  });

  return data;
}
