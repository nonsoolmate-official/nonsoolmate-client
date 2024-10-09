import { columnFlex } from "style/commonStyle";
import styled from "styled-components";
import RegisterButton from "./RegisterButton";
import theme from "style/theme";
import { REGISTER_TEXT } from "@pages/payment/core/registerText";

export default function RegisterLayout() {
  return (
    <>
      {REGISTER_TEXT.map((item) => (
        <RegisterLayoutContainer key={item.title}>
          <TitleContainer>
            <Title>{item.title}</Title>
            <RegisterButton button={item.buttonText} />
          </TitleContainer>
          <Content>{item.content}</Content>
        </RegisterLayoutContainer>
      ))}
    </>
  );
}

const RegisterLayoutContainer = styled.div`
  ${columnFlex}

  gap: 1.2rem;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.Body1}
`;

const Content = styled.div`
  ${({ theme }) => theme.fonts.Body6}

  width: 100%;
  padding: 1.2rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey_50};
  color: ${theme.colors.grey_500};
`;
