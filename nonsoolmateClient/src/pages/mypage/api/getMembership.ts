import { client } from "@api/axios";

export async function getMembership() {
  const data = await client.get("/membership");

  return data;
}
