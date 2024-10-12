import { client } from "@api/axios";

export interface TicketDataTypes {
  memberName: string;
  membershipType: string;
  reviewTicketCount: number;
  reReviewticketCount: number;
}

export async function getTicket() {
  const { data } = await client.get<TicketDataTypes>(`/membership/ticket`);
  return data;
}
