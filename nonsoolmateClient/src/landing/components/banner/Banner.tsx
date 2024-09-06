import styled from "styled-components";
import GotoSaleButton from "./GotoSaleButton";
import HomeImg from "./HomeImg";
import Summary from "./Summary";
import Title from "./Title";
import { columnFlex } from "style/commonStyle";
import { DownArrowWhiteIc } from "@assets/index";

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
  background: linear-gradient(180deg, #fff 0%, #e4e8ff 100%);
`;

const ContentContainer = styled.div`
  gap: 3.2rem;
  justify-content: space-between;
  width: 100%;
`;

const TextsContainer = styled.span`
  ${columnFlex};

  gap: 2.4rem;
  position: absolute;
  top: 50%;
  right: 21.5rem;
  transform: translateY(-50%);
  width: 37.6rem;
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
