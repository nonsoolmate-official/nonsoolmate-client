import { client } from "@api/axios";

export async function getPresignedUrl() {
  const response = await client.get("/university/exam-record/sheet/presigned");
  return response.data;
}
