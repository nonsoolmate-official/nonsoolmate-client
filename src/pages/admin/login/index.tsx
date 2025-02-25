import { LogoIc } from "@assets/index";
import Button from "@components/button/Button";
import Input from "@components/input/Input";
import useLoginForm from "@pages/admin/login/hooks/useLoginForm";
import styled from "styled-components";

export default function Admin() {
  const { id, pw, handleChangeId, handleChangePw } = useLoginForm();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      handleSubmit();
    }
  };

  const handleSubmit = () => {};

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
        <Button type="submit">로그인</Button>
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

  &:nth-child(2) {
    margin-bottom: 1.2rem;
  }
`;

const Field = styled.label`
  width: 3.6rem;

  ${({ theme }) => theme.fonts.Headline5};
`;
