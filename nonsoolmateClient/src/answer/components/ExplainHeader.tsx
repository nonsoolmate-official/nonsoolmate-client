import { BackToListIc } from "@assets/index";
import styled from "styled-components";

export default function ExplainHeader() {
  return (
    <HeaderContainer>
      <BackToHomeButton>
        <BackToListIcon />
      </BackToHomeButton>
      <TestName>중앙대학교 - 2021 인문사회 1</TestName>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 6.4rem;
  padding: 1.2rem 0 1.2rem 3.6rem;
  box-shadow: ${({ theme }) => theme.effects.top_nav_shadow};
`;

const BackToHomeButton = styled.button`
  /* cursor: pointer; */
`;

const BackToListIcon = styled(BackToListIc)`
  width: 4rem;
  height: 4rem;
`;

const TestName = styled.p`
  margin-left: 1.6rem;
  font: ${({ theme }) => theme.fonts.Headline5};
  color: ${({ theme }) => theme.colors.black};
`;
