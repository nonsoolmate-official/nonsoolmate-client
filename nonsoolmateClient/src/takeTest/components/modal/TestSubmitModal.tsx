import styled from "styled-components";
import Modal, { ModalContainer } from "./Modal";
import { columnFlex, mainButtonStyle } from "style/commonStyle";
import JSZip from "jszip";
import { useNavigate } from "react-router-dom";

interface TestSubmitProps {
  isFile: File[] | null;
}
export default function TestSubmitModal(props: TestSubmitProps) {
  const { isFile } = props;
  let zip = new JSZip();
  const navigate = useNavigate();

  const handleZipCreation = () => {
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
          //saveAs(blob,"files.zip")
          //mutate(blob)
          console.log("Blob type:", blob.type);
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
    }
    navigate("/home/test");
  };
  return (
    <TestSubmitModalCotainer>
      <Modal>
        <TestSubmitModalBox>
          <ModalContent>
            <ModalTitle>아래 파일을 제출하시겠습니까?</ModalTitle>
            <ModalFile>{isFile?.map((item) => <FileName key={item.name}>{item.name}</FileName>)}</ModalFile>
            <SubmitButton onClick={handleZipCreation} type="button">
              제출하기
            </SubmitButton>
          </ModalContent>
        </TestSubmitModalBox>
      </Modal>
    </TestSubmitModalCotainer>
  );
}
const TestSubmitModalCotainer = styled(ModalContainer)`
  ${({ theme }) => theme.effects.dimmed_40};

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
