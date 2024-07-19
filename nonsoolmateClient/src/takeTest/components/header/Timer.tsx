import { useEffect, useState } from "react";
import styled from "styled-components";

interface TimerProps {
  changeTestFinishStatus: (testQuitModal: boolean) => void;
  computeTakeTime: (takeTime: number) => void;
  openTestFinishModal: boolean;
  openTestSubmitModal: boolean;
  examTimeLimit: number;
}
export default function Timer(props: TimerProps) {
  const { changeTestFinishStatus, computeTakeTime, openTestFinishModal, openTestSubmitModal, examTimeLimit } = props;

  const time = examTimeLimit;
  const h = Math.floor(time / 3600);
  const m = Math.floor((time - h * 3600) / 60);
  const s = time - (h * 3600 + m * 60);

  const [hours, setHours] = useState(h);
  const [minutes, setMinutes] = useState(m);
  const [seconds, setSeconds] = useState(s);

  useEffect(() => {
    const takeTime = time - (hours * 3600 + minutes * 60 + seconds);
    computeTakeTime(takeTime);
    const count = setInterval(() => {
      if (openTestFinishModal || openTestSubmitModal) {
        clearInterval(count);
      } else if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(count);
            changeTestFinishStatus(true);
          } else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        }
      }
    }, 1000);
    return () => clearInterval(count);
  }, [hours, openTestFinishModal, minutes, seconds]);

  return (
    <TimerContainer>
      {`0${hours}`}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </TimerContainer>
  );
}
const TimerContainer = styled.p`
  ${({ theme }) => theme.fonts.Headline4};
`;
