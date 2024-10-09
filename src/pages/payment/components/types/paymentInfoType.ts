export interface Discount {
  id: number;
  title: string;
  rate: number;
}

export interface Plan {
  id: number;
  title: string;
  price: number;
  defaultDiscount: Discount[];
}

export interface OrderProps {
  plan: Plan;
}
