import styled from "styled-components";
import { commonFlex } from "style/commonStyle";
import { SideBarTextBoxLayout } from "style/layout/SideBarTextBoxLayout";
import { PracticeDisabledIc, PracticeActiveIc, RightArrowIc, RightArrowBlueIc } from "@assets/index";

interface SideBarPracticeProps {
  handleMoveToHomePractice: () => void;
  currentPage: string;
}

export default function SideBarPracticeButton(props: SideBarPracticeProps) {
  const { handleMoveToHomePractice, currentPage } = props;

  return (
    <ButtonBox type="button" onClick={handleMoveToHomePractice}>
      {currentPage === "practice" && <PracticeActiveIcon />}
      {currentPage !== "practice" && <PracticeDisabledIcon />}
      <ButtonTextBox>
        <Text $currentPage={currentPage}>연습하기</Text>
      </ButtonTextBox>
      {currentPage === "practice" && <RightArrowBlueIcon />}
      {currentPage !== "practice" && <RightArrowIcon />}
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

const Text = styled.h3<{ $currentPage: string }>`
  ${({ theme }) => theme.fonts.Body3};

  color: ${({ theme, $currentPage }) => ($currentPage === "practice" ? theme.colors.main_blue : theme.colors.grey_400)};
`;
