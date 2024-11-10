import { columnFlex, commonFlex } from "style/commonStyle";
import styled from "styled-components";
import { media } from "style/responsiveStyle";

export default function Title() {
  return (
    <Container>
      <Text>논술 직전 파이널을 위한 최고의 선택</Text>
      <Text>
        프리미엄 첨삭,&nbsp;<Nonsool> 논술메이트 </Nonsool>와 함께하세요
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

  ${media.mob} {
    margin-top: 8rem;
  }
`;

const Text = styled.h1`
  ${commonFlex}

  ${({ theme }) => theme.fonts.Headline2};

  ${media.mobile} {
    ${({ theme }) => theme.fonts.Headline5};
  }
`;

const Nonsool = styled.p`
  ${({ theme }) => theme.fonts.Headline2};

  color: ${({ theme }) => theme.colors.main_blue};

  ${media.mobile} {
    ${({ theme }) => theme.fonts.Headline5};
  }
`;
