import styled from "styled-components";
import { DownArrowIc } from "@assets/index";
import { columnFlex, commonFlex } from "style/commonStyle";
import { useState } from "react";

export default function RequestForm() {
  const phoneNumberRegexp = /^010-\d{3,4}-\d{4}$/;

  const [isClickInput, setIsClickInput] = useState(false);
  const [isMatch, setIsMatch] = useState(true);

  function clickInputBox() {
    setIsClickInput(true);
  }
  function checkPhoneNumber(number: string) {
    setIsMatch(phoneNumberRegexp.test(number));
  }

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
      <ContentWrapper>
        <ListBox>
          <ListTitle>상담 받으실 번호</ListTitle>
          <Input
            placeholder="010-0000-0000"
            onClick={clickInputBox}
            onChange={(e) => checkPhoneNumber(e.target.value)}
            $selected={isClickInput}
            $isMatch={isMatch}
          />
          <Error $isMatch={isMatch}>010-0000-0000 형식의 번호를 입력해주세요.</Error>
        </ListBox>
      </ContentWrapper>
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

const ContentWrapper = styled.ul`
  ${columnFlex}

  gap: 1.2rem;
  width: 100%;
`;

const ListBox = styled.li`
  ${columnFlex}

  gap: 0.6rem;
  width: 100%;
`;

const ListTitle = styled.p`
  ${({ theme }) => theme.fonts.Body7}

  width: 100%;
`;

const Input = styled.input<{ $selected: boolean; $isMatch: boolean }>`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid
    ${({ theme, $selected, $isMatch }) =>
      $isMatch ? ($selected ? theme.colors.grey_400 : theme.colors.grey_100) : theme.colors.error};
  border-radius: 8px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_500};
    ${({ theme }) => theme.fonts.Body8}
  }
`;
const Error = styled.p<{ $isMatch: boolean }>`
  display: ${({ $isMatch }) => ($isMatch ? "none" : "block")};
  ${({ theme }) => theme.fonts.Caption1}

  width:100%;
  color: ${({ theme }) => theme.colors.error};
`;
