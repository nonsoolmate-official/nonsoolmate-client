import styled from "styled-components";
import Modal, { ModalContainer } from "./Modal";
import { columnFlex, commonFlex, lightBlueButtonStyle, mainButtonStyle } from "style/commonStyle";
import { useNavigate } from "react-router-dom";

interface TestQuitStatusProps {
  changeTestQuitStatus: (testQuitModal: boolean) => void;
}
export default function TestQuitModal(props: TestQuitStatusProps) {
  const navigate = useNavigate();
  const { changeTestQuitStatus } = props;

  return (
    <TestQuitModalContainer>
      <Modal>
        <TestQuitModalBox>
          <ModalContent>
            <ModalTitle>페이지를 나가시겠습니까?</ModalTitle>
            <ModalText>시험 기록이 저장되지 않습니다.</ModalText>
          </ModalContent>
          <ButtonContainer>
            <TestQuitButton type="button" onClick={() => navigate("/home/test")}>
              나가기
            </TestQuitButton>
            <StayButton type="button" onClick={() => changeTestQuitStatus(false)}>
              머무르기
            </StayButton>
          </ButtonContainer>
        </TestQuitModalBox>
      </Modal>
    </TestQuitModalContainer>
  );
}
const TestQuitModalContainer = styled(ModalContainer)`
  ${({ theme }) => theme.effects.dimmed_40};

  backdrop-filter: blur(0.3rem);
`;
const TestQuitModalBox = styled.div`
  ${columnFlex};

  gap: 3.8rem;
  padding: 5.4rem 6rem 4.4rem;
`;
const ModalContent = styled.div`
  ${columnFlex};

  gap: 2rem;
`;
const ModalTitle = styled.h1`
  ${({ theme }) => theme.fonts.Headline4};
`;
const ModalText = styled.p`
  ${({ theme }) => theme.fonts.Body4};

  color: ${({ theme }) => theme.colors.grey_700};
`;
const ButtonContainer = styled.div`
  ${commonFlex};

  gap: 1.6rem;
`;
const TestQuitButton = styled(lightBlueButtonStyle)`
  width: 16rem;
  padding: 0.8rem 0;
`;
const StayButton = styled(mainButtonStyle)`
  width: 16rem;
  padding: 0.8rem 0;
`;
