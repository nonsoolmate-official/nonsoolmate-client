import { client } from "@api/axios";

export async function postCardRegister({ authKey }: { authKey: string }) {
  const { data } = await client.post(`/cards/register`, {
    authKey: authKey,
  });

  return data;
}
