import styled from "styled-components";
import { createTimeModel, useTimeModel } from "react-compound-timer";

interface TimerProps {
  openPrecautionModal: boolean;
}
const timer = createTimeModel({
  initialTime: 3600000, //ms 단위(s*1000)
  direction: "backward",
  startImmediately: false,
});
export default function Timer(props: TimerProps) {
  const { openPrecautionModal } = props;
  const { value, start } = useTimeModel(timer);
  console.log(value);

  if (!openPrecautionModal) {
    start();
  }
  return (
    <TimerContainer>
      {`0${value.h}`}:{value.m < 10 ? `0${value.m}` : value.m}:{value.s < 10 ? `0${value.s}` : value.s}
    </TimerContainer>
  );
}

const TimerContainer = styled.p`
  ${({ theme }) => theme.fonts.Headline4};
`;
