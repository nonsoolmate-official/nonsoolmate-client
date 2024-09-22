import styled from "styled-components";
import Modal, { ModalContainer } from "takeTest/components/modal/Modal";
import { columnFlex, mainButtonStyle } from "style/commonStyle";
import Lottie from "react-lottie-player";
import lottieJson from "@assets/lottie/endtestsuccess.json";
import { useNavigate } from "react-router-dom";

interface Props {
  changeIsSubmitStatus: (isSubmit: boolean) => void;
}

export default function FileEndModal(props: Props) {
  const { changeIsSubmitStatus } = props;
  const navigate = useNavigate();

  function handleQuitButton() {
    navigate("/home/test");
    changeIsSubmitStatus(true);
  }

  return (
    <EndTestModalContainer>
      <Modal>
        <EndTestModalBox>
          <Lottie loop animationData={lottieJson} play />
          <ModalContent>
            <ModalText>
              <ModalTitle>수고하셨습니다!</ModalTitle>
              <ModalSubTitle>
                제출 완료! <br />
                재첨삭 결과는 일주일 뒤에 전달돼요.
              </ModalSubTitle>
            </ModalText>
            <QuitButton type="button" onClick={handleQuitButton}>
              확인
            </QuitButton>
          </ModalContent>
        </EndTestModalBox>
      </Modal>
    </EndTestModalContainer>
  );
}

const EndTestModalContainer = styled(ModalContainer)`
  ${({ theme }) => theme.effects.dimmed_40};

  backdrop-filter: blur(0.3rem);
`;
const EndTestModalBox = styled.div`
  ${columnFlex};

  gap: 1.2rem;
  width: 45.6rem;
  padding: 4.4rem 8.4rem;
`;
const ModalContent = styled.div`
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
