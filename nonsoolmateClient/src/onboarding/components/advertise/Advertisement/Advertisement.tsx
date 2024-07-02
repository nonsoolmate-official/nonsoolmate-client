import Summary from "./Summary";
import Image from "./Image";
import ReasonTitle from "./Title";
import { ReasonListType } from "onboarding/types/reasonListType";
import styled from "styled-components";
import { columnFlex } from "style/commonStyle";
import { media } from "style/responsiveStyle";

interface AdvertisementProps extends ReasonListType {}

export default function Advertisement(props: AdvertisementProps) {
  const { title, summary, img, summary2 } = props;
  return (
    <Container>
      <TextContainer>
        <ReasonTitle advertiseTitle={title} />
        <Summary summaryText={summary} summaryText2={summary2} />
      </TextContainer>
      <ImageWrapper>
        <Image advertiseImg={img} />
      </ImageWrapper>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  padding: 2rem 2.4rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    width: 34.8rem;
  }
`;

const TextContainer = styled.div`
  ${columnFlex}

  align-items: flex-start;
  width: 24.8rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
