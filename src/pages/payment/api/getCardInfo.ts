import { client } from "@api/axios";

export interface CardInfoTypes {
  cardId: number;
  cardCompany: string;
  cardNumber: string;
}

export async function getCardInfo() {
  const { data } = await client.get<CardInfoTypes>(`cards`);
  return data;
}
