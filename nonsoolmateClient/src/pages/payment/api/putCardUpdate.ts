import { client } from "@api/axios";

export async function putCardUpdate(authKey: string) {
  const { data } = await client.put(`/cards/update`, {
    authKey: authKey,
  });
  return data;
}
