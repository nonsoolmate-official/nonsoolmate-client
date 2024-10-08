import Button from "@components/buttons/Button";
import Input from "@components/input/Input";
import RadioButtonGroup from "@components/radioButton/RadioButtonGroup";
import Loading from "@pages/loading";
import { DataTypes } from "@pages/mypage/api/getProfile";
import useGetProfile from "@pages/mypage/hooks/useGetProfile";
import useMemberInfo from "@pages/mypage/hooks/useMemberInfo";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { media } from "style/responsiveStyle";
import styled from "styled-components";

export default function MemberInfo() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { data, isLoading } = useGetProfile();

  const {
    input,
    gender,
    handleChangeInput,
    handleChangeGender,
    isNameError,
    isEmailError,
    isPhoneNumberError,
    isBirthdayError,
    validateName,
    validateEmail,
    validatePhoneNumber,
    validateBirthday,
  } = useMemberInfo(data as unknown as AxiosResponse<DataTypes>);

  if (!data || isLoading) {
    return <Loading />;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isNameValid = !validateName(input.name ?? "");
    const isEmailValid = !validateEmail(input.email ?? "");
    const isPhoneNumberValid = !validatePhoneNumber(input.phoneNumber ?? "");
    const isBirthdayValid = !validateBirthday(input.birthday ?? "");

    const isFormValid = isNameValid && isEmailValid && isPhoneNumberValid && isBirthdayValid;

    setIsSubmitted(true);

    if (!isFormValid) {
      return;
    }
  };

  return (
    <Wrapper>
      <Title>회원정보</Title>
      <MemberInfoContainer onSubmit={handleSubmit}>
        <Info>
          <FieldLayout>
            <Field>이름</Field>
            <Input
              value={input.name}
              placeholder="이름"
              onChange={(e) => handleChangeInput("name", e)}
              isError={isSubmitted && isNameError}
              errorMessage={isSubmitted ? validateName(input.name ?? "") : ""}
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
              value={gender ?? null}
              onChange={(e) => handleChangeGender(e.target.value)}
            />
          </FieldLayout>
        </Info>

        <Info>
          <FieldLayout>
            <Field>출생연도</Field>
            <Input
              value={input.birthday}
              placeholder="0000"
              onChange={(e) => handleChangeInput("birthday", e)}
              isError={isSubmitted && isBirthdayError}
              errorMessage={isSubmitted ? validateBirthday(input.birthday ?? "") : ""}
              style={{ width: "6.4rem" }}
            />
            <Field>년</Field>
          </FieldLayout>
          <FieldLayout>
            <Field>전화번호</Field>
            <Input
              value={input.phoneNumber}
              placeholder="000-0000-0000"
              onChange={(e) => handleChangeInput("phoneNumber", e)}
              isError={isSubmitted && isPhoneNumberError}
              errorMessage={isSubmitted ? validatePhoneNumber(input.phoneNumber ?? "") : ""}
              style={{ width: "22.8rem" }}
            />
          </FieldLayout>
        </Info>

        <Info>
          <Field>이메일</Field>
          <Input
            value={input.email}
            placeholder="example@email.com"
            onChange={(e) => handleChangeInput("email", e)}
            isError={isSubmitted && isEmailError}
            errorMessage={isSubmitted ? validateEmail(input.email ?? "") : ""}
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
  flex-direction: column;
  width: 100%;
`;

const MemberInfoContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  position: relative;
  width: 69.6rem;
  margin-left: 2.4rem;
  padding: 2.4rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.effects.container_shadow};
  ${media.tablet} {
    padding: 3.1rem 3.2rem;
  }
`;

const Info = styled.div`
  display: flex;
  gap: 2.4rem;
  justify-content: space-between;
  align-items: center;
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
  gap: 2.4rem;
  align-items: center;
`;

const SubmitLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 4.8rem;
`;
