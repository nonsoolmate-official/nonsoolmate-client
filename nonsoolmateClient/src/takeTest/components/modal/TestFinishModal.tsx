import styled from "styled-components";
import Modal, { ModalContainer } from "./Modal";
import { columnFlex, commonFlex, lightBlueButtonStyle, mainButtonStyle } from "style/commonStyle";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

interface TestFinishProps {
  changeTestFinishStatus: (testFinishModal: boolean) => void;
  changeTestSubmitStatus: (testSubmitModal: boolean) => void;
  totalTime: number;
}
export default function TestFinishModal(props: TestFinishProps) {
  const { changeTestFinishStatus, changeTestSubmitStatus, totalTime } = props;
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isfile, setIsfile] = useState<File[] | null>(null);

  const hours = Math.floor(totalTime / 3600);
  const minutes = Math.floor((totalTime - hours * 3600) / 60);
  const seconds = totalTime - (hours * 3600 + minutes * 60);

  function handleSubmitButton() {
    fileInputRef.current && fileInputRef.current.click();
  }
  function handleFileInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    changeTestFinishStatus(false);
    changeTestSubmitStatus(true);
    if (e.target.files) {
      console.log(e.target.files);
      const fileList = Array.from(e.target.files);
      setIsfile(fileList);
    }
  }
  return (
    <TestFinishModalContaier>
      <Modal>
        <TestFinishModalBox>
          <ModalContent>
            <TotalTime>
              {`0${hours} : `}
              {minutes < 10 ? `0${minutes} : ` : `${minutes} : `}
              {seconds < 10 ? `0${seconds}` : `${seconds}`}
            </TotalTime>
            <ModalTitle>시험이 종료되었습니다.</ModalTitle>
            <ModalText>
              <ModalTextGrey>수고하셨습니다! 답안지를 이미지로 제출해주세요.</ModalTextGrey>
              <ModalTextRed>* 답안지 제출 시 첨삭권 1개를 사용합니다.</ModalTextRed>
            </ModalText>
          </ModalContent>
          <ButtonContainer>
            <TestQuitButton onClick={() => navigate("/home/test")}>나가기</TestQuitButton>
            <SelectFileButton onClick={handleSubmitButton}>제출하기</SelectFileButton>
            <FileInput
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              multiple={true}
              onChange={handleFileInputChange}
            />
          </ButtonContainer>
        </TestFinishModalBox>
      </Modal>
    </TestFinishModalContaier>
  );
}

const TestFinishModalContaier = styled(ModalContainer)`
  ${({ theme }) => theme.effects.dimmed_40};

  backdrop-filter: blur(0.3rem);
`;
const TestFinishModalBox = styled.div`
  ${columnFlex};

  gap: 3.6rem;
  padding: 5.4rem 6rem 4.4rem;
`;
const ModalContent = styled.div`
  ${columnFlex};

  gap: 2rem;
`;
const TotalTime = styled.div`
  ${({ theme }) => theme.fonts.Body6};

  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey_100};
  color: ${({ theme }) => theme.colors.grey_700};
`;
const ModalTitle = styled.h1`
  ${({ theme }) => theme.fonts.Headline4};
`;
const ModalText = styled.div`
  ${columnFlex}
  ${({ theme }) => theme.fonts.Body6};

  gap: 0.4rem;
`;
const ModalTextGrey = styled.p`
  color: ${({ theme }) => theme.colors.grey_700};
`;
const ModalTextRed = styled.p`
  color: ${({ theme }) => theme.colors.error};
`;
const ButtonContainer = styled.div`
  ${commonFlex};

  gap: 1.6rem;
`;
const TestQuitButton = styled(lightBlueButtonStyle)`
  width: 16rem;
  padding: 0.8rem 0;
`;

const SelectFileButton = styled(mainButtonStyle)`
  width: 16rem;
  padding: 0.8rem 0;
`;

const FileInput = styled.input`
  display: none;
`;
