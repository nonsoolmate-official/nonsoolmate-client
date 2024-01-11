import { SalesType } from "./salestype";

export interface ContentListType {
  id: number;
  title: string;
  summary: string;
  sales: SalesType[];
  price: number;
}
