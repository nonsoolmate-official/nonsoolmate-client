import styled from "styled-components";

interface PriceProp {
  price: number;
}

export default function Price(props: PriceProp) {
  const { price } = props;
  return (
    <>
      <PriceText>₩{price}</PriceText>
      <Month>/월</Month>
    </>
  );
}

const PriceText = styled.h2`
  ${({ theme }) => theme.fonts.Headline5};
`;

const Month = styled.h3`
  ${({ theme }) => theme.fonts.Body6};
  ${({ theme }) => theme.colors.grey_600};
`;
