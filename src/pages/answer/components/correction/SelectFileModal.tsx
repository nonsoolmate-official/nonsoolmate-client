import styled from "styled-components";

import { RecorrectionBlueIc } from "@assets/index";
import Modal, { ModalContainer } from "@pages/takeTest/components/modal/Modal";
import { useRef } from "react";
import { columnFlex, lightBlueButtonStyle, mainButtonStyle } from "style/commonStyle";

interface Props {
  changeSelectFileStatus: (selectFileModal: boolean) => void;
  changeFileSubmitStatus: (fileSubmitModal: boolean) => void;
  saveFile: (imageFile: File[]) => void;
}

export default function SelectFileModal(props: Props) {
  const { changeSelectFileStatus, changeFileSubmitStatus, saveFile } = props;

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleSubmitButton() {
    fileInputRef.current && fileInputRef.current.click();
  }
  function handleFileInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    changeSelectFileStatus(false);
    changeFileSubmitStatus(true);
    if (e.target.files) {
      const fileList = Array.from(e.target.files);
      saveFile(fileList);
    }
  }

  return (
    <EndTestModalContainer>
      <Modal>
        <EndTestModalBox>
          <ModalContent>
            <ModalText>
              <ModalTitle>재첨삭을 신청합니다</ModalTitle>
              <RecorrectionBlueIcon />
              <ModalSubTitle>
                첨삭 내용을 반영해 새로 작성한 <br />
                답안지를 이미지로 제출해주세요.
              </ModalSubTitle>
            </ModalText>
            <ButtonContainer>
              <CancelButton
                type="button"
                onClick={() => {
                  changeSelectFileStatus(false);
                }}>
                취소
              </CancelButton>
              <SelectButton type="button" onClick={handleSubmitButton}>
                파일 선택
              </SelectButton>
              <FileInput
                type="file"
                ref={fileInputRef}
                multiple={true}
                onChange={handleFileInputChange}
                accept="image/gif,image/jpeg,image/png,image/jpg,image/webp,image/heic"
              />
            </ButtonContainer>
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
  padding: 5.5rem 6rem 4.4rem;
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
const RecorrectionBlueIcon = styled(RecorrectionBlueIc)`
  width: 9.4rem;
  height: 8.3rem;
`;
const ModalSubTitle = styled.p`
  margin-top: 2.8rem;
  color: ${({ theme }) => theme.colors.grey_800};
  text-align: center;
  ${({ theme }) => theme.fonts.Body4};
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 1.6rem;
`;
const SelectButton = styled(mainButtonStyle)`
  width: 16rem;
  padding: 0.8rem 0;
`;
const CancelButton = styled(lightBlueButtonStyle)`
  width: 16rem;
  padding: 0.8rem 0;
`;
const FileInput = styled.input`
  display: none;
`;
