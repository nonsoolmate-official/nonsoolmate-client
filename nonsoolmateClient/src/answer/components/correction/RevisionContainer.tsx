import { useState } from "react";
import { columnFlex } from "style/commonStyle";
import { media } from "style/responsiveStyle";
import styled from "styled-components";
import RevisionUnset from "./RevisionUnset";
import SelectFileModal from "./SelectFileModal";
import FileSubmitModal from "./FileSubmitModal";
import FileEndModal from "./FileEndModal";
import PdfViewer from "./PdfViewer";

interface Props {
  examStatus: string;
  pdfUrl: string;
}
export default function RevisionContainer(props: Props) {
  const { examStatus, pdfUrl } = props;
  const [isRevisionCompleted, setIsRevisionCompleted] = useState<boolean>(false);
  const [openSelectFileModal, setOpenSelectFileModal] = useState(false);
  const [openFileSubmitModal, setOpenFileSubmitModal] = useState(false);
  const [openEndFileModal, setOpenEndFileModal] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isFile, setIsFile] = useState<File[] | null>(null);

  function changeSelectFileStatus(selectFile: boolean) {
    setOpenSelectFileModal(selectFile);
  }
  function changeFileSubmitStatus(selectFile: boolean) {
    setOpenFileSubmitModal(selectFile);
  }
  function changeFileEndStatus(endModal: boolean) {
    setOpenEndFileModal(endModal);
  }
  function changeIsSubmitStatus(isSubmit: boolean) {
    setIsSubmit(isSubmit);
  }
  function saveFile(imageFile: File[]) {
    setIsFile(imageFile);
  }

  return (
    <>
      <Container>
        {isRevisionCompleted ? (
          <PdfViewer pdfUrl={pdfUrl} title="재첨삭" />
        ) : (
          <RevisionUnset changeSelectFileStatus={changeSelectFileStatus} isSubmit={isSubmit} examStatus={examStatus} />
        )}
      </Container>
      {openSelectFileModal && (
        <SelectFileModal
          changeSelectFileStatus={changeSelectFileStatus}
          changeFileSubmitStatus={changeFileSubmitStatus}
          saveFile={saveFile}
        />
      )}
      {openFileSubmitModal && (
        <FileSubmitModal
          isFile={isFile}
          changeFileSubmitStatus={changeFileSubmitStatus}
          changeFileEndStatus={changeFileEndStatus}
        />
      )}
      {openEndFileModal && <FileEndModal changeIsSubmitStatus={changeIsSubmitStatus} />}
    </>
  );
}

// width: ${({ $isQuestionHide }) => ($isQuestionHide ? "calc(100vh - 6.4rem)" : "calc((100vw - 16.8rem) / 2)")};
const Container = styled.div`
  ${columnFlex}

  gap: 1.4rem;
  overflow: hidden;
  width: calc((100vw - 16.8rem) / 2);
  ${media.tablet} {
    width: 100%;
  }

  transition: 0.3s ease-in-out;
`;
