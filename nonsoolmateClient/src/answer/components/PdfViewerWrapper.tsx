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

  useEffect(() => {
    if (isExplanationHide || isQuestionHide) {
      setIsHide(true);
    } else {
      setIsHide(false);
    }
  }, [isExplanationHide, isQuestionHide]);

  return (
    <PdfViewerContainer $isHide={isHide}>
      <LeftPdfViewerWrapper $isQuestionHide={isQuestionHide}>
        <TitleWrapper
          title={firstTitle}
          buttonText={ifExplanation ? "문제 숨기기" : "첨삭 PDF로 저장"}
          ifPdfButton={!ifExplanation && true}
          getFilePluginInstance={getFilePluginInstance}
          setIsHide={setIsQuestionHide}
        />
        {ifExplanation ? <ImageSlider /> : <PdfViewer pdfUrl={pdfUrl} getFilePluginInstance={getFilePluginInstance} />}
      </LeftPdfViewerWrapper>

      <RightPdfViewerWrapper $isExplanationHide={isExplanationHide}>
        <TitleWrapper
          title={secondTitle}
          buttonText="해제 숨기기"
          ifExplanation={ifExplanation}
          setIsHide={setIsExplanationHide}
        />
        <PdfViewer pdfUrl={pdfUrl} />
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

const LeftPdfViewerWrapper = styled.article<{ $isQuestionHide: boolean }>`
  ${columnFlex}

  gap: 1.4rem;
  position: ${({ $isQuestionHide }) => $isQuestionHide && "relative"};
  transform: ${({ $isQuestionHide }) => ($isQuestionHide ? `translateX(-120%)` : `none`)};
  /* stylelint-disable-next-line unit-allowed-list */
  transition: 0.5s ease-in-out;
`;

const RightPdfViewerWrapper = styled.article<{ $isExplanationHide: boolean }>`
  ${columnFlex}

  gap: 1.4rem;
  position: ${({ $isExplanationHide }) => $isExplanationHide && "relative"};
  transform: ${({ $isExplanationHide }) => ($isExplanationHide ? `translateX(120%)` : `none`)};
  /* stylelint-disable-next-line unit-allowed-list */
  transition: 0.5s ease-in-out;
`;
