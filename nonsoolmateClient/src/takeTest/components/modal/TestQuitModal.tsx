import styled from "styled-components";
import Modal, { ModalContainer } from "./Modal";
import { columnFlex, commonFlex, lightBlueButtonStyle, mainButtonStyle } from "style/commonStyle";

export default function TestQuitModal() {
  return (
    <TestQuitModalContainer>
      <Modal>
        <TestQuitModalBox>
          <ModalContent>
            <ModalTitle>페이지를 나가시겠습니까?</ModalTitle>
            <ModalText>시험 기록이 저장되지 않습니다.</ModalText>
          </ModalContent>
          <ButtonContainer>
            <TestQuitButton>나가기</TestQuitButton>
            <StayButton>머무르기</StayButton>
          </ButtonContainer>
        </TestQuitModalBox>
      </Modal>
    </TestQuitModalContainer>
  );
}
const TestQuitModalContainer = styled(ModalContainer)`
  ${({ theme }) => theme.effects.dimmed_60};

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
  ${({ theme }) => theme.fonts.Body6};

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
