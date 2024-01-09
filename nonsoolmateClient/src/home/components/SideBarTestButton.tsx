import styled from "styled-components";
import { commonFlex } from "style/commonStyle";
import { SideBarTextBoxLayout } from "style/layout/SideBarTextBoxLayout";
import { TestActiveIc, TestDisabledIc, RightArrowIc, RightArrowBlueIc } from "@assets/index";

interface SideBarTestProps {
  handleMoveToHomeTest: Function;
  goTo: string;
}

export default function SideBarTestButton(props: SideBarTestProps) {
  const { handleMoveToHomeTest, goTo } = props;

  return (
    <ButtonBox type="button" onClick={() => handleMoveToHomeTest()}>
      {goTo === "test" && <TestActiveIcon />}
      {goTo != "test" && <TestDisabledIcon />}
      <ButtonTextBox>
        <Text $goTo={goTo}>시험보기</Text>
      </ButtonTextBox>
      {goTo === "test" && <RightArrowBlueIcon />}
      {goTo != "test" && <RightArrowIcon />}
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

const Text = styled.h3<{ $goTo: string }>`
  ${({ theme }) => theme.fonts.Body3};

  color: ${({ theme, $goTo }) => ($goTo === "test" ? theme.colors.main_blue : theme.colors.grey_400)};
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
