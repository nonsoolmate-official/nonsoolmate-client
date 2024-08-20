import styled from "styled-components";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { GetFilePlugin } from "@react-pdf-viewer/get-file";
import { media } from "style/responsiveStyle";
import { PrintPlugin } from "@react-pdf-viewer/print";

interface PdfViewerProps {
  pdfUrl: string;
  getFilePluginInstance: GetFilePlugin;
  selectTest?: boolean;
  selectExplanation?: boolean;
  printPluginInstance: PrintPlugin;
}

export default function PdfViewer(props: PdfViewerProps) {
  const { pdfUrl, selectTest, selectExplanation, printPluginInstance, getFilePluginInstance } = props;

  // let plugins: Plugin[] | undefined = [];

  // if (getFilePluginInstance && fullScreenPluginInstance && printPluginInstance) {
  //   plugins = [getFilePluginInstance, fullScreenPluginInstance];
  // } else if (getFilePluginInstance && printPluginInstance) {
  //   plugins = [getFilePluginInstance, printPluginInstance];
  // } else if (fullScreenPluginInstance) {
  //   plugins = [fullScreenPluginInstance];
  // }

  return (
    <PdfViewerWrapper $selectTest={selectTest} $selectExplanation={selectExplanation}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
        <ViewerWrapper>
          <Viewer fileUrl={pdfUrl} theme={{ theme: "light" }} plugins={[printPluginInstance, getFilePluginInstance]} />
        </ViewerWrapper>
      </Worker>
    </PdfViewerWrapper>
  );
}

const PdfViewerWrapper = styled.div<{ $selectTest?: boolean; $selectExplanation?: boolean }>`
  ${({ theme }) => theme.effects.pdf_shadow};

  width: 100%;
  height: calc(100vh - 16.4rem);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    ${({ $selectTest, $selectExplanation }) =>
      $selectTest && $selectExplanation && "height : calc((100vh - 17.5rem) / 2)"};
  }
`;

const ViewerWrapper = styled.div`
  height: 100%;
  padding: 2rem 0.8rem 0;
`;
