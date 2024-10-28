import styled from "styled-components";
import { PracticeSidebarIc } from "@assets/index";
import { SetUnsetContainerLayout, UnsetContentLayout } from "style/layout/SetUnsetLayout";
import { media } from "style/responsiveStyle";

export default function HomePractice() {
  return (
    <Container>
      <Box>
        <Header>나의 연습장</Header>
        <Content>
          <PracticeSidebarIcon />
          <ContentText>가입하신 이메일로 유형별 연습문제 pdf 파일을 모두 보내드렸어요!</ContentText>
          <ContentText>다운받아 최대한 많이 풀어보세요:)</ContentText>
        </Content>
      </Box>
    </Container>
  );
}

const Container = styled.section`
  ${SetUnsetContainerLayout}

  overflow-y: scroll;
  scrollbar-width: none;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin: 6.7rem 21.5rem 11.5rem 2.4rem;

  ${media.tablet} {
    margin: 4rem 3.2rem 6.6rem;
  }
`;

const Header = styled.h3`
  ${({ theme }) => theme.fonts.Headline5};

  display: flex;
  margin-left: 0.8rem;
`;

const Content = styled.section`
  ${UnsetContentLayout}

  padding: 18.2rem 0 18.8rem;
  background-color: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    padding: 31.8rem 0 34.3rem;
  }
`;

const PracticeSidebarIcon = styled(PracticeSidebarIc)`
  width: 10.4rem;
  height: 6.1rem;
`;

const ContentText = styled.p`
  ${({ theme }) => theme.fonts.Body4};

  color: ${({ theme }) => theme.colors.grey_700};
`;
