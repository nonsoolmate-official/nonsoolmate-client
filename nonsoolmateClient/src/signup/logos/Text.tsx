import styled from "styled-components";
export default function Text() {
  return <Container>논술 입시의 여정을 함께하다</Container>;
}

const Container = styled.h1`
  ${({ theme }) => theme.fonts.Headline4};

  margin-bottom: 1rem;
`;
