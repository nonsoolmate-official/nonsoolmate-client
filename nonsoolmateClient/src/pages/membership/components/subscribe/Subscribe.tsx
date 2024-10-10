import Icons from "./Icons";
import PurchaseButton from "./PurchaseButton";
import Sales from "./sales/Sales";
import Title from "./Title";

import { columnFlex } from "style/commonStyle";
import styled from "styled-components";
import { Plan } from "@pages/membership/api/getProductsList";
import Summary from "./Summary";

export default function Subscribe(props: Plan) {
  const { productId, productName, productDescriptions, price, defaultDiscounts } = props;
  return (
    <Container>
      <ContentContainer>
        <Icons id={productId} />
        <Title title={productName} />
        <Summary productDescriptions={productDescriptions} />
        <Sales defaultDiscounts={defaultDiscounts} price={price} />
        <PurchaseButton id={productId} />
      </ContentContainer>
    </Container>
  );
}

const Container = styled.article`
  ${columnFlex}
  ${({ theme }) => theme.effects.membership_shadow};

  width: 29.6rem;
  height: 40rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ContentContainer = styled.div`
  ${columnFlex}

  justify-content:space-between;
  width: 25.6rem;
  height: 31.6rem;
`;
