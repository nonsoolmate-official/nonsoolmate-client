import styled from "styled-components";

export default function DivideLine() {
  return <Line />;
}

const Line = styled.div`
  display: flex;
  width: 93.6rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grey_200};
`;
