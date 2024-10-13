import { CheckCircleBtnIc } from "@assets/index";
import Button from "@components/buttons/Button";
import { useModalDispatch } from "@hooks/useModal";
import styled from "styled-components";

export default function ConfirmModal() {
  const dispatch = useModalDispatch();

  return (
    <>
      <CheckCircleBtnIc />
      <Content>회원 정보가 저장되었습니다.</Content>
      <Button width={40.8} fontSize="Headline5" onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
        확인
      </Button>
    </>
  );
}

const Content = styled.h1`
  margin-bottom: 1.6rem;
  ${({ theme }) => theme.fonts.Body1};
`;
