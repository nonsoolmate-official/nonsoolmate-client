import styled from "styled-components";
import { HomeTestUnsetIc, FindTestIc } from "@assets/index";
import { UnsetContainerLayout } from "style/layout/UnsetContainerLayout";
import { UnsetContentLayout } from "style/layout/UnsetContentLayout";
import { mainButtonStyle } from "style/commonStyle";

export default function HomeTestUnset() {
  return (
    <Container>
      <Header>나의 시험장</Header>
      <Content>
        <HomeTestUnsetIcon />
        <ContentText>아직 목표대학을 설정하지 않았어요</ContentText>
        <FindTestButton type="button">
          <ButtonText>대학별 시험 찾기</ButtonText>
          <FindTestIcon />
        </FindTestButton>
      </Content>
    </Container>
  );
}

const Container = styled.section`
  ${UnsetContainerLayout}
`;

const Header = styled.h2`
  ${({ theme }) => theme.fonts.Headline5};

  display: flex;
  margin-left: 0.8rem;
`;

const Content = styled.section`
  ${UnsetContentLayout}

  padding: 14.6rem 0;
`;

const HomeTestUnsetIcon = styled(HomeTestUnsetIc)`
  width: 10.4rem;
  height: 10.4rem;
  padding: 1rem 1.5rem;
`;

const ContentText = styled.p`
  ${({ theme }) => theme.fonts.Body4};

  color: ${({ theme }) => theme.colors.grey_700};
`;

const FindTestButton = styled(mainButtonStyle)`
  ${({ theme }) => theme.fonts.Headline5};

  gap: 0.8rem;
  padding: 0.8rem 1.6rem;
`;

const ButtonText = styled.p`
  ${({ theme }) => theme.fonts.Body5};

  color: ${({ theme }) => theme.colors.grey_100};
`;

const FindTestIcon = styled(FindTestIc)`
  width: 2rem;
  height: 2rem;
`;
