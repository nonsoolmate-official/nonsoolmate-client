import styled from "styled-components";
import { commonFlex } from "style/commonStyle";
import { SideBarTextBoxLayout } from "style/layout/SideBarTextBoxLayout";
import { StudyActiveIc, RightArrowIc, StudyDisabledIc, RightArrowBlueIc } from "@assets/index";

interface SideBarStudyProps {
  handleMoveToHomeStudy: () => void;
  currentPage: string;
}

export default function SideBarStudyButton(props: SideBarStudyProps) {
  const { handleMoveToHomeStudy, currentPage } = props;

  return (
    <ButtonBox type="button" onClick={handleMoveToHomeStudy}>
      {currentPage === "study" && <StudyActiveIcon />}
      {currentPage != "study" && <StudyDisabledIcon />}
      <ButtonTextBox>
        <Text $currentPage={currentPage}>학습하기</Text>
      </ButtonTextBox>
      {currentPage === "study" && <RightArrowBlueIcon />}
      {currentPage != "study" && <RightArrowIcon />}
    </ButtonBox>
  );
}

const ButtonBox = styled.button`
  ${commonFlex};
`;

const StudyActiveIcon = styled(StudyActiveIc)`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0;
`;

const StudyDisabledIcon = styled(StudyDisabledIc)`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0;
`;

const ButtonTextBox = styled.section`
  ${SideBarTextBoxLayout}
`;

const Text = styled.h3<{ $currentPage: string }>`
  ${({ theme }) => theme.fonts.Body3};

  color: ${({ theme, $currentPage }) => ($currentPage === "study" ? theme.colors.main_blue : theme.colors.grey_400)};
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
