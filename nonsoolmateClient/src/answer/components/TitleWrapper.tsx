import { answerPageButtonStyle, commonFlex } from "style/commonStyle";
import styled from "styled-components";
import { RenderDownloadProps } from "@react-pdf-viewer/get-file";
import { GetFilePlugin } from "@react-pdf-viewer/get-file";

interface TitleWrapperProps {
  title: string;
  buttonText: string;
  ifExplanation?: boolean;
  ifPdfButton?: boolean;
  getFilePluginInstance?: GetFilePlugin;
  setIsHide: React.Dispatch<React.SetStateAction<boolean>>;
  isExplanationHide: boolean;
  isQuestionHide: boolean;
}

export default function TitleWrapper(props: TitleWrapperProps) {
  const {
    title,
    buttonText,
    ifExplanation,
    ifPdfButton,
    getFilePluginInstance,
    setIsHide,
    isExplanationHide,
    isQuestionHide,
  } = props;

  const renderDownloadButton = () => {
    if (getFilePluginInstance) {
      const { Download } = getFilePluginInstance;
      return (
        <Download>{(props: RenderDownloadProps) => <Button onClick={props.onClick}>첨삭 PDF로 저장</Button>}</Download>
      );
    }
  };

  const renderHideButton = () => {
    if (!ifExplanation) {
      return (
        <Button
          type="button"
          onClick={() => {
            // setTimeout(() => {
            setIsHide(true);
            // }, 500);
          }}>
          {buttonText}
        </Button>
      );
    } else return;
  };

  return (
    <TitleWrapperContainer $isExplanationHide={isExplanationHide} $isQuestionHide={isQuestionHide}>
      <Title>{title}</Title>
      {!ifExplanation && ifPdfButton ? renderDownloadButton() : renderHideButton()}
    </TitleWrapperContainer>
  );
}

const TitleWrapperContainer = styled.div<{ $isQuestionHide: boolean; $isExplanationHide: boolean }>`
  ${commonFlex}

  justify-content: space-between;
  width: 100%;

  /* width: ${({ $isQuestionHide, $isExplanationHide }) =>
    $isQuestionHide || $isExplanationHide ? `calc(100vw - 16.8rem)` : `calc((100vw - 16.8rem) / 2)`}; */

  /* width: calc((100vw - 16.8rem) / 2); */
  padding: 0 2.5rem 0 2.4rem;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.Headline3};

  color: ${({ theme }) => theme.colors.black};
`;

const Button = styled(answerPageButtonStyle)`
  ${({ theme }) => theme.fonts.Body3};

  padding: 0.6rem 2rem;
`;
