import styled from "styled-components";

export default function SignupText() {
  return <Text>아직 계정이 없으신가요?</Text>;
}

const Text = styled.p`
  ${({ theme }) => theme.fonts.Body5};

  color: ${({ theme }) => theme.colors.grey_600};
`;
