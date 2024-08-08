import styled from "styled-components";
import { DownArrowIc, RadioButtonCheckIc, RadioButtonDefaultIc, UpArrowIc } from "@assets/index";
import { columnFlex, commonFlex, mainButtonStyle } from "style/commonStyle";
import { useState } from "react";
import { GRADE_LIST } from "landing/core/gradelist";
import { TIMELIST } from "landing/core/timelist";

export default function RequestForm() {
  const phoneNumberRegexp = /^010-\d{3,4}-\d{4}$/;

  const [isClickInput, setIsClickInput] = useState(false);
  const [isMatch, setIsMatch] = useState(true);
  const [selectedGrade, setSelectedGrade] = useState("학년 선택");
  const [selectedTime, setSelectedTime] = useState("상담 시간 선택");
  const [gradeDropDown, setGradeDropDown] = useState(false);
  const [timeDropDown, setTimeDropDown] = useState(false);
  const [identity, setIdentity] = useState("p");
  const [isFull, setIsFull] = useState(true);

  function clickInputBox() {
    setIsClickInput(true);
  }
  function checkPhoneNumber(number: string) {
    setIsMatch(phoneNumberRegexp.test(number));
  }
  function clickGradeChoice() {
    setGradeDropDown(!gradeDropDown);
    setIsClickInput(false);
    setTimeDropDown(false);
  }
  function clickTimeChoice() {
    setTimeDropDown(!timeDropDown);
    setIsClickInput(false);
    setGradeDropDown(false);
  }
  function selectGrade(grade: string) {
    setSelectedGrade(grade);
  }
  function selectTime(time: string) {
    setSelectedTime(time);
  }
  function clickParent() {
    setIdentity("p");
  }
  function clickStudent() {
    setIdentity("s");
  }
  function handleFormSize() {
    setIsFull(!isFull);
  }

  return (
    <Form $isFull={isFull}>
      <TitleWrapper>
        <TextBox>
          <Title>가장 잘 맞는 선생님 찾으려면?</Title>
          <SubTitle>1:1 상담 후 분석을 통해 학생에게 가장 잘 맞는 선생님을 연결해 드려요.</SubTitle>
        </TextBox>
        <ArrowIconBox onClick={handleFormSize}>{isFull ? <DownArrowIcon /> : <UpArrowIcon />}</ArrowIconBox>
      </TitleWrapper>
      <ContentWrapper $isFull={isFull}>
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
        <ListBox>
          <ListTitle>학생의 학년</ListTitle>
          <SelectButton type="button" onClick={clickGradeChoice} $selected={gradeDropDown} $default={selectedGrade}>
            {selectedGrade}
            <ArrowIconBox>{gradeDropDown === true ? <UpArrowIcon /> : <DownArrowIcon />}</ArrowIconBox>
            {gradeDropDown && (
              <DropDown>
                {GRADE_LIST.map((item) => (
                  <Option key={item} onClick={() => selectGrade(item)}>
                    {item}
                  </Option>
                ))}
              </DropDown>
            )}
          </SelectButton>
        </ListBox>
        <ListBox>
          <ListTitle>희망 상담 시간</ListTitle>
          <SelectButton type="button" onClick={clickTimeChoice} $selected={timeDropDown} $default={selectedTime}>
            {selectedTime}
            <ArrowIconBox>{timeDropDown === true ? <UpArrowIcon /> : <DownArrowIcon />}</ArrowIconBox>
            {timeDropDown && (
              <DropDown>
                {TIMELIST.map((item) => (
                  <Option key={item} onClick={() => selectTime(item)}>
                    {item}
                  </Option>
                ))}
              </DropDown>
            )}
          </SelectButton>
        </ListBox>
        <CheckIdentityBox>
          <IdentityBox>
            <CheckIconBox onClick={clickParent}>
              {identity === "p" ? <RadioButtonCheckIc /> : <RadioButtonDefaultIc />}
            </CheckIconBox>
            <Identity>학부모입니다.</Identity>
          </IdentityBox>
          <IdentityBox>
            <CheckIconBox onClick={clickStudent}>
              {identity === "s" ? <RadioButtonCheckIc /> : <RadioButtonDefaultIc />}
            </CheckIconBox>
            <Identity>학생입니다.</Identity>
          </IdentityBox>
        </CheckIdentityBox>
      </ContentWrapper>
      <ButtonWrapper>
        <ApplyButton>무료로 상담 신청하기</ApplyButton>
        <AgreeText>개인정보 수집 및 이용에 동의합니다.</AgreeText>
      </ButtonWrapper>
    </Form>
  );
}

const Form = styled.form<{ $isFull: boolean }>`
  ${columnFlex}
  ${({ theme }) => theme.effects.modal_shadow};

  gap: ${({ $isFull }) => ($isFull ? "2.4rem" : "0")};
  align-items: center;
  overflow: hidden;
  position: fixed;
  right: 2.4rem;
  bottom: 1.6rem;
  width: 29.4rem;
  height: ${({ $isFull }) => ($isFull ? "auto" : "11.6rem")};
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

const UpArrowIcon = styled(UpArrowIc)`
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

const ContentWrapper = styled.ul<{ $isFull: boolean }>`
  ${columnFlex}

  gap: 1.2rem;
  width: 100%;
  ${({ $isFull }) => !$isFull && `overflow: hidden`};
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

const SelectButton = styled.button<{ $selected: boolean; $default: string }>`
  ${({ theme }) => theme.fonts.Body8}

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${({ theme, $selected }) => ($selected ? theme.colors.grey_400 : theme.colors.grey_100)};
  border-radius: 8px;
  color: ${({ theme, $default }) =>
    $default === "학년 선택" || $default === "상담 시간 선택" ? theme.colors.grey_500 : theme.colors.black};
`;

const DropDown = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
  position: absolute;
  top: -16.6rem;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 16rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Option = styled.li`
  width: 100%;
  height: 3.2rem;
  padding: 0.8rem;
  color: ${({ theme }) => theme.colors.grey_900};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_50};
  }
`;

const CheckIdentityBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 0.4rem;
`;

const IdentityBox = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const Identity = styled.p`
  ${({ theme }) => theme.fonts.Body7}

  display: flex;
  align-items: center;
  width: 9.5rem;
`;

const CheckIconBox = styled.div`
  display: flex;
`;

const ButtonWrapper = styled.div`
  ${columnFlex}

  gap: 0.6rem;
  overflow: hidden;
  width: 100%;
`;

const ApplyButton = styled(mainButtonStyle)`
  ${({ theme }) => theme.fonts.Body5}

  width: 100%;
  padding: 0.8rem 1.6rem;
`;

const AgreeText = styled.p`
  ${({ theme }) => theme.fonts.Body8};

  color: ${({ theme }) => theme.colors.grey_500};
`;
