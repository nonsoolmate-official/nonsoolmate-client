import { CheckCircleBtnIc } from "@assets/index";
import { columnFlex, commonFlex } from "style/commonStyle";
import styled from "styled-components";

export default function SubmitFinish() {
  return (
    <Wrapper>
      <TitleWrapper>
        <CheckCircleBtnIc />
        <Title>신청해주셔서 감사합니다!</Title>
      </TitleWrapper>
      <SubTitle>입력하신 번호로 1영업일 이내에 연락드릴게요.</SubTitle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${columnFlex}
  ${({ theme }) => theme.effects.modal_shadow};

  gap: 0.8rem;
  position: fixed;
  right: 2.4rem;
  bottom: 1.6rem;
  padding: 2.4rem;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const TitleWrapper = styled.div`
  ${commonFlex}

  gap:0.6rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.Body1}
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.fonts.Body7};

  color: ${({ theme }) => theme.colors.grey_500};
`;
