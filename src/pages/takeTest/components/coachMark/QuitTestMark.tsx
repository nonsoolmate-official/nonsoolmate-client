import { UpCircleIc } from "@assets/index";
import { columnFlex } from "style/commonStyle";
import styled from "styled-components";

export default function QuitTestMark() {
  return (
    <QuitTestMarkContainer>
      <IconContainer>
        <UpCircleIcon />
      </IconContainer>
      <QuitTestCoachMarkText>
        시험이 종료되며
        <br />
        답안지 업로드 화면이 나타나요
      </QuitTestCoachMarkText>
    </QuitTestMarkContainer>
  );
}
const QuitTestMarkContainer = styled.div`
  ${columnFlex};

  gap: 0.2rem;
  align-items: flex-end;
  position: fixed;
  top: 5rem;
  right: 3.3rem;
`;
const IconContainer = styled.div`
  display: flex;
  padding-right: 2.4rem;
`;
const QuitTestCoachMarkText = styled.p`
  text-align: right;
  ${({ theme }) => theme.fonts.Body4};
`;
const UpCircleIcon = styled(UpCircleIc)`
  width: 0.4rem;
  height: 3.9rem;
`;
