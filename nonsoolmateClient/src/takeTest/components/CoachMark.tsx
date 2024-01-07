import styled from "styled-components";

export default function CoachMark() {
  return <CoachMarkContainer></CoachMarkContainer>;
}
const CoachMarkContainer = styled.section`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.6;
`;
