import { commonFlex } from "style/commonStyle";
import styled from "styled-components";

export default function AdvanTitle() {
  return <Text>멤버십 혜택</Text>;
}

const Text = styled.h1`
  ${commonFlex}
  ${({ theme }) => theme.fonts.Headline3};

  width: 21.7rem;
  height: 5.2rem;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey_900};
  color: ${({ theme }) => theme.colors.white};
`;
