import styled from "styled-components";
import Subscribe from "./subscribe/Subscribe";
import { CONTENT_LIST } from "../core/contentlist";
import { columnFlex, commonFlex } from "style/commonStyle";
import Advantage from "./advantage/Advantage";
import BackgroundGrey from "./BackgroundGrey";
import AdvanTitle from "./advantage/Title";

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

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-top: 9.6rem;
  }
`;

const SubscribeWrapper = styled.div`
  display: flex;

  gap: 2.4rem;
`;

const Ipad = styled.div`
  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-between;

    margin-bottom: 13.5rem;
  }
`;

const IpadGrey = styled.div`
  @media (max-width: 1000px) {
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

  /* justify-content: space-between; */
  align-items: flex-start;

  gap: 3rem;

  @media (max-width: 1000px) {
    align-items: center;

    margin-top: 7.4rem;
    gap: 9.6rem;
  }
`;
