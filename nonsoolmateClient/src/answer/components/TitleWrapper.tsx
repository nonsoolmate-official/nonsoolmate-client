import { answerPageButtonStyle } from "style/commonStyle";
import styled from "styled-components";

interface TitleWrapperProps {
  title: string;
  buttonText: string;
  ifExplanation?: boolean;
}

export default function TitleWrapper(props: TitleWrapperProps) {
  const { title, buttonText, ifExplanation } = props;
  return (
    <TitleWrapperContainer>
      <Title>{title}</Title>
      {!ifExplanation && <Button>{buttonText}</Button>}
    </TitleWrapperContainer>
  );
}

const TitleWrapperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc((100vw - 16.8rem) / 2);
  padding: 0 2.5rem 0 2.4rem;
`;

const Title = styled.p`
  font: ${({ theme }) => theme.fonts.Headline3};
  color: ${({ theme }) => theme.colors.black};
`;

const Button = styled(answerPageButtonStyle)`
  ${({ theme }) => theme.fonts.Body3};

  padding: 0.6rem 2rem;
`;
