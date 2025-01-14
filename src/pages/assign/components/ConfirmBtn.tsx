import styled from "styled-components";

export default function ConfirmBtn() {
  return <Wrapper>확인</Wrapper>;
}

const Wrapper = styled.button`
  padding: 0.4rem 2.1rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_500};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Body6};

  cursor: pointer;
`;
