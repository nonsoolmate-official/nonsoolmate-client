import { CheckCircleBtnIc } from "@assets/index";
import Button from "@components/buttons/Button";
import styled from "styled-components";

export default function ConfirmModal() {
  return (
    <>
      <CheckCircleBtnIc />
      <Content>회원 정보가 저장되었습니다.</Content>
      <Button width={40.8}>확인</Button>
    </>
  );
}

const Content = styled.h1`
  ${({ theme }) => theme.fonts.Body1};
`;
