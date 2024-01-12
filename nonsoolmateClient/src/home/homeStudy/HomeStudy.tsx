import styled from "styled-components";
import { EmptyIc } from "@assets/index";
import { SetUnsetContainerLayout, UnsetContentLayout } from "style/layout/SetUnsetLayout";

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
  ${SetUnsetContainerLayout}

  gap: 0.7rem;
`;

const Header = styled.h3`
  ${({ theme }) => theme.fonts.Headline5};

  display: flex;
  margin-left: 0.8rem;
`;

const Content = styled.section`
  ${UnsetContentLayout}
`;

const EmptyIcon = styled(EmptyIc)`
  width: 10.4rem;
  height: 10.4rem;
`;

const ContentText = styled.p`
  ${({ theme }) => theme.fonts.Body4};

  color: ${({ theme }) => theme.colors.grey_700};
`;
