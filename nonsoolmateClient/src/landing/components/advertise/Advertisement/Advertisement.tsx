import Summary from "./Summary";
import Image from "./Image";
import ReasonTitle from "./Title";
import styled from "styled-components";
import { columnFlex } from "style/commonStyle";
import { ReasonListType } from "landing/types/reasonListType";

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
  height: 22rem;
  padding: 2rem 2.4rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const TextContainer = styled.div`
  ${columnFlex}

  align-items: flex-start;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
