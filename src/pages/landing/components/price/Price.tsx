import { columnFlex } from "style/commonStyle";
import theme from "style/theme";
import styled from "styled-components";
import GotoMembershipBtn from "./GotoMembershipBtn";
import priceImage from "@assets/image/landing_price.png";

export default function Price() {
  return (
    <PriceContainer>
      <TitleContainer>
        <Title>최소의 투자, 최대의 결과</Title>
        <SubTitle>
          학원/강사 네임드, 임대료 등의 가격 거품을 걷어내고
          <br /> 꼭 필요한 만큼의 합리적인 가격대로 코칭받으세요
        </SubTitle>
      </TitleContainer>
      <Image src={priceImage} />
      <GotoMembershipBtn />
    </PriceContainer>
  );
}

const PriceContainer = styled.section`
  ${columnFlex}

  gap: 5.4rem;
  padding: 10.4rem 0;
  background-color: ${theme.colors.grey_1000};
`;

const TitleContainer = styled.div`
  ${columnFlex}

  gap: 1.6rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.Headline2}

  color: ${theme.colors.white};
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2}

  color: ${theme.colors.grey_300};
  text-align: center;
`;

const Image = styled.img`
  width: 45.6rem;
`;
