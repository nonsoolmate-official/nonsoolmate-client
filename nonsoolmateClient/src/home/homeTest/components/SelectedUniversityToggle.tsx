import { examListTypes } from "home/core/universityLists";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { commonFlex, lightBlueButtonStyle } from "style/commonStyle";
interface SelectedUniversityToggleProps {
  universityId: number;
  examList: examListTypes[];
}

export default function SelectedUniversityToggle(props: SelectedUniversityToggleProps) {
  const { universityId, examList } = props;

  const navigate = useNavigate();

  function handleMoveToTakeTest() {
    navigate("/takeTest");
  }

  return (
    <ToggleContainer key={universityId}>
      {examList.map((data) => {
        const { examId, examName, examTimeLimit, examResultStatus } = data;
        return (
          <ExamContainer key={examId}>
            <ExamBox>
              <Name>{examName}</Name>
              <TimeLimit>{examTimeLimit}분</TimeLimit>
            </ExamBox>
            <ButtonBox>
              <TakeTestButton type="button" onClick={handleMoveToTakeTest}>
                시험보기
              </TakeTestButton>
            </ButtonBox>
          </ExamContainer>
        );
      })}
    </ToggleContainer>
  );
}

//height: 5개 넘어가면 스크롤
const ToggleContainer = styled.section`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: 69.6rem;
  padding: 0.8rem 2.4rem 1.6rem;
  border-radius: 8px;
`;

const ExamContainer = styled.section`
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;
  width: 100%;
  padding: 0.8rem 0 1.2rem;
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

const ButtonBox = styled.button`
  display: flex;
  gap: 0.4rem;
`;

const TakeTestButton = styled(lightBlueButtonStyle)`
  width: 10rem;

  ${({ theme }) => theme.fonts.Body5};

  padding: 0.4rem 0.8rem;
`;
