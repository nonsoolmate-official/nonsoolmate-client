import { columnFlex, commonFlex, mainButtonStyle } from "style/commonStyle";
import styled from "styled-components";
import Timer from "./Timer";
import { LeftArrowBlackBtn } from "@assets/index";
import { media } from "style/responsiveStyle";
import { useRecoilState, useRecoilValue } from "recoil";
import { takeTestPdfPlugin } from "recoil/atom";
import { useNavigate } from "react-router-dom";

interface TestHeaderProps {
  changeTestQuitStatus: (testQuitModal: boolean) => void;
  changeTestFinishStatus: (testFinishModal: boolean) => void;
  computeTakeTime: (totalTime: number) => void;
  openPrecautionModal: boolean;
  openCoachMark: boolean;
  openTestFinishModal: boolean;
  openTestSubmitModal: boolean;
  examName: string;
  examTimeLimit: number;
  examId: number;
}

export default function TestHeader(props: TestHeaderProps) {
  const {
    changeTestQuitStatus,
    changeTestFinishStatus,
    computeTakeTime,
    openPrecautionModal,
    openCoachMark,
    openTestFinishModal,
    openTestSubmitModal,
    examName,
    examTimeLimit,
    examId,
  } = props;

  const navigate = useNavigate();
  const pdfPlugin = useRecoilValue(takeTestPdfPlugin);
  const [, setPdfPlugin] = useRecoilState(takeTestPdfPlugin);

  function handleBackButton() {
    changeTestQuitStatus(true);
  }

  return (
    <TestHeaderContainer>
      <HeaderLeft>
        {pdfPlugin ? (
          <IconBox onClick={() => navigate("/home/test")} type="button">
            <LeftArrowBlackBtnIcon />
          </IconBox>
        ) : (
          <IconBox onClick={handleBackButton} type="button">
            <LeftArrowBlackBtnIcon />
          </IconBox>
        )}
        {pdfPlugin ? (
          <TestTitle>인쇄/다운로드</TestTitle>
        ) : (
          <TestTitle>{openCoachMark || openPrecautionModal ? "시험 예시 화면" : examName}</TestTitle>
        )}
      </HeaderLeft>
      <IpadHeaderRight>
        {pdfPlugin ? (
          <></>
        ) : (
          <TimerBox>
            {openCoachMark || openPrecautionModal ? (
              <InitTimer>00 : 00 : 00</InitTimer>
            ) : (
              <Timer
                changeTestFinishStatus={changeTestFinishStatus}
                computeTakeTime={computeTakeTime}
                openTestFinishModal={openTestFinishModal}
                openTestSubmitModal={openTestSubmitModal}
                examTimeLimit={examTimeLimit}
              />
            )}
          </TimerBox>
        )}
        {pdfPlugin ? (
          <TestCloseButton
            onClick={() => {
              navigate("/takeTest", {
                state: {
                  examId: examId,
                },
              });
              setPdfPlugin(false);
            }}
            type="button">
            준비 완료
          </TestCloseButton>
        ) : (
          <TestCloseButton type="button" onClick={() => changeTestFinishStatus(true)}>
            시험 종료
          </TestCloseButton>
        )}
      </IpadHeaderRight>
    </TestHeaderContainer>
  );
}
//
const TestHeaderContainer = styled.header`
  ${commonFlex};

  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 1.1rem 3.6rem 1.3rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 1.2rem 0 ${({ theme }) => theme.colors.grey_200};
`;
const TestCloseButton = styled(mainButtonStyle)`
  padding: 0.6rem 1.6rem;
  ${({ theme }) => theme.fonts.Headline5};
`;
const HeaderLeft = styled.div`
  ${commonFlex};

  gap: 0.8rem;
`;
const IconBox = styled.button`
  padding: 0;
`;
const LeftArrowBlackBtnIcon = styled(LeftArrowBlackBtn)`
  ${columnFlex}

  width: 4rem;
  height: 4rem;
`;
const TestTitle = styled.h1`
  ${({ theme }) => theme.fonts.Headline5};
`;
const IpadHeaderRight = styled.div`
  ${media.tablet} {
    ${commonFlex}

    justify-content: space-between;
  }
`;
const TimerBox = styled.div`
  ${commonFlex}

  position: absolute;
  left: 50%;
  width: 16.4rem;
  height: 4rem;
  padding: 0;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.light_blue};
  color: ${({ theme }) => theme.colors.main_blue};
  transform: translate(-50%);

  ${media.tablet} {
    position: relative;
    left: 25%;
  }
`;
const InitTimer = styled.p`
  ${({ theme }) => theme.fonts.Headline4};
`;
