import { columnFlex, commonFlex } from "style/commonStyle";
import PdfViewer from "./PdfViewer";
import styled from "styled-components";
import { useState } from "react";
import { media } from "style/responsiveStyle";
import RevisionContainer from "./RevisionContainer";

interface CorrectionContainerProps {
  editingTitle: string;
  revisionTitle: string;
  editingPdfUrl: string;
  revisionPdfUrl: string;
  examStatus: string;
  ifExplanation?: boolean;
}

export default function CorrectionContainer(props: CorrectionContainerProps) {
  const { editingTitle, editingPdfUrl, revisionPdfUrl, examStatus } = props;

  const [activeButton, setActiveButton] = useState<"edit" | "revision">("edit");

  // Function to handle Edit button click
  const clickEditButton = () => {
    setActiveButton("edit");
  };

  // Function to handle Revision button click
  const clickRevisionButton = () => {
    setActiveButton("revision");
  };

  return (
    <Container>
      {/* -------아이패드-------  */}
      <IpadButtonContainer>
        <EditingButton $activeButton={activeButton} onClick={clickEditButton}>
          첨삭
        </EditingButton>
        <RevisionButton $activeButton={activeButton} onClick={clickRevisionButton}>
          재첨삭
        </RevisionButton>
      </IpadButtonContainer>
      <IpadPdfViewer>
        {activeButton === "edit" ? (
          <PdfViewer pdfUrl={editingPdfUrl} title={editingTitle} />
        ) : (
          <RevisionContainer examStatus={examStatus} pdfUrl={revisionPdfUrl} />
        )}
      </IpadPdfViewer>

      {/* -------데스크탑-------  */}
      <LeftPdfViewerWrapper>
        {editingPdfUrl && <PdfViewer pdfUrl={editingPdfUrl} title={editingTitle} />}
      </LeftPdfViewerWrapper>
      <RevisionContainer examStatus={examStatus} pdfUrl={revisionPdfUrl} />
    </Container>
  );
}

const Container = styled.section`
  ${commonFlex}

  gap: 2.4rem;
  width: 100vw;
  height: calc(100vh - 6.4rem);
  padding: 2rem 0 3rem;
  background-color: ${({ theme }) => theme.colors.grey_50};

  ${media.tablet} {
    ${columnFlex}

    padding: 4rem 3.2rem 2rem;
  }
`;

const IpadPdfViewer = styled.article`
  ${media.tablet} {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    width: 100%;
  }

  display: none;
`;

const LeftPdfViewerWrapper = styled.article`
  ${columnFlex}

  gap: 1.4rem;
  overflow: hidden;
  width: calc((100vw - 16.8rem) / 2);
  transition: 0.3s ease-in-out;

  ${media.tablet} {
    display: none;
  }
`;

const IpadButtonContainer = styled.div`
  ${media.tablet} {
    display: flex;
    gap: 2.4rem;
    width: 100%;
    height: 7rem;
    ${({ theme }) => theme.fonts.Headline3}
  }

  display: none;
`;

const EditingButton = styled.button<{ $activeButton: string }>`
  padding: 0;
  color: ${({ theme, $activeButton }) => ($activeButton === "edit" ? theme.colors.black : theme.colors.grey_300)};
`;

const RevisionButton = styled.button<{ $activeButton: string }>`
  padding: 0;
  color: ${({ theme, $activeButton }) => ($activeButton === "revision" ? theme.colors.black : theme.colors.grey_300)};
`;
