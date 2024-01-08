import styled from "styled-components";
import { EmptyIc } from "@assets/index";

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
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 93.5rem;
  padding: 6.7rem 21.5rem 0 2.4rem;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;

const Header = styled.h2`
  ${({ theme }) => theme.fonts.Headline5};

  display: flex;
  margin-left: 0.8rem;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  height: 48.7rem;
  padding: 14.6rem 0;
  background-color: ${({ theme }) => theme.colors.grey_200};
`;

const EmptyIcon = styled(EmptyIc)`
  width: 10.4rem;
  height: 10.4rem;
`;

const ContentText = styled.p`
  ${({ theme }) => theme.fonts.Body4};

  color: ${({ theme }) => theme.colors.grey_700};
`;
