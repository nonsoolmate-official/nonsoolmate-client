import { columnFlex, commonFlex } from "style/commonStyle";
import PdfViewer from "./PdfViewer";
import TitleWrapper from "./TitleWrapper";
import styled from "styled-components";
import ImageSlider from "answer/explanation/components/ImageSlider";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { useEffect, useState } from "react";
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";
import { RightArrowBigIc, LeftArrowBigIc } from "@assets/index";
import { testImageType } from "answer/types/testImageType";

interface PdfViewerWrapperProps {
  firstTitle: string;
  secondTitle: string;
  ifExplanation?: boolean;
  firstPdfUrl: string;
  secondPdfUrl?: string;
  testImages?: testImageType[];
}

export default function PdfViewerWrapper(props: PdfViewerWrapperProps) {
  const { firstTitle, secondTitle, ifExplanation, firstPdfUrl, secondPdfUrl, testImages } = props;
  const getFilePluginInstance = getFilePlugin();
  const [isQuestionHide, setIsQuestionHide] = useState(false);
  const [isExplanationHide, setIsExplanationHide] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const fullScreenPluginInstance = fullScreenPlugin();

  useEffect(() => {
    if (isExplanationHide || isQuestionHide) {
      setIsHide(true);
    } else {
      setIsHide(false);
    }
  }, [isExplanationHide, isQuestionHide]);

  return (
    <PdfViewerContainer $isHide={isHide}>
      <ShowQuestionButton $isQuestionHide={isQuestionHide} onClick={() => setIsQuestionHide(false)}>
        <RightArrowBigIcon />
      </ShowQuestionButton>
      <LeftPdfViewerWrapper $isQuestionHide={isQuestionHide} $isExplanationHide={isExplanationHide}>
        <TitleWrapper
          title={firstTitle}
          buttonText={ifExplanation ? "문제 숨기기" : "첨삭 PDF로 저장"}
          ifPdfButton={!ifExplanation && true}
          getFilePluginInstance={getFilePluginInstance}
          setIsHide={setIsQuestionHide}
        />
        {ifExplanation && testImages ? (
          <ImageSlider testImages={testImages && testImages} />
        ) : (
          <PdfViewer pdfUrl={firstPdfUrl} getFilePluginInstance={getFilePluginInstance} />
        )}
      </LeftPdfViewerWrapper>

      <RightPdfViewerWrapper $isQuestionHide={isQuestionHide} $isExplanationHide={isExplanationHide}>
        <TitleWrapper
          title={secondTitle}
          buttonText="해제 숨기기"
          ifExplanation={ifExplanation}
          setIsHide={setIsExplanationHide}
          fullScreenPluginInstance={fullScreenPluginInstance}
          isQuestionHide={isQuestionHide}
        />
        <PdfViewer
          pdfUrl={secondPdfUrl ? secondPdfUrl : firstPdfUrl}
          fullScreenPluginInstance={fullScreenPluginInstance}
        />
      </RightPdfViewerWrapper>
      <ShowExplanationButton $isExplanationHide={isExplanationHide} onClick={() => setIsExplanationHide(false)}>
        <LeftArrowBigIcon />
      </ShowExplanationButton>
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
  width: ${({ $isExplanationHide }) => ($isExplanationHide ? "calc(100vh - 6.4rem)" : "calc((100vw - 16.8rem) / 2)")};
  transition: 0.3s ease-in-out;
`;

const RightPdfViewerWrapper = styled.article<{ $isExplanationHide: boolean; $isQuestionHide: boolean }>`
  ${columnFlex}

  display: ${({ $isExplanationHide }) => $isExplanationHide && "none"};
  gap: 1.4rem;
  width: ${({ $isQuestionHide }) => ($isQuestionHide ? "calc(100vh - 6.4rem)" : "calc((100vw - 16.8rem) / 2)")};
  transition: 0.3s ease-in-out;
`;

const RightArrowBigIcon = styled(RightArrowBigIc)`
  width: 5.6rem;
  height: 5.6rem;
`;

const ShowQuestionButton = styled.button<{ $isQuestionHide: boolean }>`
  display: ${({ $isQuestionHide }) => ($isQuestionHide ? `block` : `none`)};
  position: fixed;
  left: 4.9rem;
`;

const LeftArrowBigIcon = styled(LeftArrowBigIc)`
  width: 5.6rem;
  height: 5.6rem;
`;

const ShowExplanationButton = styled.button<{ $isExplanationHide: boolean }>`
  display: ${({ $isExplanationHide }) => ($isExplanationHide ? `block` : `none`)};
  position: fixed;
  right: 4.8rem;
`;
