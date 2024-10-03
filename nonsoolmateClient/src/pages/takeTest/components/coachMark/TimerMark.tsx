import styled from "styled-components";
import { LeftCircleLongIc, UpCircleIc } from "@assets/index";
import { columnFlex, commonFlex } from "style/commonStyle";
import { media } from "style/responsiveStyle";

export default function TimerMark() {
  return (
    <TimerMarkContainer>
      <LeftCircleLongIcon />
      <IconContainer>
        <UpCircleIcon />
      </IconContainer>
      <TimerCoachMarkText>
        타이머가 끝나면
        <br />
        시험이 자동 종료돼요
      </TimerCoachMarkText>
    </TimerMarkContainer>
  );
}

const TimerMarkContainer = styled.div`
  ${commonFlex};

  gap: 0.8rem;
  position: fixed;
  top: 0.8rem;
  left: 55.9%;

  ${media.tablet} {
    ${columnFlex};

    gap: 0.2rem;
    align-items: flex-start;
    position: fixed;
    top: 5rem;
    left: 62%;

    @media (width <= 820px) {
      left: 53%;
    }

    @media (width <= 768px) {
      left: 50%;
    }
  }
`;
const LeftCircleLongIcon = styled(LeftCircleLongIc)`
  width: 8.4rem;
  height: 0.4rem;
  ${media.tablet} {
    display: none;
  }
`;
const IconContainer = styled.div`
  ${media.tablet} {
    display: flex;
    padding-left: 8rem;
  }
`;
const UpCircleIcon = styled(UpCircleIc)`
  display: none;
  ${media.tablet} {
    display: block;
    width: 0.4rem;
    height: 3.9rem;
  }
`;
const TimerCoachMarkText = styled.p`
  ${({ theme }) => theme.fonts.Body4};
  ${media.tablet} {
    text-align: right;
  }
`;
