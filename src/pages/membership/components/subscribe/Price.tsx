import { commonFlex } from "style/commonStyle";
import styled from "styled-components";

interface PriceProp {
  price: number;
}

export default function Price(props: PriceProp) {
  const { price } = props;
  return (
    <Container>
      <PriceText> ₩{price.toLocaleString()} </PriceText>
      <Unit>{price > 50000 ? "/월" : "/개"}</Unit>
    </Container>
  );
}

const Container = styled.div`
  ${commonFlex}

  gap: 0.4rem;
`;

const PriceText = styled.h2`
  ${({ theme }) => theme.fonts.Headline5};
`;

const Unit = styled.h3`
  ${({ theme }) => theme.fonts.Body6};

  padding-top: 0.7rem;
  color: ${({ theme }) => theme.colors.grey_600};
`;
