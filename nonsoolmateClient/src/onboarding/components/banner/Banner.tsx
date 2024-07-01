import styled from "styled-components";
import GotoSaleButton from "./GotoSaleButton";
import HomeImg from "./HomeImg";
import Summary from "./Summary";
import Title from "./Title";
import { columnFlex } from "style/commonStyle";

export default function Banner() {
  return (
    <BannerWrapper>
      <ContentContainer>
        <TextsContainer>
          <Title />
          <Summary />
          <GotoSaleButton />
        </TextsContainer>
        <HomeImg />
      </ContentContainer>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.section`
  ${columnFlex};

  justify-content: flex-end;
  width: 100%;
  /* height: 76.8rem; */
  background: linear-gradient(to bottom, rgba(101 121 255) 20%, rgb(156 169 255) 100%);
  padding: 6.6rem 0 0;
`;

const ContentContainer = styled.div`
  ${columnFlex};

  gap: 3.2rem;
  justify-content: space-between;
`;

const TextsContainer = styled.span`
  ${columnFlex};

  gap: 2.8rem;
`;
