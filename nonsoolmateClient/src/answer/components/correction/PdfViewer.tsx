import styled from "styled-components";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { media } from "style/responsiveStyle";
import { printPlugin, RenderPrintProps } from "@react-pdf-viewer/print";
import { getFilePlugin, RenderDownloadProps } from "@react-pdf-viewer/get-file";
import { DownloadCircleIc, PrintCircleIc } from "@assets/index";

interface PdfViewerProps {
  pdfUrl: string;
  title?: string;
}

export default function PdfViewer(props: PdfViewerProps) {
  const { pdfUrl, title } = props;

  const printPluginInstance = printPlugin();
  const { Print } = printPluginInstance;
  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;

  return (
    <Container>
      <TitleWrapperContainer>
        {title && <Title>{title}</Title>}
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
      </TitleWrapperContainer>
      <PdfViewerWrapper>
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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: none;
  width: 100%;
  ${media.tablet} {
    position: relative;
  }
`;

const PdfViewerWrapper = styled.div`
  ${({ theme }) => theme.effects.pdf_shadow};

  overflow: auto;
  width: 100%;
  height: calc(100vh - 16.4rem);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ViewerWrapper = styled.div`
  height: 100%;
  padding: 2rem 0.8rem 0;
`;

const TitleWrapperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1.4rem;
  padding: 0;

  ${media.tablet} {
    margin-bottom: 0;
  }
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.Headline3};

  color: ${({ theme }) => theme.colors.black};

  ${media.tablet} {
    display: none;
  }
`;

const PluginContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  padding: 0;
  ${media.tablet} {
    position: absolute;
    top: -6rem;
    right: 2rem;
  }
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
