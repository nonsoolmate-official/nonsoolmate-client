import Title from "./Title";
import Icons from "./Icons";
import PurchaseButton from "./PurchaseButton";
import Sales from "./sales/Sales";
import Summary from "./Summary";
import { ContentListType } from "membership/types/contentlisttpye";
import styled from "styled-components";
import { columnFlex } from "style/commonStyle";

interface ContentsProps extends ContentListType {}

export default function Subscribe(props: ContentsProps) {
  const { id, title, summary, sales, price } = props;
  return (
    <Container>
      <ContentContainer>
        <Icons id={id} />
        <Title title={title} />
        <Summary summary={summary} />
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
  height: 36.4rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ContentContainer = styled.div`
  ${columnFlex}

  justify-content:space-between;
  width: 25.6rem;
  height: 31.6rem;
`;
