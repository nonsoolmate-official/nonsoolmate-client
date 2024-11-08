import styled from "styled-components";
import GotoSaleButton from "./GotoSaleButton";
import HomeImg from "./HomeImg";
import Summary from "./Summary";
import Title from "./Title";
import { columnFlex } from "style/commonStyle";
import { DownArrowWhiteIc } from "@assets/index";
import { media } from "style/responsiveStyle";

export default function Banner() {
  return (
    <BannerWrapper>
      <ContentContainer>
        <HomeImg />
        <TextsContainer>
          <Title />
          <Summary />
          <ButtonContainer>
            <GotoSaleButton />
          </ButtonContainer>
        </TextsContainer>
      </ContentContainer>
      <DownArrowContainer>
        <DownArrowWhiteIc />
      </DownArrowContainer>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.section`
  ${columnFlex};

  justify-content: flex-end;
  position: relative;
  width: 100%;
  height: calc(100vh - 6.4rem);
  background: linear-gradient(180deg, #fff 0%, #e4e8ff 100%);
`;

const ContentContainer = styled.div`
  gap: 3.2rem;
  justify-content: space-between;
  width: 100%;
`;

const TextsContainer = styled.span`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  position: absolute;
  top: 50%;
  right: 15%;
  transform: translateY(-50%);
  width: 37.6rem;

  ${media.tablet} {
    ${columnFlex}

    left: 50%;
    transform: translate(-50%, -100%);
  }

  ${media.mobile} {
    top: 45%;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
`;

const DownArrowContainer = styled.div`
  ${columnFlex}

  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 12.2rem;
  padding: 2.4rem 0.8rem;
  background: linear-gradient(180deg, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 10%) 100%);
`;
