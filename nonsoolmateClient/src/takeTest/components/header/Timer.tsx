import { useEffect, useState } from "react";
import styled from "styled-components";

interface TimerProps {
  changeTestFinishStatus: (testQuitModal: boolean) => void;
}
export default function Timer(props: TimerProps) {
  // 1시간으로 가정
  const { changeTestFinishStatus } = props;
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const count = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
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
  }, [hours, minutes, seconds]);

  return (
    <>
      <TimerContainer>
        {`0${hours}`}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </TimerContainer>
    </>
  );
}
const TimerContainer = styled.p`
  ${({ theme }) => theme.fonts.Headline4};
`;
