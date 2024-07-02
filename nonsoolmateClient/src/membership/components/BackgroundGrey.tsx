import styled from "styled-components";

export default function BackgroundGrey() {
  return <Square />;
}

const Square = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 28.8rem;
  background-color: ${({ theme }) => theme.colors.grey_50};

  @media (width <= 1000px) {
    bottom: 64.1rem;
  }
`;
