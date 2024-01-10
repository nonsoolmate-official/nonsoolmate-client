import ExplainHeader from "answer/components/ExplainHeader";
import PdfViewerWrapper from "answer/components/PdfViewerWrapper";

export default function index() {
  return (
    <>
      <ExplainHeader testTitle="중앙대학교 - 2021 인문사회 1" />
      <PdfViewerWrapper
        firstTitle="첨삭"
        secondTitle="해제"
        pdfUrl="http://www.usrap.org/sites/default/files/historical/pdf/usRAP_brochure.pdf"
      />
    </>
  );
}
