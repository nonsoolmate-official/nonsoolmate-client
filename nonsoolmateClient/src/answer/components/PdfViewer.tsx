import styled from "styled-components";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function PdfViewer() {
  return (
    <PdfViewerWrapper>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div
          style={{
            padding: "2rem 0.8rem 0",
            height: "calc(100vh - 16.4rem)",
          }}>
          <Viewer
            fileUrl={`http://www.usrap.org/sites/default/files/historical/pdf/usRAP_brochure.pdf`}
            theme={{ theme: "light" }}
          />
        </div>
      </Worker>
    </PdfViewerWrapper>
  );
}

const PdfViewerWrapper = styled.div`
  ${({ theme }) => theme.effects.pdf_shadow};

  width: calc((100vw - 16.8rem) / 2);
  height: calc(100vh - 16.4rem);
  border-radius: 7.679px;
`;
