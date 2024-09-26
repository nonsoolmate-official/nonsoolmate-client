import { client } from "@api/axios";
import { Response } from "types/common";
interface DataTypes {
  resultFileName: string;
  preSignedUrl: string;
}
export async function getPresignedUrl() {
  const { data } = await client.get<Response<DataTypes>>("/college/exam-record/sheet/presigned");
  return data;
}
