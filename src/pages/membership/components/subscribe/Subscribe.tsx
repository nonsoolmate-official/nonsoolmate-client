import Icons from "./Icons";
import PurchaseButton from "./PurchaseButton";
import Sales from "./sales/Sales";
import Title from "./Title";

import { ContentListType } from "@pages/membership/types/contentListType";
import { columnFlex } from "style/commonStyle";
import styled from "styled-components";
import BasicSummary from "./BasicSummary";
import PremiumSummary from "./PremiumSummary";

interface ContentsProps extends ContentListType {}

export default function Subscribe(props: ContentsProps) {
  const { id, title, sales, price } = props;
  return (
    <Container>
      <ContentContainer>
        <Icons id={id} />
        <Title title={title} />
        {id == 1 ? <BasicSummary /> : <PremiumSummary />}
        <Sales sales={sales} price={price} />
        <PurchaseButton />
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
