import styled from "styled-components";
import { commonFlex } from "style/commonStyle";
import { SideBarTextBoxLayout } from "style/layout/SideBarTextBoxLayout";
import { StudyActiveIc, RightArrowIc, StudyDisabledIc, RightArrowBlueIc } from "@assets/index";

interface SideBarStudyProps {
  handleMoveToHomeStudy: Function;
  goTo: string;
}

export default function SideBarStudyButton(props: SideBarStudyProps) {
  const { handleMoveToHomeStudy, goTo } = props;

  return (
    <ButtonBox type="button" onClick={() => handleMoveToHomeStudy()}>
      {goTo === "study" && <StudyActiveIcon />}
      {goTo != "study" && <StudyDisabledIcon />}
      <ButtonTextBox>
        <Text $goTo={goTo}>학습하기</Text>
      </ButtonTextBox>
      {goTo === "study" && <RightArrowBlueIcon />}
      {goTo != "study" && <RightArrowIcon />}
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

const Text = styled.h3<{ $goTo: string }>`
  ${({ theme }) => theme.fonts.Body3};

  color: ${({ theme, $goTo }) => ($goTo === "study" ? theme.colors.main_blue : theme.colors.grey_400)};
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
