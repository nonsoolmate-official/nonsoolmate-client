import styled from "styled-components";
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
      {currentPage === "test" ? <TestActiveIcon /> : <TestDisabledIcon />}
      <ButtonTextBox>
        <Text $currentPage={currentPage}>시험보기</Text>
      </ButtonTextBox>
      {currentPage === "test" ? <RightArrowBlueIcon /> : <RightArrowIcon />}
    </ButtonBox>
  );
}

const ButtonBox = styled.button`
  display: flex;
  align-items: center;
  height: 4rem;
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
  margin-left: 3.1rem;
  padding: 0.1rem 0;
`;

const RightArrowBlueIcon = styled(RightArrowBlueIc)`
  width: 2rem;
  height: 2rem;
  margin-left: 3.1rem;
  padding: 0.1rem 0;
`;
