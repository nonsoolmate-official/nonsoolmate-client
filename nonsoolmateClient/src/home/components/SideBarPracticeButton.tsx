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
      {goTo != "practice" && <PracticeDisabledIcon />}
      <ButtonTextBox>
        <Text>연습하기</Text>
      </ButtonTextBox>
      {goTo === "practice" && <RightArrowBlueIcon />}
      {goTo != "practice" && <RightArrowIcon />}
    </ButtonBox>
  );
}

const ButtonBox = styled.button`
  ${commonFlex};
`;
const PracticeActiveIcon = styled(PracticeActiveIc)`
  padding: 0;
`;
const PracticeDisabledIcon = styled(PracticeDisabledIc)`
  padding: 0;
`;

const ButtonTextBox = styled.section`
  ${SideBarTextBoxLayout}
`;

const Text = styled.h3`
  ${({ theme }) => theme.fonts.Body3};

  color: ${({ theme }) => theme.colors.grey_400};
`;

const RightArrowIcon = styled(RightArrowIc)`
  padding: 0.1rem 0;
`;

const RightArrowBlueIcon = styled(RightArrowBlueIc)`
  padding: 0.1rem;
`;
