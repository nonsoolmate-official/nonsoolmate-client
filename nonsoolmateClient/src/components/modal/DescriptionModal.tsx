import Button from "@components/buttons/Button";
import { DESCRIPTION_MODAL } from "constants/modal";
import styled from "styled-components";

export default function DescriptionModal() {
  return (
    <Wrapper>
      <Heading>{DESCRIPTION_MODAL.WELCOME.TITLE}</Heading>
      <Content>{DESCRIPTION_MODAL.WELCOME.CONTENT}</Content>

      <Button width={40.8} fontSize="Headline5">
        확인
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  align-items: center;
`;

const Heading = styled.h1`
  ${({ theme }) => theme.fonts.Headline4};
`;

const Content = styled.div`
  margin-bottom: 0.4rem;
  color: ${({ theme }) => theme.colors.grey_800};
  text-align: center;

  ${({ theme }) => theme.fonts.Body6};

  white-space: pre-line;
`;
