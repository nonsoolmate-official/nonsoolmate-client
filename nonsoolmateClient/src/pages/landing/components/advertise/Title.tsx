import styled from "styled-components";

export default function Title() {
  return <Text>왜 논술메이트인가요?</Text>;
}

const Text = styled.h1`
  ${({ theme }) => theme.fonts.Headline2};
`;
