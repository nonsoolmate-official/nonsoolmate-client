import { NaverLoginIc } from "@assets/index";
import { commonFlex } from "style/commonStyle";
import styled from "styled-components";

export default function NaverLoginButton() {
  return (
    <Container type="button">
      <ContentContainer>
        <NaverLoginIcon />
        <Text>네이버 로그인</Text>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.button`
  ${commonFlex}

  width: 34.4rem;
  height: 7.2rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;

const NaverLoginIcon = styled(NaverLoginIc)`
  width: 4rem;
  height: 4rem;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Body2};
`;

const ContentContainer = styled.div`
  ${commonFlex}

  gap: 2.4rem;
  justify-content: flex-start;
  width: 31.2rem;
  height: 4rem;
`;
