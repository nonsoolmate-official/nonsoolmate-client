import { columnFlex, commonFlex } from "style/commonStyle";
import PdfViewer from "./PdfViewer";
import TitleWrapper from "./TitleWrapper";
import styled from "styled-components";
import ImageSlider from "answer/explanation/components/ImageSlider";

interface PdfViewerWrapperProps {
  firstTitle: string;
  secondTitle: string;
  ifExplanation?: boolean;
  pdfUrl: string;
}

export default function PdfViewerWrapper(props: PdfViewerWrapperProps) {
  const { firstTitle, secondTitle, ifExplanation, pdfUrl } = props;
  return (
    <PdfViewerContainer>
      <SinglePdfViewerWrapper>
        <TitleWrapper title={firstTitle} buttonText={ifExplanation ? "문제 숨기기" : "첨삭 PDF로 저장"} />
        {ifExplanation ? <ImageSlider /> : <PdfViewer pdfUrl={pdfUrl} />}
      </SinglePdfViewerWrapper>

      <SinglePdfViewerWrapper>
        <TitleWrapper title={secondTitle} buttonText="해제 숨기기" ifExplanation={ifExplanation} />
        <PdfViewer pdfUrl={pdfUrl} />
      </SinglePdfViewerWrapper>
    </PdfViewerContainer>
  );
}

const PdfViewerContainer = styled.section`
  ${commonFlex}

  gap: 2.4rem;
  width: 100vw;
  height: calc(100vh - 6.4rem);
  padding: 2rem 0 3rem;
`;

const SinglePdfViewerWrapper = styled.article`
  ${columnFlex}

  gap: 1.4rem;
`;
