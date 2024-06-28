import { columnFlex, commonFlex } from "style/commonStyle";
import styled from "styled-components";

export default function Title() {
  return (
    <Container>
      <Text>더 많은 자료와 개인화된 채점</Text>
      <Text>
        온라인 과외,&nbsp;<Nonsool> 논술메이트 </Nonsool>와 함께하세요
      </Text>
    </Container>
  );
}

const Container = styled.div`
  ${columnFlex}

  gap: 0.4rem;
  margin-top: 6rem;

  @media (max-width: 1000px) {
    margin-top: 10rem;
  }
`;

const Text = styled.h1`
  ${commonFlex}

  ${({ theme }) => theme.fonts.Headline2};
`;

const Nonsool = styled.p`
  ${({ theme }) => theme.fonts.Headline2};

  color: ${({ theme }) => theme.colors.main_blue};
`;
