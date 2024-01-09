import styled from "styled-components";

export default function PdfViewer() {
  return <PdfViewerWrapper>PdfViewer</PdfViewerWrapper>;
}

const PdfViewerWrapper = styled.div`
  width: calc((100vw - 16.8rem) / 2);
  height: calc(100vh - 16.4rem);
  background-color: ${({ theme }) => theme.colors.main_blue};
`;
