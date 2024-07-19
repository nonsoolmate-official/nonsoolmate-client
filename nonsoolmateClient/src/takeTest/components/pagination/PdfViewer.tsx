import styled from "styled-components";
import { Plugin, Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { GetFilePlugin } from "@react-pdf-viewer/get-file";
import { FullScreenPlugin } from "@react-pdf-viewer/full-screen";

interface PdfViewerProps {
  pdfUrl: string;
  getFilePluginInstance?: GetFilePlugin;
  fullScreenPluginInstance?: FullScreenPlugin;
}

export default function PdfViewer(props: PdfViewerProps) {
  const { pdfUrl, getFilePluginInstance, fullScreenPluginInstance } = props;

  let plugins: Plugin[] | undefined = [];
  if (getFilePluginInstance && fullScreenPluginInstance) {
    plugins = [getFilePluginInstance, fullScreenPluginInstance];
  } else if (getFilePluginInstance) {
    plugins = [getFilePluginInstance];
  } else if (fullScreenPluginInstance) {
    plugins = [fullScreenPluginInstance];
  }

  return (
    <PdfViewerWrapper>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <ViewerWrapper>
          <Viewer fileUrl={pdfUrl} theme={{ theme: "light" }} plugins={plugins} />
        </ViewerWrapper>
      </Worker>
    </PdfViewerWrapper>
  );
}

const PdfViewerWrapper = styled.div`
  ${({ theme }) => theme.effects.pdf_shadow};

  width: 100%;
  height: calc(100vh - 2.4rem);
  margin: 0;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;

const ViewerWrapper = styled.div`
  height: 100%;
  padding: 2.4rem 21.5rem 0;
`;
