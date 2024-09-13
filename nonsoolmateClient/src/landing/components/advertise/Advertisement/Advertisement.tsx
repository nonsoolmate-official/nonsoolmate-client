import Image from "./Image";
import ReasonTitle from "./Title";
import styled from "styled-components";
import { columnFlex } from "style/commonStyle";
import { ReasonListType } from "landing/types/reasonListType";
import { useState } from "react";
import { CloseIc, PlusIc } from "@assets/index";

interface AdvertisementProps extends ReasonListType {}

export default function Advertisement(props: AdvertisementProps) {
  const { title, summary, img, summary2 } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <ReasonTitle advertiseTitle={title} />
      <ContentContainer>
        <IconWrapper $isHovered={isHovered}>{isHovered ? <CloseIc /> : <PlusIc />}</IconWrapper>
        <SummaryContainer $isHovered={isHovered}>
          <Text>{summary}</Text>
          <Text>{summary2}</Text>
        </SummaryContainer>
        <ImageWrapper>
          <Image advertiseImg={img} />
        </ImageWrapper>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  position: relative;
  width: 29.6rem;
  height: 22rem;
  padding: 2rem 2.4rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div<{ $isHovered: boolean }>`
  position: absolute;
  top: 5.2rem;
  width: 2rem;
  transform: ${({ $isHovered }) => ($isHovered ? "translateY(12rem)" : "translateY(0)")};
  transition: transform 0.5s ease;
`;

const SummaryContainer = styled.div<{ $isHovered: boolean }>`
  ${columnFlex}

  display: ${({ $isHovered }) => ($isHovered ? "flex" : "none")};
  align-items: flex-start;
  width: 25.9rem;
`;

const ImageWrapper = styled.div`
  position: absolute;
  right: 2.4rem;
  bottom: 2rem;
`;

const Text = styled.p`
  z-index: 1;
  color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Body6};
`;
