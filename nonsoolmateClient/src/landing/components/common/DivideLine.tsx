import styled from "styled-components";

export default function DivideLine() {
  return <Line />;
}

const Line = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.grey_200};
`;
