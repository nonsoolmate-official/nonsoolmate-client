import styled from "styled-components";
import { EmptyIc } from "@assets/index";
import { SetUnsetContainerLayout, UnsetContentLayout } from "style/layout/SetUnsetLayout";
import { media } from "style/responsiveStyle";

export default function HomePractice() {
  return (
    <Container>
      <Box>
        <Header>나의 연습장</Header>
        <Content>
          <EmptyIcon />
          <ContentText>아직 준비 중이에요!</ContentText>
        </Content>
      </Box>
    </Container>
  );
}

const Container = styled.section`
  ${SetUnsetContainerLayout}

  overflow-y: hidden;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin: 6.7rem 21.5rem 11.5rem 2.4rem;

  ${media.tablet} {
    margin: 4rem 3.2rem 6.6rem 3.2rem;
  }
`;

const Header = styled.h3`
  ${({ theme }) => theme.fonts.Headline5};

  display: flex;
  margin-left: 0.8rem;
`;

const Content = styled.section`
  ${UnsetContentLayout}

  padding: 18.2rem 0 21rem;

  ${media.tablet} {
    padding: 31.8rem 0 34.3rem;
  }
`;

const EmptyIcon = styled(EmptyIc)`
  width: 10.4rem;
  height: 6.1rem;
`;

const ContentText = styled.p`
  ${({ theme }) => theme.fonts.Body4};

  color: ${({ theme }) => theme.colors.grey_700};
`;
