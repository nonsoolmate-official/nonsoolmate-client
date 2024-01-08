import { columnFlex, commonFlex } from "style/commonStyle";
import PdfViewer from "./PdfViewer";
import TitleWrapper from "./TitleWrapper";
import styled from "styled-components";

interface PdfViewerWrapperProps {
  firstTitle: string;
  secondTitle: string;
  ifExplanation?: boolean;
}

export default function PdfViewerWrapper(props: PdfViewerWrapperProps) {
  const { firstTitle, secondTitle, ifExplanation } = props;
  return (
    <PdfViewerContainer>
      <SinglePdfViewerWrapper>
        <TitleWrapper title={firstTitle} buttonText={ifExplanation ? "문제 숨기기" : "첨삭 PDF로 저장"} />
        <PdfViewer />
      </SinglePdfViewerWrapper>
      <SinglePdfViewerWrapper>
        <TitleWrapper title={secondTitle} buttonText="해제 숨기기" ifExplanation={ifExplanation} />
        <PdfViewer />
      </SinglePdfViewerWrapper>
    </PdfViewerContainer>
  );
}

const PdfViewerContainer = styled.div`
  gap: 2.4rem;

  ${commonFlex}

  width: 100vw;
  height: calc(100vh - 6.4rem);
  padding: 2rem 0 3rem;
`;

const SinglePdfViewerWrapper = styled.div`
  ${columnFlex}

  gap: 1.4rem;
`;
