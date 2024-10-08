import { columnFlex, commonFlex } from "style/commonStyle";
import PdfViewer from "./PdfViewer";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { RightArrowBigIc, LeftArrowBigIc, ShowExplanationTagIc, ShowQuestionTagIc } from "@assets/index";
import { media } from "style/responsiveStyle";

interface PdfViewerWrapperProps {
  firstTitle: string;
  secondTitle: string;
  ifExplanation?: boolean;
  firstPdfUrl: string;
  secondPdfUrl?: string;
  testUrl?: string;
}

export default function PdfViewerWrapper(props: PdfViewerWrapperProps) {
  const { firstTitle, secondTitle, ifExplanation, firstPdfUrl, secondPdfUrl, testUrl } = props;
  const [isQuestionHide, setIsQuestionHide] = useState(false);
  const [isExplanationHide, setIsExplanationHide] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const [isButtonHover, setIsButtonHover] = useState(false);

  const [selectTest, setSelectTest] = useState(true);
  const [selectExplanation, setSelectExplanation] = useState(false);

  useEffect(() => {
    if (isExplanationHide || isQuestionHide) {
      setIsHide(true);
    } else {
      setIsHide(false);
    }
  }, [isExplanationHide, isQuestionHide]);

  function clickTestButton() {
    if (selectTest && !selectExplanation) {
      setSelectTest(true);
    } else {
      setSelectTest(!selectTest);
    }
  }
  function clickExplanationButton() {
    if (selectExplanation && !selectTest) {
      setSelectExplanation(true);
    } else {
      setSelectExplanation(!selectExplanation);
    }
  }

  return (
    <PdfViewerContainer $isHide={isHide}>
      <ShowQuestionButton
        $isQuestionHide={isQuestionHide}
        onMouseOver={() => setIsButtonHover(true)}
        onMouseLeave={() => setIsButtonHover(false)}
        onClick={() => setIsQuestionHide(false)}>
        <RightArrowBigIcon />
        <ShowQuestionMessageBox $isButtonHover={isButtonHover}>
          <ShowQuestionTagIcon />
        </ShowQuestionMessageBox>
      </ShowQuestionButton>

      {/* -------아이패드 반응형 헤더-------  */}
      <IpadButtonContainer>
        <TestButton type="button" onClick={clickTestButton} $selectTest={selectTest}>
          {firstTitle}
        </TestButton>
        <ExplanationButton type="button" onClick={clickExplanationButton} $selectExplanation={selectExplanation}>
          {secondTitle}
        </ExplanationButton>
      </IpadButtonContainer>

      <IpadPdfViewer>
        {selectTest && (
          <>
            {ifExplanation && testUrl ? (
              <PdfViewer
                pdfUrl={testUrl}
                selectTest={selectTest}
                selectExplanation={selectExplanation}
                setIsHide={setIsQuestionHide}
              />
            ) : (
              <PdfViewer
                pdfUrl={firstPdfUrl}
                selectTest={selectTest}
                selectExplanation={selectExplanation}
                setIsHide={setIsQuestionHide}
              />
            )}
          </>
        )}
        {selectExplanation && (
          <PdfViewer
            pdfUrl={secondPdfUrl ? secondPdfUrl : firstPdfUrl}
            selectTest={selectTest}
            selectExplanation={selectExplanation}
            setIsHide={setIsExplanationHide}
          />
        )}
      </IpadPdfViewer>

      <LeftPdfViewerWrapper $isQuestionHide={isQuestionHide} $isExplanationHide={isExplanationHide}>
        {ifExplanation && testUrl ? (
          <PdfViewer
            pdfUrl={testUrl}
            title={firstTitle}
            buttonText={ifExplanation ? "문제 숨기기" : "첨삭 PDF로 저장"}
            ifPdfButton={!ifExplanation && true}
            setIsHide={setIsQuestionHide}
          />
        ) : (
          <PdfViewer
            pdfUrl={firstPdfUrl}
            title={firstTitle}
            buttonText={ifExplanation ? "문제 숨기기" : "첨삭 PDF로 저장"}
            ifPdfButton={!ifExplanation && true}
            setIsHide={setIsQuestionHide}
          />
        )}
      </LeftPdfViewerWrapper>

      <RightPdfViewerWrapper $isQuestionHide={isQuestionHide} $isExplanationHide={isExplanationHide}>
        <PdfViewer
          pdfUrl={secondPdfUrl ? secondPdfUrl : firstPdfUrl}
          title={secondTitle}
          buttonText="해제 숨기기"
          ifExplanation={ifExplanation}
          setIsHide={setIsExplanationHide}
          selectExplanation={false}
          selectTest={false}
        />
      </RightPdfViewerWrapper>
      <ShowExplanationButton
        $isExplanationHide={isExplanationHide}
        onClick={() => setIsExplanationHide(false)}
        onMouseOver={() => setIsButtonHover(true)}
        onMouseLeave={() => setIsButtonHover(false)}>
        <LeftArrowBigIcon />
        <ShowExplanationMessageBox $isButtonHover={isButtonHover}>
          <ShowExplanationTagIcon />
        </ShowExplanationMessageBox>
      </ShowExplanationButton>
    </PdfViewerContainer>
  );
}

