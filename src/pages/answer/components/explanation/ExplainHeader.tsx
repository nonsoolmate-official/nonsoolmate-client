import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { commonFlex } from "style/commonStyle";
import { LeftArrowBlackBtn } from "@assets/index";

interface ExplainHeaderProps {
  testTitle: string;
}

export default function ExplainHeader(props: ExplainHeaderProps) {
  const { testTitle } = props;
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <BackToHomeButton type="button" onClick={() => navigate(`/home/test`)}>
        <BackToListIcon />
      </BackToHomeButton>
      <TestName>{testTitle}</TestName>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  ${commonFlex}

  gap: 1.6rem;
  justify-content: flex-start;
  width: 100vw;
  height: 6.4rem;
  padding: 1.2rem 0 1.2rem 3.6rem;
  box-shadow: ${({ theme }) => theme.effects.top_nav_shadow};
`;

const BackToHomeButton = styled.button`
  padding: 0;
`;

const BackToListIcon = styled(LeftArrowBlackBtn)`
  width: 4rem;
  height: 4rem;
`;

const TestName = styled.p`
  ${({ theme }) => theme.fonts.Headline5};

  color: ${({ theme }) => theme.colors.black};
`;
