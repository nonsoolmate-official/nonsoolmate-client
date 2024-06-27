import styled from "styled-components";
import Modal, { ModalContainer } from "./Modal";
import { columnFlex, mainButtonStyle } from "style/commonStyle";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie-player";
import lottieJson from "@assets/lottie/endtestsuccess.json";

export default function EndTestModal() {
  const navigate = useNavigate();
  function handleQuitButton() {
    navigate("/home/test");
  }
  return (
    <EndTestModalContainer>
      <Modal>
        <ModalContent>
          <Lottie loop animationData={lottieJson} play />
          <ModalTextBox>
            <ModalText>
              <ModalTitle>수고하셨습니다!</ModalTitle>
              <ModalSubTitle>제출 완료! 첨삭 결과는 일주일 뒤에 전달돼요.</ModalSubTitle>
            </ModalText>
            <QuitButton type="button" onClick={handleQuitButton}>
              시험 종료
            </QuitButton>
          </ModalTextBox>
        </ModalContent>
      </Modal>
    </EndTestModalContainer>
  );
}

const EndTestModalContainer = styled(ModalContainer)`
  ${({ theme }) => theme.effects.dimmed_40};

  backdrop-filter: blur(0.3rem);
`;
const ModalContent = styled.div`
  ${columnFlex};

  gap: 1.2rem;
  padding: 4.4rem 8.4rem;
`;
const ModalTextBox = styled.div`
  ${columnFlex};

  gap: 2rem;
`;
const ModalText = styled.div`
  ${columnFlex};
`;
const ModalTitle = styled.h1`
  ${({ theme }) => theme.fonts.Headline3};

  padding-bottom: 0.4rem;
`;
const ModalSubTitle = styled.p`
  ${({ theme }) => theme.fonts.Body4};

  color: ${({ theme }) => theme.colors.grey_500};
`;
const QuitButton = styled(mainButtonStyle)`
  width: 16rem;
  padding: 0.8rem 0;
`;
