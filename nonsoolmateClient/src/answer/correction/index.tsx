import ExplainHeader from "answer/components/ExplainHeader";
import PdfViewerWrapper from "answer/components/PdfViewerWrapper";
import { useGetCorrectionPageData } from "answer/hooks/useGetCorrectionPagePdfs";
import Error from "error";
export default function index() {
  const id = 1;
  const correctionRes = useGetCorrectionPageData(id);
  if (!correctionRes) return <Error />;

  return (
    <>
      <ExplainHeader testTitle="중앙대학교 - 2021 인문사회 1" />
      <PdfViewerWrapper
        firstTitle="첨삭"
        secondTitle="해제"
        firstPdfUrl="http://www.usrap.org/sites/default/files/historical/pdf/usRAP_brochure.pdf"
        secondPdfUrl="https://www.sldttc.org/allpdf/21583473018.pdf"
      />
    </>
  );
}
