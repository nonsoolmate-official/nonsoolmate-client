import styled from "styled-components";

export default function BackgroundGrey() {
  return <Square />;
}

const Square = styled.div`
  height: 28.8rem;
  width: 100%;
  z-index: -1;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;
