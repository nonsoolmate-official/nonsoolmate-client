import { client } from "@api/axios";

export async function serverInitController() {
  const { data } = await client.get(`/init`);
  return data;
}
