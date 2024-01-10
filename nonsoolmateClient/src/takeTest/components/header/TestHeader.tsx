import { commonFlex, lightBlueButtonStyle, mainButtonStyle } from "style/commonStyle";
import styled from "styled-components";
import Timer from "./Timer";
import { LeftArrowBlackBtn } from "@assets/index";

interface TestHeaderProps {
  changeTestQuitStatus: (testQuitModal: boolean) => void;
  changeTestFinishStatus: (testFinishModal: boolean) => void;
  computeTakeTime: (totalTime: number) => void;
  openPrecautionModal: boolean;
  openCoachMark: boolean;
  openTestFinishModal: boolean;
  openTestSubmitModal: boolean;
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
  } = props;

  function handleBackButton() {
    changeTestQuitStatus(true);
  }
  return (
    <TestHeaderContainer>
      <HeaderLeft>
        <IconBox onClick={handleBackButton}>
          <LeftArrowBlackBtnIcon />
        </IconBox>
        <TestTitle>중앙대학교 - 2021 인문사회 1</TestTitle>
      </HeaderLeft>
      <TimerBox>
        {openCoachMark || openPrecautionModal ? (
          <InitTimer>00 : 00 : 00</InitTimer>
        ) : (
          <Timer
            changeTestFinishStatus={changeTestFinishStatus}
            computeTakeTime={computeTakeTime}
            openTestFinishModal={openTestFinishModal}
            openTestSubmitModal={openTestSubmitModal}
          />
        )}
      </TimerBox>
      <TestCloseButton type="button" onClick={() => changeTestFinishStatus(true)}>
        시험 종료
      </TestCloseButton>
    </TestHeaderContainer>
  );
}
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
const IconBox = styled.div`
  padding: 0;
`;
const LeftArrowBlackBtnIcon = styled(LeftArrowBlackBtn)`
  width: 4rem;
  height: 4rem;
`;
const TestTitle = styled.h1`
  ${({ theme }) => theme.fonts.Headline5};
`;
const TimerBox = styled(lightBlueButtonStyle)`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 16.4rem;
  height: 4rem;
  padding: 0;
`;
const InitTimer = styled.p`
  ${({ theme }) => theme.fonts.Headline4};
`;
