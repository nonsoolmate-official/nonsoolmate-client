import styled from "styled-components";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { media } from "style/responsiveStyle";
import { printPlugin, RenderPrintProps } from "@react-pdf-viewer/print";
import { getFilePlugin, RenderDownloadProps } from "@react-pdf-viewer/get-file";
import { answerPageButtonStyle } from "style/commonStyle";
import { DownloadCircleIc, PrintCircleIc } from "@assets/index";

interface PdfViewerProps {
  pdfUrl: string;
  selectTest?: boolean;
  selectExplanation?: boolean;
  title?: string;
  buttonText?: string;
  ifExplanation?: boolean;
  ifPdfButton?: boolean;
  setIsHide: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PdfViewer(props: PdfViewerProps) {
  const { pdfUrl, selectTest, selectExplanation, title, buttonText, ifExplanation, ifPdfButton, setIsHide } = props;

  const printPluginInstance = printPlugin();
  const { Print } = printPluginInstance;
  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;

  const renderHideButton = () => {
    if (!ifExplanation && buttonText) {
      return (
        <Button
          type="button"
          onClick={() => {
            setIsHide(true);
          }}>
          {buttonText}
        </Button>
      );
    } else return;
  };

  return (
    <Container>
      <TitleWrapperContainer>
        {title && <Title>{title}</Title>}
        {!ifExplanation && ifPdfButton ? <></> : renderHideButton()}

        <PluginContainer $selectTest={selectTest} $selectExplanation={selectExplanation}>
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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.tablet} {
    position: relative;
  }
`;

const PdfViewerWrapper = styled.div<{ $selectTest?: boolean; $selectExplanation?: boolean }>`
  ${({ theme }) => theme.effects.pdf_shadow};

  overflow: auto;
  width: 100%;
  height: calc(100vh - 16.4rem);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    ${({ $selectTest, $selectExplanation }) =>
      $selectTest && $selectExplanation && "height : calc((100vh - 22.4rem) / 2)"};
  }
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
`;

const Button = styled(answerPageButtonStyle)`
  position: absolute;
  left: 14rem;
  ${({ theme }) => theme.fonts.Body5};

  padding: 0.8rem 1.6rem;
`;

const PluginContainer = styled.div<{ $selectTest?: boolean; $selectExplanation?: boolean }>`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  padding: 0;

  ${media.tablet} {
    position: absolute;
    right: 0;
    z-index: 1;
    margin-bottom: 6rem;
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
