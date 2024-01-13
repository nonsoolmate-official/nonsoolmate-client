import styled from "styled-components";

interface TitleProps {
  advertiseTitle: string;
}

export default function ReasonTitle(props: TitleProps) {
  const { advertiseTitle } = props;
  return <Text>{advertiseTitle}</Text>;
}

const Text = styled.h1`
  display: flex;
  ${({ theme }) => theme.fonts.Headline5};
`;
