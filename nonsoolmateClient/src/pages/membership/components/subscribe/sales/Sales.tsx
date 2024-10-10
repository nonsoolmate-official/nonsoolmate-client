import { columnFlex } from "style/commonStyle";
import styled from "styled-components";
import Price from "../Price";
import SalesContents from "./SalesContents";
import { DiscountHistoryItem } from "@pages/payment/types/discountHistoryType";

interface SalesProp {
  discountHistory: DiscountHistoryItem[];
  price: number;
}

export default function Sales(props: SalesProp) {
  const { discountHistory, price } = props;

  let finalPrice = price;
  if (discountHistory.length) {
    finalPrice = discountHistory[discountHistory.length - 1].discounted_price;
  }
  return (
    <Container>
      {discountHistory.map(({ discount_id, discount_title, beforeDiscount_price, discount_rate, discounted_price }) => {
        return (
          <SalesContents
            key={discount_id}
            discount_id={discount_id}
            discount_title={discount_title}
            discount_rate={discount_rate}
            beforeDiscount_price={beforeDiscount_price}
            discounted_price={discounted_price}
          />
        );
      })}
      <Price price={finalPrice} />
    </Container>
  );
}

const Container = styled.div`
  ${columnFlex}

  gap: 0.3rem;
  align-items: flex-end;
  width: 25.6rem;
`;
