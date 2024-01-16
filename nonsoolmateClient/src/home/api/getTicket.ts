import { Response } from "types/common";
import { client } from "@api/axios";

export interface TicketDataTypes {
  memberName: string;
  ticketCount: number;
}

export async function getTicket() {
  const { data } = await client.get<Response<TicketDataTypes>>(`/my/ticket`);
  return data;
}
