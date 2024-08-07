import styled from "styled-components";
import { Plugin, Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { GetFilePlugin } from "@react-pdf-viewer/get-file";
import { FullScreenPlugin } from "@react-pdf-viewer/full-screen";
import { media } from "style/responsiveStyle";
import { printPlugin, RenderPrintProps, PrintIcon } from "@react-pdf-viewer/print";
import { getFilePlugin, RenderDownloadProps, DownloadIcon } from "@react-pdf-viewer/get-file";

interface PdfViewerProps {
  pdfUrl: string;
  getFilePluginInstance?: GetFilePlugin;
  fullScreenPluginInstance?: FullScreenPlugin;
  selectTest?: boolean;
  selectExplanation?: boolean;
}

export default function PdfViewer(props: PdfViewerProps) {
  const { pdfUrl, fullScreenPluginInstance, selectTest, selectExplanation } = props;

  // let plugins: Plugin[] | undefined = [];
  // if (getFilePluginInstance && fullScreenPluginInstance) {
  //   plugins = [getFilePluginInstance, fullScreenPluginInstance];
  // } else if (getFilePluginInstance) {
  //   plugins = [getFilePluginInstance];
  // } else if (fullScreenPluginInstance) {
  //   plugins = [fullScreenPluginInstance];
  // }

  const printPluginInstance = printPlugin();
  const { Print } = printPluginInstance;
  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;

  return (
    <>
      <div
        style={{
          alignItems: "center",
          borderBottom: "1px solid black",
          display: "flex",
          padding: "4px",
          gap: "20px",
        }}>
        <Print>
          {(props: RenderPrintProps) => (
            <button
              style={{
                top: "10rem",
                border: "none",
                color: "black",
                cursor: "pointer",
                padding: 0,
                margin: 0,
              }}
              onClick={props.onClick}>
              <PrintIcon />
            </button>
          )}
        </Print>
        <Download>
          {(props: RenderDownloadProps) => (
            <button
              style={{
                top: "10rem",
                border: "none",
                color: "black",
                cursor: "pointer",
                padding: 0,
                margin: 0,
              }}
              onClick={props.onClick}>
              <DownloadIcon />
            </button>
          )}
        </Download>
      </div>
      <PdfViewerWrapper $selectTest={selectTest} $selectExplanation={selectExplanation}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
          <ViewerWrapper>
            <Viewer
              fileUrl={pdfUrl}
              theme={{ theme: "light" }}
              plugins={[printPluginInstance, getFilePluginInstance]}
            />
          </ViewerWrapper>
        </Worker>
      </PdfViewerWrapper>
    </>
  );
}

const PdfViewerWrapper = styled.div<{ $selectTest?: boolean; $selectExplanation?: boolean }>`
  ${({ theme }) => theme.effects.pdf_shadow};

  overflow: auto;
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
