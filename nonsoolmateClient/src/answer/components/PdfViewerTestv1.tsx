// src/PdfViewer.tsx
import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useGetExplanationPageData } from "answer/hooks/useGetExplanationPageData";

const PdfViewerTestv1: React.FC = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const explanationRes = useGetExplanationPageData(13);
  if (!explanationRes) return <></>;
  const {
    data: { universityExamName, examQuestionList, examAnswerUrl },
  } = explanationRes;

  return (
    <div style={{ height: "750px" }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js`}>
        <Viewer fileUrl={examAnswerUrl} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  );
};

export default PdfViewerTestv1;
