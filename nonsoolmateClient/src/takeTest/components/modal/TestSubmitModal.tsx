import styled from "styled-components";
import Modal, { ModalContainer } from "./Modal";
import { columnFlex, mainButtonStyle } from "style/commonStyle";

export default function TestSubmitModal() {
  return (
    <TestSubmitModalCotainer>
      <Modal>
        <TestSubmitModalBox>
          <ModalContent>
            <ModalTitle>아래 파일을 제출하시겠습니까?</ModalTitle>
            <ModalFile>
              <FileName>IMG_C691AD594A09-1.png</FileName>
              <FileName>IMG_B7D81A9E3704-1.png</FileName>
              <FileName>IMG_468416DAC227-1.png</FileName>
            </ModalFile>
            <SubmitButton>제출하기</SubmitButton>
          </ModalContent>
        </TestSubmitModalBox>
      </Modal>
    </TestSubmitModalCotainer>
  );
}
const TestSubmitModalCotainer = styled(ModalContainer)`
  background-color: ${({ theme }) => theme.effects.dimmed_40};
  backdrop-filter: blur(0.3rem);
`;
const TestSubmitModalBox = styled.div`
  ${columnFlex};

  gap: 2.4rem;
  padding: 5.4rem 5.6rem 4.4rem;
`;
const ModalContent = styled.div`
  ${columnFlex};

  gap: 2.5rem;
`;
const ModalTitle = styled.h1`
  ${({ theme }) => theme.fonts.Headline4};
`;
const ModalFile = styled.div`
  ${columnFlex};

  gap: 1.2rem;
`;
const FileName = styled.p`
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey_100};
  color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Body6};
`;
const SubmitButton = styled(mainButtonStyle)`
  width: 34.4rem;
  padding: 0.8rem 0;
`;
