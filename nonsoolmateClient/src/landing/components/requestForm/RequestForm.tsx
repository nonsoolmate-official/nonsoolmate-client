import styled from "styled-components";
import { DownArrowIc, RadioButtonCheckIc, RadioButtonDefaultIc, UpArrowIc } from "@assets/index";
import { columnFlex, commonFlex, mainButtonStyle } from "style/commonStyle";
import { useState } from "react";
import { GRADE_LIST } from "landing/core/gradelist";
import { TIMELIST } from "landing/core/timelist";
import SubmitFinish from "./SubmitFinish";

export default function RequestForm() {
  const phoneNumberRegexp = /^010-\d{3,4}-\d{4}$/;

  const [isClickInput, setIsClickInput] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isMatch, setIsMatch] = useState(true);
  const [selectedGrade, setSelectedGrade] = useState("학년 선택");
  const [selectedTime, setSelectedTime] = useState("상담 시간 선택");
  const [gradeDropDown, setGradeDropDown] = useState(false);
  const [timeDropDown, setTimeDropDown] = useState(false);
  const [isNullGrade, setIsNullGrade] = useState(false);
  const [isNullTime, setIsNullTime] = useState(false);
  const [identity, setIdentity] = useState("부모");
  const [isFull, setIsFull] = useState(true);

  const [finishSubmit, setFinishSubmit] = useState(false);

  function clickInputBox() {
    setIsClickInput(true);
  }
  function checkPhoneNumber(number: string) {
    setPhoneNumber(number);
    setPhoneNumber(number);
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
    setIsNullGrade(false);
  }
  function selectTime(time: string) {
    setSelectedTime(time);
    setIsNullTime(false);
  }
  function clickParent() {
    setIdentity("부모");
  }
  function clickStudent() {
    setIdentity("학생");
  }
  function handleFormSize() {
    setIsFull(!isFull);
  }
  function sendToSlack() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", `${import.meta.env.VITE_SLACK_WEBHOOK_URL}`, true);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        setFinishSubmit(true);
      }
    };
    var payload = {
      text: "무료 상담 회원 정보",
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "상담 신청 회원 정보:",
          },
        },
        {
          type: "section",
          block_id: "section123",
          fields: [
            {
              type: "mrkdwn",
              text:
                "*1. 휴대폰 번호*\n" +
                phoneNumber +
                "\n\n*2. 학년*\n" +
                selectedGrade +
                "\n\n*3. 희망 상담 시간*\n" +
                selectedTime +
                "\n\n*4. 역할*\n" +
                identity,
            },
          ],
        },
      ],
    };
    xhr.send(JSON.stringify(payload));
  }
  function submitForm() {
    !phoneNumber && setIsMatch(false);
    selectedGrade === "학년 선택" && setIsNullGrade(true);
    selectedTime === "상담 시간 선택" && setIsNullTime(true);

    if (
      isMatch &&
      phoneNumber !== "" &&
      !isNullGrade &&
      selectedGrade !== "학년 선택" &&
      !isNullTime &&
      selectedTime !== "상담 시간 선택"
    ) {
      sendToSlack();
    }
  }
  return (
    <>
      {finishSubmit ? (
        <SubmitFinish />
      ) : (
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
              <Error $isError={isMatch}>010-0000-0000 형식의 번호를 입력해주세요.</Error>
            </ListBox>
            <ListBox>
              <ListTitle>학생의 학년</ListTitle>
              <SelectButton
                type="button"
                onClick={clickGradeChoice}
                $selected={gradeDropDown}
                $default={selectedGrade}
                $isError={!isNullGrade}>
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
              <Error $isError={!isNullGrade}>학년을 선택하세요.</Error>
            </ListBox>
            <ListBox>
              <ListTitle>희망 상담 시간</ListTitle>
              <SelectButton
                type="button"
                onClick={clickTimeChoice}
                $selected={timeDropDown}
                $default={selectedTime}
                $isError={!isNullTime}>
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
              <Error $isError={!isNullTime}>상담 시간을 선택하세요.</Error>
            </ListBox>
            <CheckIdentityBox>
              <IdentityBox>
                <CheckIconBox onClick={clickParent}>
                  {identity === "부모" ? <RadioButtonCheckIc /> : <RadioButtonDefaultIc />}
                </CheckIconBox>
                <Identity>학부모입니다.</Identity>
              </IdentityBox>
              <IdentityBox>
                <CheckIconBox onClick={clickStudent}>
                  {identity === "학생" ? <RadioButtonCheckIc /> : <RadioButtonDefaultIc />}
                </CheckIconBox>
                <Identity>학생입니다.</Identity>
              </IdentityBox>
            </CheckIdentityBox>
          </ContentWrapper>
          <ButtonWrapper>
            <ApplyButton onClick={submitForm} type="button">
              무료로 상담 신청하기
            </ApplyButton>
            <AgreeText>개인정보 수집 및 이용에 동의합니다.</AgreeText>
          </ButtonWrapper>
        </Form>
      )}
    </>
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
  z-index: 1;
  width: 29.4rem;
  height: ${({ $isFull }) => ($isFull ? "auto" : "11.6rem")};
  padding: ${({ $isFull }) => ($isFull ? "2.4rem" : "2.2rem")};
  border: 2px solid transparent;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  background-image: ${({ $isFull }) =>
    $isFull
      ? `linear-gradient(#fff, #fff)`
      : `linear-gradient(#fff, #fff), linear-gradient(to right, #8D9CFF 0%,#3D53EA
 100%)`};
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
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

const Error = styled.p<{ $isError: boolean }>`
  display: ${({ $isError }) => ($isError ? "none" : "block")};
  ${({ theme }) => theme.fonts.Caption1}

  width:100%;
  color: ${({ theme }) => theme.colors.error};
`;

const SelectButton = styled.button<{ $selected: boolean; $default: string; $isError: boolean }>`
  ${({ theme }) => theme.fonts.Body8}

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0.8rem;
  border: 1px solid
    ${({ theme, $selected, $isError }) =>
      $isError ? ($selected ? theme.colors.grey_400 : theme.colors.grey_100) : theme.colors.error};
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
