import styled from "styled-components";

interface ConsultingTextProps {
  category: string;
  subtitle: string;
  content: string;
}

export default function ConsultingText({ category, subtitle, content }: ConsultingTextProps) {
  return (
    <Wrapper>
      <Category>{category}</Category>
      <Subtitle>{subtitle}</Subtitle>
      <Content>{content}</Content>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  padding: "12.8rem 12.8rem 0rem 12.8rem";

  gap: 2rem;

  background-color: ${({ theme }) => theme.colors.grey_1100};
`;

const Category = styled.h1`
  color: ${({ theme }) => theme.colors.middle_blue};

  ${({ theme }) => theme.fonts.Body1};
`;

const Subtitle = styled.h2`
  white-space: pre-line;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.Headline4};
`;

const Content = styled.span`
  white-space: pre-line;

  color: ${({ theme }) => theme.colors.grey_400};

  ${({ theme }) => theme.fonts.Body2};
`;
