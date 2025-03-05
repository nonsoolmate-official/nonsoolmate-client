import styled from "styled-components";

export default function Summary() {
  return <Text>논술메이트의 첨삭 그 이상의 코칭을 경험하세요</Text>;
}

const Text = styled.p`
  ${({ theme }) => theme.fonts.Body2};

  color: ${({ theme }) => theme.colors.grey_700};

  @media (width <= 340px) {
    ${({ theme }) => theme.fonts.Body3};
  }

  @media (width <= 300px) {
    ${({ theme }) => theme.fonts.Body5};
  }
`;
