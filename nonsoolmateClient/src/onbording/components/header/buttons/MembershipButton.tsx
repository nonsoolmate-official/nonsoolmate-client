import { commonFlex } from "style/commonStyle";
import styled from "styled-components";

export default function MembershipButton() {
  return <Button>멤버십</Button>;
}

const Button = styled.button`
  ${commonFlex}

  ${({ theme }) => theme.fonts.Body3};

  color: ${({ theme }) => theme.colors.main_blue};
`;
