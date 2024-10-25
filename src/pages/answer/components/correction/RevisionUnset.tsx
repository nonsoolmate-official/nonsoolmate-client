import styled from "styled-components";
import { RecorrectionGrayIc } from "@assets/index";
import { media } from "style/responsiveStyle";

interface Props {
  changeSelectFileStatus: (selectFileModal: boolean) => void;
  isSubmit: boolean;
  revisionStatus: string;
}

export default function RevisionUnset(props: Props) {
  const { changeSelectFileStatus, isSubmit, revisionStatus } = props;

  return (
    <Container>
      <TitleWrapperContainer>
        <Title>재첨삭</Title>
      </TitleWrapperContainer>
      <Box>
        <IconWrapper>
          <RecorrectionGrayIcon />
        </IconWrapper>
        {isSubmit || revisionStatus == "재첨삭 진행 중" ? (
          <ContentText>재첨삭 진행 중이에요!</ContentText>
        ) : (
          <ContentText>아직 재첨삭을 신청하지 않았어요.</ContentText>
        )}
        {isSubmit || revisionStatus == "재첨삭 진행 중" ? (
          <></>
        ) : (
          <Button
            type="button"
            onClick={() => {
              changeSelectFileStatus(true);
            }}>
            재첨삭 신청
          </Button>
        )}
      </Box>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleWrapperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1.4rem;
  padding: 0;

  ${media.tablet} {
    margin-bottom: 0;
  }
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.Headline3};

  color: ${({ theme }) => theme.colors.black};

  ${media.tablet} {
    display: none;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.effects.pdf_shadow};

  width: 100%;
  height: calc(100vh - 16.4rem);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey_100};
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.1rem 1.8rem 2.1rem 2rem;
`;

const RecorrectionGrayIcon = styled(RecorrectionGrayIc)`
  width: 10rem;
  height: 10rem;
`;

const ContentText = styled.p`
  ${({ theme }) => theme.fonts.Body6};

  color: ${({ theme }) => theme.colors.grey_500};
`;

const Button = styled.button`
  display: flex;
  gap: 7px;
  align-items: flex-start;
  height: 3.6rem;
  margin-top: 1.6rem;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.main_blue};
  ${({ theme }) => theme.fonts.Body5};

  color: ${({ theme }) => theme.colors.grey_100};
`;
