import styled from "styled-components";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { printPlugin, RenderPrintProps } from "@react-pdf-viewer/print";
import { getFilePlugin, RenderDownloadProps } from "@react-pdf-viewer/get-file";
import { DownloadCircleIc, PrintCircleIc } from "@assets/index";
import { useRecoilValue } from "recoil";
import { takeTestPdfPlugin } from "recoil/atom";

interface PdfViewerProps {
  pdfUrl: string;
}

export default function PdfViewer(props: PdfViewerProps) {
  const { pdfUrl } = props;
  const pdfPlugin = useRecoilValue(takeTestPdfPlugin);

  const printPluginInstance = printPlugin();
  const { Print } = printPluginInstance;
  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;

  return (
    <PdfViewerWrapper>
      {pdfPlugin && (
        <PluginContainer>
          <Print>
            {(props: RenderPrintProps) => (
              <PluginButton onClick={props.onClick}>
                <PrintIcon />
              </PluginButton>
            )}
          </Print>
          <Download>
            {(props: RenderDownloadProps) => (
              <PluginButton onClick={props.onClick}>
                <DownloadIcon />
              </PluginButton>
            )}
          </Download>
        </PluginContainer>
      )}
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <ViewerWrapper>
          <Viewer fileUrl={pdfUrl} theme={{ theme: "light" }} plugins={[printPluginInstance, getFilePluginInstance]} />
        </ViewerWrapper>
      </Worker>
    </PdfViewerWrapper>
  );
}

const PdfViewerWrapper = styled.div`
  ${({ theme }) => theme.effects.pdf_shadow};

  width: 100%;
  height: 100%;
`;

const ViewerWrapper = styled.div`
  height: 100%;
`;

const PluginContainer = styled.div<{ $selectTest?: boolean; $selectExplanation?: boolean }>`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 0 0.8rem;
`;

// bottom: ${({ $selectTest, $selectExplanation }) => ($selectTest && $selectExplanation ? "2rem" : "none")};
const PrintIcon = styled(PrintCircleIc)`
  width: 3.2rem;
  height: 3.2rem;
`;

const DownloadIcon = styled(DownloadCircleIc)`
  width: 3.2rem;
  height: 3.2rem;
`;

const PluginButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
`;
