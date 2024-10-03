import Button from "@components/buttons/Button";
import Input from "@components/input/Input";
import RadioButtonGroup from "@components/radioButton/RadioButtonGroup";
import useMemberInfo from "@pages/mypage/hooks/useMemberInfo";
import { ERROR_MESSAGE } from "constants/errorMessage";
import { media } from "style/responsiveStyle";
import styled from "styled-components";

export default function MemberInfo() {
  const { input, handleChangeInput } = useMemberInfo();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 저장 시 동작하는 로직
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
              value={input.gender ?? null}
              onChange={(e) => handleChangeInput("gender", e)}
            />
          </FieldLayout>
        </Info>

        <Info>
          <FieldLayout>
            <Field>출생연도</Field>
            <Input
              value={input.birthday || ""}
              placeholder="0000"
              onChange={(e) => handleChangeInput("birthday", e)}
              isError={true}
              errorMessage={ERROR_MESSAGE.BIRTH}
              style={{ width: "6.4rem" }}
            />
            <Field>년</Field>
          </FieldLayout>
          <FieldLayout>
            <Field>전화번호</Field>
            <Input
              value={input.phoneNumber || ""}
              placeholder="000-0000-0000"
              onChange={(e) => handleChangeInput("phoneNumber", e)}
              isError={false}
              errorMessage={ERROR_MESSAGE.PHONE}
              style={{ width: "22.8rem" }}
            />
          </FieldLayout>
        </Info>

        <Info>
          <Field>이메일</Field>
          <Input
            value={input.email || ""}
            placeholder="example@email.com"
            onChange={(e) => handleChangeInput("email", e)}
            isError={false}
            errorMessage={ERROR_MESSAGE.EMAIL}
            style={{ width: "56.8rem" }}
          />
        </Info>
        <SubmitLayout>
          <Button variant="primary" size="sm" type="button">
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

const MemberInfoContainer = styled.form`
  position: relative;
  display: flex;

  flex-direction: column;

  gap: 2.8rem;

  width: 69.6rem;

  padding: 2.4rem;
  margin-left: 2.4rem;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.white};

  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.08);

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
