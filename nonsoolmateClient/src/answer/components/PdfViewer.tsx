import styled from "styled-components";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { GetFilePlugin } from "@react-pdf-viewer/get-file";

interface PdfViewerProps {
  pdfUrl: string;
  getFilePluginInstance?: GetFilePlugin;
  isExplanationHide: boolean;
  isQuestionHide: boolean;
}

export default function PdfViewer(props: PdfViewerProps) {
  const { pdfUrl, getFilePluginInstance, isExplanationHide, isQuestionHide } = props;
  return (
    <PdfViewerWrapper $isExplanationHide={isExplanationHide} $isQuestionHide={isQuestionHide}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <ViewerWrapper $isExplanationHide={isExplanationHide} $isQuestionHide={isQuestionHide}>
          <Viewer
            fileUrl={pdfUrl}
            theme={{ theme: "light" }}
            plugins={getFilePluginInstance && [getFilePluginInstance]}
          />
        </ViewerWrapper>
      </Worker>
    </PdfViewerWrapper>
  );
}

const PdfViewerWrapper = styled.div<{ $isQuestionHide: boolean; $isExplanationHide: boolean }>`
  ${({ theme }) => theme.effects.pdf_shadow};

  width: 100%;

  /* width: ${({ $isQuestionHide, $isExplanationHide }) =>
    $isQuestionHide || $isExplanationHide ? `calc(100vw - 16.8rem)` : `calc((100vw - 16.8rem) / 2)`}; */

  /* width: calc((100vw - 16.8rem) / 2); */
  height: calc(100vh - 16.4rem);
  border-radius: 8px;
`;

const ViewerWrapper = styled.div<{ $isQuestionHide: boolean; $isExplanationHide: boolean }>`
  width: 100%;

  /* width: ${({ $isQuestionHide, $isExplanationHide }) =>
    $isQuestionHide || $isExplanationHide ? `calc(100vw - 16.8rem)` : `calc((100vw - 16.8rem) / 2)`}; */

  /* width: 100%; */
  height: calc(100vh - 16.4rem);
  padding: 2rem 0.8rem 0;
`;
