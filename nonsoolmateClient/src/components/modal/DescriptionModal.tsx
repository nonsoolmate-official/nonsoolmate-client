import Button from "@components/buttons/Button";
import { useModalDispatch } from "@hooks/useModal";
import { DESCRIPTION_MODAL } from "constants/modal";
import styled from "styled-components";

interface DescriptionModalProps {
  type?: "unsubscribe" | "welcome" | undefined;
}

export default function DescriptionModal({ type }: DescriptionModalProps) {
  const dispatch = useModalDispatch();

  return (
    <Wrapper>
      {type === "welcome" ? (
        <>
          <Heading>{DESCRIPTION_MODAL.WELCOME.TITLE}</Heading>
          <Content>{DESCRIPTION_MODAL.WELCOME.CONTENT}</Content>
        </>
      ) : type === "unsubscribe" ? (
        <>
          <Heading>{DESCRIPTION_MODAL.UNSUBSCRIBE.TITLE}</Heading>
          <Content>{DESCRIPTION_MODAL.UNSUBSCRIBE.CONTENT}</Content>
        </>
      ) : null}

      <Button width={40.8} fontSize="Headline5" onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
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
