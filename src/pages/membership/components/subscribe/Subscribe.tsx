import PurchaseButton from "./PurchaseButton";
import Sales from "./sales/Sales";
import Title from "./Title";

import { columnFlex } from "style/commonStyle";
import styled from "styled-components";
import { Plan } from "types/productsListType";
import Summary from "./Summary";
import { DiscountHistoryItem } from "types/discountHistoryType";
import PlanIcons from "../../../../components/planIcons/PlanIcons";

interface SubscribeProps extends Plan {
  discountHistory: DiscountHistoryItem[];
  plan: Plan[];
}
export default function Subscribe(props: SubscribeProps) {
  const { productId, productName, productDescriptions, price, discountHistory, plan } = props;
  return (
    <Container>
      <ContentContainer>
        <TitleBox>
          <PlanIcons id={productId} width="4.4rem" height="4.4rem" />
          <Title title={productName} />
        </TitleBox>
        <ContentDetailBox>
          <Summary productDescriptions={productDescriptions} />
          <Sales discountHistory={discountHistory} price={price} />
        </ContentDetailBox>
      </ContentContainer>
      <PurchaseButton id={productId} plan={plan} />
    </Container>
  );
}

const Container = styled.article`
  ${columnFlex}
  ${({ theme }) => theme.effects.membership_shadow};

  justify-content: space-between;
  width: 29.6rem;
  height: 40rem;
  padding: 2.8rem 2rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0;
`;

const TitleBox = styled.div`
  ${columnFlex}

  gap: 1.2rem;
  height: 8rem;
  margin-bottom: 2.2rem;
`;

const ContentDetailBox = styled.div`
  ${columnFlex}

  gap:1.2rem;
`;
