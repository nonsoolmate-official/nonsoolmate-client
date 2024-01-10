import PdfViewer from "answer/components/PdfViewer";
import TitleWrapper from "answer/components/TitleWrapper";
import { columnFlex, commonFlex } from "style/commonStyle";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";

interface ImagePdfWrapperProps {
  firstTitle: string;
  secondTitle: string;
  ifExplanation?: boolean;
  pdfUrl: string;
}

export default function ImagePdfWrapper(props: ImagePdfWrapperProps) {
  const { firstTitle, secondTitle, ifExplanation, pdfUrl } = props;
  return (
    <ImagePdfWrapperContainer>
      <SingleViewerWrapper>
        <TitleWrapper title={firstTitle} buttonText={ifExplanation ? "문제 숨기기" : "첨삭 PDF로 저장"} />
        <ImageSlider />
      </SingleViewerWrapper>
      <SingleViewerWrapper>
        <TitleWrapper title={secondTitle} buttonText="해제 숨기기" ifExplanation={ifExplanation} />
        <PdfViewer pdfUrl={pdfUrl} />
      </SingleViewerWrapper>
    </ImagePdfWrapperContainer>
  );
}

const ImagePdfWrapperContainer = styled.section`
  ${commonFlex}

  gap: 2.4rem;
  width: 100vw;
  height: calc(100vh - 6.4rem);
  padding: 2rem 0 3rem;
`;

const SingleViewerWrapper = styled.article`
  ${columnFlex}

  gap: 1.4rem;
`;
