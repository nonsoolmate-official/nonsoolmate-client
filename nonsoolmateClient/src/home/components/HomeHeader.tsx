import styled from "styled-components";
import { commonFlex } from "style/commonStyle";
import { LogoIc, LoginInfoIc, DownArrowIc } from "@assets/index";
export default function HomeHeader() {
  return (
    <Header>
      <LogoButton type="button">
        <LogoIcon />
      </LogoButton>
      <HeaderInfo>
        <MembershipButton type="button">멤버십</MembershipButton>
        <LoginInfoButton type="button">
          <LoginInfoIcon />
          <LoginInfoBox>
            <LoginId>류가은 님</LoginId>
            <DownArrowIcon />
          </LoginInfoBox>
        </LoginInfoButton>
      </HeaderInfo>
    </Header>
  );
}

const Header = styled.header`
  ${commonFlex};

  justify-content: space-between;
  position: sticky;
  padding: 1.6rem 21.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 1.2rem 0 ${({ theme }) => theme.colors.grey_200};
`;

const LogoButton = styled.button`
  padding: 0;
  cursor: pointer;
`;

const LogoIcon = styled(LogoIc)`
  object-fit: cover;
`;

const HeaderInfo = styled.span`
  ${commonFlex};
`;

const MembershipButton = styled.button`
  ${({ theme }) => theme.fonts.Body3};

  padding: 0.4rem 1.6rem 0.4rem 0;
  color: ${({ theme }) => theme.colors.main_blue};
  cursor: pointer;
`;

const LoginInfoButton = styled.button`
  ${commonFlex};

  gap: 1rem;
  justify-content: space-between;
  padding: 0;
  cursor: pointer;
`;

const LoginInfoIcon = styled(LoginInfoIc)`
  object-fit: cover;
`;

const LoginInfoBox = styled.section`
  ${commonFlex};

  gap: 0.8rem;
  padding: 0.4rem 0;
`;

const LoginId = styled.h2`
  ${({ theme }) => theme.fonts.Body3};
`;

const DownArrowIcon = styled(DownArrowIc)`
  object-fit: cover;
`;
