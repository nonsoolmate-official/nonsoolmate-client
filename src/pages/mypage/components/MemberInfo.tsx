import Button from "@components/button/Button";
import Input from "@components/input/Input";
import RadioButtonGroup from "@components/radioButton/RadioButtonGroup";
import { useModalDispatch } from "@hooks/useModal";
import Loading from "@pages/loading";
import { DataTypes } from "@pages/mypage/api/getProfile";
import useGetProfile from "@pages/mypage/hooks/useGetProfile";
import useMemberInfo from "@pages/mypage/hooks/useMemberInfo";
import usePutMemberInfo from "@pages/mypage/hooks/usePutMemberInfo";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { media } from "style/responsiveStyle";
import styled from "styled-components";
import { MEMBERINFO } from "../constants/member";

export default function MemberInfo() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { data, isLoading } = useGetProfile();

  const { mutate: editMemberInfo } = usePutMemberInfo();

  const dispatch = useModalDispatch();

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

    dispatch({ type: "SHOW_MODAL", variant: "confirm" });

    editMemberInfo({
      name: input.name,
      gender: gender ?? "",
      birthYear: input.birthday,
      email: input.email,
      phoneNumber: input.phoneNumber,
    });
  };
  return (
    <Wrapper>
      <Title>회원정보</Title>
      <MemberInfoContainer onSubmit={handleSubmit}>
        <Info>
          <FieldLayout>
            <Field>{MEMBERINFO.NAME}</Field>
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
            <Field>{MEMBERINFO.GENDER}</Field>
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
          <FieldLayout style={{ width: "auto" }}>
            <Field>{MEMBERINFO.BIRTH}</Field>
            <Input
              value={input.birthday}
              placeholder="0000"
              onChange={(e) => handleChangeInput("birthday", e)}
              isError={isSubmitted && isBirthdayError}
              errorMessage={isSubmitted ? validateBirthday(input.birthday ?? "") : ""}
              style={{ width: "6.4rem" }}
            />
            <Field>{MEMBERINFO.YEAR}</Field>
          </FieldLayout>
          <FieldLayout>
            <Field>{MEMBERINFO.PHONE}</Field>
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
          <FieldLayout style={{ width: "100%" }}>
            <Field>{MEMBERINFO.EMAIL}</Field>
            <Input
              value={input.email}
              placeholder="example@email.com"
              onChange={(e) => handleChangeInput("email", e)}
              isError={isSubmitted && isEmailError}
              errorMessage={isSubmitted ? validateEmail(input.email ?? "") : ""}
            />
          </FieldLayout>
        </Info>

        <SubmitLayout>
          <Button variant="primary" width={8} type="submit">
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
  padding: 2.4rem 21.5rem 30.8rem 2.4rem;
`;

const MemberInfoContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  position: relative;
  min-width: 70.4rem;
  height: 28.8rem;
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
  width: 100%;
`;

const Title = styled.h3`
  display: flex;
  margin-bottom: 2.4rem;
  ${({ theme }) => theme.fonts.Headline5};

  white-space: nowrap;
`;

const Field = styled.h3`
  min-width: 5.6rem;
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
  width: 100%;
  margin-top: 2rem;
`;
