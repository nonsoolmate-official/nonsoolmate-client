import styled from "styled-components";
import { commonFlex } from "style/commonStyle";
import { SideBarTextBoxLayout } from "style/layout/SideBarTextBoxLayout";
import { TestActiveIc, TestDisabledIc, RightArrowIc, RightArrowBlueIc } from "@assets/index";

interface SideBarTestProps {
  handleMoveToHomeTest: () => void;
  currentPage: string;
}

export default function SideBarTestButton(props: SideBarTestProps) {
  const { handleMoveToHomeTest, currentPage } = props;

  return (
    <ButtonBox type="button" onClick={handleMoveToHomeTest}>
      {currentPage === "test" && <TestActiveIcon />}
      {currentPage != "test" && <TestDisabledIcon />}
      <ButtonTextBox>
        <Text $currentPage={currentPage}>시험보기</Text>
      </ButtonTextBox>
      {currentPage === "test" && <RightArrowBlueIcon />}
      {currentPage != "test" && <RightArrowIcon />}
    </ButtonBox>
  );
}

const ButtonBox = styled.button`
  ${commonFlex};
`;

const TestDisabledIcon = styled(TestDisabledIc)`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0;
`;

const TestActiveIcon = styled(TestActiveIc)`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0;
`;

const ButtonTextBox = styled.section`
  ${SideBarTextBoxLayout}
`;

const Text = styled.h3<{ $currentPage: string }>`
  ${({ theme }) => theme.fonts.Body3};

  color: ${({ theme, $currentPage }) => ($currentPage === "test" ? theme.colors.main_blue : theme.colors.grey_400)};
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
