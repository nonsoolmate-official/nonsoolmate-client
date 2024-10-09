import { client } from "@api/axios";

// editingType : EDITING(첨삭), REVISION(재첨삭)
export async function postExamRecord({
  examId,
  totalTime,
  fileName,
  editingType,
}: {
  examId: number;
  totalTime: number;
  fileName: string;
  editingType: string;
}) {
  const { data } = await client.post(`/college/exam-record/sheet`, {
    examId: examId,
    memberTakeTimeExam: totalTime,
    memberSheetFileName: fileName,
    editingType: editingType,
  });

  return data;
}
