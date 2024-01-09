import styled from "styled-components";
import { EmptyIc } from "@assets/index";
import { UnsetContainerLayout } from "style/layout/UnsetContainerLayout";
import { UnsetContentLayout } from "style/layout/UnsetContentLayout";

export default function HomeStudy() {
  return (
    <Container>
      <Header>나의 학습장</Header>
      <Content>
        <EmptyIcon />
        <ContentText>아직 준비 중이에요!</ContentText>
      </Content>
    </Container>
  );
}

const Container = styled.section`
  ${UnsetContainerLayout}
`;

const Header = styled.h2`
  ${({ theme }) => theme.fonts.Headline5};

  display: flex;
  margin-left: 0.8rem;
`;

const Content = styled.section`
  ${UnsetContentLayout}

  padding: 14.6rem 0;
`;

const EmptyIcon = styled(EmptyIc)`
  width: 10.4rem;
  height: 10.4rem;
`;

const ContentText = styled.p`
  ${({ theme }) => theme.fonts.Body4};

  color: ${({ theme }) => theme.colors.grey_700};
`;