const ShowQuestionTagIcon = styled(ShowQuestionTagIc)`
  width: 7.3rem;
  height: 3.6rem;
`;

const ShowQuestionMessageBox = styled.div<{ $isButtonHover: boolean }>`
  display: ${({ $isButtonHover }) => ($isButtonHover ? "block" : "none")};
  position: fixed;
  left: 5rem;
`;

const ShowExplanationMessageBox = styled.div<{ $isButtonHover: boolean }>`
  display: ${({ $isButtonHover }) => ($isButtonHover ? "block" : "none")};
  position: fixed;
  right: 5rem;
`;

const ShowExplanationTagIcon = styled(ShowExplanationTagIc)`
  width: 7.3rem;
  height: 3.6rem;
`;

const PdfViewerContainer = styled.section<{ $isHide: boolean }>`
  ${commonFlex}

  gap: 2.4rem;
  position: ${({ $isHide }) => $isHide && "absolute"};
  width: 100vw;
  height: calc(100vh - 6.4rem);
  padding: 2rem 0 3rem;
  background-color: ${({ theme }) => theme.colors.grey_50};

  ${media.tablet} {
    ${columnFlex}

    padding: 2rem 3rem;
  }
`;

const IpadPdfViewer = styled.article`
  ${media.tablet} {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    width: 100%;
  }

  display: none;
`;

const LeftPdfViewerWrapper = styled.article<{ $isQuestionHide: boolean; $isExplanationHide: boolean }>`
  ${columnFlex}

  display: ${({ $isQuestionHide }) => $isQuestionHide && "none"};
  gap: 1.4rem;
  overflow: hidden;
  width: ${({ $isExplanationHide }) => ($isExplanationHide ? "calc(100vh - 6.4rem)" : "calc((100vw - 16.8rem) / 2)")};
  transition: 0.3s ease-in-out;

  ${media.tablet} {
    display: none;
  }
`;

const RightPdfViewerWrapper = styled.article<{ $isExplanationHide: boolean; $isQuestionHide: boolean }>`
  ${columnFlex}

  display: ${({ $isExplanationHide }) => $isExplanationHide && "none"};
  gap: 1.4rem;
  overflow: hidden;
  width: ${({ $isQuestionHide }) => ($isQuestionHide ? "calc(100vh - 6.4rem)" : "calc((100vw - 16.8rem) / 2)")};
  transition: 0.3s ease-in-out;

  ${media.tablet} {
    display: none;
  }
`;

const RightArrowBigIcon = styled(RightArrowBigIc)`
  width: 5.6rem;
  height: 5.6rem;
`;

const ShowQuestionButton = styled.button<{ $isQuestionHide: boolean }>`
  display: ${({ $isQuestionHide }) => ($isQuestionHide ? `block` : `none`)};
  position: fixed;
  left: 4.9rem;
  ${media.tablet} {
    display: none;
  }
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

const IpadButtonContainer = styled.div`
  ${media.tablet} {
    display: flex;
    gap: 2.4rem;
    width: 100%;
    height: 7rem;
    ${({ theme }) => theme.fonts.Headline3}
  }

  display: none;
`;

const TestButton = styled.button<{ $selectTest: boolean }>`
  padding: 0;
  color: ${({ theme, $selectTest }) => ($selectTest ? theme.colors.black : theme.colors.grey_300)};
`;

const ExplanationButton = styled.button<{ $selectExplanation: boolean }>`
  padding: 0;
  color: ${({ theme, $selectExplanation }) => ($selectExplanation ? theme.colors.black : theme.colors.grey_300)};
`;
