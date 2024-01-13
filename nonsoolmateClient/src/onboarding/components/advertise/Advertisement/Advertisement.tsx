import Summary from "./Summary";
import Image from "./Image";
import ReasonTitle from "./Title";

import { ReasonListType } from "onboarding/types/reasonListType";

import styled from "styled-components";
import { columnFlex } from "style/commonStyle";

interface AdvertisementProps extends ReasonListType {}

export default function Advertisement(props: AdvertisementProps) {
  const { title, summary, img, summary2 } = props;
  return (
    <Container>
      <ContentContainer>
        <TextContainer>
          <ReasonTitle advertiseTitle={title} />
          <Summary summaryText={summary} summaryText2={summary2} />
        </TextContainer>
        <Image advertiseImg={img} />
      </ContentContainer>
    </Container>
  );
}

const Container = styled.article`
  ${columnFlex}

  width: 29.6rem;
  height: 22rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const TextContainer = styled.div`
  ${columnFlex}

  align-items: flex-start;
  width: 24.8rem;
`;

const ContentContainer = styled.div`
  ${columnFlex}

  align-items: flex-end;
  width: 24.8rem;
  height: 18.4rem;
`;
