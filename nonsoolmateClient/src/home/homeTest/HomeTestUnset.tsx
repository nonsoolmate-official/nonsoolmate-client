import styled from "styled-components";
import { HomeTestUnsetIc, FindTestIc } from "@assets/index";
import { UnsetContentLayout, SetUnsetContainerLayout } from "style/layout/SetUnsetLayout";
import { mainButtonStyle } from "style/commonStyle";
import { media } from "style/responsiveStyle";
interface HomeTestUnsetProps {
  handleUniversityModal: (open: boolean) => void;
}

export default function HomeTestUnset(props: HomeTestUnsetProps) {
  const { handleUniversityModal } = props;
  return (
    <Container>
      <Box>
        <Header>나의 시험장</Header>
        <Content>
          <HomeTestUnsetIcon />
          <ContentText>아직 목표대학을 설정하지 않았어요</ContentText>
          <FindTestButton
            type="button"
            onClick={() => {
              handleUniversityModal(true);
            }}>
            <ButtonText>대학별 시험 찾기</ButtonText>
            <FindTestIcon />
          </FindTestButton>
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

const Header = styled.p`
  ${({ theme }) => theme.fonts.Headline5};

  display: flex;
  margin-left: 0.8rem;
`;

const Content = styled.section`
  ${UnsetContentLayout}

  padding: 14.2rem 0 16.7rem;

  ${media.tablet} {
    padding: 31.8rem 0 34.3rem;
  }
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
