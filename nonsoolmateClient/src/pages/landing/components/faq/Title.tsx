import styled from "styled-components";

export default function Title() {
  return <Text>자주 묻는 질문</Text>;
}

const Text = styled.h1`
  ${({ theme }) => theme.fonts.Headline2};

  margin-bottom: 2.4rem;
`;
