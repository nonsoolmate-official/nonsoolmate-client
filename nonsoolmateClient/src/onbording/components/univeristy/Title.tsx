import styled from "styled-components";

export default function Title() {
  return <Text>목표 대학 합격 비법은?</Text>;
}

const Text = styled.h1`
  ${({ theme }) => theme.fonts.Headline2};

  margin-bottom: 1rem;
`;
