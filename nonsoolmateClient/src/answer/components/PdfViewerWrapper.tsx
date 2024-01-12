import { columnFlex, commonFlex } from "style/commonStyle";
import PdfViewer from "./PdfViewer";
import TitleWrapper from "./TitleWrapper";
import styled from "styled-components";
import ImageSlider from "answer/explanation/components/ImageSlider";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { useEffect, useState } from "react";

interface PdfViewerWrapperProps {
  firstTitle: string;
  secondTitle: string;
  ifExplanation?: boolean;
  pdfUrl: string;
}

export default function PdfViewerWrapper(props: PdfViewerWrapperProps) {
  const { firstTitle, secondTitle, ifExplanation, pdfUrl } = props;
  const getFilePluginInstance = getFilePlugin();
  const [isQuestionHide, setIsQuestionHide] = useState(false);
  const [isExplanationHide, setIsExplanationHide] = useState(false);
  const [isHide, setIsHide] = useState(false);

  // useEffect(() => {
  //   if (isExplanationHide || isQuestionHide) {
  //     setIsHide(true);
  //   } else {
  //     setIsHide(false);
  //   }
  // }, [isExplanationHide, isQuestionHide]);

  useEffect(() => {
    if (isExplanationHide || isQuestionHide) {
      // setTimeout(() => {
      setIsHide(true);
      // }, 5000); // delay equals to the transition duration
    } else {
      setIsHide(false);
    }
  }, [isExplanationHide, isQuestionHide]);

  return (
    <PdfViewerContainer $isHide={isHide}>
      <LeftPdfViewerWrapper $isQuestionHide={isQuestionHide} $isExplanationHide={isExplanationHide}>
        <TitleWrapper
          title={firstTitle}
          buttonText={ifExplanation ? "문제 숨기기" : "첨삭 PDF로 저장"}
          ifPdfButton={!ifExplanation && true}
          getFilePluginInstance={getFilePluginInstance}
          setIsHide={setIsQuestionHide}
          isExplanationHide={isExplanationHide}
          isQuestionHide={isQuestionHide}
        />
        {ifExplanation ? (
          <ImageSlider />
        ) : (
          <PdfViewer
            pdfUrl={pdfUrl}
            getFilePluginInstance={getFilePluginInstance}
            isExplanationHide={isExplanationHide}
            isQuestionHide={isQuestionHide}
          />
        )}
      </LeftPdfViewerWrapper>

      <RightPdfViewerWrapper $isQuestionHide={isQuestionHide} $isExplanationHide={isExplanationHide}>
        <TitleWrapper
          title={secondTitle}
          buttonText="해제 숨기기"
          ifExplanation={ifExplanation}
          setIsHide={setIsExplanationHide}
          isExplanationHide={isExplanationHide}
          isQuestionHide={isQuestionHide}
        />
        <PdfViewer pdfUrl={pdfUrl} isExplanationHide={isExplanationHide} isQuestionHide={isQuestionHide} />
      </RightPdfViewerWrapper>
    </PdfViewerContainer>
  );
}

const PdfViewerContainer = styled.section<{ $isHide: boolean }>`
  ${commonFlex}

  gap: 2.4rem;
  position: ${({ $isHide }) => $isHide && "absolute"};
  width: 100vw;
  height: calc(100vh - 6.4rem);
  padding: 2rem 0 3rem;
`;

const LeftPdfViewerWrapper = styled.article<{ $isQuestionHide: boolean; $isExplanationHide: boolean }>`
  ${columnFlex}

  display: ${({ $isQuestionHide }) => $isQuestionHide && "none"};
  gap: 1.4rem;

  /* position: ${({ $isQuestionHide }) => $isQuestionHide && "relative"}; */
  width: ${({ $isExplanationHide }) => ($isExplanationHide ? "calc(100vh - 6.4rem)" : "calc((100vw - 16.8rem) / 2)")};
  opacity: ${({ $isQuestionHide }) => ($isQuestionHide ? 0 : 1)};
  /* stylelint-disable-next-line unit-allowed-list */
  transition: 0.3s ease-in-out;
  transform: ${({ $isQuestionHide }) => ($isQuestionHide ? `translateX(-100%)` : `none`)};
`;

const RightPdfViewerWrapper = styled.article<{ $isExplanationHide: boolean; $isQuestionHide: boolean }>`
  ${columnFlex}

  /* display: ${({ $isExplanationHide }) => $isExplanationHide && "none"}; */
  gap: ${({ $isQuestionHide }) => ($isQuestionHide ? `0` : `1.4rem`)};

  /* gap: 1.4rem; */

  /* position: ${({ $isExplanationHide }) => $isExplanationHide && "relative"}; */
  width: ${({ $isQuestionHide }) => ($isQuestionHide ? "calc(100vh - 6.4rem)" : "calc((100vw - 16.8rem) / 2)")};
  transform: ${({ $isExplanationHide }) => ($isExplanationHide ? `translateX(120%)` : `none`)};
  /* stylelint-disable-next-line unit-allowed-list */
  transition: 0.3s ease-in-out;
`;
