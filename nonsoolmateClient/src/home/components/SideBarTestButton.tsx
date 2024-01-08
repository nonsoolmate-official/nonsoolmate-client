import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { commonFlex } from "style/commonStyle";
import { SideBarTextBoxLayout } from "style/layout/SideBarTextBoxLayout";
import { TestDisabledIc, RightArrowIc } from "@assets/index";

export default function SideBarTestButton() {
  const navigate = useNavigate();

  function handleMoveToHomeTest() {
    navigate("/home/test");
  }

  return (
    <>
      <ButtonBox type="button" onClick={handleMoveToHomeTest}>
        <TestDisabledIcon />
        <ButtonTextBox>
          <Text>시험보기</Text>
        </ButtonTextBox>
        <RightArrowIcon />
      </ButtonBox>
    </>
  );
}

const ButtonBox = styled.button`
  ${commonFlex};
`;

const TestDisabledIcon = styled(TestDisabledIc)`
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
