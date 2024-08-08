import styled from "styled-components";
import { DownArrowIc } from "@assets/index";
import { columnFlex, commonFlex } from "style/commonStyle";

export default function RequestForm() {
  return (
    <Form>
      <TitleWrapper>
        <TextBox>
          <Title>가장 잘 맞는 선생님 찾으려면?</Title>
          <SubTitle>1:1 상담 후 분석을 통해 학생에게 가장 잘 맞는 선생님을 연결해 드려요.</SubTitle>
        </TextBox>
        <ArrowIconBox>
          <DownArrowIcon />
        </ArrowIconBox>
      </TitleWrapper>
    </Form>
  );
}

const Form = styled.form`
  ${columnFlex}
  ${({ theme }) => theme.effects.modal_shadow};

  gap: 2.4rem;
  align-items: center;
  overflow: hidden;
  position: fixed;
  right: 2.4rem;
  bottom: 1.6rem;
  width: 29.4rem;
  padding: 2.4rem;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const TitleWrapper = styled.div`
  ${commonFlex}
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const ArrowIconBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DownArrowIcon = styled(DownArrowIc)`
  width: 2rem;
  height: 2rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.Body1}
`;

const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.grey_500};
  ${({ theme }) => theme.fonts.Body7};
`;
