import { client } from "@api/axios";
import { Response } from "types/common";
interface DataTypes {
  resultFileName: string;
  preSignedUrl: string;
}

export async function getPresignedUrl(examId: number, editingType: string) {
  const { data } = await client.get<Response<DataTypes>>(
    `/college/exam-record/sheet/presigned?examId=${examId}&editingType=${editingType}`,
  );
  return data;
}
