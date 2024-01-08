import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { commonFlex } from "style/commonStyle";
import { SideBarTextBoxLayout } from "style/layout/SideBarTextBoxLayout";
import { PracticeDisabledIc, RightArrowIc } from "@assets/index";

export default function SideBarPracticeButton() {
  const navigate = useNavigate();

  function handleMoveToHomePractice() {
    navigate("/home/practice");
  }

  return (
    <>
      <ButtonBox type="button" onClick={handleMoveToHomePractice}>
        <PracticeDisabledIcon />
        <ButtonTextBox>
          <Text>연습하기</Text>
        </ButtonTextBox>
        <RightArrowIcon />
      </ButtonBox>
    </>
  );
}

const ButtonBox = styled.button`
  ${commonFlex};
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
