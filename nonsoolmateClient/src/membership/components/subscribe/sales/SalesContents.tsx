import { SalesType } from "membership/types/salestype";
import { commonFlex } from "style/commonStyle";
import styled from "styled-components";

interface SaleContentsProps extends SalesType {}

export default function SalesContents(props: SaleContentsProps) {
  const { saletitle, beforeprice, salepercent } = props;

  return (
    <Container>
      <SaleTitle>{saletitle}</SaleTitle>
      <BeforePrice>₩{beforeprice}</BeforePrice>
      <SalePercent>{salepercent} % OFF</SalePercent>
    </Container>
  );
}

const Container = styled.div`
  ${commonFlex}
  align-items: flex-end;
`;

const SaleTitle = styled.p`
  ${({ theme }) => theme.fonts.Body8};

  color: ${({ theme }) => theme.colors.grey_500};
`;

const BeforePrice = styled(SaleTitle)`
  text-decoration: line-through;
  margin-left: 1.2rem;
  margin-right: 0.4rem;
`;

const SalePercent = styled.p`
  ${({ theme }) => theme.fonts.Body8};

  color: ${({ theme }) => theme.colors.error};
`;
