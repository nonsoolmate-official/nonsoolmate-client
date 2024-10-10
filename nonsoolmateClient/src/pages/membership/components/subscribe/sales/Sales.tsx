import { columnFlex } from "style/commonStyle";
import styled from "styled-components";
import Price from "../Price";
import SalesContents from "./SalesContents";
import { DiscountHistoryItem } from "types/discountHistoryType";

interface SalesProp {
  discountHistory: DiscountHistoryItem[];
  price: number;
}

export default function Sales(props: SalesProp) {
  const { discountHistory, price } = props;

  let finalPrice = price;
  if (discountHistory.length) {
    finalPrice = discountHistory[discountHistory.length - 1].discountedPrice;
  }
  return (
    <Container>
      {discountHistory.map(({ discountId, discountTitle, beforeDiscountPrice, discountRate, discountedPrice }) => {
        return (
          <SalesContents
            key={discountId}
            discountId={discountId}
            discountTitle={discountTitle}
            discountRate={discountRate}
            beforeDiscountPrice={beforeDiscountPrice}
            discountedPrice={discountedPrice}
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
