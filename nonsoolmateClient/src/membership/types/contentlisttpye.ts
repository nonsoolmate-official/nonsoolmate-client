import { SalesType } from "./salestype";

export interface ContentListType {
  id: number;
  title: string;
  sales: SalesType[];
  price: string;
}
