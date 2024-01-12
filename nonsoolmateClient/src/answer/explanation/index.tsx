import ExplainHeader from "answer/components/ExplainHeader";
import PdfViewerWrapper from "answer/components/PdfViewerWrapper";
import Test from "answer/components/Test";

export default function index() {
  return (
    <>
      {/* <Test /> */}
      <ExplainHeader testTitle="중앙대학교 - 2021 인문사회 1" />
      <PdfViewerWrapper
        firstTitle="문제"
        secondTitle="해제"
        ifExplanation={true}
        pdfUrl="http://www.usrap.org/sites/default/files/historical/pdf/usRAP_brochure.pdf"
      />
    </>
  );
}
