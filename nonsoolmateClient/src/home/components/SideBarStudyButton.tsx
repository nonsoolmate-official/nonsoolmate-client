import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { commonFlex } from "style/commonStyle";
import { SideBarTextBoxLayout } from "style/layout/SideBarTextBoxLayout";
import { StudyActiveIc, RightArrowIc } from "@assets/index";

export default function SideBarStudyButton() {
  const navigate = useNavigate();

  function handleMoveToHomeStudy() {
    navigate("/home/study");
  }

  return (
    <ButtonBox type="button" onClick={handleMoveToHomeStudy}>
      <StudyActiveIcon />
      <ButtonTextBox>
        <Text>학습하기</Text>
      </ButtonTextBox>
      <RightArrowIcon />
    </ButtonBox>
  );
}

const ButtonBox = styled.button`
  ${commonFlex};
`;

const StudyActiveIcon = styled(StudyActiveIc)`
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
