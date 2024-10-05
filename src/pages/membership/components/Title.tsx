import { columnFlex, commonFlex } from "style/commonStyle";
import styled from "styled-components";
import { media } from "style/responsiveStyle";

export default function Title() {
  return (
    <Container>
      <Text>첨삭 그 이상의 개인화된 채점 및 관리</Text>
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

  ${media.tablet} {
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
