import styled from "styled-components";

export default function Timer() {
  return <TimerContainer>01 : 00 : 00</TimerContainer>;
}

const TimerContainer = styled.p`
  ${({ theme }) => theme.fonts.Headline4};
`;
