import theme from "style/theme";
import styled from "styled-components";

interface RegisterButtonProps {
  button: string;
  onClick: () => void;
}
export default function RegisterButton(props: RegisterButtonProps) {
  const { button, onClick } = props;
  return (
    <RegisterButtonContainer type="button" onClick={onClick}>
      {button}
    </RegisterButtonContainer>
  );
}

const RegisterButtonContainer = styled.button`
  ${({ theme }) => theme.fonts.Body6}

  width: 13.6rem;
  padding: 0.8rem 0;
  border: 1px solid ${theme.colors.grey_200};
  border-radius: 8px;
  color: ${theme.colors.grey_800};
`;
