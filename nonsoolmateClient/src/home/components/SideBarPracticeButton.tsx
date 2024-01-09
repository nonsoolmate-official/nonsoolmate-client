import styled from "styled-components";
import { commonFlex } from "style/commonStyle";
import { SideBarTextBoxLayout } from "style/layout/SideBarTextBoxLayout";
import { PracticeDisabledIc, PracticeActiveIc, RightArrowIc, RightArrowBlueIc } from "@assets/index";

interface SideBarPracticeProps {
  handleMoveToHomePractice: Function;
  goTo: string;
}

export default function SideBarPracticeButton(props: SideBarPracticeProps) {
  const { handleMoveToHomePractice, goTo } = props;

  return (
    <ButtonBox type="button" onClick={() => handleMoveToHomePractice()}>
      {goTo === "practice" && <PracticeActiveIcon />}
      {goTo !== "practice" && <PracticeDisabledIcon />}
      <ButtonTextBox>
        <Text $goTo={goTo}>연습하기</Text>
      </ButtonTextBox>
      {goTo === "practice" && <RightArrowBlueIcon />}
      {goTo !== "practice" && <RightArrowIcon />}
    </ButtonBox>
  );
}

const ButtonBox = styled.button`
  ${commonFlex};
`;

const PracticeActiveIcon = styled(PracticeActiveIc)`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0;
`;

const PracticeDisabledIcon = styled(PracticeDisabledIc)`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0;
`;

const ButtonTextBox = styled.section`
  ${SideBarTextBoxLayout}
`;

const RightArrowIcon = styled(RightArrowIc)`
  width: 2rem;
  height: 2rem;
  padding: 0.1rem 0;
`;

const RightArrowBlueIcon = styled(RightArrowBlueIc)`
  width: 2rem;
  height: 2rem;
  padding: 0.1rem 0;
`;

const Text = styled.h3<{ $goTo: string }>`
  ${({ theme }) => theme.fonts.Body3};

  color: ${({ theme, $goTo }) => ($goTo === "practice" ? theme.colors.main_blue : theme.colors.grey_400)};
`;
