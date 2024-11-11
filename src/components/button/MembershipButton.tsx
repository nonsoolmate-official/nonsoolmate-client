import { commonFlex } from "style/commonStyle";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { media } from "style/responsiveStyle";

export default function MembershipButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="button"
      onClick={() => {
        navigate("/membership");
      }}>
      멤버십
    </Button>
  );
}

const Button = styled.button`
  ${commonFlex}

  ${({ theme }) => theme.fonts.Body3};

  color: ${({ theme }) => theme.colors.main_blue};

  ${media.mobile} {
    ${({ theme }) => theme.fonts.Body8};
  }
`;
