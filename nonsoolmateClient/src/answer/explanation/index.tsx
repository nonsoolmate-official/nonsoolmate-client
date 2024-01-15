import ExplainHeader from "answer/components/ExplainHeader";
import PdfViewerWrapper from "answer/components/PdfViewerWrapper";

export default function index() {
  return (
    <>
      <ExplainHeader testTitle="중앙대학교 - 2021 인문사회 1" />
      <PdfViewerWrapper
        firstTitle="문제"
        secondTitle="해제"
        ifExplanation={true}
        firstPdfUrl="http://www.usrap.org/sites/default/files/historical/pdf/usRAP_brochure.pdf"
      />
    </>
  );
}
