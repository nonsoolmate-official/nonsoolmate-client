import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { commonFlex, lightBlueButtonStyle } from "style/commonStyle";
import { SelectExamListDataTypes } from "home/api/getSelectUniversityExams";

interface SelectedUniversityToggleProps {
  universityId: number;
  examList: SelectExamListDataTypes[];
}

export default function SelectedUniversityToggle(props: SelectedUniversityToggleProps) {
  const { universityId, examList } = props;
  const navigate = useNavigate();

  return (
    <ToggleContainer key={universityId}>
      {examList.map((data, index) => {
        const { examId, examName, examTimeLimit, examStatus } = data;
        const isLastExam = index === examList.length - 1;

        function handleMoveToExplanation() {
          navigate("/explanation", {
            state: {
              examId: examId,
            },
          });
        }

        function handleMoveToCorrection() {
          navigate("/correction", {
            state: {
              examId: examId,
            },
          });
        }

        function handleMoveToTakeTest() {
          navigate("/takeTest", {
            state: {
              examId: examId,
            },
          });
        }

        return (
          <ExamContainer key={examId} $isLastExam={isLastExam}>
            <ExamBox>
              <Name>{examName}</Name>
              <TimeLimit>{examTimeLimit}분</TimeLimit>
            </ExamBox>
            <StatusBox>
              {examStatus === "시험 응시 전" && (
                <TakeTestButton type="button" onClick={handleMoveToTakeTest}>
                  시험보기
                </TakeTestButton>
              )}
              {examStatus === "첨삭 진행 중" && (
                <ExamResults>
                  <ResultsText>{examStatus}</ResultsText>
                  <ResultsButtonBox>
                    <ExplanationButton type="button" onClick={handleMoveToExplanation}>
                      해제
                    </ExplanationButton>
                    <CorrectionButton type="button" $examStatus={examStatus} disabled={true}>
                      첨삭
                    </CorrectionButton>
                  </ResultsButtonBox>
                </ExamResults>
              )}
              {examStatus === "첨삭 완료" && (
                <ResultsButtonBox>
                  <ExplanationButton type="button" onClick={handleMoveToExplanation}>
                    해제
                  </ExplanationButton>
                  <CorrectionButton type="button" $examStatus={examStatus} onClick={handleMoveToCorrection}>
                    첨삭
                  </CorrectionButton>
                </ResultsButtonBox>
              )}
            </StatusBox>
          </ExamContainer>
        );
      })}
    </ToggleContainer>
  );
}

const ToggleContainer = styled.section`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: scroll;
  width: 100%;
  max-height: 33.2rem;
  padding: 0.8rem 2.4rem 2.8rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ExamContainer = styled.section<{ $isLastExam: boolean }>`
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;
  width: 100%;
  padding: 0.8rem 0 1.2rem;
  border-bottom: ${({ $isLastExam }) => ($isLastExam ? "none" : "1px solid")};
  border-bottom-color: ${({ theme, $isLastExam }) => ($isLastExam ? "none" : theme.colors.grey_100)};
`;

const ExamBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 40rem;
`;

const Name = styled.h3`
  ${({ theme }) => theme.fonts.Body3};
`;

const TimeLimit = styled.h3`
  ${({ theme }) => theme.fonts.Body6};

  color: ${({ theme }) => theme.colors.grey_500};
`;

const StatusBox = styled.section`
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
`;

const TakeTestButton = styled(lightBlueButtonStyle)`
  width: 10rem;
  height: 100%;
  padding: 0;
  ${({ theme }) => theme.fonts.Body5};

  border-radius: 4px;
`;

const ExamResults = styled.section`
  gap: 0.8rem;

  ${commonFlex};

  height: 100%;
  padding: 0;
`;

const ResultsText = styled.p`
  ${({ theme }) => theme.fonts.Body8};

  color: ${({ theme }) => theme.colors.grey_600};
`;

const ResultsButtonBox = styled.section`
  display: flex;
  gap: 0.4rem;
  width: 10rem;
  height: 100%;
  padding: 0;
`;

const ExplanationButton = styled(lightBlueButtonStyle)`
  width: 4.8rem;
  height: 100%;
  padding: 0;
  ${({ theme }) => theme.fonts.Body5};

  border-radius: 4px;
`;

const CorrectionButton = styled(lightBlueButtonStyle)<{ $examStatus: string }>`
  width: 4.8rem;
  height: 100%;
  padding: 0;
  ${({ theme }) => theme.fonts.Body5};

  border-radius: 4px;
  background-color: ${({ theme, $examStatus }) =>
    $examStatus === "첨삭 진행 중" ? theme.colors.grey_100 : theme.colors.light_blue};
  color: ${({ theme, $examStatus }) =>
    $examStatus === "첨삭 진행 중" ? theme.colors.grey_400 : theme.colors.main_blue};
  cursor: ${({ $examStatus }) => ($examStatus === "첨삭 진행 중" ? "default" : "pointer")};

  &:hover {
    color: ${({ theme, $examStatus }) =>
      $examStatus === "첨삭 진행 중" ? theme.colors.grey_400 : theme.colors.middle_blue};
  }
`;
