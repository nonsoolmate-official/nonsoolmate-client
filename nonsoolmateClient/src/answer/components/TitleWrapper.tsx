import { answerPageButtonStyle } from "style/commonStyle";
import styled from "styled-components";
import { RenderDownloadProps } from "@react-pdf-viewer/get-file";
import { GetFilePlugin } from "@react-pdf-viewer/get-file";
import { media } from "style/responsiveStyle";
import { DownloadCircleIc, PrintCircleIc } from "@assets/index";
// import { RenderEnterFullScreenProps } from "@react-pdf-viewer/full-screen";
// import { FullScreenPlugin } from "@react-pdf-viewer/full-screen";
import { PrintPlugin, RenderPrintProps } from "@react-pdf-viewer/print";

interface TitleWrapperProps {
  title: string;
  buttonText: string;
  ifExplanation?: boolean;
  ifPdfButton?: boolean;
  setIsHide: React.Dispatch<React.SetStateAction<boolean>>;
  getFilePluginInstance: GetFilePlugin;
  printPluginInstance: PrintPlugin;
  // fullScreenPluginInstance?: FullScreenPlugin;
}

export default function TitleWrapper(props: TitleWrapperProps) {
  const { title, buttonText, ifExplanation, ifPdfButton, getFilePluginInstance, setIsHide, printPluginInstance } =
    props;

  const renderHideButton = () => {
    if (!ifExplanation) {
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

  const { Print } = printPluginInstance;
  const { Download } = getFilePluginInstance;

  return (
    <TitleWrapperContainer>
      <Title>{title}</Title>
      {!ifExplanation && ifPdfButton ? <></> : renderHideButton()}
      <PluginContainer>
        <Print>
          {(props: RenderPrintProps) => (
            <PluginButton type="button" onClick={props.onClick}>
              <PrintIcon />
            </PluginButton>
          )}
        </Print>
        <Download>
          {(props: RenderDownloadProps) => (
            <PluginButton type="button" onClick={props.onClick}>
              <DownloadIcon />
            </PluginButton>
          )}
        </Download>
      </PluginContainer>
    </TitleWrapperContainer>
  );
}

const TitleWrapperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0;

  ${media.tablet} {
    display: none;
  }
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.Headline3};

  color: ${({ theme }) => theme.colors.black};
`;

const Button = styled(answerPageButtonStyle)`
  position: absolute;
  left: 6.7rem;
  ${({ theme }) => theme.fonts.Body5};

  padding: 0.8rem 1.6rem;
`;

const PluginContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  padding: 0;
`;

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
