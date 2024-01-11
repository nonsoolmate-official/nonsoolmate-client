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
      {CONTENT_LIST.map((ele) => {
        const { id, title, summary, sales, price } = ele;
        return <Subscribe key={id} id={id} title={title} summary={summary} sales={sales} price={price} />;
      })}
      <AdvantageContainer>
        <AdvanTitle />
        <Advantage />
      </AdvantageContainer>
    </Container>
  );
}

const Container = styled.section`
  ${commonFlex}

  gap: 2.4rem;
  margin-top: 8.1rem;
`;

const AdvantageContainer = styled.article`
  ${columnFlex}

  justify-content: space-between;
  align-items: flex-start;
  height: 34.5rem;
`;
