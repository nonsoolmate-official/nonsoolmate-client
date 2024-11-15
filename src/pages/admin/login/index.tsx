import { LogoIc } from "@assets/index";
import Input from "@components/input/Input";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

export default function Admin() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleChangeId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleChangePw = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleSubmit = () => {};

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      handleSubmit();
    }
  };

  return (
    <Wrapper>
      <LogoIc />
      <Header>논술메이트 첨삭강사 로그인</Header>
      <LoginForm onSubmit={handleSubmit}>
        <InfoLayout>
          <Field htmlFor="id">ID</Field>
          <Input id="id" value={id} onChange={handleChangeId} onKeyDown={handleKeyDown} />
        </InfoLayout>
        <InfoLayout>
          <Field htmlFor="pw">PW</Field>
          <Input id="pw" value={pw} onChange={handleChangePw} type="password" onKeyDown={handleKeyDown} />
        </InfoLayout>
      </LoginForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* stylelint-disable-next-line unit-allowed-list */
  height: 100dvh;
`;

const Header = styled.h1`
  margin-bottom: 2.5rem;
  ${({ theme }) => theme.fonts.Headline5};

  white-space: nowrap;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
`;

const InfoLayout = styled.div`
  display: flex;
  gap: 3.1rem;
  justify-content: center;
  align-items: center;
  width: 30.2rem;
`;

const Field = styled.label`
  width: 3.6rem;

  ${({ theme }) => theme.fonts.Headline5};
`;
