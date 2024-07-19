import styled from "styled-components";
import Subscribe from "./subscribe/Subscribe";
import { CONTENT_LIST } from "../core/contentlist";
import { columnFlex, commonFlex } from "style/commonStyle";
import Advantage from "./advantage/Advantage";
import BackgroundGrey from "./BackgroundGrey";
import AdvanTitle from "./advantage/Title";
import { media } from "style/responsiveStyle";

export default function Contents() {
  return (
    <Container>
      <BackgroundGrey />
      <SubscribeWrapper>
        {CONTENT_LIST.map((ele) => {
          const { id, title, summary, sales, price } = ele;
          return <Subscribe key={id} id={id} title={title} summary={summary} sales={sales} price={price} />;
        })}
      </SubscribeWrapper>
      <Ipad>
        <AdvantageContainer>
          <AdvanTitle />
          <Advantage />
        </AdvantageContainer>
      </Ipad>
      <IpadGrey />
    </Container>
  );
}

const Container = styled.section`
  ${commonFlex}

  gap: 2.4rem;
  margin-top: 8.1rem;

  ${media.tablet} {
    flex-direction: column;
    margin-top: 9.6rem;
  }
`;

const SubscribeWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
`;

const Ipad = styled.div`
  ${media.tablet} {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 13.5rem;
  }
`;

const IpadGrey = styled.div`
  ${media.tablet} {
    position: absolute;
    bottom: 13.5rem;
    z-index: -1;
    width: 100%;
    height: 28.8rem;
    background-color: ${({ theme }) => theme.colors.grey_50};
  }
`;

const AdvantageContainer = styled.article`
  ${columnFlex}

  gap: 3rem;
  align-items: flex-start;

  ${media.tablet} {
    gap: 9.6rem;
    align-items: center;
    width: 100%;
    margin-top: 7.4rem;
  }
`;
