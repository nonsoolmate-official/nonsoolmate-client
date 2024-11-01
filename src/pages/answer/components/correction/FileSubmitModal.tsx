import styled from "styled-components";

import { getPresignedUrl } from "@pages/takeTest/api/getPresignedUrl";
import Modal, { ModalContainer } from "@pages/takeTest/components/modal/Modal";
import { usePostExamRecord } from "@pages/takeTest/hooks/usePostExamRecord";
import { usePutExamSheet } from "@pages/takeTest/hooks/usePutExamSheet";

import Error from "@pages/error";
import JSZip from "jszip";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { columnFlex, mainButtonStyle } from "style/commonStyle";

interface Props {
  isFile: File[] | null;
  changeFileEndStatus: (testQuitModal: boolean) => void;
  changeFileSubmitStatus: (testQuitModal: boolean) => void;
}

export default function FileSubmitModal(props: Props) {
  const { isFile, changeFileEndStatus, changeFileSubmitStatus } = props;
  const { mutate: putMutate } = usePutExamSheet();
  const { mutate: postMutate } = usePostExamRecord();
  let zip = new JSZip();
  const location = useLocation();
  const { examId } = location.state;
  const buttonRef = useRef<HTMLButtonElement>(null);

  async function handleZipCreation() {
    if (buttonRef.current) {
      buttonRef.current.disabled = true;
    }
    const response = await getPresignedUrl(examId, "REVISION");
    if (!response) return <Error />;

    const { resultFileName, preSignedUrl } = response?.data;

    if (isFile) {
      let filePromises = isFile.map((file) => {
        return new Promise<void>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = function (event) {
            const target = event.target;
            if (target && target.result) {
              zip.file(file.name, target.result, { binary: true });
              resolve();
            } else {
              reject("File reading failed");
            }
          };
          reader.onerror = reject;
          reader.readAsBinaryString(file);
        });
      });

      Promise.all(filePromises)
        .then(() => {
          return zip.generateAsync({ type: "blob" });
        })
        .then((blob) => {
          putMutate(
            { blob, url: preSignedUrl },
            {
              onSuccess: () => {
                postMutate(
                  { examId: examId, totalTime: 120, fileName: resultFileName, editingType: "REVISION" },
                  {
                    onSuccess: () => {
                      changeFileSubmitStatus(false);
                      changeFileEndStatus(true);
                    },
                  },
                );
              },
              onError: (error) => {
                console.error("Put request failed:", error);
              },
            },
          );
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
    }
  }
  return (
    <TestSubmitModalCotainer>
      <Modal>
        <ModalContent>
          <ModalTitle>아래 파일을 제출하시겠습니까?</ModalTitle>
          <ModalFile>{isFile?.map((item) => <FileName key={item.name}>{item.name}</FileName>)}</ModalFile>
          <SubmitButton onClick={handleZipCreation} type="button" ref={buttonRef}>
            제출하기
          </SubmitButton>
        </ModalContent>
      </Modal>
    </TestSubmitModalCotainer>
  );
}
const TestSubmitModalCotainer = styled(ModalContainer)`
  ${({ theme }) => theme.effects.dimmed_40};

  backdrop-filter: blur(0.3rem);
`;
const ModalContent = styled.div`
  ${columnFlex};

  gap: 2.4rem;
  padding: 5.4rem 5.6rem 4.4rem;
`;
const ModalTitle = styled.h1`
  ${({ theme }) => theme.fonts.Headline4};

  padding-bottom: 0.1rem;
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
