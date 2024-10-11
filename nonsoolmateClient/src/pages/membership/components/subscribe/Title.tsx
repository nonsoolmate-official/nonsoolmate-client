import styled from "styled-components";

interface TitleProp {
  title: string;
}

export default function Title(props: TitleProp) {
  const { title } = props;
  return <Text>{title}</Text>;
}

const Text = styled.h1`
  ${({ theme }) => theme.fonts.Headline4};
`;
