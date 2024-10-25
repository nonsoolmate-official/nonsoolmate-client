import Button from "@components/button/Button";
import { useModalDispatch } from "@hooks/useModal";
import { DESCRIPTION_MODAL } from "constants/modal";
import styled from "styled-components";

interface DescriptionModalProps {
  type?: "unsubscribe" | "welcome" | undefined;
}

export default function DescriptionModal({ type }: DescriptionModalProps) {
  const dispatch = useModalDispatch();

  if (type !== "welcome" && type !== "unsubscribe") return null;

  const modalContent = DESCRIPTION_MODAL[type.toUpperCase() as keyof typeof DESCRIPTION_MODAL];

  return (
    <Wrapper>
      <Heading>{modalContent.TITLE}</Heading>
      <Content>{modalContent.CONTENT}</Content>

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
