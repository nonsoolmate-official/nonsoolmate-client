import styled from "styled-components";

export default function Title() {
  return <Text>한 단계 더 높은 곳으로</Text>;
}

const Text = styled.h1`
  ${({ theme }) => theme.fonts.Headline2};
`;
