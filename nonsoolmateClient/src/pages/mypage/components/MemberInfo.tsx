import Button from "@components/buttons/Button";
import Input from "@components/input/Input";
import RadioButtonGroup from "@components/radioButton/RadioButtonGroup";
import Error from "@pages/error";
import { ERROR_MESSAGE } from "constants/errorMessage";
import { useState } from "react";
import { media } from "style/responsiveStyle";
import styled from "styled-components";
import useGetProfile from "../hooks/useGetProfile";

export default function MemberInfo() {
  const response = useGetProfile();
  if (!response) return <Error />;

  const { name, gender, birthday, email, phoneNumber } = response?.data;

  const initialGender = gender === "M" ? "M" : gender === "F" ? "F" : null;
  const [checkedGender, setCheckedGender] = useState(initialGender);

  return (
    <Wrapper>
      <Title>회원정보</Title>
      <MemberInfoContainer>
        <Info>
          <FieldLayout>
            <Field>이름</Field>
            <Input
              value={name}
              placeholder="이름"
              onChange={() => {}}
              isError={false}
              errorMessage={ERROR_MESSAGE.NAME_EMPTY}
              style={{ width: "22.8rem" }}
            />
          </FieldLayout>
          <FieldLayout>
            <Field>성별</Field>
            <RadioButtonGroup
              options={[
                { label: "남성", value: "M", name: "gender" },
                { label: "여성", value: "F", name: "gender" },
              ]}
              onChange={(e) => {
                setCheckedGender(e.target.value);
              }}
            />
          </FieldLayout>
        </Info>

        <Info>
          <FieldLayout>
            <Field>출생연도</Field>
            <Input
              value={birthday}
              placeholder="0000"
              onChange={() => {}}
              isError={true}
              errorMessage={ERROR_MESSAGE.BIRTH}
              style={{ width: "6.4rem" }}
            />
            <Field>년</Field>
          </FieldLayout>
          <FieldLayout>
            <Field>전화번호</Field>
            <Input
              value={phoneNumber}
              placeholder="000-0000-0000"
              onChange={() => {}}
              isError={false}
              errorMessage={ERROR_MESSAGE.PHONE}
              style={{ width: "22.8rem" }}
            />
          </FieldLayout>
        </Info>

        <Info>
          <Field>이메일</Field>
          <Input
            value={email}
            placeholder="example@email.com"
            onChange={() => {}}
            isError={false}
            errorMessage={ERROR_MESSAGE.EMAIL}
            style={{ width: "56.8rem" }}
          />
        </Info>
        <SubmitLayout>
          <Button variant="primary" size="sm" type="submit">
            저장
          </Button>
        </SubmitLayout>
      </MemberInfoContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;

  width: 100%;

  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.grey_50};
`;

const MemberInfoContainer = styled.ul`
  position: relative;
  display: flex;

  flex-direction: column;

  gap: 2.8rem;

  width: 69.6rem;

  padding: 2.4rem;
  margin-left: 2.4rem;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    padding: 3.1rem 3.2rem;
  }
`;

const Info = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 2.4rem;
`;

const Title = styled.h3`
  display: flex;

  padding: 2.4rem;

  ${({ theme }) => theme.fonts.Headline5};

  white-space: nowrap;
`;

const Field = styled.h3`
  width: 5.6rem;

  ${({ theme }) => theme.fonts.Body3};

  white-space: nowrap;
`;

const FieldLayout = styled.div`
  display: flex;

  align-items: center;

  gap: 2.4rem;
`;

const SubmitLayout = styled.div`
  display: flex;

  margin-top: 4.8rem;

  justify-content: flex-end;
`;
